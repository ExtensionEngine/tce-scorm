(function(l,d){typeof exports=="object"&&typeof module<"u"?d(exports):typeof define=="function"&&define.amd?define(["exports"],d):(l=typeof globalThis<"u"?globalThis:l||self,d((l.__TAILOR_CONTENT_ELEMENTS__=l.__TAILOR_CONTENT_ELEMENTS__||{},l.__TAILOR_CONTENT_ELEMENTS__["@extensionengine/tce-scorm"]={})))})(this,function(l){"use strict";const d="@extensionengine/tce-scorm",D="0.0.2",L={label:"Scorm",type:"SCORM",ui:{icon:"mdi-package-up",forceFullWidth:!0}};function v(t,e,n,r,a,o,u,f){var i=typeof t=="function"?t.options:t;e&&(i.render=e,i.staticRenderFns=n,i._compiled=!0),r&&(i.functional=!0),o&&(i._scopeId="data-v-"+o);var c;if(u?(c=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__<"u"&&(s=__VUE_SSR_CONTEXT__),a&&a.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(u)},i._ssrRegister=c):a&&(c=f?function(){a.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(i.functional){i._injectStyles=c;var _=i.render;i.render=function(Ot,B){return c.call(B),_(Ot,B)}}else{var p=i.beforeCreate;i.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:i}}const z={name:"element-placeholder",props:{name:{type:String,required:!0},icon:{type:String,required:!0},placeholder:{type:String,default:"Select to edit"},activePlaceholder:{type:String,default:"Use toolbar to edit"},activeIcon:{type:String,default:null},activeColor:{type:String,default:"#fff"},isDisabled:{type:Boolean,default:!1},isFocused:{type:Boolean,default:!1},dense:{type:Boolean,default:!1}},computed:{iconSize(){return this.dense?this.isFocused?24:20:this.isFocused?38:30}}};var G=function(){var e=this,n=e._self._c;return n("v-sheet",{staticClass:"transparent grey--text text--darken-4",class:e.dense?"pt-3":"pa-12"},[n("v-avatar",{attrs:{size:e.dense?40:60,color:e.isDisabled?"grey darken-3":"blue-grey darken-4"}},[n("v-icon",{attrs:{size:e.iconSize,color:e.isFocused?e.activeColor:"#fff"}},[e._v(" "+e._s(e.icon)+" ")])],1),n("div",{staticClass:"grey--text",class:[e.isDisabled?"text--darken-3":"text--darken-4",e.dense?"my-2 subtitle-2":"my-4 headline"]},[e._v(" "+e._s(e.name)+" ")]),!e.dense&&!e.isDisabled?n("div",{staticClass:"subtitle-1"},[e.isFocused?[n("span",[e._v(e._s(e.activePlaceholder))]),e.activeIcon?n("v-icon",{attrs:{size:"20",color:"blue-grey darken-4"}},[e._v(" "+e._s(e.activeIcon)+" ")]):e._e()]:[e._v(e._s(e.placeholder))]],2):e._e()],1)},q=[],X=v(z,G,q,!1,null,null,null,null);const Z=X.exports,jt="",K={name:"tce-preview-overlay"};var W=function(e,n){return n._m(0)},H=[function(t,e){return t("button",{staticClass:"overlay d-flex justify-center align-center"},[t("div",{staticClass:"message grey--text text--lighten-2"},[e._v("Click to preview")])])}],Y=v(K,W,H,!0,null,"df311f4a",null,null);const J=Y.exports,Ct="",Q={name:"tce-scorm",inject:["$elementBus"],props:{element:{type:Object,required:!0},isFocused:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1},dense:{type:Boolean,default:!1}},computed:{launchUrl:t=>t.element.data.launchUrl},mounted(){this.$elementBus.on("save",t=>this.$emit("save",t))},components:{ElementPlaceholder:Z,PreviewOverlay:J}};var V=function(){var e=this,n=e._self._c;return n("div",{staticClass:"tce-scorm"},[e.launchUrl?n("div",[!e.isDisabled&&!e.isFocused?n("preview-overlay"):e._e(),n("div",{staticClass:"container"},[n("iframe",{staticClass:"element",attrs:{src:e.launchUrl,tabindex:e.isDisabled||e.isFocused?0:-1,frameborder:"0"}})])],1):n("element-placeholder",{attrs:{"is-focused":e.isFocused,"is-disabled":e.isDisabled,dense:e.dense,name:"SCORM component",icon:"mdi-package-up","active-placeholder":"Use toolbar to upload the SCORM package","active-icon":"mdi-arrow-up"}})],1)},ee=[],te=v(Q,V,ee,!1,null,"c5f02ba5",null,null);const g=te.exports;var y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function T(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ne=typeof y=="object"&&y&&y.Object===Object&&y,re=ne,ae=re,oe=typeof self=="object"&&self&&self.Object===Object&&self,ie=ae||oe||Function("return this")(),se=ie,le=se,ce=le.Symbol,b=ce;function ue(t,e){for(var n=-1,r=t==null?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}var de=ue,fe=Array.isArray,_e=fe,O=b,j=Object.prototype,pe=j.hasOwnProperty,ve=j.toString,m=O?O.toStringTag:void 0;function me(t){var e=pe.call(t,m),n=t[m];try{t[m]=void 0;var r=!0}catch{}var a=ve.call(t);return r&&(e?t[m]=n:delete t[m]),a}var ye=me,ge=Object.prototype,be=ge.toString;function he(t){return be.call(t)}var Se=he,C=b,$e=ye,Te=Se,Oe="[object Null]",je="[object Undefined]",w=C?C.toStringTag:void 0;function Ce(t){return t==null?t===void 0?je:Oe:w&&w in Object(t)?$e(t):Te(t)}var we=Ce;function Ae(t){return t!=null&&typeof t=="object"}var Re=Ae,Fe=we,Ee=Re,Pe="[object Symbol]";function ke(t){return typeof t=="symbol"||Ee(t)&&Fe(t)==Pe}var Ie=ke,A=b,xe=de,Ue=_e,Me=Ie,Ne=1/0,R=A?A.prototype:void 0,F=R?R.toString:void 0;function E(t){if(typeof t=="string")return t;if(Ue(t))return xe(t,E)+"";if(Me(t))return F?F.call(t):"";var e=t+"";return e=="0"&&1/t==-Ne?"-0":e}var Be=E,De=Be;function Le(t){return t==null?"":De(t)}var ze=Le,Ge=ze,qe=0;function Xe(t){var e=++qe;return Ge(t)+e}var Ze=Xe;const Ke=T(Ze);var We=t=>new Promise(e=>setTimeout(e,t));const He=T(We);async function Ye(t,e,{delayRejection:n=!0}={}){const r=He(e);return await(n?r:Promise.all([t,r])),t}function Je(t,e,n=0){return function(){return this[e]=!0,Ye(Promise.resolve(t.call(this,...arguments)),n).finally(()=>this[e]=!1)}}const Qe={inject:["$storageService"],data:()=>({uploading:!1}),methods:{createFileForm(t){this.form=new FormData;const[e]=t.target.files;e&&(this.form.append("file",e,e.name),this.form.append("unpack",!0))},upload:Je(function(t,e){return this.createFileForm(e),this.$storageService.upload(t,this.form).then(n=>{const{name:r}=this.form.get("file");this.$emit("upload",{...n,name:r})}).catch(()=>{this.error="An error has occurred!"})},"uploading")}},wt="",Ve={name:"upload-btn",mixins:[Qe],props:{repositoryId:{type:Number,required:!0},id:{type:String,default:()=>Ke("file_")},fileName:{type:String,default:""},fileKey:{type:String,default:""},validate:{type:Object,default:()=>({ext:[]})},label:{type:String,default:"Choose a file"},sm:{type:Boolean,default:!1}},methods:{async validateAndUpload(t){const{valid:e}=await this.$refs.validator.validate(t);e&&this.upload(this.repositoryId,t)}},watch:{uploading(t){this.$emit("update:uploading",t)}}};var et=function(){var e=this,n=e._self._c;return n("div",{staticClass:"file-upload"},[n("form",{staticClass:"upload-form",on:{submit:function(r){r.preventDefault()}}},[n("validation-provider",{ref:"validator",attrs:{rules:e.validate}},[n("input",{ref:e.id,staticClass:"upload-input",attrs:{id:e.id,name:e.id,accept:e.validate.ext,type:"file"},on:{change:e.validateAndUpload}})]),e.fileKey?n("span",{staticClass:"file-name",on:{click:function(r){return e.downloadFile(e.fileKey,e.fileName)}}},[e._v(e._s(e.fileName)+" ")]):n("v-btn",{attrs:{loading:e.uploading,color:"grey darken-4",text:""},on:{click:function(r){return e.$refs[e.id].click()}}},[n("v-icon",{staticClass:"mr-2",attrs:{color:"secondary"}},[e._v("mdi-cloud-upload-outline")]),e._v(" "+e._s(e.label)+" ")],1)],1)])},tt=[],nt=v(Ve,et,tt,!1,null,"2dd8f1ab",null,null);const rt=nt.exports,At="",at={inject:["$elementBus"],props:{element:{type:Object,required:!0}},computed:{isUploaded:t=>!!t.element.data.launchUrl},methods:{saveElement(t){this.$elementBus.emit("save",{...this.element.data,...t})}},components:{UploadBtn:rt}};var ot=function(){var e=this,n=e._self._c;return n("v-toolbar",{staticClass:"tce-scorm-toolbar elevation-0",attrs:{height:"72",color:"transparent"}},[n("v-toolbar-title",{staticClass:"pl-1"},[e._v("SCORM toolbar")]),n("v-toolbar-items",{staticClass:"mx-auto"},[n("upload-btn",{attrs:{"repository-id":e.element.repositoryId,label:"Upload SCORM package"},on:{upload:e.saveElement}})],1)],1)},it=[],st=v(at,ot,it,!1,null,"68e0ba8d",null,null);const P=st.exports,h={initState:()=>({launchUrl:null}),components:{Edit:g}},lt=Object.freeze(Object.defineProperty({__proto__:null,Edit:g,Toolbar:P,default:h},Symbol.toStringTag,{value:"Module"}));function ct(t,e){return ut(t)||dt(t,e)||ft(t,e)||_t()}function ut(t){if(Array.isArray(t))return t}function dt(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,o=!1,u,f;try{for(n=n.call(t);!(a=(u=n.next()).done)&&(r.push(u.value),!(e&&r.length===e));a=!0);}catch(i){o=!0,f=i}finally{try{!a&&n.return!=null&&n.return()}finally{if(o)throw f}}return r}}function ft(t,e){if(t){if(typeof t=="string")return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}}function k(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
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
  ***************************************************************************** */var S=function(){return S=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},S.apply(this,arguments)};/*! *****************************************************************************
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
  ***************************************************************************** */var $=function(){return $=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},$.apply(this,arguments)};function pt(t){return t.toLowerCase()}var vt=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],mt=/[^A-Z0-9]+/gi;function yt(t,e){e===void 0&&(e={});for(var n=e.splitRegexp,r=n===void 0?vt:n,a=e.stripRegexp,o=a===void 0?mt:a,u=e.transform,f=u===void 0?pt:u,i=e.delimiter,c=i===void 0?" ":i,_=I(I(t,r,"$1\0$2"),o,"\0"),p=0,s=_.length;_.charAt(p)==="\0";)p++;for(;_.charAt(s-1)==="\0";)s--;return _.slice(p,s).split("\0").map(f).join(c)}function I(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce(function(r,a){return r.replace(a,n)},t)}function gt(t,e){return e===void 0&&(e={}),yt(t,$({delimiter:"."},e))}function bt(t,e){return e===void 0&&(e={}),gt(t,S({delimiter:"-"},e))}var ht=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},St=function(e){return typeof e=="function"},x=h.initState,$t=x===void 0?function(){return{}}:x,U=h.components,M=U===void 0?{}:U,Tt=Object.assign({version:D,initState:$t,components:M},L),N=function(e){ht(lt,"install")&&St(void 0)&&(void 0)(e),Object.entries(M).forEach(function(n){var r=ct(n,2),a=r[0],o=r[1];a=bt(a),a==="edit"&&e.component(d,o),e.component("".concat(d,"--").concat(a),o)})};l.Edit=g,l.Toolbar=P,l.default=N,l.install=N,l.options=Tt,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=tce-scorm.umd.cjs.map