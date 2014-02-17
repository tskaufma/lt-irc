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
lt.plugins.irc.remove_listeners = (function remove_listeners(this$,client){cljs.core.map.call(null,(function (p1__34378_SHARP_){return client.removeAllListeners(new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(p1__34378_SHARP_));
}),new cljs.core.Keyword(null,"irc-events","irc-events",2694606174).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"irc-events","irc-events",2694606174),cljs.core.PersistentVector.EMPTY], null));
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-window","lt.plugins.irc/irc-window",639445884),new cljs.core.Keyword(null,"name","name",1017277949),"IRC Window",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword("lt.plugins.irc","send-message","lt.plugins.irc/send-message",4600947067),new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136),new cljs.core.Keyword("lt.plugins.irc","on-destory-part","lt.plugins.irc/on-destory-part",2717239859)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client,channel){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"channel","channel",1752854645),channel,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),channel], null)], null));
var c_34495 = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client));lt.plugins.irc.add_listener.call(null,this$,c_34495,[cljs.core.str("message"),cljs.core.str(channel)].join(''),(function (from,text,message){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),from,channel,text);
}));
lt.plugins.irc.add_listener.call(null,this$,c_34495,[cljs.core.str("names"),cljs.core.str(channel)].join(''),(function (nicks){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nicks","nicks",1118718178),lt.util.cljs.js__GT_clj.call(null,nicks)], null));
}));
c_34495.join(channel);
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
lt.plugins.irc.ui = (function ui(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__34389(s__34390){return (new cljs.core.LazySeq(null,(function (){var s__34390__$1 = s__34390;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34390__$1);if(temp__4092__auto__)
{var s__34390__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34390__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__34390__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__34392 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__34391 = 0;while(true){
if((i__34391 < size__7465__auto__))
{var msg = cljs.core._nth.call(null,c__7464__auto__,i__34391);cljs.core.chunk_append.call(null,b__34392,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null));
{
var G__34496 = (i__34391 + 1);
i__34391 = G__34496;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34392),iter__34389.call(null,cljs.core.chunk_rest.call(null,s__34390__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34392),null);
}
} else
{var msg = cljs.core.first.call(null,s__34390__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null),iter__34389.call(null,cljs.core.rest.call(null,s__34390__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(this$)));
})()], null)], null));var seq__34393_34497 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__34394_34498 = null;var count__34395_34499 = 0;var i__34396_34500 = 0;while(true){
if((i__34396_34500 < count__34395_34499))
{var vec__34397_34501 = cljs.core._nth.call(null,chunk__34394_34498,i__34396_34500);var ev__8118__auto___34502 = cljs.core.nth.call(null,vec__34397_34501,0,null);var func__8119__auto___34503 = cljs.core.nth.call(null,vec__34397_34501,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34502,func__8119__auto___34503);
{
var G__34504 = seq__34393_34497;
var G__34505 = chunk__34394_34498;
var G__34506 = count__34395_34499;
var G__34507 = (i__34396_34500 + 1);
seq__34393_34497 = G__34504;
chunk__34394_34498 = G__34505;
count__34395_34499 = G__34506;
i__34396_34500 = G__34507;
continue;
}
} else
{var temp__4092__auto___34508 = cljs.core.seq.call(null,seq__34393_34497);if(temp__4092__auto___34508)
{var seq__34393_34509__$1 = temp__4092__auto___34508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34393_34509__$1))
{var c__7497__auto___34510 = cljs.core.chunk_first.call(null,seq__34393_34509__$1);{
var G__34511 = cljs.core.chunk_rest.call(null,seq__34393_34509__$1);
var G__34512 = c__7497__auto___34510;
var G__34513 = cljs.core.count.call(null,c__7497__auto___34510);
var G__34514 = 0;
seq__34393_34497 = G__34511;
chunk__34394_34498 = G__34512;
count__34395_34499 = G__34513;
i__34396_34500 = G__34514;
continue;
}
} else
{var vec__34398_34515 = cljs.core.first.call(null,seq__34393_34509__$1);var ev__8118__auto___34516 = cljs.core.nth.call(null,vec__34398_34515,0,null);var func__8119__auto___34517 = cljs.core.nth.call(null,vec__34398_34515,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34516,func__8119__auto___34517);
{
var G__34518 = cljs.core.next.call(null,seq__34393_34509__$1);
var G__34519 = null;
var G__34520 = 0;
var G__34521 = 0;
seq__34393_34497 = G__34518;
chunk__34394_34498 = G__34519;
count__34395_34499 = G__34520;
i__34396_34500 = G__34521;
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
lt.plugins.irc.ui_raw = (function ui_raw(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__34409(s__34410){return (new cljs.core.LazySeq(null,(function (){var s__34410__$1 = s__34410;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34410__$1);if(temp__4092__auto__)
{var s__34410__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34410__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__34410__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__34412 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__34411 = 0;while(true){
if((i__34411 < size__7465__auto__))
{var msg = cljs.core._nth.call(null,c__7464__auto__,i__34411);cljs.core.chunk_append.call(null,b__34412,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["command"])),cljs.core.str(". "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["args"])),cljs.core.str("")].join('')], null));
{
var G__34522 = (i__34411 + 1);
i__34411 = G__34522;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34412),iter__34409.call(null,cljs.core.chunk_rest.call(null,s__34410__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34412),null);
}
} else
{var msg = cljs.core.first.call(null,s__34410__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str("["),cljs.core.str(lt.plugins.irc.format_time.call(null,new cljs.core.Keyword(null,"time","time",1017464383).cljs$core$IFn$_invoke$arity$1(msg))),cljs.core.str("] "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["command"])),cljs.core.str(". "),cljs.core.str((new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)["args"])),cljs.core.str("")].join('')], null),iter__34409.call(null,cljs.core.rest.call(null,s__34410__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"raw-msgs","raw-msgs",1471119113).cljs$core$IFn$_invoke$arity$1(this$)));
})()], null)], null));var seq__34413_34523 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__34414_34524 = null;var count__34415_34525 = 0;var i__34416_34526 = 0;while(true){
if((i__34416_34526 < count__34415_34525))
{var vec__34417_34527 = cljs.core._nth.call(null,chunk__34414_34524,i__34416_34526);var ev__8118__auto___34528 = cljs.core.nth.call(null,vec__34417_34527,0,null);var func__8119__auto___34529 = cljs.core.nth.call(null,vec__34417_34527,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34528,func__8119__auto___34529);
{
var G__34530 = seq__34413_34523;
var G__34531 = chunk__34414_34524;
var G__34532 = count__34415_34525;
var G__34533 = (i__34416_34526 + 1);
seq__34413_34523 = G__34530;
chunk__34414_34524 = G__34531;
count__34415_34525 = G__34532;
i__34416_34526 = G__34533;
continue;
}
} else
{var temp__4092__auto___34534 = cljs.core.seq.call(null,seq__34413_34523);if(temp__4092__auto___34534)
{var seq__34413_34535__$1 = temp__4092__auto___34534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34413_34535__$1))
{var c__7497__auto___34536 = cljs.core.chunk_first.call(null,seq__34413_34535__$1);{
var G__34537 = cljs.core.chunk_rest.call(null,seq__34413_34535__$1);
var G__34538 = c__7497__auto___34536;
var G__34539 = cljs.core.count.call(null,c__7497__auto___34536);
var G__34540 = 0;
seq__34413_34523 = G__34537;
chunk__34414_34524 = G__34538;
count__34415_34525 = G__34539;
i__34416_34526 = G__34540;
continue;
}
} else
{var vec__34418_34541 = cljs.core.first.call(null,seq__34413_34535__$1);var ev__8118__auto___34542 = cljs.core.nth.call(null,vec__34418_34541,0,null);var func__8119__auto___34543 = cljs.core.nth.call(null,vec__34418_34541,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34542,func__8119__auto___34543);
{
var G__34544 = cljs.core.next.call(null,seq__34413_34535__$1);
var G__34545 = null;
var G__34546 = 0;
var G__34547 = 0;
seq__34413_34523 = G__34544;
chunk__34414_34524 = G__34545;
count__34415_34525 = G__34546;
i__34416_34526 = G__34547;
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
lt.plugins.irc.nick_list = (function nick_list(nicks){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__34433(s__34434){return (new cljs.core.LazySeq(null,(function (){var s__34434__$1 = s__34434;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34434__$1);if(temp__4092__auto__)
{var s__34434__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34434__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__34434__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__34436 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__34435 = 0;while(true){
if((i__34435 < size__7465__auto__))
{var vec__34439 = cljs.core._nth.call(null,c__7464__auto__,i__34435);var nick = cljs.core.nth.call(null,vec__34439,0,null);var status = cljs.core.nth.call(null,vec__34439,1,null);cljs.core.chunk_append.call(null,b__34436,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(status),cljs.core.str(nick)].join('')], null));
{
var G__34548 = (i__34435 + 1);
i__34435 = G__34548;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34436),iter__34433.call(null,cljs.core.chunk_rest.call(null,s__34434__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34436),null);
}
} else
{var vec__34440 = cljs.core.first.call(null,s__34434__$2);var nick = cljs.core.nth.call(null,vec__34440,0,null);var status = cljs.core.nth.call(null,vec__34440,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(status),cljs.core.str(nick)].join('')], null),iter__34433.call(null,cljs.core.rest.call(null,s__34434__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,nicks);
})()], null));var seq__34441_34549 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__34442_34550 = null;var count__34443_34551 = 0;var i__34444_34552 = 0;while(true){
if((i__34444_34552 < count__34443_34551))
{var vec__34445_34553 = cljs.core._nth.call(null,chunk__34442_34550,i__34444_34552);var ev__8118__auto___34554 = cljs.core.nth.call(null,vec__34445_34553,0,null);var func__8119__auto___34555 = cljs.core.nth.call(null,vec__34445_34553,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34554,func__8119__auto___34555);
{
var G__34556 = seq__34441_34549;
var G__34557 = chunk__34442_34550;
var G__34558 = count__34443_34551;
var G__34559 = (i__34444_34552 + 1);
seq__34441_34549 = G__34556;
chunk__34442_34550 = G__34557;
count__34443_34551 = G__34558;
i__34444_34552 = G__34559;
continue;
}
} else
{var temp__4092__auto___34560 = cljs.core.seq.call(null,seq__34441_34549);if(temp__4092__auto___34560)
{var seq__34441_34561__$1 = temp__4092__auto___34560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34441_34561__$1))
{var c__7497__auto___34562 = cljs.core.chunk_first.call(null,seq__34441_34561__$1);{
var G__34563 = cljs.core.chunk_rest.call(null,seq__34441_34561__$1);
var G__34564 = c__7497__auto___34562;
var G__34565 = cljs.core.count.call(null,c__7497__auto___34562);
var G__34566 = 0;
seq__34441_34549 = G__34563;
chunk__34442_34550 = G__34564;
count__34443_34551 = G__34565;
i__34444_34552 = G__34566;
continue;
}
} else
{var vec__34446_34567 = cljs.core.first.call(null,seq__34441_34561__$1);var ev__8118__auto___34568 = cljs.core.nth.call(null,vec__34446_34567,0,null);var func__8119__auto___34569 = cljs.core.nth.call(null,vec__34446_34567,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34568,func__8119__auto___34569);
{
var G__34570 = cljs.core.next.call(null,seq__34441_34561__$1);
var G__34571 = null;
var G__34572 = 0;
var G__34573 = 0;
seq__34441_34549 = G__34570;
chunk__34442_34550 = G__34571;
count__34443_34551 = G__34572;
i__34444_34552 = G__34573;
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
lt.plugins.irc.handle_message = (function handle_message(this$){var info_34574 = (function (){var text = lt.util.dom.$.call(null,new cljs.core.Keyword(null,".text",".text",1059942861),lt.object.__GT_content.call(null,this$));return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),lt.util.dom.val.call(null,text)], null);
})();lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"send","send",1017430778),new cljs.core.Keyword(null,"nickname","nickname",1084595168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))),new cljs.core.Keyword(null,"channel","channel",1752854645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(info_34574));
return lt.util.dom.val.call(null,lt.util.dom.$.call(null,".text",lt.object.__GT_content.call(null,this$)),"");
});
lt.plugins.irc.input_text = (function input_text(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.text","input.text",2355324995),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"style","style",1123684643),"width: 85%"], null)], null));var seq__34453_34575 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (e){if(cljs.core._EQ_.call(null,(e["keyCode"]),13))
{return lt.plugins.irc.handle_message.call(null,this$);
} else
{return null;
}
})], null)));var chunk__34454_34576 = null;var count__34455_34577 = 0;var i__34456_34578 = 0;while(true){
if((i__34456_34578 < count__34455_34577))
{var vec__34457_34579 = cljs.core._nth.call(null,chunk__34454_34576,i__34456_34578);var ev__8118__auto___34580 = cljs.core.nth.call(null,vec__34457_34579,0,null);var func__8119__auto___34581 = cljs.core.nth.call(null,vec__34457_34579,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34580,func__8119__auto___34581);
{
var G__34582 = seq__34453_34575;
var G__34583 = chunk__34454_34576;
var G__34584 = count__34455_34577;
var G__34585 = (i__34456_34578 + 1);
seq__34453_34575 = G__34582;
chunk__34454_34576 = G__34583;
count__34455_34577 = G__34584;
i__34456_34578 = G__34585;
continue;
}
} else
{var temp__4092__auto___34586 = cljs.core.seq.call(null,seq__34453_34575);if(temp__4092__auto___34586)
{var seq__34453_34587__$1 = temp__4092__auto___34586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34453_34587__$1))
{var c__7497__auto___34588 = cljs.core.chunk_first.call(null,seq__34453_34587__$1);{
var G__34589 = cljs.core.chunk_rest.call(null,seq__34453_34587__$1);
var G__34590 = c__7497__auto___34588;
var G__34591 = cljs.core.count.call(null,c__7497__auto___34588);
var G__34592 = 0;
seq__34453_34575 = G__34589;
chunk__34454_34576 = G__34590;
count__34455_34577 = G__34591;
i__34456_34578 = G__34592;
continue;
}
} else
{var vec__34458_34593 = cljs.core.first.call(null,seq__34453_34587__$1);var ev__8118__auto___34594 = cljs.core.nth.call(null,vec__34458_34593,0,null);var func__8119__auto___34595 = cljs.core.nth.call(null,vec__34458_34593,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34594,func__8119__auto___34595);
{
var G__34596 = cljs.core.next.call(null,seq__34453_34587__$1);
var G__34597 = null;
var G__34598 = 0;
var G__34599 = 0;
seq__34453_34575 = G__34596;
chunk__34454_34576 = G__34597;
count__34455_34577 = G__34598;
i__34456_34578 = G__34599;
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
lt.plugins.irc.send_button = (function send_button(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),"Send"], null)], null));var seq__34465_34600 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return lt.plugins.irc.handle_message.call(null,this$);
})], null)));var chunk__34466_34601 = null;var count__34467_34602 = 0;var i__34468_34603 = 0;while(true){
if((i__34468_34603 < count__34467_34602))
{var vec__34469_34604 = cljs.core._nth.call(null,chunk__34466_34601,i__34468_34603);var ev__8118__auto___34605 = cljs.core.nth.call(null,vec__34469_34604,0,null);var func__8119__auto___34606 = cljs.core.nth.call(null,vec__34469_34604,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34605,func__8119__auto___34606);
{
var G__34607 = seq__34465_34600;
var G__34608 = chunk__34466_34601;
var G__34609 = count__34467_34602;
var G__34610 = (i__34468_34603 + 1);
seq__34465_34600 = G__34607;
chunk__34466_34601 = G__34608;
count__34467_34602 = G__34609;
i__34468_34603 = G__34610;
continue;
}
} else
{var temp__4092__auto___34611 = cljs.core.seq.call(null,seq__34465_34600);if(temp__4092__auto___34611)
{var seq__34465_34612__$1 = temp__4092__auto___34611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34465_34612__$1))
{var c__7497__auto___34613 = cljs.core.chunk_first.call(null,seq__34465_34612__$1);{
var G__34614 = cljs.core.chunk_rest.call(null,seq__34465_34612__$1);
var G__34615 = c__7497__auto___34613;
var G__34616 = cljs.core.count.call(null,c__7497__auto___34613);
var G__34617 = 0;
seq__34465_34600 = G__34614;
chunk__34466_34601 = G__34615;
count__34467_34602 = G__34616;
i__34468_34603 = G__34617;
continue;
}
} else
{var vec__34470_34618 = cljs.core.first.call(null,seq__34465_34612__$1);var ev__8118__auto___34619 = cljs.core.nth.call(null,vec__34470_34618,0,null);var func__8119__auto___34620 = cljs.core.nth.call(null,vec__34470_34618,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34619,func__8119__auto___34620);
{
var G__34621 = cljs.core.next.call(null,seq__34465_34612__$1);
var G__34622 = null;
var G__34623 = 0;
var G__34624 = 0;
seq__34465_34600 = G__34621;
chunk__34466_34601 = G__34622;
count__34467_34602 = G__34623;
i__34468_34603 = G__34624;
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
lt.plugins.irc.join_button = (function join_button(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),lt.plugins.irc.submit,new cljs.core.Keyword(null,"value","value",1125876963),[cljs.core.str("Join a channel")].join('')], null)], null));var seq__34477_34625 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var channel = lt.plugins.irc.popup_input.call(null);return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect to IRC Channel",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Enter channel to join."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Channel: "], null),channel], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"cancel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"connect",new cljs.core.Keyword(null,"action","action",3885920680),((function (channel){
return (function (){var channel__$1 = lt.util.dom.val.call(null,channel);return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-window","lt.plugins.irc/irc-window",639445884),this$,channel__$1));
});})(channel))
], null)], null)], null));
})], null)));var chunk__34478_34626 = null;var count__34479_34627 = 0;var i__34480_34628 = 0;while(true){
if((i__34480_34628 < count__34479_34627))
{var vec__34481_34629 = cljs.core._nth.call(null,chunk__34478_34626,i__34480_34628);var ev__8118__auto___34630 = cljs.core.nth.call(null,vec__34481_34629,0,null);var func__8119__auto___34631 = cljs.core.nth.call(null,vec__34481_34629,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34630,func__8119__auto___34631);
{
var G__34632 = seq__34477_34625;
var G__34633 = chunk__34478_34626;
var G__34634 = count__34479_34627;
var G__34635 = (i__34480_34628 + 1);
seq__34477_34625 = G__34632;
chunk__34478_34626 = G__34633;
count__34479_34627 = G__34634;
i__34480_34628 = G__34635;
continue;
}
} else
{var temp__4092__auto___34636 = cljs.core.seq.call(null,seq__34477_34625);if(temp__4092__auto___34636)
{var seq__34477_34637__$1 = temp__4092__auto___34636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34477_34637__$1))
{var c__7497__auto___34638 = cljs.core.chunk_first.call(null,seq__34477_34637__$1);{
var G__34639 = cljs.core.chunk_rest.call(null,seq__34477_34637__$1);
var G__34640 = c__7497__auto___34638;
var G__34641 = cljs.core.count.call(null,c__7497__auto___34638);
var G__34642 = 0;
seq__34477_34625 = G__34639;
chunk__34478_34626 = G__34640;
count__34479_34627 = G__34641;
i__34480_34628 = G__34642;
continue;
}
} else
{var vec__34482_34643 = cljs.core.first.call(null,seq__34477_34637__$1);var ev__8118__auto___34644 = cljs.core.nth.call(null,vec__34482_34643,0,null);var func__8119__auto___34645 = cljs.core.nth.call(null,vec__34482_34643,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34644,func__8119__auto___34645);
{
var G__34646 = cljs.core.next.call(null,seq__34477_34637__$1);
var G__34647 = null;
var G__34648 = 0;
var G__34649 = 0;
seq__34477_34625 = G__34646;
chunk__34478_34626 = G__34647;
count__34479_34627 = G__34648;
i__34480_34628 = G__34649;
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
lt.plugins.irc.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___34650 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___34650))
{var ts_34651 = temp__4092__auto___34650;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_34651))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_34651);
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
lt.plugins.irc.popup_input = (function popup_input(){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text"], null)], null));var seq__34489_34652 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__34490_34653 = null;var count__34491_34654 = 0;var i__34492_34655 = 0;while(true){
if((i__34492_34655 < count__34491_34654))
{var vec__34493_34656 = cljs.core._nth.call(null,chunk__34490_34653,i__34492_34655);var ev__8118__auto___34657 = cljs.core.nth.call(null,vec__34493_34656,0,null);var func__8119__auto___34658 = cljs.core.nth.call(null,vec__34493_34656,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34657,func__8119__auto___34658);
{
var G__34659 = seq__34489_34652;
var G__34660 = chunk__34490_34653;
var G__34661 = count__34491_34654;
var G__34662 = (i__34492_34655 + 1);
seq__34489_34652 = G__34659;
chunk__34490_34653 = G__34660;
count__34491_34654 = G__34661;
i__34492_34655 = G__34662;
continue;
}
} else
{var temp__4092__auto___34663 = cljs.core.seq.call(null,seq__34489_34652);if(temp__4092__auto___34663)
{var seq__34489_34664__$1 = temp__4092__auto___34663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34489_34664__$1))
{var c__7497__auto___34665 = cljs.core.chunk_first.call(null,seq__34489_34664__$1);{
var G__34666 = cljs.core.chunk_rest.call(null,seq__34489_34664__$1);
var G__34667 = c__7497__auto___34665;
var G__34668 = cljs.core.count.call(null,c__7497__auto___34665);
var G__34669 = 0;
seq__34489_34652 = G__34666;
chunk__34490_34653 = G__34667;
count__34491_34654 = G__34668;
i__34492_34655 = G__34669;
continue;
}
} else
{var vec__34494_34670 = cljs.core.first.call(null,seq__34489_34664__$1);var ev__8118__auto___34671 = cljs.core.nth.call(null,vec__34494_34670,0,null);var func__8119__auto___34672 = cljs.core.nth.call(null,vec__34494_34670,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___34671,func__8119__auto___34672);
{
var G__34673 = cljs.core.next.call(null,seq__34489_34664__$1);
var G__34674 = null;
var G__34675 = 0;
var G__34676 = 0;
seq__34489_34652 = G__34673;
chunk__34490_34653 = G__34674;
count__34491_34654 = G__34675;
i__34492_34655 = G__34676;
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