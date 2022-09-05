!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return s}),n.d(t,"b",function(){return f}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return i}),n.d(t,"f",function(){return I}),n.d(t,"g",function(){return g}),n.d(t,"h",function(){return E}),n.d(t,"i",function(){return o}),n.d(t,"j",function(){return c}),n.d(t,"k",function(){return l});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&a+1<e.length&&56320==(64512&e.charCodeAt(a+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++a)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let t=0;t<e.length;t+=3){const r=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,l=r>>2,u=(3&r)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;o||(h=64,i||(d=64)),a.push(n[l],n[u],n[d],n[h])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[a++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[a++]=String.fromCharCode(55296+(i>>10)),t[a++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],s=e[n++];t[a++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0,s=++t<e.length?n[e.charAt(t)]:64,o=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==i||null==s||null==o)throw Error();const c=r<<2|i>>4;if(a.push(c),64!==s){const e=i<<4&240|s>>2;if(a.push(e),64!==o){const e=s<<6&192|o;a.push(e)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},i=function(e){return function(e){const t=a(e);return r.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function c(){return"object"==typeof indexedDB}function l(){return new Promise((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function u(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const d="FirebaseError";class h extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=d,Object.setPrototypeOf(this,h.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f.prototype.create)}}class f{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},a=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(p,(e,n)=>{const a=t[n];return null!=a?String(a):`<${n}?>`})}(r,n):"Error",s=`${this.serviceName}: ${i} (${a}).`;return new h(a,s,n)}}const p=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,t){if(e===t)return!0;const n=Object.keys(e),a=Object.keys(t);for(const r of n){if(!a.includes(r))return!1;const n=e[r],i=t[r];if(m(n)&&m(i)){if(!g(n,i))return!1}else if(n!==i)return!1}for(const e of a)if(!n.includes(e))return!1;return!0}function m(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b=1e3,w=2,y=144e5,v=.5;function I(e,t=b,n=w){const a=t*Math.pow(n,e),r=Math.round(v*a*(Math.random()-.5)*2);return Math.min(y,a+r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(e){return e&&e._delegate?e._delegate:e}}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var a=n(0);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new a.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),a=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(a)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(a)}return a}onInit(e,t){var n;const a=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(a))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(a,r);const i=this.instances.get(a);return i&&e(i,a),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const a of n)try{a(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(a=e,a===i?void 0:a),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var a;return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c=[];var l;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(l||(l={}));const u={debug:l.DEBUG,verbose:l.VERBOSE,info:l.INFO,warn:l.WARN,error:l.ERROR,silent:l.SILENT},d=l.INFO,h={[l.DEBUG]:"log",[l.VERBOSE]:"log",[l.INFO]:"info",[l.WARN]:"warn",[l.ERROR]:"error"},f=(e,t,...n)=>{if(t<e.logLevel)return;const a=(new Date).toISOString(),r=h[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${a}]  ${e.name}:`,...n)};class p{constructor(e){this.name=e,this._logLevel=d,this._logHandler=f,this._userLogHandler=null,c.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in l))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?u[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,l.DEBUG,...e),this._logHandler(this,l.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,l.VERBOSE,...e),this._logHandler(this,l.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,l.INFO,...e),this._logHandler(this,l.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,l.WARN,...e),this._logHandler(this,l.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,l.ERROR,...e),this._logHandler(this,l.ERROR,...e)}}const g=(e,t)=>t.some(t=>e instanceof t);let m,b;const w=new WeakMap,y=new WeakMap,v=new WeakMap,I=new WeakMap,E=new WeakMap;let S={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return y.get(e);if("objectStoreNames"===t)return e.objectStoreNames||v.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function C(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(b||(b=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(O(this),t),_(w.get(this))}:function(...t){return _(e.apply(O(this),t))}:function(t,...n){const a=e.call(O(this),t,...n);return v.set(a,t.sort?t.sort():[t]),_(a)}}function D(e){return"function"==typeof e?C(e):(e instanceof IDBTransaction&&function(e){if(y.has(e))return;const t=new Promise((t,n)=>{const a=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)});y.set(e,t)}(e),g(e,m||(m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,S):e)}function _(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const a=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(_(e.result)),a()},i=()=>{n(e.error),a()};e.addEventListener("success",r),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&w.set(t,e)}).catch(()=>{}),E.set(t,e),t}(e);if(I.has(e))return I.get(e);const t=D(e);return t!==e&&(I.set(e,t),E.set(t,e)),t}const O=e=>E.get(e);function T(e,t,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const s=indexedDB.open(e,t),o=_(s);return a&&s.addEventListener("upgradeneeded",e=>{a(_(s.result),e.oldVersion,e.newVersion,_(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),o.then(e=>{i&&e.addEventListener("close",()=>i()),r&&e.addEventListener("versionchange",()=>r())}).catch(()=>{}),o}const A=["get","getKey","getAll","getAllKeys","count"],j=["put","add","delete","clear"],k=new Map;function M(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=j.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!r&&!A.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let s=i.store;return a&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&i.done]))[0]};return k.set(t,i),i}S=(e=>({...e,get:(t,n,a)=>M(t,n)||e.get(t,n,a),has:(t,n)=>!!M(t,n)||e.has(t,n)}))(S);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(e){this.container=e}getPlatformInfoString(){console.log("PlatformLoggerServiceImpl");const e=this.container.getProviders();return console.log("PlatformLoggerServiceImpl , providers"+e),e.map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const B="@firebase/app",$="0.7.31",L=new p("@firebase/app"),N="[DEFAULT]",F={[B]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},x=new Map,H=new Map;function R(e,t){try{e.container.addComponent(t)}catch(n){L.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function z(e){const t=e.name;if(H.has(t))return L.debug(`There were multiple attempts to register component ${t}.`),!1;H.set(t,e);for(const t of x.values())R(t,e);return!0}function V(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},q=new a.b("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e=N){const t=x.get(e);if(!t)throw q.create("no-app",{appName:e});return t}function G(e,t,n){var a;let i=null!==(a=F[e])&&void 0!==a?a:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void L.warn(e.join(" "))}z(new r(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="firebase-heartbeat-database",Z=1,X="firebase-heartbeat-store";let Q=null;function Y(){return Q||(Q=T(J,Z,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(X)}}}).catch(e=>{throw q.create("idb-open",{originalErrorMessage:e.message})})),Q}async function ee(e,t){var n;try{const r=(await Y()).transaction(X,"readwrite"),i=r.objectStore(X);return await i.put(t,te(e)),r.done}catch(e){if(e instanceof a.c)L.warn(e.message);else{const t=q.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});L.warn(t.message)}}}function te(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=1024,ae=2592e6;class re{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new se(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ie();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=ae}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ie(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=ne){const n=[];let a=e.slice();for(const r of e){const e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),oe(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),oe(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}(this._heartbeatsCache.heartbeats),r=Object(a.e)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ie(){return(new Date).toISOString().substring(0,10)}class se{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(a.j)()&&Object(a.k)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await Y()).transaction(X).objectStore(X).get(te(e))}catch(e){if(e instanceof a.c)L.warn(e.message);else{const n=q.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});L.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ee(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function oe(e){return Object(a.e)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;ce="",z(new r("platform-logger",e=>new P(e),"PRIVATE")),z(new r("heartbeat",e=>new re(e),"PRIVATE")),G(B,$,ce),G(B,$,"esm2017"),G("fire-js","");const le=1e4,ue="w:0.5.12",de="FIS_v2",he="https://firebaseinstallations.googleapis.com/v1",fe=36e5,pe={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ge=new a.b("installations","Installations",pe);function me(e){return e instanceof a.c&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be({projectId:e}){return`${he}/projects/${e}/installations`}function we(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function ye(e,t){const n=(await t.json()).error;return ge.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function ve({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ie(e,{refreshToken:t}){const n=ve(e);return n.append("Authorization",function(e){return`${de} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function Ee(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Se(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ce=/^[cdef][\w-]{21}$/,De="";function _e(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return Ce.test(t)?t:De}catch(e){return De}}function Oe(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new Map;function Ae(e,t){const n=Oe(e);je(n,t),function(e,t){const n=Me();n&&n.postMessage({key:e,fid:t});Pe()}(n,t)}function je(e,t){const n=Te.get(e);if(n)for(const e of n)e(t)}let ke=null;function Me(){return!ke&&"BroadcastChannel"in self&&((ke=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{je(e.data.key,e.data.fid)}),ke}function Pe(){0===Te.size&&ke&&(ke.close(),ke=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="firebase-installations-database",$e=1,Le="firebase-installations-store";let Ne=null;function Fe(){return Ne||(Ne=T(Be,$e,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Le)}}})),Ne}async function xe(e,t){const n=Oe(e),a=(await Fe()).transaction(Le,"readwrite"),r=a.objectStore(Le),i=await r.get(n);return await r.put(t,n),await a.done,i&&i.fid===t.fid||Ae(e,t.fid),t}async function He(e){const t=Oe(e),n=(await Fe()).transaction(Le,"readwrite");await n.objectStore(Le).delete(t),await n.done}async function Re(e,t){const n=Oe(e),a=(await Fe()).transaction(Le,"readwrite"),r=a.objectStore(Le),i=await r.get(n),s=t(i);return void 0===s?await r.delete(n):await r.put(s,n),await a.done,!s||i&&i.fid===s.fid||Ae(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e){let t;const n=await Re(e.appConfig,n=>{const a=function(e){return qe(e||{fid:_e(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(ge.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=be(e),r=ve(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={fid:n,authVersion:de,appId:e.appId,sdkVersion:ue},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await Ee(()=>fetch(a,o));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:we(e.authToken)}}throw await ye("Create Installation",c)}(e,t);return xe(e.appConfig,n)}catch(n){throw me(n)&&409===n.customData.serverCode?await He(e.appConfig):await xe(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:a}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ve(e)}:{installationEntry:t}}(e,a);return t=r.registrationPromise,r.installationEntry});return n.fid===De?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Ve(e){let t=await We(e.appConfig);for(;1===t.registrationStatus;)await Se(100),t=await We(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await ze(e);return n||t}return t}function We(e){return Re(e,e=>{if(!e)throw ge.create("installation-not-found");return qe(e)})}function qe(e){return 1===(t=e).registrationStatus&&t.registrationTime+le<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function Ue({appConfig:e,heartbeatServiceProvider:t},n){const a=function(e,{fid:t}){return`${be(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),r=Ie(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const s={installation:{sdkVersion:ue,appId:e.appId}},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await Ee(()=>fetch(a,o));if(c.ok){return we(await c.json())}throw await ye("Generate Auth Token",c)}async function Ke(e,t=!1){let n;const a=await Re(e.appConfig,a=>{if(!Je(a))throw ge.create("not-registered");const r=a.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+fe}(e)}(r))return a;if(1===r.requestStatus)return n=async function(e,t){let n=await Ge(e.appConfig);for(;1===n.authToken.requestStatus;)await Se(100),n=await Ge(e.appConfig);const a=n.authToken;return 0===a.requestStatus?Ke(e,t):a}(e,t),a;{if(!navigator.onLine)throw ge.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(a);return n=async function(e,t){try{const n=await Ue(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await xe(e.appConfig,a),n}catch(n){if(!me(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await xe(e.appConfig,n)}else await He(e.appConfig);throw n}}(e,t),t}});return n?await n:a.authToken}function Ge(e){return Re(e,e=>{if(!Je(e))throw ge.create("not-registered");return function(e){return 1===e.requestStatus&&e.requestTime+le<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.authToken)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function Je(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ze(e,t=!1){const n=e;return await async function(e){const{registrationPromise:t}=await ze(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n),(await Ke(n,t)).token}function Xe(e){return ge.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="installations",Ye="installations-internal",et=e=>{const t=V(e.getProvider("app").getImmediate(),Qe).getImmediate();return{getId:()=>(async function(e){const t=e,{installationEntry:n,registrationPromise:a}=await ze(t);return a?a.catch(console.error):Ke(t).catch(console.error),n.fid})(t),getToken:e=>Ze(t,e)}};z(new r(Qe,e=>{const t=e.getProvider("app").getImmediate();return{app:t,appConfig:
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw Xe("App Configuration");if(!e.name)throw Xe("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Xe(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),heartbeatServiceProvider:V(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),z(new r(Ye,et,"PRIVATE")),G("@firebase/installations","0.5.12"),G("@firebase/installations","0.5.12","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tt="analytics",nt="firebase_id",at="origin",rt=6e4,it="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",st="https://www.googletagmanager.com/gtag/js",ot=new p("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function lt(e,t,n,a){return async function(r,i,s){try{"event"===r?await async function(e,t,n,a,r){try{let i=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const a=await ct(n);for(const n of e){const e=a.find(e=>e.measurementId===n),r=e&&t[e.appId];if(!r){i=[];break}i.push(r)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",a,r||{})}catch(e){ot.error(e)}}(e,t,n,i,s):"config"===r?await async function(e,t,n,a,r,i){const s=a[r];try{if(s)await t[s];else{const e=(await ct(n)).find(e=>e.measurementId===r);e&&await t[e.appId]}}catch(e){ot.error(e)}e("config",r,i)}(e,t,n,a,i,s):"consent"===r?e("consent","update",s):e("set",i)}catch(e){ot.error(e)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ut={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},dt=new a.b("analytics","Analytics",ut),ht=30,ft=1e3;const pt=new class{constructor(e={},t=ft){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function gt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function mt(e,t=pt,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw dt.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new bt;return setTimeout(async()=>{c.abort()},void 0!==n?n:rt),async function e(t,{throttleEndTimeMillis:n,backoffCount:r},i,s=pt){var o,c;const{appId:l,measurementId:u}=t;try{await function(e,t){return new Promise((n,a)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(i),a(dt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(i,n)}catch(e){if(u)return ot.warn("Timed out fetching this Firebase app's measurement ID from the server."+` Falling back to the measurement ID ${u}`+` provided in the "measurementId" field in the local Firebase config. [${null===(o=e)||void 0===o?void 0:o.message}]`),{appId:l,measurementId:u};throw e}try{const n=await async function(e){var t;const{appId:n,apiKey:a}=e,r={method:"GET",headers:gt(a)},i=it.replace("{app-id}",n),s=await fetch(i,r);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw dt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(t);return s.deleteThrottleMetadata(l),n}catch(n){const o=n;if(!function(e){if(!(e instanceof a.c&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(o)){if(s.deleteThrottleMetadata(l),u)return ot.warn("Failed to fetch this Firebase app's measurement ID from the server."+` Falling back to the measurement ID ${u}`+` provided in the "measurementId" field in the local Firebase config. [${null==o?void 0:o.message}]`),{appId:l,measurementId:u};throw n}const d=503===Number(null===(c=null==o?void 0:o.customData)||void 0===c?void 0:c.httpStatus)?Object(a.f)(r,s.intervalMillis,ht):Object(a.f)(r,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:r+1};return s.setThrottleMetadata(l,h),ot.debug(`Calling attemptFetch again in ${d} millis`),e(t,h,i,s)}}({appId:r,apiKey:i,measurementId:s},o,c,t)}class bt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wt,yt;function vt(e){yt=e}function It(e){wt=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(e,t,n,r,i,s,o){var c;const l=mt(e);l.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&ot.warn(`The measurement ID in the local Firebase config (${e.options.measurementId})`+` does not match the measurement ID fetched from the server (${t.measurementId}).`+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")}).catch(e=>ot.error(e)),t.push(l);const u=async function(){var e;if(!Object(a.j)())return ot.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Object(a.k)()}catch(t){return ot.warn(dt.create("indexeddb-unavailable",{errorInfo:null===(e=t)||void 0===e?void 0:e.toString()}).message),!1}return!0}().then(e=>e?r.getId():void 0),[d,h]=await Promise.all([l,u]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(st))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${st}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,d.measurementId),yt&&(i("consent","default",yt),vt(void 0)),i("js",new Date);const f=null!==(c=null==o?void 0:o.config)&&void 0!==c?c:{};return f[at]="firebase",f.update=!0,null!=h&&(f[nt]=h),i("config",d.measurementId,f),wt&&(i("set",wt),It(void 0)),d.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.app=e}_delete(){return delete Ct[this.app.options.appId],Promise.resolve()}}let Ct={},Dt=[];const _t={};let Ot,Tt,At="dataLayer",jt="gtag",kt=!1;function Mt(e,t,n){!function(){const e=[];if(Object(a.i)()&&e.push("This is a browser extension environment."),Object(a.d)()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=dt.create("invalid-analytics-context",{errorInfo:t});ot.warn(n.message)}}();const r=e.options.appId;if(!r)throw dt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw dt.create("no-api-key");ot.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+` measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId}`+' provided in the "measurementId" field in the local Firebase config.')}if(null!=Ct[r])throw dt.create("already-exists",{id:r});if(!kt){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(At);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,a,r){let i=function(...e){window[a].push(arguments)};return window[r]&&"function"==typeof window[r]&&(i=window[r]),window[r]=lt(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}(Ct,Dt,_t,At,jt);Tt=e,Ot=t,kt=!0}return Ct[r]=Et(e,Dt,_t,t,Ot,At,n),new St(e)}function Pt(e,t,n,r){e=Object(a.h)(e),async function(e,t,n,a,r){if(r&&r.global)e("event",n,a);else{const r=await t;e("event",n,Object.assign(Object.assign({},a),{send_to:r}))}}(Tt,Ct[e.app.options.appId],t,n,r).catch(e=>ot.error(e))}const Bt="@firebase/analytics",$t="0.8.0";z(new r(tt,(e,{options:t})=>Mt(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),z(new r("analytics-internal",function(e){try{const t=e.getProvider(tt).getImmediate();return{logEvent:(e,n,a)=>Pt(t,e,n,a)}}catch(e){throw dt.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),G(Bt,$t),G(Bt,$t,"esm2017");var Lt;Lt="debug",c.forEach(e=>{e.setLogLevel(Lt)});var Nt=function(e,t={}){if(console.log("intializeApp"),"object"!=typeof t){t={name:t}}const n=Object.assign({name:N,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw q.create("bad-app-name",{appName:String(r)});const i=x.get(r);if(i){if(Object(a.g)(e,i.options)&&Object(a.g)(n,i.config))return i;throw q.create("duplicate-app",{appName:r})}const s=new o(r);for(const e of H.values())s.addComponent(e);const c=new U(e,n,s);return x.set(r,c),c}({apiKey:"AIzaSyDuzQOEc-zRBZr7CbVoUJ-tXeHeqhNat8I",authDomain:"fir-sample-d7437.firebaseapp.com",projectId:"fir-sample-d7437",storageBucket:"fir-sample-d7437.appspot.com",messagingSenderId:"491000235416",appId:"1:491000235416:web:da7eba339f3de7209117ed",measurementId:"G-0FZTEHPVWR"});console.log("** app intialized",Nt);var Ft=function(e=K()){const t=V(e=Object(a.h)(e),tt);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=V(e,tt);if(n.isInitialized()){const e=n.getImmediate();if(Object(a.g)(t,n.getOptions()))return e;throw dt.create("already-initialized")}return n.initialize({options:t})}(e)}(Nt);console.log("analytics = ",Ft),Pt(Ft,"add_payment_info")}]);
//# sourceMappingURL=main.f183c55b557dd20e9de3.js.map