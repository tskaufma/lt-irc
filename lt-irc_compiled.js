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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","tk","lt.plugins.irc/tk",2752415096),new cljs.core.Keyword(null,"name","name",1017277949),"TK",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll"], null),crate.binding.bound.call(null,this$,lt.plugins.irc.ui)], null);
}));
lt.plugins.irc.ui = (function ui(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__8761(s__8762){return (new cljs.core.LazySeq(null,(function (){var s__8762__$1 = s__8762;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8762__$1);if(temp__4092__auto__)
{var s__8762__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8762__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8762__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8764 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8763 = 0;while(true){
if((i__8763 < size__7465__auto__))
{var msg = cljs.core._nth.call(null,c__7464__auto__,i__8763);cljs.core.chunk_append.call(null,b__8764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(""),cljs.core.str(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null));
{
var G__8771 = (i__8763 + 1);
i__8763 = G__8771;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8764),iter__8761.call(null,cljs.core.chunk_rest.call(null,s__8762__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8764),null);
}
} else
{var msg = cljs.core.first.call(null,s__8762__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(""),cljs.core.str(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null),iter__8761.call(null,cljs.core.rest.call(null,s__8762__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(this$)));
})()], null)], null));var seq__8765_8772 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8766_8773 = null;var count__8767_8774 = 0;var i__8768_8775 = 0;while(true){
if((i__8768_8775 < count__8767_8774))
{var vec__8769_8776 = cljs.core._nth.call(null,chunk__8766_8773,i__8768_8775);var ev__8118__auto___8777 = cljs.core.nth.call(null,vec__8769_8776,0,null);var func__8119__auto___8778 = cljs.core.nth.call(null,vec__8769_8776,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8777,func__8119__auto___8778);
{
var G__8779 = seq__8765_8772;
var G__8780 = chunk__8766_8773;
var G__8781 = count__8767_8774;
var G__8782 = (i__8768_8775 + 1);
seq__8765_8772 = G__8779;
chunk__8766_8773 = G__8780;
count__8767_8774 = G__8781;
i__8768_8775 = G__8782;
continue;
}
} else
{var temp__4092__auto___8783 = cljs.core.seq.call(null,seq__8765_8772);if(temp__4092__auto___8783)
{var seq__8765_8784__$1 = temp__4092__auto___8783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8765_8784__$1))
{var c__7497__auto___8785 = cljs.core.chunk_first.call(null,seq__8765_8784__$1);{
var G__8786 = cljs.core.chunk_rest.call(null,seq__8765_8784__$1);
var G__8787 = c__7497__auto___8785;
var G__8788 = cljs.core.count.call(null,c__7497__auto___8785);
var G__8789 = 0;
seq__8765_8772 = G__8786;
chunk__8766_8773 = G__8787;
count__8767_8774 = G__8788;
i__8768_8775 = G__8789;
continue;
}
} else
{var vec__8770_8790 = cljs.core.first.call(null,seq__8765_8784__$1);var ev__8118__auto___8791 = cljs.core.nth.call(null,vec__8770_8790,0,null);var func__8119__auto___8792 = cljs.core.nth.call(null,vec__8770_8790,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8791,func__8119__auto___8792);
{
var G__8793 = cljs.core.next.call(null,seq__8765_8784__$1);
var G__8794 = null;
var G__8795 = 0;
var G__8796 = 0;
seq__8765_8772 = G__8793;
chunk__8766_8773 = G__8794;
count__8767_8774 = G__8795;
i__8768_8775 = G__8796;
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
lt.plugins.irc.__BEH__log_event = (function __BEH__log_event(this$,from,to,message){return lt.object.merge_BANG_.call(null,lt.plugins.irc.tk,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.conj.call(null,new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1017056028),from,new cljs.core.Keyword(null,"to","to",1013907949),to,new cljs.core.Keyword(null,"message","message",1968829305),message], null))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__log_event,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",1968829305),null], null), null));
lt.plugins.irc.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8797 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8797))
{var ts_8798 = temp__4092__auto___8797;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8798))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8798);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.irc.tk = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.irc","tk","lt.plugins.irc/tk",2752415096));
lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.irc.tk);
lt.plugins.irc.irc = lt.util.load.node_module.call(null,"irc");
lt.plugins.irc.client = (function (){var Client = lt.plugins.irc.irc.Client;return (new Client("irc.freenode.net","tskaufma4"));
})();
lt.plugins.irc.msg_recieved = (function msg_recieved(from,to,message){return lt.object.raise.call(null,lt.plugins.irc.tk,new cljs.core.Keyword(null,"message","message",1968829305),from,to,message);
});
lt.plugins.irc.client.addListener("message",lt.plugins.irc.msg_recieved);
lt.plugins.irc.client.addListener("error",(function (message){return lt.objs.console.error.call(null,[cljs.core.str("an error occured")].join(''));
}));
lt.plugins.irc.client.join("#lighttable-irc-test");
lt.plugins.irc.client.part("#lighttable-irc-test");
lt.plugins.irc.client.say("#lighttable-irc-test","test");
lt.plugins.irc.client.disconnect();
}

//# sourceMappingURL=lt-irc_compiled.js.map