if(!lt.util.load.provided_QMARK_('lt.plugins.irc')) {
goog.provide('lt.plugins.irc');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.cljs');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
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
lt.plugins.irc.irc = lt.util.load.node_module.call(null,"irc");
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-client","lt.plugins.irc/irc-client",1143341983),new cljs.core.Keyword(null,"name","name",1017277949),"IRC Client",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.irc","log-raw","lt.plugins.irc/log-raw",2411332128),new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136),new cljs.core.Keyword("lt.plugins.irc","on-destory-disconnect","lt.plugins.irc/on-destory-disconnect",3271028380)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),lt.plugins.irc.join_button.call(null,this$,"#lighttable-irc-test")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll;width:100%;height:90%;"], null),crate.binding.bound.call(null,this$,lt.plugins.irc.ui_raw)], null)], null);
}));
lt.plugins.irc.connect = (function connect(irc_client,server,nickname){var client = (function (){var Client = lt.plugins.irc.irc.Client;return (new Client(server,nickname));
})();lt.object.merge_BANG_.call(null,irc_client,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"nickname","nickname",1084595168),nickname,new cljs.core.Keyword(null,"server","server",4403045045),server,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str(nickname),cljs.core.str("@"),cljs.core.str(server)].join('')], null)], null));
client.addListener("raw",(function (message){return lt.object.raise.call(null,irc_client,new cljs.core.Keyword(null,"raw","raw",1014016922),message);
}));
return client.addListener("error",(function (message){return lt.objs.console.error.call(null,[cljs.core.str("an error occured "),cljs.core.str((message["command"])),cljs.core.str(". "),cljs.core.str((message["args"]))].join(''));
}));
});
lt.plugins.irc.add_listener = (function add_listener(this$,client,event,listener){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"irc-events","irc-events",2694606174),cljs.core.conj.call(null,new cljs.core.Keyword(null,"irc-events","irc-events",2694606174).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),event,new cljs.core.Keyword(null,"listener","listener",2360064038),listener], null))], null));
client.addListener(event,listener);
return lt.objs.console.log.call(null,[cljs.core.str("Added Listener for ["),cljs.core.str(event),cljs.core.str("]")].join(''));
});
lt.plugins.irc.remove_listeners = (function remove_listeners(this$,client){cljs.core.map.call(null,(function (p1__29756_SHARP_){return client.removeAllListeners(new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(p1__29756_SHARP_));
}),new cljs.core.Keyword(null,"irc-events","irc-events",2694606174).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"irc-events","irc-events",2694606174),cljs.core.PersistentVector.EMPTY], null));
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-window","lt.plugins.irc/irc-window",639445884),new cljs.core.Keyword(null,"name","name",1017277949),"IRC Window",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword("lt.plugins.irc","send-message","lt.plugins.irc/send-message",4600947067),new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136),new cljs.core.Keyword("lt.plugins.irc","on-destory-part","lt.plugins.irc/on-destory-part",2717239859)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client,channel){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"channel","channel",1752854645),channel,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),channel], null)], null));
var c_29881 = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client));lt.plugins.irc.add_listener.call(null,this$,c_29881,[cljs.core.str("message"),cljs.core.str(channel)].join(''),(function (from,text,message){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),from,channel,text);
}));
lt.plugins.irc.add_listener.call(null,this$,c_29881,[cljs.core.str("names"),cljs.core.str(channel)].join(''),(function (nicks){lt.objs.console.log.call(null,[cljs.core.str("names-listener "),cljs.core.str(lt.util.cljs.js__GT_clj.call(null,nicks))].join(''));
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nicks","nicks",1118718178),lt.util.cljs.js__GT_clj.call(null,nicks)], null));
}));
c_29881.join(channel);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"width:100%"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"border: 0px solid red;float:right;width:20%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Nicks"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll; width:100%;height:50%;"], null),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.Keyword(null,"nicks","nicks",1118718178)),lt.plugins.irc.nick_list)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll; width:100%;height:50%;"], null),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.Keyword(null,"irc-events","irc-events",2694606174)),(function (ls){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__29757(s__29758){return (new cljs.core.LazySeq(null,(function (){var s__29758__$1 = s__29758;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29758__$1);if(temp__4092__auto__)
{var s__29758__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29758__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__29758__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__29760 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__29759 = 0;while(true){
if((i__29759 < size__7465__auto__))
{var l = cljs.core._nth.call(null,c__7464__auto__,i__29759);cljs.core.chunk_append.call(null,b__29760,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("e: "),cljs.core.str(new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(l))].join('')], null));
{
var G__29882 = (i__29759 + 1);
i__29759 = G__29882;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29760),iter__29757.call(null,cljs.core.chunk_rest.call(null,s__29758__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29760),null);
}
} else
{var l = cljs.core.first.call(null,s__29758__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("e: "),cljs.core.str(new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(l))].join('')], null),iter__29757.call(null,cljs.core.rest.call(null,s__29758__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,ls);
})()], null);
}))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"border: 0px solid pink;float:left;width:80%;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll; width:100%;height:95%;"], null),crate.binding.bound.call(null,this$,lt.plugins.irc.ui)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"position:absolute; bottom:0px; width: 100%;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.Keyword(null,"nickname","nickname",1084595168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))], null),lt.plugins.irc.send_button.call(null,this$),lt.plugins.irc.input_text.call(null,this$)], null)], null)], null);
}));
/**
* split a 1 or 2 digit number into its decimal parts
* e.g. 53 => [5 3], 9 => [0 9]
*/
lt.plugins.irc.decimal_parts = (function decimal_parts(n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot.call(null,n,10),cljs.core.mod.call(null,n,10)], null);
});
lt.plugins.irc.format_time = (function format_time(date){return [cljs.core.str(""),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",lt.plugins.irc.decimal_parts.call(null,date.getHours()))),cljs.core.str(":"),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",lt.plugins.irc.decimal_parts.call(null,date.getMinutes())))].join('');
});
lt.plugins.irc.ui = (function ui(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__29771(s__29772){return (new cljs.core.LazySeq(null,(function (){var s__29772__$1 = s__29772;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29772__$1);if(temp__4092__auto__)
{var s__29772__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29772__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__29772__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__29774 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__29773 = 0;while(true){
if((i__29773 < size__7465__auto__))
{var msg = cljs.core._nth.call(null,c__7464__auto__,i__29773);cljs.core.chunk_append.call(null,b__29774,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null));
{
var G__29883 = (i__29773 + 1);
i__29773 = G__29883;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29774),iter__29771.call(null,cljs.core.chunk_rest.call(null,s__29772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29774),null);
}
} else
{var msg = cljs.core.first.call(null,s__29772__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null),iter__29771.call(null,cljs.core.rest.call(null,s__29772__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(this$)));
})()], null)], null));var seq__29775_29884 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__29776_29885 = null;var count__29777_29886 = 0;var i__29778_29887 = 0;while(true){
if((i__29778_29887 < count__29777_29886))
{var vec__29779_29888 = cljs.core._nth.call(null,chunk__29776_29885,i__29778_29887);var ev__8118__auto___29889 = cljs.core.nth.call(null,vec__29779_29888,0,null);var func__8119__auto___29890 = cljs.core.nth.call(null,vec__29779_29888,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___29889,func__8119__auto___29890);
{
var G__29891 = seq__29775_29884;
var G__29892 = chunk__29776_29885;
var G__29893 = count__29777_29886;
var G__29894 = (i__29778_29887 + 1);
seq__29775_29884 = G__29891;
chunk__29776_29885 = G__29892;
count__29777_29886 = G__29893;
i__29778_29887 = G__29894;
continue;
}
} else
{var temp__4092__auto___29895 = cljs.core.seq.call(null,seq__29775_29884);if(temp__4092__auto___29895)
{var seq__29775_29896__$1 = temp__4092__auto___29895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29775_29896__$1))
{var c__7497__auto___29897 = cljs.core.chunk_first.call(null,seq__29775_29896__$1);{
var G__29898 = cljs.core.chunk_rest.call(null,seq__29775_29896__$1);
var G__29899 = c__7497__auto___29897;
var G__29900 = cljs.core.count.call(null,c__7497__auto___29897);
var G__29901 = 0;
seq__29775_29884 = G__29898;
chunk__29776_29885 = G__29899;
count__29777_29886 = G__29900;
i__29778_29887 = G__29901;
continue;
}
} else
{var vec__29780_29902 = cljs.core.first.call(null,seq__29775_29896__$1);var ev__8118__auto___29903 = cljs.core.nth.call(null,vec__29780_29902,0,null);var func__8119__auto___29904 = cljs.core.nth.call(null,vec__29780_29902,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___29903,func__8119__auto___29904);
{
var G__29905 = cljs.core.next.call(null,seq__29775_29896__$1);
var G__29906 = null;
var G__29907 = 0;
var G__29908 = 0;
seq__29775_29884 = G__29905;
chunk__29776_29885 = G__29906;
count__29777_29886 = G__29907;
i__29778_29887 = G__29908;
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
lt.plugins.irc.ui_raw = (function ui_raw(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__29791(s__29792){return (new cljs.core.LazySeq(null,(function (){var s__29792__$1 = s__29792;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29792__$1);if(temp__4092__auto__)
{var s__29792__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29792__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__29792__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__29794 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__29793 = 0;while(true){
if((i__29793 < size__7465__auto__))
{var msg = cljs.core._nth.call(null,c__7464__auto__,i__29793);cljs.core.chunk_append.call(null,b__29794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["command"])),cljs.core.str(". "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["args"])),cljs.core.str("")].join('')], null));
{
var G__29909 = (i__29793 + 1);
i__29793 = G__29909;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29794),iter__29791.call(null,cljs.core.chunk_rest.call(null,s__29792__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29794),null);
}
} else
{var msg = cljs.core.first.call(null,s__29792__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["command"])),cljs.core.str(". "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["args"])),cljs.core.str("")].join('')], null),iter__29791.call(null,cljs.core.rest.call(null,s__29792__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"raw-msgs","raw-msgs",1471119113).cljs$core$IFn$_invoke$arity$1(this$)));
})()], null)], null));var seq__29795_29910 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__29796_29911 = null;var count__29797_29912 = 0;var i__29798_29913 = 0;while(true){
if((i__29798_29913 < count__29797_29912))
{var vec__29799_29914 = cljs.core._nth.call(null,chunk__29796_29911,i__29798_29913);var ev__8118__auto___29915 = cljs.core.nth.call(null,vec__29799_29914,0,null);var func__8119__auto___29916 = cljs.core.nth.call(null,vec__29799_29914,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___29915,func__8119__auto___29916);
{
var G__29917 = seq__29795_29910;
var G__29918 = chunk__29796_29911;
var G__29919 = count__29797_29912;
var G__29920 = (i__29798_29913 + 1);
seq__29795_29910 = G__29917;
chunk__29796_29911 = G__29918;
count__29797_29912 = G__29919;
i__29798_29913 = G__29920;
continue;
}
} else
{var temp__4092__auto___29921 = cljs.core.seq.call(null,seq__29795_29910);if(temp__4092__auto___29921)
{var seq__29795_29922__$1 = temp__4092__auto___29921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29795_29922__$1))
{var c__7497__auto___29923 = cljs.core.chunk_first.call(null,seq__29795_29922__$1);{
var G__29924 = cljs.core.chunk_rest.call(null,seq__29795_29922__$1);
var G__29925 = c__7497__auto___29923;
var G__29926 = cljs.core.count.call(null,c__7497__auto___29923);
var G__29927 = 0;
seq__29795_29910 = G__29924;
chunk__29796_29911 = G__29925;
count__29797_29912 = G__29926;
i__29798_29913 = G__29927;
continue;
}
} else
{var vec__29800_29928 = cljs.core.first.call(null,seq__29795_29922__$1);var ev__8118__auto___29929 = cljs.core.nth.call(null,vec__29800_29928,0,null);var func__8119__auto___29930 = cljs.core.nth.call(null,vec__29800_29928,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___29929,func__8119__auto___29930);
{
var G__29931 = cljs.core.next.call(null,seq__29795_29922__$1);
var G__29932 = null;
var G__29933 = 0;
var G__29934 = 0;
seq__29795_29910 = G__29931;
chunk__29796_29911 = G__29932;
count__29797_29912 = G__29933;
i__29798_29913 = G__29934;
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
lt.plugins.irc.nick_list = (function nick_list(nicks){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__29815(s__29816){return (new cljs.core.LazySeq(null,(function (){var s__29816__$1 = s__29816;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29816__$1);if(temp__4092__auto__)
{var s__29816__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29816__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__29816__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__29818 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__29817 = 0;while(true){
if((i__29817 < size__7465__auto__))
{var vec__29821 = cljs.core._nth.call(null,c__7464__auto__,i__29817);var nick = cljs.core.nth.call(null,vec__29821,0,null);var status = cljs.core.nth.call(null,vec__29821,1,null);cljs.core.chunk_append.call(null,b__29818,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(status),cljs.core.str(nick)].join('')], null));
{
var G__29935 = (i__29817 + 1);
i__29817 = G__29935;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29818),iter__29815.call(null,cljs.core.chunk_rest.call(null,s__29816__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29818),null);
}
} else
{var vec__29822 = cljs.core.first.call(null,s__29816__$2);var nick = cljs.core.nth.call(null,vec__29822,0,null);var status = cljs.core.nth.call(null,vec__29822,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(status),cljs.core.str(nick)].join('')], null),iter__29815.call(null,cljs.core.rest.call(null,s__29816__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,nicks);
})()], null));var seq__29823_29936 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__29824_29937 = null;var count__29825_29938 = 0;var i__29826_29939 = 0;while(true){
if((i__29826_29939 < count__29825_29938))
{var vec__29827_29940 = cljs.core._nth.call(null,chunk__29824_29937,i__29826_29939);var ev__8118__auto___29941 = cljs.core.nth.call(null,vec__29827_29940,0,null);var func__8119__auto___29942 = cljs.core.nth.call(null,vec__29827_29940,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___29941,func__8119__auto___29942);
{
var G__29943 = seq__29823_29936;
var G__29944 = chunk__29824_29937;
var G__29945 = count__29825_29938;
var G__29946 = (i__29826_29939 + 1);
seq__29823_29936 = G__29943;
chunk__29824_29937 = G__29944;
count__29825_29938 = G__29945;
i__29826_29939 = G__29946;
continue;
}
} else
{var temp__4092__auto___29947 = cljs.core.seq.call(null,seq__29823_29936);if(temp__4092__auto___29947)
{var seq__29823_29948__$1 = temp__4092__auto___29947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29823_29948__$1))
{var c__7497__auto___29949 = cljs.core.chunk_first.call(null,seq__29823_29948__$1);{
var G__29950 = cljs.core.chunk_rest.call(null,seq__29823_29948__$1);
var G__29951 = c__7497__auto___29949;
var G__29952 = cljs.core.count.call(null,c__7497__auto___29949);
var G__29953 = 0;
seq__29823_29936 = G__29950;
chunk__29824_29937 = G__29951;
count__29825_29938 = G__29952;
i__29826_29939 = G__29953;
continue;
}
} else
{var vec__29828_29954 = cljs.core.first.call(null,seq__29823_29948__$1);var ev__8118__auto___29955 = cljs.core.nth.call(null,vec__29828_29954,0,null);var func__8119__auto___29956 = cljs.core.nth.call(null,vec__29828_29954,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___29955,func__8119__auto___29956);
{
var G__29957 = cljs.core.next.call(null,seq__29823_29948__$1);
var G__29958 = null;
var G__29959 = 0;
var G__29960 = 0;
seq__29823_29936 = G__29957;
chunk__29824_29937 = G__29958;
count__29825_29938 = G__29959;
i__29826_29939 = G__29960;
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
lt.plugins.irc.handle_message = (function handle_message(this$){var info_29961 = (function (){var text = lt.util.dom.$.call(null,new cljs.core.Keyword(null,".text",".text",1059942861),lt.object.__GT_content.call(null,this$));return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),lt.util.dom.val.call(null,text)], null);
})();lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"send","send",1017430778),new cljs.core.Keyword(null,"nickname","nickname",1084595168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))),new cljs.core.Keyword(null,"channel","channel",1752854645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(info_29961));
return lt.util.dom.val.call(null,lt.util.dom.$.call(null,".text",lt.object.__GT_content.call(null,this$)),"");
});
lt.plugins.irc.input_text = (function input_text(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.text","input.text",2355324995),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"style","style",1123684643),"width: 85%"], null)], null));var seq__29835_29962 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (e){if(cljs.core._EQ_.call(null,(e["keyCode"]),13))
{return lt.plugins.irc.handle_message.call(null,this$);
} else
{return null;
}
})], null)));var chunk__29836_29963 = null;var count__29837_29964 = 0;var i__29838_29965 = 0;while(true){
if((i__29838_29965 < count__29837_29964))
{var vec__29839_29966 = cljs.core._nth.call(null,chunk__29836_29963,i__29838_29965);var ev__8118__auto___29967 = cljs.core.nth.call(null,vec__29839_29966,0,null);var func__8119__auto___29968 = cljs.core.nth.call(null,vec__29839_29966,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___29967,func__8119__auto___29968);
{
var G__29969 = seq__29835_29962;
var G__29970 = chunk__29836_29963;
var G__29971 = count__29837_29964;
var G__29972 = (i__29838_29965 + 1);
seq__29835_29962 = G__29969;
chunk__29836_29963 = G__29970;
count__29837_29964 = G__29971;
i__29838_29965 = G__29972;
continue;
}
} else
{var temp__4092__auto___29973 = cljs.core.seq.call(null,seq__29835_29962);if(temp__4092__auto___29973)
{var seq__29835_29974__$1 = temp__4092__auto___29973;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29835_29974__$1))
{var c__7497__auto___29975 = cljs.core.chunk_first.call(null,seq__29835_29974__$1);{
var G__29976 = cljs.core.chunk_rest.call(null,seq__29835_29974__$1);
var G__29977 = c__7497__auto___29975;
var G__29978 = cljs.core.count.call(null,c__7497__auto___29975);
var G__29979 = 0;
seq__29835_29962 = G__29976;
chunk__29836_29963 = G__29977;
count__29837_29964 = G__29978;
i__29838_29965 = G__29979;
continue;
}
} else
{var vec__29840_29980 = cljs.core.first.call(null,seq__29835_29974__$1);var ev__8118__auto___29981 = cljs.core.nth.call(null,vec__29840_29980,0,null);var func__8119__auto___29982 = cljs.core.nth.call(null,vec__29840_29980,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___29981,func__8119__auto___29982);
{
var G__29983 = cljs.core.next.call(null,seq__29835_29974__$1);
var G__29984 = null;
var G__29985 = 0;
var G__29986 = 0;
seq__29835_29962 = G__29983;
chunk__29836_29963 = G__29984;
count__29837_29964 = G__29985;
i__29838_29965 = G__29986;
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
lt.plugins.irc.send_button = (function send_button(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),"Send"], null)], null));var seq__29847_29987 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return lt.plugins.irc.handle_message.call(null,this$);
})], null)));var chunk__29848_29988 = null;var count__29849_29989 = 0;var i__29850_29990 = 0;while(true){
if((i__29850_29990 < count__29849_29989))
{var vec__29851_29991 = cljs.core._nth.call(null,chunk__29848_29988,i__29850_29990);var ev__8118__auto___29992 = cljs.core.nth.call(null,vec__29851_29991,0,null);var func__8119__auto___29993 = cljs.core.nth.call(null,vec__29851_29991,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___29992,func__8119__auto___29993);
{
var G__29994 = seq__29847_29987;
var G__29995 = chunk__29848_29988;
var G__29996 = count__29849_29989;
var G__29997 = (i__29850_29990 + 1);
seq__29847_29987 = G__29994;
chunk__29848_29988 = G__29995;
count__29849_29989 = G__29996;
i__29850_29990 = G__29997;
continue;
}
} else
{var temp__4092__auto___29998 = cljs.core.seq.call(null,seq__29847_29987);if(temp__4092__auto___29998)
{var seq__29847_29999__$1 = temp__4092__auto___29998;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29847_29999__$1))
{var c__7497__auto___30000 = cljs.core.chunk_first.call(null,seq__29847_29999__$1);{
var G__30001 = cljs.core.chunk_rest.call(null,seq__29847_29999__$1);
var G__30002 = c__7497__auto___30000;
var G__30003 = cljs.core.count.call(null,c__7497__auto___30000);
var G__30004 = 0;
seq__29847_29987 = G__30001;
chunk__29848_29988 = G__30002;
count__29849_29989 = G__30003;
i__29850_29990 = G__30004;
continue;
}
} else
{var vec__29852_30005 = cljs.core.first.call(null,seq__29847_29999__$1);var ev__8118__auto___30006 = cljs.core.nth.call(null,vec__29852_30005,0,null);var func__8119__auto___30007 = cljs.core.nth.call(null,vec__29852_30005,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___30006,func__8119__auto___30007);
{
var G__30008 = cljs.core.next.call(null,seq__29847_29999__$1);
var G__30009 = null;
var G__30010 = 0;
var G__30011 = 0;
seq__29847_29987 = G__30008;
chunk__29848_29988 = G__30009;
count__29849_29989 = G__30010;
i__29850_29990 = G__30011;
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
lt.plugins.irc.join_button = (function join_button(this$,channel){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),lt.plugins.irc.submit,new cljs.core.Keyword(null,"value","value",1125876963),[cljs.core.str("Join "),cljs.core.str(channel)].join('')], null)], null));var seq__29859_30012 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-window","lt.plugins.irc/irc-window",639445884),this$,channel));
})], null)));var chunk__29860_30013 = null;var count__29861_30014 = 0;var i__29862_30015 = 0;while(true){
if((i__29862_30015 < count__29861_30014))
{var vec__29863_30016 = cljs.core._nth.call(null,chunk__29860_30013,i__29862_30015);var ev__8118__auto___30017 = cljs.core.nth.call(null,vec__29863_30016,0,null);var func__8119__auto___30018 = cljs.core.nth.call(null,vec__29863_30016,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___30017,func__8119__auto___30018);
{
var G__30019 = seq__29859_30012;
var G__30020 = chunk__29860_30013;
var G__30021 = count__29861_30014;
var G__30022 = (i__29862_30015 + 1);
seq__29859_30012 = G__30019;
chunk__29860_30013 = G__30020;
count__29861_30014 = G__30021;
i__29862_30015 = G__30022;
continue;
}
} else
{var temp__4092__auto___30023 = cljs.core.seq.call(null,seq__29859_30012);if(temp__4092__auto___30023)
{var seq__29859_30024__$1 = temp__4092__auto___30023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29859_30024__$1))
{var c__7497__auto___30025 = cljs.core.chunk_first.call(null,seq__29859_30024__$1);{
var G__30026 = cljs.core.chunk_rest.call(null,seq__29859_30024__$1);
var G__30027 = c__7497__auto___30025;
var G__30028 = cljs.core.count.call(null,c__7497__auto___30025);
var G__30029 = 0;
seq__29859_30012 = G__30026;
chunk__29860_30013 = G__30027;
count__29861_30014 = G__30028;
i__29862_30015 = G__30029;
continue;
}
} else
{var vec__29864_30030 = cljs.core.first.call(null,seq__29859_30024__$1);var ev__8118__auto___30031 = cljs.core.nth.call(null,vec__29864_30030,0,null);var func__8119__auto___30032 = cljs.core.nth.call(null,vec__29864_30030,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___30031,func__8119__auto___30032);
{
var G__30033 = cljs.core.next.call(null,seq__29859_30024__$1);
var G__30034 = null;
var G__30035 = 0;
var G__30036 = 0;
seq__29859_30012 = G__30033;
chunk__29860_30013 = G__30034;
count__29861_30014 = G__30035;
i__29862_30015 = G__30036;
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
lt.plugins.irc.__BEH__log_event = (function __BEH__log_event(this$,from,to,message){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.conj.call(null,new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1017056028),from,new cljs.core.Keyword(null,"to","to",1013907949),to,new cljs.core.Keyword(null,"message","message",1968829305),message,new cljs.core.Keyword(null,"time","time",1017464383),(new Date())], null))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__log_event,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",1968829305),null], null), null));
lt.plugins.irc.__BEH__log_raw = (function __BEH__log_raw(this$,message){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raw-msgs","raw-msgs",1471119113),cljs.core.conj.call(null,new cljs.core.Keyword(null,"raw-msgs","raw-msgs",1471119113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",1968829305),message,new cljs.core.Keyword(null,"time","time",1017464383),(new Date())], null))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","log-raw","lt.plugins.irc/log-raw",2411332128),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__log_raw,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"raw","raw",1014016922),null], null), null));
lt.plugins.irc.__BEH__send_message = (function __BEH__send_message(this$,from,to,message){new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))).say(to,message);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),from,to,message);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","send-message","lt.plugins.irc/send-message",4600947067),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__send_message,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send","send",1017430778),null], null), null));
lt.plugins.irc.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___30037 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___30037))
{var ts_30038 = temp__4092__auto___30037;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_30038))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_30038);
} else
{}
} else
{}
lt.objs.console.log.call(null,"pre-pre-destroy");
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"pre-destroy","pre-destroy",1201264194));
lt.objs.console.log.call(null,"post-pre-deploy. pre-destroy.");
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.irc.__BEH__on_destory_part = (function __BEH__on_destory_part(this$){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));client.part(new cljs.core.Keyword(null,"channel","channel",1752854645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.plugins.irc.remove_listeners.call(null,this$,client);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","on-destory-part","lt.plugins.irc/on-destory-part",2717239859),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__on_destory_part,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre-destroy","pre-destroy",1201264194),null], null), null));
lt.plugins.irc.__BEH__on_destory_disconnect = (function __BEH__on_destory_disconnect(this$){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));client.disconnect();
return client.removeAllListeners();
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","on-destory-disconnect","lt.plugins.irc/on-destory-disconnect",3271028380),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__on_destory_disconnect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre-destroy","pre-destroy",1201264194),null], null), null));
lt.plugins.irc.popup_input = (function popup_input(){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text"], null)], null));var seq__29871_30039 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__29872_30040 = null;var count__29873_30041 = 0;var i__29874_30042 = 0;while(true){
if((i__29874_30042 < count__29873_30041))
{var vec__29875_30043 = cljs.core._nth.call(null,chunk__29872_30040,i__29874_30042);var ev__8118__auto___30044 = cljs.core.nth.call(null,vec__29875_30043,0,null);var func__8119__auto___30045 = cljs.core.nth.call(null,vec__29875_30043,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___30044,func__8119__auto___30045);
{
var G__30046 = seq__29871_30039;
var G__30047 = chunk__29872_30040;
var G__30048 = count__29873_30041;
var G__30049 = (i__29874_30042 + 1);
seq__29871_30039 = G__30046;
chunk__29872_30040 = G__30047;
count__29873_30041 = G__30048;
i__29874_30042 = G__30049;
continue;
}
} else
{var temp__4092__auto___30050 = cljs.core.seq.call(null,seq__29871_30039);if(temp__4092__auto___30050)
{var seq__29871_30051__$1 = temp__4092__auto___30050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29871_30051__$1))
{var c__7497__auto___30052 = cljs.core.chunk_first.call(null,seq__29871_30051__$1);{
var G__30053 = cljs.core.chunk_rest.call(null,seq__29871_30051__$1);
var G__30054 = c__7497__auto___30052;
var G__30055 = cljs.core.count.call(null,c__7497__auto___30052);
var G__30056 = 0;
seq__29871_30039 = G__30053;
chunk__29872_30040 = G__30054;
count__29873_30041 = G__30055;
i__29874_30042 = G__30056;
continue;
}
} else
{var vec__29876_30057 = cljs.core.first.call(null,seq__29871_30051__$1);var ev__8118__auto___30058 = cljs.core.nth.call(null,vec__29876_30057,0,null);var func__8119__auto___30059 = cljs.core.nth.call(null,vec__29876_30057,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___30058,func__8119__auto___30059);
{
var G__30060 = cljs.core.next.call(null,seq__29871_30051__$1);
var G__30061 = null;
var G__30062 = 0;
var G__30063 = 0;
seq__29871_30039 = G__30060;
chunk__29872_30040 = G__30061;
count__29873_30041 = G__30062;
i__29874_30042 = G__30063;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"connect-irc-server","connect-irc-server",1081858123),new cljs.core.Keyword(null,"desc","desc",1016984067),"IRC: Connect to an irc server.",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var server = lt.plugins.irc.popup_input.call(null);var nickname = lt.plugins.irc.popup_input.call(null);return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"TK Test Popup",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Did this work?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Server: "], null),server,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Nickname: "], null),nickname,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Woof"], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"connect",new cljs.core.Keyword(null,"action","action",3885920680),(function (){var server__$1 = lt.util.dom.val.call(null,server);var nickname__$1 = lt.util.dom.val.call(null,nickname);var irc_client = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-client","lt.plugins.irc/irc-client",1143341983));lt.objs.console.log.call(null,[cljs.core.str("Server: "),cljs.core.str(server__$1),cljs.core.str(" Nickname: "),cljs.core.str(nickname__$1)].join(''));
lt.plugins.irc.connect.call(null,irc_client,server__$1,nickname__$1);
return lt.objs.tabs.add_or_focus_BANG_.call(null,irc_client);
})], null)], null)], null));
})], null));
lt.object.instances_by_type.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-client","lt.plugins.irc/irc-client",1143341983));
lt.object.instances_by_type.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-window","lt.plugins.irc/irc-window",639445884));
var iter__7466__auto___30064 = (function iter__29877(s__29878){return (new cljs.core.LazySeq(null,(function (){var s__29878__$1 = s__29878;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29878__$1);if(temp__4092__auto__)
{var s__29878__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29878__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__29878__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__29880 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__29879 = 0;while(true){
if((i__29879 < size__7465__auto__))
{var instance = cljs.core._nth.call(null,c__7464__auto__,i__29879);cljs.core.chunk_append.call(null,b__29880,lt.object.destroy_BANG_.call(null,instance));
{
var G__30065 = (i__29879 + 1);
i__29879 = G__30065;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29880),iter__29877.call(null,cljs.core.chunk_rest.call(null,s__29878__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29880),null);
}
} else
{var instance = cljs.core.first.call(null,s__29878__$2);return cljs.core.cons.call(null,lt.object.destroy_BANG_.call(null,instance),iter__29877.call(null,cljs.core.rest.call(null,s__29878__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});iter__7466__auto___30064.call(null,lt.object.instances_by_type.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-client","lt.plugins.irc/irc-client",1143341983)));
}

//# sourceMappingURL=lt-irc_compiled.js.map