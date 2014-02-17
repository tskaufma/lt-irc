(ns lt.plugins.irc
  (:require [lt.object :as object]
            [lt.util.load :as load]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.console :as console]
            [lt.objs.popup :as popup]
            [lt.util.cljs :refer [js->clj]]
            [lt.util.dom :as dom]

            [clojure.string :as string]

            [crate.binding :refer [bound subatom]])
  (:require-macros [lt.macros :refer [defui behavior extract]]))

(def irc (load/node-module "irc"))

(object/object* ::irc-client
                :name "IRC Client"
                :behaviors [::log-event ::on-close-destroy ::on-destory-disconnect]
                :init (fn [this]
                        [:div
                         [:p (join-button this "#lighttable-irc-test")]
                         [:div {:style "overflow:scroll"}
                           (bound this ui)]
                         ]
                        ))

(defn connect [irc-client server nickname]
  (let [client (let [Client (.-Client irc)]
                 (new Client server nickname))]
    (object/merge! irc-client {:client client
                               :nickname nickname
                               :server server
                               :info {
                                      :name (str nickname "@" server)}})
    (.addListener client "message"
                  (fn [from to message]
                    (object/raise irc-client :message from to message)))
    (.addListener client "error"
                  (fn [message]
                    (console/error (str "an error occured " (aget message "command") ". " (aget message "args")))))
    ))

(object/object* ::irc-window
                :name "IRC Window"
                :behaviors [::log-event ::send-message ::on-close-destroy ::on-destory-part]
                :init (fn [this client channel]
                        (object/merge! this {:client client
                                             :channel channel
                                             :info {
                                                    :name channel}})
                        (.addListener (:client @client) (str "message" channel)
                                        (fn [from text message]
                                          (object/raise this :message from channel text)))
                        (.join (:client @client) channel)
                        [:div
                         [:div {:style "overflow:scroll"}
                           (bound this ui)]
                         [:div {:style "position:absolute; bottom:0px; width: 100%;"}
                           (input-text this)
                           (send-button this)
                          ]
                         ]
                         ))

(defui ui [this]
  [:div
   [:ul
    (for [msg (reverse (:messages this))]
      [:li (str "" (:to msg) ": <" (:from msg) "> " (:message msg) "")]
     )
    ]])

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
  [:input {:type "submit" :value "Send" :style "width: 13%;"}]
                            :click (fn [e]
                                     (handle-message this)))

(defui join-button [this channel]
  [:input {:type submit :value (str "Join " channel)}]
  :click (fn [e]
           (tabs/add-or-focus! (object/create ::irc-window this channel)))
  )

(behavior ::log-event
          :triggers #{:message}
          :reaction (fn [this from to message]
                      ;(console/log (str from " => " to ": " message))
                      (object/merge! this {:messages (conj (:messages @this) {:from from :to to :message message})})
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
                      (object/raise this :destroy)))

(behavior ::on-destory-part
          :triggers #{:destroy}
          :reaction (fn [this]
                      (let [client (:client @(:client @this))]
                        (.part client (:channel @this)))))

(behavior ::on-destory-disconnect
          :triggers #{:destroy}
          :reaction (fn [this]
                      (let [client (:client @this)]
                        (.disconnect client))))

;(def tk (object/create ::tk))

;(tabs/add-or-focus! tk)



;(def client (let [Client (.-Client irc)]
;  (new Client "irc.freenode.net" "tskaufma4")))

;(defn msg-recieved [from to message]
;  ;(console/error (str "MSG: " message " !"))
;  (object/raise tk :message from to message)
;  )

;(.addListener client "message" msg-recieved)

;(.addListener client "error" (fn [message] (console/error (str "an error occured"))))

;(.join client "#lighttable-irc-test")

;(.part client "#lighttable-irc-test")

;(.say client "#lighttable-irc-test" "test")

;(.disconnect client)

(defui popup-input []
  [:input {:type "text"}])

(cmd/command {:command :connect-irc-server
              :desc "IRC: Connect to an irc server."
              :exec (fn []
                      (let [server (popup-input)
                            nickname (popup-input)]
                        (popup/popup!
                         {
                          :header "TK Test Popup"
                          :body [:div
                                 [:p "Did this work?"]
                                 [:label "Server: "]
                                 server

                                 [:label "Nickname: "]
                                 nickname

                                 [:p "Woof"]
                                 ]
                          :buttons [{:label "cancel"}
                                    {:label "connect"
                                     :action (fn []
                                               (let [server (dom/val server)
                                                     nickname (dom/val nickname)
                                                     irc-client (object/create ::irc-client)]
                                                 (console/log (str "Server: " server " Nickname: " nickname))
                                                 (connect irc-client server nickname)
                                                 (tabs/add-or-focus! irc-client)
                                                 ))}]
                          })))})
