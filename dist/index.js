module.exports=function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=s.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s={name:"vodal",props:{show:{type:Boolean,required:!0},width:{type:Number,default:400},height:{type:Number,default:240},duration:{type:Number,default:300},measure:{type:String,default:"px"},animation:{type:String,default:"zoom"},mask:{type:Boolean,default:!0},closeButton:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!1},closeOnClickMask:{type:Boolean,default:!1},className:{type:String,default:""},customStyles:{type:Object,default:function(){return{}}},customMaskStyles:{type:Object,default:function(){return{}}}},computed:{style:function(){return{animationDuration:this.duration+"ms"}},dialogStyle:function(){return o({width:this.width+this.measure,height:this.height+this.measure,animationDuration:this.duration+"ms"},this.customStyles)}},watch:{show:function(e){var t=this;e&&this.$nextTick(function(){t.$el.focus()})}},methods:{onEsc:function(){this.show&&this.closeOnEsc&&this.$emit("hide")},onClickMask:function(){this.$emit("clickMask"),this.closeOnClickMask&&this.$emit("hide")}}},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"vodal-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],class:["vodal",e.className],style:e.style,attrs:{tabindex:"-1"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27))return null;e.onEsc(t)}}},[e.mask?n("div",{staticClass:"vodal-mask",style:e.customMaskStyles,on:{click:e.onClickMask}}):e._e(),e._v(" "),n("transition",{attrs:{name:"vodal-"+e.animation}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"vodal-dialog",style:e.dialogStyle},[e.closeButton?n("span",{staticClass:"vodal-close",on:{click:function(t){e.$emit("hide")}}}):e._e(),e._v(" "),e._t("default")],2)])],1)])},r=[],a={render:i,staticRenderFns:r},u=a,l=n(2),c=l(s,u,null,null,null);t.default=c.exports},function(e,t){e.exports=function(e,t,n,o,s){var i,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,r=e.default);var u="function"==typeof r?r.options:r;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),o&&(u._scopeId=o);var l;if(s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):n&&(l=n),l){var c=u.functional,d=c?u.render:u.beforeCreate;c?u.render=function(e,t){return l.call(t),d(e,t)}:u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:i,exports:r,options:u}}}]);