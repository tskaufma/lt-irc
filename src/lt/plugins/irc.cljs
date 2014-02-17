(ns lt.plugins.irc
  (:require [lt.object :as object]
            [lt.util.load :as load]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.console :as console]
            [lt.objs.plugins :as plugins]
            [lt.objs.popup :as popup]
            [lt.util.cljs :refer [js->clj]]
            [lt.util.dom :as dom]

            [clojure.string :as string]

            [crate.binding :refer [bound subatom]])
  (:require-macros [lt.macros :refer [defui behavior extract]]))

(def irc (js/require (plugins/local-module "lt-irc" "irc")))

(object/object* ::irc-client
                :name "IRC Client"
                :behaviors [::log-raw ::on-close-destroy ::on-destory-disconnect]
                :init (fn [this]
                        [:div
                         [:p (join-button this)]
                         [:div {:style "overflow:scroll;width:100%;height:90%;"}
                           (bound this ui-raw)]
                         ]
                        ))

(defn connect [irc-client server nickname]
  (let [client (let [Client (.-Client irc)]
                 (new Client server nickname))]
    (object/merge! irc-client {:client client
                               :nickname nickname
                               :server server
                               :info {:name (str nickname "@" server)}})
    (.addListener client "raw"
                  (fn [message]
                    (object/raise irc-client :raw message)))
    (.addListener client "error"
                  (fn [message]
                    (console/error (str "an error occured " (aget message "command") ". " (aget message "args")))))
    ))


(defn add-listener [this client event listener]
  (object/merge! this {:irc-events (conj (:irc-events @this) {:event event :listener listener})})
  (.addListener client event listener)
  ;(console/log (str "Added Listener for [" event "]"))
 )

