if(!lt.util.load.provided_QMARK_('lt.plugins.irc')) {
goog.provide('lt.plugins.irc');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.cljs');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","tk","lt.plugins.irc/tk",2752415096),new cljs.core.Keyword(null,"name","name",1017277949),"TK",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword("lt.plugins.irc","send-message","lt.plugins.irc/send-message",4600947067),new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll"], null),crate.binding.bound.call(null,this$,lt.plugins.irc.ui)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"position:absolute; bottom:0px; width: 100%;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.text","input.text",2355324995),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"style","style",1123684643),"width: 85%"], null)], null),lt.plugins.irc.send_button.call(null,this$)], null)], null);
}));
lt.plugins.irc.ui = (function ui(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__9121(s__9122){return (new cljs.core.LazySeq(null,(function (){var s__9122__$1 = s__9122;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9122__$1);if(temp__4092__auto__)
{var s__9122__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9122__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9122__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9124 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9123 = 0;while(true){
if((i__9123 < size__7465__auto__))
{var msg = cljs.core._nth.call(null,c__7464__auto__,i__9123);cljs.core.chunk_append.call(null,b__9124,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(""),cljs.core.str(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null));
{
var G__9143 = (i__9123 + 1);
i__9123 = G__9143;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9124),iter__9121.call(null,cljs.core.chunk_rest.call(null,s__9122__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9124),null);
}
} else
{var msg = cljs.core.first.call(null,s__9122__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(""),cljs.core.str(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null),iter__9121.call(null,cljs.core.rest.call(null,s__9122__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(this$)));
})()], null)], null));var seq__9125_9144 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9126_9145 = null;var count__9127_9146 = 0;var i__9128_9147 = 0;while(true){
if((i__9128_9147 < count__9127_9146))
{var vec__9129_9148 = cljs.core._nth.call(null,chunk__9126_9145,i__9128_9147);var ev__8118__auto___9149 = cljs.core.nth.call(null,vec__9129_9148,0,null);var func__8119__auto___9150 = cljs.core.nth.call(null,vec__9129_9148,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9149,func__8119__auto___9150);
{
var G__9151 = seq__9125_9144;
var G__9152 = chunk__9126_9145;
var G__9153 = count__9127_9146;
var G__9154 = (i__9128_9147 + 1);
seq__9125_9144 = G__9151;
chunk__9126_9145 = G__9152;
count__9127_9146 = G__9153;
i__9128_9147 = G__9154;
continue;
}
} else
{var temp__4092__auto___9155 = cljs.core.seq.call(null,seq__9125_9144);if(temp__4092__auto___9155)
{var seq__9125_9156__$1 = temp__4092__auto___9155;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9125_9156__$1))
{var c__7497__auto___9157 = cljs.core.chunk_first.call(null,seq__9125_9156__$1);{
var G__9158 = cljs.core.chunk_rest.call(null,seq__9125_9156__$1);
var G__9159 = c__7497__auto___9157;
var G__9160 = cljs.core.count.call(null,c__7497__auto___9157);
var G__9161 = 0;
seq__9125_9144 = G__9158;
chunk__9126_9145 = G__9159;
count__9127_9146 = G__9160;
i__9128_9147 = G__9161;
continue;
}
} else
{var vec__9130_9162 = cljs.core.first.call(null,seq__9125_9156__$1);var ev__8118__auto___9163 = cljs.core.nth.call(null,vec__9130_9162,0,null);var func__8119__auto___9164 = cljs.core.nth.call(null,vec__9130_9162,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9163,func__8119__auto___9164);
{
var G__9165 = cljs.core.next.call(null,seq__9125_9156__$1);
var G__9166 = null;
var G__9167 = 0;
var G__9168 = 0;
seq__9125_9144 = G__9165;
chunk__9126_9145 = G__9166;
count__9127_9146 = G__9167;
i__9128_9147 = G__9168;
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
lt.plugins.irc.send_button = (function send_button(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),"Send",new cljs.core.Keyword(null,"style","style",1123684643),"width: 13%;"], null)], null));var seq__9137_9169 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var info_9173 = (function (){var text = lt.util.dom.$.call(null,new cljs.core.Keyword(null,".text",".text",1059942861),lt.object.__GT_content.call(null,this$));return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),lt.util.dom.val.call(null,text)], null);
})();lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"send","send",1017430778),"tskaufma4","#lighttable-irc-test",new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(info_9173));
return lt.util.dom.val.call(null,lt.util.dom.$.call(null,".text",lt.object.__GT_content.call(null,this$)),"");
})], null)));var chunk__9138_9170 = null;var count__9139_9171 = 0;var i__9140_9172 = 0;while(true){
if((i__9140_9172 < count__9139_9171))
{var vec__9141_9174 = cljs.core._nth.call(null,chunk__9138_9170,i__9140_9172);var ev__8118__auto___9175 = cljs.core.nth.call(null,vec__9141_9174,0,null);var func__8119__auto___9176 = cljs.core.nth.call(null,vec__9141_9174,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9175,func__8119__auto___9176);
{
var G__9177 = seq__9137_9169;
var G__9178 = chunk__9138_9170;
var G__9179 = count__9139_9171;
var G__9180 = (i__9140_9172 + 1);
seq__9137_9169 = G__9177;
chunk__9138_9170 = G__9178;
count__9139_9171 = G__9179;
i__9140_9172 = G__9180;
continue;
}
} else
{var temp__4092__auto___9181 = cljs.core.seq.call(null,seq__9137_9169);if(temp__4092__auto___9181)
{var seq__9137_9182__$1 = temp__4092__auto___9181;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9137_9182__$1))
{var c__7497__auto___9183 = cljs.core.chunk_first.call(null,seq__9137_9182__$1);{
var G__9184 = cljs.core.chunk_rest.call(null,seq__9137_9182__$1);
var G__9185 = c__7497__auto___9183;
var G__9186 = cljs.core.count.call(null,c__7497__auto___9183);
var G__9187 = 0;
seq__9137_9169 = G__9184;
chunk__9138_9170 = G__9185;
count__9139_9171 = G__9186;
i__9140_9172 = G__9187;
continue;
}
} else
{var vec__9142_9188 = cljs.core.first.call(null,seq__9137_9182__$1);var ev__8118__auto___9189 = cljs.core.nth.call(null,vec__9142_9188,0,null);var func__8119__auto___9190 = cljs.core.nth.call(null,vec__9142_9188,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9189,func__8119__auto___9190);
{
var G__9191 = cljs.core.next.call(null,seq__9137_9182__$1);
var G__9192 = null;
var G__9193 = 0;
var G__9194 = 0;
seq__9137_9169 = G__9191;
chunk__9138_9170 = G__9192;
count__9139_9171 = G__9193;
i__9140_9172 = G__9194;
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
lt.plugins.irc.__BEH__send_message = (function __BEH__send_message(this$,from,to,message){lt.plugins.irc.client.say(to,message);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),from,to,message);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","send-message","lt.plugins.irc/send-message",4600947067),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__send_message,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send","send",1017430778),null], null), null));
lt.plugins.irc.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___9195 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9195))
{var ts_9196 = temp__4092__auto___9195;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9196))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9196);
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