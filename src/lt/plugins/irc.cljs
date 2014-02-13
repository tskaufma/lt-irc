(ns lt.plugins.irc
  (:require [lt.object :as object]
            [lt.util.load :as load]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.console :as console]
            [lt.util.cljs :refer [js->clj]]
            [lt.util.dom :as dom]

            [clojure.string :as string]

            [crate.binding :refer [bound subatom]])
  (:require-macros [lt.macros :refer [defui behavior extract]]))

(object/object* ::tk
                :name "TK"
                :behaviors [::log-event ::send-message ::on-close-destroy]
                :init (fn [this]
                        [:div
                         [:div {:style "overflow:scroll"}
                           (bound this ui)]
                         [:div {:style "position:absolute; bottom:0px; width: 100%;"}
                           [:input.text {:type "text" :style "width: 85%"}]
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

(defui send-button [this]
  [:input {:type "submit" :value "Send" :style "width: 13%;"}]
                            :click (fn [e]
                                     (let [info (extract (object/->content this)
                                              [text :.text]
                                              {:text (dom/val text)})]
                                     (object/raise this :send "tskaufma4" "#lighttable-irc-test" (:text info)))
                                     (dom/val (dom/$ ".text" (object/->content this)) "")))

(behavior ::log-event
          :triggers #{:message}
          :reaction (fn [this from to message]
                      ;(console/log (str from " => " to ": " message))
                      (object/merge! tk {:messages (conj (:messages @this) {:from from :to to :message message})})
                     ))

(behavior ::send-message
          :triggers #{:send}
          :reaction (fn [this from to message]
                      (.say client to message)
                      (object/raise this :message from to message)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))


(def tk (object/create ::tk))

(tabs/add-or-focus! tk)

(def irc (load/node-module "irc"))

(def client (let [Client (.-Client irc)]
  (new Client "irc.freenode.net" "tskaufma4")))

(defn msg-recieved [from to message]
  ;(console/error (str "MSG: " message " !"))
  (object/raise tk :message from to message)
  )

(.addListener client "message" msg-recieved)

(.addListener client "error" (fn [message] (console/error (str "an error occured"))))

(.join client "#lighttable-irc-test")

(.part client "#lighttable-irc-test")

(.say client "#lighttable-irc-test" "test")

(.disconnect client)

