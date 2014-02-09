if(!lt.util.load.provided_QMARK_('lt.plugins.irc')) {
goog.provide('lt.plugins.irc');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.cljs');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","tk","lt.plugins.irc/tk",2752415096),new cljs.core.Keyword(null,"name","name",1017277949),"TK",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.irc.ui.call(null,this$);
}));
lt.plugins.irc.ui = (function ui(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null));var seq__8735_8741 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8736_8742 = null;var count__8737_8743 = 0;var i__8738_8744 = 0;while(true){
if((i__8738_8744 < count__8737_8743))
{var vec__8739_8745 = cljs.core._nth.call(null,chunk__8736_8742,i__8738_8744);var ev__8118__auto___8746 = cljs.core.nth.call(null,vec__8739_8745,0,null);var func__8119__auto___8747 = cljs.core.nth.call(null,vec__8739_8745,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8746,func__8119__auto___8747);
{
var G__8748 = seq__8735_8741;
var G__8749 = chunk__8736_8742;
var G__8750 = count__8737_8743;
var G__8751 = (i__8738_8744 + 1);
seq__8735_8741 = G__8748;
chunk__8736_8742 = G__8749;
count__8737_8743 = G__8750;
i__8738_8744 = G__8751;
continue;
}
} else
{var temp__4092__auto___8752 = cljs.core.seq.call(null,seq__8735_8741);if(temp__4092__auto___8752)
{var seq__8735_8753__$1 = temp__4092__auto___8752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8735_8753__$1))
{var c__7497__auto___8754 = cljs.core.chunk_first.call(null,seq__8735_8753__$1);{
var G__8755 = cljs.core.chunk_rest.call(null,seq__8735_8753__$1);
var G__8756 = c__7497__auto___8754;
var G__8757 = cljs.core.count.call(null,c__7497__auto___8754);
var G__8758 = 0;
seq__8735_8741 = G__8755;
chunk__8736_8742 = G__8756;
count__8737_8743 = G__8757;
i__8738_8744 = G__8758;
continue;
}
} else
{var vec__8740_8759 = cljs.core.first.call(null,seq__8735_8753__$1);var ev__8118__auto___8760 = cljs.core.nth.call(null,vec__8740_8759,0,null);var func__8119__auto___8761 = cljs.core.nth.call(null,vec__8740_8759,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8760,func__8119__auto___8761);
{
var G__8762 = cljs.core.next.call(null,seq__8735_8753__$1);
var G__8763 = null;
var G__8764 = 0;
var G__8765 = 0;
seq__8735_8741 = G__8762;
chunk__8736_8742 = G__8763;
count__8737_8743 = G__8764;
i__8738_8744 = G__8765;
continue;
}
}
} else
{}
}
break;
}
return e__8117__auto__;
});
lt.plugins.irc.__BEH__log_event = (function __BEH__log_event(from,to,message){return lt.objs.console.log.call(null,[cljs.core.str(from),cljs.core.str(" => "),cljs.core.str(to),cljs.core.str(": "),cljs.core.str(message)].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__log_event,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",1968829305),null], null), null));
lt.plugins.irc.tk = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.irc","tk","lt.plugins.irc/tk",2752415096));
lt.plugins.irc.irc = lt.util.load.node_module.call(null,"irc");
lt.plugins.irc.client = (function (){var Client = lt.plugins.irc.irc.Client;return (new Client("irc.freenode.net","tskaufma3",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channels","channels",2446530370),cljs.core.list("#lighttable")], null)));
})();
lt.plugins.irc.client.addListener("message",(function (from,to,message){return lt.objs.console.error.call(null,"a message recieved");
}));
lt.plugins.irc.client.addListener("error",(function (message){return lt.objs.console.error.call(null,"an error occured");
}));
lt.plugins.irc.client.join("#lighttable");
lt.plugins.irc.client.part("#lighttable");
lt.plugins.irc.client.say("#lighttable","test");
lt.plugins.irc.client.disconnect();
}

//# sourceMappingURL=lt-irc_compiled.js.map