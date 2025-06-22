"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=a(function(F,c){
var i=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-pow/dist');function p(e,r,t){return i(e)||i(r)||i(t)||r<=0||t<=0?NaN:e<=0?0:e>=1?1:1-f(1-f(e,r),t)}c.exports=p
});var v=a(function(O,q){
var y=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-pow/dist');function d(e,r){if(u(e)||u(r)||e<=0||r<=0)return y(NaN);return t;function t(n){return u(n)?NaN:n<=0?0:n>=1?1:1-s(1-s(n,e),r)}}q.exports=d
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=o(),l=v();w(N,"factory",l);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
