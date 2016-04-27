(ns lt.plugins.logic-test-plugin
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [cljs.core.logic :as logic])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui hello-panel [this]
  [:h1 "Hello from logic-test-plugin"])

(object/object* ::logic-test-plugin.hello
                :tags [:logic-test-plugin.hello]
                :behaviors [::on-close-destroy]
                :name "logic-test-plugin"
                :init (fn [this]
                        (hello-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :desc "logic-test-plugin: Close tab and tabset as well if last tab"
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def hello (object/create ::logic-test-plugin.hello))

(cmd/command {:command ::say-hello
              :desc "logic-test-plugin: Say Hello"
              :exec (fn []
                      (logic/prep '(+ 1 1))
                      (tabs/add-or-focus! hello))})
