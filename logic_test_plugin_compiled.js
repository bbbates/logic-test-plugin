if(!lt.util.load.provided_QMARK_('clojure.walk')) {
goog.provide('clojure.walk');
goog.require('cljs.core');
/**
* Traverses form, an arbitrary data structure.  inner and outer are
* functions.  Applies inner to each element of form, building up a
* data structure of the same type, then applies outer to the result.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.walk = (function walk(inner,outer,form){if(cljs.core.seq_QMARK_.call(null,form))
{return outer.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form)));
} else
{if(cljs.core.coll_QMARK_.call(null,form))
{return outer.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,inner,form)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return outer.call(null,form);
} else
{return null;
}
}
}
});
/**
* Performs a depth-first, post-order traversal of form.  Calls f on
* each sub-form, uses f's return value in place of the original.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.postwalk = (function postwalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,postwalk,f),f,form);
});
/**
* Like postwalk, but does pre-order traversal.
*/
clojure.walk.prewalk = (function prewalk(f,form){return clojure.walk.walk.call(null,cljs.core.partial.call(null,prewalk,f),cljs.core.identity,f.call(null,form));
});
/**
* Recursively transforms all map keys from strings to keywords.
*/
clojure.walk.keywordize_keys = (function keywordize_keys(m){var f = (function (p__21866){var vec__21867 = p__21866;var k = cljs.core.nth.call(null,vec__21867,0,null);var v = cljs.core.nth.call(null,vec__21867,1,null);if(typeof k === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,((function (f){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
});})(f))
,m);
});
/**
* Recursively transforms all map keys from keywords to strings.
*/
clojure.walk.stringify_keys = (function stringify_keys(m){var f = (function (p__21870){var vec__21871 = p__21870;var k = cljs.core.nth.call(null,vec__21871,0,null);var v = cljs.core.nth.call(null,vec__21871,1,null);if((k instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,((function (f){
return (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
});})(f))
,m);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the root of the tree first.
*/
clojure.walk.prewalk_replace = (function prewalk_replace(smap,form){return clojure.walk.prewalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the leaves of the tree first.
*/
clojure.walk.postwalk_replace = (function postwalk_replace(smap,form){return clojure.walk.postwalk.call(null,(function (x){if(cljs.core.contains_QMARK_.call(null,smap,x))
{return smap.call(null,x);
} else
{return x;
}
}),form);
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.logic')) {
goog.provide('cljs.core.logic');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.set');
cljs.core.logic._STAR_occurs_check_STAR_ = true;
cljs.core.logic.IUnifyTerms = (function (){var obj21727 = {};return obj21727;
})();
cljs.core.logic._unify_terms = (function _unify_terms(u,v,s){if((function (){var and__19791__auto__ = u;if(and__19791__auto__)
{return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3;
} else
{return and__19791__auto__;
}
})())
{return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3(u,v,s);
} else
{var x__20430__auto__ = (((u == null))?null:u);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_terms[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_terms["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyTerms.-unify-terms",u);
}
}
})().call(null,u,v,s);
}
});
cljs.core.logic.IUnifyWithNil = (function (){var obj21729 = {};return obj21729;
})();
cljs.core.logic._unify_with_nil = (function _unify_with_nil(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_nil[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_nil["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithNil.-unify-with-nil",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithObject = (function (){var obj21731 = {};return obj21731;
})();
cljs.core.logic._unify_with_object = (function _unify_with_object(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_object[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_object["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithObject.-unify-with-object",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithLVar = (function (){var obj21733 = {};return obj21733;
})();
cljs.core.logic._unify_with_lvar = (function _unify_with_lvar(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_lvar[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_lvar["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithLVar.-unify-with-lvar",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithLSeq = (function (){var obj21735 = {};return obj21735;
})();
cljs.core.logic._unify_with_lseq = (function _unify_with_lseq(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_lseq[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_lseq["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithLSeq.-unify-with-lseq",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithSequential = (function (){var obj21737 = {};return obj21737;
})();
cljs.core.logic._unify_with_seq = (function _unify_with_seq(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_seq[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_seq["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithSequential.-unify-with-seq",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IUnifyWithMap = (function (){var obj21739 = {};return obj21739;
})();
cljs.core.logic._unify_with_map = (function _unify_with_map(v,u,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3(v,u,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._unify_with_map[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify_with_map["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithMap.-unify-with-map",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.logic.IReifyTerm = (function (){var obj21741 = {};return obj21741;
})();
cljs.core.logic._reify_term = (function _reify_term(v,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2(v,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._reify_term[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._reify_term["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReifyTerm.-reify-term",v);
}
}
})().call(null,v,s);
}
});
cljs.core.logic.IWalkTerm = (function (){var obj21743 = {};return obj21743;
})();
cljs.core.logic._walk_term = (function _walk_term(v,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2(v,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._walk_term[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._walk_term["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWalkTerm.-walk-term",v);
}
}
})().call(null,v,s);
}
});
cljs.core.logic.IOccursCheckTerm = (function (){var obj21745 = {};return obj21745;
})();
cljs.core.logic._occurs_check_term = (function _occurs_check_term(v,x,s){if((function (){var and__19791__auto__ = v;if(and__19791__auto__)
{return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3;
} else
{return and__19791__auto__;
}
})())
{return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3(v,x,s);
} else
{var x__20430__auto__ = (((v == null))?null:v);return (function (){var or__19803__auto__ = (cljs.core.logic._occurs_check_term[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._occurs_check_term["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOccursCheckTerm.-occurs-check-term",v);
}
}
})().call(null,v,x,s);
}
});
cljs.core.logic.IBuildTerm = (function (){var obj21747 = {};return obj21747;
})();
cljs.core.logic._build_term = (function _build_term(u,s){if((function (){var and__19791__auto__ = u;if(and__19791__auto__)
{return u.cljs$core$logic$IBuildTerm$_build_term$arity$2;
} else
{return and__19791__auto__;
}
})())
{return u.cljs$core$logic$IBuildTerm$_build_term$arity$2(u,s);
} else
{var x__20430__auto__ = (((u == null))?null:u);return (function (){var or__19803__auto__ = (cljs.core.logic._build_term[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._build_term["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBuildTerm.-build-term",u);
}
}
})().call(null,u,s);
}
});
cljs.core.logic.IBind = (function (){var obj21749 = {};return obj21749;
})();
cljs.core.logic._bind = (function _bind(this$,g){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$IBind$_bind$arity$2;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$IBind$_bind$arity$2(this$,g);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._bind[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._bind["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBind.-bind",this$);
}
}
})().call(null,this$,g);
}
});
cljs.core.logic.IMPlus = (function (){var obj21751 = {};return obj21751;
})();
cljs.core.logic._mplus = (function _mplus(a,f){if((function (){var and__19791__auto__ = a;if(and__19791__auto__)
{return a.cljs$core$logic$IMPlus$_mplus$arity$2;
} else
{return and__19791__auto__;
}
})())
{return a.cljs$core$logic$IMPlus$_mplus$arity$2(a,f);
} else
{var x__20430__auto__ = (((a == null))?null:a);return (function (){var or__19803__auto__ = (cljs.core.logic._mplus[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._mplus["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMPlus.-mplus",a);
}
}
})().call(null,a,f);
}
});
cljs.core.logic.ITake = (function (){var obj21753 = {};return obj21753;
})();
cljs.core.logic._take_STAR_ = (function _take_STAR_(a){if((function (){var and__19791__auto__ = a;if(and__19791__auto__)
{return a.cljs$core$logic$ITake$_take_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return a.cljs$core$logic$ITake$_take_STAR_$arity$1(a);
} else
{var x__20430__auto__ = (((a == null))?null:a);return (function (){var or__19803__auto__ = (cljs.core.logic._take_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._take_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITake.-take*",a);
}
}
})().call(null,a);
}
});
cljs.core.logic.IPair = (function (){var obj21755 = {};return obj21755;
})();
cljs.core.logic._lhs = (function _lhs(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$IPair$_lhs$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$IPair$_lhs$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._lhs[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._lhs["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPair.-lhs",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic._rhs = (function _rhs(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$IPair$_rhs$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$IPair$_rhs$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._rhs[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._rhs["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPair.-rhs",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
cljs.core.logic.Pair = (function (lhs,rhs){
this.lhs = lhs;
this.rhs = rhs;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149580818;
})
cljs.core.logic.Pair.cljs$lang$type = true;
cljs.core.logic.Pair.cljs$lang$ctorStr = "cljs.core.logic/Pair";
cljs.core.logic.Pair.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/Pair");
});
cljs.core.logic.Pair.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("("),cljs.core.str(self__.lhs),cljs.core.str(" . "),cljs.core.str(self__.rhs),cljs.core.str(")")].join(''));
});
cljs.core.logic.Pair.prototype.cljs$core$logic$IPair$ = true;
cljs.core.logic.Pair.prototype.cljs$core$logic$IPair$_lhs$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.lhs;
});
cljs.core.logic.Pair.prototype.cljs$core$logic$IPair$_rhs$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.rhs;
});
cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,i){var self__ = this;
var ___$1 = this;var pred__21756 = cljs.core._EQ__EQ_;var expr__21757 = i;if(cljs.core.truth_(pred__21756.call(null,0,expr__21757)))
{return self__.lhs;
} else
{if(cljs.core.truth_(pred__21756.call(null,1,expr__21757)))
{return self__.rhs;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,not_found){var self__ = this;
var ___$1 = this;var pred__21759 = cljs.core._EQ__EQ_;var expr__21760 = i;if(cljs.core.truth_(pred__21759.call(null,0,expr__21760)))
{return self__.lhs;
} else
{if(cljs.core.truth_(pred__21759.call(null,1,expr__21760)))
{return self__.rhs;
} else
{return not_found;
}
}
});
cljs.core.logic.Pair.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 2;
});
cljs.core.logic.Pair.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;return (cljs.core._EQ_.call(null,self__.lhs,other.lhs)) && (cljs.core._EQ_.call(null,self__.rhs,other.rhs));
});
cljs.core.logic.__GT_Pair = (function __GT_Pair(lhs,rhs){return (new cljs.core.logic.Pair(lhs,rhs));
});
cljs.core.logic.pair = (function pair(lhs,rhs){return (new cljs.core.logic.Pair(lhs,rhs));
});
cljs.core.logic.lvar_QMARK_ = (function lvar_QMARK_(x){return (x instanceof cljs.core.logic.LVar);
});
cljs.core.logic.ISubstitutions = (function (){var obj21763 = {};return obj21763;
})();
cljs.core.logic._occurs_check = (function _occurs_check(this$,u,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3(this$,u,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._occurs_check[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._occurs_check["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-occurs-check",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._ext = (function _ext(this$,u,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_ext$arity$3;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_ext$arity$3(this$,u,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._ext[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._ext["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-ext",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._ext_no_check = (function _ext_no_check(this$,u,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(this$,u,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._ext_no_check[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._ext_no_check["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-ext-no-check",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._walk = (function _walk(this$,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_walk$arity$2;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_walk$arity$2(this$,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._walk[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._walk["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-walk",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._walk_STAR_ = (function _walk_STAR_(this$,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(this$,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._walk_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._walk_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-walk*",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._unify = (function _unify(this$,u,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_unify$arity$3;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_unify$arity$3(this$,u,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._unify[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._unify["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-unify",this$);
}
}
})().call(null,this$,u,v);
}
});
cljs.core.logic._reify_lvar_name = (function _reify_lvar_name(_){if((function (){var and__19791__auto__ = _;if(and__19791__auto__)
{return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1;
} else
{return and__19791__auto__;
}
})())
{return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1(_);
} else
{var x__20430__auto__ = (((_ == null))?null:_);return (function (){var or__19803__auto__ = (cljs.core.logic._reify_lvar_name[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._reify_lvar_name["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify-lvar-name",_);
}
}
})().call(null,_);
}
});
cljs.core.logic._reify_STAR_ = (function _reify_STAR_(this$,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2(this$,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._reify_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._reify_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify*",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic._reify = (function _reify(this$,v){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$ISubstitutions$_reify$arity$2;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$ISubstitutions$_reify$arity$2(this$,v);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._reify[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._reify["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic.not_found = (function (){var obj21765 = {};return obj21765;
})();
/**
* Similar to Scheme assq, xs must be a List of Pairs
*/
cljs.core.logic.assq = (function assq(k,xs){var xs__$1 = cljs.core._seq.call(null,xs);while(true){
if((xs__$1 == null))
{return cljs.core.logic.not_found;
} else
{var x = cljs.core._first.call(null,xs__$1);var lhs = x.lhs;if((k === lhs))
{return x.rhs;
} else
{{
var G__21822 = cljs.core._next.call(null,xs__$1);
xs__$1 = G__21822;
continue;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.logic.Substitutions = (function (s){
this.s = s;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
})
cljs.core.logic.Substitutions.cljs$lang$type = true;
cljs.core.logic.Substitutions.cljs$lang$ctorStr = "cljs.core.logic/Substitutions";
cljs.core.logic.Substitutions.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/Substitutions");
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return cljs.core.logic.choice.call(null,this$__$1,f);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return g.call(null,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{var rhs = cljs.core.logic.assq.call(null,v,self__.s);var vp = cljs.core.logic._walk.call(null,this$__$1,rhs);if((cljs.core.logic.not_found === vp))
{return v;
} else
{return vp;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return v;
} else
{return null;
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);return cljs.core.logic._reify_term.call(null,v__$1,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);return cljs.core.logic._walk_term.call(null,v__$1,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.symbol.call(null,[cljs.core.str("_."),cljs.core.str(cljs.core.count.call(null,self__.s))].join(''));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk_STAR_.call(null,this$__$1,v);return cljs.core.logic._walk_STAR_.call(null,cljs.core.logic._reify_STAR_.call(null,cljs.core.logic.empty_s,v__$1),v__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_unify$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;if((u === v))
{return this$__$1;
} else
{var u__$1 = cljs.core.logic._walk.call(null,this$__$1,u);var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);if((u__$1 === v__$1))
{return this$__$1;
} else
{return cljs.core.logic._unify_terms.call(null,u__$1,v__$1,this$__$1);
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;if((cljs.core.logic._STAR_occurs_check_STAR_) && (cljs.core.logic._occurs_check.call(null,this$__$1,u,v)))
{return cljs.core.logic.fail.call(null,this$__$1);
} else
{return cljs.core.logic._ext_no_check.call(null,this$__$1,u,v);
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Substitutions(cljs.core.conj.call(null,self__.s,(new cljs.core.logic.Pair(u,v)))));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_occurs_check$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);return cljs.core.logic._occurs_check_term.call(null,v__$1,u,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer.call(null,self__.s,writer,opts);
});
cljs.core.logic.Substitutions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return ((this$__$1 === o)) || (((o instanceof cljs.core.logic.Substitutions)) && (cljs.core._EQ_.call(null,self__.s,o.s)));
});
cljs.core.logic.__GT_Substitutions = (function __GT_Substitutions(s){return (new cljs.core.logic.Substitutions(s));
});
cljs.core.logic.make_s = (function make_s(s){return (new cljs.core.logic.Substitutions(s));
});
cljs.core.logic.empty_s = cljs.core.logic.make_s.call(null,cljs.core.List.EMPTY);
cljs.core.logic.subst_QMARK_ = (function subst_QMARK_(x){return (x instanceof cljs.core.logic.Substitutions);
});
cljs.core.logic.to_s = (function to_s(v){var s = cljs.core.reduce.call(null,(function (l,p__21768){var vec__21769 = p__21768;var k = cljs.core.nth.call(null,vec__21769,0,null);var v__$1 = cljs.core.nth.call(null,vec__21769,1,null);return cljs.core.conj.call(null,l,cljs.core.logic.pair.call(null,k,v__$1));
}),cljs.core.List.EMPTY,v);return cljs.core.logic.make_s.call(null,s);
});

/**
* @constructor
*/
cljs.core.logic.LVar = (function (name,meta){
this.name = name;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168320;
})
cljs.core.logic.LVar.cljs$lang$type = true;
cljs.core.logic.LVar.cljs$lang$ctorStr = "cljs.core.logic/LVar";
cljs.core.logic.LVar.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/LVar");
});
cljs.core.logic.LVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._hash.call(null,self__.name);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext_no_check.call(null,s,u,v__$1);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,cljs.core.logic._reify_lvar_name.call(null,s));
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;return cljs.core.logic._unify_with_lvar.call(null,v,u__$1,s);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext_no_check.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<lvar:"),cljs.core.str(self__.name),cljs.core.str(">")].join(''));
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;return cljs.core._EQ_.call(null,cljs.core.logic._walk.call(null,s,v__$1),x);
});
cljs.core.logic.LVar.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.call(null,this$);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return v__$1;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.LVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;var and__19791__auto__ = (o instanceof cljs.core.logic.LVar);if(and__19791__auto__)
{var o__$1 = o;return (self__.name === o__$1.name);
} else
{return and__19791__auto__;
}
});
cljs.core.logic.LVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LVar(self__.name,self__.meta));
});
cljs.core.logic.LVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
cljs.core.logic.__GT_LVar = (function __GT_LVar(name,meta){return (new cljs.core.logic.LVar(name,meta));
});
cljs.core.logic.lvar_sym_counter = cljs.core.atom.call(null,0);
cljs.core.logic.lvar = (function() {
var lvar = null;
var lvar__0 = (function (){return lvar.call(null,new cljs.core.Symbol(null,"gen","gen",-1640429303,null));
});
var lvar__1 = (function (name){var name__$1 = [cljs.core.str(name),cljs.core.str("_"),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.logic.lvar_sym_counter,cljs.core.inc))].join('');return (new cljs.core.logic.LVar(name__$1,null));
});
lvar = function(name){
switch(arguments.length){
case 0:
return lvar__0.call(this);
case 1:
return lvar__1.call(this,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lvar.cljs$core$IFn$_invoke$arity$0 = lvar__0;
lvar.cljs$core$IFn$_invoke$arity$1 = lvar__1;
return lvar;
})()
;
cljs.core.logic.LConsSeq = (function (){var obj21771 = {};return obj21771;
})();
cljs.core.logic._lfirst = (function _lfirst(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._lfirst[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._lfirst["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LConsSeq.-lfirst",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic._lnext = (function _lnext(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$logic$LConsSeq$_lnext$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$logic$LConsSeq$_lnext$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.logic._lnext[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._lnext["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LConsSeq.-lnext",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.lcons_QMARK_ = (function lcons_QMARK_(x){return (x instanceof cljs.core.logic.LCons);
});
cljs.core.logic.lcons_pr_seq = (function lcons_pr_seq(x){if(cljs.core.logic.lcons_QMARK_.call(null,x))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,cljs.core.logic._lfirst.call(null,x),lcons_pr_seq.call(null,cljs.core.logic._lnext.call(null,x)));
}),null,null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x),new cljs.core.Symbol(null,".",".",-1640531481,null));
} else
{return null;
}
}
});

/**
* @constructor
*/
cljs.core.logic.LCons = (function (a,d,meta){
this.a = a;
this.d = d;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149974016;
})
cljs.core.logic.LCons.cljs$lang$type = true;
cljs.core.logic.LCons.cljs$lang$ctorStr = "cljs.core.logic/LCons";
cljs.core.logic.LCons.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/LCons");
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._unify_with_lseq.call(null,u,v__$1,s);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var s__$1 = s;while(true){
if(cljs.core.logic.lcons_QMARK_.call(null,v__$2))
{{
var G__21823 = cljs.core.logic._lnext.call(null,v__$2);
var G__21824 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.logic._lfirst.call(null,v__$2));
v__$2 = G__21823;
s__$1 = G__21824;
continue;
}
} else
{return cljs.core.logic._reify_STAR_.call(null,s__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;return cljs.core.logic._unify_with_lseq.call(null,v,u__$1,s);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.fail.call(null,s);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.fail.call(null,s);
});
cljs.core.logic.LCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.logic.lcons_pr_seq.call(null,this$__$1));
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var x__$1 = x;var s__$1 = s;while(true){
if(cljs.core.logic.lcons_QMARK_.call(null,v__$2))
{var or__19803__auto__ = cljs.core.logic._occurs_check.call(null,s__$1,x__$1,cljs.core.logic._lfirst.call(null,v__$2));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{{
var G__21825 = cljs.core.logic._lnext.call(null,v__$2);
var G__21826 = x__$1;
var G__21827 = s__$1;
v__$2 = G__21825;
x__$1 = G__21826;
s__$1 = G__21827;
continue;
}
}
} else
{return cljs.core.logic._occurs_check.call(null,s__$1,x__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.lcons.call(null,cljs.core.logic._walk_STAR_.call(null,s,cljs.core.logic._lfirst.call(null,v__$1)),cljs.core.logic._walk_STAR_.call(null,s,cljs.core.logic._lnext.call(null,v__$1)));
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.fail.call(null,s);
});
cljs.core.logic.LCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;var or__19803__auto__ = (this$__$1 === o);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var and__19791__auto__ = (o instanceof cljs.core.logic.LCons);if(and__19791__auto__)
{var me = this$__$1;var you = o;while(true){
if((me == null))
{return (you == null);
} else
{if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,me)))
{return true;
} else
{if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,you)))
{return true;
} else
{if((cljs.core.logic.lcons_QMARK_.call(null,me)) && (cljs.core.logic.lcons_QMARK_.call(null,you)))
{var mef = cljs.core.logic._lfirst.call(null,me);var youf = cljs.core.logic._lfirst.call(null,you);var and__19791__auto____$1 = (function (){var or__19803__auto____$1 = cljs.core._EQ_.call(null,mef,youf);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{var or__19803__auto____$2 = cljs.core.logic.lvar_QMARK_.call(null,mef);if(cljs.core.truth_(or__19803__auto____$2))
{return or__19803__auto____$2;
} else
{return cljs.core.logic.lvar_QMARK_.call(null,youf);
}
}
})();if(cljs.core.truth_(and__19791__auto____$1))
{{
var G__21828 = cljs.core.logic._lnext.call(null,me);
var G__21829 = cljs.core.logic._lnext.call(null,you);
me = G__21828;
you = G__21829;
continue;
}
} else
{return and__19791__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._EQ_.call(null,me,you);
} else
{return null;
}
}
}
}
}
break;
}
} else
{return and__19791__auto__;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LCons(self__.a,self__.d,new_meta));
});
cljs.core.logic.LCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lfirst$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.a;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lnext$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.d;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;var u__$1 = u;var v__$2 = v__$1;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,u__$1)))
{return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$2);
} else
{if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v__$2)))
{return cljs.core.logic._unify.call(null,s__$1,v__$2,u__$1);
} else
{if((cljs.core.logic.lcons_QMARK_.call(null,u__$1)) && (cljs.core.logic.lcons_QMARK_.call(null,v__$2)))
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.logic._lfirst.call(null,u__$1),cljs.core.logic._lfirst.call(null,v__$2));if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__21830 = cljs.core.logic._lnext.call(null,u__$1);
var G__21831 = cljs.core.logic._lnext.call(null,v__$2);
var G__21832 = s__$2;
u__$1 = G__21830;
v__$2 = G__21831;
s__$1 = G__21832;
continue;
}
} else
{return s__$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$2);
} else
{return null;
}
}
}
}
break;
}
});
cljs.core.logic.__GT_LCons = (function __GT_LCons(a,d,meta){return (new cljs.core.logic.LCons(a,d,meta));
});
/**
* Constructs a sequence a with an improper tail d if d is a logic variable.
*/
cljs.core.logic.lcons = (function lcons(a,d){if((cljs.core.coll_QMARK_.call(null,d)) || ((d == null)))
{return cljs.core.cons.call(null,a,cljs.core.seq.call(null,d));
} else
{return (new cljs.core.logic.LCons(a,d,null));
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var u__$1 = this;return cljs.core.logic._unify_with_map.call(null,v,u__$1,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var u__$1 = this;return cljs.core.logic._unify_with_map.call(null,v,u__$1,s);
});
(cljs.core.logic.IUnifyTerms["_"] = true);
(cljs.core.logic._unify_terms["_"] = (function (u,v,s){if(cljs.core.sequential_QMARK_.call(null,u))
{return cljs.core.logic._unify_with_seq.call(null,v,u,s);
} else
{return cljs.core.logic._unify_with_object.call(null,v,u,s);
}
}));
(cljs.core.logic.IUnifyTerms["null"] = true);
(cljs.core.logic._unify_terms["null"] = (function (u,v,s){return cljs.core.logic._unify_with_nil.call(null,v,u,s);
}));
(cljs.core.logic.IUnifyWithNil["_"] = true);
(cljs.core.logic._unify_with_nil["_"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithNil["null"] = true);
(cljs.core.logic._unify_with_nil["null"] = (function (v,u,s){return s;
}));
(cljs.core.logic.IUnifyWithObject["_"] = true);
(cljs.core.logic._unify_with_object["_"] = (function (v,u,s){if(cljs.core._EQ_.call(null,u,v))
{return s;
} else
{return cljs.core.logic.fail.call(null,s);
}
}));
(cljs.core.logic.IUnifyWithObject["null"] = true);
(cljs.core.logic._unify_with_object["null"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithLVar["_"] = true);
(cljs.core.logic._unify_with_lvar["_"] = (function (v,u,s){return cljs.core.logic._ext.call(null,s,u,v);
}));
(cljs.core.logic.IUnifyWithLVar["null"] = true);
(cljs.core.logic._unify_with_lvar["null"] = (function (v,u,s){return cljs.core.logic._ext_no_check.call(null,s,u,v);
}));
(cljs.core.logic.IUnifyWithLSeq["_"] = true);
(cljs.core.logic._unify_with_lseq["_"] = (function (v,u,s){if((cljs.core.sequential_QMARK_.call(null,v)) && (!((v == null))))
{var u__$1 = u;var v__$1 = cljs.core._seq.call(null,v);var s__$1 = s;while(true){
if(!((v__$1 == null)))
{if(cljs.core.logic.lcons_QMARK_.call(null,u__$1))
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.logic._lfirst.call(null,u__$1),cljs.core._first.call(null,v__$1));if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__21833 = cljs.core.logic._lnext.call(null,u__$1);
var G__21834 = cljs.core._next.call(null,v__$1);
var G__21835 = s__$2;
u__$1 = G__21833;
v__$1 = G__21834;
s__$1 = G__21835;
continue;
}
} else
{return s__$2;
}
} else
{return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$1);
}
} else
{if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,u__$1)))
{return cljs.core.logic._unify.call(null,s__$1,u__$1,cljs.core.List.EMPTY);
} else
{return cljs.core.logic.fail.call(null,s__$1);
}
}
break;
}
} else
{return cljs.core.logic.fail.call(null,s);
}
}));
(cljs.core.logic.IUnifyWithLSeq["null"] = true);
(cljs.core.logic._unify_with_lseq["null"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithSequential["_"] = true);
(cljs.core.logic._unify_with_seq["_"] = (function (v,u,s){if((cljs.core.sequential_QMARK_.call(null,v)) && (!((v == null))))
{var u__$1 = cljs.core._seq.call(null,u);var v__$1 = cljs.core._seq.call(null,v);var s__$1 = s;while(true){
if(!((u__$1 == null)))
{if(!((v__$1 == null)))
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core._first.call(null,u__$1),cljs.core._first.call(null,v__$1));if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__21836 = cljs.core._next.call(null,u__$1);
var G__21837 = cljs.core._next.call(null,v__$1);
var G__21838 = s__$2;
u__$1 = G__21836;
v__$1 = G__21837;
s__$1 = G__21838;
continue;
}
} else
{return s__$2;
}
} else
{return cljs.core.logic.fail.call(null,s__$1);
}
} else
{if(!((v__$1 == null)))
{return cljs.core.logic.fail.call(null,s__$1);
} else
{return s__$1;
}
}
break;
}
} else
{return cljs.core.logic.fail.call(null,s);
}
}));
(cljs.core.logic.IUnifyWithSequential["null"] = true);
(cljs.core.logic._unify_with_seq["null"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
cljs.core.logic.not_found = (function (){var obj21773 = {};return obj21773;
})();
cljs.core.logic.unify_with_map_STAR_ = (function unify_with_map_STAR_(v,u,s){if(!((cljs.core.count.call(null,v) === cljs.core.count.call(null,u))))
{return cljs.core.logic.fail.call(null,s);
} else
{var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,u));var s__$1 = s;while(true){
if(ks)
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,cljs.core.logic.not_found);if((vf === cljs.core.logic.not_found))
{return cljs.core.logic.fail.call(null,s__$1);
} else
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.get.call(null,u,kf),vf);if(cljs.core.not.call(null,cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__21839 = cljs.core.next.call(null,ks);
var G__21840 = s__$2;
ks = G__21839;
s__$1 = G__21840;
continue;
}
} else
{return cljs.core.logic.fail.call(null,s__$2);
}
}
} else
{return s__$1;
}
break;
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic.unify_with_map_STAR_.call(null,v__$1,u,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic.unify_with_map_STAR_.call(null,v__$1,u,s);
});
(cljs.core.logic.IUnifyWithMap["_"] = true);
(cljs.core.logic._unify_with_map["_"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithMap["null"] = true);
(cljs.core.logic._unify_with_map["null"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IReifyTerm["_"] = true);
(cljs.core.logic._reify_term["_"] = (function (v,s){if(cljs.core.sequential_QMARK_.call(null,v))
{var v__$1 = v;var s__$1 = s;while(true){
if(cljs.core.seq.call(null,v__$1))
{{
var G__21841 = cljs.core.next.call(null,v__$1);
var G__21842 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.first.call(null,v__$1));
v__$1 = G__21841;
s__$1 = G__21842;
continue;
}
} else
{return s__$1;
}
break;
}
} else
{return s;
}
}));
(cljs.core.logic.IReifyTerm["null"] = true);
(cljs.core.logic._reify_term["null"] = (function (v,s){return s;
}));
cljs.core.logic.walk_term_map_STAR_ = (function walk_term_map_STAR_(v,s){var v__$1 = cljs.core._seq.call(null,v);var r = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if(!((v__$1 == null)))
{var vec__21775 = cljs.core._first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__21775,0,null);var vfv = cljs.core.nth.call(null,vec__21775,1,null);{
var G__21843 = cljs.core._next.call(null,v__$1);
var G__21844 = cljs.core._assoc_BANG_.call(null,r,vfk,cljs.core.logic._walk_STAR_.call(null,s,vfv));
v__$1 = G__21843;
r = G__21844;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,s);
});
cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var v__$1 = this;var v__$2 = cljs.core._seq.call(null,v__$1);var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
if(!((v__$2 == null)))
{{
var G__21845 = cljs.core._next.call(null,v__$2);
var G__21846 = cljs.core._conj_BANG_.call(null,r,cljs.core.logic._walk_STAR_.call(null,s,cljs.core.first.call(null,v__$2)));
v__$2 = G__21845;
r = G__21846;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
});
(cljs.core.logic.IWalkTerm["_"] = true);
(cljs.core.logic._walk_term["_"] = (function (v,s){if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core.map.call(null,(function (p1__21776_SHARP_){return cljs.core.logic._walk_STAR_.call(null,s,p1__21776_SHARP_);
}),v);
} else
{return v;
}
}));
(cljs.core.logic.IWalkTerm["null"] = true);
(cljs.core.logic._walk_term["null"] = (function (v,s){return null;
}));
(cljs.core.logic.IOccursCheckTerm["_"] = true);
(cljs.core.logic._occurs_check_term["_"] = (function (v,x,s){if(cljs.core.sequential_QMARK_.call(null,v))
{var v__$1 = cljs.core.seq.call(null,v);var x__$1 = x;var s__$1 = s;while(true){
if(!((v__$1 == null)))
{var or__19803__auto__ = cljs.core.logic._occurs_check.call(null,s__$1,x__$1,cljs.core._first.call(null,v__$1));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{{
var G__21847 = cljs.core._next.call(null,v__$1);
var G__21848 = x__$1;
var G__21849 = s__$1;
v__$1 = G__21847;
x__$1 = G__21848;
s__$1 = G__21849;
continue;
}
}
} else
{return false;
}
break;
}
} else
{return false;
}
}));
(cljs.core.logic.IOccursCheckTerm["null"] = true);
(cljs.core.logic._occurs_check_term["null"] = (function (v,x,s){return false;
}));
cljs.core.logic.mplus = (function mplus(a,f){if((function (){var G__21778 = a;if(G__21778)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__21778.cljs$core$logic$IMPlus$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.logic._mplus.call(null,a,f);
} else
{return (new cljs.core.logic.Choice(a,f));
}
});
cljs.core.logic.take_STAR_ = (function take_STAR_(x){if((function (){var G__21780 = x;if(G__21780)
{var bit__20446__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20446__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__21780.cljs$core$logic$ITake$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.logic._take_STAR_.call(null,x);
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,x);
}
});

/**
* @constructor
*/
cljs.core.logic.Choice = (function (a,f){
this.a = a;
this.f = f;
})
cljs.core.logic.Choice.cljs$lang$type = true;
cljs.core.logic.Choice.cljs$lang$ctorStr = "cljs.core.logic/Choice";
cljs.core.logic.Choice.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/Choice");
});
cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){return cljs.core.cons.call(null,self__.a,(new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){return cljs.core.logic.take_STAR_.call(null,self__.f);
});})(this$__$1))
,null,null)));
});})(this$__$1))
,null,null));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Choice(self__.a,(new cljs.core.logic.Inc(((function (this$__$1){
return (function (){return cljs.core.logic.mplus.call(null,fp.call(null),self__.f);
});})(this$__$1))
))));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return cljs.core.logic.mplus.call(null,g.call(null,self__.a),(new cljs.core.logic.Inc(((function (this$__$1){
return (function (){return cljs.core.logic._bind.call(null,self__.f,g);
});})(this$__$1))
)));
});
cljs.core.logic.__GT_Choice = (function __GT_Choice(a,f){return (new cljs.core.logic.Choice(a,f));
});
cljs.core.logic.choice = (function choice(a,f){return (new cljs.core.logic.Choice(a,f));
});