(defn remove-listeners [this client]
  (map #(.removeAllListeners client (:event %)) (:irc-events @this))
  (object/merge! this {:irc-events []}))

(object/object* ::irc-window
                :name "IRC Window"
                :behaviors [::log-event ::send-message ::on-close-destroy ::on-destory-part]
                :init (fn [this client channel]
                        (object/merge! this {:client client
                                             :channel channel
                                             :info {:name channel}
                                             })
                        (let [c (:client @client)]
                          (add-listener this c (str "message" channel)
                                        (fn [from text message]
                                          (object/raise this :message from channel text)))
                          (add-listener this c (str "names" channel)
                                        (fn [nicks]
                                          ;(console/log (str "names-listener " (js->clj nicks)))
                                          (object/merge! this {:nicks (js->clj nicks)})))
                          (.join c channel)
                          )

                        [:div {:style "width:100%" }
                         [:div {:style "border: 0px solid red;float:right;width:20%"}
                          [:h2 "Nicks"]
                          [:div {:style "overflow:scroll; width:100%;height:90%;"}
                           (bound (subatom this :nicks) nick-list)]
                          ;[:div {:style "overflow:scroll; width:100%;height:50%;"}
                          ; (bound (subatom this :irc-events) (fn [ls]
                          ;                                    [:ul
                          ;                                     (for [l ls]
                          ;                                       [:li (str "e: " (:event l))])
                          ;                                     ]))]
                          ]
                         [:div {:style "border: 0px solid pink;float:left;width:80%;"}
                          [:div {:style "overflow:scroll; width:100%;height:95%;"}
                           (bound this ui)]
                          [:div {:style "position:absolute; bottom:0px; width: 100%;"}
                           [:span (:nickname @client)]
                            (send-button this)
                            (input-text this)
                           ]
                          ]
                         ]
                        ))

(defn decimal-parts
  "split a 1 or 2 digit number into its decimal parts
   e.g. 53 => [5 3], 9 => [0 9]"
  [n]
  [(quot n 10) (mod n 10)])

(defn format-time [date]
  (str "" (reduce str "" (decimal-parts (.getHours date))) ":" (reduce str "" (decimal-parts (.getMinutes date)))))

(defui ui [this]
  [:div
   [:ul
    (for [msg (reverse (:messages this))]
      [:li (str "[" (format-time (:time msg)) "] <" (:from msg) "> " (:message msg) "")]
     )
    ]])

(defui ui-raw [this]
  [:div
   [:ul
    (for [msg (reverse (:raw-msgs this))]
      [:li (str "[" (format-time (:time msg)) "] " (aget (:message msg) "command") ". " (aget (:message msg) "args") "")]
     )
    ]])

(defui nick-list [nicks]
  [:ul
   (for [[nick status] nicks]
     [:li (str status nick)])
   ])

(defn handle-message [this]
  (let [info (extract (object/->content this)
               [text :.text]
               {:text (dom/val text)})]
       (object/raise this :send (:nickname @(:client @this)) (:channel @this) (:text info)))
       (dom/val (dom/$ ".text" (object/->content this)) ""))

(defui input-text [this]
  [:input.text {:type "text" :style "width: 85%"}]
   :keydown (fn [e]
              (if (= (aget e "keyCode") 13)
                (handle-message this))))

(defui send-button [this]
  [:input {:type "submit" :value "Send"}]
                            :click (fn [e]
                                     (handle-message this)))

(defui join-button [this]
  [:input {:type submit :value (str "Join a channel")}]
  :click (fn [e]
           (let [channel (popup-input)]
             (popup/popup!
              {
               :header "Connect to IRC Channel"
                          :body [:div
                                 [:p "Enter channel to join."]
                                 [:label "Channel: "]
                                 channel
                                 ]
                          :buttons [{:label "cancel"}
                                    {:label "connect"
                                     :action (fn []
                                               (let [channel (dom/val channel)]
                                                 ;(console/log (str "Joining Channel " channel))
                                                 (tabs/add-or-focus! (object/create ::irc-window this channel)))
                                               )}]
               }))))

(behavior ::log-event
          :triggers #{:message}
          :reaction (fn [this from to message]
                      (object/merge! this {:messages (conj (:messages @this) {:from from
                                                                              :to to
                                                                              :message message
                                                                              :time (js/Date.)})})
                     ))

(behavior ::log-raw
          :triggers #{:raw}
          :reaction (fn [this message]
                      (object/merge! this {:raw-msgs (conj (:raw-msgs @this) {:message message
                                                                              :time (js/Date.)})})
                     ))

(behavior ::send-message
          :triggers #{:send}
          :reaction (fn [this from to message]
                      (.say (:client @(:client @this)) to message)
                      (object/raise this :message from to message)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :pre-destroy)
                      (object/raise this :destroy)
                      (object/destroy! this)))

(behavior ::on-destory-part
          :triggers #{:pre-destroy}
          :reaction (fn [this]
                      (let [client (:client @(:client @this))]
                        (.part client (:channel @this))
                        (remove-listeners this client)
                        )
                      ))

(behavior ::on-destory-disconnect
          :triggers #{:pre-destroy}
          :reaction (fn [this]
                      (let [client (:client @this)]
                        (.disconnect client)
                        (.removeAllListeners client))
                      ))

(defui popup-input []
  [:input {:type "text"}])

(cmd/command {:command :connect-irc-server
              :desc "IRC: Connect to an irc server."
              :exec (fn []
                      (let [server (popup-input)
                            nickname (popup-input)]
                        (popup/popup!
                         {
                          :header "Connect to IRC Server"
                          :body [:div
                                 [:p "Enter server to connect to and Nickname to use."]
                                 [:label "Server: "]
                                 server

                                 [:label "Nickname: "]
                                 nickname
                                 ]
                          :buttons [{:label "cancel"}
                                    {:label "connect"
                                     :action (fn []
                                               (let [server (dom/val server)
                                                     nickname (dom/val nickname)
                                                     irc-client (object/create ::irc-client)]
                                                ; (console/log (str "Server: " server " Nickname: " nickname))
                                                 (connect irc-client server nickname)
                                                 (tabs/add-or-focus! irc-client)
                                                 ))}]
                          })))})
