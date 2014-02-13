(ns lt.plugins.irc
  (:require [lt.object :as object]
            [lt.util.load :as load]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.console :as console]
            [lt.util.cljs :refer [js->clj]]

            [clojure.string :as string]

            [crate.binding :refer [bound subatom]])
  (:require-macros [lt.macros :refer [defui behavior]]))

(object/object* ::tk
                :name "TK"
                :behaviors [::log-event ::on-close-destroy]
                :init (fn [this]
                        [:div {:style "overflow:scroll"}
                         (bound this ui)]))

(defui ui [this]
  [:div
   [:ul
    (for [msg (reverse (:messages this))]
      [:li (str "" (:to msg) ": <" (:from msg) "> " (:message msg) "")]
     )
    ]])

(behavior ::log-event
          :triggers #{:message}
          :reaction (fn [this from to message]
                      ;(console/log (str from " => " to ": " message))
                      (object/merge! tk {:messages (conj (:messages @this) {:from from :to to :message message})})
                     ))

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

