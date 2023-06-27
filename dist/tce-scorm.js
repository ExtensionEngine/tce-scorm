"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const $="@extensionengine/tce-scorm",z="0.0.1",G={label:"Scorm",type:"SCORM",ui:{icon:"mdi-package-up",forceFullWidth:!0}};function _(t,e,r,n,a,o,c,u){var i=typeof t=="function"?t.options:t;e&&(i.render=e,i.staticRenderFns=r,i._compiled=!0),n&&(i.functional=!0),o&&(i._scopeId="data-v-"+o);var l;if(c?(l=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__<"u"&&(s=__VUE_SSR_CONTEXT__),a&&a.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(c)},i._ssrRegister=l):a&&(l=u?function(){a.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(i.functional){i._injectStyles=l;var d=i.render;i.render=function(D,S){return l.call(S),d(D,S)}}else{var f=i.beforeCreate;i.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:i}}const N={name:"element-placeholder",props:{name:{type:String,required:!0},icon:{type:String,required:!0},placeholder:{type:String,default:"Select to edit"},activePlaceholder:{type:String,default:"Use toolbar to edit"},activeIcon:{type:String,default:null},activeColor:{type:String,default:"#fff"},isDisabled:{type:Boolean,default:!1},isFocused:{type:Boolean,default:!1},dense:{type:Boolean,default:!1}},computed:{iconSize(){return this.dense?this.isFocused?24:20:this.isFocused?38:30}}};var q=function(){var e=this,r=e._self._c;return r("v-sheet",{staticClass:"transparent grey--text text--darken-4",class:e.dense?"pt-3":"pa-12"},[r("v-avatar",{attrs:{size:e.dense?40:60,color:e.isDisabled?"grey darken-3":"blue-grey darken-4"}},[r("v-icon",{attrs:{size:e.iconSize,color:e.isFocused?e.activeColor:"#fff"}},[e._v(" "+e._s(e.icon)+" ")])],1),r("div",{staticClass:"grey--text",class:[e.isDisabled?"text--darken-3":"text--darken-4",e.dense?"my-2 subtitle-2":"my-4 headline"]},[e._v(" "+e._s(e.name)+" ")]),!e.dense&&!e.isDisabled?r("div",{staticClass:"subtitle-1"},[e.isFocused?[r("span",[e._v(e._s(e.activePlaceholder))]),e.activeIcon?r("v-icon",{attrs:{size:"20",color:"blue-grey darken-4"}},[e._v(" "+e._s(e.activeIcon)+" ")]):e._e()]:[e._v(e._s(e.placeholder))]],2):e._e()],1)},L=[],X=_(N,q,L,!1,null,null,null,null);const Z=X.exports;const K={name:"tce-preview-overlay"};var W=function(e,r){return r._m(0)},H=[function(t,e){return t("button",{staticClass:"overlay d-flex justify-center align-center"},[t("div",{staticClass:"message grey--text text--lighten-2"},[e._v("Click to preview")])])}],Y=_(K,W,H,!0,null,"73113225",null,null);const J=Y.exports;const Q={name:"tce-scorm",inject:["$elementBus"],props:{element:{type:Object,required:!0},isFocused:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1},dense:{type:Boolean,default:!1}},computed:{launchUrl:t=>t.element.data.launchUrl},mounted(){this.$elementBus.on("save",t=>this.$emit("save",t))},components:{ElementPlaceholder:Z,PreviewOverlay:J}};var V=function(){var e=this,r=e._self._c;return r("div",{staticClass:"tce-scorm"},[e.launchUrl?r("div",[!e.isDisabled&&!e.isFocused?r("preview-overlay"):e._e(),r("div",{staticClass:"container"},[r("iframe",{staticClass:"element",attrs:{src:e.launchUrl,tabindex:e.isDisabled||e.isFocused?0:-1,frameborder:"0"}})])],1):r("element-placeholder",{attrs:{"is-focused":e.isFocused,"is-disabled":e.isDisabled,dense:e.dense,name:"SCORM component",icon:"mdi-package-up","active-placeholder":"Use toolbar to upload the SCORM package","active-icon":"mdi-arrow-up"}})],1)},ee=[],te=_(Q,V,ee,!1,null,"c5f02ba5",null,null);const g=te.exports;var v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function x(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var re=typeof v=="object"&&v&&v.Object===Object&&v,ne=re,ae=ne,oe=typeof self=="object"&&self&&self.Object===Object&&self,ie=ae||oe||Function("return this")(),se=ie,le=se,ce=le.Symbol,b=ce;function ue(t,e){for(var r=-1,n=t==null?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a}var de=ue,fe=Array.isArray,pe=fe,O=b,U=Object.prototype,_e=U.hasOwnProperty,ve=U.toString,p=O?O.toStringTag:void 0;function me(t){var e=_e.call(t,p),r=t[p];try{t[p]=void 0;var n=!0}catch{}var a=ve.call(t);return n&&(e?t[p]=r:delete t[p]),a}var ye=me,ge=Object.prototype,be=ge.toString;function he(t){return be.call(t)}var Se=he,T=b,$e=ye,Oe=Se,Te="[object Null]",je="[object Undefined]",j=T?T.toStringTag:void 0;function Ce(t){return t==null?t===void 0?je:Te:j&&j in Object(t)?$e(t):Oe(t)}var we=Ce;function Fe(t){return t!=null&&typeof t=="object"}var Ae=Fe,Re=we,Pe=Ae,ke="[object Symbol]";function xe(t){return typeof t=="symbol"||Pe(t)&&Re(t)==ke}var Ue=xe,C=b,Ie=de,Ee=pe,Me=Ue,Be=1/0,w=C?C.prototype:void 0,F=w?w.toString:void 0;function I(t){if(typeof t=="string")return t;if(Ee(t))return Ie(t,I)+"";if(Me(t))return F?F.call(t):"";var e=t+"";return e=="0"&&1/t==-Be?"-0":e}var De=I,ze=De;function Ge(t){return t==null?"":ze(t)}var Ne=Ge,qe=Ne,Le=0;function Xe(t){var e=++Le;return qe(t)+e}var Ze=Xe;const Ke=x(Ze);var We=t=>new Promise(e=>setTimeout(e,t));const He=x(We);async function Ye(t,e,{delayRejection:r=!0}={}){const n=He(e);return await(r?n:Promise.all([t,n])),t}function Je(t,e,r=0){return function(){return this[e]=!0,Ye(Promise.resolve(t.call(this,...arguments)),r).finally(()=>this[e]=!1)}}const Qe={inject:["$storageService"],data:()=>({uploading:!1}),methods:{createFileForm(t){this.form=new FormData;const[e]=t.target.files;e&&(this.form.append("file",e,e.name),this.form.append("unpack",!0))},upload:Je(function(t,e){return this.createFileForm(e),this.$storageService.upload(t,this.form).then(r=>{const{name:n}=this.form.get("file");this.$emit("upload",{...r,name:n})}).catch(()=>{this.error="An error has occurred!"})},"uploading")}};const Ve={name:"upload-btn",mixins:[Qe],props:{repositoryId:{type:Number,required:!0},id:{type:String,default:()=>Ke("file_")},fileName:{type:String,default:""},fileKey:{type:String,default:""},validate:{type:Object,default:()=>({ext:[]})},label:{type:String,default:"Choose a file"},sm:{type:Boolean,default:!1}},methods:{async validateAndUpload(t){const{valid:e}=await this.$refs.validator.validate(t);e&&this.upload(this.repositoryId,t)}},watch:{uploading(t){this.$emit("update:uploading",t)}}};var et=function(){var e=this,r=e._self._c;return r("div",{staticClass:"file-upload"},[r("form",{staticClass:"upload-form",on:{submit:function(n){n.preventDefault()}}},[r("validation-provider",{ref:"validator",attrs:{rules:e.validate}},[r("input",{ref:e.id,staticClass:"upload-input",attrs:{id:e.id,name:e.id,accept:e.validate.ext,type:"file"},on:{change:e.validateAndUpload}})]),e.fileKey?r("span",{staticClass:"file-name",on:{click:function(n){return e.downloadFile(e.fileKey,e.fileName)}}},[e._v(e._s(e.fileName)+" ")]):r("v-btn",{attrs:{loading:e.uploading,color:"grey darken-4",text:""},on:{click:function(n){return e.$refs[e.id].click()}}},[r("v-icon",{staticClass:"mr-2",attrs:{color:"secondary"}},[e._v("mdi-cloud-upload-outline")]),e._v(" "+e._s(e.label)+" ")],1)],1)])},tt=[],rt=_(Ve,et,tt,!1,null,"0b029e10",null,null);const nt=rt.exports;const at={inject:["$elementBus"],props:{element:{type:Object,required:!0}},computed:{isUploaded:t=>!!t.element.data.launchUrl},methods:{saveElement(t){this.$elementBus.emit("save",{...this.element.data,...t})}},components:{UploadBtn:nt}};var ot=function(){var e=this,r=e._self._c;return r("v-toolbar",{staticClass:"tce-scorm-toolbar elevation-0",attrs:{height:"72",color:"transparent"}},[r("v-toolbar-title",{staticClass:"pl-1"},[e._v("SCORM toolbar")]),r("v-toolbar-items",{staticClass:"mx-auto"},[r("upload-btn",{attrs:{"repository-id":e.element.repositoryId,label:"Upload SCORM package"},on:{upload:e.saveElement}})],1)],1)},it=[],st=_(at,ot,it,!1,null,"68e0ba8d",null,null);const E=st.exports,h={initState:()=>({launchUrl:null}),components:{Edit:g}},lt=Object.freeze(Object.defineProperty({__proto__:null,Edit:g,Toolbar:E,default:h},Symbol.toStringTag,{value:"Module"}));function ct(t,e){return ut(t)||dt(t,e)||ft(t,e)||pt()}function ut(t){if(Array.isArray(t))return t}function dt(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[],a=!0,o=!1,c,u;try{for(r=r.call(t);!(a=(c=r.next()).done)&&(n.push(c.value),!(e&&n.length===e));a=!0);}catch(i){o=!0,u=i}finally{try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}return n}}function ft(t,e){if(t){if(typeof t=="string")return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(t,e)}}function A(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function pt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var m=function(){return m=Object.assign||function(e){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},m.apply(this,arguments)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var y=function(){return y=Object.assign||function(e){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},y.apply(this,arguments)};function _t(t){return t.toLowerCase()}var vt=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],mt=/[^A-Z0-9]+/gi;function yt(t,e){e===void 0&&(e={});for(var r=e.splitRegexp,n=r===void 0?vt:r,a=e.stripRegexp,o=a===void 0?mt:a,c=e.transform,u=c===void 0?_t:c,i=e.delimiter,l=i===void 0?" ":i,d=R(R(t,n,"$1\0$2"),o,"\0"),f=0,s=d.length;d.charAt(f)==="\0";)f++;for(;d.charAt(s-1)==="\0";)s--;return d.slice(f,s).split("\0").map(u).join(l)}function R(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce(function(n,a){return n.replace(a,r)},t)}function gt(t,e){return e===void 0&&(e={}),yt(t,y({delimiter:"."},e))}function bt(t,e){return e===void 0&&(e={}),gt(t,m({delimiter:"-"},e))}var ht=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},St=function(e){return typeof e=="function"},P=h.initState,$t=P===void 0?function(){return{}}:P,k=h.components,M=k===void 0?{}:k,Ot=Object.assign({version:z,initState:$t,components:M},G),B=function(e){ht(lt,"install")&&St(void 0)&&(void 0)(e),Object.entries(M).forEach(function(r){var n=ct(r,2),a=n[0],o=n[1];a=bt(a),a==="edit"&&e.component($,o),e.component("".concat($,"--").concat(a),o)})};exports.Edit=g;exports.Toolbar=E;exports.default=B;exports.install=B;exports.options=Ot;
//# sourceMappingURL=tce-scorm.js.map
