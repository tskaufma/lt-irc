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
                :behaviors [::log-event]
                :init (fn [this]
                        (ui this)))

(defui ui [this]
  [:div])

(behavior ::log-event
          :triggers #{:message}
          :reaction (fn [from to message]
                      (console/log (str from " => " to ": " message))))

(def tk (object/create ::tk))
(def irc (load/node-module "irc"))

(def client (let [Client (.-Client irc)]
  (new Client "irc.freenode.net" "tskaufma3" {:channels '("#lighttable")})))

(.addListener client "message" (fn [from to message]
                                 (console/error "a message recieved")
                                 ;(object/raise tk :message from to message)
                                 ))

(.addListener client "error" (fn [message] (console/error "an error occured")))

(.join client "#lighttable")

(.part client "#lighttable")

(.say client "#lighttable" "test")

(.disconnect client)

