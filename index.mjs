// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s,{factory as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-logcdf@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function o(t,n,d){return e(t)||e(n)||e(d)||n<=0||d<=0?NaN:t<=0?r:t===i?0:s(t/(1+t),n,d)}function m(t,s){var o;return e(t)||e(s)||t<=0||s<=0?d(NaN):(o=n(t,s),function(t){if(e(t))return NaN;if(t<=0)return r;if(t===i)return 0;return o(t/(1+t))})}t(o,"factory",m);export{o as default,m as factory};
//# sourceMappingURL=index.mjs.map