/**
* @constructor
*/
cljs.core.logic.Inc = (function (f){
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.logic.Inc.cljs$lang$type = true;
cljs.core.logic.Inc.cljs$lang$ctorStr = "cljs.core.logic/Inc";
cljs.core.logic.Inc.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/Inc");
});
cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){return cljs.core.logic.take_STAR_.call(null,self__.f.call(null));
});})(this$__$1))
,null,null));
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Inc(((function (this$__$1){
return (function (){return cljs.core.logic.mplus.call(null,fp.call(null),this$__$1);
});})(this$__$1))
));
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Inc(((function (this$__$1){
return (function (){var a = self__.f.call(null);return cljs.core.logic._bind.call(null,a,g);
});})(this$__$1))
));
});
cljs.core.logic.Inc.prototype.call = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.f.call(null);
});
cljs.core.logic.Inc.prototype.apply = (function (self__,args21781){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21781)));
});
cljs.core.logic.Inc.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return self__.f.call(null);
});
cljs.core.logic.__GT_Inc = (function __GT_Inc(f){return (new cljs.core.logic.Inc(f));
});

/**
* @constructor
*/
cljs.core.logic.Fail = (function (a){
this.a = a;
})
cljs.core.logic.Fail.cljs$lang$type = true;
cljs.core.logic.Fail.cljs$lang$ctorStr = "cljs.core.logic/Fail";
cljs.core.logic.Fail.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.logic/Fail");
});
cljs.core.logic.Fail.prototype.cljs$core$logic$ITake$ = true;
cljs.core.logic.Fail.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.logic.Fail.prototype.cljs$core$logic$IMPlus$ = true;
cljs.core.logic.Fail.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return fp;
});
cljs.core.logic.Fail.prototype.cljs$core$logic$IBind$ = true;
cljs.core.logic.Fail.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.logic.__GT_Fail = (function __GT_Fail(a){return (new cljs.core.logic.Fail(a));
});
cljs.core.logic.failed_QMARK_ = (function failed_QMARK_(x){return (x instanceof cljs.core.logic.Fail);
});
/**
* A goal that always succeeds.
*/
cljs.core.logic.succeed = (function succeed(a){return a;
});
/**
* A goal that always fails.
*/
cljs.core.logic.fail = (function fail(a){return (new cljs.core.logic.Fail(a));
});
cljs.core.logic.s_SHARP_ = cljs.core.logic.succeed;
cljs.core.logic.u_SHARP_ = cljs.core.logic.fail;
cljs.core.logic.IIfA = (function (){var obj21783 = {};return obj21783;
})();
cljs.core.logic._ifa = (function _ifa(b,gs,c){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$logic$IIfA$_ifa$arity$3;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$logic$IIfA$_ifa$arity$3(b,gs,c);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.logic._ifa[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._ifa["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIfA.-ifa",b);
}
}
})().call(null,b,gs,c);
}
});
cljs.core.logic.IIfU = (function (){var obj21785 = {};return obj21785;
})();
cljs.core.logic._ifu = (function _ifu(b,gs,c){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$logic$IIfU$_ifu$arity$3;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$logic$IIfU$_ifu$arity$3(b,gs,c);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.logic._ifu[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic._ifu["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIfU.-ifu",b);
}
}
})().call(null,b,gs,c);
}
});
cljs.core.logic.Fail.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Fail.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;if(cljs.core.truth_(c))
{return cljs.core.force.call(null,c);
} else
{return null;
}
});
cljs.core.logic.Fail.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Fail.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;if(cljs.core.truth_(c))
{return cljs.core.force.call(null,c);
} else
{return null;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__21787 = gs;var vec__21788 = G__21787;var g0 = cljs.core.nth.call(null,vec__21788,0,null);var gr = cljs.core.nthnext.call(null,vec__21788,1);var b__$3 = b__$2;var G__21787__$1 = G__21787;while(true){
var b__$4 = b__$3;var vec__21789 = G__21787__$1;var g0__$1 = cljs.core.nth.call(null,vec__21789,0,null);var gr__$1 = cljs.core.nthnext.call(null,vec__21789,1);if(cljs.core.truth_(g0__$1))
{var temp__4092__auto__ = g0__$1.call(null,b__$4);if(cljs.core.truth_(temp__4092__auto__))
{var b__$5 = temp__4092__auto__;{
var G__21850 = b__$5;
var G__21851 = gr__$1;
b__$3 = G__21850;
G__21787__$1 = G__21851;
continue;
}
} else
{return null;
}
} else
{return b__$4;
}
break;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;var b__$2 = b__$1;var G__21791 = gs;var vec__21792 = G__21791;var g0 = cljs.core.nth.call(null,vec__21792,0,null);var gr = cljs.core.nthnext.call(null,vec__21792,1);var b__$3 = b__$2;var G__21791__$1 = G__21791;while(true){
var b__$4 = b__$3;var vec__21793 = G__21791__$1;var g0__$1 = cljs.core.nth.call(null,vec__21793,0,null);var gr__$1 = cljs.core.nthnext.call(null,vec__21793,1);if(cljs.core.truth_(g0__$1))
{var temp__4092__auto__ = g0__$1.call(null,b__$4);if(cljs.core.truth_(temp__4092__auto__))
{var b__$5 = temp__4092__auto__;{
var G__21852 = b__$5;
var G__21853 = gr__$1;
b__$3 = G__21852;
G__21791__$1 = G__21853;
continue;
}
} else
{return null;
}
} else
{return b__$4;
}
break;
}
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return (new cljs.core.logic.Inc(((function (b__$1){
return (function (){return cljs.core.logic._ifu.call(null,b__$1.call(null),gs,c);
});})(b__$1))
));
});
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return (new cljs.core.logic.Inc(((function (b__$1){
return (function (){return cljs.core.logic._ifa.call(null,b__$1.call(null),gs,c);
});})(b__$1))
));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic._bind,b__$1,gs);
});
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic._bind,b__$1.a,gs);
});
/**
* A relation where a is nil
*/
cljs.core.logic.nilo = (function nilo(a){return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,null,a);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
});
/**
* A relation where a is the empty list
*/
cljs.core.logic.emptyo = (function emptyo(a){return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.List.EMPTY,a);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
});
/**
* A relation where l is a collection, such that a is the first of l
* and d is the rest of l
*/
cljs.core.logic.conso = (function conso(a,d,l){return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,a,d),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});
});
/**
* A relation where l is a collection, such that a is the first of l
*/
cljs.core.logic.firsto = (function firsto(l,a){return (function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind.call(null,a__21254__auto__,cljs.core.logic.conso.call(null,a,d,l));
})));
});
});
/**
* A relation where l is a collection, such that d is the rest of l
*/
cljs.core.logic.resto = (function resto(l,d){return (function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));return cljs.core.logic._bind.call(null,a__21254__auto__,((function (a){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,a,d),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(a))
);
})));
});
});
/**
* A relation where l is a collection, such that l contains x
*/
cljs.core.logic.membero = (function membero(x,l){return (function (a21795){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a21795,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,a__21254__auto__,((function (tail){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,x,tail),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(tail))
);
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a21795,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var head = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"head","head",-1637333095,null));var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,((function (head,tail){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,head,tail),l);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(head,tail))
),membero.call(null,x,tail));
})));
}));
}))));
})));
});
});
/**
* A relation where x, y, and z are proper collections,
* such that z is x appended to y
*/
cljs.core.logic.appendo = (function appendo(x,y,z){return (function (a21797){return (new cljs.core.logic.Inc((function (){return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a21797,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,(function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.List.EMPTY,x);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
})),(function (a__21254__auto____$1){return (new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a__21254__auto____$1,(function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,y,z);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){return cljs.core.logic._bind.call(null,a21797,(function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,((function (a,d){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,a,d),x);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(a,d))
),((function (a,d){
return (function (a__21254__auto____$1){return (new cljs.core.logic.Inc(((function (a,d){
return (function (){var r = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"r","r",-1640531413,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto____$1,((function (r,a,d){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,cljs.core.logic.lcons.call(null,a,r),z);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(r,a,d))
),appendo.call(null,d,y,r));
});})(a,d))
));
});})(a,d))
);
})));
}));
}))));
})));
});
});
cljs.core.logic.prefix = (function prefix(s,_LT_s){if(cljs.core._EQ_.call(null,s,_LT_s))
{return cljs.core.List.EMPTY;
} else
{return cljs.core.conj.call(null,prefix.call(null,cljs.core.rest.call(null,s),_LT_s),cljs.core.first.call(null,s));
}
});
cljs.core.logic.IUnifyWithPMap = (function (){var obj21799 = {};return obj21799;
})();
cljs.core.logic.unify_with_pmap = (function unify_with_pmap(pmap,u,s){if((function (){var and__19791__auto__ = pmap;if(and__19791__auto__)
{return pmap.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3;
} else
{return and__19791__auto__;
}
})())
{return pmap.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3(pmap,u,s);
} else
{var x__20430__auto__ = (((pmap == null))?null:pmap);return (function (){var or__19803__auto__ = (cljs.core.logic.unify_with_pmap[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.logic.unify_with_pmap["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithPMap.unify-with-pmap",pmap);
}
}
})().call(null,pmap,u,s);
}
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.PMap = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._unify_with_map.call(null,v__$1,u,s);
});
cljs.core.logic.PMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20384__auto__){var self__ = this;
var this__20384__auto____$1 = this;var h__20214__auto__ = self__.__hash;if(!((h__20214__auto__ == null)))
{return h__20214__auto__;
} else
{var h__20214__auto____$1 = cljs.core.hash_imap.call(null,this__20384__auto____$1);self__.__hash = h__20214__auto____$1;
return h__20214__auto____$1;
}
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20389__auto__,k__20390__auto__){var self__ = this;
var this__20389__auto____$1 = this;return cljs.core._lookup.call(null,this__20389__auto____$1,k__20390__auto__,null);
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k21801,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k21801,else__20392__auto__);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__21800){var self__ = this;
var this__20396__auto____$1 = this;var pred__21803 = cljs.core.keyword_identical_QMARK_;var expr__21804 = k__20397__auto__;return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__21800),null));
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;return cljs.core.logic._ext_no_check.call(null,s,u,v__$1);
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;return cljs.core.logic.unify_with_pmap.call(null,v,u__$1,s);
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;var ks = cljs.core.keys.call(null,v__$1);var s__$1 = s;while(true){
if(cljs.core.seq.call(null,ks))
{var kf = cljs.core.first.call(null,ks);var uf = cljs.core.get.call(null,u,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));if(cljs.core._EQ_.call(null,uf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))
{return cljs.core.logic.fail.call(null,s__$1);
} else
{var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.get.call(null,v__$1,kf),uf);if(!(cljs.core.logic.failed_QMARK_.call(null,s__$2)))
{{
var G__21854 = cljs.core.next.call(null,ks);
var G__21855 = s__$2;
ks = G__21854;
s__$1 = G__21855;
continue;
}
} else
{return s__$2;
}
}
} else
{return s__$1;
}
break;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20403__auto__,writer__20404__auto__,opts__20405__auto__){var self__ = this;
var this__20403__auto____$1 = this;var pr_pair__20406__auto__ = ((function (this__20403__auto____$1){
return (function (keyval__20407__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,cljs.core.pr_writer,""," ","",opts__20405__auto__,keyval__20407__auto__);
});})(this__20403__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,pr_pair__20406__auto__,"#cljs.core.logic.PMap{",", ","}",opts__20405__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20394__auto__,entry__20395__auto__){var self__ = this;
var this__20394__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20395__auto__))
{return cljs.core._assoc.call(null,this__20394__auto____$1,cljs.core._nth.call(null,entry__20395__auto__,0),cljs.core._nth.call(null,entry__20395__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20394__auto____$1,entry__20395__auto__);
}
});
cljs.core.logic.PMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20401__auto__){var self__ = this;
var this__20401__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,s);
});
cljs.core.logic.PMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20393__auto__){var self__ = this;
var this__20393__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20385__auto__,other__20386__auto__){var self__ = this;
var this__20385__auto____$1 = this;if(cljs.core.truth_((function (){var and__19791__auto__ = other__20386__auto__;if(cljs.core.truth_(and__19791__auto__))
{return ((this__20385__auto____$1.constructor === other__20386__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__20385__auto____$1,other__20386__auto__));
} else
{return and__19791__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__21800){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.logic.PMap(G__21800,self__.__extmap,self__.__hash));
});
cljs.core.logic.PMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20383__auto__){var self__ = this;
var this__20383__auto____$1 = this;return (new cljs.core.logic.PMap(self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.logic.PMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20387__auto__){var self__ = this;
var this__20387__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.PMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20398__auto__,k__20399__auto__){var self__ = this;
var this__20398__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__20399__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20398__auto____$1),self__.__meta),k__20399__auto__);
} else
{return (new cljs.core.logic.PMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20399__auto__)),null));
}
});
cljs.core.logic.PMap.cljs$lang$type = true;
cljs.core.logic.PMap.cljs$lang$ctorPrSeq = (function (this__20423__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/PMap");
});
cljs.core.logic.PMap.cljs$lang$ctorPrWriter = (function (this__20423__auto__,writer__20424__auto__){return cljs.core._write.call(null,writer__20424__auto__,"cljs.core.logic/PMap");
});
cljs.core.logic.__GT_PMap = (function __GT_PMap(){return (new cljs.core.logic.PMap());
});
cljs.core.logic.map__GT_PMap = (function map__GT_PMap(G__21802){return (new cljs.core.logic.PMap(null,cljs.core.dissoc.call(null,G__21802)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._unify_with_map.call(null,u,v__$1,s);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._unify_with_map.call(null,u,v__$1,s);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){var v__$1 = this;return cljs.core.logic._ext.call(null,s,v__$1,u);
});
(cljs.core.logic.IUnifyWithPMap["_"] = true);
(cljs.core.logic.unify_with_pmap["_"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithPMap["null"] = true);
(cljs.core.logic.unify_with_pmap["null"] = (function (v,u,s){return cljs.core.logic.fail.call(null,s);
}));
/**
* Given map m, returns partial map that unifies with maps even if it doesn't share all of the keys of that map.
* Only the keys of the partial map will be unified:
* 
* (m/run* [q]
* (m/fresh [pm x]
* (m/== pm (partial-map {:a x}))
* (m/== pm {:a 1 :b 2})
* (m/== pm q)))
* ;;=> ({:a 1})
*/
cljs.core.logic.partial_map = (function partial_map(m){return cljs.core.logic.map__GT_PMap.call(null,m);
});
cljs.core.logic.lvarq_sym_QMARK_ = (function lvarq_sym_QMARK_(s){return ((s instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str(s)].join('')),"?"));
});
cljs.core.logic.proc_lvar = (function proc_lvar(lvar_expr,store){var v = (function (){var temp__4090__auto__ = cljs.core.deref.call(null,store).call(null,lvar_expr);if(cljs.core.truth_(temp__4090__auto__))
{var u = temp__4090__auto__;return u;
} else
{return cljs.core.logic.lvar.call(null,lvar_expr);
}
})();cljs.core.swap_BANG_.call(null,store,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvar_expr,v], null));
return v;
});
cljs.core.logic.lcons_expr_QMARK_ = (function lcons_expr_QMARK_(expr){var and__19791__auto__ = cljs.core.seq_QMARK_.call(null,expr);if(and__19791__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,".",".",-1640531481,null),null], null), null),cljs.core.set.call(null,expr));
} else
{return and__19791__auto__;
}
});
cljs.core.logic.replace_lvar = (function replace_lvar(store){return (function (expr){if(cljs.core.logic.lvarq_sym_QMARK_.call(null,expr))
{return cljs.core.logic.proc_lvar.call(null,expr,store);
} else
{if(cljs.core.truth_(cljs.core.logic.lcons_expr_QMARK_.call(null,expr)))
{return cljs.core.logic.prep_STAR_.call(null,expr,store);
} else
{return expr;
}
}
});
});
cljs.core.logic.prep_STAR_ = (function() {
var prep_STAR_ = null;
var prep_STAR___2 = (function (expr,store){return prep_STAR_.call(null,expr,store,false,false);
});
var prep_STAR___3 = (function (expr,store,lcons_QMARK_){return prep_STAR_.call(null,expr,store,lcons_QMARK_,false);
});
var prep_STAR___4 = (function (expr,store,lcons_QMARK_,last_QMARK_){var expr__$1 = (cljs.core.truth_((function (){var and__19791__auto__ = last_QMARK_;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.seq.call(null,expr);
} else
{return and__19791__auto__;
}
})())?cljs.core.first.call(null,expr):expr);if(cljs.core.logic.lvarq_sym_QMARK_.call(null,expr__$1))
{return cljs.core.logic.proc_lvar.call(null,expr__$1,store);
} else
{if(cljs.core.seq_QMARK_.call(null,expr__$1))
{if(cljs.core.truth_((function (){var or__19803__auto__ = lcons_QMARK_;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.logic.lcons_expr_QMARK_.call(null,expr__$1);
}
})()))
{var vec__21807 = expr__$1;var f = cljs.core.nth.call(null,vec__21807,0,null);var n = cljs.core.nthnext.call(null,vec__21807,1);var skip = cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,".",".",-1640531481,null));var tail = prep_STAR_.call(null,n,store,lcons_QMARK_,skip);if(skip)
{return tail;
} else
{return cljs.core.logic.lcons.call(null,prep_STAR_.call(null,f,store),tail);
}
} else
{return clojure.walk.postwalk.call(null,cljs.core.logic.replace_lvar.call(null,store),expr__$1);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return expr__$1;
} else
{return null;
}
}
}
});
prep_STAR_ = function(expr,store,lcons_QMARK_,last_QMARK_){
switch(arguments.length){
case 2:
return prep_STAR___2.call(this,expr,store);
case 3:
return prep_STAR___3.call(this,expr,store,lcons_QMARK_);
case 4:
return prep_STAR___4.call(this,expr,store,lcons_QMARK_,last_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prep_STAR_.cljs$core$IFn$_invoke$arity$2 = prep_STAR___2;
prep_STAR_.cljs$core$IFn$_invoke$arity$3 = prep_STAR___3;
prep_STAR_.cljs$core$IFn$_invoke$arity$4 = prep_STAR___4;
return prep_STAR_;
})()
;
/**
* Prep a quoted expression. All symbols preceded by ? will
* be replaced with logic vars.
*/
cljs.core.logic.prep = (function prep(expr){var lvars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prepped = (cljs.core.truth_(cljs.core.logic.lcons_expr_QMARK_.call(null,expr))?cljs.core.logic.prep_STAR_.call(null,expr,lvars,true):clojure.walk.postwalk.call(null,cljs.core.logic.replace_lvar.call(null,lvars),expr));return cljs.core.with_meta.call(null,prepped,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lvars","lvars",1117256714),cljs.core.deref.call(null,lvars)], null));
});
cljs.core.logic.unify = (function unify(s,u,v){if((u === v))
{return s;
} else
{var u__$1 = cljs.core.logic._walk.call(null,s,u);var v__$1 = cljs.core.logic._walk.call(null,s,v);if((u__$1 === v__$1))
{return s;
} else
{return cljs.core.logic._unify_terms.call(null,u__$1,v__$1,s);
}
}
});
/**
* Unify the terms u and w.
* @param {...*} var_args
*/
cljs.core.logic.unifier_STAR_ = (function() {
var unifier_STAR_ = null;
var unifier_STAR___2 = (function (u,w){return cljs.core.first.call(null,cljs.core.doall.call(null,(function (){var xs__21262__auto__ = cljs.core.logic._take_STAR_.call(null,(new cljs.core.logic.Inc((function (){return (function (a__21254__auto__){return (new cljs.core.logic.Inc((function (){var q = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"q","q",-1640531414,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__21254__auto__,((function (q){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,u,w);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(q))
),((function (q){
return (function (a__21242__auto__){var temp__4090__auto__ = cljs.core.logic._unify.call(null,a__21242__auto__,u,q);if(cljs.core.truth_(temp__4090__auto__))
{var b__21243__auto__ = temp__4090__auto__;return b__21243__auto__;
} else
{return cljs.core.logic.fail.call(null,a__21242__auto__);
}
});})(q))
),((function (q){
return (function (a__21263__auto__){return cljs.core.logic._reify.call(null,a__21263__auto__,q);
});})(q))
);
})));
}).call(null,cljs.core.logic.empty_s);
}))));if(false)
{return cljs.core.take.call(null,false,xs__21262__auto__);
} else
{return xs__21262__auto__;
}
})()));
});
var unifier_STAR___3 = (function() { 
var G__21856__delegate = function (u,w,ts){return cljs.core.apply.call(null,unifier_STAR_,unifier_STAR_.call(null,u,w),ts);
};
var G__21856 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21856__delegate.call(this,u,w,ts);};
G__21856.cljs$lang$maxFixedArity = 2;
G__21856.cljs$lang$applyTo = (function (arglist__21857){
var u = cljs.core.first(arglist__21857);
arglist__21857 = cljs.core.next(arglist__21857);
var w = cljs.core.first(arglist__21857);
var ts = cljs.core.rest(arglist__21857);
return G__21856__delegate(u,w,ts);
});
G__21856.cljs$core$IFn$_invoke$arity$variadic = G__21856__delegate;
return G__21856;
})()
;
unifier_STAR_ = function(u,w,var_args){
var ts = var_args;
switch(arguments.length){
case 2:
return unifier_STAR___2.call(this,u,w);
default:
return unifier_STAR___3.cljs$core$IFn$_invoke$arity$variadic(u,w, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unifier_STAR_.cljs$lang$maxFixedArity = 2;
unifier_STAR_.cljs$lang$applyTo = unifier_STAR___3.cljs$lang$applyTo;
unifier_STAR_.cljs$core$IFn$_invoke$arity$2 = unifier_STAR___2;
unifier_STAR_.cljs$core$IFn$_invoke$arity$variadic = unifier_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return unifier_STAR_;
})()
;
/**
* Return the binding map that unifies terms u and w.
* u and w should prepped terms.
* @param {...*} var_args
*/
cljs.core.logic.binding_map_STAR_ = (function() {
var binding_map_STAR_ = null;
var binding_map_STAR___2 = (function (u,w){var lvars = cljs.core.merge.call(null,new cljs.core.Keyword(null,"lvars","lvars",1117256714).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,u)),new cljs.core.Keyword(null,"lvars","lvars",1117256714).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,w)));var s = cljs.core.logic.unify.call(null,cljs.core.logic.empty_s,u,w);if(cljs.core.logic.failed_QMARK_.call(null,s))
{return null;
} else
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (lvars,s){
return (function (p__21810){var vec__21811 = p__21810;var k = cljs.core.nth.call(null,vec__21811,0,null);var v = cljs.core.nth.call(null,vec__21811,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.logic._reify.call(null,s,v)], null);
});})(lvars,s))
,lvars));
}
});
var binding_map_STAR___3 = (function() { 
var G__21858__delegate = function (u,w,ts){return cljs.core.apply.call(null,binding_map_STAR_,binding_map_STAR_.call(null,u,w),ts);
};
var G__21858 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21858__delegate.call(this,u,w,ts);};
G__21858.cljs$lang$maxFixedArity = 2;
G__21858.cljs$lang$applyTo = (function (arglist__21859){
var u = cljs.core.first(arglist__21859);
arglist__21859 = cljs.core.next(arglist__21859);
var w = cljs.core.first(arglist__21859);
var ts = cljs.core.rest(arglist__21859);
return G__21858__delegate(u,w,ts);
});
G__21858.cljs$core$IFn$_invoke$arity$variadic = G__21858__delegate;
return G__21858;
})()
;
binding_map_STAR_ = function(u,w,var_args){
var ts = var_args;
switch(arguments.length){
case 2:
return binding_map_STAR___2.call(this,u,w);
default:
return binding_map_STAR___3.cljs$core$IFn$_invoke$arity$variadic(u,w, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
binding_map_STAR_.cljs$lang$maxFixedArity = 2;
binding_map_STAR_.cljs$lang$applyTo = binding_map_STAR___3.cljs$lang$applyTo;
binding_map_STAR_.cljs$core$IFn$_invoke$arity$2 = binding_map_STAR___2;
binding_map_STAR_.cljs$core$IFn$_invoke$arity$variadic = binding_map_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return binding_map_STAR_;
})()
;
/**
* Unify the terms u and w. Will prep the terms.
* @param {...*} var_args
*/
cljs.core.logic.unifier = (function() {
var unifier = null;
var unifier__2 = (function (u,w){if(!(cljs.core.logic.lcons_QMARK_.call(null,u)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",1546261499,null),new cljs.core.Symbol(null,"u","u",-1640531410,null)))))].join('')));
}
if(!(cljs.core.logic.lcons_QMARK_.call(null,w)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",1546261499,null),new cljs.core.Symbol(null,"w","w",-1640531408,null)))))].join('')));
}
var up = cljs.core.logic.prep.call(null,u);var wp = cljs.core.logic.prep.call(null,w);return cljs.core.logic.unifier_STAR_.call(null,up,wp);
});
var unifier__3 = (function() { 
var G__21860__delegate = function (u,w,ts){return cljs.core.apply.call(null,unifier,unifier.call(null,u,w),ts);
};
var G__21860 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21860__delegate.call(this,u,w,ts);};
G__21860.cljs$lang$maxFixedArity = 2;
G__21860.cljs$lang$applyTo = (function (arglist__21861){
var u = cljs.core.first(arglist__21861);
arglist__21861 = cljs.core.next(arglist__21861);
var w = cljs.core.first(arglist__21861);
var ts = cljs.core.rest(arglist__21861);
return G__21860__delegate(u,w,ts);
});
G__21860.cljs$core$IFn$_invoke$arity$variadic = G__21860__delegate;
return G__21860;
})()
;
unifier = function(u,w,var_args){
var ts = var_args;
switch(arguments.length){
case 2:
return unifier__2.call(this,u,w);
default:
return unifier__3.cljs$core$IFn$_invoke$arity$variadic(u,w, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unifier.cljs$lang$maxFixedArity = 2;
unifier.cljs$lang$applyTo = unifier__3.cljs$lang$applyTo;
unifier.cljs$core$IFn$_invoke$arity$2 = unifier__2;
unifier.cljs$core$IFn$_invoke$arity$variadic = unifier__3.cljs$core$IFn$_invoke$arity$variadic;
return unifier;
})()
;
/**
* Return the binding map that unifies terms u and w.
* Will prep the terms.
* @param {...*} var_args
*/
cljs.core.logic.binding_map = (function() {
var binding_map = null;
var binding_map__2 = (function (u,w){if(!(cljs.core.logic.lcons_QMARK_.call(null,u)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",1546261499,null),new cljs.core.Symbol(null,"u","u",-1640531410,null)))))].join('')));
}
if(!(cljs.core.logic.lcons_QMARK_.call(null,w)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"lcons?","lcons?",1546261499,null),new cljs.core.Symbol(null,"w","w",-1640531408,null)))))].join('')));
}
var up = cljs.core.logic.prep.call(null,u);var wp = cljs.core.logic.prep.call(null,w);return cljs.core.logic.binding_map_STAR_.call(null,up,wp);
});
var binding_map__3 = (function() { 
var G__21862__delegate = function (u,w,ts){return cljs.core.apply.call(null,binding_map,binding_map.call(null,u,w),ts);
};
var G__21862 = function (u,w,var_args){
var ts = null;if (arguments.length > 2) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21862__delegate.call(this,u,w,ts);};
G__21862.cljs$lang$maxFixedArity = 2;
G__21862.cljs$lang$applyTo = (function (arglist__21863){
var u = cljs.core.first(arglist__21863);
arglist__21863 = cljs.core.next(arglist__21863);
var w = cljs.core.first(arglist__21863);
var ts = cljs.core.rest(arglist__21863);
return G__21862__delegate(u,w,ts);
});
G__21862.cljs$core$IFn$_invoke$arity$variadic = G__21862__delegate;
return G__21862;
})()
;
binding_map = function(u,w,var_args){
var ts = var_args;
switch(arguments.length){
case 2:
return binding_map__2.call(this,u,w);
default:
return binding_map__3.cljs$core$IFn$_invoke$arity$variadic(u,w, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
binding_map.cljs$lang$maxFixedArity = 2;
binding_map.cljs$lang$applyTo = binding_map__3.cljs$lang$applyTo;
binding_map.cljs$core$IFn$_invoke$arity$2 = binding_map__2;
binding_map.cljs$core$IFn$_invoke$arity$variadic = binding_map__3.cljs$core$IFn$_invoke$arity$variadic;
return binding_map;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.logic-test-plugin')) {
goog.provide('lt.plugins.logic_test_plugin');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.logic_test_plugin.hello_panel = (function hello_panel(this$){var e__21593__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from logic-test-plugin"], null));var seq__21683_21699 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__21684_21700 = null;var count__21685_21701 = 0;var i__21686_21702 = 0;while(true){
if((i__21686_21702 < count__21685_21701))
{var vec__21687_21703 = cljs.core._nth.call(null,chunk__21684_21700,i__21686_21702);var ev__21594__auto___21704 = cljs.core.nth.call(null,vec__21687_21703,0,null);var func__21595__auto___21705 = cljs.core.nth.call(null,vec__21687_21703,1,null);lt.util.dom.on.call(null,e__21593__auto__,ev__21594__auto___21704,func__21595__auto___21705);
{
var G__21706 = seq__21683_21699;
var G__21707 = chunk__21684_21700;
var G__21708 = count__21685_21701;
var G__21709 = (i__21686_21702 + 1);
seq__21683_21699 = G__21706;
chunk__21684_21700 = G__21707;
count__21685_21701 = G__21708;
i__21686_21702 = G__21709;
continue;
}
} else
{var temp__4092__auto___21710 = cljs.core.seq.call(null,seq__21683_21699);if(temp__4092__auto___21710)
{var seq__21683_21711__$1 = temp__4092__auto___21710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21683_21711__$1))
{var c__20551__auto___21712 = cljs.core.chunk_first.call(null,seq__21683_21711__$1);{
var G__21713 = cljs.core.chunk_rest.call(null,seq__21683_21711__$1);
var G__21714 = c__20551__auto___21712;
var G__21715 = cljs.core.count.call(null,c__20551__auto___21712);
var G__21716 = 0;
seq__21683_21699 = G__21713;
chunk__21684_21700 = G__21714;
count__21685_21701 = G__21715;
i__21686_21702 = G__21716;
continue;
}
} else
{var vec__21688_21717 = cljs.core.first.call(null,seq__21683_21711__$1);var ev__21594__auto___21718 = cljs.core.nth.call(null,vec__21688_21717,0,null);var func__21595__auto___21719 = cljs.core.nth.call(null,vec__21688_21717,1,null);lt.util.dom.on.call(null,e__21593__auto__,ev__21594__auto___21718,func__21595__auto___21719);
{
var G__21720 = cljs.core.next.call(null,seq__21683_21711__$1);
var G__21721 = null;
var G__21722 = 0;
var G__21723 = 0;
seq__21683_21699 = G__21720;
chunk__21684_21700 = G__21721;
count__21685_21701 = G__21722;
i__21686_21702 = G__21723;
continue;
}
}
} else
{}
}
break;
}
return e__21593__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.logic-test-plugin","logic-test-plugin.hello","lt.plugins.logic-test-plugin/logic-test-plugin.hello",2239561638),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logic-test-plugin.hello","logic-test-plugin.hello",1533486709)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.logic-test-plugin","on-close-destroy","lt.plugins.logic-test-plugin/on-close-destroy",2027225098)], null),new cljs.core.Keyword(null,"name","name",1017277949),"logic-test-plugin",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.logic_test_plugin.hello_panel.call(null,this$);
}));
lt.plugins.logic_test_plugin.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___21724 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___21724))
{var ts_21725 = temp__4092__auto___21724;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_21725))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_21725);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.logic-test-plugin","on-close-destroy","lt.plugins.logic-test-plugin/on-close-destroy",2027225098),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.logic_test_plugin.__BEH__on_close_destroy,new cljs.core.Keyword(null,"desc","desc",1016984067),"logic-test-plugin: Close tab and tabset as well if last tab",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.logic_test_plugin.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.logic-test-plugin","logic-test-plugin.hello","lt.plugins.logic-test-plugin/logic-test-plugin.hello",2239561638));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.logic-test-plugin","say-hello","lt.plugins.logic-test-plugin/say-hello",987289809),new cljs.core.Keyword(null,"desc","desc",1016984067),"logic-test-plugin: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){cljs.core.logic.prep.call(null,cljs.core.list(new cljs.core.Symbol(null,"+","+",-1640531484,null),1,1));
return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.logic_test_plugin.hello);
})], null));
}

//# sourceMappingURL=logic_test_plugin_compiled.js.map