(self.webpackChunkrolwinreevan_gatsby_blog=self.webpackChunkrolwinreevan_gatsby_blog||[]).push([[934],{7757:function(t,e,n){t.exports=n(5666)},83:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(7294),o={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},i=n(7203),a=function(t,e){return r.createElement(i.Z,Object.assign({},t,{ref:e,icon:o}))};a.displayName="LoadingOutlined";var c=r.forwardRef(a)},200:function(t,e,n){"use strict";var r=n(7840);e.Z=function(t,e,n){(0,r.ZP)(t,"[antd: ".concat(e,"] ").concat(n))}},4221:function(t,e,n){"use strict";n.d(e,{l$:function(){return o},Tm:function(){return i}});var r=n(7294),o=r.isValidElement;function i(t,e){return function(t,e,n){return o(t)?r.cloneElement(t,"function"==typeof n?n(t.props||{}):n):e}(t,t,e)}},3893:function(t,e,n){"use strict";n.d(e,{Z:function(){return Y}});var r=n(2122),o=n(6156),i=n(8481),a=n(484),c=n(7294),u=n(5900),s=n.n(u),l=n(8613),f=n(2525),v=n(6610),d=function t(e){return(0,v.Z)(this,t),new Error("unreachable case: ".concat(JSON.stringify(e)))},p=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},h=function(t){return c.createElement(f.C,null,(function(e){var n,i=e.getPrefixCls,a=e.direction,u=t.prefixCls,l=t.size,f=t.className,v=p(t,["prefixCls","size","className"]),h=i("btn-group",u),m="";switch(l){case"large":m="lg";break;case"small":m="sm";break;case"middle":case void 0:break;default:console.warn(new d(l))}var y=s()(h,(n={},(0,o.Z)(n,"".concat(h,"-").concat(m),m),(0,o.Z)(n,"".concat(h,"-rtl"),"rtl"===a),n),f);return c.createElement("div",(0,r.Z)({},v,{className:y}))}))},m=n(5991),y=n(3349),g=n(379),E=n(4144),b=n(7759),Z=n(2275),w=n(518),k=0,x={};function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=k++,r=e;function o(){(r-=1)<=0?(t(),delete x[n]):x[n]=(0,w.Z)(o)}return x[n]=(0,w.Z)(o),n}L.cancel=function(t){void 0!==t&&(w.Z.cancel(x[t]),delete x[t])},L.ids=x;var C,N=n(4221);function O(t){return!t||null===t.offsetParent||t.hidden}function S(t){var e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])}var T=function(t){(0,g.Z)(n,t);var e=(0,E.Z)(n);function n(){var t;return(0,v.Z)(this,n),(t=e.apply(this,arguments)).containerRef=c.createRef(),t.animationStart=!1,t.destroyed=!1,t.onClick=function(e,n){var r,o;if(!(!e||O(e)||e.className.indexOf("-leave")>=0)){var i=t.props.insertExtraNode;t.extraNode=document.createElement("div");var a=(0,y.Z)(t).extraNode,c=t.context.getPrefixCls;a.className="".concat(c(""),"-click-animating-node");var u=t.getAttributeName();if(e.setAttribute(u,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&S(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){a.style.borderColor=n;var s=(null===(r=e.getRootNode)||void 0===r?void 0:r.call(e))||e.ownerDocument,l=s instanceof Document?s.body:null!==(o=s.firstChild)&&void 0!==o?o:s;C=(0,b.h)("\n      [".concat(c(""),"-click-animating-without-extra-node='true']::after, .").concat(c(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:t.csp,attachTo:l})}i&&e.appendChild(a),["transition","animation"].forEach((function(n){e.addEventListener("".concat(n,"start"),t.onTransitionStart),e.addEventListener("".concat(n,"end"),t.onTransitionEnd)}))}},t.onTransitionStart=function(e){if(!t.destroyed){var n=t.containerRef.current;e&&e.target===n&&!t.animationStart&&t.resetEffect(n)}},t.onTransitionEnd=function(e){e&&"fadeEffect"===e.animationName&&t.resetEffect(e.target)},t.bindAnimationEvent=function(e){if(e&&e.getAttribute&&!e.getAttribute("disabled")&&!(e.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!O(n.target)){t.resetEffect(e);var r=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");t.clickWaveTimeoutId=window.setTimeout((function(){return t.onClick(e,r)}),0),L.cancel(t.animationStartId),t.animationStart=!0,t.animationStartId=L((function(){t.animationStart=!1}),10)}};return e.addEventListener("click",n,!0),{cancel:function(){e.removeEventListener("click",n,!0)}}}},t.renderWave=function(e){var n=e.csp,r=t.props.children;if(t.csp=n,!c.isValidElement(r))return r;var o=t.containerRef;return(0,Z.Yr)(r)&&(o=(0,Z.sQ)(r.ref,t.containerRef)),(0,N.Tm)(r,{ref:o})},t}return(0,m.Z)(n,[{key:"componentDidMount",value:function(){var t=this.containerRef.current;t&&1===t.nodeType&&(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var t=this.context.getPrefixCls,e=this.props.insertExtraNode;return"".concat(t(""),e?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(t){var e=this;if(t&&t!==this.extraNode&&t instanceof Element){var n=this.props.insertExtraNode,r=this.getAttributeName();t.setAttribute(r,"false"),C&&(C.innerHTML=""),n&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),["transition","animation"].forEach((function(n){t.removeEventListener("".concat(n,"start"),e.onTransitionStart),t.removeEventListener("".concat(n,"end"),e.onTransitionEnd)}))}}},{key:"render",value:function(){return c.createElement(f.C,null,this.renderWave)}}]),n}(c.Component);T.contextType=f.E_;var A=n(4224),P=n(200),j=n(2226),R=n(4552),_=n(83),I=function(){return{width:0,opacity:0,transform:"scale(0)"}},V=function(t){return{width:t.scrollWidth,opacity:1,transform:"scale(1)"}},G=function(t){var e=t.prefixCls,n=!!t.loading;return t.existIcon?c.createElement("span",{className:"".concat(e,"-loading-icon")},c.createElement(_.Z,null)):c.createElement(R.Z,{visible:n,motionName:"".concat(e,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:I,onAppearActive:V,onEnterStart:I,onEnterActive:V,onLeaveStart:V,onLeaveActive:I},(function(t,n){var r=t.className,o=t.style;return c.createElement("span",{className:"".concat(e,"-loading-icon"),style:o,ref:n},c.createElement(_.Z,{className:r}))}))},z=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},F=/^[\u4e00-\u9fa5]{2}$/,W=F.test.bind(F);function D(t){return"text"===t||"link"===t}function M(t,e){var n=!1,r=[];return c.Children.forEach(t,(function(t){var e=(0,a.Z)(t),o="string"===e||"number"===e;if(n&&o){var i=r.length-1,c=r[i];r[i]="".concat(c).concat(t)}else r.push(t);n=o})),c.Children.map(r,(function(t){return function(t,e){if(null!=t){var n=e?" ":"";return"string"!=typeof t&&"number"!=typeof t&&"string"==typeof t.type&&W(t.props.children)?(0,N.Tm)(t,{children:t.props.children.split("").join(n)}):"string"==typeof t?(W(t)&&(t=t.split("").join(n)),c.createElement("span",null,t)):t}}(t,e)}))}(0,A.b)("default","primary","ghost","dashed","link","text"),(0,A.b)("circle","round"),(0,A.b)("submit","button","reset");var B=function(t,e){var n,u,v=t.loading,d=void 0!==v&&v,p=t.prefixCls,h=t.type,m=t.danger,y=t.shape,g=t.size,E=t.className,b=t.children,Z=t.icon,w=t.ghost,k=void 0!==w&&w,x=t.block,L=void 0!==x&&x,C=t.htmlType,N=void 0===C?"button":C,O=z(t,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),S=c.useContext(j.Z),A=c.useState(!!d),R=(0,i.Z)(A,2),_=R[0],I=R[1],V=c.useState(!1),F=(0,i.Z)(V,2),B=F[0],U=F[1],Y=c.useContext(f.E_),H=Y.getPrefixCls,K=Y.autoInsertSpaceInButton,$=Y.direction,q=e||c.createRef(),J=c.useRef(),Q=function(){return 1===c.Children.count(b)&&!Z&&!D(h)};u="object"===(0,a.Z)(d)&&d.delay?d.delay||!0:!!d,c.useEffect((function(){clearTimeout(J.current),"number"==typeof u?J.current=window.setTimeout((function(){I(u)}),u):I(u)}),[u]),c.useEffect((function(){if(q&&q.current&&!1!==K){var t=q.current.textContent;Q()&&W(t)?B||U(!0):B&&U(!1)}}),[q]);var X=function(e){var n,r=t.onClick,o=t.disabled;_||o?e.preventDefault():null===(n=r)||void 0===n||n(e)};(0,P.Z)(!("string"==typeof Z&&Z.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(Z,"` at https://ant.design/components/icon")),(0,P.Z)(!(k&&D(h)),"Button","`link` or `text` button can't be a `ghost` button.");var tt=H("btn",p),et=!1!==K,nt="";switch(g||S){case"large":nt="lg";break;case"small":nt="sm"}var rt=_?"loading":Z,ot=s()(tt,(n={},(0,o.Z)(n,"".concat(tt,"-").concat(h),h),(0,o.Z)(n,"".concat(tt,"-").concat(y),y),(0,o.Z)(n,"".concat(tt,"-").concat(nt),nt),(0,o.Z)(n,"".concat(tt,"-icon-only"),!b&&0!==b&&!!rt),(0,o.Z)(n,"".concat(tt,"-background-ghost"),k&&!D(h)),(0,o.Z)(n,"".concat(tt,"-loading"),_),(0,o.Z)(n,"".concat(tt,"-two-chinese-chars"),B&&et),(0,o.Z)(n,"".concat(tt,"-block"),L),(0,o.Z)(n,"".concat(tt,"-dangerous"),!!m),(0,o.Z)(n,"".concat(tt,"-rtl"),"rtl"===$),n),E),it=Z&&!_?Z:c.createElement(G,{existIcon:!!Z,prefixCls:tt,loading:!!_}),at=b||0===b?M(b,Q()&&et):null,ct=(0,l.Z)(O,["navigate"]);if(void 0!==ct.href)return c.createElement("a",(0,r.Z)({},ct,{className:ot,onClick:X,ref:q}),it,at);var ut=c.createElement("button",(0,r.Z)({},O,{type:N,className:ot,onClick:X,ref:q}),it,at);return D(h)?ut:c.createElement(T,null,ut)},U=c.forwardRef(B);U.displayName="Button",U.Group=h,U.__ANT_BUTTON=!0;var Y=U},4399:function(t,e,n){"use strict";n(5168)},2226:function(t,e,n){"use strict";n.d(e,{q:function(){return i}});var r=n(7294),o=r.createContext(void 0),i=function(t){var e=t.children,n=t.size;return r.createElement(o.Consumer,null,(function(t){return r.createElement(o.Provider,{value:n||t},e)}))};e.Z=o},4552:function(t,e,n){"use strict";n.d(e,{V:function(){return at},Z:function(){return ct}});var r=n(6156),o=n(8991),i=n(8481),a=n(484),c=n(7294),u=n(7714),s=n(2275),l=n(5900),f=n.n(l),v=n(2034);function d(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit".concat(t)]="webkit".concat(e),n["Moz".concat(t)]="moz".concat(e),n["ms".concat(t)]="MS".concat(e),n["O".concat(t)]="o".concat(e.toLowerCase()),n}var p,h,m,y=(p=(0,v.Z)(),h="undefined"!=typeof window?window:{},m={animationend:d("Animation","AnimationEnd"),transitionend:d("Transition","TransitionEnd")},p&&("AnimationEvent"in h||delete m.animationend.animation,"TransitionEvent"in h||delete m.transitionend.transition),m),g={};if((0,v.Z)()){var E=document.createElement("div");g=E.style}var b={};function Z(t){if(b[t])return b[t];var e=y[t];if(e)for(var n=Object.keys(e),r=n.length,o=0;o<r;o+=1){var i=n[o];if(Object.prototype.hasOwnProperty.call(e,i)&&i in g)return b[t]=e[i],b[t]}return""}var w=Z("animationend"),k=Z("transitionend"),x=!(!w||!k),L=w||"animationend",C=k||"transitionend";function N(t,e){return t?"object"===(0,a.Z)(t)?t[e.replace(/-\w/g,(function(t){return t[1].toUpperCase()}))]:"".concat(t,"-").concat(e):null}var O="none",S="appear",T="enter",A="leave",P="none",j="prepare",R="start",_="active",I="end";function V(t){var e=(0,c.useRef)(!1),n=(0,c.useState)(t),r=(0,i.Z)(n,2),o=r[0],a=r[1];return(0,c.useEffect)((function(){return function(){e.current=!0}}),[]),[o,function(t){e.current||a(t)}]}var G=(0,v.Z)()?c.useLayoutEffect:c.useEffect,z=n(518),F=[j,R,_,I];function W(t){return t===_||t===I}var D=function(t,e){var n=c.useState(P),r=(0,i.Z)(n,2),o=r[0],a=r[1],u=function(){var t=c.useRef(null);function e(){z.Z.cancel(t.current)}return c.useEffect((function(){return function(){e()}}),[]),[function n(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;e();var i=(0,z.Z)((function(){o<=1?r({isCanceled:function(){return i!==t.current}}):n(r,o-1)}));t.current=i},e]}(),s=(0,i.Z)(u,2),l=s[0],f=s[1];return G((function(){if(o!==P&&o!==I){var t=F.indexOf(o),n=F[t+1],r=e(o);false===r?a(n):l((function(t){function e(){t.isCanceled()||a(n)}!0===r?e():Promise.resolve(r).then(e)}))}}),[t,o]),c.useEffect((function(){return function(){f()}}),[]),[function(){a(j)},o]};function M(t,e,n,a){var u=a.motionEnter,s=void 0===u||u,l=a.motionAppear,f=void 0===l||l,v=a.motionLeave,d=void 0===v||v,p=a.motionDeadline,h=a.motionLeaveImmediately,m=a.onAppearPrepare,y=a.onEnterPrepare,g=a.onLeavePrepare,E=a.onAppearStart,b=a.onEnterStart,Z=a.onLeaveStart,w=a.onAppearActive,k=a.onEnterActive,x=a.onLeaveActive,N=a.onAppearEnd,P=a.onEnterEnd,I=a.onLeaveEnd,z=a.onVisibleChanged,F=V(),M=(0,i.Z)(F,2),B=M[0],U=M[1],Y=V(O),H=(0,i.Z)(Y,2),K=H[0],$=H[1],q=V(null),J=(0,i.Z)(q,2),Q=J[0],X=J[1],tt=(0,c.useRef)(!1),et=(0,c.useRef)(null),nt=(0,c.useRef)(!1),rt=(0,c.useRef)(null);function ot(){return n()||rt.current}var it=(0,c.useRef)(!1);function at(t){var e,n=ot();t&&!t.deadline&&t.target!==n||(K===S&&it.current?e=null==N?void 0:N(n,t):K===T&&it.current?e=null==P?void 0:P(n,t):K===A&&it.current&&(e=null==I?void 0:I(n,t)),!1===e||nt.current||($(O),X(null)))}var ct=function(t){var e=(0,c.useRef)(),n=(0,c.useRef)(t);n.current=t;var r=c.useCallback((function(t){n.current(t)}),[]);function o(t){t&&(t.removeEventListener(C,r),t.removeEventListener(L,r))}return c.useEffect((function(){return function(){o(e.current)}}),[]),[function(t){e.current&&e.current!==t&&o(e.current),t&&t!==e.current&&(t.addEventListener(C,r),t.addEventListener(L,r),e.current=t)},o]}(at),ut=(0,i.Z)(ct,1)[0],st=c.useMemo((function(){var t,e,n;switch(K){case"appear":return t={},(0,r.Z)(t,j,m),(0,r.Z)(t,R,E),(0,r.Z)(t,_,w),t;case"enter":return e={},(0,r.Z)(e,j,y),(0,r.Z)(e,R,b),(0,r.Z)(e,_,k),e;case"leave":return n={},(0,r.Z)(n,j,g),(0,r.Z)(n,R,Z),(0,r.Z)(n,_,x),n;default:return{}}}),[K]),lt=D(K,(function(t){if(t===j){var e=st.prepare;return!!e&&e(ot())}var n;dt in st&&X((null===(n=st[dt])||void 0===n?void 0:n.call(st,ot(),null))||null);return dt===_&&(ut(ot()),p>0&&(clearTimeout(et.current),et.current=setTimeout((function(){at({deadline:!0})}),p))),true})),ft=(0,i.Z)(lt,2),vt=ft[0],dt=ft[1],pt=W(dt);it.current=pt,G((function(){U(e);var n,r=tt.current;(tt.current=!0,t)&&(!r&&e&&f&&(n=S),r&&e&&s&&(n=T),(r&&!e&&d||!r&&h&&!e&&d)&&(n=A),n&&($(n),vt()))}),[e]),(0,c.useEffect)((function(){(K===S&&!f||K===T&&!s||K===A&&!d)&&$(O)}),[f,s,d]),(0,c.useEffect)((function(){return function(){clearTimeout(et.current),nt.current=!0}}),[]),(0,c.useEffect)((function(){void 0!==B&&K===O&&(null==z||z(B))}),[B,K]);var ht=Q;return st.prepare&&dt===R&&(ht=(0,o.Z)({transition:"none"},ht)),[K,dt,ht,null!=B?B:e]}var B=n(6610),U=n(5991),Y=n(379),H=n(4144),K=function(t){(0,Y.Z)(n,t);var e=(0,H.Z)(n);function n(){return(0,B.Z)(this,n),e.apply(this,arguments)}return(0,U.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(c.Component);var $=function(t){var e=t;function n(t){return!(!t.motionName||!e)}"object"===(0,a.Z)(t)&&(e=t.transitionSupport);var l=c.forwardRef((function(t,e){var a=t.visible,l=void 0===a||a,v=t.removeOnLeave,d=void 0===v||v,p=t.forceRender,h=t.children,m=t.motionName,y=t.leavedClassName,g=t.eventProps,E=n(t),b=(0,c.useRef)(),Z=(0,c.useRef)();var w=M(E,l,(function(){try{return(0,u.Z)(b.current||Z.current)}catch(t){return null}}),t),k=(0,i.Z)(w,4),x=k[0],L=k[1],C=k[2],S=k[3],T=c.useRef(S);S&&(T.current=!0);var A=(0,c.useRef)(e);A.current=e;var P,_=c.useCallback((function(t){b.current=t,(0,s.mH)(A.current,t)}),[]),I=(0,o.Z)((0,o.Z)({},g),{},{visible:l});if(h)if(x!==O&&n(t)){var V,G;L===j?G="prepare":W(L)?G="active":L===R&&(G="start"),P=h((0,o.Z)((0,o.Z)({},I),{},{className:f()(N(m,x),(V={},(0,r.Z)(V,N(m,"".concat(x,"-").concat(G)),G),(0,r.Z)(V,m,"string"==typeof m),V)),style:C}),_)}else P=S?h((0,o.Z)({},I),_):!d&&T.current?h((0,o.Z)((0,o.Z)({},I),{},{className:y}),_):p?h((0,o.Z)((0,o.Z)({},I),{},{style:{display:"none"}}),_):null;else P=null;return c.createElement(K,{ref:Z},P)}));return l.displayName="CSSMotion",l}(x),q=n(2122),J=n(7375),Q="add",X="keep",tt="remove",et="removed";function nt(t){var e;return e=t&&"object"===(0,a.Z)(t)&&"key"in t?t:{key:t},(0,o.Z)((0,o.Z)({},e),{},{key:String(e.key)})}function rt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map(nt)}function ot(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[],r=0,i=e.length,a=rt(t),c=rt(e);a.forEach((function(t){for(var e=!1,a=r;a<i;a+=1){var u=c[a];if(u.key===t.key){r<a&&(n=n.concat(c.slice(r,a).map((function(t){return(0,o.Z)((0,o.Z)({},t),{},{status:Q})}))),r=a),n.push((0,o.Z)((0,o.Z)({},u),{},{status:X})),r+=1,e=!0;break}}e||n.push((0,o.Z)((0,o.Z)({},t),{},{status:tt}))})),r<i&&(n=n.concat(c.slice(r).map((function(t){return(0,o.Z)((0,o.Z)({},t),{},{status:Q})}))));var u={};n.forEach((function(t){var e=t.key;u[e]=(u[e]||0)+1}));var s=Object.keys(u).filter((function(t){return u[t]>1}));return s.forEach((function(t){(n=n.filter((function(e){var n=e.key,r=e.status;return n!==t||r!==tt}))).forEach((function(e){e.key===t&&(e.status=X)}))})),n}var it=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];var at=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$,n=function(t){(0,Y.Z)(r,t);var n=(0,H.Z)(r);function r(){var t;return(0,B.Z)(this,r),(t=n.apply(this,arguments)).state={keyEntities:[]},t.removeKey=function(e){t.setState((function(t){return{keyEntities:t.keyEntities.map((function(t){return t.key!==e?t:(0,o.Z)((0,o.Z)({},t),{},{status:et})}))}}))},t}return(0,U.Z)(r,[{key:"render",value:function(){var t=this,n=this.state.keyEntities,r=this.props,o=r.component,i=r.children,a=r.onVisibleChanged,u=(0,J.Z)(r,["component","children","onVisibleChanged"]),s=o||c.Fragment,l={};return it.forEach((function(t){l[t]=u[t],delete u[t]})),delete u.keys,c.createElement(s,u,n.map((function(n){var r=n.status,o=(0,J.Z)(n,["status"]),u=r===Q||r===X;return c.createElement(e,(0,q.Z)({},l,{key:o.key,visible:u,eventProps:o,onVisibleChanged:function(e){null==a||a(e,{key:o.key}),e||t.removeKey(o.key)}}),i)})))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.keys,r=e.keyEntities,o=rt(n);return{keyEntities:ot(r,o).filter((function(t){var e=r.find((function(e){var n=e.key;return t.key===n}));return!e||e.status!==et||t.status!==tt}))}}}]),r}(c.Component);return n.defaultProps={component:"div"},n}(x),ct=$},5666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(A){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?p:v,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(A){return{type:"throw",arg:A}}}t.wrap=s;var f="suspendedStart",v="suspendedYield",d="executing",p="completed",h={};function m(){}function y(){}function g(){}var E={};E[i]=function(){return this};var b=Object.getPrototypeOf,Z=b&&b(b(S([])));Z&&Z!==n&&r.call(Z,i)&&(E=Z);var w=g.prototype=m.prototype=Object.create(E);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return y.prototype=w.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(x.prototype),x.prototype[a]=function(){return this},t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(w),u(w,c,"Generator"),w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=e}catch(n){Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=67109fcd21777fa8bb351a44f08d4280d9dd1dfc-8fde7c5096a83a83277d.js.map