!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["isdirty-isnew-vuexorm-plugin"]=t():e["isdirty-isnew-vuexorm-plugin"]=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"defaultOptions",function(){return o});const o={key:"deleted_at",flagName:"$isDeleted",debug:!1,exposeFlagsExternally:!0,mode:null};t.default={install(e,t){const n={...o,...t},{Model:r,Query:i,RootGetters:s,Getters:l,RootMutations:u,RootActions:f,Actions:a}=e;if(i.prototype.softDeleteOptions={...n},n.exposeFlagsExternally){const e={[n.key]:r.attr(!1),[n.flagName]:r.attr(!1)},t=r.prototype.$fields;r.prototype.$fields=function(){const n=t.call(this);return Object.assign({},n,e)}}const c=r.prototype.$fill;r.prototype.$fill=function(e){c.call(this,e),this[n.flagName]=e&&e[n.flagName]||!1,this[n.key]=e&&e[n.key]||null};i.on("beforeSelect",function(e,t){const{debug:n,key:o,mode:r,flagName:i}=this.softDeleteOptions;switch(r){case"deleted":return this.softDeleteOptions.mode=null,e.filter(e=>!!e[i]);case"all":return this.softDeleteOptions.mode=null,e;default:return e.filter(e=>!e[i])}}),i.prototype.softDelete=function(e){const{key:t,flagName:n}=this.softDeleteOptions,o=new Date;return this.model.update({where:e,data:{[t]:o,[n]:!0}})},r.softDelete=function(e){this.dispatch("softDelete",e)},r.prototype.softDelete=async function(e){return e?this.$dispatch("softDelete",e):null===this.$id?null:this.$dispatch("softDelete",this.$id)},u.softDelete=function(e,t){const n=t.entity,o=t.result,r=t.where;o.data=new i(e,n).softDelete(r)},f.softDelete=function(e,t){const n={data:{}};return e.commit("softDelete",{...t,result:n}),n.data},a.softDelete=function(e,t){const n=e.state,o=n.$name,r="object"==typeof t?t.where:t;return e.dispatch(`${n.$connection}/softDelete`,{entity:o,where:r},{root:!0})},i.prototype.withTrashed=function(){return this.softDeleteOptions.mode="all",this},i.prototype.trashed=function(){return this.softDeleteOptions.mode="deleted",this},s.allTrashed=function(e){return function(t){if(t)return new i(e,t).trashed().get();{let t=[];return r.database().entities.forEach(n=>{let o=new i(e,n.name).trashed().get();t=t.concat(o)}),t}}},l.allTrashed=function(e,t,n,o){return function(){return o[`${e.$connection}/allTrashed`](e.$name)}}}}}])});