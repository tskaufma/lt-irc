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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-client","lt.plugins.irc/irc-client",1143341983),new cljs.core.Keyword(null,"name","name",1017277949),"IRC Client",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136),new cljs.core.Keyword("lt.plugins.irc","on-destory-disconnect","lt.plugins.irc/on-destory-disconnect",3271028380)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),lt.plugins.irc.join_button.call(null,this$,"#lighttable-irc-test")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll"], null),crate.binding.bound.call(null,this$,lt.plugins.irc.ui)], null)], null);
}));
lt.plugins.irc.connect = (function connect(irc_client,server,nickname){var client = (function (){var Client = lt.plugins.irc.irc.Client;return (new Client(server,nickname));
})();lt.object.merge_BANG_.call(null,irc_client,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"nickname","nickname",1084595168),nickname,new cljs.core.Keyword(null,"server","server",4403045045),server,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str(nickname),cljs.core.str("@"),cljs.core.str(server)].join('')], null)], null));
client.addListener("message",(function (from,to,message){return lt.object.raise.call(null,irc_client,new cljs.core.Keyword(null,"message","message",1968829305),from,to,message);
}));
return client.addListener("error",(function (message){return lt.objs.console.error.call(null,[cljs.core.str("an error occured "),cljs.core.str((message["command"])),cljs.core.str(". "),cljs.core.str((message["args"]))].join(''));
}));
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-window","lt.plugins.irc/irc-window",639445884),new cljs.core.Keyword(null,"name","name",1017277949),"IRC Window",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword("lt.plugins.irc","send-message","lt.plugins.irc/send-message",4600947067),new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136),new cljs.core.Keyword("lt.plugins.irc","on-destory-part","lt.plugins.irc/on-destory-part",2717239859)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client,channel){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"channel","channel",1752854645),channel,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),channel], null)], null));
new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).addListener([cljs.core.str("message"),cljs.core.str(channel)].join(''),(function (from,text,message){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),from,channel,text);
}));
new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).join(channel);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll"], null),crate.binding.bound.call(null,this$,lt.plugins.irc.ui)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"position:absolute; bottom:0px; width: 100%;"], null),lt.plugins.irc.input_text.call(null,this$),lt.plugins.irc.send_button.call(null,this$)], null)], null);
}));
lt.plugins.irc.ui = (function ui(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__8880(s__8881){return (new cljs.core.LazySeq(null,(function (){var s__8881__$1 = s__8881;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8881__$1);if(temp__4092__auto__)
{var s__8881__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8881__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__8881__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__8883 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__8882 = 0;while(true){
if((i__8882 < size__7465__auto__))
{var msg = cljs.core._nth.call(null,c__7464__auto__,i__8882);cljs.core.chunk_append.call(null,b__8883,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(""),cljs.core.str(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null));
{
var G__8938 = (i__8882 + 1);
i__8882 = G__8938;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8883),iter__8880.call(null,cljs.core.chunk_rest.call(null,s__8881__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8883),null);
}
} else
{var msg = cljs.core.first.call(null,s__8881__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(""),cljs.core.str(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null),iter__8880.call(null,cljs.core.rest.call(null,s__8881__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(this$)));
})()], null)], null));var seq__8884_8939 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8885_8940 = null;var count__8886_8941 = 0;var i__8887_8942 = 0;while(true){
if((i__8887_8942 < count__8886_8941))
{var vec__8888_8943 = cljs.core._nth.call(null,chunk__8885_8940,i__8887_8942);var ev__8118__auto___8944 = cljs.core.nth.call(null,vec__8888_8943,0,null);var func__8119__auto___8945 = cljs.core.nth.call(null,vec__8888_8943,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8944,func__8119__auto___8945);
{
var G__8946 = seq__8884_8939;
var G__8947 = chunk__8885_8940;
var G__8948 = count__8886_8941;
var G__8949 = (i__8887_8942 + 1);
seq__8884_8939 = G__8946;
chunk__8885_8940 = G__8947;
count__8886_8941 = G__8948;
i__8887_8942 = G__8949;
continue;
}
} else
{var temp__4092__auto___8950 = cljs.core.seq.call(null,seq__8884_8939);if(temp__4092__auto___8950)
{var seq__8884_8951__$1 = temp__4092__auto___8950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8884_8951__$1))
{var c__7497__auto___8952 = cljs.core.chunk_first.call(null,seq__8884_8951__$1);{
var G__8953 = cljs.core.chunk_rest.call(null,seq__8884_8951__$1);
var G__8954 = c__7497__auto___8952;
var G__8955 = cljs.core.count.call(null,c__7497__auto___8952);
var G__8956 = 0;
seq__8884_8939 = G__8953;
chunk__8885_8940 = G__8954;
count__8886_8941 = G__8955;
i__8887_8942 = G__8956;
continue;
}
} else
{var vec__8889_8957 = cljs.core.first.call(null,seq__8884_8951__$1);var ev__8118__auto___8958 = cljs.core.nth.call(null,vec__8889_8957,0,null);var func__8119__auto___8959 = cljs.core.nth.call(null,vec__8889_8957,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8958,func__8119__auto___8959);
{
var G__8960 = cljs.core.next.call(null,seq__8884_8951__$1);
var G__8961 = null;
var G__8962 = 0;
var G__8963 = 0;
seq__8884_8939 = G__8960;
chunk__8885_8940 = G__8961;
count__8886_8941 = G__8962;
i__8887_8942 = G__8963;
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
lt.plugins.irc.handle_message = (function handle_message(this$){var info_8964 = (function (){var text = lt.util.dom.$.call(null,new cljs.core.Keyword(null,".text",".text",1059942861),lt.object.__GT_content.call(null,this$));return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),lt.util.dom.val.call(null,text)], null);
})();lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"send","send",1017430778),new cljs.core.Keyword(null,"nickname","nickname",1084595168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))),new cljs.core.Keyword(null,"channel","channel",1752854645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(info_8964));
return lt.util.dom.val.call(null,lt.util.dom.$.call(null,".text",lt.object.__GT_content.call(null,this$)),"");
});
lt.plugins.irc.input_text = (function input_text(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.text","input.text",2355324995),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"style","style",1123684643),"width: 85%"], null)], null));var seq__8896_8965 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (e){if(cljs.core._EQ_.call(null,(e["keyCode"]),13))
{return lt.plugins.irc.handle_message.call(null,this$);
} else
{return null;
}
})], null)));var chunk__8897_8966 = null;var count__8898_8967 = 0;var i__8899_8968 = 0;while(true){
if((i__8899_8968 < count__8898_8967))
{var vec__8900_8969 = cljs.core._nth.call(null,chunk__8897_8966,i__8899_8968);var ev__8118__auto___8970 = cljs.core.nth.call(null,vec__8900_8969,0,null);var func__8119__auto___8971 = cljs.core.nth.call(null,vec__8900_8969,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8970,func__8119__auto___8971);
{
var G__8972 = seq__8896_8965;
var G__8973 = chunk__8897_8966;
var G__8974 = count__8898_8967;
var G__8975 = (i__8899_8968 + 1);
seq__8896_8965 = G__8972;
chunk__8897_8966 = G__8973;
count__8898_8967 = G__8974;
i__8899_8968 = G__8975;
continue;
}
} else
{var temp__4092__auto___8976 = cljs.core.seq.call(null,seq__8896_8965);if(temp__4092__auto___8976)
{var seq__8896_8977__$1 = temp__4092__auto___8976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8896_8977__$1))
{var c__7497__auto___8978 = cljs.core.chunk_first.call(null,seq__8896_8977__$1);{
var G__8979 = cljs.core.chunk_rest.call(null,seq__8896_8977__$1);
var G__8980 = c__7497__auto___8978;
var G__8981 = cljs.core.count.call(null,c__7497__auto___8978);
var G__8982 = 0;
seq__8896_8965 = G__8979;
chunk__8897_8966 = G__8980;
count__8898_8967 = G__8981;
i__8899_8968 = G__8982;
continue;
}
} else
{var vec__8901_8983 = cljs.core.first.call(null,seq__8896_8977__$1);var ev__8118__auto___8984 = cljs.core.nth.call(null,vec__8901_8983,0,null);var func__8119__auto___8985 = cljs.core.nth.call(null,vec__8901_8983,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8984,func__8119__auto___8985);
{
var G__8986 = cljs.core.next.call(null,seq__8896_8977__$1);
var G__8987 = null;
var G__8988 = 0;
var G__8989 = 0;
seq__8896_8965 = G__8986;
chunk__8897_8966 = G__8987;
count__8898_8967 = G__8988;
i__8899_8968 = G__8989;
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
lt.plugins.irc.send_button = (function send_button(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),"Send",new cljs.core.Keyword(null,"style","style",1123684643),"width: 13%;"], null)], null));var seq__8908_8990 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return lt.plugins.irc.handle_message.call(null,this$);
})], null)));var chunk__8909_8991 = null;var count__8910_8992 = 0;var i__8911_8993 = 0;while(true){
if((i__8911_8993 < count__8910_8992))
{var vec__8912_8994 = cljs.core._nth.call(null,chunk__8909_8991,i__8911_8993);var ev__8118__auto___8995 = cljs.core.nth.call(null,vec__8912_8994,0,null);var func__8119__auto___8996 = cljs.core.nth.call(null,vec__8912_8994,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___8995,func__8119__auto___8996);
{
var G__8997 = seq__8908_8990;
var G__8998 = chunk__8909_8991;
var G__8999 = count__8910_8992;
var G__9000 = (i__8911_8993 + 1);
seq__8908_8990 = G__8997;
chunk__8909_8991 = G__8998;
count__8910_8992 = G__8999;
i__8911_8993 = G__9000;
continue;
}
} else
{var temp__4092__auto___9001 = cljs.core.seq.call(null,seq__8908_8990);if(temp__4092__auto___9001)
{var seq__8908_9002__$1 = temp__4092__auto___9001;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8908_9002__$1))
{var c__7497__auto___9003 = cljs.core.chunk_first.call(null,seq__8908_9002__$1);{
var G__9004 = cljs.core.chunk_rest.call(null,seq__8908_9002__$1);
var G__9005 = c__7497__auto___9003;
var G__9006 = cljs.core.count.call(null,c__7497__auto___9003);
var G__9007 = 0;
seq__8908_8990 = G__9004;
chunk__8909_8991 = G__9005;
count__8910_8992 = G__9006;
i__8911_8993 = G__9007;
continue;
}
} else
{var vec__8913_9008 = cljs.core.first.call(null,seq__8908_9002__$1);var ev__8118__auto___9009 = cljs.core.nth.call(null,vec__8913_9008,0,null);var func__8119__auto___9010 = cljs.core.nth.call(null,vec__8913_9008,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9009,func__8119__auto___9010);
{
var G__9011 = cljs.core.next.call(null,seq__8908_9002__$1);
var G__9012 = null;
var G__9013 = 0;
var G__9014 = 0;
seq__8908_8990 = G__9011;
chunk__8909_8991 = G__9012;
count__8910_8992 = G__9013;
i__8911_8993 = G__9014;
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
lt.plugins.irc.join_button = (function join_button(this$,channel){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),lt.plugins.irc.submit,new cljs.core.Keyword(null,"value","value",1125876963),[cljs.core.str("Join "),cljs.core.str(channel)].join('')], null)], null));var seq__8920_9015 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.irc","irc-window","lt.plugins.irc/irc-window",639445884),this$,channel));
})], null)));var chunk__8921_9016 = null;var count__8922_9017 = 0;var i__8923_9018 = 0;while(true){
if((i__8923_9018 < count__8922_9017))
{var vec__8924_9019 = cljs.core._nth.call(null,chunk__8921_9016,i__8923_9018);var ev__8118__auto___9020 = cljs.core.nth.call(null,vec__8924_9019,0,null);var func__8119__auto___9021 = cljs.core.nth.call(null,vec__8924_9019,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9020,func__8119__auto___9021);
{
var G__9022 = seq__8920_9015;
var G__9023 = chunk__8921_9016;
var G__9024 = count__8922_9017;
var G__9025 = (i__8923_9018 + 1);
seq__8920_9015 = G__9022;
chunk__8921_9016 = G__9023;
count__8922_9017 = G__9024;
i__8923_9018 = G__9025;
continue;
}
} else
{var temp__4092__auto___9026 = cljs.core.seq.call(null,seq__8920_9015);if(temp__4092__auto___9026)
{var seq__8920_9027__$1 = temp__4092__auto___9026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8920_9027__$1))
{var c__7497__auto___9028 = cljs.core.chunk_first.call(null,seq__8920_9027__$1);{
var G__9029 = cljs.core.chunk_rest.call(null,seq__8920_9027__$1);
var G__9030 = c__7497__auto___9028;
var G__9031 = cljs.core.count.call(null,c__7497__auto___9028);
var G__9032 = 0;
seq__8920_9015 = G__9029;
chunk__8921_9016 = G__9030;
count__8922_9017 = G__9031;
i__8923_9018 = G__9032;
continue;
}
} else
{var vec__8925_9033 = cljs.core.first.call(null,seq__8920_9027__$1);var ev__8118__auto___9034 = cljs.core.nth.call(null,vec__8925_9033,0,null);var func__8119__auto___9035 = cljs.core.nth.call(null,vec__8925_9033,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9034,func__8119__auto___9035);
{
var G__9036 = cljs.core.next.call(null,seq__8920_9027__$1);
var G__9037 = null;
var G__9038 = 0;
var G__9039 = 0;
seq__8920_9015 = G__9036;
chunk__8921_9016 = G__9037;
count__8922_9017 = G__9038;
i__8923_9018 = G__9039;
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
lt.plugins.irc.__BEH__log_event = (function __BEH__log_event(this$,from,to,message){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.conj.call(null,new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1017056028),from,new cljs.core.Keyword(null,"to","to",1013907949),to,new cljs.core.Keyword(null,"message","message",1968829305),message], null))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__log_event,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",1968829305),null], null), null));
lt.plugins.irc.__BEH__send_message = (function __BEH__send_message(this$,from,to,message){new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))).say(to,message);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),from,to,message);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","send-message","lt.plugins.irc/send-message",4600947067),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__send_message,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send","send",1017430778),null], null), null));
lt.plugins.irc.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___9040 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9040))
{var ts_9041 = temp__4092__auto___9040;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9041))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9041);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.irc.__BEH__on_destory_part = (function __BEH__on_destory_part(this$){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));return client.part(new cljs.core.Keyword(null,"channel","channel",1752854645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","on-destory-part","lt.plugins.irc/on-destory-part",2717239859),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__on_destory_part,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.irc.__BEH__on_destory_disconnect = (function __BEH__on_destory_disconnect(this$){var client = new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return client.disconnect();
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","on-destory-disconnect","lt.plugins.irc/on-destory-disconnect",3271028380),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.irc.__BEH__on_destory_disconnect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.irc.popup_input = (function popup_input(){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text"], null)], null));var seq__8932_9042 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8933_9043 = null;var count__8934_9044 = 0;var i__8935_9045 = 0;while(true){
if((i__8935_9045 < count__8934_9044))
{var vec__8936_9046 = cljs.core._nth.call(null,chunk__8933_9043,i__8935_9045);var ev__8118__auto___9047 = cljs.core.nth.call(null,vec__8936_9046,0,null);var func__8119__auto___9048 = cljs.core.nth.call(null,vec__8936_9046,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9047,func__8119__auto___9048);
{
var G__9049 = seq__8932_9042;
var G__9050 = chunk__8933_9043;
var G__9051 = count__8934_9044;
var G__9052 = (i__8935_9045 + 1);
seq__8932_9042 = G__9049;
chunk__8933_9043 = G__9050;
count__8934_9044 = G__9051;
i__8935_9045 = G__9052;
continue;
}
} else
{var temp__4092__auto___9053 = cljs.core.seq.call(null,seq__8932_9042);if(temp__4092__auto___9053)
{var seq__8932_9054__$1 = temp__4092__auto___9053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8932_9054__$1))
{var c__7497__auto___9055 = cljs.core.chunk_first.call(null,seq__8932_9054__$1);{
var G__9056 = cljs.core.chunk_rest.call(null,seq__8932_9054__$1);
var G__9057 = c__7497__auto___9055;
var G__9058 = cljs.core.count.call(null,c__7497__auto___9055);
var G__9059 = 0;
seq__8932_9042 = G__9056;
chunk__8933_9043 = G__9057;
count__8934_9044 = G__9058;
i__8935_9045 = G__9059;
continue;
}
} else
{var vec__8937_9060 = cljs.core.first.call(null,seq__8932_9054__$1);var ev__8118__auto___9061 = cljs.core.nth.call(null,vec__8937_9060,0,null);var func__8119__auto___9062 = cljs.core.nth.call(null,vec__8937_9060,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9061,func__8119__auto___9062);
{
var G__9063 = cljs.core.next.call(null,seq__8932_9054__$1);
var G__9064 = null;
var G__9065 = 0;
var G__9066 = 0;
seq__8932_9042 = G__9063;
chunk__8933_9043 = G__9064;
count__8934_9044 = G__9065;
i__8935_9045 = G__9066;
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
}

//# sourceMappingURL=lt-irc_compiled.js.map