"use strict";(self.webpackChunk_1at06cs097=self.webpackChunk_1at06cs097||[]).push([["commoncomponents-accordion"],{"2ZUN":(e,t,r)=>{var n=r("TqRt"),a=r("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(r("lwsE")),o=n(r("W8MJ")),u=n(r("7W2i")),s=n(r("a1gu")),i=n(r("Nsbk")),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=c?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r("q1tI")),p=n(r("imYo")),f=r("jZew");function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,s.default)(this,r)}}var m=function(e){(0,u.default)(r,e);var t=h(r);function r(e){return(0,c.default)(this,r),t.call(this,e)}return(0,o.default)(r,[{key:"render",value:function(){var e=this;return l.default.createElement(l.default.Fragment,null,this.props.sectionTitle&&l.default.createElement(f.H2,{padding:"10px 16px",id:this.props.sectionId},this.props.sectionTitle),this.props.itemLabels&&this.props.itemLabels.map((function(t,r){return l.default.createElement(p.default,{title:t,index:r,currentAccOpen:e.props.currentAccOpen,changeAccIndex:e.props.changeAccIndex,className:e.props.className,margin:e.props.margin,style:e.props.style,accordainWrpClassName:e.props.accordainWrpClassName},e.props.children[r])})))}}]),r}(l.Component);t.default=m}}]);
//# sourceMappingURL=commoncomponents-accordion.6fa2bd9e.bundle.js.map