"use strict";(self.webpackChunk_1at06cs097=self.webpackChunk_1at06cs097||[]).push([["commoncomponents-gadgetlisting"],{fReO:(e,t,r)=>{var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("o0o1")),l=n(r("cDf5")),a=n(r("yXPU")),s=n(r("lwsE")),u=n(r("W8MJ")),i=n(r("PJYZ")),d=n(r("7W2i")),c=n(r("a1gu")),f=n(r("Nsbk")),p=n(r("lSNA")),m=n(r("q1tI")),h=r("9Gbs"),g=n(r("PNw/")),y=r("jZew"),O=n(r("4uVr")),b=n(r("YFO+"));function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,p.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,f.default)(e);if(t){var o=(0,f.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.default)(this,r)}}var R=function(e){(0,d.default)(r,e);var t=S(r);function r(e){var n;return(0,s.default)(this,r),n=t.call(this,e),(0,p.default)((0,i.default)(n),"clearSelectedModels",(function(){n.setState({modelLeft:null,modelRight:null})})),(0,p.default)((0,i.default)(n),"itemSelectHandler",(function(e,t,r,o){try{e&&n.state.modelLeft&&n.state.modelLeft.id==e?n.setState(P(P({},n.state),{},{modelLeft:null})):e&&n.state.modelRight&&n.state.modelRight.id==e?n.setState(P(P({},n.state),{},{modelRight:null})):e&&t&&o&&r&&!n.state.modelLeft?n.setState(P(P({},n.state),{},{modelLeft:{id:e,name:t,image:r,product:o}})):e&&t&&o&&r&&!n.state.modelRight&&n.setState(P(P({},n.state),{},{modelRight:{id:e,name:t,image:r,product:o}}))}catch(e){console.log(e)}})),(0,p.default)((0,i.default)(n),"nextPageInProgress",!1),n.state={modelLeft:null,modelRight:null},n}return(0,u.default)(r,[{key:"componentDidMount",value:function(){var e=this;if(void 0!==this.props.onScrollEnd&&Array.isArray(this.props.items)&&this.props.items.length<5){var t=function(){var t=(0,a.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.nextPageInProgress&&!e.props.hidden){t.next=2;break}return t.abrupt("return");case 2:return e.nextPageInProgress=!0,e.props.updateLoading(!0),t.next=6,e.props.onScrollEnd();case 6:e.props.updateLoading(!1),e.nextPageInProgress=!1;case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();"object"===("undefined"==typeof loadFuncOnScrollEnd?"undefined":(0,l.default)(loadFuncOnScrollEnd))&&loadFuncOnScrollEnd.push(t)}}},{key:"render",value:function(){var e=this;return this.props.hidden?"":m.default.createElement(m.default.Fragment,null,m.default.createElement(h.Section,{padding:"0 16px"},Array.isArray(this.props.items)&&this.props.items.map((function(t,r){return m.default.createElement(g.default,{data:t,key:r,onClick:e.itemSelectHandler,modelLeft:e.state.modelLeft,modelRight:e.state.modelRight})}))),this.props.loading&&m.default.createElement(y.Loader,null),!Array.isArray(this.props.items)&&!this.props.loading&&m.default.createElement(b.default,{heading:"Oops!",subHeading:"Sorry, No Product found. Please choose different filters"}),this.state.modelLeft||this.state.modelRight?m.default.createElement(O.default,{modelLeft:this.state.modelLeft,modelRight:this.state.modelRight,onClick:this.itemSelectHandler,clearSelectedModels:this.clearSelectedModels}):"")}}]),r}(m.default.Component);t.default=R}}]);
//# sourceMappingURL=commoncomponents-gadgetlisting.bf832246.bundle.js.map