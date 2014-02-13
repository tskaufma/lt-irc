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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.irc","tk","lt.plugins.irc/tk",2752415096),new cljs.core.Keyword(null,"name","name",1017277949),"TK",new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.irc","log-event","lt.plugins.irc/log-event",1956830606),new cljs.core.Keyword("lt.plugins.irc","send-message","lt.plugins.irc/send-message",4600947067),new cljs.core.Keyword("lt.plugins.irc","on-close-destroy","lt.plugins.irc/on-close-destroy",2661182136)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"overflow:scroll"], null),crate.binding.bound.call(null,this$,lt.plugins.irc.ui)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"position:absolute; bottom:0px; width: 100%;"], null),lt.plugins.irc.input_text.call(null,this$),lt.plugins.irc.send_button.call(null,this$)], null)], null);
}));
lt.plugins.irc.ui = (function ui(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__7466__auto__ = (function iter__9703(s__9704){return (new cljs.core.LazySeq(null,(function (){var s__9704__$1 = s__9704;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9704__$1);if(temp__4092__auto__)
{var s__9704__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9704__$2))
{var c__7464__auto__ = cljs.core.chunk_first.call(null,s__9704__$2);var size__7465__auto__ = cljs.core.count.call(null,c__7464__auto__);var b__9706 = cljs.core.chunk_buffer.call(null,size__7465__auto__);if((function (){var i__9705 = 0;while(true){
if((i__9705 < size__7465__auto__))
{var msg = cljs.core._nth.call(null,c__7464__auto__,i__9705);cljs.core.chunk_append.call(null,b__9706,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(""),cljs.core.str(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null));
{
var G__9737 = (i__9705 + 1);
i__9705 = G__9737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9706),iter__9703.call(null,cljs.core.chunk_rest.call(null,s__9704__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9706),null);
}
} else
{var msg = cljs.core.first.call(null,s__9704__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),[cljs.core.str(""),cljs.core.str(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(": <"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("")].join('')], null),iter__9703.call(null,cljs.core.rest.call(null,s__9704__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7466__auto__.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(this$)));
})()], null)], null));var seq__9707_9738 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9708_9739 = null;var count__9709_9740 = 0;var i__9710_9741 = 0;while(true){
if((i__9710_9741 < count__9709_9740))
{var vec__9711_9742 = cljs.core._nth.call(null,chunk__9708_9739,i__9710_9741);var ev__8118__auto___9743 = cljs.core.nth.call(null,vec__9711_9742,0,null);var func__8119__auto___9744 = cljs.core.nth.call(null,vec__9711_9742,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9743,func__8119__auto___9744);
{
var G__9745 = seq__9707_9738;
var G__9746 = chunk__9708_9739;
var G__9747 = count__9709_9740;
var G__9748 = (i__9710_9741 + 1);
seq__9707_9738 = G__9745;
chunk__9708_9739 = G__9746;
count__9709_9740 = G__9747;
i__9710_9741 = G__9748;
continue;
}
} else
{var temp__4092__auto___9749 = cljs.core.seq.call(null,seq__9707_9738);if(temp__4092__auto___9749)
{var seq__9707_9750__$1 = temp__4092__auto___9749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9707_9750__$1))
{var c__7497__auto___9751 = cljs.core.chunk_first.call(null,seq__9707_9750__$1);{
var G__9752 = cljs.core.chunk_rest.call(null,seq__9707_9750__$1);
var G__9753 = c__7497__auto___9751;
var G__9754 = cljs.core.count.call(null,c__7497__auto___9751);
var G__9755 = 0;
seq__9707_9738 = G__9752;
chunk__9708_9739 = G__9753;
count__9709_9740 = G__9754;
i__9710_9741 = G__9755;
continue;
}
} else
{var vec__9712_9756 = cljs.core.first.call(null,seq__9707_9750__$1);var ev__8118__auto___9757 = cljs.core.nth.call(null,vec__9712_9756,0,null);var func__8119__auto___9758 = cljs.core.nth.call(null,vec__9712_9756,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9757,func__8119__auto___9758);
{
var G__9759 = cljs.core.next.call(null,seq__9707_9750__$1);
var G__9760 = null;
var G__9761 = 0;
var G__9762 = 0;
seq__9707_9738 = G__9759;
chunk__9708_9739 = G__9760;
count__9709_9740 = G__9761;
i__9710_9741 = G__9762;
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
lt.plugins.irc.handle_message = (function handle_message(this$){var info_9763 = (function (){var text = lt.util.dom.$.call(null,new cljs.core.Keyword(null,".text",".text",1059942861),lt.object.__GT_content.call(null,this$));return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),lt.util.dom.val.call(null,text)], null);
})();lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"send","send",1017430778),"tskaufma4","#lighttable-irc-test",new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(info_9763));
return lt.util.dom.val.call(null,lt.util.dom.$.call(null,".text",lt.object.__GT_content.call(null,this$)),"");
});
lt.plugins.irc.input_text = (function input_text(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.text","input.text",2355324995),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"style","style",1123684643),"width: 85%"], null)], null));var seq__9719_9764 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (e){if(cljs.core._EQ_.call(null,(e["keyCode"]),13))
{return lt.plugins.irc.handle_message.call(null,this$);
} else
{return null;
}
})], null)));var chunk__9720_9765 = null;var count__9721_9766 = 0;var i__9722_9767 = 0;while(true){
if((i__9722_9767 < count__9721_9766))
{var vec__9723_9768 = cljs.core._nth.call(null,chunk__9720_9765,i__9722_9767);var ev__8118__auto___9769 = cljs.core.nth.call(null,vec__9723_9768,0,null);var func__8119__auto___9770 = cljs.core.nth.call(null,vec__9723_9768,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9769,func__8119__auto___9770);
{
var G__9771 = seq__9719_9764;
var G__9772 = chunk__9720_9765;
var G__9773 = count__9721_9766;
var G__9774 = (i__9722_9767 + 1);
seq__9719_9764 = G__9771;
chunk__9720_9765 = G__9772;
count__9721_9766 = G__9773;
i__9722_9767 = G__9774;
continue;
}
} else
{var temp__4092__auto___9775 = cljs.core.seq.call(null,seq__9719_9764);if(temp__4092__auto___9775)
{var seq__9719_9776__$1 = temp__4092__auto___9775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9719_9776__$1))
{var c__7497__auto___9777 = cljs.core.chunk_first.call(null,seq__9719_9776__$1);{
var G__9778 = cljs.core.chunk_rest.call(null,seq__9719_9776__$1);
var G__9779 = c__7497__auto___9777;
var G__9780 = cljs.core.count.call(null,c__7497__auto___9777);
var G__9781 = 0;
seq__9719_9764 = G__9778;
chunk__9720_9765 = G__9779;
count__9721_9766 = G__9780;
i__9722_9767 = G__9781;
continue;
}
} else
{var vec__9724_9782 = cljs.core.first.call(null,seq__9719_9776__$1);var ev__8118__auto___9783 = cljs.core.nth.call(null,vec__9724_9782,0,null);var func__8119__auto___9784 = cljs.core.nth.call(null,vec__9724_9782,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9783,func__8119__auto___9784);
{
var G__9785 = cljs.core.next.call(null,seq__9719_9776__$1);
var G__9786 = null;
var G__9787 = 0;
var G__9788 = 0;
seq__9719_9764 = G__9785;
chunk__9720_9765 = G__9786;
count__9721_9766 = G__9787;
i__9722_9767 = G__9788;
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
lt.plugins.irc.send_button = (function send_button(this$){var e__8117__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),"Send",new cljs.core.Keyword(null,"style","style",1123684643),"width: 13%;"], null)], null));var seq__9731_9789 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){return lt.plugins.irc.handle_message.call(null,this$);
})], null)));var chunk__9732_9790 = null;var count__9733_9791 = 0;var i__9734_9792 = 0;while(true){
if((i__9734_9792 < count__9733_9791))
{var vec__9735_9793 = cljs.core._nth.call(null,chunk__9732_9790,i__9734_9792);var ev__8118__auto___9794 = cljs.core.nth.call(null,vec__9735_9793,0,null);var func__8119__auto___9795 = cljs.core.nth.call(null,vec__9735_9793,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9794,func__8119__auto___9795);
{
var G__9796 = seq__9731_9789;
var G__9797 = chunk__9732_9790;
var G__9798 = count__9733_9791;
var G__9799 = (i__9734_9792 + 1);
seq__9731_9789 = G__9796;
chunk__9732_9790 = G__9797;
count__9733_9791 = G__9798;
i__9734_9792 = G__9799;
continue;
}
} else
{var temp__4092__auto___9800 = cljs.core.seq.call(null,seq__9731_9789);if(temp__4092__auto___9800)
{var seq__9731_9801__$1 = temp__4092__auto___9800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9731_9801__$1))
{var c__7497__auto___9802 = cljs.core.chunk_first.call(null,seq__9731_9801__$1);{
var G__9803 = cljs.core.chunk_rest.call(null,seq__9731_9801__$1);
var G__9804 = c__7497__auto___9802;
var G__9805 = cljs.core.count.call(null,c__7497__auto___9802);
var G__9806 = 0;
seq__9731_9789 = G__9803;
chunk__9732_9790 = G__9804;
count__9733_9791 = G__9805;
i__9734_9792 = G__9806;
continue;
}
} else
{var vec__9736_9807 = cljs.core.first.call(null,seq__9731_9801__$1);var ev__8118__auto___9808 = cljs.core.nth.call(null,vec__9736_9807,0,null);var func__8119__auto___9809 = cljs.core.nth.call(null,vec__9736_9807,1,null);lt.util.dom.on.call(null,e__8117__auto__,ev__8118__auto___9808,func__8119__auto___9809);
{
var G__9810 = cljs.core.next.call(null,seq__9731_9801__$1);
var G__9811 = null;
var G__9812 = 0;
var G__9813 = 0;
seq__9731_9789 = G__9810;
chunk__9732_9790 = G__9811;
count__9733_9791 = G__9812;
i__9734_9792 = G__9813;
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
lt.plugins.irc.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___9814 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9814))
{var ts_9815 = temp__4092__auto___9814;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9815))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9815);
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