"use strict";(self.webpackChunk_1at06cs097=self.webpackChunk_1at06cs097||[]).push([["clientPage3"],{KXDi:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.DhProperties=void 0,e.getDefaultImage=function(t){switch(t){case"mobile":return r("mobile-NoImage.jpg");case"laptop":return r("laptop-NoImage.jpg");case"smart-tv":return r("smart-tv-NoImage.png");default:return null}},e.imagePath=r,e.isValidImagePath=function(t){if(void 0!==t)return t.endsWith(".jpg")||t.endsWith(".jpeg")||t.endsWith(".png")||t.endsWith(".webp");return!1},e.scaleDownImage=function(t,e,a){if("string"!=typeof t||isNaN(e))return t;var r=t;try{r=r.replace(/\/img\/[0-9]+x[0-9]+x[0-9]+\/img\//,(function(r){var i=r.replace(/\/img\//g,"").split("x").map((function(t,a){return 1==a?t:Math.ceil(t/e)}));return i.length<3?t:(a&&a.minWidth&&a.minHeight&&!isNaN(a.minWidth)&&!isNaN(a.minHeight)&&(i[0]=Math.max(i[0],a.minWidth),i[2]=Math.max(i[2],a.minHeight)),i=i.join("x"),"/img/".concat(i,"/img/"))}))}catch(t){console.log(t)}return r};var a={properties:{staticImageBasePath:""}};function r(t){return t?a.properties.staticImageBasePath+t:""}e.DhProperties=a},tLNF:(t,e,a)=>{var r=a("TqRt"),i=r(a("q1tI")),l=r(a("i8i4")),n=a("TyAF"),o=r(a("aHkg")),s=r(a("zCzY"));a("KXDi").DhProperties.properties=window.__ENV_PROPERTIES_ISOMORPHIC__;var u=new s.default(window.__INITIAL_STATE__);l.default.hydrate(i.default.createElement(n.Provider,{appStore:u},i.default.createElement(o.default,null)),document.querySelector("#root"))},aHkg:(t,e,a)=>{var r=a("TqRt"),i=a("cDf5");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l,n,o,s=r(a("lwsE")),u=r(a("W8MJ")),d=r(a("7W2i")),p=r(a("a1gu")),c=r(a("Nsbk")),f=r(a("lSNA")),h=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};var a=N(e);if(a&&a.has(t))return a.get(t);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=l?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=t[n]}r.default=t,a&&a.set(t,r);return r}(a("q1tI")),v=r(a("17x9")),b=a("TyAF"),y=r(a("zCzY")),m=(r(a("MKeS")),a("EpIN"),r(a("Cch6"))),g=r(a("5cWD")),w=r(a("y+qX")),O=r(a("qSUc")),I=r(a("4ca0")),P=r(a("GFYy")),k=r(a("bdgo")),T=r(a("9PXl"));function N(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(N=function(t){return t?a:e})(t)}function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=(0,c.default)(t);if(e){var i=(0,c.default)(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return(0,p.default)(this,a)}}var j=(0,b.inject)("appStore")(l=(0,b.observer)((o=n=function(t){(0,d.default)(a,t);var e=M(a);function a(t){return(0,s.default)(this,a),e.call(this,t)}return(0,u.default)(a,[{key:"componentDidMount",value:function(){"undefined"!=typeof landingPageDidMount&&(landingPageDidMount=!0)}},{key:"render",value:function(){var t=this.props.appStore.data;return h.default.createElement("div",null,!t.cards[0].loadError&&h.default.createElement(m.default,{data:t.cards[0],lang:t.lang,appStore:this.props.appStore}),!t.cards[1].loadError&&h.default.createElement(g.default,{data:t.cards[1],lang:t.lang,appStore:this.props.appStore}),!t.cards[2].loadError&&h.default.createElement(w.default,{data:t.cards[2],lang:t.lang,appStore:this.props.appStore}),!t.cards[3].loadError&&h.default.createElement(O.default,{data:t.cards[3],lang:t.lang,appStore:this.props.appStore}),!t.cards[4].loadError&&h.default.createElement(I.default,{data:t.cards[4],lang:t.lang,appStore:this.props.appStore}),!t.cards[5].loadError&&h.default.createElement(P.default,{data:t.cards[5],lang:t.lang,appStore:this.props.appStore}),!t.cards[6].loadError&&h.default.createElement(k.default,{data:t.cards[6],lang:t.lang,appStore:this.props.appStore}),!t.cards[7].loadError&&h.default.createElement(T.default,{data:t.cards[7],lang:t.lang,appStore:this.props.appStore}))}}]),a}(h.Component),(0,f.default)(n,"propTypes",{appStore:v.default.object.isRequired}),(0,f.default)(n,"defaultProps",{appStore:new y.default}),l=o))||l)||l;e.default=j},Cch6:(t,e,a)=>{var r=a("TqRt"),i=a("cDf5");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r(a("lwsE")),n=r(a("W8MJ")),o=r(a("7W2i")),s=r(a("a1gu")),u=r(a("Nsbk")),d=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};var a=f(e);if(a&&a.has(t))return a.get(t);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=l?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=t[n]}r.default=t,a&&a.set(t,r);return r}(a("q1tI")),p=r(a("c3+X")),c=r(a("nmqh"));function f(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(f=function(t){return t?a:e})(t)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=(0,u.default)(t);if(e){var i=(0,u.default)(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return(0,s.default)(this,a)}}var v=function(t){(0,o.default)(a,t);var e=h(a);function a(){return(0,l.default)(this,a),e.apply(this,arguments)}return(0,n.default)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props.lang;return d.default.createElement(c.default,{title:!!this.props.data.attributes.title&&this.props.data.attributes.title[t],seeall:!!this.props.data.attributes.seeall&&this.props.data.attributes.seeall[t],seeAllUrl:this.props.data.attributes.seeAllUrl,baseUrl:"string"==typeof this.props.data.attributes.baseUrl&&this.props.data.attributes.baseUrl.length>0&&this.props.data.attributes.baseUrl,seeAllPageTitle:this.props.data.attributes.seeAllPageTitle,sectionTitle:this.props.data.attributes.sectionTitle,sectionId:this.props.data.attributes.sectionId,topicId:this.props.data.attributes.topicId,subTopicId:this.props.data.attributes.subTopicId,deeplink:this.props.data.attributes.deeplink,titleId:this.props.data.attributes.titleId},d.default.createElement(p.default,{data:this.props.data.children[0].attributes.navButtonData,className:this.props.data.children[0].attributes.className,isSticky:this.props.data.children[0].attributes.isSticky,lang:t}))}}]),a}(d.default.Component);e.default=v},"5cWD":(t,e,a)=>{var r=a("TqRt"),i=a("cDf5");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r(a("lwsE")),n=r(a("W8MJ")),o=r(a("7W2i")),s=r(a("a1gu")),u=r(a("Nsbk")),d=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};var a=v(e);if(a&&a.has(t))return a.get(t);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=l?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=t[n]}r.default=t,a&&a.set(t,r);return r}(a("q1tI")),p=r(a("Oiok")),c=r(a("IRwy")),f=r(a("D3+u")),h=r(a("nmqh"));function v(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(v=function(t){return t?a:e})(t)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=(0,u.default)(t);if(e){var i=(0,u.default)(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return(0,s.default)(this,a)}}var y=function(t){(0,o.default)(a,t);var e=b(a);function a(){return(0,l.default)(this,a),e.apply(this,arguments)}return(0,n.default)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t,e,a,r,i,l,n,o=this.props.lang;return d.default.createElement(h.default,{title:!!this.props.data.attributes.title&&this.props.data.attributes.title[o],seeall:!!this.props.data.attributes.seeall&&this.props.data.attributes.seeall[o],seeAllUrl:this.props.data.attributes.seeAllUrl,baseUrl:"string"==typeof this.props.data.attributes.baseUrl&&this.props.data.attributes.baseUrl.length>0&&this.props.data.attributes.baseUrl,seeAllPageTitle:this.props.data.attributes.seeAllPageTitle,sectionTitle:this.props.data.attributes.sectionTitle,sectionId:this.props.data.attributes.sectionId,topicId:this.props.data.attributes.topicId,subTopicId:this.props.data.attributes.subTopicId,deeplink:this.props.data.attributes.deeplink,titleId:this.props.data.attributes.titleId},d.default.createElement(f.default,{tabs:null===(t=this.props.data.children[0])||void 0===t||null===(e=t.attributes)||void 0===e?void 0:e.tabs,contentItems:null===(a=this.props.data.children[0])||void 0===a?void 0:a.children,lang:o,isScrollableTabs:null===(r=this.props.data.children[0])||void 0===r||null===(i=r.attributes)||void 0===i?void 0:i.isScrollableTabs,tabColor:null===(l=this.props.data.children[0])||void 0===l||null===(n=l.attributes)||void 0===n?void 0:n.tabColor},this.props.data.children[0].children&&this.props.data.children[0].children.map((function(t){var e,a,r,i,l,n,s,u,f,h;if("Slider"===t.component)return d.default.createElement(c.default,{className:null==t||null===(e=t.attributes)||void 0===e?void 0:e.className,viewall:!(null==t||null===(a=t.attributes)||void 0===a||!a.viewall)&&(null==t||null===(r=t.attributes)||void 0===r?void 0:r.viewall[o]),width:null==t||null===(i=t.attributes)||void 0===i?void 0:i.width,height:null==t||null===(l=t.attributes)||void 0===l?void 0:l.height,padding:null==t||null===(n=t.attributes)||void 0===n?void 0:n.padding,onload:void 0,viewAllUrl:null==t||null===(s=t.attributes)||void 0===s?void 0:s.viewAllUrl,viewAllTitle:null==t||null===(u=t.attributes)||void 0===u?void 0:u.viewAllTitle,NoSliderNoOfItems:null==t||null===(f=t.attributes)||void 0===f?void 0:f.NoSliderNoOfItems,NoSliderClassName:null==t||null===(h=t.attributes)||void 0===h?void 0:h.NoSliderClassName},t.children&&t.children.map((function(t){return d.default.createElement(p.default,{data:t,lang:o})})))}))))}}]),a}(d.default.Component);e.default=y},"y+qX":(t,e,a)=>{var r=a("TqRt"),i=a("cDf5");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r(a("lwsE")),n=r(a("W8MJ")),o=r(a("7W2i")),s=r(a("a1gu")),u=r(a("Nsbk")),d=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};var a=f(e);if(a&&a.has(t))return a.get(t);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=l?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=t[n]}r.default=t,a&&a.set(t,r);return r}(a("q1tI")),p=r(a("Cq5A")),c=r(a("nmqh"));function f(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(f=function(t){return t?a:e})(t)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=(0,u.default)(t);if(e){var i=(0,u.default)(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return(0,s.default)(this,a)}}var v=function(t){(0,o.default)(a,t);var e=h(a);function a(){return(0,l.default)(this,a),e.apply(this,arguments)}return(0,n.default)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props.lang;return d.default.createElement(c.default,{title:!!this.props.data.attributes.title&&this.props.data.attributes.title[t],seeall:!!this.props.data.attributes.seeall&&this.props.data.attributes.seeall[t],seeAllUrl:this.props.data.attributes.seeAllUrl,baseUrl:"string"==typeof this.props.data.attributes.baseUrl&&this.props.data.attributes.baseUrl.length>0&&this.props.data.attributes.baseUrl,seeAllPageTitle:this.props.data.attributes.seeAllPageTitle,sectionTitle:this.props.data.attributes.sectionTitle,sectionId:this.props.data.attributes.sectionId,topicId:this.props.data.attributes.topicId,subTopicId:this.props.data.attributes.subTopicId,deeplink:this.props.data.attributes.deeplink,titleId:this.props.data.attributes.titleId},d.default.createElement(p.default,{adId:this.props.data.children[0].attributes.adId,subSlots:this.props.data.children[0].attributes.subSlots,topicKey:this.props.data.children[0].attributes.topicKey}))}}]),a}(d.default.Component);e.default=v},qSUc:(t,e,a)=>{var r=a("TqRt"),i=a("cDf5");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r(a("lwsE")),n=r(a("W8MJ")),o=r(a("7W2i")),s=r(a("a1gu")),u=r(a("Nsbk")),d=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};var a=h(e);if(a&&a.has(t))return a.get(t);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=l?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=t[n]}r.default=t,a&&a.set(t,r);return r}(a("q1tI")),p=r(a("0AYl")),c=r(a("IRwy")),f=r(a("nmqh"));function h(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(h=function(t){return t?a:e})(t)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=(0,u.default)(t);if(e){var i=(0,u.default)(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return(0,s.default)(this,a)}}var b=function(t){(0,o.default)(a,t);var e=v(a);function a(){return(0,l.default)(this,a),e.apply(this,arguments)}return(0,n.default)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t,e,a,r,i,l,n,o,s,u,h,v,b,y,m,g,w,O,I,P,k=this.props.lang;return d.default.createElement(f.default,{title:!!this.props.data.attributes.title&&this.props.data.attributes.title[k],seeall:!!this.props.data.attributes.seeall&&this.props.data.attributes.seeall[k],seeAllUrl:this.props.data.attributes.seeAllUrl,baseUrl:"string"==typeof this.props.data.attributes.baseUrl&&this.props.data.attributes.baseUrl.length>0&&this.props.data.attributes.baseUrl,seeAllPageTitle:this.props.data.attributes.seeAllPageTitle,sectionTitle:this.props.data.attributes.sectionTitle,sectionId:this.props.data.attributes.sectionId,topicId:this.props.data.attributes.topicId,subTopicId:this.props.data.attributes.subTopicId,deeplink:this.props.data.attributes.deeplink,titleId:this.props.data.attributes.titleId},d.default.createElement(c.default,{className:null===(t=this.props.data.children[0])||void 0===t||null===(e=t.attributes)||void 0===e?void 0:e.className,viewall:!(null===(a=this.props.data.children[0])||void 0===a||null===(r=a.attributes)||void 0===r||!r.viewall)&&(null===(i=this.props.data.children[0])||void 0===i||null===(l=i.attributes)||void 0===l?void 0:l.viewall[k]),width:null===(n=this.props.data.children[0])||void 0===n||null===(o=n.attributes)||void 0===o?void 0:o.width,height:null===(s=this.props.data.children[0])||void 0===s||null===(u=s.attributes)||void 0===u?void 0:u.height,padding:null===(h=this.props.data.children[0])||void 0===h||null===(v=h.attributes)||void 0===v?void 0:v.padding,onload:void 0,viewAllUrl:null===(b=this.props.data.children[0])||void 0===b||null===(y=b.attributes)||void 0===y?void 0:y.viewAllUrl,viewAllTitle:null===(m=this.props.data.children[0])||void 0===m||null===(g=m.attributes)||void 0===g?void 0:g.viewAllTitle,NoSliderNoOfItems:null===(w=this.props.data.children[0])||void 0===w||null===(O=w.attributes)||void 0===O?void 0:O.NoSliderNoOfItems,NoSliderClassName:null===(I=this.props.data.children[0])||void 0===I||null===(P=I.attributes)||void 0===P?void 0:P.NoSliderClassName},this.props.data.children[0].children&&this.props.data.children[0].children.map((function(t){return d.default.createElement(p.default,{data:t})}))))}}]),a}(d.default.Component);e.default=b},"4ca0":(t,e,a)=>{var r=a("TqRt"),i=a("cDf5");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r(a("lwsE")),n=r(a("W8MJ")),o=r(a("7W2i")),s=r(a("a1gu")),u=r(a("Nsbk")),d=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};var a=v(e);if(a&&a.has(t))return a.get(t);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=l?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=t[n]}r.default=t,a&&a.set(t,r);return r}(a("q1tI")),p=r(a("Oiok")),c=r(a("IRwy")),f=r(a("I9ug")),h=r(a("nmqh"));function v(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(v=function(t){return t?a:e})(t)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=(0,u.default)(t);if(e){var i=(0,u.default)(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return(0,s.default)(this,a)}}var y=function(t){(0,o.default)(a,t);var e=b(a);function a(){return(0,l.default)(this,a),e.apply(this,arguments)}return(0,n.default)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props.lang;return d.default.createElement(h.default,{title:!!this.props.data.attributes.title&&this.props.data.attributes.title[t],seeall:!!this.props.data.attributes.seeall&&this.props.data.attributes.seeall[t],seeAllUrl:this.props.data.attributes.seeAllUrl,baseUrl:"string"==typeof this.props.data.attributes.baseUrl&&this.props.data.attributes.baseUrl.length>0&&this.props.data.attributes.baseUrl,seeAllPageTitle:this.props.data.attributes.seeAllPageTitle,sectionTitle:this.props.data.attributes.sectionTitle,sectionId:this.props.data.attributes.sectionId,topicId:this.props.data.attributes.topicId,subTopicId:this.props.data.attributes.subTopicId,deeplink:this.props.data.attributes.deeplink,titleId:this.props.data.attributes.titleId},d.default.createElement(f.default,{tabs:this.props.data.children[0].children},this.props.data.children[0].children&&this.props.data.children[0].children.map((function(e){var a,r,i,l,n,o,s,u,f,h;return d.default.createElement(c.default,{className:null==e||null===(a=e.attributes)||void 0===a?void 0:a.className,viewall:!(null==e||null===(r=e.attributes)||void 0===r||!r.viewall)&&(null==e||null===(i=e.attributes)||void 0===i?void 0:i.viewall[t]),width:null==e||null===(l=e.attributes)||void 0===l?void 0:l.width,height:null==e||null===(n=e.attributes)||void 0===n?void 0:n.height,padding:null==e||null===(o=e.attributes)||void 0===o?void 0:o.padding,onload:void 0,viewAllUrl:null==e||null===(s=e.attributes)||void 0===s?void 0:s.viewAllUrl,viewAllTitle:null==e||null===(u=e.attributes)||void 0===u?void 0:u.viewAllTitle,NoSliderNoOfItems:null==e||null===(f=e.attributes)||void 0===f?void 0:f.NoSliderNoOfItems,NoSliderClassName:null==e||null===(h=e.attributes)||void 0===h?void 0:h.NoSliderClassName},e.children&&e.children.map((function(e){return d.default.createElement(p.default,{data:e,lang:t})})))}))))}}]),a}(d.default.Component);e.default=y},GFYy:(t,e,a)=>{var r=a("TqRt"),i=a("cDf5");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r(a("lwsE")),n=r(a("W8MJ")),o=r(a("7W2i")),s=r(a("a1gu")),u=r(a("Nsbk")),d=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};var a=v(e);if(a&&a.has(t))return a.get(t);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=l?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=t[n]}r.default=t,a&&a.set(t,r);return r}(a("q1tI")),p=r(a("JkZM")),c=r(a("IRwy")),f=a("TyAF"),h=r(a("nmqh"));function v(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(v=function(t){return t?a:e})(t)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=(0,u.default)(t);if(e){var i=(0,u.default)(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return(0,s.default)(this,a)}}var y=function(t){(0,o.default)(a,t);var e=b(a);function a(){return(0,l.default)(this,a),e.apply(this,arguments)}return(0,n.default)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this,e=this.props.lang;return d.default.createElement(h.default,{title:!!this.props.data.attributes.title&&this.props.data.attributes.title[e],seeall:!!this.props.data.attributes.seeall&&this.props.data.attributes.seeall[e],seeAllUrl:this.props.data.attributes.seeAllUrl,baseUrl:"string"==typeof this.props.data.attributes.baseUrl&&this.props.data.attributes.baseUrl.length>0&&this.props.data.attributes.baseUrl,seeAllPageTitle:this.props.data.attributes.seeAllPageTitle,sectionTitle:this.props.data.attributes.sectionTitle,sectionId:this.props.data.attributes.sectionId,topicId:this.props.data.attributes.topicId,subTopicId:this.props.data.attributes.subTopicId,deeplink:this.props.data.attributes.deeplink,titleId:this.props.data.attributes.titleId},d.default.createElement(f.Observer,null,(function(){var a,r,i,l,n,o,s,u,f,h,v,b,y,m,g,w,O,I,P,k;return d.default.createElement(c.default,{className:null===(a=t.props.data.children[0])||void 0===a||null===(r=a.attributes)||void 0===r?void 0:r.className,viewall:!(null===(i=t.props.data.children[0])||void 0===i||null===(l=i.attributes)||void 0===l||!l.viewall)&&(null===(n=t.props.data.children[0])||void 0===n||null===(o=n.attributes)||void 0===o?void 0:o.viewall[e]),width:null===(s=t.props.data.children[0])||void 0===s||null===(u=s.attributes)||void 0===u?void 0:u.width,height:null===(f=t.props.data.children[0])||void 0===f||null===(h=f.attributes)||void 0===h?void 0:h.height,padding:null===(v=t.props.data.children[0])||void 0===v||null===(b=v.attributes)||void 0===b?void 0:b.padding,onload:t.props.appStore.onloadcards5_c0.bind(t.props.appStore),viewAllUrl:null===(y=t.props.data.children[0])||void 0===y||null===(m=y.attributes)||void 0===m?void 0:m.viewAllUrl,viewAllTitle:null===(g=t.props.data.children[0])||void 0===g||null===(w=g.attributes)||void 0===w?void 0:w.viewAllTitle,NoSliderNoOfItems:null===(O=t.props.data.children[0])||void 0===O||null===(I=O.attributes)||void 0===I?void 0:I.NoSliderNoOfItems,NoSliderClassName:null===(P=t.props.data.children[0])||void 0===P||null===(k=P.attributes)||void 0===k?void 0:k.NoSliderClassName},t.props.data.children[0].children&&t.props.data.children[0].children.map((function(t){return d.default.createElement(p.default,{data:t})})))})))}}]),a}(d.default.Component);e.default=y},bdgo:(t,e,a)=>{var r=a("TqRt"),i=a("cDf5");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r(a("lwsE")),n=r(a("W8MJ")),o=r(a("7W2i")),s=r(a("a1gu")),u=r(a("Nsbk")),d=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};var a=h(e);if(a&&a.has(t))return a.get(t);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=l?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=t[n]}r.default=t,a&&a.set(t,r);return r}(a("q1tI")),p=r(a("0AYl")),c=r(a("IRwy")),f=r(a("nmqh"));function h(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(h=function(t){return t?a:e})(t)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=(0,u.default)(t);if(e){var i=(0,u.default)(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return(0,s.default)(this,a)}}var b=function(t){(0,o.default)(a,t);var e=v(a);function a(){return(0,l.default)(this,a),e.apply(this,arguments)}return(0,n.default)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t,e,a,r,i,l,n,o,s,u,h,v,b,y,m,g,w,O,I,P,k=this.props.lang;return d.default.createElement(f.default,{title:!!this.props.data.attributes.title&&this.props.data.attributes.title[k],seeall:!!this.props.data.attributes.seeall&&this.props.data.attributes.seeall[k],seeAllUrl:this.props.data.attributes.seeAllUrl,baseUrl:"string"==typeof this.props.data.attributes.baseUrl&&this.props.data.attributes.baseUrl.length>0&&this.props.data.attributes.baseUrl,seeAllPageTitle:this.props.data.attributes.seeAllPageTitle,sectionTitle:this.props.data.attributes.sectionTitle,sectionId:this.props.data.attributes.sectionId,topicId:this.props.data.attributes.topicId,subTopicId:this.props.data.attributes.subTopicId,deeplink:this.props.data.attributes.deeplink,titleId:this.props.data.attributes.titleId},d.default.createElement(c.default,{className:null===(t=this.props.data.children[0])||void 0===t||null===(e=t.attributes)||void 0===e?void 0:e.className,viewall:!(null===(a=this.props.data.children[0])||void 0===a||null===(r=a.attributes)||void 0===r||!r.viewall)&&(null===(i=this.props.data.children[0])||void 0===i||null===(l=i.attributes)||void 0===l?void 0:l.viewall[k]),width:null===(n=this.props.data.children[0])||void 0===n||null===(o=n.attributes)||void 0===o?void 0:o.width,height:null===(s=this.props.data.children[0])||void 0===s||null===(u=s.attributes)||void 0===u?void 0:u.height,padding:null===(h=this.props.data.children[0])||void 0===h||null===(v=h.attributes)||void 0===v?void 0:v.padding,onload:void 0,viewAllUrl:null===(b=this.props.data.children[0])||void 0===b||null===(y=b.attributes)||void 0===y?void 0:y.viewAllUrl,viewAllTitle:null===(m=this.props.data.children[0])||void 0===m||null===(g=m.attributes)||void 0===g?void 0:g.viewAllTitle,NoSliderNoOfItems:null===(w=this.props.data.children[0])||void 0===w||null===(O=w.attributes)||void 0===O?void 0:O.NoSliderNoOfItems,NoSliderClassName:null===(I=this.props.data.children[0])||void 0===I||null===(P=I.attributes)||void 0===P?void 0:P.NoSliderClassName},this.props.data.children[0].children&&this.props.data.children[0].children.map((function(t){return d.default.createElement(p.default,{data:t})}))))}}]),a}(d.default.Component);e.default=b},"9PXl":(t,e,a)=>{var r=a("TqRt"),i=a("cDf5");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r(a("lwsE")),n=r(a("W8MJ")),o=r(a("7W2i")),s=r(a("a1gu")),u=r(a("Nsbk")),d=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!=typeof t)return{default:t};var a=f(e);if(a&&a.has(t))return a.get(t);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=l?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=t[n]}r.default=t,a&&a.set(t,r);return r}(a("q1tI")),p=r(a("Cq5A")),c=r(a("nmqh"));function f(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,a=new WeakMap;return(f=function(t){return t?a:e})(t)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=(0,u.default)(t);if(e){var i=(0,u.default)(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return(0,s.default)(this,a)}}var v=function(t){(0,o.default)(a,t);var e=h(a);function a(){return(0,l.default)(this,a),e.apply(this,arguments)}return(0,n.default)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props.lang;return d.default.createElement(c.default,{title:!!this.props.data.attributes.title&&this.props.data.attributes.title[t],seeall:!!this.props.data.attributes.seeall&&this.props.data.attributes.seeall[t],seeAllUrl:this.props.data.attributes.seeAllUrl,baseUrl:"string"==typeof this.props.data.attributes.baseUrl&&this.props.data.attributes.baseUrl.length>0&&this.props.data.attributes.baseUrl,seeAllPageTitle:this.props.data.attributes.seeAllPageTitle,sectionTitle:this.props.data.attributes.sectionTitle,sectionId:this.props.data.attributes.sectionId,topicId:this.props.data.attributes.topicId,subTopicId:this.props.data.attributes.subTopicId,deeplink:this.props.data.attributes.deeplink,titleId:this.props.data.attributes.titleId},d.default.createElement(p.default,{adId:this.props.data.children[0].attributes.adId,subSlots:this.props.data.children[0].attributes.subSlots,topicKey:this.props.data.children[0].attributes.topicKey}))}}]),a}(d.default.Component);e.default=v},zCzY:(t,e,a)=>{var r=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(a("o0o1")),l=r(a("yXPU")),n=r(a("lwsE")),o=r(a("W8MJ")),s=r(a("lSNA")),u=(r(a("vDqi")),r(a("17x9")),a("aFzQ")),d=a("oCwO"),p=r(a("6uFz")),c=function(){function t(e){(0,n.default)(this,t),(0,s.default)(this,"data",null),(0,s.default)(this,"title",null),(0,s.default)(this,"onloadcards5_c0",(0,l.default)(i.default.mark((function t(){var e,a,r;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[{endpoint:"featured-stories-mobile",useCache:!1,endpointurl:"http://api-news.dailyhunt.in/v2/posts/feed/HASHTAG/eb9d02d10ecd6077e2c3db67746e411d?entityTitle=HASHTAG&edition=india&section=news&isHome=true&feedConfigKey=TOPIC_20_HTML_VIDEO_CHRONO&langCode=".concat(this.data.lang)}],a=new p.default,t.next=4,(0,d.parallelDataStoreFetch)(e);case 4:r=t.sent,this.data.cards[5].children[0].children=a.adaptData(this.data.cards[5].children[0].children,r["featured-stories-mobile"]);case 6:case"end":return t.stop()}}),t,this)})))),(0,u.makeObservable)(this,{data:u.observable,title:u.observable,initialiseState:u.action,onloadcards5_c0:u.action}),this.initialiseState(e)}return(0,o.default)(t,[{key:"initialiseState",value:function(t){this.data=t?t.appStore.data:null,this.title=t?t.appStore.title:null}},{key:"toJson",value:function(){return{data:this.data,title:this.title}}}]),t}();e.default=c}},t=>{t.O(0,["vendors-mobx","vendors-react-dom","vendors-axios","vendors-mobx-react","commoncomponents-general-style-style","vendors-styled-components","vendors-regenerator-runtime","vendors-mobx-react-lite","vendors-emotion","vendors-loadable","vendors-babel","utility-fetchutils","vendors-react","commoncomponents-general-style-common","commoncomponents-card","vendors-scheduler","commoncomponents-general-style-library","vendors-react-is","vendors-hoist-non-react-statics","vendors-prop-types","vendors-object-assign","utility-lazyrenderer","utility-intersectionobserverhook","vendors-shallowequal","commoncomponents-gadget-style-gadgetstyle","commoncomponents-menunavbuttonpanel","commoncomponents-slider","commoncomponents-menunavbutton","commoncomponents-noslidercomp","commoncomponents-featuredstories","vendors-timeago.js","dataadapters-featuredstoriesadapter","commoncomponents-adscomp","commoncomponents-selectiontabwithscrollablemenu","commoncomponents-selectiontab","commoncomponents-roundthumbnail","commoncomponents-mobilemodelitem","commoncomponents-menubutton"],(()=>{return e="tLNF",t(t.s=e);var e}));t.O()}]);
//# sourceMappingURL=clientPage3.c29d1be8.bundle.js.map