if(!lt.util.load.provided_QMARK_('lt.plugins.irc')) {
goog.provide('lt.plugins.irc');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.cljs');
goog.require('lt.objs.plugins');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.util.cljs');
goog.require('lt.objs.command');
goog.require('lt.objs.plugins');
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
lt.plugins.irc.irc = require(lt.objs.plugins.local_module.call(null,"lt-irc","irc"));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-client","lt.plugins.irc/irc-client",1143341983),new cljs.core.Keyword(null,"name","name",1017277949),"IRC Client",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.irc","log-raw","lt.plugins.irc/log-raw",2411332128),new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136),new cljs.core.Keyword("lt.plugins.irc","on-destory-disconnect","lt.plugins.irc/on-destory-disconnect",3271028380)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),lt.plugins.irc.join_button.call(null,this$)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll;width:100%;height:90%;"], null),crate.binding.bound.call(null,this$,lt.plugins.irc.ui_raw)], null)], null);
}));
lt.plugins.irc.connect = (function connect(irc_client,server,nickname){var client = (function (){var Client = lt.plugins.irc.irc.Client;return (new Client(server,nickname));
})();lt.object.merge_BANG_.call(null,irc_client,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"nickname","nickname",1084595168),nickname,new cljs.core.Keyword(null,"server","server",4403045045),server,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str(nickname),cljs.core.str("@"),cljs.core.str(server)].join('')], null)], null));
client.addListener("raw",(function (message){return lt.object.raise.call(null,irc_client,new cljs.core.Keyword(null,"raw","raw",1014016922),message);
}));
return client.addListener("error",(function (message){return lt.objs.console.error.call(null,[cljs.core.str("an error occured "),cljs.core.str((message["command"])),cljs.core.str(". "),cljs.core.str((message["args"]))].join(''));
}));
});
lt.plugins.irc.add_listener = (function add_listener(this$,client,event,listener){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"irc-events","irc-events",2694606174),cljs.core.conj.call(null,new cljs.core.Keyword(null,"irc-events","irc-events",2694606174).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),event,new cljs.core.Keyword(null,"listener","listener",2360064038),listener], null))], null));
return client.addListener(event,listener);
});
lt.plugins.irc.remove_listeners = (function remove_listeners(this$,client){cljs.core.map.call(null,(function (p1__9407_SHARP_){return client.removeAllListeners(new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(p1__9407_SHARP_));
}),new cljs.core.Keyword(null,"irc-events","irc-events",2694606174).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"irc-events","irc-events",2694606174),cljs.core.PersistentVector.EMPTY], null));
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-window","lt.plugins.irc/irc-window",639445884),new cljs.core.Keyword(null,"name","name",1017277949),"IRC Window",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword("lt.plugins.irc","send-message","lt.plugins.irc/send-message",4600947067),new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136),new cljs.core.Keyword("lt.plugins.irc","on-destory-part","lt.plugins.irc/on-destory-part",2717239859)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client,channel){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"channel","channel",1752854645),channel,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),channel], null)], null));
var c_9524 = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client));lt.plugins.irc.add_listener.call(null,this$,c_9524,[cljs.core.str("message"),cljs.core.str(channel)].join(''),(function (from,text,message){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),from,channel,text);
}));
lt.plugins.irc.add_listener.call(null,this$,c_9524,[cljs.core.str("names"),cljs.core.str(channel)].join(''),(function (nicks){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nicks","nicks",1118718178),lt.util.cljs.js__GT_clj.call(null,nicks)], null));
}));
c_9524.join(channel);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"width:100%"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"border: 0px solid red;float:right;width:20%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Nicks"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll; width:100%;height:90%;"], null),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.Keyword(null,"nicks","nicks",1118718178)),lt.plugins.irc.nick_list)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"border: 0px solid pink;float:left;width:80%;"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll; width:100%;height:95%;"], null),crate.binding.bound.call(null,this$,lt.plugins.irc.ui)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"position:absolute; bottom:0px; width: 100%;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.Keyword(null,"nickname","nickname",1084595168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))], null),lt.plugins.irc.send_button.call(null,this$),lt.plugins.irc.input_text.call(null,this$)], null)], null)], null);
}));
/**
* split a 1 or 2 digit number into its decimal parts
* e.g. 53 => [5 3], 9 => [0 9]
*/
lt.plugins.irc.decimal_parts = (function decimal_parts(n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot.call(null,n,10),cljs.core.mod.call(null,n,10)], null);
});
lt.plugins.irc.format_time = (function format_time(date){return [cljs.core.str(""),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",lt.plugins.irc.decimal_parts.call(null,date.getHours()))),cljs.core.str(":"),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",lt.plugins.irc.decimal_parts.call(null,date.getMinutes())))].join('');
});
lt.plugins.irc.ui = (function ui(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__9418(s__9419){return (new cljs.core.LazySeq(null,(function (){var s__9419__$1 = s__9419;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9419__$1);if(temp__4092__auto__)
{var s__9419__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9419__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9419__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9421 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9420 = 0;while(true){
if((i__9420 < size__7465__auto__))
{var msg = cljs.core._nth.call(null,c__7464__auto__,i__9420);cljs.core.chunk_append.call(null,b__9421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null));
{
var G__9525 = (i__9420 + 1);
i__9420 = G__9525;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9421),iter__9418.call(null,cljs.core.chunk_rest.call(null,s__9419__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9421),null);
}
} else
{var msg = cljs.core.first.call(null,s__9419__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null),iter__9418.call(null,cljs.core.rest.call(null,s__9419__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(this$)));
})()], null)], null));var seq__9422_9526 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9423_9527 = null;var count__9424_9528 = 0;var i__9425_9529 = 0;while(true){
if((i__9425_9529 < count__9424_9528))
{var vec__9426_9530 = cljs.core._nth.call(null,chunk__9423_9527,i__9425_9529);var ev__8118__auto___9531 = cljs.core.nth.call(null,vec__9426_9530,0,null);var func__8119__auto___9532 = cljs.core.nth.call(null,vec__9426_9530,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9531,func__8119__auto___9532);
{
var G__9533 = seq__9422_9526;
var G__9534 = chunk__9423_9527;
var G__9535 = count__9424_9528;
var G__9536 = (i__9425_9529 + 1);
seq__9422_9526 = G__9533;
chunk__9423_9527 = G__9534;
count__9424_9528 = G__9535;
i__9425_9529 = G__9536;
continue;
}
} else
{var temp__4092__auto___9537 = cljs.core.seq.call(null,seq__9422_9526);if(temp__4092__auto___9537)
{var seq__9422_9538__$1 = temp__4092__auto___9537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9422_9538__$1))
{var c__7497__auto___9539 = cljs.core.chunk_first.call(null,seq__9422_9538__$1);{
var G__9540 = cljs.core.chunk_rest.call(null,seq__9422_9538__$1);
var G__9541 = c__7497__auto___9539;
var G__9542 = cljs.core.count.call(null,c__7497__auto___9539);
var G__9543 = 0;
seq__9422_9526 = G__9540;
chunk__9423_9527 = G__9541;
count__9424_9528 = G__9542;
i__9425_9529 = G__9543;
continue;
}
} else
{var vec__9427_9544 = cljs.core.first.call(null,seq__9422_9538__$1);var ev__8118__auto___9545 = cljs.core.nth.call(null,vec__9427_9544,0,null);var func__8119__auto___9546 = cljs.core.nth.call(null,vec__9427_9544,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9545,func__8119__auto___9546);
{
var G__9547 = cljs.core.next.call(null,seq__9422_9538__$1);
var G__9548 = null;
var G__9549 = 0;
var G__9550 = 0;
seq__9422_9526 = G__9547;
chunk__9423_9527 = G__9548;
count__9424_9528 = G__9549;
i__9425_9529 = G__9550;
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
lt.plugins.irc.ui_raw = (function ui_raw(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__9438(s__9439){return (new cljs.core.LazySeq(null,(function (){var s__9439__$1 = s__9439;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9439__$1);if(temp__4092__auto__)
{var s__9439__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9439__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9439__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9441 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9440 = 0;while(true){
if((i__9440 < size__7465__auto__))
{var msg = cljs.core._nth.call(null,c__7464__auto__,i__9440);cljs.core.chunk_append.call(null,b__9441,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["command"])),cljs.core.str(". "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["args"])),cljs.core.str("")].join('')], null));
{
var G__9551 = (i__9440 + 1);
i__9440 = G__9551;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9441),iter__9438.call(null,cljs.core.chunk_rest.call(null,s__9439__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9441),null);
}
} else
{var msg = cljs.core.first.call(null,s__9439__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["command"])),cljs.core.str(". "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["args"])),cljs.core.str("")].join('')], null),iter__9438.call(null,cljs.core.rest.call(null,s__9439__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"raw-msgs","raw-msgs",1471119113).cljs$core$IFn$_invoke$arity$1(this$)));
})()], null)], null));var seq__9442_9552 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9443_9553 = null;var count__9444_9554 = 0;var i__9445_9555 = 0;while(true){
if((i__9445_9555 < count__9444_9554))
{var vec__9446_9556 = cljs.core._nth.call(null,chunk__9443_9553,i__9445_9555);var ev__8118__auto___9557 = cljs.core.nth.call(null,vec__9446_9556,0,null);var func__8119__auto___9558 = cljs.core.nth.call(null,vec__9446_9556,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9557,func__8119__auto___9558);
{
var G__9559 = seq__9442_9552;
var G__9560 = chunk__9443_9553;
var G__9561 = count__9444_9554;
var G__9562 = (i__9445_9555 + 1);
seq__9442_9552 = G__9559;
chunk__9443_9553 = G__9560;
count__9444_9554 = G__9561;
i__9445_9555 = G__9562;
continue;
}
} else
{var temp__4092__auto___9563 = cljs.core.seq.call(null,seq__9442_9552);if(temp__4092__auto___9563)
{var seq__9442_9564__$1 = temp__4092__auto___9563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9442_9564__$1))
{var c__7497__auto___9565 = cljs.core.chunk_first.call(null,seq__9442_9564__$1);{
var G__9566 = cljs.core.chunk_rest.call(null,seq__9442_9564__$1);
var G__9567 = c__7497__auto___9565;
var G__9568 = cljs.core.count.call(null,c__7497__auto___9565);
var G__9569 = 0;
seq__9442_9552 = G__9566;
chunk__9443_9553 = G__9567;
count__9444_9554 = G__9568;
i__9445_9555 = G__9569;
continue;
}
} else
{var vec__9447_9570 = cljs.core.first.call(null,seq__9442_9564__$1);var ev__8118__auto___9571 = cljs.core.nth.call(null,vec__9447_9570,0,null);var func__8119__auto___9572 = cljs.core.nth.call(null,vec__9447_9570,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9571,func__8119__auto___9572);
{
var G__9573 = cljs.core.next.call(null,seq__9442_9564__$1);
var G__9574 = null;
var G__9575 = 0;
var G__9576 = 0;
seq__9442_9552 = G__9573;
chunk__9443_9553 = G__9574;
count__9444_9554 = G__9575;
i__9445_9555 = G__9576;
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
lt.plugins.irc.nick_list = (function nick_list(nicks){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__9462(s__9463){return (new cljs.core.LazySeq(null,(function (){var s__9463__$1 = s__9463;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9463__$1);if(temp__4092__auto__)
{var s__9463__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9463__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9463__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9465 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9464 = 0;while(true){
if((i__9464 < size__7465__auto__))
{var vec__9468 = cljs.core._nth.call(null,c__7464__auto__,i__9464);var nick = cljs.core.nth.call(null,vec__9468,0,null);var status = cljs.core.nth.call(null,vec__9468,1,null);cljs.core.chunk_append.call(null,b__9465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(status),cljs.core.str(nick)].join('')], null));
{
var G__9577 = (i__9464 + 1);
i__9464 = G__9577;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9465),iter__9462.call(null,cljs.core.chunk_rest.call(null,s__9463__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9465),null);
}
} else
{var vec__9469 = cljs.core.first.call(null,s__9463__$2);var nick = cljs.core.nth.call(null,vec__9469,0,null);var status = cljs.core.nth.call(null,vec__9469,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(status),cljs.core.str(nick)].join('')], null),iter__9462.call(null,cljs.core.rest.call(null,s__9463__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,nicks);
})()], null));var seq__9470_9578 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9471_9579 = null;var count__9472_9580 = 0;var i__9473_9581 = 0;while(true){
if((i__9473_9581 < count__9472_9580))
{var vec__9474_9582 = cljs.core._nth.call(null,chunk__9471_9579,i__9473_9581);var ev__8118__auto___9583 = cljs.core.nth.call(null,vec__9474_9582,0,null);var func__8119__auto___9584 = cljs.core.nth.call(null,vec__9474_9582,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9583,func__8119__auto___9584);
{
var G__9585 = seq__9470_9578;
var G__9586 = chunk__9471_9579;
var G__9587 = count__9472_9580;
var G__9588 = (i__9473_9581 + 1);
seq__9470_9578 = G__9585;
chunk__9471_9579 = G__9586;
count__9472_9580 = G__9587;
i__9473_9581 = G__9588;
continue;
}
} else
{var temp__4092__auto___9589 = cljs.core.seq.call(null,seq__9470_9578);if(temp__4092__auto___9589)
{var seq__9470_9590__$1 = temp__4092__auto___9589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9470_9590__$1))
{var c__7497__auto___9591 = cljs.core.chunk_first.call(null,seq__9470_9590__$1);{
var G__9592 = cljs.core.chunk_rest.call(null,seq__9470_9590__$1);
var G__9593 = c__7497__auto___9591;
var G__9594 = cljs.core.count.call(null,c__7497__auto___9591);
var G__9595 = 0;
seq__9470_9578 = G__9592;
chunk__9471_9579 = G__9593;
count__9472_9580 = G__9594;
i__9473_9581 = G__9595;
continue;
}
} else
{var vec__9475_9596 = cljs.core.first.call(null,seq__9470_9590__$1);var ev__8118__auto___9597 = cljs.core.nth.call(null,vec__9475_9596,0,null);var func__8119__auto___9598 = cljs.core.nth.call(null,vec__9475_9596,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9597,func__8119__auto___9598);
{
var G__9599 = cljs.core.next.call(null,seq__9470_9590__$1);
var G__9600 = null;
var G__9601 = 0;
var G__9602 = 0;
seq__9470_9578 = G__9599;
chunk__9471_9579 = G__9600;
count__9472_9580 = G__9601;
i__9473_9581 = G__9602;
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
lt.plugins.irc.handle_message = (function handle_message(this$){var info_9603 = (function (){var text = lt.util.dom.$.call(null,new cljs.core.Keyword(null,".text",".text",1059942861),lt.object.__GT_content.call(null,this$));return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),lt.util.dom.val.call(null,text)], null);
})();lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"send","send",1017430778),new cljs.core.Keyword(null,"nickname","nickname",1084595168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))),new cljs.core.Keyword(null,"channel","channel",1752854645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(info_9603));
return lt.util.dom.val.call(null,lt.util.dom.$.call(null,".text",lt.object.__GT_content.call(null,this$)),"");
});
lt.plugins.irc.input_text = (function input_text(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.text","input.text",2355324995),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"style","style",1123684643),"width: 85%"], null)], null));var seq__9482_9604 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (e){if(cljs.core._EQ_.call(null,(e["keyCode"]),13))
{return lt.plugins.irc.handle_message.call(null,this$);
} else
{return null;
}
})], null)));var chunk__9483_9605 = null;var count__9484_9606 = 0;var i__9485_9607 = 0;while(true){
if((i__9485_9607 < count__9484_9606))
{var vec__9486_9608 = cljs.core._nth.call(null,chunk__9483_9605,i__9485_9607);var ev__8118__auto___9609 = cljs.core.nth.call(null,vec__9486_9608,0,null);var func__8119__auto___9610 = cljs.core.nth.call(null,vec__9486_9608,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9609,func__8119__auto___9610);
{
var G__9611 = seq__9482_9604;
var G__9612 = chunk__9483_9605;
var G__9613 = count__9484_9606;
var G__9614 = (i__9485_9607 + 1);
seq__9482_9604 = G__9611;
chunk__9483_9605 = G__9612;
count__9484_9606 = G__9613;
i__9485_9607 = G__9614;
continue;
}
} else
{var temp__4092__auto___9615 = cljs.core.seq.call(null,seq__9482_9604);if(temp__4092__auto___9615)
{var seq__9482_9616__$1 = temp__4092__auto___9615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9482_9616__$1))
{var c__7497__auto___9617 = cljs.core.chunk_first.call(null,seq__9482_9616__$1);{
var G__9618 = cljs.core.chunk_rest.call(null,seq__9482_9616__$1);
var G__9619 = c__7497__auto___9617;
var G__9620 = cljs.core.count.call(null,c__7497__auto___9617);
var G__9621 = 0;
seq__9482_9604 = G__9618;
chunk__9483_9605 = G__9619;
count__9484_9606 = G__9620;
i__9485_9607 = G__9621;
continue;
}
} else
{var vec__9487_9622 = cljs.core.first.call(null,seq__9482_9616__$1);var ev__8118__auto___9623 = cljs.core.nth.call(null,vec__9487_9622,0,null);var func__8119__auto___9624 = cljs.core.nth.call(null,vec__9487_9622,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9623,func__8119__auto___9624);
{
var G__9625 = cljs.core.next.call(null,seq__9482_9616__$1);
var G__9626 = null;
var G__9627 = 0;
var G__9628 = 0;
seq__9482_9604 = G__9625;
chunk__9483_9605 = G__9626;
count__9484_9606 = G__9627;
i__9485_9607 = G__9628;
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
lt.plugins.irc.send_button = (function send_button(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),"Send"], null)], null));var seq__9494_9629 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return lt.plugins.irc.handle_message.call(null,this$);
})], null)));var chunk__9495_9630 = null;var count__9496_9631 = 0;var i__9497_9632 = 0;while(true){
if((i__9497_9632 < count__9496_9631))
{var vec__9498_9633 = cljs.core._nth.call(null,chunk__9495_9630,i__9497_9632);var ev__8118__auto___9634 = cljs.core.nth.call(null,vec__9498_9633,0,null);var func__8119__auto___9635 = cljs.core.nth.call(null,vec__9498_9633,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9634,func__8119__auto___9635);
{
var G__9636 = seq__9494_9629;
var G__9637 = chunk__9495_9630;
var G__9638 = count__9496_9631;
var G__9639 = (i__9497_9632 + 1);
seq__9494_9629 = G__9636;
chunk__9495_9630 = G__9637;
count__9496_9631 = G__9638;
i__9497_9632 = G__9639;
continue;
}
} else
{var temp__4092__auto___9640 = cljs.core.seq.call(null,seq__9494_9629);if(temp__4092__auto___9640)
{var seq__9494_9641__$1 = temp__4092__auto___9640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9494_9641__$1))
{var c__7497__auto___9642 = cljs.core.chunk_first.call(null,seq__9494_9641__$1);{
var G__9643 = cljs.core.chunk_rest.call(null,seq__9494_9641__$1);
var G__9644 = c__7497__auto___9642;
var G__9645 = cljs.core.count.call(null,c__7497__auto___9642);
var G__9646 = 0;
seq__9494_9629 = G__9643;
chunk__9495_9630 = G__9644;
count__9496_9631 = G__9645;
i__9497_9632 = G__9646;
continue;
}
} else
{var vec__9499_9647 = cljs.core.first.call(null,seq__9494_9641__$1);var ev__8118__auto___9648 = cljs.core.nth.call(null,vec__9499_9647,0,null);var func__8119__auto___9649 = cljs.core.nth.call(null,vec__9499_9647,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9648,func__8119__auto___9649);
{
var G__9650 = cljs.core.next.call(null,seq__9494_9641__$1);
var G__9651 = null;
var G__9652 = 0;
var G__9653 = 0;
seq__9494_9629 = G__9650;
chunk__9495_9630 = G__9651;
count__9496_9631 = G__9652;
i__9497_9632 = G__9653;
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
lt.plugins.irc.join_button = (function join_button(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),lt.plugins.irc.submit,new cljs.core.Keyword(null,"value","value",1125876963),[cljs.core.str("Join a channel")].join('')], null)], null));var seq__9506_9654 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var channel = lt.plugins.irc.popup_input.call(null);return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect to IRC Channel",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Enter channel to join."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Channel: "], null),channel], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"connect",new cljs.core.Keyword(null,"action","action",3885920680),((function (channel){
return (function (){var channel__$1 = lt.util.dom.val.call(null,channel);return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-window","lt.plugins.irc/irc-window",639445884),this$,channel__$1));
});})(channel))
], null)], null)], null));
})], null)));var chunk__9507_9655 = null;var count__9508_9656 = 0;var i__9509_9657 = 0;while(true){
if((i__9509_9657 < count__9508_9656))
{var vec__9510_9658 = cljs.core._nth.call(null,chunk__9507_9655,i__9509_9657);var ev__8118__auto___9659 = cljs.core.nth.call(null,vec__9510_9658,0,null);var func__8119__auto___9660 = cljs.core.nth.call(null,vec__9510_9658,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9659,func__8119__auto___9660);
{
var G__9661 = seq__9506_9654;
var G__9662 = chunk__9507_9655;
var G__9663 = count__9508_9656;
var G__9664 = (i__9509_9657 + 1);
seq__9506_9654 = G__9661;
chunk__9507_9655 = G__9662;
count__9508_9656 = G__9663;
i__9509_9657 = G__9664;
continue;
}
} else
{var temp__4092__auto___9665 = cljs.core.seq.call(null,seq__9506_9654);if(temp__4092__auto___9665)
{var seq__9506_9666__$1 = temp__4092__auto___9665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9506_9666__$1))
{var c__7497__auto___9667 = cljs.core.chunk_first.call(null,seq__9506_9666__$1);{
var G__9668 = cljs.core.chunk_rest.call(null,seq__9506_9666__$1);
var G__9669 = c__7497__auto___9667;
var G__9670 = cljs.core.count.call(null,c__7497__auto___9667);
var G__9671 = 0;
seq__9506_9654 = G__9668;
chunk__9507_9655 = G__9669;
count__9508_9656 = G__9670;
i__9509_9657 = G__9671;
continue;
}
} else
{var vec__9511_9672 = cljs.core.first.call(null,seq__9506_9666__$1);var ev__8118__auto___9673 = cljs.core.nth.call(null,vec__9511_9672,0,null);var func__8119__auto___9674 = cljs.core.nth.call(null,vec__9511_9672,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9673,func__8119__auto___9674);
{
var G__9675 = cljs.core.next.call(null,seq__9506_9666__$1);
var G__9676 = null;
var G__9677 = 0;
var G__9678 = 0;
seq__9506_9654 = G__9675;
chunk__9507_9655 = G__9676;
count__9508_9656 = G__9677;
i__9509_9657 = G__9678;
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
lt.plugins.irc.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___9679 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9679))
{var ts_9680 = temp__4092__auto___9679;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9680))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9680);
} else
{}
} else
{}
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"pre-destroy","pre-destroy",1201264194));
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
lt.plugins.irc.popup_input = (function popup_input(){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text"], null)], null));var seq__9518_9681 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9519_9682 = null;var count__9520_9683 = 0;var i__9521_9684 = 0;while(true){
if((i__9521_9684 < count__9520_9683))
{var vec__9522_9685 = cljs.core._nth.call(null,chunk__9519_9682,i__9521_9684);var ev__8118__auto___9686 = cljs.core.nth.call(null,vec__9522_9685,0,null);var func__8119__auto___9687 = cljs.core.nth.call(null,vec__9522_9685,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9686,func__8119__auto___9687);
{
var G__9688 = seq__9518_9681;
var G__9689 = chunk__9519_9682;
var G__9690 = count__9520_9683;
var G__9691 = (i__9521_9684 + 1);
seq__9518_9681 = G__9688;
chunk__9519_9682 = G__9689;
count__9520_9683 = G__9690;
i__9521_9684 = G__9691;
continue;
}
} else
{var temp__4092__auto___9692 = cljs.core.seq.call(null,seq__9518_9681);if(temp__4092__auto___9692)
{var seq__9518_9693__$1 = temp__4092__auto___9692;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9518_9693__$1))
{var c__7497__auto___9694 = cljs.core.chunk_first.call(null,seq__9518_9693__$1);{
var G__9695 = cljs.core.chunk_rest.call(null,seq__9518_9693__$1);
var G__9696 = c__7497__auto___9694;
var G__9697 = cljs.core.count.call(null,c__7497__auto___9694);
var G__9698 = 0;
seq__9518_9681 = G__9695;
chunk__9519_9682 = G__9696;
count__9520_9683 = G__9697;
i__9521_9684 = G__9698;
continue;
}
} else
{var vec__9523_9699 = cljs.core.first.call(null,seq__9518_9693__$1);var ev__8118__auto___9700 = cljs.core.nth.call(null,vec__9523_9699,0,null);var func__8119__auto___9701 = cljs.core.nth.call(null,vec__9523_9699,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9700,func__8119__auto___9701);
{
var G__9702 = cljs.core.next.call(null,seq__9518_9693__$1);
var G__9703 = null;
var G__9704 = 0;
var G__9705 = 0;
seq__9518_9681 = G__9702;
chunk__9519_9682 = G__9703;
count__9520_9683 = G__9704;
i__9521_9684 = G__9705;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"connect-irc-server","connect-irc-server",1081858123),new cljs.core.Keyword(null,"desc","desc",1016984067),"IRC: Connect to an irc server.",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var server = lt.plugins.irc.popup_input.call(null);var nickname = lt.plugins.irc.popup_input.call(null);return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect to IRC Server",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Enter server to connect to and Nickname to use."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Server: "], null),server,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Nickname: "], null),nickname], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"connect",new cljs.core.Keyword(null,"action","action",3885920680),(function (){var server__$1 = lt.util.dom.val.call(null,server);var nickname__$1 = lt.util.dom.val.call(null,nickname);var irc_client = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-client","lt.plugins.irc/irc-client",1143341983));lt.plugins.irc.connect.call(null,irc_client,server__$1,nickname__$1);
return lt.objs.tabs.add_or_focus_BANG_.call(null,irc_client);
})], null)], null)], null));
})], null));
}

//# sourceMappingURL=lt-irc_compiled.js.map