"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=a(function(R,o){
var N=require('@stdlib/stats-base-dists-beta-logcdf/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/constants-float64-ninf/dist'),y=require('@stdlib/constants-float64-pinf/dist');function g(e,r,t){return u(e)||u(r)||u(t)||r<=0||t<=0?NaN:e<=0?F:e===y?0:N(e/(1+e),r,t)}o.exports=g
});var s=a(function(j,c){
var I=require('@stdlib/utils-constant-function/dist'),d=require('@stdlib/stats-base-dists-beta-logcdf/dist').factory,n=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/constants-float64-ninf/dist'),D=require('@stdlib/constants-float64-pinf/dist');function L(e,r){var t;if(n(e)||n(r)||e<=0||r<=0)return I(NaN);return t=d(e,r),q;function q(i){return n(i)?NaN:i<=0?C:i===D?0:t(i/(1+i))}}c.exports=L
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=f(),m=s();P(v,"factory",m);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
