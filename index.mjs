// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";function r(t,s,r){return e(t)||e(s)||e(r)||s<=0||r<=0?NaN:t<=0?0:t>=1?1:1-n(1-n(t,s),r)}function i(t,r){return e(t)||e(r)||t<=0||r<=0?s(NaN):function(s){if(e(s))return NaN;if(s<=0)return 0;if(s>=1)return 1;return 1-n(1-n(s,t),r)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
