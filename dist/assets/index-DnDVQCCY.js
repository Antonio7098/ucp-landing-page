(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function l(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(s){if(s.ep)return;s.ep=!0;const d=l(s);fetch(s.href,d)}})();function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function getAugmentedNamespace(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var a=t.default;if(typeof a=="function"){var l=function c(){return this instanceof c?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};l.prototype=a.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(t).forEach(function(c){var s=Object.getOwnPropertyDescriptor(t,c);Object.defineProperty(l,c,s.get?s:{enumerable:!0,get:function(){return t[c]}})}),l}var jsxRuntime$2={exports:{}},reactJsxRuntime_production$2={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactJsxRuntime_production$2;function requireReactJsxRuntime_production$2(){if(hasRequiredReactJsxRuntime_production$2)return reactJsxRuntime_production$2;hasRequiredReactJsxRuntime_production$2=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(c,s,d){var m=null;if(d!==void 0&&(m=""+d),s.key!==void 0&&(m=""+s.key),"key"in s){d={};for(var f in s)f!=="key"&&(d[f]=s[f])}else d=s;return s=d.ref,{$$typeof:t,type:c,key:m,ref:s!==void 0?s:null,props:d}}return reactJsxRuntime_production$2.Fragment=a,reactJsxRuntime_production$2.jsx=l,reactJsxRuntime_production$2.jsxs=l,reactJsxRuntime_production$2}var hasRequiredJsxRuntime$2;function requireJsxRuntime$2(){return hasRequiredJsxRuntime$2||(hasRequiredJsxRuntime$2=1,jsxRuntime$2.exports=requireReactJsxRuntime_production$2()),jsxRuntime$2.exports}var jsxRuntimeExports$2=requireJsxRuntime$2(),react$2={exports:{}},react_production$2={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReact_production$2;function requireReact_production$2(){if(hasRequiredReact_production$2)return react_production$2;hasRequiredReact_production$2=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),R=Symbol.iterator;function w(k){return k===null||typeof k!="object"?null:(k=R&&k[R]||k["@@iterator"],typeof k=="function"?k:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,$={};function z(k,N,T){this.props=k,this.context=N,this.refs=$,this.updater=T||B}z.prototype.isReactComponent={},z.prototype.setState=function(k,N){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,N,"setState")},z.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Z(){}Z.prototype=z.prototype;function q(k,N,T){this.props=k,this.context=N,this.refs=$,this.updater=T||B}var ge=q.prototype=new Z;ge.constructor=q,U(ge,z.prototype),ge.isPureReactComponent=!0;var ue=Array.isArray;function K(){}var ne={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function _e(k,N,T){var V=T.ref;return{$$typeof:t,type:k,key:N,ref:V!==void 0?V:null,props:T}}function Ae(k,N){return _e(k.type,N,k.props)}function ye(k){return typeof k=="object"&&k!==null&&k.$$typeof===t}function be(k){var N={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(T){return N[T]})}var Ne=/\/+/g;function xe(k,N){return typeof k=="object"&&k!==null&&k.key!=null?be(""+k.key):N.toString(36)}function fe(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(K,K):(k.status="pending",k.then(function(N){k.status==="pending"&&(k.status="fulfilled",k.value=N)},function(N){k.status==="pending"&&(k.status="rejected",k.reason=N)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function F(k,N,T,V,ee){var le=typeof k;(le==="undefined"||le==="boolean")&&(k=null);var he=!1;if(k===null)he=!0;else switch(le){case"bigint":case"string":case"number":he=!0;break;case"object":switch(k.$$typeof){case t:case a:he=!0;break;case E:return he=k._init,F(he(k._payload),N,T,V,ee)}}if(he)return ee=ee(k),he=V===""?"."+xe(k,0):V,ue(ee)?(T="",he!=null&&(T=he.replace(Ne,"$&/")+"/"),F(ee,N,T,"",function(Ke){return Ke})):ee!=null&&(ye(ee)&&(ee=Ae(ee,T+(ee.key==null||k&&k.key===ee.key?"":(""+ee.key).replace(Ne,"$&/")+"/")+he)),N.push(ee)),1;he=0;var Ce=V===""?".":V+":";if(ue(k))for(var Ee=0;Ee<k.length;Ee++)V=k[Ee],le=Ce+xe(V,Ee),he+=F(V,N,T,le,ee);else if(Ee=w(k),typeof Ee=="function")for(k=Ee.call(k),Ee=0;!(V=k.next()).done;)V=V.value,le=Ce+xe(V,Ee++),he+=F(V,N,T,le,ee);else if(le==="object"){if(typeof k.then=="function")return F(fe(k),N,T,V,ee);throw N=String(k),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return he}function pe(k,N,T){if(k==null)return k;var V=[],ee=0;return F(k,V,"","",function(le){return N.call(T,le,ee++)}),V}function ce(k){if(k._status===-1){var N=k._result;N=N(),N.then(function(T){(k._status===0||k._status===-1)&&(k._status=1,k._result=T)},function(T){(k._status===0||k._status===-1)&&(k._status=2,k._result=T)}),k._status===-1&&(k._status=0,k._result=N)}if(k._status===1)return k._result.default;throw k._result}var Re=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},L={map:pe,forEach:function(k,N,T){pe(k,function(){N.apply(this,arguments)},T)},count:function(k){var N=0;return pe(k,function(){N++}),N},toArray:function(k){return pe(k,function(N){return N})||[]},only:function(k){if(!ye(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return react_production$2.Activity=v,react_production$2.Children=L,react_production$2.Component=z,react_production$2.Fragment=l,react_production$2.Profiler=s,react_production$2.PureComponent=q,react_production$2.StrictMode=c,react_production$2.Suspense=x,react_production$2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne,react_production$2.__COMPILER_RUNTIME={__proto__:null,c:function(k){return ne.H.useMemoCache(k)}},react_production$2.cache=function(k){return function(){return k.apply(null,arguments)}},react_production$2.cacheSignal=function(){return null},react_production$2.cloneElement=function(k,N,T){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var V=U({},k.props),ee=k.key;if(N!=null)for(le in N.key!==void 0&&(ee=""+N.key),N)!ke.call(N,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&N.ref===void 0||(V[le]=N[le]);var le=arguments.length-2;if(le===1)V.children=T;else if(1<le){for(var he=Array(le),Ce=0;Ce<le;Ce++)he[Ce]=arguments[Ce+2];V.children=he}return _e(k.type,ee,V)},react_production$2.createContext=function(k){return k={$$typeof:m,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:d,_context:k},k},react_production$2.createElement=function(k,N,T){var V,ee={},le=null;if(N!=null)for(V in N.key!==void 0&&(le=""+N.key),N)ke.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ee[V]=N[V]);var he=arguments.length-2;if(he===1)ee.children=T;else if(1<he){for(var Ce=Array(he),Ee=0;Ee<he;Ee++)Ce[Ee]=arguments[Ee+2];ee.children=Ce}if(k&&k.defaultProps)for(V in he=k.defaultProps,he)ee[V]===void 0&&(ee[V]=he[V]);return _e(k,le,ee)},react_production$2.createRef=function(){return{current:null}},react_production$2.forwardRef=function(k){return{$$typeof:f,render:k}},react_production$2.isValidElement=ye,react_production$2.lazy=function(k){return{$$typeof:E,_payload:{_status:-1,_result:k},_init:ce}},react_production$2.memo=function(k,N){return{$$typeof:h,type:k,compare:N===void 0?null:N}},react_production$2.startTransition=function(k){var N=ne.T,T={};ne.T=T;try{var V=k(),ee=ne.S;ee!==null&&ee(T,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(K,Re)}catch(le){Re(le)}finally{N!==null&&T.types!==null&&(N.types=T.types),ne.T=N}},react_production$2.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()},react_production$2.use=function(k){return ne.H.use(k)},react_production$2.useActionState=function(k,N,T){return ne.H.useActionState(k,N,T)},react_production$2.useCallback=function(k,N){return ne.H.useCallback(k,N)},react_production$2.useContext=function(k){return ne.H.useContext(k)},react_production$2.useDebugValue=function(){},react_production$2.useDeferredValue=function(k,N){return ne.H.useDeferredValue(k,N)},react_production$2.useEffect=function(k,N){return ne.H.useEffect(k,N)},react_production$2.useEffectEvent=function(k){return ne.H.useEffectEvent(k)},react_production$2.useId=function(){return ne.H.useId()},react_production$2.useImperativeHandle=function(k,N,T){return ne.H.useImperativeHandle(k,N,T)},react_production$2.useInsertionEffect=function(k,N){return ne.H.useInsertionEffect(k,N)},react_production$2.useLayoutEffect=function(k,N){return ne.H.useLayoutEffect(k,N)},react_production$2.useMemo=function(k,N){return ne.H.useMemo(k,N)},react_production$2.useOptimistic=function(k,N){return ne.H.useOptimistic(k,N)},react_production$2.useReducer=function(k,N,T){return ne.H.useReducer(k,N,T)},react_production$2.useRef=function(k){return ne.H.useRef(k)},react_production$2.useState=function(k){return ne.H.useState(k)},react_production$2.useSyncExternalStore=function(k,N,T){return ne.H.useSyncExternalStore(k,N,T)},react_production$2.useTransition=function(){return ne.H.useTransition()},react_production$2.version="19.2.3",react_production$2}var hasRequiredReact$2;function requireReact$2(){return hasRequiredReact$2||(hasRequiredReact$2=1,react$2.exports=requireReact_production$2()),react$2.exports}var reactExports$1=requireReact$2(),client={exports:{}},reactDomClient_production={},scheduler={exports:{}},scheduler_production={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredScheduler_production;function requireScheduler_production(){return hasRequiredScheduler_production||(hasRequiredScheduler_production=1,(function(t){function a(F,pe){var ce=F.length;F.push(pe);e:for(;0<ce;){var Re=ce-1>>>1,L=F[Re];if(0<s(L,pe))F[Re]=pe,F[ce]=L,ce=Re;else break e}}function l(F){return F.length===0?null:F[0]}function c(F){if(F.length===0)return null;var pe=F[0],ce=F.pop();if(ce!==pe){F[0]=ce;e:for(var Re=0,L=F.length,k=L>>>1;Re<k;){var N=2*(Re+1)-1,T=F[N],V=N+1,ee=F[V];if(0>s(T,ce))V<L&&0>s(ee,T)?(F[Re]=ee,F[V]=ce,Re=V):(F[Re]=T,F[N]=ce,Re=N);else if(V<L&&0>s(ee,ce))F[Re]=ee,F[V]=ce,Re=V;else break e}}return pe}function s(F,pe){var ce=F.sortIndex-pe.sortIndex;return ce!==0?ce:F.id-pe.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;t.unstable_now=function(){return d.now()}}else{var m=Date,f=m.now();t.unstable_now=function(){return m.now()-f}}var x=[],h=[],E=1,v=null,R=3,w=!1,B=!1,U=!1,$=!1,z=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function ge(F){for(var pe=l(h);pe!==null;){if(pe.callback===null)c(h);else if(pe.startTime<=F)c(h),pe.sortIndex=pe.expirationTime,a(x,pe);else break;pe=l(h)}}function ue(F){if(U=!1,ge(F),!B)if(l(x)!==null)B=!0,K||(K=!0,be());else{var pe=l(h);pe!==null&&fe(ue,pe.startTime-F)}}var K=!1,ne=-1,ke=5,_e=-1;function Ae(){return $?!0:!(t.unstable_now()-_e<ke)}function ye(){if($=!1,K){var F=t.unstable_now();_e=F;var pe=!0;try{e:{B=!1,U&&(U=!1,Z(ne),ne=-1),w=!0;var ce=R;try{n:{for(ge(F),v=l(x);v!==null&&!(v.expirationTime>F&&Ae());){var Re=v.callback;if(typeof Re=="function"){v.callback=null,R=v.priorityLevel;var L=Re(v.expirationTime<=F);if(F=t.unstable_now(),typeof L=="function"){v.callback=L,ge(F),pe=!0;break n}v===l(x)&&c(x),ge(F)}else c(x);v=l(x)}if(v!==null)pe=!0;else{var k=l(h);k!==null&&fe(ue,k.startTime-F),pe=!1}}break e}finally{v=null,R=ce,w=!1}pe=void 0}}finally{pe?be():K=!1}}}var be;if(typeof q=="function")be=function(){q(ye)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,xe=Ne.port2;Ne.port1.onmessage=ye,be=function(){xe.postMessage(null)}}else be=function(){z(ye,0)};function fe(F,pe){ne=z(function(){F(t.unstable_now())},pe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return R},t.unstable_next=function(F){switch(R){case 1:case 2:case 3:var pe=3;break;default:pe=R}var ce=R;R=pe;try{return F()}finally{R=ce}},t.unstable_requestPaint=function(){$=!0},t.unstable_runWithPriority=function(F,pe){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ce=R;R=F;try{return pe()}finally{R=ce}},t.unstable_scheduleCallback=function(F,pe,ce){var Re=t.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Re+ce:Re):ce=Re,F){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=ce+L,F={id:E++,callback:pe,priorityLevel:F,startTime:ce,expirationTime:L,sortIndex:-1},ce>Re?(F.sortIndex=ce,a(h,F),l(x)===null&&F===l(h)&&(U?(Z(ne),ne=-1):U=!0,fe(ue,ce-Re))):(F.sortIndex=L,a(x,F),B||w||(B=!0,K||(K=!0,be()))),F},t.unstable_shouldYield=Ae,t.unstable_wrapCallback=function(F){var pe=R;return function(){var ce=R;R=pe;try{return F.apply(this,arguments)}finally{R=ce}}}})(scheduler_production)),scheduler_production}var hasRequiredScheduler;function requireScheduler(){return hasRequiredScheduler||(hasRequiredScheduler=1,scheduler.exports=requireScheduler_production()),scheduler.exports}var reactDom={exports:{}},reactDom_production={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactDom_production;function requireReactDom_production(){if(hasRequiredReactDom_production)return reactDom_production;hasRequiredReactDom_production=1;var t=requireReact$2();function a(x){var h="https://react.dev/errors/"+x;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)h+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+x+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var c={d:{f:l,r:function(){throw Error(a(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(x,h,E){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:x,containerInfo:h,implementation:E}}var m=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(x,h){if(x==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,reactDom_production.createPortal=function(x,h){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(a(299));return d(x,h,null,E)},reactDom_production.flushSync=function(x){var h=m.T,E=c.p;try{if(m.T=null,c.p=2,x)return x()}finally{m.T=h,c.p=E,c.d.f()}},reactDom_production.preconnect=function(x,h){typeof x=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(x,h))},reactDom_production.prefetchDNS=function(x){typeof x=="string"&&c.d.D(x)},reactDom_production.preinit=function(x,h){if(typeof x=="string"&&h&&typeof h.as=="string"){var E=h.as,v=f(E,h.crossOrigin),R=typeof h.integrity=="string"?h.integrity:void 0,w=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;E==="style"?c.d.S(x,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:R,fetchPriority:w}):E==="script"&&c.d.X(x,{crossOrigin:v,integrity:R,fetchPriority:w,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},reactDom_production.preinitModule=function(x,h){if(typeof x=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var E=f(h.as,h.crossOrigin);c.d.M(x,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(x)},reactDom_production.preload=function(x,h){if(typeof x=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var E=h.as,v=f(E,h.crossOrigin);c.d.L(x,E,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},reactDom_production.preloadModule=function(x,h){if(typeof x=="string")if(h){var E=f(h.as,h.crossOrigin);c.d.m(x,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(x)},reactDom_production.requestFormReset=function(x){c.d.r(x)},reactDom_production.unstable_batchedUpdates=function(x,h){return x(h)},reactDom_production.useFormState=function(x,h,E){return m.H.useFormState(x,h,E)},reactDom_production.useFormStatus=function(){return m.H.useHostTransitionStatus()},reactDom_production.version="19.2.3",reactDom_production}var hasRequiredReactDom;function requireReactDom(){if(hasRequiredReactDom)return reactDom.exports;hasRequiredReactDom=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),reactDom.exports=requireReactDom_production(),reactDom.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactDomClient_production;function requireReactDomClient_production(){if(hasRequiredReactDomClient_production)return reactDomClient_production;hasRequiredReactDomClient_production=1;var t=requireScheduler(),a=requireReact$2(),l=requireReactDom();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function f(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function x(e){if(d(e)!==e)throw Error(c(188))}function h(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(c(188));return n!==e?null:e}for(var i=e,o=n;;){var u=i.return;if(u===null)break;var p=u.alternate;if(p===null){if(o=u.return,o!==null){i=o;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===i)return x(u),e;if(p===o)return x(u),n;p=p.sibling}throw Error(c(188))}if(i.return!==o.return)i=u,o=p;else{for(var C=!1,D=u.child;D;){if(D===i){C=!0,i=u,o=p;break}if(D===o){C=!0,o=u,i=p;break}D=D.sibling}if(!C){for(D=p.child;D;){if(D===i){C=!0,i=p,o=u;break}if(D===o){C=!0,o=p,i=u;break}D=D.sibling}if(!C)throw Error(c(189))}}if(i.alternate!==o)throw Error(c(190))}if(i.tag!==3)throw Error(c(188));return i.stateNode.current===i?e:n}function E(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=E(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,R=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),q=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),Ae=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function be(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ne?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case z:return"Profiler";case $:return"StrictMode";case ue:return"Suspense";case K:return"SuspenseList";case _e:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case q:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case ge:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return n=e.displayName||null,n!==null?n:xe(e.type)||"Memo";case ke:n=e._payload,e=e._init;try{return xe(e(n))}catch{}}return null}var fe=Array.isArray,F=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Re=[],L=-1;function k(e){return{current:e}}function N(e){0>L||(e.current=Re[L],Re[L]=null,L--)}function T(e,n){L++,Re[L]=e.current,e.current=n}var V=k(null),ee=k(null),le=k(null),he=k(null);function Ce(e,n){switch(T(le,n),T(ee,e),T(V,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Id(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Id(n),e=Ud(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(V),T(V,e)}function Ee(){N(V),N(ee),N(le)}function Ke(e){e.memoizedState!==null&&T(he,e);var n=V.current,i=Ud(n,e.type);n!==i&&(T(ee,e),T(V,i))}function kn(e){ee.current===e&&(N(V),N(ee)),he.current===e&&(N(he),qi._currentValue=ce)}var Cn,vn;function pn(e){if(Cn===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Cn=n&&n[1]||"",vn=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cn+e+vn}var Ln=!1;function In(e,n){if(!e||Ln)return"";Ln=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var de=function(){throw Error()};if(Object.defineProperty(de.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(de,[])}catch(te){var J=te}Reflect.construct(e,[],de)}else{try{de.call()}catch(te){J=te}e.call(de.prototype)}}else{try{throw Error()}catch(te){J=te}(de=e())&&typeof de.catch=="function"&&de.catch(function(){})}}catch(te){if(te&&J&&typeof te.stack=="string")return[te.stack,J.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=o.DetermineComponentFrameRoot(),C=p[0],D=p[1];if(C&&D){var I=C.split(`
`),W=D.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===W.length)for(o=I.length-1,u=W.length-1;1<=o&&0<=u&&I[o]!==W[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==W[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==W[u]){var ae=`
`+I[o].replace(" at new "," at ");return e.displayName&&ae.includes("<anonymous>")&&(ae=ae.replace("<anonymous>",e.displayName)),ae}while(1<=o&&0<=u);break}}}finally{Ln=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?pn(i):""}function Vn(e,n){switch(e.tag){case 26:case 27:case 5:return pn(e.type);case 16:return pn("Lazy");case 13:return e.child!==n&&n!==null?pn("Suspense Fallback"):pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return In(e.type,!1);case 11:return In(e.type.render,!1);case 1:return In(e.type,!0);case 31:return pn("Activity");default:return""}}function Sn(e){try{var n="",i=null;do n+=Vn(e,i),i=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Gn=Object.prototype.hasOwnProperty,Tn=t.unstable_scheduleCallback,wn=t.unstable_cancelCallback,mn=t.unstable_shouldYield,rt=t.unstable_requestPaint,en=t.unstable_now,y=t.unstable_getCurrentPriorityLevel,M=t.unstable_ImmediatePriority,S=t.unstable_UserBlockingPriority,g=t.unstable_NormalPriority,b=t.unstable_LowPriority,_=t.unstable_IdlePriority,A=t.log,O=t.unstable_setDisableYieldValue,j=null,Y=null;function ie(e){if(typeof A=="function"&&O(e),Y&&typeof Y.setStrictMode=="function")try{Y.setStrictMode(j,e)}catch{}}var G=Math.clz32?Math.clz32:Te,me=Math.log,oe=Math.LN2;function Te(e){return e>>>=0,e===0?32:31-(me(e)/oe|0)|0}var je=256,Oe=262144,rn=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gi(e,n,i){var o=e.pendingLanes;if(o===0)return 0;var u=0,p=e.suspendedLanes,C=e.pingedLanes;e=e.warmLanes;var D=o&134217727;return D!==0?(o=D&~p,o!==0?u=Zt(o):(C&=D,C!==0?u=Zt(C):i||(i=D&~e,i!==0&&(u=Zt(i))))):(D=o&~p,D!==0?u=Zt(D):C!==0?u=Zt(C):i||(i=o&~e,i!==0&&(u=Zt(i)))),u===0?0:n!==0&&n!==u&&(n&p)===0&&(p=u&-u,i=n&-n,p>=i||p===32&&(i&4194048)!==0)?n:u}function ni(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fp(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bc(){var e=rn;return rn<<=1,(rn&62914560)===0&&(rn=4194304),e}function aa(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function ti(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hp(e,n,i,o,u,p){var C=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var D=e.entanglements,I=e.expirationTimes,W=e.hiddenUpdates;for(i=C&~i;0<i;){var ae=31-G(i),de=1<<ae;D[ae]=0,I[ae]=-1;var J=W[ae];if(J!==null)for(W[ae]=null,ae=0;ae<J.length;ae++){var te=J[ae];te!==null&&(te.lane&=-536870913)}i&=~de}o!==0&&yc(e,o,0),p!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=p&~(C&~n))}function yc(e,n,i){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-G(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|i&261930}function _c(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var o=31-G(i),u=1<<o;u&n|e[o]&n&&(e[o]|=n),i&=~u}}function Ec(e,n){var i=n&-n;return i=(i&42)!==0?1:la(i),(i&(e.suspendedLanes|n))!==0?0:i}function la(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ca(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kc(){var e=pe.p;return e!==0?e:(e=window.event,e===void 0?32:lp(e.type))}function vc(e,n){var i=pe.p;try{return pe.p=e,n()}finally{pe.p=i}}var At=Math.random().toString(36).slice(2),xn="__reactFiber$"+At,An="__reactProps$"+At,xr="__reactContainer$"+At,sa="__reactEvents$"+At,gp="__reactListeners$"+At,xp="__reactHandles$"+At,Sc="__reactResources$"+At,ri="__reactMarker$"+At;function ua(e){delete e[xn],delete e[An],delete e[sa],delete e[gp],delete e[xp]}function br(e){var n=e[xn];if(n)return n;for(var i=e.parentNode;i;){if(n=i[xr]||i[xn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Vd(e);e!==null;){if(i=e[xn])return i;e=Vd(e)}return n}e=i,i=e.parentNode}return null}function yr(e){if(e=e[xn]||e[xr]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ii(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function _r(e){var n=e[Sc];return n||(n=e[Sc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(e){e[ri]=!0}var Cc=new Set,wc={};function er(e,n){Er(e,n),Er(e+"Capture",n)}function Er(e,n){for(wc[e]=n,e=0;e<n.length;e++)Cc.add(n[e])}var bp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rc={},Tc={};function yp(e){return Gn.call(Tc,e)?!0:Gn.call(Rc,e)?!1:bp.test(e)?Tc[e]=!0:(Rc[e]=!0,!1)}function Yi(e,n,i){if(yp(n))if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+i)}}function Qi(e,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+i)}}function dt(e,n,i,o){if(o===null)e.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(n,i,""+o)}}function Yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ac(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _p(e,n,i){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(C){i=""+C,p.call(this,C)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return i},setValue:function(C){i=""+C},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function da(e){if(!e._valueTracker){var n=Ac(e)?"checked":"value";e._valueTracker=_p(e,n,""+e[n])}}function Dc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),o="";return e&&(o=Ac(e)?e.checked?"true":"false":e.value),e=o,e!==i?(n.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ep=/[\n"\\]/g;function Qn(e){return e.replace(Ep,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function pa(e,n,i,o,u,p,C,D){e.name="",C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.type=C:e.removeAttribute("type"),n!=null?C==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Yn(n)):e.value!==""+Yn(n)&&(e.value=""+Yn(n)):C!=="submit"&&C!=="reset"||e.removeAttribute("value"),n!=null?ma(e,C,Yn(n)):i!=null?ma(e,C,Yn(i)):o!=null&&e.removeAttribute("value"),u==null&&p!=null&&(e.defaultChecked=!!p),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+Yn(D):e.removeAttribute("name")}function Nc(e,n,i,o,u,p,C,D){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),n!=null||i!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){da(e);return}i=i!=null?""+Yn(i):"",n=n!=null?""+Yn(n):i,D||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=D?e.checked:!!o,e.defaultChecked=!!o,C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"&&(e.name=C),da(e)}function ma(e,n,i){n==="number"&&Wi(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function kr(e,n,i,o){if(e=e.options,n){n={};for(var u=0;u<i.length;u++)n["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=n.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&o&&(e[i].defaultSelected=!0)}else{for(i=""+Yn(i),n=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Oc(e,n,i){if(n!=null&&(n=""+Yn(n),n!==e.value&&(e.value=n),i==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=i!=null?""+Yn(i):""}function Bc(e,n,i,o){if(n==null){if(o!=null){if(i!=null)throw Error(c(92));if(fe(o)){if(1<o.length)throw Error(c(93));o=o[0]}i=o}i==null&&(i=""),n=i}i=Yn(n),e.defaultValue=i,o=e.textContent,o===i&&o!==""&&o!==null&&(e.value=o),da(e)}function vr(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var kp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mc(e,n,i){var o=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,i):typeof i!="number"||i===0||kp.has(n)?n==="float"?e.cssFloat=i:e[n]=(""+i).trim():e[n]=i+"px"}function jc(e,n,i){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,i!=null){for(var o in i)!i.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&i[u]!==o&&Mc(e,u,o)}else for(var p in n)n.hasOwnProperty(p)&&Mc(e,p,n[p])}function fa(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ji(e){return Sp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pt(){}var ha=null;function ga(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sr=null,Cr=null;function Lc(e){var n=yr(e);if(n&&(e=n.stateNode)){var i=e[An]||null;e:switch(e=n.stateNode,n.type){case"input":if(pa(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Qn(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var o=i[n];if(o!==e&&o.form===e.form){var u=o[An]||null;if(!u)throw Error(c(90));pa(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<i.length;n++)o=i[n],o.form===e.form&&Dc(o)}break e;case"textarea":Oc(e,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&kr(e,!!i.multiple,n,!1)}}}var xa=!1;function Ic(e,n,i){if(xa)return e(n,i);xa=!0;try{var o=e(n);return o}finally{if(xa=!1,(Sr!==null||Cr!==null)&&(Uo(),Sr&&(n=Sr,e=Cr,Cr=Sr=null,Lc(n),e)))for(n=0;n<e.length;n++)Lc(e[n])}}function oi(e,n){var i=e.stateNode;if(i===null)return null;var o=i[An]||null;if(o===null)return null;i=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(c(231,n,typeof i));return i}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ba=!1;if(mt)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){ba=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{ba=!1}var Dt=null,ya=null,Xi=null;function Uc(){if(Xi)return Xi;var e,n=ya,i=n.length,o,u="value"in Dt?Dt.value:Dt.textContent,p=u.length;for(e=0;e<i&&n[e]===u[e];e++);var C=i-e;for(o=1;o<=C&&n[i-o]===u[p-o];o++);return Xi=u.slice(e,1<o?1-o:void 0)}function Ki(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function zc(){return!1}function Dn(e){function n(i,o,u,p,C){this._reactName=i,this._targetInst=u,this.type=o,this.nativeEvent=p,this.target=C,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(i=e[D],this[D]=i?i(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Zi:zc,this.isPropagationStopped=zc,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=Dn(nr),li=v({},nr,{view:0,detail:0}),Cp=Dn(li),_a,Ea,ci,no=v({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:va,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(_a=e.screenX-ci.screenX,Ea=e.screenY-ci.screenY):Ea=_a=0,ci=e),_a)},movementY:function(e){return"movementY"in e?e.movementY:Ea}}),Hc=Dn(no),wp=v({},no,{dataTransfer:0}),Rp=Dn(wp),Tp=v({},li,{relatedTarget:0}),ka=Dn(Tp),Ap=v({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dp=Dn(Ap),Np=v({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Op=Dn(Np),Bp=v({},nr,{data:0}),$c=Dn(Bp),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lp[e])?!!n[e]:!1}function va(){return Ip}var Up=v({},li,{key:function(e){if(e.key){var n=Mp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:va,charCode:function(e){return e.type==="keypress"?Ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zp=Dn(Up),Hp=v({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qc=Dn(Hp),$p=v({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:va}),qp=Dn($p),Pp=v({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=Dn(Pp),Vp=v({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gp=Dn(Vp),Yp=v({},nr,{newState:0,oldState:0}),Qp=Dn(Yp),Wp=[9,13,27,32],Sa=mt&&"CompositionEvent"in window,si=null;mt&&"documentMode"in document&&(si=document.documentMode);var Jp=mt&&"TextEvent"in window&&!si,Pc=mt&&(!Sa||si&&8<si&&11>=si),Fc=" ",Vc=!1;function Gc(e,n){switch(e){case"keyup":return Wp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function Xp(e,n){switch(e){case"compositionend":return Yc(n);case"keypress":return n.which!==32?null:(Vc=!0,Fc);case"textInput":return e=n.data,e===Fc&&Vc?null:e;default:return null}}function Kp(e,n){if(wr)return e==="compositionend"||!Sa&&Gc(e,n)?(e=Uc(),Xi=ya=Dt=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pc&&n.locale!=="ko"?null:n.data;default:return null}}var Zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zp[e.type]:n==="textarea"}function Wc(e,n,i,o){Sr?Cr?Cr.push(o):Cr=[o]:Sr=o,n=Vo(n,"onChange"),0<n.length&&(i=new eo("onChange","change",null,i,o),e.push({event:i,listeners:n}))}var ui=null,di=null;function em(e){Nd(e,0)}function to(e){var n=ii(e);if(Dc(n))return e}function Jc(e,n){if(e==="change")return n}var Xc=!1;if(mt){var Ca;if(mt){var wa="oninput"in document;if(!wa){var Kc=document.createElement("div");Kc.setAttribute("oninput","return;"),wa=typeof Kc.oninput=="function"}Ca=wa}else Ca=!1;Xc=Ca&&(!document.documentMode||9<document.documentMode)}function Zc(){ui&&(ui.detachEvent("onpropertychange",es),di=ui=null)}function es(e){if(e.propertyName==="value"&&to(di)){var n=[];Wc(n,di,e,ga(e)),Ic(em,n)}}function nm(e,n,i){e==="focusin"?(Zc(),ui=n,di=i,ui.attachEvent("onpropertychange",es)):e==="focusout"&&Zc()}function tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return to(di)}function rm(e,n){if(e==="click")return to(n)}function im(e,n){if(e==="input"||e==="change")return to(n)}function om(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Un=typeof Object.is=="function"?Object.is:om;function pi(e,n){if(Un(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),o=Object.keys(n);if(i.length!==o.length)return!1;for(o=0;o<i.length;o++){var u=i[o];if(!Gn.call(n,u)||!Un(e[u],n[u]))return!1}return!0}function ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ts(e,n){var i=ns(e);e=0;for(var o;i;){if(i.nodeType===3){if(o=e+i.textContent.length,e<=n&&o>=n)return{node:i,offset:n-e};e=o}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=ns(i)}}function rs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?rs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function is(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Wi(e.document);n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Wi(e.document)}return n}function Ra(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var am=mt&&"documentMode"in document&&11>=document.documentMode,Rr=null,Ta=null,mi=null,Aa=!1;function os(e,n,i){var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Aa||Rr==null||Rr!==Wi(o)||(o=Rr,"selectionStart"in o&&Ra(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mi&&pi(mi,o)||(mi=o,o=Vo(Ta,"onSelect"),0<o.length&&(n=new eo("onSelect","select",null,n,i),e.push({event:n,listeners:o}),n.target=Rr)))}function tr(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Tr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},Da={},as={};mt&&(as=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function rr(e){if(Da[e])return Da[e];if(!Tr[e])return e;var n=Tr[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in as)return Da[e]=n[i];return e}var ls=rr("animationend"),cs=rr("animationiteration"),ss=rr("animationstart"),lm=rr("transitionrun"),cm=rr("transitionstart"),sm=rr("transitioncancel"),us=rr("transitionend"),ds=new Map,Na="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Na.push("scrollEnd");function it(e,n){ds.set(e,n),er(n,[e])}var ro=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wn=[],Ar=0,Oa=0;function io(){for(var e=Ar,n=Oa=Ar=0;n<e;){var i=Wn[n];Wn[n++]=null;var o=Wn[n];Wn[n++]=null;var u=Wn[n];Wn[n++]=null;var p=Wn[n];if(Wn[n++]=null,o!==null&&u!==null){var C=o.pending;C===null?u.next=u:(u.next=C.next,C.next=u),o.pending=u}p!==0&&ps(i,u,p)}}function oo(e,n,i,o){Wn[Ar++]=e,Wn[Ar++]=n,Wn[Ar++]=i,Wn[Ar++]=o,Oa|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ba(e,n,i,o){return oo(e,n,i,o),ao(e)}function ir(e,n){return oo(e,null,null,n),ao(e)}function ps(e,n,i){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i);for(var u=!1,p=e.return;p!==null;)p.childLanes|=i,o=p.alternate,o!==null&&(o.childLanes|=i),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(u=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,u&&n!==null&&(u=31-G(i),e=p.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=i|536870912),p):null}function ao(e){if(50<ji)throw ji=0,ql=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Dr={};function um(e,n,i,o){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(e,n,i,o){return new um(e,n,i,o)}function Ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ft(e,n){var i=e.alternate;return i===null?(i=zn(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function ms(e,n){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,n=i.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function lo(e,n,i,o,u,p){var C=0;if(o=e,typeof e=="function")Ma(e)&&(C=1);else if(typeof e=="string")C=gf(e,i,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _e:return e=zn(31,i,n,u),e.elementType=_e,e.lanes=p,e;case U:return or(i.children,u,p,n);case $:C=8,u|=24;break;case z:return e=zn(12,i,n,u|2),e.elementType=z,e.lanes=p,e;case ue:return e=zn(13,i,n,u),e.elementType=ue,e.lanes=p,e;case K:return e=zn(19,i,n,u),e.elementType=K,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:C=10;break e;case Z:C=9;break e;case ge:C=11;break e;case ne:C=14;break e;case ke:C=16,o=null;break e}C=29,i=Error(c(130,e===null?"null":typeof e,"")),o=null}return n=zn(C,i,n,u),n.elementType=e,n.type=o,n.lanes=p,n}function or(e,n,i,o){return e=zn(7,e,o,n),e.lanes=i,e}function ja(e,n,i){return e=zn(6,e,null,n),e.lanes=i,e}function fs(e){var n=zn(18,null,null,0);return n.stateNode=e,n}function La(e,n,i){return n=zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var hs=new WeakMap;function Jn(e,n){if(typeof e=="object"&&e!==null){var i=hs.get(e);return i!==void 0?i:(n={value:e,source:n,stack:Sn(n)},hs.set(e,n),n)}return{value:e,source:n,stack:Sn(n)}}var Nr=[],Or=0,co=null,fi=0,Xn=[],Kn=0,Nt=null,lt=1,ct="";function ht(e,n){Nr[Or++]=fi,Nr[Or++]=co,co=e,fi=n}function gs(e,n,i){Xn[Kn++]=lt,Xn[Kn++]=ct,Xn[Kn++]=Nt,Nt=e;var o=lt;e=ct;var u=32-G(o)-1;o&=~(1<<u),i+=1;var p=32-G(n)+u;if(30<p){var C=u-u%5;p=(o&(1<<C)-1).toString(32),o>>=C,u-=C,lt=1<<32-G(n)+u|i<<u|o,ct=p+e}else lt=1<<p|i<<u|o,ct=e}function Ia(e){e.return!==null&&(ht(e,1),gs(e,1,0))}function Ua(e){for(;e===co;)co=Nr[--Or],Nr[Or]=null,fi=Nr[--Or],Nr[Or]=null;for(;e===Nt;)Nt=Xn[--Kn],Xn[Kn]=null,ct=Xn[--Kn],Xn[Kn]=null,lt=Xn[--Kn],Xn[Kn]=null}function xs(e,n){Xn[Kn++]=lt,Xn[Kn++]=ct,Xn[Kn++]=Nt,lt=n.id,ct=n.overflow,Nt=e}var bn=null,Je=null,He=!1,Ot=null,Zn=!1,za=Error(c(519));function Bt(e){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hi(Jn(n,e)),za}function bs(e){var n=e.stateNode,i=e.type,o=e.memoizedProps;switch(n[xn]=e,n[An]=o,i){case"dialog":Ie("cancel",n),Ie("close",n);break;case"iframe":case"object":case"embed":Ie("load",n);break;case"video":case"audio":for(i=0;i<Ii.length;i++)Ie(Ii[i],n);break;case"source":Ie("error",n);break;case"img":case"image":case"link":Ie("error",n),Ie("load",n);break;case"details":Ie("toggle",n);break;case"input":Ie("invalid",n),Nc(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ie("invalid",n);break;case"textarea":Ie("invalid",n),Bc(n,o.value,o.defaultValue,o.children)}i=o.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||o.suppressHydrationWarning===!0||jd(n.textContent,i)?(o.popover!=null&&(Ie("beforetoggle",n),Ie("toggle",n)),o.onScroll!=null&&Ie("scroll",n),o.onScrollEnd!=null&&Ie("scrollend",n),o.onClick!=null&&(n.onclick=pt),n=!0):n=!1,n||Bt(e,!0)}function ys(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:Zn=!1;return;case 27:case 3:Zn=!0;return;default:bn=bn.return}}function Br(e){if(e!==bn)return!1;if(!He)return ys(e),He=!0,!1;var n=e.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||rc(e.type,e.memoizedProps)),i=!i),i&&Je&&Bt(e),ys(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Je=Fd(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Je=Fd(e)}else n===27?(n=Je,Yt(e.type)?(e=cc,cc=null,Je=e):Je=n):Je=bn?nt(e.stateNode.nextSibling):null;return!0}function ar(){Je=bn=null,He=!1}function Ha(){var e=Ot;return e!==null&&(Mn===null?Mn=e:Mn.push.apply(Mn,e),Ot=null),e}function hi(e){Ot===null?Ot=[e]:Ot.push(e)}var $a=k(null),lr=null,gt=null;function Mt(e,n,i){T($a,n._currentValue),n._currentValue=i}function xt(e){e._currentValue=$a.current,N($a)}function qa(e,n,i){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===i)break;e=e.return}}function Pa(e,n,i,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var p=u.dependencies;if(p!==null){var C=u.child;p=p.firstContext;e:for(;p!==null;){var D=p;p=u;for(var I=0;I<n.length;I++)if(D.context===n[I]){p.lanes|=i,D=p.alternate,D!==null&&(D.lanes|=i),qa(p.return,i,e),o||(C=null);break e}p=D.next}}else if(u.tag===18){if(C=u.return,C===null)throw Error(c(341));C.lanes|=i,p=C.alternate,p!==null&&(p.lanes|=i),qa(C,i,e),C=null}else C=u.child;if(C!==null)C.return=u;else for(C=u;C!==null;){if(C===e){C=null;break}if(u=C.sibling,u!==null){u.return=C.return,C=u;break}C=C.return}u=C}}function Mr(e,n,i,o){e=null;for(var u=n,p=!1;u!==null;){if(!p){if((u.flags&524288)!==0)p=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var C=u.alternate;if(C===null)throw Error(c(387));if(C=C.memoizedProps,C!==null){var D=u.type;Un(u.pendingProps.value,C.value)||(e!==null?e.push(D):e=[D])}}else if(u===he.current){if(C=u.alternate,C===null)throw Error(c(387));C.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(qi):e=[qi])}u=u.return}e!==null&&Pa(n,e,i,o),n.flags|=262144}function so(e){for(e=e.firstContext;e!==null;){if(!Un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,gt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return _s(lr,e)}function uo(e,n){return lr===null&&cr(e),_s(e,n)}function _s(e,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},gt===null){if(e===null)throw Error(c(308));gt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else gt=gt.next=n;return i}var dm=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(i,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(i){return i()})}},pm=t.unstable_scheduleCallback,mm=t.unstable_NormalPriority,ln={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fa(){return{controller:new dm,data:new Map,refCount:0}}function gi(e){e.refCount--,e.refCount===0&&pm(mm,function(){e.controller.abort()})}var xi=null,Va=0,jr=0,Lr=null;function fm(e,n){if(xi===null){var i=xi=[];Va=0,jr=Ql(),Lr={status:"pending",value:void 0,then:function(o){i.push(o)}}}return Va++,n.then(Es,Es),n}function Es(){if(--Va===0&&xi!==null){Lr!==null&&(Lr.status="fulfilled");var e=xi;xi=null,jr=0,Lr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function hm(e,n){var i=[],o={status:"pending",value:null,reason:null,then:function(u){i.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<i.length;u++)(0,i[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<i.length;u++)(0,i[u])(void 0)}),o}var ks=F.S;F.S=function(e,n){od=en(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fm(e,n),ks!==null&&ks(e,n)};var sr=k(null);function Ga(){var e=sr.current;return e!==null?e:We.pooledCache}function po(e,n){n===null?T(sr,sr.current):T(sr,n.pool)}function vs(){var e=Ga();return e===null?null:{parent:ln._currentValue,pool:e}}var Ir=Error(c(460)),Ya=Error(c(474)),mo=Error(c(542)),fo={then:function(){}};function Ss(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cs(e,n,i){switch(i=e[i],i===void 0?e.push(n):i!==n&&(n.then(pt,pt),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Rs(e),e;default:if(typeof n.status=="string")n.then(pt,pt);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Rs(e),e}throw dr=n,Ir}}function ur(e){try{var n=e._init;return n(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(dr=i,Ir):i}}var dr=null;function ws(){if(dr===null)throw Error(c(459));var e=dr;return dr=null,e}function Rs(e){if(e===Ir||e===mo)throw Error(c(483))}var Ur=null,bi=0;function ho(e){var n=bi;return bi+=1,Ur===null&&(Ur=[]),Cs(Ur,e,n)}function yi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function go(e,n){throw n.$$typeof===R?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ts(e){function n(P,H){if(e){var Q=P.deletions;Q===null?(P.deletions=[H],P.flags|=16):Q.push(H)}}function i(P,H){if(!e)return null;for(;H!==null;)n(P,H),H=H.sibling;return null}function o(P){for(var H=new Map;P!==null;)P.key!==null?H.set(P.key,P):H.set(P.index,P),P=P.sibling;return H}function u(P,H){return P=ft(P,H),P.index=0,P.sibling=null,P}function p(P,H,Q){return P.index=Q,e?(Q=P.alternate,Q!==null?(Q=Q.index,Q<H?(P.flags|=67108866,H):Q):(P.flags|=67108866,H)):(P.flags|=1048576,H)}function C(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function D(P,H,Q,se){return H===null||H.tag!==6?(H=ja(Q,P.mode,se),H.return=P,H):(H=u(H,Q),H.return=P,H)}function I(P,H,Q,se){var we=Q.type;return we===U?ae(P,H,Q.props.children,se,Q.key):H!==null&&(H.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===ke&&ur(we)===H.type)?(H=u(H,Q.props),yi(H,Q),H.return=P,H):(H=lo(Q.type,Q.key,Q.props,null,P.mode,se),yi(H,Q),H.return=P,H)}function W(P,H,Q,se){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=La(Q,P.mode,se),H.return=P,H):(H=u(H,Q.children||[]),H.return=P,H)}function ae(P,H,Q,se,we){return H===null||H.tag!==7?(H=or(Q,P.mode,se,we),H.return=P,H):(H=u(H,Q),H.return=P,H)}function de(P,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=ja(""+H,P.mode,Q),H.return=P,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case w:return Q=lo(H.type,H.key,H.props,null,P.mode,Q),yi(Q,H),Q.return=P,Q;case B:return H=La(H,P.mode,Q),H.return=P,H;case ke:return H=ur(H),de(P,H,Q)}if(fe(H)||be(H))return H=or(H,P.mode,Q,null),H.return=P,H;if(typeof H.then=="function")return de(P,ho(H),Q);if(H.$$typeof===q)return de(P,uo(P,H),Q);go(P,H)}return null}function J(P,H,Q,se){var we=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return we!==null?null:D(P,H,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case w:return Q.key===we?I(P,H,Q,se):null;case B:return Q.key===we?W(P,H,Q,se):null;case ke:return Q=ur(Q),J(P,H,Q,se)}if(fe(Q)||be(Q))return we!==null?null:ae(P,H,Q,se,null);if(typeof Q.then=="function")return J(P,H,ho(Q),se);if(Q.$$typeof===q)return J(P,H,uo(P,Q),se);go(P,Q)}return null}function te(P,H,Q,se,we){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return P=P.get(Q)||null,D(H,P,""+se,we);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case w:return P=P.get(se.key===null?Q:se.key)||null,I(H,P,se,we);case B:return P=P.get(se.key===null?Q:se.key)||null,W(H,P,se,we);case ke:return se=ur(se),te(P,H,Q,se,we)}if(fe(se)||be(se))return P=P.get(Q)||null,ae(H,P,se,we,null);if(typeof se.then=="function")return te(P,H,Q,ho(se),we);if(se.$$typeof===q)return te(P,H,Q,uo(H,se),we);go(H,se)}return null}function ve(P,H,Q,se){for(var we=null,$e=null,Se=H,Me=H=0,ze=null;Se!==null&&Me<Q.length;Me++){Se.index>Me?(ze=Se,Se=null):ze=Se.sibling;var qe=J(P,Se,Q[Me],se);if(qe===null){Se===null&&(Se=ze);break}e&&Se&&qe.alternate===null&&n(P,Se),H=p(qe,H,Me),$e===null?we=qe:$e.sibling=qe,$e=qe,Se=ze}if(Me===Q.length)return i(P,Se),He&&ht(P,Me),we;if(Se===null){for(;Me<Q.length;Me++)Se=de(P,Q[Me],se),Se!==null&&(H=p(Se,H,Me),$e===null?we=Se:$e.sibling=Se,$e=Se);return He&&ht(P,Me),we}for(Se=o(Se);Me<Q.length;Me++)ze=te(Se,P,Me,Q[Me],se),ze!==null&&(e&&ze.alternate!==null&&Se.delete(ze.key===null?Me:ze.key),H=p(ze,H,Me),$e===null?we=ze:$e.sibling=ze,$e=ze);return e&&Se.forEach(function(Kt){return n(P,Kt)}),He&&ht(P,Me),we}function De(P,H,Q,se){if(Q==null)throw Error(c(151));for(var we=null,$e=null,Se=H,Me=H=0,ze=null,qe=Q.next();Se!==null&&!qe.done;Me++,qe=Q.next()){Se.index>Me?(ze=Se,Se=null):ze=Se.sibling;var Kt=J(P,Se,qe.value,se);if(Kt===null){Se===null&&(Se=ze);break}e&&Se&&Kt.alternate===null&&n(P,Se),H=p(Kt,H,Me),$e===null?we=Kt:$e.sibling=Kt,$e=Kt,Se=ze}if(qe.done)return i(P,Se),He&&ht(P,Me),we;if(Se===null){for(;!qe.done;Me++,qe=Q.next())qe=de(P,qe.value,se),qe!==null&&(H=p(qe,H,Me),$e===null?we=qe:$e.sibling=qe,$e=qe);return He&&ht(P,Me),we}for(Se=o(Se);!qe.done;Me++,qe=Q.next())qe=te(Se,P,Me,qe.value,se),qe!==null&&(e&&qe.alternate!==null&&Se.delete(qe.key===null?Me:qe.key),H=p(qe,H,Me),$e===null?we=qe:$e.sibling=qe,$e=qe);return e&&Se.forEach(function(Rf){return n(P,Rf)}),He&&ht(P,Me),we}function Qe(P,H,Q,se){if(typeof Q=="object"&&Q!==null&&Q.type===U&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case w:e:{for(var we=Q.key;H!==null;){if(H.key===we){if(we=Q.type,we===U){if(H.tag===7){i(P,H.sibling),se=u(H,Q.props.children),se.return=P,P=se;break e}}else if(H.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===ke&&ur(we)===H.type){i(P,H.sibling),se=u(H,Q.props),yi(se,Q),se.return=P,P=se;break e}i(P,H);break}else n(P,H);H=H.sibling}Q.type===U?(se=or(Q.props.children,P.mode,se,Q.key),se.return=P,P=se):(se=lo(Q.type,Q.key,Q.props,null,P.mode,se),yi(se,Q),se.return=P,P=se)}return C(P);case B:e:{for(we=Q.key;H!==null;){if(H.key===we)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){i(P,H.sibling),se=u(H,Q.children||[]),se.return=P,P=se;break e}else{i(P,H);break}else n(P,H);H=H.sibling}se=La(Q,P.mode,se),se.return=P,P=se}return C(P);case ke:return Q=ur(Q),Qe(P,H,Q,se)}if(fe(Q))return ve(P,H,Q,se);if(be(Q)){if(we=be(Q),typeof we!="function")throw Error(c(150));return Q=we.call(Q),De(P,H,Q,se)}if(typeof Q.then=="function")return Qe(P,H,ho(Q),se);if(Q.$$typeof===q)return Qe(P,H,uo(P,Q),se);go(P,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(i(P,H.sibling),se=u(H,Q),se.return=P,P=se):(i(P,H),se=ja(Q,P.mode,se),se.return=P,P=se),C(P)):i(P,H)}return function(P,H,Q,se){try{bi=0;var we=Qe(P,H,Q,se);return Ur=null,we}catch(Se){if(Se===Ir||Se===mo)throw Se;var $e=zn(29,Se,null,P.mode);return $e.lanes=se,$e.return=P,$e}finally{}}}var pr=Ts(!0),As=Ts(!1),jt=!1;function Qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Lt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function It(e,n,i){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ao(e),ps(e,null,i),n}return oo(e,o,n,i),ao(e)}function _i(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,i|=o,n.lanes=i,_c(e,i)}}function Ja(e,n){var i=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,i===o)){var u=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var C={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};p===null?u=p=C:p=p.next=C,i=i.next}while(i!==null);p===null?u=p=n:p=p.next=n}else u=p=n;i={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:o.shared,callbacks:o.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}var Xa=!1;function Ei(){if(Xa){var e=Lr;if(e!==null)throw e}}function ki(e,n,i,o){Xa=!1;var u=e.updateQueue;jt=!1;var p=u.firstBaseUpdate,C=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var I=D,W=I.next;I.next=null,C===null?p=W:C.next=W,C=I;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,D=ae.lastBaseUpdate,D!==C&&(D===null?ae.firstBaseUpdate=W:D.next=W,ae.lastBaseUpdate=I))}if(p!==null){var de=u.baseState;C=0,ae=W=I=null,D=p;do{var J=D.lane&-536870913,te=J!==D.lane;if(te?(Ue&J)===J:(o&J)===J){J!==0&&J===jr&&(Xa=!0),ae!==null&&(ae=ae.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var ve=e,De=D;J=n;var Qe=i;switch(De.tag){case 1:if(ve=De.payload,typeof ve=="function"){de=ve.call(Qe,de,J);break e}de=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=De.payload,J=typeof ve=="function"?ve.call(Qe,de,J):ve,J==null)break e;de=v({},de,J);break e;case 2:jt=!0}}J=D.callback,J!==null&&(e.flags|=64,te&&(e.flags|=8192),te=u.callbacks,te===null?u.callbacks=[J]:te.push(J))}else te={lane:J,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ae===null?(W=ae=te,I=de):ae=ae.next=te,C|=J;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;te=D,D=te.next,te.next=null,u.lastBaseUpdate=te,u.shared.pending=null}}while(!0);ae===null&&(I=de),u.baseState=I,u.firstBaseUpdate=W,u.lastBaseUpdate=ae,p===null&&(u.shared.lanes=0),qt|=C,e.lanes=C,e.memoizedState=de}}function Ds(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function Ns(e,n){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)Ds(i[e],n)}var zr=k(null),xo=k(0);function Os(e,n){e=wt,T(xo,e),T(zr,n),wt=e|n.baseLanes}function Ka(){T(xo,wt),T(zr,zr.current)}function Za(){wt=xo.current,N(zr),N(xo)}var Hn=k(null),et=null;function Ut(e){var n=e.alternate;T(on,on.current&1),T(Hn,e),et===null&&(n===null||zr.current!==null||n.memoizedState!==null)&&(et=e)}function el(e){T(on,on.current),T(Hn,e),et===null&&(et=e)}function Bs(e){e.tag===22?(T(on,on.current),T(Hn,e),et===null&&(et=e)):zt()}function zt(){T(on,on.current),T(Hn,Hn.current)}function $n(e){N(Hn),et===e&&(et=null),N(on)}var on=k(0);function bo(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||ac(i)||lc(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var bt=0,Be=null,Ge=null,sn=null,yo=!1,Hr=!1,mr=!1,_o=0,vi=0,$r=null,gm=0;function nn(){throw Error(c(321))}function nl(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Un(e[i],n[i]))return!1;return!0}function tl(e,n,i,o,u,p){return bt=p,Be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?gu:xl,mr=!1,p=i(o,u),mr=!1,Hr&&(p=js(n,i,o,u)),Ms(e),p}function Ms(e){F.H=wi;var n=Ge!==null&&Ge.next!==null;if(bt=0,sn=Ge=Be=null,yo=!1,vi=0,$r=null,n)throw Error(c(300));e===null||un||(e=e.dependencies,e!==null&&so(e)&&(un=!0))}function js(e,n,i,o){Be=e;var u=0;do{if(Hr&&($r=null),vi=0,Hr=!1,25<=u)throw Error(c(301));if(u+=1,sn=Ge=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}F.H=xu,p=n(i,o)}while(Hr);return p}function xm(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Si(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(Be.flags|=1024),n}function rl(){var e=_o!==0;return _o=0,e}function il(e,n,i){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i}function ol(e){if(yo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}yo=!1}bt=0,sn=Ge=Be=null,Hr=!1,vi=_o=0,$r=null}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Be.memoizedState=sn=e:sn=sn.next=e,sn}function an(){if(Ge===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=sn===null?Be.memoizedState:sn.next;if(n!==null)sn=n,Ge=e;else{if(e===null)throw Be.alternate===null?Error(c(467)):Error(c(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},sn===null?Be.memoizedState=sn=e:sn=sn.next=e}return sn}function Eo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Si(e){var n=vi;return vi+=1,$r===null&&($r=[]),e=Cs($r,e,n),n=Be,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?gu:xl),e}function ko(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Si(e);if(e.$$typeof===q)return yn(e)}throw Error(c(438,String(e)))}function al(e){var n=null,i=Be.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var o=Be.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Eo(),Be.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(e),o=0;o<e;o++)i[o]=Ae;return n.index++,i}function yt(e,n){return typeof n=="function"?n(e):n}function vo(e){var n=an();return ll(n,Ge,e)}function ll(e,n,i){var o=e.queue;if(o===null)throw Error(c(311));o.lastRenderedReducer=i;var u=e.baseQueue,p=o.pending;if(p!==null){if(u!==null){var C=u.next;u.next=p.next,p.next=C}n.baseQueue=u=p,o.pending=null}if(p=e.baseState,u===null)e.memoizedState=p;else{n=u.next;var D=C=null,I=null,W=n,ae=!1;do{var de=W.lane&-536870913;if(de!==W.lane?(Ue&de)===de:(bt&de)===de){var J=W.revertLane;if(J===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),de===jr&&(ae=!0);else if((bt&J)===J){W=W.next,J===jr&&(ae=!0);continue}else de={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},I===null?(D=I=de,C=p):I=I.next=de,Be.lanes|=J,qt|=J;de=W.action,mr&&i(p,de),p=W.hasEagerState?W.eagerState:i(p,de)}else J={lane:de,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},I===null?(D=I=J,C=p):I=I.next=J,Be.lanes|=de,qt|=de;W=W.next}while(W!==null&&W!==n);if(I===null?C=p:I.next=D,!Un(p,e.memoizedState)&&(un=!0,ae&&(i=Lr,i!==null)))throw i;e.memoizedState=p,e.baseState=C,e.baseQueue=I,o.lastRenderedState=p}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function cl(e){var n=an(),i=n.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=e;var o=i.dispatch,u=i.pending,p=n.memoizedState;if(u!==null){i.pending=null;var C=u=u.next;do p=e(p,C.action),C=C.next;while(C!==u);Un(p,n.memoizedState)||(un=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),i.lastRenderedState=p}return[p,o]}function Ls(e,n,i){var o=Be,u=an(),p=He;if(p){if(i===void 0)throw Error(c(407));i=i()}else i=n();var C=!Un((Ge||u).memoizedState,i);if(C&&(u.memoizedState=i,un=!0),u=u.queue,dl(zs.bind(null,o,u,e),[e]),u.getSnapshot!==n||C||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,qr(9,{destroy:void 0},Us.bind(null,o,u,i,n),null),We===null)throw Error(c(349));p||(bt&127)!==0||Is(o,n,i)}return i}function Is(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=Be.updateQueue,n===null?(n=Eo(),Be.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Us(e,n,i,o){n.value=i,n.getSnapshot=o,Hs(n)&&$s(e)}function zs(e,n,i){return i(function(){Hs(n)&&$s(e)})}function Hs(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Un(e,i)}catch{return!0}}function $s(e){var n=ir(e,2);n!==null&&jn(n,e,2)}function sl(e){var n=Rn();if(typeof e=="function"){var i=e;if(e=i(),mr){ie(!0);try{i()}finally{ie(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yt,lastRenderedState:e},n}function qs(e,n,i,o){return e.baseState=i,ll(e,Ge,typeof o=="function"?o:yt)}function bm(e,n,i,o,u){if(wo(e))throw Error(c(485));if(e=n.action,e!==null){var p={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(C){p.listeners.push(C)}};F.T!==null?i(!0):p.isTransition=!1,o(p),i=n.pending,i===null?(p.next=n.pending=p,Ps(n,p)):(p.next=i.next,n.pending=i.next=p)}}function Ps(e,n){var i=n.action,o=n.payload,u=e.state;if(n.isTransition){var p=F.T,C={};F.T=C;try{var D=i(u,o),I=F.S;I!==null&&I(C,D),Fs(e,n,D)}catch(W){ul(e,n,W)}finally{p!==null&&C.types!==null&&(p.types=C.types),F.T=p}}else try{p=i(u,o),Fs(e,n,p)}catch(W){ul(e,n,W)}}function Fs(e,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(o){Vs(e,n,o)},function(o){return ul(e,n,o)}):Vs(e,n,i)}function Vs(e,n,i){n.status="fulfilled",n.value=i,Gs(n),e.state=i,n=e.pending,n!==null&&(i=n.next,i===n?e.pending=null:(i=i.next,n.next=i,Ps(e,i)))}function ul(e,n,i){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=i,Gs(n),n=n.next;while(n!==o)}e.action=null}function Gs(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ys(e,n){return n}function Qs(e,n){if(He){var i=We.formState;if(i!==null){e:{var o=Be;if(He){if(Je){n:{for(var u=Je,p=Zn;u.nodeType!==8;){if(!p){u=null;break n}if(u=nt(u.nextSibling),u===null){u=null;break n}}p=u.data,u=p==="F!"||p==="F"?u:null}if(u){Je=nt(u.nextSibling),o=u.data==="F!";break e}}Bt(o)}o=!1}o&&(n=i[0])}}return i=Rn(),i.memoizedState=i.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:n},i.queue=o,i=mu.bind(null,Be,o),o.dispatch=i,o=sl(!1),p=gl.bind(null,Be,!1,o.queue),o=Rn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,i=bm.bind(null,Be,u,p,i),u.dispatch=i,o.memoizedState=e,[n,i,!1]}function Ws(e){var n=an();return Js(n,Ge,e)}function Js(e,n,i){if(n=ll(e,n,Ys)[0],e=vo(yt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Si(n)}catch(C){throw C===Ir?mo:C}else o=n;n=an();var u=n.queue,p=u.dispatch;return i!==n.memoizedState&&(Be.flags|=2048,qr(9,{destroy:void 0},ym.bind(null,u,i),null)),[o,p,e]}function ym(e,n){e.action=n}function Xs(e){var n=an(),i=Ge;if(i!==null)return Js(n,i,e);an(),n=n.memoizedState,i=an();var o=i.queue.dispatch;return i.memoizedState=e,[n,o,!1]}function qr(e,n,i,o){return e={tag:e,create:i,deps:o,inst:n,next:null},n=Be.updateQueue,n===null&&(n=Eo(),Be.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=e.next=e:(o=i.next,i.next=e,e.next=o,n.lastEffect=e),e}function Ks(){return an().memoizedState}function So(e,n,i,o){var u=Rn();Be.flags|=e,u.memoizedState=qr(1|n,{destroy:void 0},i,o===void 0?null:o)}function Co(e,n,i,o){var u=an();o=o===void 0?null:o;var p=u.memoizedState.inst;Ge!==null&&o!==null&&nl(o,Ge.memoizedState.deps)?u.memoizedState=qr(n,p,i,o):(Be.flags|=e,u.memoizedState=qr(1|n,p,i,o))}function Zs(e,n){So(8390656,8,e,n)}function dl(e,n){Co(2048,8,e,n)}function _m(e){Be.flags|=4;var n=Be.updateQueue;if(n===null)n=Eo(),Be.updateQueue=n,n.events=[e];else{var i=n.events;i===null?n.events=[e]:i.push(e)}}function eu(e){var n=an().memoizedState;return _m({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function nu(e,n){return Co(4,2,e,n)}function tu(e,n){return Co(4,4,e,n)}function ru(e,n){if(typeof n=="function"){e=e();var i=n(e);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function iu(e,n,i){i=i!=null?i.concat([e]):null,Co(4,4,ru.bind(null,n,e),i)}function pl(){}function ou(e,n){var i=an();n=n===void 0?null:n;var o=i.memoizedState;return n!==null&&nl(n,o[1])?o[0]:(i.memoizedState=[e,n],e)}function au(e,n){var i=an();n=n===void 0?null:n;var o=i.memoizedState;if(n!==null&&nl(n,o[1]))return o[0];if(o=e(),mr){ie(!0);try{e()}finally{ie(!1)}}return i.memoizedState=[o,n],o}function ml(e,n,i){return i===void 0||(bt&1073741824)!==0&&(Ue&261930)===0?e.memoizedState=n:(e.memoizedState=i,e=ld(),Be.lanes|=e,qt|=e,i)}function lu(e,n,i,o){return Un(i,n)?i:zr.current!==null?(e=ml(e,i,o),Un(e,n)||(un=!0),e):(bt&42)===0||(bt&1073741824)!==0&&(Ue&261930)===0?(un=!0,e.memoizedState=i):(e=ld(),Be.lanes|=e,qt|=e,n)}function cu(e,n,i,o,u){var p=pe.p;pe.p=p!==0&&8>p?p:8;var C=F.T,D={};F.T=D,gl(e,!1,n,i);try{var I=u(),W=F.S;if(W!==null&&W(D,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ae=hm(I,o);Ci(e,n,ae,Fn(e))}else Ci(e,n,o,Fn(e))}catch(de){Ci(e,n,{then:function(){},status:"rejected",reason:de},Fn())}finally{pe.p=p,C!==null&&D.types!==null&&(C.types=D.types),F.T=C}}function Em(){}function fl(e,n,i,o){if(e.tag!==5)throw Error(c(476));var u=su(e).queue;cu(e,u,n,ce,i===null?Em:function(){return uu(e),i(o)})}function su(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yt,lastRenderedState:ce},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yt,lastRenderedState:i},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function uu(e){var n=su(e);n.next===null&&(n=e.alternate.memoizedState),Ci(e,n.next.queue,{},Fn())}function hl(){return yn(qi)}function du(){return an().memoizedState}function pu(){return an().memoizedState}function km(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var i=Fn();e=Lt(i);var o=It(n,e,i);o!==null&&(jn(o,n,i),_i(o,n,i)),n={cache:Fa()},e.payload=n;return}n=n.return}}function vm(e,n,i){var o=Fn();i={lane:o,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},wo(e)?fu(n,i):(i=Ba(e,n,i,o),i!==null&&(jn(i,e,o),hu(i,n,o)))}function mu(e,n,i){var o=Fn();Ci(e,n,i,o)}function Ci(e,n,i,o){var u={lane:o,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(wo(e))fu(n,u);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var C=n.lastRenderedState,D=p(C,i);if(u.hasEagerState=!0,u.eagerState=D,Un(D,C))return oo(e,n,u,0),We===null&&io(),!1}catch{}finally{}if(i=Ba(e,n,u,o),i!==null)return jn(i,e,o),hu(i,n,o),!0}return!1}function gl(e,n,i,o){if(o={lane:2,revertLane:Ql(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},wo(e)){if(n)throw Error(c(479))}else n=Ba(e,i,o,2),n!==null&&jn(n,e,2)}function wo(e){var n=e.alternate;return e===Be||n!==null&&n===Be}function fu(e,n){Hr=yo=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function hu(e,n,i){if((i&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,i|=o,n.lanes=i,_c(e,i)}}var wi={readContext:yn,use:ko,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};wi.useEffectEvent=nn;var gu={readContext:yn,use:ko,useCallback:function(e,n){return Rn().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:Zs,useImperativeHandle:function(e,n,i){i=i!=null?i.concat([e]):null,So(4194308,4,ru.bind(null,n,e),i)},useLayoutEffect:function(e,n){return So(4194308,4,e,n)},useInsertionEffect:function(e,n){So(4,2,e,n)},useMemo:function(e,n){var i=Rn();n=n===void 0?null:n;var o=e();if(mr){ie(!0);try{e()}finally{ie(!1)}}return i.memoizedState=[o,n],o},useReducer:function(e,n,i){var o=Rn();if(i!==void 0){var u=i(n);if(mr){ie(!0);try{i(n)}finally{ie(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=vm.bind(null,Be,e),[o.memoizedState,e]},useRef:function(e){var n=Rn();return e={current:e},n.memoizedState=e},useState:function(e){e=sl(e);var n=e.queue,i=mu.bind(null,Be,n);return n.dispatch=i,[e.memoizedState,i]},useDebugValue:pl,useDeferredValue:function(e,n){var i=Rn();return ml(i,e,n)},useTransition:function(){var e=sl(!1);return e=cu.bind(null,Be,e.queue,!0,!1),Rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,i){var o=Be,u=Rn();if(He){if(i===void 0)throw Error(c(407));i=i()}else{if(i=n(),We===null)throw Error(c(349));(Ue&127)!==0||Is(o,n,i)}u.memoizedState=i;var p={value:i,getSnapshot:n};return u.queue=p,Zs(zs.bind(null,o,p,e),[e]),o.flags|=2048,qr(9,{destroy:void 0},Us.bind(null,o,p,i,n),null),i},useId:function(){var e=Rn(),n=We.identifierPrefix;if(He){var i=ct,o=lt;i=(o&~(1<<32-G(o)-1)).toString(32)+i,n="_"+n+"R_"+i,i=_o++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=gm++,n="_"+n+"r_"+i.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:hl,useFormState:Qs,useActionState:Qs,useOptimistic:function(e){var n=Rn();n.memoizedState=n.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=gl.bind(null,Be,!0,i),i.dispatch=n,[e,n]},useMemoCache:al,useCacheRefresh:function(){return Rn().memoizedState=km.bind(null,Be)},useEffectEvent:function(e){var n=Rn(),i={impl:e};return n.memoizedState=i,function(){if((Pe&2)!==0)throw Error(c(440));return i.impl.apply(void 0,arguments)}}},xl={readContext:yn,use:ko,useCallback:ou,useContext:yn,useEffect:dl,useImperativeHandle:iu,useInsertionEffect:nu,useLayoutEffect:tu,useMemo:au,useReducer:vo,useRef:Ks,useState:function(){return vo(yt)},useDebugValue:pl,useDeferredValue:function(e,n){var i=an();return lu(i,Ge.memoizedState,e,n)},useTransition:function(){var e=vo(yt)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Si(e),n]},useSyncExternalStore:Ls,useId:du,useHostTransitionStatus:hl,useFormState:Ws,useActionState:Ws,useOptimistic:function(e,n){var i=an();return qs(i,Ge,e,n)},useMemoCache:al,useCacheRefresh:pu};xl.useEffectEvent=eu;var xu={readContext:yn,use:ko,useCallback:ou,useContext:yn,useEffect:dl,useImperativeHandle:iu,useInsertionEffect:nu,useLayoutEffect:tu,useMemo:au,useReducer:cl,useRef:Ks,useState:function(){return cl(yt)},useDebugValue:pl,useDeferredValue:function(e,n){var i=an();return Ge===null?ml(i,e,n):lu(i,Ge.memoizedState,e,n)},useTransition:function(){var e=cl(yt)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Si(e),n]},useSyncExternalStore:Ls,useId:du,useHostTransitionStatus:hl,useFormState:Xs,useActionState:Xs,useOptimistic:function(e,n){var i=an();return Ge!==null?qs(i,Ge,e,n):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:al,useCacheRefresh:pu};xu.useEffectEvent=eu;function bl(e,n,i,o){n=e.memoizedState,i=i(o,n),i=i==null?n:v({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var yl={enqueueSetState:function(e,n,i){e=e._reactInternals;var o=Fn(),u=Lt(o);u.payload=n,i!=null&&(u.callback=i),n=It(e,u,o),n!==null&&(jn(n,e,o),_i(n,e,o))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var o=Fn(),u=Lt(o);u.tag=1,u.payload=n,i!=null&&(u.callback=i),n=It(e,u,o),n!==null&&(jn(n,e,o),_i(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Fn(),o=Lt(i);o.tag=2,n!=null&&(o.callback=n),n=It(e,o,i),n!==null&&(jn(n,e,i),_i(n,e,i))}};function bu(e,n,i,o,u,p,C){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,p,C):n.prototype&&n.prototype.isPureReactComponent?!pi(i,o)||!pi(u,p):!0}function yu(e,n,i,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,o),n.state!==e&&yl.enqueueReplaceState(n,n.state,null)}function fr(e,n){var i=n;if("ref"in n){i={};for(var o in n)o!=="ref"&&(i[o]=n[o])}if(e=e.defaultProps){i===n&&(i=v({},i));for(var u in e)i[u]===void 0&&(i[u]=e[u])}return i}function _u(e){ro(e)}function Eu(e){console.error(e)}function ku(e){ro(e)}function Ro(e,n){try{var i=e.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function vu(e,n,i){try{var o=e.onCaughtError;o(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _l(e,n,i){return i=Lt(i),i.tag=3,i.payload={element:null},i.callback=function(){Ro(e,n)},i}function Su(e){return e=Lt(e),e.tag=3,e}function Cu(e,n,i,o){var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var p=o.value;e.payload=function(){return u(p)},e.callback=function(){vu(n,i,o)}}var C=i.stateNode;C!==null&&typeof C.componentDidCatch=="function"&&(e.callback=function(){vu(n,i,o),typeof u!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function Sm(e,n,i,o,u){if(i.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=i.alternate,n!==null&&Mr(n,i,u,!0),i=Hn.current,i!==null){switch(i.tag){case 31:case 13:return et===null?zo():i.alternate===null&&tn===0&&(tn=3),i.flags&=-257,i.flags|=65536,i.lanes=u,o===fo?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([o]):n.add(o),Vl(e,o,u)),!1;case 22:return i.flags|=65536,o===fo?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([o]):i.add(o)),Vl(e,o,u)),!1}throw Error(c(435,i.tag))}return Vl(e,o,u),zo(),!1}if(He)return n=Hn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==za&&(e=Error(c(422),{cause:o}),hi(Jn(e,i)))):(o!==za&&(n=Error(c(423),{cause:o}),hi(Jn(n,i))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Jn(o,i),u=_l(e.stateNode,o,u),Ja(e,u),tn!==4&&(tn=2)),!1;var p=Error(c(520),{cause:o});if(p=Jn(p,i),Mi===null?Mi=[p]:Mi.push(p),tn!==4&&(tn=2),n===null)return!0;o=Jn(o,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,e=u&-u,i.lanes|=e,e=_l(i.stateNode,o,e),Ja(i,e),!1;case 1:if(n=i.type,p=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pt===null||!Pt.has(p))))return i.flags|=65536,u&=-u,i.lanes|=u,u=Su(u),Cu(u,e,i,o),Ja(i,u),!1}i=i.return}while(i!==null);return!1}var El=Error(c(461)),un=!1;function _n(e,n,i,o){n.child=e===null?As(n,null,i,o):pr(n,e.child,i,o)}function wu(e,n,i,o,u){i=i.render;var p=n.ref;if("ref"in o){var C={};for(var D in o)D!=="ref"&&(C[D]=o[D])}else C=o;return cr(n),o=tl(e,n,i,C,p,u),D=rl(),e!==null&&!un?(il(e,n,u),_t(e,n,u)):(He&&D&&Ia(n),n.flags|=1,_n(e,n,o,u),n.child)}function Ru(e,n,i,o,u){if(e===null){var p=i.type;return typeof p=="function"&&!Ma(p)&&p.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=p,Tu(e,n,p,o,u)):(e=lo(i.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,!Al(e,u)){var C=p.memoizedProps;if(i=i.compare,i=i!==null?i:pi,i(C,o)&&e.ref===n.ref)return _t(e,n,u)}return n.flags|=1,e=ft(p,o),e.ref=n.ref,e.return=n,n.child=e}function Tu(e,n,i,o,u){if(e!==null){var p=e.memoizedProps;if(pi(p,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=p,Al(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,_t(e,n,u)}return kl(e,n,i,o,u)}function Au(e,n,i,o){var u=o.children,p=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|i:i,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~p}else o=0,n.child=null;return Du(e,n,p,i,o)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&po(n,p!==null?p.cachePool:null),p!==null?Os(n,p):Ka(),Bs(n);else return o=n.lanes=536870912,Du(e,n,p!==null?p.baseLanes|i:i,i,o)}else p!==null?(po(n,p.cachePool),Os(n,p),zt(),n.memoizedState=null):(e!==null&&po(n,null),Ka(),zt());return _n(e,n,u,i),n.child}function Ri(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Du(e,n,i,o,u){var p=Ga();return p=p===null?null:{parent:ln._currentValue,pool:p},n.memoizedState={baseLanes:i,cachePool:p},e!==null&&po(n,null),Ka(),Bs(n),e!==null&&Mr(e,n,o,!0),n.childLanes=u,null}function To(e,n){return n=Do({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Nu(e,n,i){return pr(n,e.child,null,i),e=To(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function Cm(e,n,i){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(He){if(o.mode==="hidden")return e=To(n,o),n.lanes=536870912,Ri(null,e);if(el(n),(e=Je)?(e=Pd(e,Zn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Nt!==null?{id:lt,overflow:ct}:null,retryLane:536870912,hydrationErrors:null},i=fs(e),i.return=n,n.child=i,bn=n,Je=null)):e=null,e===null)throw Bt(n);return n.lanes=536870912,null}return To(n,o)}var p=e.memoizedState;if(p!==null){var C=p.dehydrated;if(el(n),u)if(n.flags&256)n.flags&=-257,n=Nu(e,n,i);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(c(558));else if(un||Mr(e,n,i,!1),u=(i&e.childLanes)!==0,un||u){if(o=We,o!==null&&(C=Ec(o,i),C!==0&&C!==p.retryLane))throw p.retryLane=C,ir(e,C),jn(o,e,C),El;zo(),n=Nu(e,n,i)}else e=p.treeContext,Je=nt(C.nextSibling),bn=n,He=!0,Ot=null,Zn=!1,e!==null&&xs(n,e),n=To(n,o),n.flags|=4096;return n}return e=ft(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ao(e,n){var i=n.ref;if(i===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(c(284));(e===null||e.ref!==i)&&(n.flags|=4194816)}}function kl(e,n,i,o,u){return cr(n),i=tl(e,n,i,o,void 0,u),o=rl(),e!==null&&!un?(il(e,n,u),_t(e,n,u)):(He&&o&&Ia(n),n.flags|=1,_n(e,n,i,u),n.child)}function Ou(e,n,i,o,u,p){return cr(n),n.updateQueue=null,i=js(n,o,i,u),Ms(e),o=rl(),e!==null&&!un?(il(e,n,p),_t(e,n,p)):(He&&o&&Ia(n),n.flags|=1,_n(e,n,i,p),n.child)}function Bu(e,n,i,o,u){if(cr(n),n.stateNode===null){var p=Dr,C=i.contextType;typeof C=="object"&&C!==null&&(p=yn(C)),p=new i(o,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=yl,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=o,p.state=n.memoizedState,p.refs={},Qa(n),C=i.contextType,p.context=typeof C=="object"&&C!==null?yn(C):Dr,p.state=n.memoizedState,C=i.getDerivedStateFromProps,typeof C=="function"&&(bl(n,i,C,o),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(C=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),C!==p.state&&yl.enqueueReplaceState(p,p.state,null),ki(n,o,p,u),Ei(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){p=n.stateNode;var D=n.memoizedProps,I=fr(i,D);p.props=I;var W=p.context,ae=i.contextType;C=Dr,typeof ae=="object"&&ae!==null&&(C=yn(ae));var de=i.getDerivedStateFromProps;ae=typeof de=="function"||typeof p.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,ae||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(D||W!==C)&&yu(n,p,o,C),jt=!1;var J=n.memoizedState;p.state=J,ki(n,o,p,u),Ei(),W=n.memoizedState,D||J!==W||jt?(typeof de=="function"&&(bl(n,i,de,o),W=n.memoizedState),(I=jt||bu(n,i,I,o,J,W,C))?(ae||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=W),p.props=o,p.state=W,p.context=C,o=I):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{p=n.stateNode,Wa(e,n),C=n.memoizedProps,ae=fr(i,C),p.props=ae,de=n.pendingProps,J=p.context,W=i.contextType,I=Dr,typeof W=="object"&&W!==null&&(I=yn(W)),D=i.getDerivedStateFromProps,(W=typeof D=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(C!==de||J!==I)&&yu(n,p,o,I),jt=!1,J=n.memoizedState,p.state=J,ki(n,o,p,u),Ei();var te=n.memoizedState;C!==de||J!==te||jt||e!==null&&e.dependencies!==null&&so(e.dependencies)?(typeof D=="function"&&(bl(n,i,D,o),te=n.memoizedState),(ae=jt||bu(n,i,ae,o,J,te,I)||e!==null&&e.dependencies!==null&&so(e.dependencies))?(W||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,te,I),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,te,I)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||C===e.memoizedProps&&J===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&J===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=te),p.props=o,p.state=te,p.context=I,o=ae):(typeof p.componentDidUpdate!="function"||C===e.memoizedProps&&J===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||C===e.memoizedProps&&J===e.memoizedState||(n.flags|=1024),o=!1)}return p=o,Ao(e,n),o=(n.flags&128)!==0,p||o?(p=n.stateNode,i=o&&typeof i.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,e!==null&&o?(n.child=pr(n,e.child,null,u),n.child=pr(n,null,i,u)):_n(e,n,i,u),n.memoizedState=p.state,e=n.child):e=_t(e,n,u),e}function Mu(e,n,i,o){return ar(),n.flags|=256,_n(e,n,i,o),n.child}var vl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sl(e){return{baseLanes:e,cachePool:vs()}}function Cl(e,n,i){return e=e!==null?e.childLanes&~i:0,n&&(e|=Pn),e}function ju(e,n,i){var o=n.pendingProps,u=!1,p=(n.flags&128)!==0,C;if((C=p)||(C=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),C&&(u=!0,n.flags&=-129),C=(n.flags&32)!==0,n.flags&=-33,e===null){if(He){if(u?Ut(n):zt(),(e=Je)?(e=Pd(e,Zn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Nt!==null?{id:lt,overflow:ct}:null,retryLane:536870912,hydrationErrors:null},i=fs(e),i.return=n,n.child=i,bn=n,Je=null)):e=null,e===null)throw Bt(n);return lc(e)?n.lanes=32:n.lanes=536870912,null}var D=o.children;return o=o.fallback,u?(zt(),u=n.mode,D=Do({mode:"hidden",children:D},u),o=or(o,u,i,null),D.return=n,o.return=n,D.sibling=o,n.child=D,o=n.child,o.memoizedState=Sl(i),o.childLanes=Cl(e,C,i),n.memoizedState=vl,Ri(null,o)):(Ut(n),wl(n,D))}var I=e.memoizedState;if(I!==null&&(D=I.dehydrated,D!==null)){if(p)n.flags&256?(Ut(n),n.flags&=-257,n=Rl(e,n,i)):n.memoizedState!==null?(zt(),n.child=e.child,n.flags|=128,n=null):(zt(),D=o.fallback,u=n.mode,o=Do({mode:"visible",children:o.children},u),D=or(D,u,i,null),D.flags|=2,o.return=n,D.return=n,o.sibling=D,n.child=o,pr(n,e.child,null,i),o=n.child,o.memoizedState=Sl(i),o.childLanes=Cl(e,C,i),n.memoizedState=vl,n=Ri(null,o));else if(Ut(n),lc(D)){if(C=D.nextSibling&&D.nextSibling.dataset,C)var W=C.dgst;C=W,o=Error(c(419)),o.stack="",o.digest=C,hi({value:o,source:null,stack:null}),n=Rl(e,n,i)}else if(un||Mr(e,n,i,!1),C=(i&e.childLanes)!==0,un||C){if(C=We,C!==null&&(o=Ec(C,i),o!==0&&o!==I.retryLane))throw I.retryLane=o,ir(e,o),jn(C,e,o),El;ac(D)||zo(),n=Rl(e,n,i)}else ac(D)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Je=nt(D.nextSibling),bn=n,He=!0,Ot=null,Zn=!1,e!==null&&xs(n,e),n=wl(n,o.children),n.flags|=4096);return n}return u?(zt(),D=o.fallback,u=n.mode,I=e.child,W=I.sibling,o=ft(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,W!==null?D=ft(W,D):(D=or(D,u,i,null),D.flags|=2),D.return=n,o.return=n,o.sibling=D,n.child=o,Ri(null,o),o=n.child,D=e.child.memoizedState,D===null?D=Sl(i):(u=D.cachePool,u!==null?(I=ln._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=vs(),D={baseLanes:D.baseLanes|i,cachePool:u}),o.memoizedState=D,o.childLanes=Cl(e,C,i),n.memoizedState=vl,Ri(e.child,o)):(Ut(n),i=e.child,e=i.sibling,i=ft(i,{mode:"visible",children:o.children}),i.return=n,i.sibling=null,e!==null&&(C=n.deletions,C===null?(n.deletions=[e],n.flags|=16):C.push(e)),n.child=i,n.memoizedState=null,i)}function wl(e,n){return n=Do({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Do(e,n){return e=zn(22,e,null,n),e.lanes=0,e}function Rl(e,n,i){return pr(n,e.child,null,i),e=wl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Lu(e,n,i){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),qa(e.return,n,i)}function Tl(e,n,i,o,u,p){var C=e.memoizedState;C===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:i,tailMode:u,treeForkCount:p}:(C.isBackwards=n,C.rendering=null,C.renderingStartTime=0,C.last=o,C.tail=i,C.tailMode=u,C.treeForkCount=p)}function Iu(e,n,i){var o=n.pendingProps,u=o.revealOrder,p=o.tail;o=o.children;var C=on.current,D=(C&2)!==0;if(D?(C=C&1|2,n.flags|=128):C&=1,T(on,C),_n(e,n,o,i),o=He?fi:0,!D&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lu(e,i,n);else if(e.tag===19)Lu(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(i=n.child,u=null;i!==null;)e=i.alternate,e!==null&&bo(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=n.child,n.child=null):(u=i.sibling,i.sibling=null),Tl(n,!1,u,i,p,o);break;case"backwards":case"unstable_legacy-backwards":for(i=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bo(e)===null){n.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}Tl(n,!0,i,null,p,o);break;case"together":Tl(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function _t(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),qt|=n.lanes,(i&n.childLanes)===0)if(e!==null){if(Mr(e,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,i=ft(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=ft(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Al(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&so(e)))}function wm(e,n,i){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),Mt(n,ln,e.memoizedState.cache),ar();break;case 27:case 5:Ke(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:Mt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,el(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ut(n),n.flags|=128,null):(i&n.child.childLanes)!==0?ju(e,n,i):(Ut(n),e=_t(e,n,i),e!==null?e.sibling:null);Ut(n);break;case 19:var u=(e.flags&128)!==0;if(o=(i&n.childLanes)!==0,o||(Mr(e,n,i,!1),o=(i&n.childLanes)!==0),u){if(o)return Iu(e,n,i);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),T(on,on.current),o)break;return null;case 22:return n.lanes=0,Au(e,n,i,n.pendingProps);case 24:Mt(n,ln,e.memoizedState.cache)}return _t(e,n,i)}function Uu(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Al(e,i)&&(n.flags&128)===0)return un=!1,wm(e,n,i);un=(e.flags&131072)!==0}else un=!1,He&&(n.flags&1048576)!==0&&gs(n,fi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=ur(n.elementType),n.type=e,typeof e=="function")Ma(e)?(o=fr(e,o),n.tag=1,n=Bu(null,n,e,o,i)):(n.tag=0,n=kl(null,n,e,o,i));else{if(e!=null){var u=e.$$typeof;if(u===ge){n.tag=11,n=wu(null,n,e,o,i);break e}else if(u===ne){n.tag=14,n=Ru(null,n,e,o,i);break e}}throw n=xe(e)||e,Error(c(306,n,""))}}return n;case 0:return kl(e,n,n.type,n.pendingProps,i);case 1:return o=n.type,u=fr(o,n.pendingProps),Bu(e,n,o,u,i);case 3:e:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(c(387));o=n.pendingProps;var p=n.memoizedState;u=p.element,Wa(e,n),ki(n,o,null,i);var C=n.memoizedState;if(o=C.cache,Mt(n,ln,o),o!==p.cache&&Pa(n,[ln],i,!0),Ei(),o=C.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:C.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=Mu(e,n,o,i);break e}else if(o!==u){u=Jn(Error(c(424)),n),hi(u),n=Mu(e,n,o,i);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=nt(e.firstChild),bn=n,He=!0,Ot=null,Zn=!0,i=As(n,null,o,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(ar(),o===u){n=_t(e,n,i);break e}_n(e,n,o,i)}n=n.child}return n;case 26:return Ao(e,n),e===null?(i=Wd(n.type,null,n.pendingProps,null))?n.memoizedState=i:He||(i=n.type,e=n.pendingProps,o=Go(le.current).createElement(i),o[xn]=n,o[An]=e,En(o,i,e),hn(o),n.stateNode=o):n.memoizedState=Wd(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ke(n),e===null&&He&&(o=n.stateNode=Gd(n.type,n.pendingProps,le.current),bn=n,Zn=!0,u=Je,Yt(n.type)?(cc=u,Je=nt(o.firstChild)):Je=u),_n(e,n,n.pendingProps.children,i),Ao(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&He&&((u=o=Je)&&(o=tf(o,n.type,n.pendingProps,Zn),o!==null?(n.stateNode=o,bn=n,Je=nt(o.firstChild),Zn=!1,u=!0):u=!1),u||Bt(n)),Ke(n),u=n.type,p=n.pendingProps,C=e!==null?e.memoizedProps:null,o=p.children,rc(u,p)?o=null:C!==null&&rc(u,C)&&(n.flags|=32),n.memoizedState!==null&&(u=tl(e,n,xm,null,null,i),qi._currentValue=u),Ao(e,n),_n(e,n,o,i),n.child;case 6:return e===null&&He&&((e=i=Je)&&(i=rf(i,n.pendingProps,Zn),i!==null?(n.stateNode=i,bn=n,Je=null,e=!0):e=!1),e||Bt(n)),null;case 13:return ju(e,n,i);case 4:return Ce(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=pr(n,null,o,i):_n(e,n,o,i),n.child;case 11:return wu(e,n,n.type,n.pendingProps,i);case 7:return _n(e,n,n.pendingProps,i),n.child;case 8:return _n(e,n,n.pendingProps.children,i),n.child;case 12:return _n(e,n,n.pendingProps.children,i),n.child;case 10:return o=n.pendingProps,Mt(n,n.type,o.value),_n(e,n,o.children,i),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,cr(n),u=yn(u),o=o(u),n.flags|=1,_n(e,n,o,i),n.child;case 14:return Ru(e,n,n.type,n.pendingProps,i);case 15:return Tu(e,n,n.type,n.pendingProps,i);case 19:return Iu(e,n,i);case 31:return Cm(e,n,i);case 22:return Au(e,n,i,n.pendingProps);case 24:return cr(n),o=yn(ln),e===null?(u=Ga(),u===null&&(u=We,p=Fa(),u.pooledCache=p,p.refCount++,p!==null&&(u.pooledCacheLanes|=i),u=p),n.memoizedState={parent:o,cache:u},Qa(n),Mt(n,ln,u)):((e.lanes&i)!==0&&(Wa(e,n),ki(n,null,null,i),Ei()),u=e.memoizedState,p=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Mt(n,ln,o)):(o=p.cache,Mt(n,ln,o),o!==u.cache&&Pa(n,[ln],i,!0))),_n(e,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function Et(e){e.flags|=4}function Dl(e,n,i,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(dd())e.flags|=8192;else throw dr=fo,Ya}else e.flags&=-16777217}function zu(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ep(n))if(dd())e.flags|=8192;else throw dr=fo,Ya}function No(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bc():536870912,e.lanes|=n,Gr|=n)}function Ti(e,n){if(!He)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,o=0;if(n)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=i,n}function Rm(e,n,i){var o=n.pendingProps;switch(Ua(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return i=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),xt(ln),Ee(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Br(n)?Et(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ha())),Xe(n),null;case 26:var u=n.type,p=n.memoizedState;return e===null?(Et(n),p!==null?(Xe(n),zu(n,p)):(Xe(n),Dl(n,u,null,o,i))):p?p!==e.memoizedState?(Et(n),Xe(n),zu(n,p)):(Xe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Et(n),Xe(n),Dl(n,u,e,o,i)),null;case 27:if(kn(n),i=le.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Et(n);else{if(!o){if(n.stateNode===null)throw Error(c(166));return Xe(n),null}e=V.current,Br(n)?bs(n):(e=Gd(u,o,i),n.stateNode=e,Et(n))}return Xe(n),null;case 5:if(kn(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Et(n);else{if(!o){if(n.stateNode===null)throw Error(c(166));return Xe(n),null}if(p=V.current,Br(n))bs(n);else{var C=Go(le.current);switch(p){case 1:p=C.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:p=C.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":p=C.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":p=C.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":p=C.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof o.is=="string"?C.createElement("select",{is:o.is}):C.createElement("select"),o.multiple?p.multiple=!0:o.size&&(p.size=o.size);break;default:p=typeof o.is=="string"?C.createElement(u,{is:o.is}):C.createElement(u)}}p[xn]=n,p[An]=o;e:for(C=n.child;C!==null;){if(C.tag===5||C.tag===6)p.appendChild(C.stateNode);else if(C.tag!==4&&C.tag!==27&&C.child!==null){C.child.return=C,C=C.child;continue}if(C===n)break e;for(;C.sibling===null;){if(C.return===null||C.return===n)break e;C=C.return}C.sibling.return=C.return,C=C.sibling}n.stateNode=p;e:switch(En(p,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Et(n)}}return Xe(n),Dl(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,i),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Et(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(c(166));if(e=le.current,Br(n)){if(e=n.stateNode,i=n.memoizedProps,o=null,u=bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[xn]=n,e=!!(e.nodeValue===i||o!==null&&o.suppressHydrationWarning===!0||jd(e.nodeValue,i)),e||Bt(n,!0)}else e=Go(e).createTextNode(o),e[xn]=n,n.stateNode=e}return Xe(n),null;case 31:if(i=n.memoizedState,e===null||e.memoizedState!==null){if(o=Br(n),i!==null){if(e===null){if(!o)throw Error(c(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[xn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),e=!1}else i=Ha(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(c(558))}return Xe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Br(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(c(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(c(317));u[xn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),u=!1}else u=Ha(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=i,n):(i=o!==null,e=e!==null&&e.memoizedState!==null,i&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),p=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(p=o.memoizedState.cachePool.pool),p!==u&&(o.flags|=2048)),i!==e&&i&&(n.child.flags|=8192),No(n,n.updateQueue),Xe(n),null);case 4:return Ee(),e===null&&Kl(n.stateNode.containerInfo),Xe(n),null;case 10:return xt(n.type),Xe(n),null;case 19:if(N(on),o=n.memoizedState,o===null)return Xe(n),null;if(u=(n.flags&128)!==0,p=o.rendering,p===null)if(u)Ti(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(p=bo(e),p!==null){for(n.flags|=128,Ti(o,!1),e=p.updateQueue,n.updateQueue=e,No(n,e),n.subtreeFlags=0,e=i,i=n.child;i!==null;)ms(i,e),i=i.sibling;return T(on,on.current&1|2),He&&ht(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&en()>Lo&&(n.flags|=128,u=!0,Ti(o,!1),n.lanes=4194304)}else{if(!u)if(e=bo(p),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,No(n,e),Ti(o,!0),o.tail===null&&o.tailMode==="hidden"&&!p.alternate&&!He)return Xe(n),null}else 2*en()-o.renderingStartTime>Lo&&i!==536870912&&(n.flags|=128,u=!0,Ti(o,!1),n.lanes=4194304);o.isBackwards?(p.sibling=n.child,n.child=p):(e=o.last,e!==null?e.sibling=p:n.child=p,o.last=p)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=en(),e.sibling=null,i=on.current,T(on,u?i&1|2:i&1),He&&ht(n,o.treeForkCount),e):(Xe(n),null);case 22:case 23:return $n(n),Za(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(i&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),i=n.updateQueue,i!==null&&No(n,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048),e!==null&&N(sr),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),xt(ln),Xe(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function Tm(e,n){switch(Ua(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return xt(ln),Ee(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kn(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(c(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return N(on),null;case 4:return Ee(),null;case 10:return xt(n.type),null;case 22:case 23:return $n(n),Za(),e!==null&&N(sr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return xt(ln),null;case 25:return null;default:return null}}function Hu(e,n){switch(Ua(n),n.tag){case 3:xt(ln),Ee();break;case 26:case 27:case 5:kn(n);break;case 4:Ee();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:N(on);break;case 10:xt(n.type);break;case 22:case 23:$n(n),Za(),e!==null&&N(sr);break;case 24:xt(ln)}}function Ai(e,n){try{var i=n.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var u=o.next;i=u;do{if((i.tag&e)===e){o=void 0;var p=i.create,C=i.inst;o=p(),C.destroy=o}i=i.next}while(i!==u)}}catch(D){Ve(n,n.return,D)}}function Ht(e,n,i){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&e)===e){var C=o.inst,D=C.destroy;if(D!==void 0){C.destroy=void 0,u=n;var I=i,W=D;try{W()}catch(ae){Ve(u,I,ae)}}}o=o.next}while(o!==p)}}catch(ae){Ve(n,n.return,ae)}}function $u(e){var n=e.updateQueue;if(n!==null){var i=e.stateNode;try{Ns(n,i)}catch(o){Ve(e,e.return,o)}}}function qu(e,n,i){i.props=fr(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(o){Ve(e,n,o)}}function Di(e,n){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof i=="function"?e.refCleanup=i(o):i.current=o}}catch(u){Ve(e,n,u)}}function st(e,n){var i=e.ref,o=e.refCleanup;if(i!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(u){Ve(e,n,u)}else i.current=null}function Pu(e){var n=e.type,i=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&o.focus();break e;case"img":i.src?o.src=i.src:i.srcSet&&(o.srcset=i.srcSet)}}catch(u){Ve(e,e.return,u)}}function Nl(e,n,i){try{var o=e.stateNode;Jm(o,e.type,i,n),o[An]=n}catch(u){Ve(e,e.return,u)}}function Fu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Yt(e.type)||e.tag===4}function Ol(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Yt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bl(e,n,i){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(e),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=pt));else if(o!==4&&(o===27&&Yt(e.type)&&(i=e.stateNode,n=null),e=e.child,e!==null))for(Bl(e,n,i),e=e.sibling;e!==null;)Bl(e,n,i),e=e.sibling}function Oo(e,n,i){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(o!==4&&(o===27&&Yt(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Oo(e,n,i),e=e.sibling;e!==null;)Oo(e,n,i),e=e.sibling}function Vu(e){var n=e.stateNode,i=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,i),n[xn]=e,n[An]=i}catch(p){Ve(e,e.return,p)}}var kt=!1,dn=!1,Ml=!1,Gu=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Am(e,n){if(e=e.containerInfo,nc=Zo,e=is(e),Ra(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var u=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break e}var C=0,D=-1,I=-1,W=0,ae=0,de=e,J=null;n:for(;;){for(var te;de!==i||u!==0&&de.nodeType!==3||(D=C+u),de!==p||o!==0&&de.nodeType!==3||(I=C+o),de.nodeType===3&&(C+=de.nodeValue.length),(te=de.firstChild)!==null;)J=de,de=te;for(;;){if(de===e)break n;if(J===i&&++W===u&&(D=C),J===p&&++ae===o&&(I=C),(te=de.nextSibling)!==null)break;de=J,J=de.parentNode}de=te}i=D===-1||I===-1?null:{start:D,end:I}}else i=null}i=i||{start:0,end:0}}else i=null;for(tc={focusedElem:e,selectionRange:i},Zo=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,p=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)u=e[i],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,i=n,u=p.memoizedProps,p=p.memoizedState,o=i.stateNode;try{var ve=fr(i.type,u);e=o.getSnapshotBeforeUpdate(ve,p),o.__reactInternalSnapshotBeforeUpdate=e}catch(De){Ve(i,i.return,De)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,i=e.nodeType,i===9)oc(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function Yu(e,n,i){var o=i.flags;switch(i.tag){case 0:case 11:case 15:St(e,i),o&4&&Ai(5,i);break;case 1:if(St(e,i),o&4)if(e=i.stateNode,n===null)try{e.componentDidMount()}catch(C){Ve(i,i.return,C)}else{var u=fr(i.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(C){Ve(i,i.return,C)}}o&64&&$u(i),o&512&&Di(i,i.return);break;case 3:if(St(e,i),o&64&&(e=i.updateQueue,e!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Ns(e,n)}catch(C){Ve(i,i.return,C)}}break;case 27:n===null&&o&4&&Vu(i);case 26:case 5:St(e,i),n===null&&o&4&&Pu(i),o&512&&Di(i,i.return);break;case 12:St(e,i);break;case 31:St(e,i),o&4&&Ju(e,i);break;case 13:St(e,i),o&4&&Xu(e,i),o&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=Um.bind(null,i),of(e,i))));break;case 22:if(o=i.memoizedState!==null||kt,!o){n=n!==null&&n.memoizedState!==null||dn,u=kt;var p=dn;kt=o,(dn=n)&&!p?Ct(e,i,(i.subtreeFlags&8772)!==0):St(e,i),kt=u,dn=p}break;case 30:break;default:St(e,i)}}function Qu(e){var n=e.alternate;n!==null&&(e.alternate=null,Qu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ua(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Nn=!1;function vt(e,n,i){for(i=i.child;i!==null;)Wu(e,n,i),i=i.sibling}function Wu(e,n,i){if(Y&&typeof Y.onCommitFiberUnmount=="function")try{Y.onCommitFiberUnmount(j,i)}catch{}switch(i.tag){case 26:dn||st(i,n),vt(e,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:dn||st(i,n);var o=Ze,u=Nn;Yt(i.type)&&(Ze=i.stateNode,Nn=!1),vt(e,n,i),zi(i.stateNode),Ze=o,Nn=u;break;case 5:dn||st(i,n);case 6:if(o=Ze,u=Nn,Ze=null,vt(e,n,i),Ze=o,Nn=u,Ze!==null)if(Nn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(i.stateNode)}catch(p){Ve(i,n,p)}else try{Ze.removeChild(i.stateNode)}catch(p){Ve(i,n,p)}break;case 18:Ze!==null&&(Nn?(e=Ze,$d(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),ei(e)):$d(Ze,i.stateNode));break;case 4:o=Ze,u=Nn,Ze=i.stateNode.containerInfo,Nn=!0,vt(e,n,i),Ze=o,Nn=u;break;case 0:case 11:case 14:case 15:Ht(2,i,n),dn||Ht(4,i,n),vt(e,n,i);break;case 1:dn||(st(i,n),o=i.stateNode,typeof o.componentWillUnmount=="function"&&qu(i,n,o)),vt(e,n,i);break;case 21:vt(e,n,i);break;case 22:dn=(o=dn)||i.memoizedState!==null,vt(e,n,i),dn=o;break;default:vt(e,n,i)}}function Ju(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ei(e)}catch(i){Ve(n,n.return,i)}}}function Xu(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ei(e)}catch(i){Ve(n,n.return,i)}}function Dm(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Gu),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Gu),n;default:throw Error(c(435,e.tag))}}function Bo(e,n){var i=Dm(e);n.forEach(function(o){if(!i.has(o)){i.add(o);var u=zm.bind(null,e,o);o.then(u,u)}})}function On(e,n){var i=n.deletions;if(i!==null)for(var o=0;o<i.length;o++){var u=i[o],p=e,C=n,D=C;e:for(;D!==null;){switch(D.tag){case 27:if(Yt(D.type)){Ze=D.stateNode,Nn=!1;break e}break;case 5:Ze=D.stateNode,Nn=!1;break e;case 3:case 4:Ze=D.stateNode.containerInfo,Nn=!0;break e}D=D.return}if(Ze===null)throw Error(c(160));Wu(p,C,u),Ze=null,Nn=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ku(n,e),n=n.sibling}var ot=null;function Ku(e,n){var i=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:On(n,e),Bn(e),o&4&&(Ht(3,e,e.return),Ai(3,e),Ht(5,e,e.return));break;case 1:On(n,e),Bn(e),o&512&&(dn||i===null||st(i,i.return)),o&64&&kt&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?o:i.concat(o))));break;case 26:var u=ot;if(On(n,e),Bn(e),o&512&&(dn||i===null||st(i,i.return)),o&4){var p=i!==null?i.memoizedState:null;if(o=e.memoizedState,i===null)if(o===null)if(e.stateNode===null){e:{o=e.type,i=e.memoizedProps,u=u.ownerDocument||u;n:switch(o){case"title":p=u.getElementsByTagName("title")[0],(!p||p[ri]||p[xn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=u.createElement(o),u.head.insertBefore(p,u.querySelector("head > title"))),En(p,o,i),p[xn]=e,hn(p),o=p;break e;case"link":var C=Kd("link","href",u).get(o+(i.href||""));if(C){for(var D=0;D<C.length;D++)if(p=C[D],p.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&p.getAttribute("rel")===(i.rel==null?null:i.rel)&&p.getAttribute("title")===(i.title==null?null:i.title)&&p.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){C.splice(D,1);break n}}p=u.createElement(o),En(p,o,i),u.head.appendChild(p);break;case"meta":if(C=Kd("meta","content",u).get(o+(i.content||""))){for(D=0;D<C.length;D++)if(p=C[D],p.getAttribute("content")===(i.content==null?null:""+i.content)&&p.getAttribute("name")===(i.name==null?null:i.name)&&p.getAttribute("property")===(i.property==null?null:i.property)&&p.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&p.getAttribute("charset")===(i.charSet==null?null:i.charSet)){C.splice(D,1);break n}}p=u.createElement(o),En(p,o,i),u.head.appendChild(p);break;default:throw Error(c(468,o))}p[xn]=e,hn(p),o=p}e.stateNode=o}else Zd(u,e.type,e.stateNode);else e.stateNode=Xd(u,o,e.memoizedProps);else p!==o?(p===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):p.count--,o===null?Zd(u,e.type,e.stateNode):Xd(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Nl(e,e.memoizedProps,i.memoizedProps)}break;case 27:On(n,e),Bn(e),o&512&&(dn||i===null||st(i,i.return)),i!==null&&o&4&&Nl(e,e.memoizedProps,i.memoizedProps);break;case 5:if(On(n,e),Bn(e),o&512&&(dn||i===null||st(i,i.return)),e.flags&32){u=e.stateNode;try{vr(u,"")}catch(ve){Ve(e,e.return,ve)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Nl(e,u,i!==null?i.memoizedProps:u)),o&1024&&(Ml=!0);break;case 6:if(On(n,e),Bn(e),o&4){if(e.stateNode===null)throw Error(c(162));o=e.memoizedProps,i=e.stateNode;try{i.nodeValue=o}catch(ve){Ve(e,e.return,ve)}}break;case 3:if(Wo=null,u=ot,ot=Yo(n.containerInfo),On(n,e),ot=u,Bn(e),o&4&&i!==null&&i.memoizedState.isDehydrated)try{ei(n.containerInfo)}catch(ve){Ve(e,e.return,ve)}Ml&&(Ml=!1,Zu(e));break;case 4:o=ot,ot=Yo(e.stateNode.containerInfo),On(n,e),Bn(e),ot=o;break;case 12:On(n,e),Bn(e);break;case 31:On(n,e),Bn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bo(e,o)));break;case 13:On(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(jo=en()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bo(e,o)));break;case 22:u=e.memoizedState!==null;var I=i!==null&&i.memoizedState!==null,W=kt,ae=dn;if(kt=W||u,dn=ae||I,On(n,e),dn=ae,kt=W,Bn(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(i===null||I||kt||dn||hr(e)),i=null,n=e;;){if(n.tag===5||n.tag===26){if(i===null){I=i=n;try{if(p=I.stateNode,u)C=p.style,typeof C.setProperty=="function"?C.setProperty("display","none","important"):C.display="none";else{D=I.stateNode;var de=I.memoizedProps.style,J=de!=null&&de.hasOwnProperty("display")?de.display:null;D.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(ve){Ve(I,I.return,ve)}}}else if(n.tag===6){if(i===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(ve){Ve(I,I.return,ve)}}}else if(n.tag===18){if(i===null){I=n;try{var te=I.stateNode;u?qd(te,!0):qd(I.stateNode,!1)}catch(ve){Ve(I,I.return,ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(i=o.retryQueue,i!==null&&(o.retryQueue=null,Bo(e,i))));break;case 19:On(n,e),Bn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Bo(e,o)));break;case 30:break;case 21:break;default:On(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var i,o=e.return;o!==null;){if(Fu(o)){i=o;break}o=o.return}if(i==null)throw Error(c(160));switch(i.tag){case 27:var u=i.stateNode,p=Ol(e);Oo(e,p,u);break;case 5:var C=i.stateNode;i.flags&32&&(vr(C,""),i.flags&=-33);var D=Ol(e);Oo(e,D,C);break;case 3:case 4:var I=i.stateNode.containerInfo,W=Ol(e);Bl(e,W,I);break;default:throw Error(c(161))}}catch(ae){Ve(e,e.return,ae)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Zu(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function St(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Yu(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ht(4,n,n.return),hr(n);break;case 1:st(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&qu(n,n.return,i),hr(n);break;case 27:zi(n.stateNode);case 26:case 5:st(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function Ct(e,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,p=n,C=p.flags;switch(p.tag){case 0:case 11:case 15:Ct(u,p,i),Ai(4,p);break;case 1:if(Ct(u,p,i),o=p,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(W){Ve(o,o.return,W)}if(o=p,u=o.updateQueue,u!==null){var D=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Ds(I[u],D)}catch(W){Ve(o,o.return,W)}}i&&C&64&&$u(p),Di(p,p.return);break;case 27:Vu(p);case 26:case 5:Ct(u,p,i),i&&o===null&&C&4&&Pu(p),Di(p,p.return);break;case 12:Ct(u,p,i);break;case 31:Ct(u,p,i),i&&C&4&&Ju(u,p);break;case 13:Ct(u,p,i),i&&C&4&&Xu(u,p);break;case 22:p.memoizedState===null&&Ct(u,p,i),Di(p,p.return);break;case 30:break;default:Ct(u,p,i)}n=n.sibling}}function jl(e,n){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&gi(i))}function Ll(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&gi(e))}function at(e,n,i,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ed(e,n,i,o),n=n.sibling}function ed(e,n,i,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:at(e,n,i,o),u&2048&&Ai(9,n);break;case 1:at(e,n,i,o);break;case 3:at(e,n,i,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&gi(e)));break;case 12:if(u&2048){at(e,n,i,o),e=n.stateNode;try{var p=n.memoizedProps,C=p.id,D=p.onPostCommit;typeof D=="function"&&D(C,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ve(n,n.return,I)}}else at(e,n,i,o);break;case 31:at(e,n,i,o);break;case 13:at(e,n,i,o);break;case 23:break;case 22:p=n.stateNode,C=n.alternate,n.memoizedState!==null?p._visibility&2?at(e,n,i,o):Ni(e,n):p._visibility&2?at(e,n,i,o):(p._visibility|=2,Pr(e,n,i,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&jl(C,n);break;case 24:at(e,n,i,o),u&2048&&Ll(n.alternate,n);break;default:at(e,n,i,o)}}function Pr(e,n,i,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=e,C=n,D=i,I=o,W=C.flags;switch(C.tag){case 0:case 11:case 15:Pr(p,C,D,I,u),Ai(8,C);break;case 23:break;case 22:var ae=C.stateNode;C.memoizedState!==null?ae._visibility&2?Pr(p,C,D,I,u):Ni(p,C):(ae._visibility|=2,Pr(p,C,D,I,u)),u&&W&2048&&jl(C.alternate,C);break;case 24:Pr(p,C,D,I,u),u&&W&2048&&Ll(C.alternate,C);break;default:Pr(p,C,D,I,u)}n=n.sibling}}function Ni(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=e,o=n,u=o.flags;switch(o.tag){case 22:Ni(i,o),u&2048&&jl(o.alternate,o);break;case 24:Ni(i,o),u&2048&&Ll(o.alternate,o);break;default:Ni(i,o)}n=n.sibling}}var Oi=8192;function Fr(e,n,i){if(e.subtreeFlags&Oi)for(e=e.child;e!==null;)nd(e,n,i),e=e.sibling}function nd(e,n,i){switch(e.tag){case 26:Fr(e,n,i),e.flags&Oi&&e.memoizedState!==null&&xf(i,ot,e.memoizedState,e.memoizedProps);break;case 5:Fr(e,n,i);break;case 3:case 4:var o=ot;ot=Yo(e.stateNode.containerInfo),Fr(e,n,i),ot=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Oi,Oi=16777216,Fr(e,n,i),Oi=o):Fr(e,n,i));break;default:Fr(e,n,i)}}function td(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Bi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];gn=o,id(o,e)}td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rd(e),e=e.sibling}function rd(e){switch(e.tag){case 0:case 11:case 15:Bi(e),e.flags&2048&&Ht(9,e,e.return);break;case 3:Bi(e);break;case 12:Bi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Mo(e)):Bi(e);break;default:Bi(e)}}function Mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];gn=o,id(o,e)}td(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ht(8,n,n.return),Mo(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Mo(n));break;default:Mo(n)}e=e.sibling}}function id(e,n){for(;gn!==null;){var i=gn;switch(i.tag){case 0:case 11:case 15:Ht(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var o=i.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:gi(i.memoizedState.cache)}if(o=i.child,o!==null)o.return=i,gn=o;else e:for(i=e;gn!==null;){o=gn;var u=o.sibling,p=o.return;if(Qu(o),o===i){gn=null;break e}if(u!==null){u.return=p,gn=u;break e}gn=p}}}var Nm={getCacheForType:function(e){var n=yn(ln),i=n.data.get(e);return i===void 0&&(i=e(),n.data.set(e,i)),i},cacheSignal:function(){return yn(ln).controller.signal}},Om=typeof WeakMap=="function"?WeakMap:Map,Pe=0,We=null,Le=null,Ue=0,Fe=0,qn=null,$t=!1,Vr=!1,Il=!1,wt=0,tn=0,qt=0,gr=0,Ul=0,Pn=0,Gr=0,Mi=null,Mn=null,zl=!1,jo=0,od=0,Lo=1/0,Io=null,Pt=null,fn=0,Ft=null,Yr=null,Rt=0,Hl=0,$l=null,ad=null,ji=0,ql=null;function Fn(){return(Pe&2)!==0&&Ue!==0?Ue&-Ue:F.T!==null?Ql():kc()}function ld(){if(Pn===0)if((Ue&536870912)===0||He){var e=Oe;Oe<<=1,(Oe&3932160)===0&&(Oe=262144),Pn=e}else Pn=536870912;return e=Hn.current,e!==null&&(e.flags|=32),Pn}function jn(e,n,i){(e===We&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),Vt(e,Ue,Pn,!1)),ti(e,i),((Pe&2)===0||e!==We)&&(e===We&&((Pe&2)===0&&(gr|=i),tn===4&&Vt(e,Ue,Pn,!1)),ut(e))}function cd(e,n,i){if((Pe&6)!==0)throw Error(c(327));var o=!i&&(n&127)===0&&(n&e.expiredLanes)===0||ni(e,n),u=o?jm(e,n):Fl(e,n,!0),p=o;do{if(u===0){Vr&&!o&&Vt(e,n,0,!1);break}else{if(i=e.current.alternate,p&&!Bm(i)){u=Fl(e,n,!1),p=!1;continue}if(u===2){if(p=n,e.errorRecoveryDisabledLanes&p)var C=0;else C=e.pendingLanes&-536870913,C=C!==0?C:C&536870912?536870912:0;if(C!==0){n=C;e:{var D=e;u=Mi;var I=D.current.memoizedState.isDehydrated;if(I&&(Qr(D,C).flags|=256),C=Fl(D,C,!1),C!==2){if(Il&&!I){D.errorRecoveryDisabledLanes|=p,gr|=p,u=4;break e}p=Mn,Mn=u,p!==null&&(Mn===null?Mn=p:Mn.push.apply(Mn,p))}u=C}if(p=!1,u!==2)continue}}if(u===1){Qr(e,0),Vt(e,n,0,!0);break}e:{switch(o=e,p=u,p){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:Vt(o,n,Pn,!$t);break e;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(u=jo+300-en(),10<u)){if(Vt(o,n,Pn,!$t),Gi(o,0,!0)!==0)break e;Rt=n,o.timeoutHandle=zd(sd.bind(null,o,i,Mn,Io,zl,n,Pn,gr,Gr,$t,p,"Throttled",-0,0),u);break e}sd(o,i,Mn,Io,zl,n,Pn,gr,Gr,$t,p,null,-0,0)}}break}while(!0);ut(e)}function sd(e,n,i,o,u,p,C,D,I,W,ae,de,J,te){if(e.timeoutHandle=-1,de=n.subtreeFlags,de&8192||(de&16785408)===16785408){de={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pt},nd(n,p,de);var ve=(p&62914560)===p?jo-en():(p&4194048)===p?od-en():0;if(ve=bf(de,ve),ve!==null){Rt=p,e.cancelPendingCommit=ve(xd.bind(null,e,n,p,i,o,u,C,D,I,ae,de,null,J,te)),Vt(e,p,C,!W);return}}xd(e,n,p,i,o,u,C,D,I)}function Bm(e){for(var n=e;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var o=0;o<i.length;o++){var u=i[o],p=u.getSnapshot;u=u.value;try{if(!Un(p(),u))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vt(e,n,i,o){n&=~Ul,n&=~gr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var p=31-G(u),C=1<<p;o[p]=-1,u&=~C}i!==0&&yc(e,i,n)}function Uo(){return(Pe&6)===0?(Li(0),!1):!0}function Pl(){if(Le!==null){if(Fe===0)var e=Le.return;else e=Le,gt=lr=null,ol(e),Ur=null,bi=0,e=Le;for(;e!==null;)Hu(e.alternate,e),e=e.return;Le=null}}function Qr(e,n){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Zm(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Rt=0,Pl(),We=e,Le=i=ft(e.current,null),Ue=n,Fe=0,qn=null,$t=!1,Vr=ni(e,n),Il=!1,Gr=Pn=Ul=gr=qt=tn=0,Mn=Mi=null,zl=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-G(o),p=1<<u;n|=e[u],o&=~p}return wt=n,io(),i}function ud(e,n){Be=null,F.H=wi,n===Ir||n===mo?(n=ws(),Fe=3):n===Ya?(n=ws(),Fe=4):Fe=n===El?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,Le===null&&(tn=1,Ro(e,Jn(n,e.current)))}function dd(){var e=Hn.current;return e===null?!0:(Ue&4194048)===Ue?et===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?e===et:!1}function pd(){var e=F.H;return F.H=wi,e===null?wi:e}function md(){var e=F.A;return F.A=Nm,e}function zo(){tn=4,$t||(Ue&4194048)!==Ue&&Hn.current!==null||(Vr=!0),(qt&134217727)===0&&(gr&134217727)===0||We===null||Vt(We,Ue,Pn,!1)}function Fl(e,n,i){var o=Pe;Pe|=2;var u=pd(),p=md();(We!==e||Ue!==n)&&(Io=null,Qr(e,n)),n=!1;var C=tn;e:do try{if(Fe!==0&&Le!==null){var D=Le,I=qn;switch(Fe){case 8:Pl(),C=6;break e;case 3:case 2:case 9:case 6:Hn.current===null&&(n=!0);var W=Fe;if(Fe=0,qn=null,Wr(e,D,I,W),i&&Vr){C=0;break e}break;default:W=Fe,Fe=0,qn=null,Wr(e,D,I,W)}}Mm(),C=tn;break}catch(ae){ud(e,ae)}while(!0);return n&&e.shellSuspendCounter++,gt=lr=null,Pe=o,F.H=u,F.A=p,Le===null&&(We=null,Ue=0,io()),C}function Mm(){for(;Le!==null;)fd(Le)}function jm(e,n){var i=Pe;Pe|=2;var o=pd(),u=md();We!==e||Ue!==n?(Io=null,Lo=en()+500,Qr(e,n)):Vr=ni(e,n);e:do try{if(Fe!==0&&Le!==null){n=Le;var p=qn;n:switch(Fe){case 1:Fe=0,qn=null,Wr(e,n,p,1);break;case 2:case 9:if(Ss(p)){Fe=0,qn=null,hd(n);break}n=function(){Fe!==2&&Fe!==9||We!==e||(Fe=7),ut(e)},p.then(n,n);break e;case 3:Fe=7;break e;case 4:Fe=5;break e;case 7:Ss(p)?(Fe=0,qn=null,hd(n)):(Fe=0,qn=null,Wr(e,n,p,7));break;case 5:var C=null;switch(Le.tag){case 26:C=Le.memoizedState;case 5:case 27:var D=Le;if(C?ep(C):D.stateNode.complete){Fe=0,qn=null;var I=D.sibling;if(I!==null)Le=I;else{var W=D.return;W!==null?(Le=W,Ho(W)):Le=null}break n}}Fe=0,qn=null,Wr(e,n,p,5);break;case 6:Fe=0,qn=null,Wr(e,n,p,6);break;case 8:Pl(),tn=6;break e;default:throw Error(c(462))}}Lm();break}catch(ae){ud(e,ae)}while(!0);return gt=lr=null,F.H=o,F.A=u,Pe=i,Le!==null?0:(We=null,Ue=0,io(),tn)}function Lm(){for(;Le!==null&&!mn();)fd(Le)}function fd(e){var n=Uu(e.alternate,e,wt);e.memoizedProps=e.pendingProps,n===null?Ho(e):Le=n}function hd(e){var n=e,i=n.alternate;switch(n.tag){case 15:case 0:n=Ou(i,n,n.pendingProps,n.type,void 0,Ue);break;case 11:n=Ou(i,n,n.pendingProps,n.type.render,n.ref,Ue);break;case 5:ol(n);default:Hu(i,n),n=Le=ms(n,wt),n=Uu(i,n,wt)}e.memoizedProps=e.pendingProps,n===null?Ho(e):Le=n}function Wr(e,n,i,o){gt=lr=null,ol(n),Ur=null,bi=0;var u=n.return;try{if(Sm(e,u,n,i,Ue)){tn=1,Ro(e,Jn(i,e.current)),Le=null;return}}catch(p){if(u!==null)throw Le=u,p;tn=1,Ro(e,Jn(i,e.current)),Le=null;return}n.flags&32768?(He||o===1?e=!0:Vr||(Ue&536870912)!==0?e=!1:($t=e=!0,(o===2||o===9||o===3||o===6)&&(o=Hn.current,o!==null&&o.tag===13&&(o.flags|=16384))),gd(n,e)):Ho(n)}function Ho(e){var n=e;do{if((n.flags&32768)!==0){gd(n,$t);return}e=n.return;var i=Rm(n.alternate,n,wt);if(i!==null){Le=i;return}if(n=n.sibling,n!==null){Le=n;return}Le=n=e}while(n!==null);tn===0&&(tn=5)}function gd(e,n){do{var i=Tm(e.alternate,e);if(i!==null){i.flags&=32767,Le=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(e=e.sibling,e!==null)){Le=e;return}Le=e=i}while(e!==null);tn=6,Le=null}function xd(e,n,i,o,u,p,C,D,I){e.cancelPendingCommit=null;do $o();while(fn!==0);if((Pe&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(p=n.lanes|n.childLanes,p|=Oa,hp(e,i,p,C,D,I),e===We&&(Le=We=null,Ue=0),Yr=n,Ft=e,Rt=i,Hl=p,$l=u,ad=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hm(g,function(){return kd(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=pe.p,pe.p=2,C=Pe,Pe|=4;try{Am(e,n,i)}finally{Pe=C,pe.p=u,F.T=o}}fn=1,bd(),yd(),_d()}}function bd(){if(fn===1){fn=0;var e=Ft,n=Yr,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=F.T,F.T=null;var o=pe.p;pe.p=2;var u=Pe;Pe|=4;try{Ku(n,e);var p=tc,C=is(e.containerInfo),D=p.focusedElem,I=p.selectionRange;if(C!==D&&D&&D.ownerDocument&&rs(D.ownerDocument.documentElement,D)){if(I!==null&&Ra(D)){var W=I.start,ae=I.end;if(ae===void 0&&(ae=W),"selectionStart"in D)D.selectionStart=W,D.selectionEnd=Math.min(ae,D.value.length);else{var de=D.ownerDocument||document,J=de&&de.defaultView||window;if(J.getSelection){var te=J.getSelection(),ve=D.textContent.length,De=Math.min(I.start,ve),Qe=I.end===void 0?De:Math.min(I.end,ve);!te.extend&&De>Qe&&(C=Qe,Qe=De,De=C);var P=ts(D,De),H=ts(D,Qe);if(P&&H&&(te.rangeCount!==1||te.anchorNode!==P.node||te.anchorOffset!==P.offset||te.focusNode!==H.node||te.focusOffset!==H.offset)){var Q=de.createRange();Q.setStart(P.node,P.offset),te.removeAllRanges(),De>Qe?(te.addRange(Q),te.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),te.addRange(Q))}}}}for(de=[],te=D;te=te.parentNode;)te.nodeType===1&&de.push({element:te,left:te.scrollLeft,top:te.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<de.length;D++){var se=de[D];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}Zo=!!nc,tc=nc=null}finally{Pe=u,pe.p=o,F.T=i}}e.current=n,fn=2}}function yd(){if(fn===2){fn=0;var e=Ft,n=Yr,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=F.T,F.T=null;var o=pe.p;pe.p=2;var u=Pe;Pe|=4;try{Yu(e,n.alternate,n)}finally{Pe=u,pe.p=o,F.T=i}}fn=3}}function _d(){if(fn===4||fn===3){fn=0,rt();var e=Ft,n=Yr,i=Rt,o=ad;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,Yr=Ft=null,Ed(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Pt=null),ca(i),n=n.stateNode,Y&&typeof Y.onCommitFiberRoot=="function")try{Y.onCommitFiberRoot(j,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=pe.p,pe.p=2,F.T=null;try{for(var p=e.onRecoverableError,C=0;C<o.length;C++){var D=o[C];p(D.value,{componentStack:D.stack})}}finally{F.T=n,pe.p=u}}(Rt&3)!==0&&$o(),ut(e),u=e.pendingLanes,(i&261930)!==0&&(u&42)!==0?e===ql?ji++:(ji=0,ql=e):ji=0,Li(0)}}function Ed(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,gi(n)))}function $o(){return bd(),yd(),_d(),kd()}function kd(){if(fn!==5)return!1;var e=Ft,n=Hl;Hl=0;var i=ca(Rt),o=F.T,u=pe.p;try{pe.p=32>i?32:i,F.T=null,i=$l,$l=null;var p=Ft,C=Rt;if(fn=0,Yr=Ft=null,Rt=0,(Pe&6)!==0)throw Error(c(331));var D=Pe;if(Pe|=4,rd(p.current),ed(p,p.current,C,i),Pe=D,Li(0,!1),Y&&typeof Y.onPostCommitFiberRoot=="function")try{Y.onPostCommitFiberRoot(j,p)}catch{}return!0}finally{pe.p=u,F.T=o,Ed(e,n)}}function vd(e,n,i){n=Jn(i,n),n=_l(e.stateNode,n,2),e=It(e,n,2),e!==null&&(ti(e,2),ut(e))}function Ve(e,n,i){if(e.tag===3)vd(e,e,i);else for(;n!==null;){if(n.tag===3){vd(n,e,i);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pt===null||!Pt.has(o))){e=Jn(i,e),i=Su(2),o=It(n,i,2),o!==null&&(Cu(i,o,n,e),ti(o,2),ut(o));break}}n=n.return}}function Vl(e,n,i){var o=e.pingCache;if(o===null){o=e.pingCache=new Om;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(i)||(Il=!0,u.add(i),e=Im.bind(null,e,n,i),n.then(e,e))}function Im(e,n,i){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,We===e&&(Ue&i)===i&&(tn===4||tn===3&&(Ue&62914560)===Ue&&300>en()-jo?(Pe&2)===0&&Qr(e,0):Ul|=i,Gr===Ue&&(Gr=0)),ut(e)}function Sd(e,n){n===0&&(n=bc()),e=ir(e,n),e!==null&&(ti(e,n),ut(e))}function Um(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Sd(e,i)}function zm(e,n){var i=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(c(314))}o!==null&&o.delete(n),Sd(e,i)}function Hm(e,n){return Tn(e,n)}var qo=null,Jr=null,Gl=!1,Po=!1,Yl=!1,Gt=0;function ut(e){e!==Jr&&e.next===null&&(Jr===null?qo=Jr=e:Jr=Jr.next=e),Po=!0,Gl||(Gl=!0,qm())}function Li(e,n){if(!Yl&&Po){Yl=!0;do for(var i=!1,o=qo;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var p=0;else{var C=o.suspendedLanes,D=o.pingedLanes;p=(1<<31-G(42|e)+1)-1,p&=u&~(C&~D),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(i=!0,Td(o,p))}else p=Ue,p=Gi(o,o===We?p:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(p&3)===0||ni(o,p)||(i=!0,Td(o,p));o=o.next}while(i);Yl=!1}}function $m(){Cd()}function Cd(){Po=Gl=!1;var e=0;Gt!==0&&Km()&&(e=Gt);for(var n=en(),i=null,o=qo;o!==null;){var u=o.next,p=wd(o,n);p===0?(o.next=null,i===null?qo=u:i.next=u,u===null&&(Jr=i)):(i=o,(e!==0||(p&3)!==0)&&(Po=!0)),o=u}fn!==0&&fn!==5||Li(e),Gt!==0&&(Gt=0)}function wd(e,n){for(var i=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var C=31-G(p),D=1<<C,I=u[C];I===-1?((D&i)===0||(D&o)!==0)&&(u[C]=fp(D,n)):I<=n&&(e.expiredLanes|=D),p&=~D}if(n=We,i=Ue,i=Gi(e,e===n?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,i===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&wn(o),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||ni(e,i)){if(n=i&-i,n===e.callbackPriority)return n;switch(o!==null&&wn(o),ca(i)){case 2:case 8:i=S;break;case 32:i=g;break;case 268435456:i=_;break;default:i=g}return o=Rd.bind(null,e),i=Tn(i,o),e.callbackPriority=n,e.callbackNode=i,n}return o!==null&&o!==null&&wn(o),e.callbackPriority=2,e.callbackNode=null,2}function Rd(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if($o()&&e.callbackNode!==i)return null;var o=Ue;return o=Gi(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(cd(e,o,n),wd(e,en()),e.callbackNode!=null&&e.callbackNode===i?Rd.bind(null,e):null)}function Td(e,n){if($o())return null;cd(e,n,!0)}function qm(){ef(function(){(Pe&6)!==0?Tn(M,$m):Cd()})}function Ql(){if(Gt===0){var e=jr;e===0&&(e=je,je<<=1,(je&261888)===0&&(je=256)),Gt=e}return Gt}function Ad(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ji(""+e)}function Dd(e,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,e.id&&i.setAttribute("form",e.id),n.parentNode.insertBefore(i,n),e=new FormData(e),i.parentNode.removeChild(i),e}function Pm(e,n,i,o,u){if(n==="submit"&&i&&i.stateNode===u){var p=Ad((u[An]||null).action),C=o.submitter;C&&(n=(n=C[An]||null)?Ad(n.formAction):C.getAttribute("formAction"),n!==null&&(p=n,C=null));var D=new eo("action","action",null,o,u);e.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Gt!==0){var I=C?Dd(u,C):new FormData(u);fl(i,{pending:!0,data:I,method:u.method,action:p},null,I)}}else typeof p=="function"&&(D.preventDefault(),I=C?Dd(u,C):new FormData(u),fl(i,{pending:!0,data:I,method:u.method,action:p},p,I))},currentTarget:u}]})}}for(var Wl=0;Wl<Na.length;Wl++){var Jl=Na[Wl],Fm=Jl.toLowerCase(),Vm=Jl[0].toUpperCase()+Jl.slice(1);it(Fm,"on"+Vm)}it(ls,"onAnimationEnd"),it(cs,"onAnimationIteration"),it(ss,"onAnimationStart"),it("dblclick","onDoubleClick"),it("focusin","onFocus"),it("focusout","onBlur"),it(lm,"onTransitionRun"),it(cm,"onTransitionStart"),it(sm,"onTransitionCancel"),it(us,"onTransitionEnd"),Er("onMouseEnter",["mouseout","mouseover"]),Er("onMouseLeave",["mouseout","mouseover"]),Er("onPointerEnter",["pointerout","pointerover"]),Er("onPointerLeave",["pointerout","pointerover"]),er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),er("onBeforeInput",["compositionend","keypress","textInput","paste"]),er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ii));function Nd(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var o=e[i],u=o.event;o=o.listeners;e:{var p=void 0;if(n)for(var C=o.length-1;0<=C;C--){var D=o[C],I=D.instance,W=D.currentTarget;if(D=D.listener,I!==p&&u.isPropagationStopped())break e;p=D,u.currentTarget=W;try{p(u)}catch(ae){ro(ae)}u.currentTarget=null,p=I}else for(C=0;C<o.length;C++){if(D=o[C],I=D.instance,W=D.currentTarget,D=D.listener,I!==p&&u.isPropagationStopped())break e;p=D,u.currentTarget=W;try{p(u)}catch(ae){ro(ae)}u.currentTarget=null,p=I}}}}function Ie(e,n){var i=n[sa];i===void 0&&(i=n[sa]=new Set);var o=e+"__bubble";i.has(o)||(Od(n,e,2,!1),i.add(o))}function Xl(e,n,i){var o=0;n&&(o|=4),Od(i,e,o,n)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Kl(e){if(!e[Fo]){e[Fo]=!0,Cc.forEach(function(i){i!=="selectionchange"&&(Gm.has(i)||Xl(i,!1,e),Xl(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fo]||(n[Fo]=!0,Xl("selectionchange",!1,n))}}function Od(e,n,i,o){switch(lp(n)){case 2:var u=Ef;break;case 8:u=kf;break;default:u=mc}i=u.bind(null,n,i,e),u=void 0,!ba||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,i,{capture:!0,passive:u}):e.addEventListener(n,i,!0):u!==void 0?e.addEventListener(n,i,{passive:u}):e.addEventListener(n,i,!1)}function Zl(e,n,i,o,u){var p=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var C=o.tag;if(C===3||C===4){var D=o.stateNode.containerInfo;if(D===u)break;if(C===4)for(C=o.return;C!==null;){var I=C.tag;if((I===3||I===4)&&C.stateNode.containerInfo===u)return;C=C.return}for(;D!==null;){if(C=br(D),C===null)return;if(I=C.tag,I===5||I===6||I===26||I===27){o=p=C;continue e}D=D.parentNode}}o=o.return}Ic(function(){var W=p,ae=ga(i),de=[];e:{var J=ds.get(e);if(J!==void 0){var te=eo,ve=e;switch(e){case"keypress":if(Ki(i)===0)break e;case"keydown":case"keyup":te=zp;break;case"focusin":ve="focus",te=ka;break;case"focusout":ve="blur",te=ka;break;case"beforeblur":case"afterblur":te=ka;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=qp;break;case ls:case cs:case ss:te=Dp;break;case us:te=Fp;break;case"scroll":case"scrollend":te=Cp;break;case"wheel":te=Gp;break;case"copy":case"cut":case"paste":te=Op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=qc;break;case"toggle":case"beforetoggle":te=Qp}var De=(n&4)!==0,Qe=!De&&(e==="scroll"||e==="scrollend"),P=De?J!==null?J+"Capture":null:J;De=[];for(var H=W,Q;H!==null;){var se=H;if(Q=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||Q===null||P===null||(se=oi(H,P),se!=null&&De.push(Ui(H,se,Q))),Qe)break;H=H.return}0<De.length&&(J=new te(J,ve,null,i,ae),de.push({event:J,listeners:De}))}}if((n&7)===0){e:{if(J=e==="mouseover"||e==="pointerover",te=e==="mouseout"||e==="pointerout",J&&i!==ha&&(ve=i.relatedTarget||i.fromElement)&&(br(ve)||ve[xr]))break e;if((te||J)&&(J=ae.window===ae?ae:(J=ae.ownerDocument)?J.defaultView||J.parentWindow:window,te?(ve=i.relatedTarget||i.toElement,te=W,ve=ve?br(ve):null,ve!==null&&(Qe=d(ve),De=ve.tag,ve!==Qe||De!==5&&De!==27&&De!==6)&&(ve=null)):(te=null,ve=W),te!==ve)){if(De=Hc,se="onMouseLeave",P="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(De=qc,se="onPointerLeave",P="onPointerEnter",H="pointer"),Qe=te==null?J:ii(te),Q=ve==null?J:ii(ve),J=new De(se,H+"leave",te,i,ae),J.target=Qe,J.relatedTarget=Q,se=null,br(ae)===W&&(De=new De(P,H+"enter",ve,i,ae),De.target=Q,De.relatedTarget=Qe,se=De),Qe=se,te&&ve)n:{for(De=Ym,P=te,H=ve,Q=0,se=P;se;se=De(se))Q++;se=0;for(var we=H;we;we=De(we))se++;for(;0<Q-se;)P=De(P),Q--;for(;0<se-Q;)H=De(H),se--;for(;Q--;){if(P===H||H!==null&&P===H.alternate){De=P;break n}P=De(P),H=De(H)}De=null}else De=null;te!==null&&Bd(de,J,te,De,!1),ve!==null&&Qe!==null&&Bd(de,Qe,ve,De,!0)}}e:{if(J=W?ii(W):window,te=J.nodeName&&J.nodeName.toLowerCase(),te==="select"||te==="input"&&J.type==="file")var $e=Jc;else if(Qc(J))if(Xc)$e=im;else{$e=tm;var Se=nm}else te=J.nodeName,!te||te.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?W&&fa(W.elementType)&&($e=Jc):$e=rm;if($e&&($e=$e(e,W))){Wc(de,$e,i,ae);break e}Se&&Se(e,J,W),e==="focusout"&&W&&J.type==="number"&&W.memoizedProps.value!=null&&ma(J,"number",J.value)}switch(Se=W?ii(W):window,e){case"focusin":(Qc(Se)||Se.contentEditable==="true")&&(Rr=Se,Ta=W,mi=null);break;case"focusout":mi=Ta=Rr=null;break;case"mousedown":Aa=!0;break;case"contextmenu":case"mouseup":case"dragend":Aa=!1,os(de,i,ae);break;case"selectionchange":if(am)break;case"keydown":case"keyup":os(de,i,ae)}var Me;if(Sa)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else wr?Gc(e,i)&&(ze="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ze="onCompositionStart");ze&&(Pc&&i.locale!=="ko"&&(wr||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&wr&&(Me=Uc()):(Dt=ae,ya="value"in Dt?Dt.value:Dt.textContent,wr=!0)),Se=Vo(W,ze),0<Se.length&&(ze=new $c(ze,e,null,i,ae),de.push({event:ze,listeners:Se}),Me?ze.data=Me:(Me=Yc(i),Me!==null&&(ze.data=Me)))),(Me=Jp?Xp(e,i):Kp(e,i))&&(ze=Vo(W,"onBeforeInput"),0<ze.length&&(Se=new $c("onBeforeInput","beforeinput",null,i,ae),de.push({event:Se,listeners:ze}),Se.data=Me)),Pm(de,e,W,i,ae)}Nd(de,n)})}function Ui(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Vo(e,n){for(var i=n+"Capture",o=[];e!==null;){var u=e,p=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||p===null||(u=oi(e,i),u!=null&&o.unshift(Ui(e,u,p)),u=oi(e,n),u!=null&&o.push(Ui(e,u,p))),e.tag===3)return o;e=e.return}return[]}function Ym(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bd(e,n,i,o,u){for(var p=n._reactName,C=[];i!==null&&i!==o;){var D=i,I=D.alternate,W=D.stateNode;if(D=D.tag,I!==null&&I===o)break;D!==5&&D!==26&&D!==27||W===null||(I=W,u?(W=oi(i,p),W!=null&&C.unshift(Ui(i,W,I))):u||(W=oi(i,p),W!=null&&C.push(Ui(i,W,I)))),i=i.return}C.length!==0&&e.push({event:n,listeners:C})}var Qm=/\r\n?/g,Wm=/\u0000|\uFFFD/g;function Md(e){return(typeof e=="string"?e:""+e).replace(Qm,`
`).replace(Wm,"")}function jd(e,n){return n=Md(n),Md(e)===n}function Ye(e,n,i,o,u,p){switch(i){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||vr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&vr(e,""+o);break;case"className":Qi(e,"class",o);break;case"tabIndex":Qi(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Qi(e,i,o);break;case"style":jc(e,o,p);break;case"data":if(n!=="object"){Qi(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||i!=="href")){e.removeAttribute(i);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(i);break}o=Ji(""+o),e.setAttribute(i,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(i==="formAction"?(n!=="input"&&Ye(e,n,"name",u.name,u,null),Ye(e,n,"formEncType",u.formEncType,u,null),Ye(e,n,"formMethod",u.formMethod,u,null),Ye(e,n,"formTarget",u.formTarget,u,null)):(Ye(e,n,"encType",u.encType,u,null),Ye(e,n,"method",u.method,u,null),Ye(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(i);break}o=Ji(""+o),e.setAttribute(i,o);break;case"onClick":o!=null&&(e.onclick=pt);break;case"onScroll":o!=null&&Ie("scroll",e);break;case"onScrollEnd":o!=null&&Ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(i=o.__html,i!=null){if(u.children!=null)throw Error(c(60));e.innerHTML=i}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}i=Ji(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(i,""+o):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":o===!0?e.setAttribute(i,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(i,o):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(i,o):e.removeAttribute(i);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(i):e.setAttribute(i,o);break;case"popover":Ie("beforetoggle",e),Ie("toggle",e),Yi(e,"popover",o);break;case"xlinkActuate":dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":dt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":dt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":dt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":dt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Yi(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=vp.get(i)||i,Yi(e,i,o))}}function ec(e,n,i,o,u,p){switch(i){case"style":jc(e,o,p);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(i=o.__html,i!=null){if(u.children!=null)throw Error(c(60));e.innerHTML=i}}break;case"children":typeof o=="string"?vr(e,o):(typeof o=="number"||typeof o=="bigint")&&vr(e,""+o);break;case"onScroll":o!=null&&Ie("scroll",e);break;case"onScrollEnd":o!=null&&Ie("scrollend",e);break;case"onClick":o!=null&&(e.onclick=pt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wc.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(u=i.endsWith("Capture"),n=i.slice(2,u?i.length-7:void 0),p=e[An]||null,p=p!=null?p[i]:null,typeof p=="function"&&e.removeEventListener(n,p,u),typeof o=="function")){typeof p!="function"&&p!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(n,o,u);break e}i in e?e[i]=o:o===!0?e.setAttribute(i,""):Yi(e,i,o)}}}function En(e,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",e),Ie("load",e);var o=!1,u=!1,p;for(p in i)if(i.hasOwnProperty(p)){var C=i[p];if(C!=null)switch(p){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:Ye(e,n,p,C,i,null)}}u&&Ye(e,n,"srcSet",i.srcSet,i,null),o&&Ye(e,n,"src",i.src,i,null);return;case"input":Ie("invalid",e);var D=p=C=u=null,I=null,W=null;for(o in i)if(i.hasOwnProperty(o)){var ae=i[o];if(ae!=null)switch(o){case"name":u=ae;break;case"type":C=ae;break;case"checked":I=ae;break;case"defaultChecked":W=ae;break;case"value":p=ae;break;case"defaultValue":D=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(c(137,n));break;default:Ye(e,n,o,ae,i,null)}}Nc(e,p,D,I,W,C,u,!1);return;case"select":Ie("invalid",e),o=C=p=null;for(u in i)if(i.hasOwnProperty(u)&&(D=i[u],D!=null))switch(u){case"value":p=D;break;case"defaultValue":C=D;break;case"multiple":o=D;default:Ye(e,n,u,D,i,null)}n=p,i=C,e.multiple=!!o,n!=null?kr(e,!!o,n,!1):i!=null&&kr(e,!!o,i,!0);return;case"textarea":Ie("invalid",e),p=u=o=null;for(C in i)if(i.hasOwnProperty(C)&&(D=i[C],D!=null))switch(C){case"value":o=D;break;case"defaultValue":u=D;break;case"children":p=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(91));break;default:Ye(e,n,C,D,i,null)}Bc(e,o,u,p);return;case"option":for(I in i)if(i.hasOwnProperty(I)&&(o=i[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ye(e,n,I,o,i,null)}return;case"dialog":Ie("beforetoggle",e),Ie("toggle",e),Ie("cancel",e),Ie("close",e);break;case"iframe":case"object":Ie("load",e);break;case"video":case"audio":for(o=0;o<Ii.length;o++)Ie(Ii[o],e);break;case"image":Ie("error",e),Ie("load",e);break;case"details":Ie("toggle",e);break;case"embed":case"source":case"link":Ie("error",e),Ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in i)if(i.hasOwnProperty(W)&&(o=i[W],o!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:Ye(e,n,W,o,i,null)}return;default:if(fa(n)){for(ae in i)i.hasOwnProperty(ae)&&(o=i[ae],o!==void 0&&ec(e,n,ae,o,i,void 0));return}}for(D in i)i.hasOwnProperty(D)&&(o=i[D],o!=null&&Ye(e,n,D,o,i,null))}function Jm(e,n,i,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,p=null,C=null,D=null,I=null,W=null,ae=null;for(te in i){var de=i[te];if(i.hasOwnProperty(te)&&de!=null)switch(te){case"checked":break;case"value":break;case"defaultValue":I=de;default:o.hasOwnProperty(te)||Ye(e,n,te,null,o,de)}}for(var J in o){var te=o[J];if(de=i[J],o.hasOwnProperty(J)&&(te!=null||de!=null))switch(J){case"type":p=te;break;case"name":u=te;break;case"checked":W=te;break;case"defaultChecked":ae=te;break;case"value":C=te;break;case"defaultValue":D=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(c(137,n));break;default:te!==de&&Ye(e,n,J,te,o,de)}}pa(e,C,D,I,W,ae,p,u);return;case"select":te=C=D=J=null;for(p in i)if(I=i[p],i.hasOwnProperty(p)&&I!=null)switch(p){case"value":break;case"multiple":te=I;default:o.hasOwnProperty(p)||Ye(e,n,p,null,o,I)}for(u in o)if(p=o[u],I=i[u],o.hasOwnProperty(u)&&(p!=null||I!=null))switch(u){case"value":J=p;break;case"defaultValue":D=p;break;case"multiple":C=p;default:p!==I&&Ye(e,n,u,p,o,I)}n=D,i=C,o=te,J!=null?kr(e,!!i,J,!1):!!o!=!!i&&(n!=null?kr(e,!!i,n,!0):kr(e,!!i,i?[]:"",!1));return;case"textarea":te=J=null;for(D in i)if(u=i[D],i.hasOwnProperty(D)&&u!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Ye(e,n,D,null,o,u)}for(C in o)if(u=o[C],p=i[C],o.hasOwnProperty(C)&&(u!=null||p!=null))switch(C){case"value":J=u;break;case"defaultValue":te=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(c(91));break;default:u!==p&&Ye(e,n,C,u,o,p)}Oc(e,J,te);return;case"option":for(var ve in i)if(J=i[ve],i.hasOwnProperty(ve)&&J!=null&&!o.hasOwnProperty(ve))switch(ve){case"selected":e.selected=!1;break;default:Ye(e,n,ve,null,o,J)}for(I in o)if(J=o[I],te=i[I],o.hasOwnProperty(I)&&J!==te&&(J!=null||te!=null))switch(I){case"selected":e.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:Ye(e,n,I,J,o,te)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in i)J=i[De],i.hasOwnProperty(De)&&J!=null&&!o.hasOwnProperty(De)&&Ye(e,n,De,null,o,J);for(W in o)if(J=o[W],te=i[W],o.hasOwnProperty(W)&&J!==te&&(J!=null||te!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(c(137,n));break;default:Ye(e,n,W,J,o,te)}return;default:if(fa(n)){for(var Qe in i)J=i[Qe],i.hasOwnProperty(Qe)&&J!==void 0&&!o.hasOwnProperty(Qe)&&ec(e,n,Qe,void 0,o,J);for(ae in o)J=o[ae],te=i[ae],!o.hasOwnProperty(ae)||J===te||J===void 0&&te===void 0||ec(e,n,ae,J,o,te);return}}for(var P in i)J=i[P],i.hasOwnProperty(P)&&J!=null&&!o.hasOwnProperty(P)&&Ye(e,n,P,null,o,J);for(de in o)J=o[de],te=i[de],!o.hasOwnProperty(de)||J===te||J==null&&te==null||Ye(e,n,de,J,o,te)}function Ld(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,i=performance.getEntriesByType("resource"),o=0;o<i.length;o++){var u=i[o],p=u.transferSize,C=u.initiatorType,D=u.duration;if(p&&D&&Ld(C)){for(C=0,D=u.responseEnd,o+=1;o<i.length;o++){var I=i[o],W=I.startTime;if(W>D)break;var ae=I.transferSize,de=I.initiatorType;ae&&Ld(de)&&(I=I.responseEnd,C+=ae*(I<D?1:(D-W)/(I-W)))}if(--o,n+=8*(p+C)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nc=null,tc=null;function Go(e){return e.nodeType===9?e:e.ownerDocument}function Id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ud(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function rc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ic=null;function Km(){var e=window.event;return e&&e.type==="popstate"?e===ic?!1:(ic=e,!0):(ic=null,!1)}var zd=typeof setTimeout=="function"?setTimeout:void 0,Zm=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,ef=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(nf)}:zd;function nf(e){setTimeout(function(){throw e})}function Yt(e){return e==="head"}function $d(e,n){var i=n,o=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"||i==="/&"){if(o===0){e.removeChild(u),ei(n);return}o--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")o++;else if(i==="html")zi(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,zi(i);for(var p=i.firstChild;p;){var C=p.nextSibling,D=p.nodeName;p[ri]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&p.rel.toLowerCase()==="stylesheet"||i.removeChild(p),p=C}}else i==="body"&&zi(e.ownerDocument.body);i=u}while(i);ei(n)}function qd(e,n){var i=e;e=0;do{var o=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=o}while(i)}function oc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":oc(i),ua(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function tf(e,n,i,o){for(;e.nodeType===1;){var u=i;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ri])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var p=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=nt(e.nextSibling),e===null)break}return null}function rf(e,n,i){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=nt(e.nextSibling),e===null))return null;return e}function Pd(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=nt(e.nextSibling),e===null))return null;return e}function ac(e){return e.data==="$?"||e.data==="$~"}function lc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function of(e,n){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||i.readyState!=="loading")n();else{var o=function(){n(),i.removeEventListener("DOMContentLoaded",o)};i.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function nt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var cc=null;function Fd(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(n===0)return nt(e.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}e=e.nextSibling}return null}function Vd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return e;n--}else i!=="/$"&&i!=="/&"||n++}e=e.previousSibling}return null}function Gd(e,n,i){switch(n=Go(i),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function zi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ua(e)}var tt=new Map,Yd=new Set;function Yo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tt=pe.d;pe.d={f:af,r:lf,D:cf,C:sf,L:uf,m:df,X:mf,S:pf,M:ff};function af(){var e=Tt.f(),n=Uo();return e||n}function lf(e){var n=yr(e);n!==null&&n.tag===5&&n.type==="form"?uu(n):Tt.r(e)}var Xr=typeof document>"u"?null:document;function Qd(e,n,i){var o=Xr;if(o&&typeof n=="string"&&n){var u=Qn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof i=="string"&&(u+='[crossorigin="'+i+'"]'),Yd.has(u)||(Yd.add(u),e={rel:e,crossOrigin:i,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),hn(n),o.head.appendChild(n)))}}function cf(e){Tt.D(e),Qd("dns-prefetch",e,null)}function sf(e,n){Tt.C(e,n),Qd("preconnect",e,n)}function uf(e,n,i){Tt.L(e,n,i);var o=Xr;if(o&&e&&n){var u='link[rel="preload"][as="'+Qn(n)+'"]';n==="image"&&i&&i.imageSrcSet?(u+='[imagesrcset="'+Qn(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(u+='[imagesizes="'+Qn(i.imageSizes)+'"]')):u+='[href="'+Qn(e)+'"]';var p=u;switch(n){case"style":p=Kr(e);break;case"script":p=Zr(e)}tt.has(p)||(e=v({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:e,as:n},i),tt.set(p,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Hi(p))||n==="script"&&o.querySelector($i(p))||(n=o.createElement("link"),En(n,"link",e),hn(n),o.head.appendChild(n)))}}function df(e,n){Tt.m(e,n);var i=Xr;if(i&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Qn(o)+'"][href="'+Qn(e)+'"]',p=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Zr(e)}if(!tt.has(p)&&(e=v({rel:"modulepreload",href:e},n),tt.set(p,e),i.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector($i(p)))return}o=i.createElement("link"),En(o,"link",e),hn(o),i.head.appendChild(o)}}}function pf(e,n,i){Tt.S(e,n,i);var o=Xr;if(o&&e){var u=_r(o).hoistableStyles,p=Kr(e);n=n||"default";var C=u.get(p);if(!C){var D={loading:0,preload:null};if(C=o.querySelector(Hi(p)))D.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},i),(i=tt.get(p))&&sc(e,i);var I=C=o.createElement("link");hn(I),En(I,"link",e),I._p=new Promise(function(W,ae){I.onload=W,I.onerror=ae}),I.addEventListener("load",function(){D.loading|=1}),I.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Qo(C,n,o)}C={type:"stylesheet",instance:C,count:1,state:D},u.set(p,C)}}}function mf(e,n){Tt.X(e,n);var i=Xr;if(i&&e){var o=_r(i).hoistableScripts,u=Zr(e),p=o.get(u);p||(p=i.querySelector($i(u)),p||(e=v({src:e,async:!0},n),(n=tt.get(u))&&uc(e,n),p=i.createElement("script"),hn(p),En(p,"link",e),i.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(u,p))}}function ff(e,n){Tt.M(e,n);var i=Xr;if(i&&e){var o=_r(i).hoistableScripts,u=Zr(e),p=o.get(u);p||(p=i.querySelector($i(u)),p||(e=v({src:e,async:!0,type:"module"},n),(n=tt.get(u))&&uc(e,n),p=i.createElement("script"),hn(p),En(p,"link",e),i.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},o.set(u,p))}}function Wd(e,n,i,o){var u=(u=le.current)?Yo(u):null;if(!u)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=Kr(i.href),i=_r(u).hoistableStyles,o=i.get(n),o||(o={type:"style",instance:null,count:0,state:null},i.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Kr(i.href);var p=_r(u).hoistableStyles,C=p.get(e);if(C||(u=u.ownerDocument||u,C={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,C),(p=u.querySelector(Hi(e)))&&!p._p&&(C.instance=p,C.state.loading=5),tt.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},tt.set(e,i),p||hf(u,e,i,C.state))),n&&o===null)throw Error(c(528,""));return C}if(n&&o!==null)throw Error(c(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zr(i),i=_r(u).hoistableScripts,o=i.get(n),o||(o={type:"script",instance:null,count:0,state:null},i.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Kr(e){return'href="'+Qn(e)+'"'}function Hi(e){return'link[rel="stylesheet"]['+e+"]"}function Jd(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function hf(e,n,i,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",i),hn(n),e.head.appendChild(n))}function Zr(e){return'[src="'+Qn(e)+'"]'}function $i(e){return"script[async]"+e}function Xd(e,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Qn(i.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),hn(o),En(o,"style",u),Qo(o,i.precedence,e),n.instance=o;case"stylesheet":u=Kr(i.href);var p=e.querySelector(Hi(u));if(p)return n.state.loading|=4,n.instance=p,hn(p),p;o=Jd(i),(u=tt.get(u))&&sc(o,u),p=(e.ownerDocument||e).createElement("link"),hn(p);var C=p;return C._p=new Promise(function(D,I){C.onload=D,C.onerror=I}),En(p,"link",o),n.state.loading|=4,Qo(p,i.precedence,e),n.instance=p;case"script":return p=Zr(i.src),(u=e.querySelector($i(p)))?(n.instance=u,hn(u),u):(o=i,(u=tt.get(p))&&(o=v({},i),uc(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),hn(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Qo(o,i.precedence,e));return n.instance}function Qo(e,n,i){for(var o=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,p=u,C=0;C<o.length;C++){var D=o[C];if(D.dataset.precedence===n)p=D;else if(p!==u)break}p?p.parentNode.insertBefore(e,p.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(e,n.firstChild))}function sc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function uc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Wo=null;function Kd(e,n,i){if(Wo===null){var o=new Map,u=Wo=new Map;u.set(i,o)}else u=Wo,o=u.get(i),o||(o=new Map,u.set(i,o));if(o.has(e))return o;for(o.set(e,null),i=i.getElementsByTagName(e),u=0;u<i.length;u++){var p=i[u];if(!(p[ri]||p[xn]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var C=p.getAttribute(n)||"";C=e+C;var D=o.get(C);D?D.push(p):o.set(C,[p])}}return o}function Zd(e,n,i){e=e.ownerDocument||e,e.head.insertBefore(i,n==="title"?e.querySelector("head > title"):null)}function gf(e,n,i){if(i===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ep(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xf(e,n,i,o){if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=Kr(o.href),p=n.querySelector(Hi(u));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Jo.bind(e),n.then(e,e)),i.state.loading|=4,i.instance=p,hn(p);return}p=n.ownerDocument||n,o=Jd(o),(u=tt.get(u))&&sc(o,u),p=p.createElement("link"),hn(p);var C=p;C._p=new Promise(function(D,I){C.onload=D,C.onerror=I}),En(p,"link",o),i.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Jo.bind(e),n.addEventListener("load",i),n.addEventListener("error",i))}}var dc=0;function bf(e,n){return e.stylesheets&&e.count===0&&Ko(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var o=setTimeout(function(){if(e.stylesheets&&Ko(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+n);0<e.imgBytes&&dc===0&&(dc=62500*Xm());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ko(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>dc?50:800)+n);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Jo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ko(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xo=null;function Ko(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xo=new Map,n.forEach(yf,e),Xo=null,Jo.call(e))}function yf(e,n){if(!(n.state.loading&4)){var i=Xo.get(e);if(i)var o=i.get(null);else{i=new Map,Xo.set(e,i);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<u.length;p++){var C=u[p];(C.nodeName==="LINK"||C.getAttribute("media")!=="not all")&&(i.set(C.dataset.precedence,C),o=C)}o&&i.set(null,o)}u=n.instance,C=u.getAttribute("data-precedence"),p=i.get(C)||o,p===o&&i.set(null,u),i.set(C,u),this.count++,o=Jo.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),p?p.parentNode.insertBefore(u,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var qi={$$typeof:q,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function _f(e,n,i,o,u,p,C,D,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=aa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.hiddenUpdates=aa(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=p,this.onRecoverableError=C,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function np(e,n,i,o,u,p,C,D,I,W,ae,de){return e=new _f(e,n,i,C,I,W,ae,de,D),n=1,p===!0&&(n|=24),p=zn(3,null,null,n),e.current=p,p.stateNode=e,n=Fa(),n.refCount++,e.pooledCache=n,n.refCount++,p.memoizedState={element:o,isDehydrated:i,cache:n},Qa(p),e}function tp(e){return e?(e=Dr,e):Dr}function rp(e,n,i,o,u,p){u=tp(u),o.context===null?o.context=u:o.pendingContext=u,o=Lt(n),o.payload={element:i},p=p===void 0?null:p,p!==null&&(o.callback=p),i=It(e,o,n),i!==null&&(jn(i,e,n),_i(i,e,n))}function ip(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function pc(e,n){ip(e,n),(e=e.alternate)&&ip(e,n)}function op(e){if(e.tag===13||e.tag===31){var n=ir(e,67108864);n!==null&&jn(n,e,67108864),pc(e,67108864)}}function ap(e){if(e.tag===13||e.tag===31){var n=Fn();n=la(n);var i=ir(e,n);i!==null&&jn(i,e,n),pc(e,n)}}var Zo=!0;function Ef(e,n,i,o){var u=F.T;F.T=null;var p=pe.p;try{pe.p=2,mc(e,n,i,o)}finally{pe.p=p,F.T=u}}function kf(e,n,i,o){var u=F.T;F.T=null;var p=pe.p;try{pe.p=8,mc(e,n,i,o)}finally{pe.p=p,F.T=u}}function mc(e,n,i,o){if(Zo){var u=fc(o);if(u===null)Zl(e,n,o,ea,i),cp(e,o);else if(Sf(u,e,n,i,o))o.stopPropagation();else if(cp(e,o),n&4&&-1<vf.indexOf(e)){for(;u!==null;){var p=yr(u);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var C=Zt(p.pendingLanes);if(C!==0){var D=p;for(D.pendingLanes|=2,D.entangledLanes|=2;C;){var I=1<<31-G(C);D.entanglements[1]|=I,C&=~I}ut(p),(Pe&6)===0&&(Lo=en()+500,Li(0))}}break;case 31:case 13:D=ir(p,2),D!==null&&jn(D,p,2),Uo(),pc(p,2)}if(p=fc(o),p===null&&Zl(e,n,o,ea,i),p===u)break;u=p}u!==null&&o.stopPropagation()}else Zl(e,n,o,null,i)}}function fc(e){return e=ga(e),hc(e)}var ea=null;function hc(e){if(ea=null,e=br(e),e!==null){var n=d(e);if(n===null)e=null;else{var i=n.tag;if(i===13){if(e=m(n),e!==null)return e;e=null}else if(i===31){if(e=f(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ea=e,null}function lp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(y()){case M:return 2;case S:return 8;case g:case b:return 32;case _:return 268435456;default:return 32}default:return 32}}var gc=!1,Qt=null,Wt=null,Jt=null,Pi=new Map,Fi=new Map,Xt=[],vf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cp(e,n){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Pi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(n.pointerId)}}function Vi(e,n,i,o,u,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:i,eventSystemFlags:o,nativeEvent:p,targetContainers:[u]},n!==null&&(n=yr(n),n!==null&&op(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Sf(e,n,i,o,u){switch(n){case"focusin":return Qt=Vi(Qt,e,n,i,o,u),!0;case"dragenter":return Wt=Vi(Wt,e,n,i,o,u),!0;case"mouseover":return Jt=Vi(Jt,e,n,i,o,u),!0;case"pointerover":var p=u.pointerId;return Pi.set(p,Vi(Pi.get(p)||null,e,n,i,o,u)),!0;case"gotpointercapture":return p=u.pointerId,Fi.set(p,Vi(Fi.get(p)||null,e,n,i,o,u)),!0}return!1}function sp(e){var n=br(e.target);if(n!==null){var i=d(n);if(i!==null){if(n=i.tag,n===13){if(n=m(i),n!==null){e.blockedOn=n,vc(e.priority,function(){ap(i)});return}}else if(n===31){if(n=f(i),n!==null){e.blockedOn=n,vc(e.priority,function(){ap(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function na(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=fc(e.nativeEvent);if(i===null){i=e.nativeEvent;var o=new i.constructor(i.type,i);ha=o,i.target.dispatchEvent(o),ha=null}else return n=yr(i),n!==null&&op(n),e.blockedOn=i,!1;n.shift()}return!0}function up(e,n,i){na(e)&&i.delete(n)}function Cf(){gc=!1,Qt!==null&&na(Qt)&&(Qt=null),Wt!==null&&na(Wt)&&(Wt=null),Jt!==null&&na(Jt)&&(Jt=null),Pi.forEach(up),Fi.forEach(up)}function ta(e,n){e.blockedOn===n&&(e.blockedOn=null,gc||(gc=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Cf)))}var ra=null;function dp(e){ra!==e&&(ra=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){ra===e&&(ra=null);for(var n=0;n<e.length;n+=3){var i=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(hc(o||i)===null)continue;break}var p=yr(i);p!==null&&(e.splice(n,3),n-=3,fl(p,{pending:!0,data:u,method:i.method,action:o},o,u))}}))}function ei(e){function n(I){return ta(I,e)}Qt!==null&&ta(Qt,e),Wt!==null&&ta(Wt,e),Jt!==null&&ta(Jt,e),Pi.forEach(n),Fi.forEach(n);for(var i=0;i<Xt.length;i++){var o=Xt[i];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Xt.length&&(i=Xt[0],i.blockedOn===null);)sp(i),i.blockedOn===null&&Xt.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(o=0;o<i.length;o+=3){var u=i[o],p=i[o+1],C=u[An]||null;if(typeof p=="function")C||dp(i);else if(C){var D=null;if(p&&p.hasAttribute("formAction")){if(u=p,C=p[An]||null)D=C.formAction;else if(hc(u)!==null)continue}else D=C.action;typeof D=="function"?i[o+1]=D:(i.splice(o,3),o-=3),dp(i)}}}function pp(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(C){return u=C})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(i,20)}function i(){if(!o&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xc(e){this._internalRoot=e}ia.prototype.render=xc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var i=n.current,o=Fn();rp(i,o,e,n,null,null)},ia.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;rp(e.current,2,null,e,null,null),Uo(),n[xr]=null}};function ia(e){this._internalRoot=e}ia.prototype.unstable_scheduleHydration=function(e){if(e){var n=kc();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Xt.length&&n!==0&&n<Xt[i].priority;i++);Xt.splice(i,0,e),i===0&&sp(e)}};var mp=a.version;if(mp!=="19.2.3")throw Error(c(527,mp,"19.2.3"));pe.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(n),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var wf={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{j=oa.inject(wf),Y=oa}catch{}}return reactDomClient_production.createRoot=function(e,n){if(!s(e))throw Error(c(299));var i=!1,o="",u=_u,p=Eu,C=ku;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(C=n.onRecoverableError)),n=np(e,1,!1,null,null,i,o,null,u,p,C,pp),e[xr]=n.current,Kl(e),new xc(n)},reactDomClient_production.hydrateRoot=function(e,n,i){if(!s(e))throw Error(c(299));var o=!1,u="",p=_u,C=Eu,D=ku,I=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(C=i.onCaughtError),i.onRecoverableError!==void 0&&(D=i.onRecoverableError),i.formState!==void 0&&(I=i.formState)),n=np(e,1,!0,n,i??null,o,u,I,p,C,D,pp),n.context=tp(null),i=n.current,o=Fn(),o=la(o),u=Lt(o),u.callback=null,It(i,u,o),i=o,n.current.lanes=i,ti(n,i),ut(n),e[xr]=n.current,Kl(e),new ia(n)},reactDomClient_production.version="19.2.3",reactDomClient_production}var hasRequiredClient;function requireClient(){if(hasRequiredClient)return client.exports;hasRequiredClient=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),client.exports=requireReactDomClient_production(),client.exports}var clientExports=requireClient();/**
 * react-router v7.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var PopStateEventType="popstate";function createBrowserHistory(t={}){function a(c,s){let{pathname:d,search:m,hash:f}=c.location;return createLocation("",{pathname:d,search:m,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function l(c,s){return typeof s=="string"?s:createPath(s)}return getUrlBasedHistory(a,l,null,t)}function invariant(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function warning(t,a){if(!t){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function createKey(){return Math.random().toString(36).substring(2,10)}function getHistoryState(t,a){return{usr:t.state,key:t.key,idx:a}}function createLocation(t,a,l=null,c){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof a=="string"?parsePath(a):a,state:l,key:a&&a.key||c||createKey()}}function createPath({pathname:t="/",search:a="",hash:l=""}){return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function parsePath(t){let a={};if(t){let l=t.indexOf("#");l>=0&&(a.hash=t.substring(l),t=t.substring(0,l));let c=t.indexOf("?");c>=0&&(a.search=t.substring(c),t=t.substring(0,c)),t&&(a.pathname=t)}return a}function getUrlBasedHistory(t,a,l,c={}){let{window:s=document.defaultView,v5Compat:d=!1}=c,m=s.history,f="POP",x=null,h=E();h==null&&(h=0,m.replaceState({...m.state,idx:h},""));function E(){return(m.state||{idx:null}).idx}function v(){f="POP";let $=E(),z=$==null?null:$-h;h=$,x&&x({action:f,location:U.location,delta:z})}function R($,z){f="PUSH";let Z=createLocation(U.location,$,z);h=E()+1;let q=getHistoryState(Z,h),ge=U.createHref(Z);try{m.pushState(q,"",ge)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;s.location.assign(ge)}d&&x&&x({action:f,location:U.location,delta:1})}function w($,z){f="REPLACE";let Z=createLocation(U.location,$,z);h=E();let q=getHistoryState(Z,h),ge=U.createHref(Z);m.replaceState(q,"",ge),d&&x&&x({action:f,location:U.location,delta:0})}function B($){return createBrowserURLImpl($)}let U={get action(){return f},get location(){return t(s,m)},listen($){if(x)throw new Error("A history only accepts one active listener");return s.addEventListener(PopStateEventType,v),x=$,()=>{s.removeEventListener(PopStateEventType,v),x=null}},createHref($){return a(s,$)},createURL:B,encodeLocation($){let z=B($);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:R,replace:w,go($){return m.go($)}};return U}function createBrowserURLImpl(t,a=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),invariant(l,"No window.location.(origin|href) available to create URL");let c=typeof t=="string"?t:createPath(t);return c=c.replace(/ $/,"%20"),!a&&c.startsWith("//")&&(c=l+c),new URL(c,l)}function matchRoutes(t,a,l="/"){return matchRoutesImpl(t,a,l,!1)}function matchRoutesImpl(t,a,l,c){let s=typeof a=="string"?parsePath(a):a,d=stripBasename(s.pathname||"/",l);if(d==null)return null;let m=flattenRoutes(t);rankRouteBranches(m);let f=null;for(let x=0;f==null&&x<m.length;++x){let h=decodePath(d);f=matchRouteBranch(m[x],h,c)}return f}function flattenRoutes(t,a=[],l=[],c="",s=!1){let d=(m,f,x=s,h)=>{let E={relativePath:h===void 0?m.path||"":h,caseSensitive:m.caseSensitive===!0,childrenIndex:f,route:m};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(c)&&x)return;invariant(E.relativePath.startsWith(c),`Absolute route path "${E.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(c.length)}let v=joinPaths([c,E.relativePath]),R=l.concat(E);m.children&&m.children.length>0&&(invariant(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),flattenRoutes(m.children,a,R,v,x)),!(m.path==null&&!m.index)&&a.push({path:v,score:computeScore(v,m.index),routesMeta:R})};return t.forEach((m,f)=>{var x;if(m.path===""||!((x=m.path)!=null&&x.includes("?")))d(m,f);else for(let h of explodeOptionalSegments(m.path))d(m,f,!0,h)}),a}function explodeOptionalSegments(t){let a=t.split("/");if(a.length===0)return[];let[l,...c]=a,s=l.endsWith("?"),d=l.replace(/\?$/,"");if(c.length===0)return s?[d,""]:[d];let m=explodeOptionalSegments(c.join("/")),f=[];return f.push(...m.map(x=>x===""?d:[d,x].join("/"))),s&&f.push(...m),f.map(x=>t.startsWith("/")&&x===""?"/":x)}function rankRouteBranches(t){t.sort((a,l)=>a.score!==l.score?l.score-a.score:compareIndexes(a.routesMeta.map(c=>c.childrenIndex),l.routesMeta.map(c=>c.childrenIndex)))}var paramRe=/^:[\w-]+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=t=>t==="*";function computeScore(t,a){let l=t.split("/"),c=l.length;return l.some(isSplat)&&(c+=splatPenalty),a&&(c+=indexRouteValue),l.filter(s=>!isSplat(s)).reduce((s,d)=>s+(paramRe.test(d)?dynamicSegmentValue:d===""?emptySegmentValue:staticSegmentValue),c)}function compareIndexes(t,a){return t.length===a.length&&t.slice(0,-1).every((c,s)=>c===a[s])?t[t.length-1]-a[a.length-1]:0}function matchRouteBranch(t,a,l=!1){let{routesMeta:c}=t,s={},d="/",m=[];for(let f=0;f<c.length;++f){let x=c[f],h=f===c.length-1,E=d==="/"?a:a.slice(d.length)||"/",v=matchPath({path:x.relativePath,caseSensitive:x.caseSensitive,end:h},E),R=x.route;if(!v&&h&&l&&!c[c.length-1].route.index&&(v=matchPath({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},E)),!v)return null;Object.assign(s,v.params),m.push({params:s,pathname:joinPaths([d,v.pathname]),pathnameBase:normalizePathname(joinPaths([d,v.pathnameBase])),route:R}),v.pathnameBase!=="/"&&(d=joinPaths([d,v.pathnameBase]))}return m}function matchPath(t,a){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[l,c]=compilePath(t.path,t.caseSensitive,t.end),s=a.match(l);if(!s)return null;let d=s[0],m=d.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:c.reduce((h,{paramName:E,isOptional:v},R)=>{if(E==="*"){let B=f[R]||"";m=d.slice(0,d.length-B.length).replace(/(.)\/+$/,"$1")}const w=f[R];return v&&!w?h[E]=void 0:h[E]=(w||"").replace(/%2F/g,"/"),h},{}),pathname:d,pathnameBase:m,pattern:t}}function compilePath(t,a=!1,l=!0){warning(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let c=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,f,x)=>(c.push({paramName:f,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(c.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,a?void 0:"i"),c]}function decodePath(t){try{return t.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return warning(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),t}}function stripBasename(t,a){if(a==="/")return t;if(!t.toLowerCase().startsWith(a.toLowerCase()))return null;let l=a.endsWith("/")?a.length-1:a.length,c=t.charAt(l);return c&&c!=="/"?null:t.slice(l)||"/"}var ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,isAbsoluteUrl=t=>ABSOLUTE_URL_REGEX.test(t);function resolvePath(t,a="/"){let{pathname:l,search:c="",hash:s=""}=typeof t=="string"?parsePath(t):t,d;if(l)if(isAbsoluteUrl(l))d=l;else{if(l.includes("//")){let m=l;l=l.replace(/\/\/+/g,"/"),warning(!1,`Pathnames cannot have embedded double slashes - normalizing ${m} -> ${l}`)}l.startsWith("/")?d=resolvePathname(l.substring(1),"/"):d=resolvePathname(l,a)}else d=a;return{pathname:d,search:normalizeSearch(c),hash:normalizeHash(s)}}function resolvePathname(t,a){let l=a.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?l.length>1&&l.pop():s!=="."&&l.push(s)}),l.length>1?l.join("/"):"/"}function getInvalidPathError(t,a,l,c){return`Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function getPathContributingMatches(t){return t.filter((a,l)=>l===0||a.route.path&&a.route.path.length>0)}function getResolveToMatches(t){let a=getPathContributingMatches(t);return a.map((l,c)=>c===a.length-1?l.pathname:l.pathnameBase)}function resolveTo(t,a,l,c=!1){let s;typeof t=="string"?s=parsePath(t):(s={...t},invariant(!s.pathname||!s.pathname.includes("?"),getInvalidPathError("?","pathname","search",s)),invariant(!s.pathname||!s.pathname.includes("#"),getInvalidPathError("#","pathname","hash",s)),invariant(!s.search||!s.search.includes("#"),getInvalidPathError("#","search","hash",s)));let d=t===""||s.pathname==="",m=d?"/":s.pathname,f;if(m==null)f=l;else{let v=a.length-1;if(!c&&m.startsWith("..")){let R=m.split("/");for(;R[0]==="..";)R.shift(),v-=1;s.pathname=R.join("/")}f=v>=0?a[v]:"/"}let x=resolvePath(s,f),h=m&&m!=="/"&&m.endsWith("/"),E=(d||m===".")&&l.endsWith("/");return!x.pathname.endsWith("/")&&(h||E)&&(x.pathname+="/"),x}var joinPaths=t=>t.join("/").replace(/\/\/+/g,"/"),normalizePathname=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,normalizeHash=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,ErrorResponseImpl=class{constructor(t,a,l,c=!1){this.status=t,this.statusText=a||"",this.internal=c,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function isRouteErrorResponse(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function getRoutePattern(t){return t.map(a=>a.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var isBrowser=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function parseToInfo(t,a){let l=t;if(typeof l!="string"||!ABSOLUTE_URL_REGEX.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let c=l,s=!1;if(isBrowser)try{let d=new URL(window.location.href),m=l.startsWith("//")?new URL(d.protocol+l):new URL(l),f=stripBasename(m.pathname,a);m.origin===d.origin&&f!=null?l=f+m.search+m.hash:s=!0}catch{warning(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:s,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var validMutationMethodsArr=["POST","PUT","PATCH","DELETE"];new Set(validMutationMethodsArr);var validRequestMethodsArr=["GET",...validMutationMethodsArr];new Set(validRequestMethodsArr);var DataRouterContext=reactExports$1.createContext(null);DataRouterContext.displayName="DataRouter";var DataRouterStateContext=reactExports$1.createContext(null);DataRouterStateContext.displayName="DataRouterState";var RSCRouterContext=reactExports$1.createContext(!1),ViewTransitionContext=reactExports$1.createContext({isTransitioning:!1});ViewTransitionContext.displayName="ViewTransition";var FetchersContext=reactExports$1.createContext(new Map);FetchersContext.displayName="Fetchers";var AwaitContext=reactExports$1.createContext(null);AwaitContext.displayName="Await";var NavigationContext=reactExports$1.createContext(null);NavigationContext.displayName="Navigation";var LocationContext=reactExports$1.createContext(null);LocationContext.displayName="Location";var RouteContext=reactExports$1.createContext({outlet:null,matches:[],isDataRoute:!1});RouteContext.displayName="Route";var RouteErrorContext=reactExports$1.createContext(null);RouteErrorContext.displayName="RouteError";var ERROR_DIGEST_BASE="REACT_ROUTER_ERROR",ERROR_DIGEST_REDIRECT="REDIRECT",ERROR_DIGEST_ROUTE_ERROR_RESPONSE="ROUTE_ERROR_RESPONSE";function decodeRedirectErrorDigest(t){if(t.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_REDIRECT}:{`))try{let a=JSON.parse(t.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function decodeRouteErrorResponseDigest(t){if(t.startsWith(`${ERROR_DIGEST_BASE}:${ERROR_DIGEST_ROUTE_ERROR_RESPONSE}:{`))try{let a=JSON.parse(t.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new ErrorResponseImpl(a.status,a.statusText,a.data)}catch{}}function useHref(t,{relative:a}={}){invariant(useInRouterContext(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:c}=reactExports$1.useContext(NavigationContext),{hash:s,pathname:d,search:m}=useResolvedPath(t,{relative:a}),f=d;return l!=="/"&&(f=d==="/"?l:joinPaths([l,d])),c.createHref({pathname:f,search:m,hash:s})}function useInRouterContext(){return reactExports$1.useContext(LocationContext)!=null}function useLocation(){return invariant(useInRouterContext(),"useLocation() may be used only in the context of a <Router> component."),reactExports$1.useContext(LocationContext).location}var navigateEffectWarning="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function useIsomorphicLayoutEffect(t){reactExports$1.useContext(NavigationContext).static||reactExports$1.useLayoutEffect(t)}function useNavigate(){let{isDataRoute:t}=reactExports$1.useContext(RouteContext);return t?useNavigateStable():useNavigateUnstable()}function useNavigateUnstable(){invariant(useInRouterContext(),"useNavigate() may be used only in the context of a <Router> component.");let t=reactExports$1.useContext(DataRouterContext),{basename:a,navigator:l}=reactExports$1.useContext(NavigationContext),{matches:c}=reactExports$1.useContext(RouteContext),{pathname:s}=useLocation(),d=JSON.stringify(getResolveToMatches(c)),m=reactExports$1.useRef(!1);return useIsomorphicLayoutEffect(()=>{m.current=!0}),reactExports$1.useCallback((x,h={})=>{if(warning(m.current,navigateEffectWarning),!m.current)return;if(typeof x=="number"){l.go(x);return}let E=resolveTo(x,JSON.parse(d),s,h.relative==="path");t==null&&a!=="/"&&(E.pathname=E.pathname==="/"?a:joinPaths([a,E.pathname])),(h.replace?l.replace:l.push)(E,h.state,h)},[a,l,d,s,t])}reactExports$1.createContext(null);function useResolvedPath(t,{relative:a}={}){let{matches:l}=reactExports$1.useContext(RouteContext),{pathname:c}=useLocation(),s=JSON.stringify(getResolveToMatches(l));return reactExports$1.useMemo(()=>resolveTo(t,JSON.parse(s),c,a==="path"),[t,s,c,a])}function useRoutes(t,a){return useRoutesImpl(t,a)}function useRoutesImpl(t,a,l,c,s){var Z;invariant(useInRouterContext(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=reactExports$1.useContext(NavigationContext),{matches:m}=reactExports$1.useContext(RouteContext),f=m[m.length-1],x=f?f.params:{},h=f?f.pathname:"/",E=f?f.pathnameBase:"/",v=f&&f.route;{let q=v&&v.path||"";warningOnce(h,!v||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let R=useLocation(),w;if(a){let q=typeof a=="string"?parsePath(a):a;invariant(E==="/"||((Z=q.pathname)==null?void 0:Z.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${q.pathname}" was given in the \`location\` prop.`),w=q}else w=R;let B=w.pathname||"/",U=B;if(E!=="/"){let q=E.replace(/^\//,"").split("/");U="/"+B.replace(/^\//,"").split("/").slice(q.length).join("/")}let $=matchRoutes(t,{pathname:U});warning(v||$!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),warning($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=_renderMatches($&&$.map(q=>Object.assign({},q,{params:Object.assign({},x,q.params),pathname:joinPaths([E,d.encodeLocation?d.encodeLocation(q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?E:joinPaths([E,d.encodeLocation?d.encodeLocation(q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),m,l,c,s);return a&&z?reactExports$1.createElement(LocationContext.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},z):z}function DefaultErrorComponent(){let t=useRouteError(),a=isRouteErrorResponse(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),l=t instanceof Error?t.stack:null,c="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},m=null;return console.error("Error handled by React Router default ErrorBoundary:",t),m=reactExports$1.createElement(reactExports$1.Fragment,null,reactExports$1.createElement("p",null,"💿 Hey developer 👋"),reactExports$1.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",reactExports$1.createElement("code",{style:d},"ErrorBoundary")," or"," ",reactExports$1.createElement("code",{style:d},"errorElement")," prop on your route.")),reactExports$1.createElement(reactExports$1.Fragment,null,reactExports$1.createElement("h2",null,"Unexpected Application Error!"),reactExports$1.createElement("h3",{style:{fontStyle:"italic"}},a),l?reactExports$1.createElement("pre",{style:s},l):null,m)}var defaultErrorElement=reactExports$1.createElement(DefaultErrorComponent,null),RenderErrorBoundary=class extends reactExports$1.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){this.props.onError?this.props.onError(t,a):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const l=decodeRouteErrorResponseDigest(t.digest);l&&(t=l)}let a=t!==void 0?reactExports$1.createElement(RouteContext.Provider,{value:this.props.routeContext},reactExports$1.createElement(RouteErrorContext.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?reactExports$1.createElement(RSCErrorHandler,{error:t},a):a}};RenderErrorBoundary.contextType=RSCRouterContext;var errorRedirectHandledMap=new WeakMap;function RSCErrorHandler({children:t,error:a}){let{basename:l}=reactExports$1.useContext(NavigationContext);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let c=decodeRedirectErrorDigest(a.digest);if(c){let s=errorRedirectHandledMap.get(a);if(s)throw s;let d=parseToInfo(c.location,l);if(isBrowser&&!errorRedirectHandledMap.get(a))if(d.isExternal||c.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:c.replace}));throw errorRedirectHandledMap.set(a,m),m}return reactExports$1.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return t}function RenderedRoute({routeContext:t,match:a,children:l}){let c=reactExports$1.useContext(DataRouterContext);return c&&c.static&&c.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=a.route.id),reactExports$1.createElement(RouteContext.Provider,{value:t},l)}function _renderMatches(t,a=[],l=null,c=null,s=null){if(t==null){if(!l)return null;if(l.errors)t=l.matches;else if(a.length===0&&!l.initialized&&l.matches.length>0)t=l.matches;else return null}let d=t,m=l==null?void 0:l.errors;if(m!=null){let E=d.findIndex(v=>v.route.id&&(m==null?void 0:m[v.route.id])!==void 0);invariant(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,E+1))}let f=!1,x=-1;if(l)for(let E=0;E<d.length;E++){let v=d[E];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(x=E),v.route.id){let{loaderData:R,errors:w}=l,B=v.route.loader&&!R.hasOwnProperty(v.route.id)&&(!w||w[v.route.id]===void 0);if(v.route.lazy||B){f=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}let h=l&&c?(E,v)=>{var R,w;c(E,{location:l.location,params:((w=(R=l.matches)==null?void 0:R[0])==null?void 0:w.params)??{},unstable_pattern:getRoutePattern(l.matches),errorInfo:v})}:void 0;return d.reduceRight((E,v,R)=>{let w,B=!1,U=null,$=null;l&&(w=m&&v.route.id?m[v.route.id]:void 0,U=v.route.errorElement||defaultErrorElement,f&&(x<0&&R===0?(warningOnce("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,$=null):x===R&&(B=!0,$=v.route.hydrateFallbackElement||null)));let z=a.concat(d.slice(0,R+1)),Z=()=>{let q;return w?q=U:B?q=$:v.route.Component?q=reactExports$1.createElement(v.route.Component,null):v.route.element?q=v.route.element:q=E,reactExports$1.createElement(RenderedRoute,{match:v,routeContext:{outlet:E,matches:z,isDataRoute:l!=null},children:q})};return l&&(v.route.ErrorBoundary||v.route.errorElement||R===0)?reactExports$1.createElement(RenderErrorBoundary,{location:l.location,revalidation:l.revalidation,component:U,error:w,children:Z(),routeContext:{outlet:null,matches:z,isDataRoute:!0},onError:h}):Z()},null)}function getDataRouterConsoleError(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function useDataRouterContext(t){let a=reactExports$1.useContext(DataRouterContext);return invariant(a,getDataRouterConsoleError(t)),a}function useDataRouterState(t){let a=reactExports$1.useContext(DataRouterStateContext);return invariant(a,getDataRouterConsoleError(t)),a}function useRouteContext(t){let a=reactExports$1.useContext(RouteContext);return invariant(a,getDataRouterConsoleError(t)),a}function useCurrentRouteId(t){let a=useRouteContext(t),l=a.matches[a.matches.length-1];return invariant(l.route.id,`${t} can only be used on routes that contain a unique "id"`),l.route.id}function useRouteId(){return useCurrentRouteId("useRouteId")}function useRouteError(){var c;let t=reactExports$1.useContext(RouteErrorContext),a=useDataRouterState("useRouteError"),l=useCurrentRouteId("useRouteError");return t!==void 0?t:(c=a.errors)==null?void 0:c[l]}function useNavigateStable(){let{router:t}=useDataRouterContext("useNavigate"),a=useCurrentRouteId("useNavigate"),l=reactExports$1.useRef(!1);return useIsomorphicLayoutEffect(()=>{l.current=!0}),reactExports$1.useCallback(async(s,d={})=>{warning(l.current,navigateEffectWarning),l.current&&(typeof s=="number"?await t.navigate(s):await t.navigate(s,{fromRouteId:a,...d}))},[t,a])}var alreadyWarned={};function warningOnce(t,a,l){!a&&!alreadyWarned[t]&&(alreadyWarned[t]=!0,warning(!1,l))}reactExports$1.memo(DataRoutes);function DataRoutes({routes:t,future:a,state:l,onError:c}){return useRoutesImpl(t,void 0,l,c,a)}function Route(t){invariant(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Router({basename:t="/",children:a=null,location:l,navigationType:c="POP",navigator:s,static:d=!1,unstable_useTransitions:m}){invariant(!useInRouterContext(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),x=reactExports$1.useMemo(()=>({basename:f,navigator:s,static:d,unstable_useTransitions:m,future:{}}),[f,s,d,m]);typeof l=="string"&&(l=parsePath(l));let{pathname:h="/",search:E="",hash:v="",state:R=null,key:w="default"}=l,B=reactExports$1.useMemo(()=>{let U=stripBasename(h,f);return U==null?null:{location:{pathname:U,search:E,hash:v,state:R,key:w},navigationType:c}},[f,h,E,v,R,w,c]);return warning(B!=null,`<Router basename="${f}"> is not able to match the URL "${h}${E}${v}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:reactExports$1.createElement(NavigationContext.Provider,{value:x},reactExports$1.createElement(LocationContext.Provider,{children:a,value:B}))}function Routes({children:t,location:a}){return useRoutes(createRoutesFromChildren(t),a)}function createRoutesFromChildren(t,a=[]){let l=[];return reactExports$1.Children.forEach(t,(c,s)=>{if(!reactExports$1.isValidElement(c))return;let d=[...a,s];if(c.type===reactExports$1.Fragment){l.push.apply(l,createRoutesFromChildren(c.props.children,d));return}invariant(c.type===Route,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),invariant(!c.props.index||!c.props.children,"An index route cannot have child routes.");let m={id:c.props.id||d.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=createRoutesFromChildren(c.props.children,d)),l.push(m)}),l}var defaultMethod="get",defaultEncType="application/x-www-form-urlencoded";function isHtmlElement(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function isButtonElement(t){return isHtmlElement(t)&&t.tagName.toLowerCase()==="button"}function isFormElement(t){return isHtmlElement(t)&&t.tagName.toLowerCase()==="form"}function isInputElement(t){return isHtmlElement(t)&&t.tagName.toLowerCase()==="input"}function isModifiedEvent(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function shouldProcessLinkClick(t,a){return t.button===0&&(!a||a==="_self")&&!isModifiedEvent(t)}var _formDataSupportsSubmitter=null;function isFormDataSubmitterSupported(){if(_formDataSupportsSubmitter===null)try{new FormData(document.createElement("form"),0),_formDataSupportsSubmitter=!1}catch{_formDataSupportsSubmitter=!0}return _formDataSupportsSubmitter}var supportedFormEncTypes=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function getFormEncType(t){return t!=null&&!supportedFormEncTypes.has(t)?(warning(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`),null):t}function getFormSubmissionInfo(t,a){let l,c,s,d,m;if(isFormElement(t)){let f=t.getAttribute("action");c=f?stripBasename(f,a):null,l=t.getAttribute("method")||defaultMethod,s=getFormEncType(t.getAttribute("enctype"))||defaultEncType,d=new FormData(t)}else if(isButtonElement(t)||isInputElement(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=t.getAttribute("formaction")||f.getAttribute("action");if(c=x?stripBasename(x,a):null,l=t.getAttribute("formmethod")||f.getAttribute("method")||defaultMethod,s=getFormEncType(t.getAttribute("formenctype"))||getFormEncType(f.getAttribute("enctype"))||defaultEncType,d=new FormData(f,t),!isFormDataSubmitterSupported()){let{name:h,type:E,value:v}=t;if(E==="image"){let R=h?`${h}.`:"";d.append(`${R}x`,"0"),d.append(`${R}y`,"0")}else h&&d.append(h,v)}}else{if(isHtmlElement(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=defaultMethod,c=null,s=defaultEncType,m=t}return d&&s==="text/plain"&&(m=d,d=void 0),{action:c,method:l.toLowerCase(),encType:s,formData:d,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function invariant2(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function singleFetchUrl(t,a,l,c){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return l?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${c}`:s.pathname=`${s.pathname}.${c}`:s.pathname==="/"?s.pathname=`_root.${c}`:a&&stripBasename(s.pathname,a)==="/"?s.pathname=`${a.replace(/\/$/,"")}/_root.${c}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${c}`,s}async function loadRouteModule(t,a){if(t.id in a)return a[t.id];try{let l=await import(t.module);return a[t.id]=l,l}catch(l){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function isHtmlLinkDescriptor(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function getKeyedPrefetchLinks(t,a,l){let c=await Promise.all(t.map(async s=>{let d=a.routes[s.route.id];if(d){let m=await loadRouteModule(d,l);return m.links?m.links():[]}return[]}));return dedupeLinkDescriptors(c.flat(1).filter(isHtmlLinkDescriptor).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function getNewMatchesForLinks(t,a,l,c,s,d){let m=(x,h)=>l[h]?x.route.id!==l[h].route.id:!0,f=(x,h)=>{var E;return l[h].pathname!==x.pathname||((E=l[h].route.path)==null?void 0:E.endsWith("*"))&&l[h].params["*"]!==x.params["*"]};return d==="assets"?a.filter((x,h)=>m(x,h)||f(x,h)):d==="data"?a.filter((x,h)=>{var v;let E=c.routes[x.route.id];if(!E||!E.hasLoader)return!1;if(m(x,h)||f(x,h))return!0;if(x.route.shouldRevalidate){let R=x.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((v=l[0])==null?void 0:v.params)||{},nextUrl:new URL(t,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function getModuleLinkHrefs(t,a,{includeHydrateFallback:l}={}){return dedupeHrefs(t.map(c=>{let s=a.routes[c.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),l&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function dedupeHrefs(t){return[...new Set(t)]}function sortKeys(t){let a={},l=Object.keys(t).sort();for(let c of l)a[c]=t[c];return a}function dedupeLinkDescriptors(t,a){let l=new Set;return new Set(a),t.reduce((c,s)=>{let d=JSON.stringify(sortKeys(s));return l.has(d)||(l.add(d),c.push({key:d,link:s})),c},[])}function useDataRouterContext2(){let t=reactExports$1.useContext(DataRouterContext);return invariant2(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function useDataRouterStateContext(){let t=reactExports$1.useContext(DataRouterStateContext);return invariant2(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var FrameworkContext=reactExports$1.createContext(void 0);FrameworkContext.displayName="FrameworkContext";function useFrameworkContext(){let t=reactExports$1.useContext(FrameworkContext);return invariant2(t,"You must render this element inside a <HydratedRouter> element"),t}function usePrefetchBehavior(t,a){let l=reactExports$1.useContext(FrameworkContext),[c,s]=reactExports$1.useState(!1),[d,m]=reactExports$1.useState(!1),{onFocus:f,onBlur:x,onMouseEnter:h,onMouseLeave:E,onTouchStart:v}=a,R=reactExports$1.useRef(null);reactExports$1.useEffect(()=>{if(t==="render"&&m(!0),t==="viewport"){let U=z=>{z.forEach(Z=>{m(Z.isIntersecting)})},$=new IntersectionObserver(U,{threshold:.5});return R.current&&$.observe(R.current),()=>{$.disconnect()}}},[t]),reactExports$1.useEffect(()=>{if(c){let U=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(U)}}},[c]);let w=()=>{s(!0)},B=()=>{s(!1),m(!1)};return l?t!=="intent"?[d,R,{}]:[d,R,{onFocus:composeEventHandlers(f,w),onBlur:composeEventHandlers(x,B),onMouseEnter:composeEventHandlers(h,w),onMouseLeave:composeEventHandlers(E,B),onTouchStart:composeEventHandlers(v,w)}]:[!1,R,{}]}function composeEventHandlers(t,a){return l=>{t&&t(l),l.defaultPrevented||a(l)}}function PrefetchPageLinks({page:t,...a}){let{router:l}=useDataRouterContext2(),c=reactExports$1.useMemo(()=>matchRoutes(l.routes,t,l.basename),[l.routes,t,l.basename]);return c?reactExports$1.createElement(PrefetchPageLinksImpl,{page:t,matches:c,...a}):null}function useKeyedPrefetchLinks(t){let{manifest:a,routeModules:l}=useFrameworkContext(),[c,s]=reactExports$1.useState([]);return reactExports$1.useEffect(()=>{let d=!1;return getKeyedPrefetchLinks(t,a,l).then(m=>{d||s(m)}),()=>{d=!0}},[t,a,l]),c}function PrefetchPageLinksImpl({page:t,matches:a,...l}){let c=useLocation(),{future:s,manifest:d,routeModules:m}=useFrameworkContext(),{basename:f}=useDataRouterContext2(),{loaderData:x,matches:h}=useDataRouterStateContext(),E=reactExports$1.useMemo(()=>getNewMatchesForLinks(t,a,h,d,c,"data"),[t,a,h,d,c]),v=reactExports$1.useMemo(()=>getNewMatchesForLinks(t,a,h,d,c,"assets"),[t,a,h,d,c]),R=reactExports$1.useMemo(()=>{if(t===c.pathname+c.search+c.hash)return[];let U=new Set,$=!1;if(a.forEach(Z=>{var ge;let q=d.routes[Z.route.id];!q||!q.hasLoader||(!E.some(ue=>ue.route.id===Z.route.id)&&Z.route.id in x&&((ge=m[Z.route.id])!=null&&ge.shouldRevalidate)||q.hasClientLoader?$=!0:U.add(Z.route.id))}),U.size===0)return[];let z=singleFetchUrl(t,f,s.unstable_trailingSlashAwareDataRequests,"data");return $&&U.size>0&&z.searchParams.set("_routes",a.filter(Z=>U.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[z.pathname+z.search]},[f,s.unstable_trailingSlashAwareDataRequests,x,c,d,E,a,t,m]),w=reactExports$1.useMemo(()=>getModuleLinkHrefs(v,d),[v,d]),B=useKeyedPrefetchLinks(v);return reactExports$1.createElement(reactExports$1.Fragment,null,R.map(U=>reactExports$1.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...l})),w.map(U=>reactExports$1.createElement("link",{key:U,rel:"modulepreload",href:U,...l})),B.map(({key:U,link:$})=>reactExports$1.createElement("link",{key:U,nonce:l.nonce,...$})))}function mergeRefs(...t){return a=>{t.forEach(l=>{typeof l=="function"?l(a):l!=null&&(l.current=a)})}}var isBrowser2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{isBrowser2&&(window.__reactRouterVersion="7.12.0")}catch{}function BrowserRouter({basename:t,children:a,unstable_useTransitions:l,window:c}){let s=reactExports$1.useRef();s.current==null&&(s.current=createBrowserHistory({window:c,v5Compat:!0}));let d=s.current,[m,f]=reactExports$1.useState({action:d.action,location:d.location}),x=reactExports$1.useCallback(h=>{l===!1?f(h):reactExports$1.startTransition(()=>f(h))},[l]);return reactExports$1.useLayoutEffect(()=>d.listen(x),[d,x]),reactExports$1.createElement(Router,{basename:t,children:a,location:m.location,navigationType:m.action,navigator:d,unstable_useTransitions:l})}var ABSOLUTE_URL_REGEX2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=reactExports$1.forwardRef(function({onClick:a,discover:l="render",prefetch:c="none",relative:s,reloadDocument:d,replace:m,state:f,target:x,to:h,preventScrollReset:E,viewTransition:v,unstable_defaultShouldRevalidate:R,...w},B){let{basename:U,unstable_useTransitions:$}=reactExports$1.useContext(NavigationContext),z=typeof h=="string"&&ABSOLUTE_URL_REGEX2.test(h),Z=parseToInfo(h,U);h=Z.to;let q=useHref(h,{relative:s}),[ge,ue,K]=usePrefetchBehavior(c,w),ne=useLinkClickHandler(h,{replace:m,state:f,target:x,preventScrollReset:E,relative:s,viewTransition:v,unstable_defaultShouldRevalidate:R,unstable_useTransitions:$});function ke(Ae){a&&a(Ae),Ae.defaultPrevented||ne(Ae)}let _e=reactExports$1.createElement("a",{...w,...K,href:Z.absoluteURL||q,onClick:Z.isExternal||d?a:ke,ref:mergeRefs(B,ue),target:x,"data-discover":!z&&l==="render"?"true":void 0});return ge&&!z?reactExports$1.createElement(reactExports$1.Fragment,null,_e,reactExports$1.createElement(PrefetchPageLinks,{page:q})):_e});Link.displayName="Link";var NavLink=reactExports$1.forwardRef(function({"aria-current":a="page",caseSensitive:l=!1,className:c="",end:s=!1,style:d,to:m,viewTransition:f,children:x,...h},E){let v=useResolvedPath(m,{relative:h.relative}),R=useLocation(),w=reactExports$1.useContext(DataRouterStateContext),{navigator:B,basename:U}=reactExports$1.useContext(NavigationContext),$=w!=null&&useViewTransitionState(v)&&f===!0,z=B.encodeLocation?B.encodeLocation(v).pathname:v.pathname,Z=R.pathname,q=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;l||(Z=Z.toLowerCase(),q=q?q.toLowerCase():null,z=z.toLowerCase()),q&&U&&(q=stripBasename(q,U)||q);const ge=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let ue=Z===z||!s&&Z.startsWith(z)&&Z.charAt(ge)==="/",K=q!=null&&(q===z||!s&&q.startsWith(z)&&q.charAt(z.length)==="/"),ne={isActive:ue,isPending:K,isTransitioning:$},ke=ue?a:void 0,_e;typeof c=="function"?_e=c(ne):_e=[c,ue?"active":null,K?"pending":null,$?"transitioning":null].filter(Boolean).join(" ");let Ae=typeof d=="function"?d(ne):d;return reactExports$1.createElement(Link,{...h,"aria-current":ke,className:_e,ref:E,style:Ae,to:m,viewTransition:f},typeof x=="function"?x(ne):x)});NavLink.displayName="NavLink";var Form=reactExports$1.forwardRef(({discover:t="render",fetcherKey:a,navigate:l,reloadDocument:c,replace:s,state:d,method:m=defaultMethod,action:f,onSubmit:x,relative:h,preventScrollReset:E,viewTransition:v,unstable_defaultShouldRevalidate:R,...w},B)=>{let{unstable_useTransitions:U}=reactExports$1.useContext(NavigationContext),$=useSubmit(),z=useFormAction(f,{relative:h}),Z=m.toLowerCase()==="get"?"get":"post",q=typeof f=="string"&&ABSOLUTE_URL_REGEX2.test(f),ge=ue=>{if(x&&x(ue),ue.defaultPrevented)return;ue.preventDefault();let K=ue.nativeEvent.submitter,ne=(K==null?void 0:K.getAttribute("formmethod"))||m,ke=()=>$(K||ue.currentTarget,{fetcherKey:a,method:ne,navigate:l,replace:s,state:d,relative:h,preventScrollReset:E,viewTransition:v,unstable_defaultShouldRevalidate:R});U&&l!==!1?reactExports$1.startTransition(()=>ke()):ke()};return reactExports$1.createElement("form",{ref:B,method:Z,action:z,onSubmit:c?x:ge,...w,"data-discover":!q&&t==="render"?"true":void 0})});Form.displayName="Form";function getDataRouterConsoleError2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function useDataRouterContext3(t){let a=reactExports$1.useContext(DataRouterContext);return invariant(a,getDataRouterConsoleError2(t)),a}function useLinkClickHandler(t,{target:a,replace:l,state:c,preventScrollReset:s,relative:d,viewTransition:m,unstable_defaultShouldRevalidate:f,unstable_useTransitions:x}={}){let h=useNavigate(),E=useLocation(),v=useResolvedPath(t,{relative:d});return reactExports$1.useCallback(R=>{if(shouldProcessLinkClick(R,a)){R.preventDefault();let w=l!==void 0?l:createPath(E)===createPath(v),B=()=>h(t,{replace:w,state:c,preventScrollReset:s,relative:d,viewTransition:m,unstable_defaultShouldRevalidate:f});x?reactExports$1.startTransition(()=>B()):B()}},[E,h,v,l,c,a,t,s,d,m,f,x])}var fetcherId=0,getUniqueFetcherId=()=>`__${String(++fetcherId)}__`;function useSubmit(){let{router:t}=useDataRouterContext3("useSubmit"),{basename:a}=reactExports$1.useContext(NavigationContext),l=useRouteId(),c=t.fetch,s=t.navigate;return reactExports$1.useCallback(async(d,m={})=>{let{action:f,method:x,encType:h,formData:E,body:v}=getFormSubmissionInfo(d,a);if(m.navigate===!1){let R=m.fetcherKey||getUniqueFetcherId();await c(R,l,m.action||f,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:E,body:v,formMethod:m.method||x,formEncType:m.encType||h,flushSync:m.flushSync})}else await s(m.action||f,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:E,body:v,formMethod:m.method||x,formEncType:m.encType||h,replace:m.replace,state:m.state,fromRouteId:l,flushSync:m.flushSync,viewTransition:m.viewTransition})},[c,s,a,l])}function useFormAction(t,{relative:a}={}){let{basename:l}=reactExports$1.useContext(NavigationContext),c=reactExports$1.useContext(RouteContext);invariant(c,"useFormAction must be used inside a RouteContext");let[s]=c.matches.slice(-1),d={...useResolvedPath(t||".",{relative:a})},m=useLocation();if(t==null){d.search=m.search;let f=new URLSearchParams(d.search),x=f.getAll("index");if(x.some(E=>E==="")){f.delete("index"),x.filter(v=>v).forEach(v=>f.append("index",v));let E=f.toString();d.search=E?`?${E}`:""}}return(!t||t===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(d.pathname=d.pathname==="/"?l:joinPaths([l,d.pathname])),createPath(d)}function useViewTransitionState(t,{relative:a}={}){let l=reactExports$1.useContext(ViewTransitionContext);invariant(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=useDataRouterContext3("useViewTransitionState"),s=useResolvedPath(t,{relative:a});if(!l.isTransitioning)return!1;let d=stripBasename(l.currentLocation.pathname,c)||l.currentLocation.pathname,m=stripBasename(l.nextLocation.pathname,c)||l.nextLocation.pathname;return matchPath(s.pathname,m)!=null||matchPath(s.pathname,d)!=null}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const toKebabCase$1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),toCamelCase$1=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,l,c)=>c?c.toUpperCase():l.toLowerCase()),toPascalCase$1=t=>{const a=toCamelCase$1(t);return a.charAt(0).toUpperCase()+a.slice(1)},mergeClasses$1=(...t)=>t.filter((a,l,c)=>!!a&&a.trim()!==""&&c.indexOf(a)===l).join(" ").trim(),hasA11yProp$1=t=>{for(const a in t)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var defaultAttributes$1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Icon$1=reactExports$1.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:s="",children:d,iconNode:m,...f},x)=>reactExports$1.createElement("svg",{ref:x,...defaultAttributes$1,width:a,height:a,stroke:t,strokeWidth:c?Number(l)*24/Number(a):l,className:mergeClasses$1("lucide",s),...!d&&!hasA11yProp$1(f)&&{"aria-hidden":"true"},...f},[...m.map(([h,E])=>reactExports$1.createElement(h,E)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const createLucideIcon$1=(t,a)=>{const l=reactExports$1.forwardRef(({className:c,...s},d)=>reactExports$1.createElement(Icon$1,{ref:d,iconNode:a,className:mergeClasses$1(`lucide-${toKebabCase$1(toPascalCase$1(t))}`,`lucide-${t}`,c),...s}));return l.displayName=toPascalCase$1(t),l};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$o=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Boxes=createLucideIcon$1("boxes",__iconNode$o);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$n=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Brain=createLucideIcon$1("brain",__iconNode$n);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$m=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ChevronRight$1=createLucideIcon$1("chevron-right",__iconNode$m);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$l=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],CodeXml=createLucideIcon$1("code-xml",__iconNode$l);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$k=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],FileCodeCorner=createLucideIcon$1("file-code-corner",__iconNode$k);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$j=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],FingerprintPattern=createLucideIcon$1("fingerprint-pattern",__iconNode$j);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$i=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],GitBranch=createLucideIcon$1("git-branch",__iconNode$i);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$h=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Github=createLucideIcon$1("github",__iconNode$h);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$g=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],History=createLucideIcon$1("history",__iconNode$g);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$f=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Layers=createLucideIcon$1("layers",__iconNode$f);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$e=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Menu$1=createLucideIcon$1("menu",__iconNode$e);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$d=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Network=createLucideIcon$1("network",__iconNode$d);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$c=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Package=createLucideIcon$1("package",__iconNode$c);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$b=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Shield=createLucideIcon$1("shield",__iconNode$b);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$a=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Sparkles=createLucideIcon$1("sparkles",__iconNode$a);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$9=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Terminal=createLucideIcon$1("terminal",__iconNode$9);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$8=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Twitter=createLucideIcon$1("twitter",__iconNode$8);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$7=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],X$1=createLucideIcon$1("x",__iconNode$7);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$6=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Zap=createLucideIcon$1("zap",__iconNode$6);var jsxRuntime$1={exports:{}},reactJsxRuntime_production$1={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactJsxRuntime_production$1;function requireReactJsxRuntime_production$1(){if(hasRequiredReactJsxRuntime_production$1)return reactJsxRuntime_production$1;hasRequiredReactJsxRuntime_production$1=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(c,s,d){var m=null;if(d!==void 0&&(m=""+d),s.key!==void 0&&(m=""+s.key),"key"in s){d={};for(var f in s)f!=="key"&&(d[f]=s[f])}else d=s;return s=d.ref,{$$typeof:t,type:c,key:m,ref:s!==void 0?s:null,props:d}}return reactJsxRuntime_production$1.Fragment=a,reactJsxRuntime_production$1.jsx=l,reactJsxRuntime_production$1.jsxs=l,reactJsxRuntime_production$1}var hasRequiredJsxRuntime$1;function requireJsxRuntime$1(){return hasRequiredJsxRuntime$1||(hasRequiredJsxRuntime$1=1,jsxRuntime$1.exports=requireReactJsxRuntime_production$1()),jsxRuntime$1.exports}var jsxRuntimeExports$1=requireJsxRuntime$1(),react$1={exports:{}},react_production$1={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReact_production$1;function requireReact_production$1(){if(hasRequiredReact_production$1)return react_production$1;hasRequiredReact_production$1=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),R=Symbol.iterator;function w(k){return k===null||typeof k!="object"?null:(k=R&&k[R]||k["@@iterator"],typeof k=="function"?k:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,$={};function z(k,N,T){this.props=k,this.context=N,this.refs=$,this.updater=T||B}z.prototype.isReactComponent={},z.prototype.setState=function(k,N){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,N,"setState")},z.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Z(){}Z.prototype=z.prototype;function q(k,N,T){this.props=k,this.context=N,this.refs=$,this.updater=T||B}var ge=q.prototype=new Z;ge.constructor=q,U(ge,z.prototype),ge.isPureReactComponent=!0;var ue=Array.isArray;function K(){}var ne={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function _e(k,N,T){var V=T.ref;return{$$typeof:t,type:k,key:N,ref:V!==void 0?V:null,props:T}}function Ae(k,N){return _e(k.type,N,k.props)}function ye(k){return typeof k=="object"&&k!==null&&k.$$typeof===t}function be(k){var N={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(T){return N[T]})}var Ne=/\/+/g;function xe(k,N){return typeof k=="object"&&k!==null&&k.key!=null?be(""+k.key):N.toString(36)}function fe(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(K,K):(k.status="pending",k.then(function(N){k.status==="pending"&&(k.status="fulfilled",k.value=N)},function(N){k.status==="pending"&&(k.status="rejected",k.reason=N)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function F(k,N,T,V,ee){var le=typeof k;(le==="undefined"||le==="boolean")&&(k=null);var he=!1;if(k===null)he=!0;else switch(le){case"bigint":case"string":case"number":he=!0;break;case"object":switch(k.$$typeof){case t:case a:he=!0;break;case E:return he=k._init,F(he(k._payload),N,T,V,ee)}}if(he)return ee=ee(k),he=V===""?"."+xe(k,0):V,ue(ee)?(T="",he!=null&&(T=he.replace(Ne,"$&/")+"/"),F(ee,N,T,"",function(Ke){return Ke})):ee!=null&&(ye(ee)&&(ee=Ae(ee,T+(ee.key==null||k&&k.key===ee.key?"":(""+ee.key).replace(Ne,"$&/")+"/")+he)),N.push(ee)),1;he=0;var Ce=V===""?".":V+":";if(ue(k))for(var Ee=0;Ee<k.length;Ee++)V=k[Ee],le=Ce+xe(V,Ee),he+=F(V,N,T,le,ee);else if(Ee=w(k),typeof Ee=="function")for(k=Ee.call(k),Ee=0;!(V=k.next()).done;)V=V.value,le=Ce+xe(V,Ee++),he+=F(V,N,T,le,ee);else if(le==="object"){if(typeof k.then=="function")return F(fe(k),N,T,V,ee);throw N=String(k),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return he}function pe(k,N,T){if(k==null)return k;var V=[],ee=0;return F(k,V,"","",function(le){return N.call(T,le,ee++)}),V}function ce(k){if(k._status===-1){var N=k._result;N=N(),N.then(function(T){(k._status===0||k._status===-1)&&(k._status=1,k._result=T)},function(T){(k._status===0||k._status===-1)&&(k._status=2,k._result=T)}),k._status===-1&&(k._status=0,k._result=N)}if(k._status===1)return k._result.default;throw k._result}var Re=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},L={map:pe,forEach:function(k,N,T){pe(k,function(){N.apply(this,arguments)},T)},count:function(k){var N=0;return pe(k,function(){N++}),N},toArray:function(k){return pe(k,function(N){return N})||[]},only:function(k){if(!ye(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return react_production$1.Activity=v,react_production$1.Children=L,react_production$1.Component=z,react_production$1.Fragment=l,react_production$1.Profiler=s,react_production$1.PureComponent=q,react_production$1.StrictMode=c,react_production$1.Suspense=x,react_production$1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne,react_production$1.__COMPILER_RUNTIME={__proto__:null,c:function(k){return ne.H.useMemoCache(k)}},react_production$1.cache=function(k){return function(){return k.apply(null,arguments)}},react_production$1.cacheSignal=function(){return null},react_production$1.cloneElement=function(k,N,T){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var V=U({},k.props),ee=k.key;if(N!=null)for(le in N.key!==void 0&&(ee=""+N.key),N)!ke.call(N,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&N.ref===void 0||(V[le]=N[le]);var le=arguments.length-2;if(le===1)V.children=T;else if(1<le){for(var he=Array(le),Ce=0;Ce<le;Ce++)he[Ce]=arguments[Ce+2];V.children=he}return _e(k.type,ee,V)},react_production$1.createContext=function(k){return k={$$typeof:m,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:d,_context:k},k},react_production$1.createElement=function(k,N,T){var V,ee={},le=null;if(N!=null)for(V in N.key!==void 0&&(le=""+N.key),N)ke.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ee[V]=N[V]);var he=arguments.length-2;if(he===1)ee.children=T;else if(1<he){for(var Ce=Array(he),Ee=0;Ee<he;Ee++)Ce[Ee]=arguments[Ee+2];ee.children=Ce}if(k&&k.defaultProps)for(V in he=k.defaultProps,he)ee[V]===void 0&&(ee[V]=he[V]);return _e(k,le,ee)},react_production$1.createRef=function(){return{current:null}},react_production$1.forwardRef=function(k){return{$$typeof:f,render:k}},react_production$1.isValidElement=ye,react_production$1.lazy=function(k){return{$$typeof:E,_payload:{_status:-1,_result:k},_init:ce}},react_production$1.memo=function(k,N){return{$$typeof:h,type:k,compare:N===void 0?null:N}},react_production$1.startTransition=function(k){var N=ne.T,T={};ne.T=T;try{var V=k(),ee=ne.S;ee!==null&&ee(T,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(K,Re)}catch(le){Re(le)}finally{N!==null&&T.types!==null&&(N.types=T.types),ne.T=N}},react_production$1.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()},react_production$1.use=function(k){return ne.H.use(k)},react_production$1.useActionState=function(k,N,T){return ne.H.useActionState(k,N,T)},react_production$1.useCallback=function(k,N){return ne.H.useCallback(k,N)},react_production$1.useContext=function(k){return ne.H.useContext(k)},react_production$1.useDebugValue=function(){},react_production$1.useDeferredValue=function(k,N){return ne.H.useDeferredValue(k,N)},react_production$1.useEffect=function(k,N){return ne.H.useEffect(k,N)},react_production$1.useEffectEvent=function(k){return ne.H.useEffectEvent(k)},react_production$1.useId=function(){return ne.H.useId()},react_production$1.useImperativeHandle=function(k,N,T){return ne.H.useImperativeHandle(k,N,T)},react_production$1.useInsertionEffect=function(k,N){return ne.H.useInsertionEffect(k,N)},react_production$1.useLayoutEffect=function(k,N){return ne.H.useLayoutEffect(k,N)},react_production$1.useMemo=function(k,N){return ne.H.useMemo(k,N)},react_production$1.useOptimistic=function(k,N){return ne.H.useOptimistic(k,N)},react_production$1.useReducer=function(k,N,T){return ne.H.useReducer(k,N,T)},react_production$1.useRef=function(k){return ne.H.useRef(k)},react_production$1.useState=function(k){return ne.H.useState(k)},react_production$1.useSyncExternalStore=function(k,N,T){return ne.H.useSyncExternalStore(k,N,T)},react_production$1.useTransition=function(){return ne.H.useTransition()},react_production$1.version="19.2.3",react_production$1}var hasRequiredReact$1;function requireReact$1(){return hasRequiredReact$1||(hasRequiredReact$1=1,react$1.exports=requireReact_production$1()),react$1.exports}var reactExports=requireReact$1();reactExports.createContext(void 0);function r(t){var a,l,c="";if(typeof t=="string"||typeof t=="number")c+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(a=0;a<s;a++)t[a]&&(l=r(t[a]))&&(c&&(c+=" "),c+=l)}else for(l in t)t[l]&&(c&&(c+=" "),c+=l);return c}function clsx(){for(var t,a,l=0,c="",s=arguments.length;l<s;l++)(t=arguments[l])&&(a=r(t))&&(c&&(c+=" "),c+=a);return c}function cn(...t){return clsx(t)}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const toKebabCase=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),toCamelCase=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,l,c)=>c?c.toUpperCase():l.toLowerCase()),toPascalCase=t=>{const a=toCamelCase(t);return a.charAt(0).toUpperCase()+a.slice(1)},mergeClasses=(...t)=>t.filter((a,l,c)=>!!a&&a.trim()!==""&&c.indexOf(a)===l).join(" ").trim(),hasA11yProp=t=>{for(const a in t)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Icon=reactExports.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:s="",children:d,iconNode:m,...f},x)=>reactExports.createElement("svg",{ref:x,...defaultAttributes,width:a,height:a,stroke:t,strokeWidth:c?Number(l)*24/Number(a):l,className:mergeClasses("lucide",s),...!d&&!hasA11yProp(f)&&{"aria-hidden":"true"},...f},[...m.map(([h,E])=>reactExports.createElement(h,E)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const createLucideIcon=(t,a)=>{const l=reactExports.forwardRef(({className:c,...s},d)=>reactExports.createElement(Icon,{ref:d,iconNode:a,className:mergeClasses(`lucide-${toKebabCase(toPascalCase(t))}`,`lucide-${t}`,c),...s}));return l.displayName=toPascalCase(t),l};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$5=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Check=createLucideIcon("check",__iconNode$5);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$4=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ChevronDown=createLucideIcon("chevron-down",__iconNode$4);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$3=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ChevronRight=createLucideIcon("chevron-right",__iconNode$3);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Copy=createLucideIcon("copy",__iconNode$2);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode$1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Menu=createLucideIcon("menu",__iconNode$1);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],X=createLucideIcon("x",__iconNode),buttonVariants={default:"bg-primary text-primary-foreground hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},buttonSizes={sm:"h-8 px-3 text-xs",md:"h-9 px-4 text-sm",lg:"h-10 px-6 text-base",icon:"h-9 w-9"},Button=reactExports.forwardRef(({className:t,variant:a="default",size:l="md",...c},s)=>jsxRuntimeExports$1.jsx("button",{ref:s,className:cn("inline-flex items-center justify-center rounded-md font-medium transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:pointer-events-none disabled:opacity-50",buttonVariants[a],buttonSizes[l],t),...c}));Button.displayName="Button";const containerSizes={sm:"max-w-3xl",md:"max-w-5xl",lg:"max-w-6xl",xl:"max-w-7xl",full:"max-w-full"};function Container({size:t="xl",className:a,children:l,...c}){return jsxRuntimeExports$1.jsx("div",{className:cn("mx-auto w-full px-4 sm:px-6 lg:px-8",containerSizes[t],a),...c,children:l})}const spacingStyles={none:"",sm:"py-12 md:py-16",md:"py-16 md:py-24",lg:"py-24 md:py-32",xl:"py-32 md:py-40"},themeStyles={light:"bg-background text-foreground",dark:"bg-foreground text-background",gradient:"bg-gradient-to-b from-background to-muted",muted:"bg-muted/50"};function Section({spacing:t="lg",theme:a,className:l,children:c,as:s="section",...d}){return jsxRuntimeExports$1.jsx(s,{className:cn(spacingStyles[t],a&&themeStyles[a],l),...d,children:c})}const gradientPresets={"purple-blue":"from-purple-500 via-violet-500 to-blue-500","cyan-blue":"from-cyan-400 via-blue-500 to-purple-600","pink-purple":"from-pink-500 via-purple-500 to-indigo-500","orange-red":"from-orange-500 via-red-500 to-pink-500","green-cyan":"from-green-400 via-cyan-500 to-blue-500","blue-purple":"from-blue-500 via-purple-500 to-pink-500",sunset:"from-orange-400 via-pink-500 to-purple-600",ocean:"from-cyan-500 via-blue-500 to-indigo-600",gray:"from-foreground via-foreground/80 to-foreground/60"};function GradientText({children:t,gradient:a="cyan-blue",customGradient:l,animate:c=!1,className:s,as:d="span",...m}){const f=a==="custom"&&l?l:gradientPresets[a];return jsxRuntimeExports$1.jsx(d,{className:cn("bg-gradient-to-r bg-clip-text text-transparent",f,c&&"animate-gradient bg-[length:200%_auto]",s),...m,children:t})}const alignStyles={left:"text-left",center:"text-center mx-auto",right:"text-right ml-auto"},titleSizes={sm:"text-2xl md:text-3xl",md:"text-3xl md:text-4xl",lg:"text-4xl md:text-5xl lg:text-6xl",xl:"text-5xl md:text-6xl lg:text-7xl"},subtitleSizes={sm:"text-base md:text-lg",md:"text-lg md:text-xl",lg:"text-xl md:text-2xl",xl:"text-xl md:text-2xl"};function SectionTitle({title:t,subtitle:a,label:l,labelGradient:c="cyan-blue",align:s="center",size:d="lg",maxWidth:m="max-w-3xl",className:f,titleClassName:x,subtitleClassName:h,labelClassName:E,...v}){return jsxRuntimeExports$1.jsxs("div",{className:cn(alignStyles[s],m,f),...v,children:[l&&jsxRuntimeExports$1.jsx(GradientText,{gradient:c,className:cn("mb-4 block text-sm font-semibold uppercase tracking-wider",E),children:l}),jsxRuntimeExports$1.jsx("h2",{className:cn("font-bold tracking-tight",titleSizes[d],x),children:t}),a&&jsxRuntimeExports$1.jsx("p",{className:cn("mt-4 text-muted-foreground",subtitleSizes[d],h),children:a})]})}const sizeStyles$3={sm:{title:"text-3xl md:text-4xl lg:text-5xl",subtitle:"text-lg md:text-xl",padding:"py-16 md:py-20"},md:{title:"text-4xl md:text-5xl lg:text-6xl",subtitle:"text-lg md:text-xl",padding:"py-20 md:py-28"},lg:{title:"text-4xl md:text-5xl lg:text-6xl xl:text-7xl",subtitle:"text-xl md:text-2xl",padding:"py-24 md:py-32"},xl:{title:"text-5xl md:text-6xl lg:text-7xl xl:text-8xl",subtitle:"text-xl md:text-2xl",padding:"py-32 md:py-40"}},actionVariantStyles$1={primary:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",outline:"border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",ghost:"hover:bg-accent hover:text-accent-foreground"};function Hero({title:t,titleGradient:a,titleGradientPreset:l="cyan-blue",subtitle:c,badge:s,actions:d,media:m,layout:f="centered",size:x="lg",containerSize:h="xl",backgroundElement:E,className:v,titleClassName:R,subtitleClassName:w,contentAlign:B="center",...U}){const $=sizeStyles$3[x],z={left:"text-left mr-auto max-w-4xl",center:"text-center mx-auto max-w-4xl",right:"text-right ml-auto max-w-4xl"},Z={left:"justify-start",center:"justify-center",right:"justify-end"},q=()=>jsxRuntimeExports$1.jsxs("h1",{className:cn("font-bold tracking-tight leading-tight",$.title,R),children:[t,a&&jsxRuntimeExports$1.jsxs(jsxRuntimeExports$1.Fragment,{children:[jsxRuntimeExports$1.jsx("br",{}),jsxRuntimeExports$1.jsx(GradientText,{gradient:l,className:$.title,children:a})]})]}),ge=()=>jsxRuntimeExports$1.jsxs("div",{className:cn(f==="centered"&&z[B],f!=="centered"&&"max-w-xl"),children:[s&&jsxRuntimeExports$1.jsx("div",{className:"mb-6",children:s}),q(),c&&jsxRuntimeExports$1.jsx("p",{className:cn("mt-6 text-muted-foreground leading-relaxed",$.subtitle,w),children:c}),d&&d.length>0&&jsxRuntimeExports$1.jsx("div",{className:cn("mt-8 flex flex-wrap gap-4",f==="centered"&&Z[B]),children:d.map((ue,K)=>{const ne=ue.href?"a":"button";return jsxRuntimeExports$1.jsxs(ne,{href:ue.href,onClick:ue.onClick,className:cn("inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",actionVariantStyles$1[ue.variant||"primary"]),children:[ue.icon&&ue.iconPosition!=="right"&&ue.icon,ue.label,ue.icon&&ue.iconPosition==="right"&&ue.icon]},K)})})]});return f==="centered"?jsxRuntimeExports$1.jsxs("section",{className:cn("relative overflow-hidden",$.padding,v),...U,children:[E&&jsxRuntimeExports$1.jsx("div",{className:"absolute inset-0 -z-10",children:E}),jsxRuntimeExports$1.jsxs(Container,{size:h,children:[ge(),m&&jsxRuntimeExports$1.jsx("div",{className:"mt-12 lg:mt-16",children:m})]})]}):jsxRuntimeExports$1.jsxs("section",{className:cn("relative overflow-hidden",$.padding,v),...U,children:[E&&jsxRuntimeExports$1.jsx("div",{className:"absolute inset-0 -z-10",children:E}),jsxRuntimeExports$1.jsx(Container,{size:h,children:jsxRuntimeExports$1.jsxs("div",{className:cn("grid items-center gap-12 lg:grid-cols-2 lg:gap-16",f==="split-reverse"&&"lg:grid-flow-dense"),children:[jsxRuntimeExports$1.jsx("div",{className:f==="split-reverse"?"lg:col-start-2":"",children:ge()}),m&&jsxRuntimeExports$1.jsx("div",{className:f==="split-reverse"?"lg:col-start-1":"",children:m})]})})]})}const variantStyles$6={default:"bg-secondary text-secondary-foreground",outline:"border border-border bg-transparent",gradient:"bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20",glow:"bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(var(--primary)/0.3)]"};function HeroBadge({children:t,variant:a="default",icon:l,href:c,showArrow:s=!1,className:d,...m}){const f=jsxRuntimeExports$1.jsxs(jsxRuntimeExports$1.Fragment,{children:[l&&jsxRuntimeExports$1.jsx("span",{className:"mr-2",children:l}),jsxRuntimeExports$1.jsx("span",{children:t}),s&&jsxRuntimeExports$1.jsx(ChevronRight,{className:"ml-1 h-3 w-3"})]}),x=cn("inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors",variantStyles$6[a],c&&"cursor-pointer hover:bg-accent/80",d);return c?jsxRuntimeExports$1.jsx("a",{href:c,className:x,...m,children:f}):jsxRuntimeExports$1.jsx("div",{className:x,...m,children:f})}function HeroBackground({variant:t="gradient",className:a,primaryColor:l="rgba(6, 182, 212, 0.15)",secondaryColor:c="rgba(168, 85, 247, 0.15)"}){switch(t){case"gradient":return jsxRuntimeExports$1.jsx("div",{className:cn("absolute inset-0",a),style:{background:`radial-gradient(ellipse 80% 50% at 50% -20%, ${l}, transparent)`}});case"grid":return jsxRuntimeExports$1.jsxs("div",{className:cn("absolute inset-0",a),children:[jsxRuntimeExports$1.jsx("div",{className:"absolute inset-0",style:{backgroundImage:"linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",backgroundSize:"4rem 4rem"}}),jsxRuntimeExports$1.jsx("div",{className:"absolute inset-0",style:{background:`radial-gradient(ellipse 80% 50% at 50% 0%, ${l}, transparent)`}})]});case"dots":return jsxRuntimeExports$1.jsxs("div",{className:cn("absolute inset-0",a),children:[jsxRuntimeExports$1.jsx("div",{className:"absolute inset-0 opacity-50",style:{backgroundImage:"radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)",backgroundSize:"2rem 2rem"}}),jsxRuntimeExports$1.jsx("div",{className:"absolute inset-0",style:{background:`radial-gradient(ellipse 60% 40% at 50% 0%, ${l}, transparent)`}})]});case"radial":return jsxRuntimeExports$1.jsx("div",{className:cn("absolute inset-0",a),children:jsxRuntimeExports$1.jsx("div",{className:"absolute inset-0",style:{background:`
                radial-gradient(circle at 20% 20%, ${l} 0%, transparent 40%),
                radial-gradient(circle at 80% 80%, ${c} 0%, transparent 40%)
              `}})});case"mesh":return jsxRuntimeExports$1.jsx("div",{className:cn("absolute inset-0 overflow-hidden",a),children:jsxRuntimeExports$1.jsx("div",{className:"absolute -inset-[100%] animate-spin-slow",style:{background:`
                radial-gradient(circle at 25% 25%, ${l} 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, ${c} 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
              `,animationDuration:"60s"}})});case"aurora":return jsxRuntimeExports$1.jsx("div",{className:cn("absolute inset-0 overflow-hidden",a),children:jsxRuntimeExports$1.jsx("div",{className:"absolute -top-1/2 left-1/2 -translate-x-1/2 w-[200%] aspect-[16/9]",children:jsxRuntimeExports$1.jsx("div",{className:"absolute inset-0 blur-3xl",style:{background:`
                  linear-gradient(135deg, ${l} 0%, transparent 50%),
                  linear-gradient(225deg, ${c} 0%, transparent 50%),
                  linear-gradient(315deg, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
                `}})})});case"waves":return jsxRuntimeExports$1.jsx("div",{className:cn("absolute inset-0 overflow-hidden",a),children:jsxRuntimeExports$1.jsxs("svg",{className:"absolute bottom-0 w-full h-1/2",viewBox:"0 0 1440 320",preserveAspectRatio:"none",children:[jsxRuntimeExports$1.jsx("defs",{children:jsxRuntimeExports$1.jsxs("linearGradient",{id:"waveGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[jsxRuntimeExports$1.jsx("stop",{offset:"0%",stopColor:l}),jsxRuntimeExports$1.jsx("stop",{offset:"100%",stopColor:c})]})}),jsxRuntimeExports$1.jsx("path",{fill:"url(#waveGradient)",d:"M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})]})});default:return null}}const variantStyles$5={default:"bg-card",bordered:"bg-card border border-border",elevated:"bg-card shadow-lg hover:shadow-xl transition-shadow",glass:"bg-white/5 backdrop-blur-xl border border-white/10",gradient:"bg-gradient-to-br from-card to-muted border border-border"},sizeStyles$2={sm:{padding:"p-4",icon:"w-8 h-8",title:"text-base",desc:"text-sm"},md:{padding:"p-6",icon:"w-10 h-10",title:"text-lg",desc:"text-base"},lg:{padding:"p-8",icon:"w-12 h-12",title:"text-xl",desc:"text-base"}};function FeatureCard({icon:t,title:a,description:l,variant:c="bordered",size:s="md",iconBackground:d,href:m,action:f,className:x,...h}){const E=sizeStyles$2[s],v=jsxRuntimeExports$1.jsxs(jsxRuntimeExports$1.Fragment,{children:[t&&jsxRuntimeExports$1.jsx("div",{className:cn("flex items-center justify-center rounded-xl mb-4",E.icon,d||"bg-primary/10 text-primary"),children:t}),jsxRuntimeExports$1.jsx("h3",{className:cn("font-semibold text-foreground mb-2",E.title),children:a}),jsxRuntimeExports$1.jsx("p",{className:cn("text-muted-foreground leading-relaxed",E.desc),children:l}),f&&jsxRuntimeExports$1.jsx("div",{className:"mt-4",children:f})]}),R=cn("rounded-xl transition-all",E.padding,variantStyles$5[c],m&&"cursor-pointer hover:border-primary/50",x);return m?jsxRuntimeExports$1.jsx("a",{href:m,className:R,...h,children:v}):jsxRuntimeExports$1.jsx("div",{className:R,...h,children:v})}const columnStyles$2={2:"grid-cols-1 md:grid-cols-2",3:"grid-cols-1 md:grid-cols-2 lg:grid-cols-3",4:"grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",6:"grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"},gapStyles={sm:"gap-4",md:"gap-6",lg:"gap-8"};function FeatureGrid({title:t,subtitle:a,label:l,labelGradient:c,titleAlign:s="center",titleSize:d="lg",columns:m=3,gap:f="md",containerSize:x="xl",children:h,className:E,...v}){return jsxRuntimeExports$1.jsx("section",{className:cn("py-16 md:py-24",E),...v,children:jsxRuntimeExports$1.jsxs(Container,{size:x,children:[(t||a||l)&&jsxRuntimeExports$1.jsx(SectionTitle,{title:t,subtitle:a,label:l,labelGradient:c,align:s,size:d,className:"mb-12 md:mb-16"}),jsxRuntimeExports$1.jsx("div",{className:cn("grid",columnStyles$2[m],gapStyles[f]),children:h})]})})}function FeatureShowcase({label:t,labelGradient:a="purple-blue",title:l,description:c,features:s,media:d,layout:m="left",containerSize:f="xl",action:x,className:h,...E}){const v=m==="left"?"order-1":"order-1 lg:order-2",R=m==="left"?"order-2":"order-2 lg:order-1";return jsxRuntimeExports$1.jsx("section",{className:cn("py-16 md:py-24",h),...E,children:jsxRuntimeExports$1.jsx(Container,{size:f,children:jsxRuntimeExports$1.jsxs("div",{className:"grid items-center gap-12 lg:grid-cols-2 lg:gap-16",children:[jsxRuntimeExports$1.jsxs("div",{className:v,children:[t&&jsxRuntimeExports$1.jsx(GradientText,{gradient:a,className:"mb-4 block text-sm font-semibold uppercase tracking-wider",children:t}),jsxRuntimeExports$1.jsx("h2",{className:"text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",children:l}),c&&jsxRuntimeExports$1.jsx("p",{className:"mt-4 text-lg text-muted-foreground leading-relaxed",children:c}),s&&s.length>0&&jsxRuntimeExports$1.jsx("div",{className:"mt-8 grid gap-6 sm:grid-cols-2",children:s.map((w,B)=>jsxRuntimeExports$1.jsxs("div",{className:"flex gap-4",children:[jsxRuntimeExports$1.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",children:w.icon}),jsxRuntimeExports$1.jsxs("div",{children:[jsxRuntimeExports$1.jsx("h3",{className:"font-semibold",children:w.title}),jsxRuntimeExports$1.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:w.description})]})]},B))}),x&&jsxRuntimeExports$1.jsx("div",{className:"mt-8",children:x})]}),jsxRuntimeExports$1.jsx("div",{className:R,children:d})]})})})}const variantColorStyles={filled:{primary:"bg-primary/10 text-primary",secondary:"bg-secondary text-secondary-foreground",cyan:"bg-cyan-500/10 text-cyan-500",purple:"bg-purple-500/10 text-purple-500",pink:"bg-pink-500/10 text-pink-500",green:"bg-green-500/10 text-green-500",orange:"bg-orange-500/10 text-orange-500"},outlined:{primary:"border border-primary/30 text-primary",secondary:"border border-border text-secondary-foreground",cyan:"border border-cyan-500/30 text-cyan-500",purple:"border border-purple-500/30 text-purple-500",pink:"border border-pink-500/30 text-pink-500",green:"border border-green-500/30 text-green-500",orange:"border border-orange-500/30 text-orange-500"},gradient:{primary:"bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/10",secondary:"bg-gradient-to-br from-secondary to-secondary/50 text-secondary-foreground border border-border",cyan:"bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 text-cyan-500 border border-cyan-500/10",purple:"bg-gradient-to-br from-purple-500/20 to-purple-500/5 text-purple-500 border border-purple-500/10",pink:"bg-gradient-to-br from-pink-500/20 to-pink-500/5 text-pink-500 border border-pink-500/10",green:"bg-gradient-to-br from-green-500/20 to-green-500/5 text-green-500 border border-green-500/10",orange:"bg-gradient-to-br from-orange-500/20 to-orange-500/5 text-orange-500 border border-orange-500/10"},glass:{primary:"bg-primary/5 backdrop-blur-xl border border-primary/20 text-primary",secondary:"bg-white/5 backdrop-blur-xl border border-white/10 text-secondary-foreground",cyan:"bg-cyan-500/5 backdrop-blur-xl border border-cyan-500/20 text-cyan-500",purple:"bg-purple-500/5 backdrop-blur-xl border border-purple-500/20 text-purple-500",pink:"bg-pink-500/5 backdrop-blur-xl border border-pink-500/20 text-pink-500",green:"bg-green-500/5 backdrop-blur-xl border border-green-500/20 text-green-500",orange:"bg-orange-500/5 backdrop-blur-xl border border-orange-500/20 text-orange-500"}},sizeStyles$1={sm:{box:"w-8 h-8 rounded-lg",icon:"w-4 h-4"},md:{box:"w-10 h-10 rounded-lg",icon:"w-5 h-5"},lg:{box:"w-12 h-12 rounded-xl",icon:"w-6 h-6"},xl:{box:"w-14 h-14 rounded-xl",icon:"w-7 h-7"}};function IconBox({icon:t,variant:a="filled",size:l="md",color:c="primary",className:s,...d}){return jsxRuntimeExports$1.jsx("div",{className:cn("flex items-center justify-center",sizeStyles$1[l].box,variantColorStyles[a][c],s),...d,children:jsxRuntimeExports$1.jsx("div",{className:sizeStyles$1[l].icon,children:t})})}const columnStyles$1={4:"grid-cols-2 sm:grid-cols-4",5:"grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",6:"grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",8:"grid-cols-2 sm:grid-cols-4 lg:grid-cols-8"},variantStyles$4={default:"",muted:"opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all",bordered:"border border-border rounded-lg p-4",cards:"bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"};function LogoCloud({title:t,logos:a,variant:l="default",layout:c="inline",containerSize:s="xl",columns:d=6,className:m,...f}){const x=(h,E)=>{const v=jsxRuntimeExports$1.jsx("div",{className:cn("flex items-center justify-center h-12",l!=="default"&&variantStyles$4[l]),children:h.logo});return h.href?jsxRuntimeExports$1.jsx("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center",title:h.name,children:v},E):jsxRuntimeExports$1.jsx("div",{className:"flex items-center justify-center",title:h.name,children:v},E)};return c==="scroll"?jsxRuntimeExports$1.jsxs("section",{className:cn("py-12 overflow-hidden",m),...f,children:[jsxRuntimeExports$1.jsx(Container,{size:s,children:t&&jsxRuntimeExports$1.jsx("p",{className:"text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8",children:t})}),jsxRuntimeExports$1.jsx("div",{className:"relative",children:jsxRuntimeExports$1.jsx("div",{className:"flex animate-scroll gap-12 hover:[animation-play-state:paused]",children:[...a,...a].map((h,E)=>jsxRuntimeExports$1.jsx("div",{className:"flex-shrink-0",children:x(h,E)},E))})})]}):jsxRuntimeExports$1.jsx("section",{className:cn("py-12",m),...f,children:jsxRuntimeExports$1.jsxs(Container,{size:s,children:[t&&jsxRuntimeExports$1.jsx("p",{className:"text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8",children:t}),jsxRuntimeExports$1.jsx("div",{className:cn(c==="grid"&&`grid ${columnStyles$1[d]} gap-8 items-center`,c==="inline"&&"flex flex-wrap items-center justify-center gap-x-12 gap-y-8"),children:a.map((h,E)=>x(h,E))})]})})}const variantStyles$3={default:{wrapper:"bg-[#1a1b26] border border-[#2a2b3d] rounded-xl overflow-hidden shadow-2xl",header:"bg-[#1a1b26] border-b border-[#2a2b3d]",body:"bg-[#1a1b26]"},minimal:{wrapper:"bg-card border border-border rounded-xl overflow-hidden",header:"bg-muted/50 border-b border-border",body:"bg-card"},gradient:{wrapper:"bg-gradient-to-br from-[#1a1b26] to-[#2d2e42] border border-[#3a3b52] rounded-xl overflow-hidden shadow-2xl",header:"bg-black/20 border-b border-white/5",body:""},glass:{wrapper:"bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(15,23,42,0.25)]",header:"bg-white/10 border-b border-white/10",body:"bg-transparent"}};function CodeWindow({code:t,language:a="typescript",filename:l,showLineNumbers:c=!0,highlightLines:s=[],variant:d="default",showCopy:m=!0,header:f,className:x,...h}){const[E,v]=reactExports.useState(!1),R=variantStyles$3[d],w=t.split(`
`),B=async()=>{await navigator.clipboard.writeText(t),v(!0),setTimeout(()=>v(!1),2e3)};return jsxRuntimeExports$1.jsxs("div",{className:cn(R.wrapper,x),...h,children:[jsxRuntimeExports$1.jsxs("div",{className:cn("flex items-center justify-between px-4 py-3",R.header),children:[jsxRuntimeExports$1.jsxs("div",{className:"flex items-center gap-3",children:[jsxRuntimeExports$1.jsxs("div",{className:"flex gap-1.5",children:[jsxRuntimeExports$1.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/80"}),jsxRuntimeExports$1.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/80"}),jsxRuntimeExports$1.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/80"})]}),l&&jsxRuntimeExports$1.jsx("span",{className:"text-sm text-muted-foreground font-mono",children:l}),f]}),m&&jsxRuntimeExports$1.jsx("button",{onClick:B,className:"p-1.5 rounded-md hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground","aria-label":"Copy code",children:E?jsxRuntimeExports$1.jsx(Check,{className:"w-4 h-4"}):jsxRuntimeExports$1.jsx(Copy,{className:"w-4 h-4"})})]}),jsxRuntimeExports$1.jsx("div",{className:cn("p-4 overflow-x-auto",R.body),children:jsxRuntimeExports$1.jsx("pre",{className:"text-sm font-mono",children:jsxRuntimeExports$1.jsx("code",{className:`language-${a}`,children:w.map((U,$)=>jsxRuntimeExports$1.jsxs("div",{className:cn("flex",s.includes($+1)&&"bg-primary/10 -mx-4 px-4"),children:[c&&jsxRuntimeExports$1.jsx("span",{className:"select-none w-8 text-right pr-4 text-muted-foreground/50",children:$+1}),jsxRuntimeExports$1.jsx("span",{className:"flex-1",dangerouslySetInnerHTML:{__html:highlightSyntax(U,a)}})]},$))})})})]})}function highlightSyntax(t,a){const l={typescript:[{pattern:/(\/\/.*$)/gm,className:"text-gray-500"},{pattern:/\b(import|export|from|const|let|var|function|return|if|else|for|while|class|interface|type|extends|implements|new|this|async|await|try|catch|throw)\b/g,className:"text-purple-400"},{pattern:/\b(true|false|null|undefined)\b/g,className:"text-orange-400"},{pattern:/(['"`])((?:\\.|(?!\1)[^\\])*)\1/g,className:"text-green-400"},{pattern:/\b(\d+)\b/g,className:"text-orange-400"},{pattern:/\b([A-Z][a-zA-Z0-9]*)\b/g,className:"text-yellow-400"}],javascript:[{pattern:/(\/\/.*$)/gm,className:"text-gray-500"},{pattern:/\b(import|export|from|const|let|var|function|return|if|else|for|while|class|new|this|async|await|try|catch|throw)\b/g,className:"text-purple-400"},{pattern:/\b(true|false|null|undefined)\b/g,className:"text-orange-400"},{pattern:/(['"`])((?:\\.|(?!\1)[^\\])*)\1/g,className:"text-green-400"},{pattern:/\b(\d+)\b/g,className:"text-orange-400"}],python:[{pattern:/(#.*$)/gm,className:"text-gray-500"},{pattern:/\b(import|from|def|return|if|else|elif|for|while|class|with|as|try|except|raise|async|await|True|False|None)\b/g,className:"text-purple-400"},{pattern:/(['"])((?:\\.|(?!\1)[^\\])*)\1/g,className:"text-green-400"},{pattern:/\b(\d+)\b/g,className:"text-orange-400"}],go:[{pattern:/(\/\/.*$)/gm,className:"text-gray-500"},{pattern:/\b(package|import|func|return|if|else|for|range|struct|interface|type|var|const|defer|go|chan|select|case|default|nil|true|false)\b/g,className:"text-purple-400"},{pattern:/(['"`])((?:\\.|(?!\1)[^\\])*)\1/g,className:"text-green-400"},{pattern:/\b(\d+)\b/g,className:"text-orange-400"}]};let c=escapeHtml(t);const s=l[a]||l.typescript;for(const{pattern:d,className:m}of s)c=c.replace(d,f=>`<span class="${m}">${f}</span>`);return c}function escapeHtml(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function CodeTabs({tabs:t,defaultTab:a=0,variant:l="default",showLineNumbers:c=!0,className:s,...d}){const[m,f]=reactExports.useState(a),x={default:"bg-[#1a1b26]",minimal:"bg-card",gradient:"bg-gradient-to-br from-[#1a1b26] to-[#2d2e42]"};return jsxRuntimeExports$1.jsxs("div",{className:cn("rounded-xl overflow-hidden border",l==="default"&&"border-[#2a2b3d]",l==="minimal"&&"border-border",l==="gradient"&&"border-[#3a3b52]",s),...d,children:[jsxRuntimeExports$1.jsx("div",{className:cn("flex items-center border-b overflow-x-auto",x[l],l==="default"&&"border-[#2a2b3d]",l==="minimal"&&"border-border",l==="gradient"&&"border-white/5"),children:t.map((h,E)=>jsxRuntimeExports$1.jsx("button",{onClick:()=>f(E),className:cn("px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors","border-b-2 -mb-px",m===E?"border-primary text-foreground":"border-transparent text-muted-foreground hover:text-foreground"),children:h.label},E))}),jsxRuntimeExports$1.jsx(CodeWindow,{code:t[m].code,language:t[m].language,filename:t[m].filename,variant:l,showLineNumbers:c,showCopy:!0,className:"rounded-none border-0"})]})}const actionVariantStyles={primary:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",outline:"border border-border bg-transparent hover:bg-accent",ghost:"hover:bg-accent hover:text-accent-foreground"};function CTASection({title:t,description:a,actions:l,variant:c="centered",gradient:s,containerSize:d="lg",backgroundElement:m,media:f,className:x,...h}){const E=()=>l==null?void 0:l.map((v,R)=>{const w=v.href?"a":"button";return jsxRuntimeExports$1.jsxs(w,{href:v.href,onClick:v.onClick,className:cn("inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all",actionVariantStyles[v.variant||"primary"]),children:[v.icon&&v.icon,v.label]},R)});return c==="card"?jsxRuntimeExports$1.jsx("section",{className:cn("py-16 md:py-24",x),...h,children:jsxRuntimeExports$1.jsx(Container,{size:d,children:jsxRuntimeExports$1.jsxs("div",{className:"relative overflow-hidden rounded-2xl bg-muted/50 border border-border p-8 md:p-12 lg:p-16",children:[m&&jsxRuntimeExports$1.jsx("div",{className:"absolute inset-0 -z-10",children:m}),jsxRuntimeExports$1.jsxs("div",{className:"text-center max-w-2xl mx-auto",children:[jsxRuntimeExports$1.jsx("h2",{className:"text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",children:s?jsxRuntimeExports$1.jsx(GradientText,{gradient:s,children:t}):t}),a&&jsxRuntimeExports$1.jsx("p",{className:"mt-4 text-lg text-muted-foreground",children:a}),l&&l.length>0&&jsxRuntimeExports$1.jsx("div",{className:"mt-8 flex flex-wrap justify-center gap-4",children:E()})]})]})})}):c==="split"?jsxRuntimeExports$1.jsx("section",{className:cn("py-16 md:py-24",x),...h,children:jsxRuntimeExports$1.jsx(Container,{size:d,children:jsxRuntimeExports$1.jsxs("div",{className:"flex flex-col items-center justify-between gap-8 lg:flex-row",children:[jsxRuntimeExports$1.jsxs("div",{className:"max-w-xl",children:[jsxRuntimeExports$1.jsx("h2",{className:"text-3xl font-bold tracking-tight md:text-4xl",children:s?jsxRuntimeExports$1.jsx(GradientText,{gradient:s,children:t}):t}),a&&jsxRuntimeExports$1.jsx("p",{className:"mt-4 text-lg text-muted-foreground",children:a})]}),l&&l.length>0&&jsxRuntimeExports$1.jsx("div",{className:"flex flex-wrap gap-4",children:E()})]})})}):jsxRuntimeExports$1.jsxs("section",{className:cn("relative py-16 md:py-24",x),...h,children:[m&&jsxRuntimeExports$1.jsx("div",{className:"absolute inset-0 -z-10",children:m}),jsxRuntimeExports$1.jsx(Container,{size:d,children:jsxRuntimeExports$1.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[jsxRuntimeExports$1.jsx("h2",{className:"text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",children:s?jsxRuntimeExports$1.jsx(GradientText,{gradient:s,children:t}):t}),a&&jsxRuntimeExports$1.jsx("p",{className:"mt-4 text-lg text-muted-foreground",children:a}),l&&l.length>0&&jsxRuntimeExports$1.jsx("div",{className:"mt-8 flex flex-wrap justify-center gap-4",children:E()}),f&&jsxRuntimeExports$1.jsx("div",{className:"mt-12",children:f})]})})]})}const variantStyles$2={default:"bg-primary text-primary-foreground",gradient:"bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white",dark:"bg-gray-900 text-white",accent:"bg-accent text-accent-foreground border-b border-border"};function CTABanner({children:t,variant:a="default",action:l,dismissible:c=!1,onDismiss:s,icon:d,className:m,...f}){return jsxRuntimeExports$1.jsx("div",{className:cn("py-2.5 px-4",variantStyles$2[a],m),...f,children:jsxRuntimeExports$1.jsxs("div",{className:"flex items-center justify-center gap-4 max-w-7xl mx-auto",children:[d&&jsxRuntimeExports$1.jsx("span",{className:"shrink-0",children:d}),jsxRuntimeExports$1.jsx("p",{className:"text-sm font-medium text-center",children:t}),l&&jsxRuntimeExports$1.jsx("span",{className:"shrink-0",children:l}),c&&jsxRuntimeExports$1.jsx("button",{onClick:s,className:"shrink-0 p-1 rounded hover:bg-white/20 transition-colors ml-2","aria-label":"Dismiss",children:jsxRuntimeExports$1.jsx(X,{className:"w-4 h-4"})})]})})}const variantStyles$1={default:"bg-background/95 backdrop-blur-md",transparent:"bg-transparent",bordered:"bg-background/95 backdrop-blur-md border-b border-border"},breakpointStyles={sm:{desktop:"sm:flex",mobile:"sm:hidden"},md:{desktop:"md:flex",mobile:"md:hidden"},lg:{desktop:"lg:flex",mobile:"lg:hidden"}};function Navbar({logo:t,links:a=[],actions:l,variant:c="bordered",sticky:s=!0,mobileBreakpoint:d="lg",className:m,...f}){const[x,h]=reactExports.useState(!1),[E,v]=reactExports.useState(null),R=breakpointStyles[d],w=(B,U)=>{if(B.children&&B.children.length>0){const $=E===B.label;return jsxRuntimeExports$1.jsxs("div",{className:"relative",children:[jsxRuntimeExports$1.jsxs("button",{onClick:()=>v($?null:B.label),className:cn("flex items-center gap-1 text-sm font-medium text-muted-foreground","hover:text-foreground transition-colors py-2"),children:[B.label,jsxRuntimeExports$1.jsx(ChevronDown,{className:cn("h-4 w-4 transition-transform",$&&"rotate-180")})]}),$&&jsxRuntimeExports$1.jsx("div",{className:"absolute top-full left-0 mt-2 w-48 rounded-xl bg-card border border-border shadow-lg py-2 z-50",children:B.children.map((z,Z)=>jsxRuntimeExports$1.jsx("a",{href:z.href,onClick:z.onClick,className:"block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",children:z.label},Z))})]},U)}return jsxRuntimeExports$1.jsx("a",{href:B.href,onClick:B.onClick,className:"text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2",children:B.label},U)};return jsxRuntimeExports$1.jsxs("header",{className:cn("z-50 w-full",s&&"sticky top-0",variantStyles$1[c],m),...f,children:[jsxRuntimeExports$1.jsx(Container,{children:jsxRuntimeExports$1.jsxs("nav",{className:"flex h-16 items-center justify-between",children:[jsxRuntimeExports$1.jsxs("div",{className:"flex items-center gap-8",children:[jsxRuntimeExports$1.jsx("div",{className:"flex-shrink-0",children:t}),jsxRuntimeExports$1.jsx("div",{className:cn("hidden items-center gap-6",R.desktop),children:a.map((B,U)=>w(B,U))})]}),jsxRuntimeExports$1.jsxs("div",{className:"flex items-center gap-4",children:[jsxRuntimeExports$1.jsx("div",{className:cn("hidden",R.desktop),children:l}),jsxRuntimeExports$1.jsx("button",{className:cn("p-2 rounded-lg hover:bg-accent",R.mobile),onClick:()=>h(!x),"aria-label":"Toggle menu",children:x?jsxRuntimeExports$1.jsx(X,{className:"h-5 w-5"}):jsxRuntimeExports$1.jsx(Menu,{className:"h-5 w-5"})})]})]})}),x&&jsxRuntimeExports$1.jsx("div",{className:cn("border-t border-border bg-background",R.mobile),children:jsxRuntimeExports$1.jsx(Container,{children:jsxRuntimeExports$1.jsxs("div",{className:"py-4 space-y-4",children:[a.map((B,U)=>jsxRuntimeExports$1.jsx("div",{children:B.children?jsxRuntimeExports$1.jsxs("div",{className:"space-y-2",children:[jsxRuntimeExports$1.jsx("p",{className:"text-sm font-medium text-foreground",children:B.label}),jsxRuntimeExports$1.jsx("div",{className:"pl-4 space-y-2",children:B.children.map(($,z)=>jsxRuntimeExports$1.jsx("a",{href:$.href,onClick:()=>{var Z;(Z=$.onClick)==null||Z.call($),h(!1)},className:"block text-sm text-muted-foreground hover:text-foreground",children:$.label},z))})]}):jsxRuntimeExports$1.jsx("a",{href:B.href,onClick:()=>{var $;($=B.onClick)==null||$.call(B),h(!1)},className:"block text-sm font-medium text-muted-foreground hover:text-foreground",children:B.label})},U)),jsxRuntimeExports$1.jsx("div",{className:"pt-4 border-t border-border",children:l})]})})})]})}const variantStyles={primary:"bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",outline:"border border-border bg-transparent hover:bg-accent",ghost:"hover:bg-accent hover:text-accent-foreground"},sizeStyles={sm:"h-8 px-3 text-xs",md:"h-9 px-4 text-sm",lg:"h-10 px-5 text-sm"};function NavButton({variant:t="primary",size:a="md",href:l,icon:c,showArrow:s=!1,children:d,className:m,...f}){const x=jsxRuntimeExports$1.jsxs(jsxRuntimeExports$1.Fragment,{children:[c&&jsxRuntimeExports$1.jsx("span",{className:"mr-2",children:c}),d,s&&jsxRuntimeExports$1.jsx(ChevronRight,{className:"ml-1 h-4 w-4"})]}),h=cn("inline-flex items-center justify-center rounded-full font-medium transition-all","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",variantStyles[t],sizeStyles[a],m);return l?jsxRuntimeExports$1.jsx("a",{href:l,className:h,children:x}):jsxRuntimeExports$1.jsx("button",{className:h,...f,children:x})}function Footer({logo:t,description:a,sections:l=[],socialLinks:c=[],copyright:s,bottomLinks:d=[],containerSize:m="xl",variant:f="default",newsletter:x,className:h,...E}){return f==="minimal"?jsxRuntimeExports$1.jsx("footer",{className:cn("border-t border-border py-8",h),...E,children:jsxRuntimeExports$1.jsx(Container,{size:m,children:jsxRuntimeExports$1.jsxs("div",{className:"flex flex-col items-center justify-between gap-4 md:flex-row",children:[t&&jsxRuntimeExports$1.jsx("div",{children:t}),c.length>0&&jsxRuntimeExports$1.jsx("div",{className:"flex items-center gap-4",children:c.map((v,R)=>jsxRuntimeExports$1.jsx("a",{href:v.href,target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-foreground transition-colors","aria-label":v.label,children:v.icon},R))}),s&&jsxRuntimeExports$1.jsx("p",{className:"text-sm text-muted-foreground",children:s})]})})}):f==="centered"?jsxRuntimeExports$1.jsx("footer",{className:cn("border-t border-border py-12",h),...E,children:jsxRuntimeExports$1.jsx(Container,{size:m,children:jsxRuntimeExports$1.jsxs("div",{className:"flex flex-col items-center text-center gap-8",children:[t&&jsxRuntimeExports$1.jsx("div",{children:t}),a&&jsxRuntimeExports$1.jsx("p",{className:"max-w-md text-muted-foreground",children:a}),l.length>0&&jsxRuntimeExports$1.jsx("nav",{className:"flex flex-wrap justify-center gap-x-8 gap-y-2",children:l.flatMap(v=>v.links.map((R,w)=>jsxRuntimeExports$1.jsx("a",{href:R.href,className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:R.label},`${v.title}-${w}`)))}),c.length>0&&jsxRuntimeExports$1.jsx("div",{className:"flex items-center gap-4",children:c.map((v,R)=>jsxRuntimeExports$1.jsx("a",{href:v.href,target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-foreground transition-colors","aria-label":v.label,children:v.icon},R))}),s&&jsxRuntimeExports$1.jsx("p",{className:"text-sm text-muted-foreground",children:s})]})})}):jsxRuntimeExports$1.jsx("footer",{className:cn("border-t border-border",h),...E,children:jsxRuntimeExports$1.jsxs(Container,{size:m,children:[jsxRuntimeExports$1.jsx("div",{className:"py-12 lg:py-16",children:jsxRuntimeExports$1.jsxs("div",{className:"grid gap-8 lg:grid-cols-6",children:[jsxRuntimeExports$1.jsxs("div",{className:"lg:col-span-2",children:[t&&jsxRuntimeExports$1.jsx("div",{className:"mb-4",children:t}),a&&jsxRuntimeExports$1.jsx("p",{className:"text-sm text-muted-foreground max-w-xs mb-6",children:a}),c.length>0&&jsxRuntimeExports$1.jsx("div",{className:"flex items-center gap-4",children:c.map((v,R)=>jsxRuntimeExports$1.jsx("a",{href:v.href,target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-foreground transition-colors","aria-label":v.label,children:v.icon},R))})]}),l.map((v,R)=>jsxRuntimeExports$1.jsxs("div",{children:[jsxRuntimeExports$1.jsx("h3",{className:"font-semibold text-foreground mb-4",children:v.title}),jsxRuntimeExports$1.jsx("ul",{className:"space-y-3",children:v.links.map((w,B)=>jsxRuntimeExports$1.jsx("li",{children:jsxRuntimeExports$1.jsx("a",{href:w.href,className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:w.label})},B))})]},R)),x&&jsxRuntimeExports$1.jsxs("div",{className:"lg:col-span-2",children:[x.title&&jsxRuntimeExports$1.jsx("h3",{className:"font-semibold text-foreground mb-2",children:x.title}),x.description&&jsxRuntimeExports$1.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:x.description}),jsxRuntimeExports$1.jsxs("form",{onSubmit:v=>{var B;v.preventDefault();const w=v.target.elements.namedItem("email").value;(B=x.onSubmit)==null||B.call(x,w)},className:"flex gap-2",children:[jsxRuntimeExports$1.jsx("input",{type:"email",name:"email",placeholder:x.placeholder||"Enter your email",className:"flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",required:!0}),jsxRuntimeExports$1.jsx("button",{type:"submit",className:"px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",children:x.buttonText||"Subscribe"})]})]})]})}),jsxRuntimeExports$1.jsx("div",{className:"border-t border-border py-6",children:jsxRuntimeExports$1.jsxs("div",{className:"flex flex-col items-center justify-between gap-4 md:flex-row",children:[s&&jsxRuntimeExports$1.jsx("p",{className:"text-sm text-muted-foreground",children:s}),d.length>0&&jsxRuntimeExports$1.jsx("nav",{className:"flex flex-wrap items-center gap-6",children:d.map((v,R)=>jsxRuntimeExports$1.jsx("a",{href:v.href,className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:v.label},R))})]})})]})})}const columnStyles={2:"grid-cols-2",3:"grid-cols-2 lg:grid-cols-3",4:"grid-cols-2 lg:grid-cols-4",5:"grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"};function StatsSection({title:t,subtitle:a,label:l,labelGradient:c,titleAlign:s="center",stats:d,columns:m=4,variant:f="default",containerSize:x="xl",className:h,...E}){const v=(R,w)=>{const B=jsxRuntimeExports$1.jsxs(jsxRuntimeExports$1.Fragment,{children:[R.icon&&jsxRuntimeExports$1.jsx("div",{className:"mb-2 text-primary",children:R.icon}),jsxRuntimeExports$1.jsx("div",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2",children:R.value}),jsxRuntimeExports$1.jsx("div",{className:"text-sm font-medium text-muted-foreground",children:R.label}),R.description&&jsxRuntimeExports$1.jsx("div",{className:"text-xs text-muted-foreground/70 mt-1",children:R.description})]});switch(f){case"bordered":return jsxRuntimeExports$1.jsx("div",{className:cn("text-center p-6 border-l border-border first:border-l-0","lg:first:border-l-0"),children:B},w);case"cards":return jsxRuntimeExports$1.jsx("div",{className:"text-center p-6 bg-card border border-border rounded-xl",children:B},w);case"minimal":return jsxRuntimeExports$1.jsx("div",{className:"text-center",children:B},w);default:return jsxRuntimeExports$1.jsx("div",{className:"text-center p-6",children:B},w)}};return jsxRuntimeExports$1.jsx("section",{className:cn("py-16 md:py-24",h),...E,children:jsxRuntimeExports$1.jsxs(Container,{size:x,children:[(t||a||l)&&jsxRuntimeExports$1.jsx(SectionTitle,{title:t,subtitle:a,label:l,labelGradient:c,align:s,className:"mb-12"}),jsxRuntimeExports$1.jsx("div",{className:cn("grid gap-8",columnStyles[m],f==="bordered"&&"divide-x-0 lg:divide-x divide-border"),children:d.map((R,w)=>v(R,w))})]})})}const __viteBrowserExternal={},__viteBrowserExternal$1=Object.freeze(Object.defineProperty({__proto__:null,default:__viteBrowserExternal},Symbol.toStringTag,{value:"Module"})),require$$0=getAugmentedNamespace(__viteBrowserExternal$1);var kindOf,hasRequiredKindOf;function requireKindOf(){if(hasRequiredKindOf)return kindOf;hasRequiredKindOf=1;var t=Object.prototype.toString;kindOf=function(v){if(v===void 0)return"undefined";if(v===null)return"null";var R=typeof v;if(R==="boolean")return"boolean";if(R==="string")return"string";if(R==="number")return"number";if(R==="symbol")return"symbol";if(R==="function")return m(v)?"generatorfunction":"function";if(l(v))return"array";if(h(v))return"buffer";if(x(v))return"arguments";if(s(v))return"date";if(c(v))return"error";if(d(v))return"regexp";switch(a(v)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(f(v))return"generator";switch(R=t.call(v),R){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return R.slice(8,-1).toLowerCase().replace(/\s/g,"")};function a(E){return typeof E.constructor=="function"?E.constructor.name:null}function l(E){return Array.isArray?Array.isArray(E):E instanceof Array}function c(E){return E instanceof Error||typeof E.message=="string"&&E.constructor&&typeof E.constructor.stackTraceLimit=="number"}function s(E){return E instanceof Date?!0:typeof E.toDateString=="function"&&typeof E.getDate=="function"&&typeof E.setDate=="function"}function d(E){return E instanceof RegExp?!0:typeof E.flags=="string"&&typeof E.ignoreCase=="boolean"&&typeof E.multiline=="boolean"&&typeof E.global=="boolean"}function m(E,v){return a(E)==="GeneratorFunction"}function f(E){return typeof E.throw=="function"&&typeof E.return=="function"&&typeof E.next=="function"}function x(E){try{if(typeof E.length=="number"&&typeof E.callee=="function")return!0}catch(v){if(v.message.indexOf("callee")!==-1)return!0}return!1}function h(E){return E.constructor&&typeof E.constructor.isBuffer=="function"?E.constructor.isBuffer(E):!1}return kindOf}/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var isExtendable,hasRequiredIsExtendable;function requireIsExtendable(){return hasRequiredIsExtendable||(hasRequiredIsExtendable=1,isExtendable=function(a){return typeof a<"u"&&a!==null&&(typeof a=="object"||typeof a=="function")}),isExtendable}var extendShallow,hasRequiredExtendShallow;function requireExtendShallow(){if(hasRequiredExtendShallow)return extendShallow;hasRequiredExtendShallow=1;var t=requireIsExtendable();extendShallow=function(s){t(s)||(s={});for(var d=arguments.length,m=1;m<d;m++){var f=arguments[m];t(f)&&a(s,f)}return s};function a(c,s){for(var d in s)l(s,d)&&(c[d]=s[d])}function l(c,s){return Object.prototype.hasOwnProperty.call(c,s)}return extendShallow}var sectionMatter,hasRequiredSectionMatter;function requireSectionMatter(){if(hasRequiredSectionMatter)return sectionMatter;hasRequiredSectionMatter=1;var t=requireKindOf(),a=requireExtendShallow();sectionMatter=function(x,h){typeof h=="function"&&(h={parse:h});var E=c(x),v={section_delimiter:"---",parse:m},R=a({},v,h),w=R.section_delimiter,B=E.content.split(/\r?\n/),U=null,$=d(),z=[],Z=[];function q(_e){E.content=_e,U=[],z=[]}function ge(_e){Z.length&&($.key=s(Z[0],w),$.content=_e,R.parse($,U),U.push($),$=d(),z=[],Z=[])}for(var ue=0;ue<B.length;ue++){var K=B[ue],ne=Z.length,ke=K.trim();if(l(ke,w)){if(ke.length===3&&ue!==0){if(ne===0||ne===2){z.push(K);continue}Z.push(ke),$.data=z.join(`
`),z=[];continue}U===null&&q(z.join(`
`)),ne===2&&ge(z.join(`
`)),Z.push(ke);continue}z.push(K)}return U===null?q(z.join(`
`)):ge(z.join(`
`)),E.sections=U,E};function l(x,h){return!(x.slice(0,h.length)!==h||x.charAt(h.length+1)===h.slice(-1))}function c(x){if(t(x)!=="object"&&(x={content:x}),typeof x.content!="string"&&!f(x.content))throw new TypeError("expected a buffer or string");return x.content=x.content.toString(),x.sections=[],x}function s(x,h){return x?x.slice(h.length).trim():""}function d(){return{key:"",data:"",content:""}}function m(x){return x}function f(x){return x&&x.constructor&&typeof x.constructor.isBuffer=="function"?x.constructor.isBuffer(x):!1}return sectionMatter}var engines={exports:{}},jsYaml$1={},loader={},common={},hasRequiredCommon;function requireCommon(){if(hasRequiredCommon)return common;hasRequiredCommon=1;function t(m){return typeof m>"u"||m===null}function a(m){return typeof m=="object"&&m!==null}function l(m){return Array.isArray(m)?m:t(m)?[]:[m]}function c(m,f){var x,h,E,v;if(f)for(v=Object.keys(f),x=0,h=v.length;x<h;x+=1)E=v[x],m[E]=f[E];return m}function s(m,f){var x="",h;for(h=0;h<f;h+=1)x+=m;return x}function d(m){return m===0&&Number.NEGATIVE_INFINITY===1/m}return common.isNothing=t,common.isObject=a,common.toArray=l,common.repeat=s,common.isNegativeZero=d,common.extend=c,common}var exception,hasRequiredException;function requireException(){if(hasRequiredException)return exception;hasRequiredException=1;function t(a,l){Error.call(this),this.name="YAMLException",this.reason=a,this.mark=l,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t.prototype.toString=function(l){var c=this.name+": ";return c+=this.reason||"(unknown reason)",!l&&this.mark&&(c+=" "+this.mark.toString()),c},exception=t,exception}var mark$1,hasRequiredMark;function requireMark(){if(hasRequiredMark)return mark$1;hasRequiredMark=1;var t=requireCommon();function a(l,c,s,d,m){this.name=l,this.buffer=c,this.position=s,this.line=d,this.column=m}return a.prototype.getSnippet=function(c,s){var d,m,f,x,h;if(!this.buffer)return null;for(c=c||4,s=s||75,d="",m=this.position;m>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(m-1))===-1;)if(m-=1,this.position-m>s/2-1){d=" ... ",m+=5;break}for(f="",x=this.position;x<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(x))===-1;)if(x+=1,x-this.position>s/2-1){f=" ... ",x-=5;break}return h=this.buffer.slice(m,x),t.repeat(" ",c)+d+h+f+`
`+t.repeat(" ",c+this.position-m+d.length)+"^"},a.prototype.toString=function(c){var s,d="";return this.name&&(d+='in "'+this.name+'" '),d+="at line "+(this.line+1)+", column "+(this.column+1),c||(s=this.getSnippet(),s&&(d+=`:
`+s)),d},mark$1=a,mark$1}var type,hasRequiredType;function requireType(){if(hasRequiredType)return type;hasRequiredType=1;var t=requireException(),a=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],l=["scalar","sequence","mapping"];function c(d){var m={};return d!==null&&Object.keys(d).forEach(function(f){d[f].forEach(function(x){m[String(x)]=f})}),m}function s(d,m){if(m=m||{},Object.keys(m).forEach(function(f){if(a.indexOf(f)===-1)throw new t('Unknown option "'+f+'" is met in definition of "'+d+'" YAML type.')}),this.tag=d,this.kind=m.kind||null,this.resolve=m.resolve||function(){return!0},this.construct=m.construct||function(f){return f},this.instanceOf=m.instanceOf||null,this.predicate=m.predicate||null,this.represent=m.represent||null,this.defaultStyle=m.defaultStyle||null,this.styleAliases=c(m.styleAliases||null),l.indexOf(this.kind)===-1)throw new t('Unknown kind "'+this.kind+'" is specified for "'+d+'" YAML type.')}return type=s,type}var schema,hasRequiredSchema;function requireSchema(){if(hasRequiredSchema)return schema;hasRequiredSchema=1;var t=requireCommon(),a=requireException(),l=requireType();function c(m,f,x){var h=[];return m.include.forEach(function(E){x=c(E,f,x)}),m[f].forEach(function(E){x.forEach(function(v,R){v.tag===E.tag&&v.kind===E.kind&&h.push(R)}),x.push(E)}),x.filter(function(E,v){return h.indexOf(v)===-1})}function s(){var m={scalar:{},sequence:{},mapping:{},fallback:{}},f,x;function h(E){m[E.kind][E.tag]=m.fallback[E.tag]=E}for(f=0,x=arguments.length;f<x;f+=1)arguments[f].forEach(h);return m}function d(m){this.include=m.include||[],this.implicit=m.implicit||[],this.explicit=m.explicit||[],this.implicit.forEach(function(f){if(f.loadKind&&f.loadKind!=="scalar")throw new a("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=c(this,"implicit",[]),this.compiledExplicit=c(this,"explicit",[]),this.compiledTypeMap=s(this.compiledImplicit,this.compiledExplicit)}return d.DEFAULT=null,d.create=function(){var f,x;switch(arguments.length){case 1:f=d.DEFAULT,x=arguments[0];break;case 2:f=arguments[0],x=arguments[1];break;default:throw new a("Wrong number of arguments for Schema.create function")}if(f=t.toArray(f),x=t.toArray(x),!f.every(function(h){return h instanceof d}))throw new a("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!x.every(function(h){return h instanceof l}))throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new d({include:f,explicit:x})},schema=d,schema}var str,hasRequiredStr;function requireStr(){if(hasRequiredStr)return str;hasRequiredStr=1;var t=requireType();return str=new t("tag:yaml.org,2002:str",{kind:"scalar",construct:function(a){return a!==null?a:""}}),str}var seq,hasRequiredSeq;function requireSeq(){if(hasRequiredSeq)return seq;hasRequiredSeq=1;var t=requireType();return seq=new t("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(a){return a!==null?a:[]}}),seq}var map,hasRequiredMap;function requireMap(){if(hasRequiredMap)return map;hasRequiredMap=1;var t=requireType();return map=new t("tag:yaml.org,2002:map",{kind:"mapping",construct:function(a){return a!==null?a:{}}}),map}var failsafe,hasRequiredFailsafe;function requireFailsafe(){if(hasRequiredFailsafe)return failsafe;hasRequiredFailsafe=1;var t=requireSchema();return failsafe=new t({explicit:[requireStr(),requireSeq(),requireMap()]}),failsafe}var _null,hasRequired_null;function require_null(){if(hasRequired_null)return _null;hasRequired_null=1;var t=requireType();function a(s){if(s===null)return!0;var d=s.length;return d===1&&s==="~"||d===4&&(s==="null"||s==="Null"||s==="NULL")}function l(){return null}function c(s){return s===null}return _null=new t("tag:yaml.org,2002:null",{kind:"scalar",resolve:a,construct:l,predicate:c,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),_null}var bool,hasRequiredBool;function requireBool(){if(hasRequiredBool)return bool;hasRequiredBool=1;var t=requireType();function a(s){if(s===null)return!1;var d=s.length;return d===4&&(s==="true"||s==="True"||s==="TRUE")||d===5&&(s==="false"||s==="False"||s==="FALSE")}function l(s){return s==="true"||s==="True"||s==="TRUE"}function c(s){return Object.prototype.toString.call(s)==="[object Boolean]"}return bool=new t("tag:yaml.org,2002:bool",{kind:"scalar",resolve:a,construct:l,predicate:c,represent:{lowercase:function(s){return s?"true":"false"},uppercase:function(s){return s?"TRUE":"FALSE"},camelcase:function(s){return s?"True":"False"}},defaultStyle:"lowercase"}),bool}var int,hasRequiredInt;function requireInt(){if(hasRequiredInt)return int;hasRequiredInt=1;var t=requireCommon(),a=requireType();function l(x){return 48<=x&&x<=57||65<=x&&x<=70||97<=x&&x<=102}function c(x){return 48<=x&&x<=55}function s(x){return 48<=x&&x<=57}function d(x){if(x===null)return!1;var h=x.length,E=0,v=!1,R;if(!h)return!1;if(R=x[E],(R==="-"||R==="+")&&(R=x[++E]),R==="0"){if(E+1===h)return!0;if(R=x[++E],R==="b"){for(E++;E<h;E++)if(R=x[E],R!=="_"){if(R!=="0"&&R!=="1")return!1;v=!0}return v&&R!=="_"}if(R==="x"){for(E++;E<h;E++)if(R=x[E],R!=="_"){if(!l(x.charCodeAt(E)))return!1;v=!0}return v&&R!=="_"}for(;E<h;E++)if(R=x[E],R!=="_"){if(!c(x.charCodeAt(E)))return!1;v=!0}return v&&R!=="_"}if(R==="_")return!1;for(;E<h;E++)if(R=x[E],R!=="_"){if(R===":")break;if(!s(x.charCodeAt(E)))return!1;v=!0}return!v||R==="_"?!1:R!==":"?!0:/^(:[0-5]?[0-9])+$/.test(x.slice(E))}function m(x){var h=x,E=1,v,R,w=[];return h.indexOf("_")!==-1&&(h=h.replace(/_/g,"")),v=h[0],(v==="-"||v==="+")&&(v==="-"&&(E=-1),h=h.slice(1),v=h[0]),h==="0"?0:v==="0"?h[1]==="b"?E*parseInt(h.slice(2),2):h[1]==="x"?E*parseInt(h,16):E*parseInt(h,8):h.indexOf(":")!==-1?(h.split(":").forEach(function(B){w.unshift(parseInt(B,10))}),h=0,R=1,w.forEach(function(B){h+=B*R,R*=60}),E*h):E*parseInt(h,10)}function f(x){return Object.prototype.toString.call(x)==="[object Number]"&&x%1===0&&!t.isNegativeZero(x)}return int=new a("tag:yaml.org,2002:int",{kind:"scalar",resolve:d,construct:m,predicate:f,represent:{binary:function(x){return x>=0?"0b"+x.toString(2):"-0b"+x.toString(2).slice(1)},octal:function(x){return x>=0?"0"+x.toString(8):"-0"+x.toString(8).slice(1)},decimal:function(x){return x.toString(10)},hexadecimal:function(x){return x>=0?"0x"+x.toString(16).toUpperCase():"-0x"+x.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),int}var float,hasRequiredFloat;function requireFloat(){if(hasRequiredFloat)return float;hasRequiredFloat=1;var t=requireCommon(),a=requireType(),l=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function c(x){return!(x===null||!l.test(x)||x[x.length-1]==="_")}function s(x){var h,E,v,R;return h=x.replace(/_/g,"").toLowerCase(),E=h[0]==="-"?-1:1,R=[],"+-".indexOf(h[0])>=0&&(h=h.slice(1)),h===".inf"?E===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:h===".nan"?NaN:h.indexOf(":")>=0?(h.split(":").forEach(function(w){R.unshift(parseFloat(w,10))}),h=0,v=1,R.forEach(function(w){h+=w*v,v*=60}),E*h):E*parseFloat(h,10)}var d=/^[-+]?[0-9]+e/;function m(x,h){var E;if(isNaN(x))switch(h){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===x)switch(h){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===x)switch(h){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(t.isNegativeZero(x))return"-0.0";return E=x.toString(10),d.test(E)?E.replace("e",".e"):E}function f(x){return Object.prototype.toString.call(x)==="[object Number]"&&(x%1!==0||t.isNegativeZero(x))}return float=new a("tag:yaml.org,2002:float",{kind:"scalar",resolve:c,construct:s,predicate:f,represent:m,defaultStyle:"lowercase"}),float}var json,hasRequiredJson;function requireJson(){if(hasRequiredJson)return json;hasRequiredJson=1;var t=requireSchema();return json=new t({include:[requireFailsafe()],implicit:[require_null(),requireBool(),requireInt(),requireFloat()]}),json}var core,hasRequiredCore;function requireCore(){if(hasRequiredCore)return core;hasRequiredCore=1;var t=requireSchema();return core=new t({include:[requireJson()]}),core}var timestamp,hasRequiredTimestamp;function requireTimestamp(){if(hasRequiredTimestamp)return timestamp;hasRequiredTimestamp=1;var t=requireType(),a=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),l=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function c(m){return m===null?!1:a.exec(m)!==null||l.exec(m)!==null}function s(m){var f,x,h,E,v,R,w,B=0,U=null,$,z,Z;if(f=a.exec(m),f===null&&(f=l.exec(m)),f===null)throw new Error("Date resolve error");if(x=+f[1],h=+f[2]-1,E=+f[3],!f[4])return new Date(Date.UTC(x,h,E));if(v=+f[4],R=+f[5],w=+f[6],f[7]){for(B=f[7].slice(0,3);B.length<3;)B+="0";B=+B}return f[9]&&($=+f[10],z=+(f[11]||0),U=($*60+z)*6e4,f[9]==="-"&&(U=-U)),Z=new Date(Date.UTC(x,h,E,v,R,w,B)),U&&Z.setTime(Z.getTime()-U),Z}function d(m){return m.toISOString()}return timestamp=new t("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:c,construct:s,instanceOf:Date,represent:d}),timestamp}var merge$1,hasRequiredMerge;function requireMerge(){if(hasRequiredMerge)return merge$1;hasRequiredMerge=1;var t=requireType();function a(l){return l==="<<"||l===null}return merge$1=new t("tag:yaml.org,2002:merge",{kind:"scalar",resolve:a}),merge$1}function commonjsRequire(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var binary,hasRequiredBinary;function requireBinary(){if(hasRequiredBinary)return binary;hasRequiredBinary=1;var t;try{var a=commonjsRequire;t=a("buffer").Buffer}catch{}var l=requireType(),c=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function s(x){if(x===null)return!1;var h,E,v=0,R=x.length,w=c;for(E=0;E<R;E++)if(h=w.indexOf(x.charAt(E)),!(h>64)){if(h<0)return!1;v+=6}return v%8===0}function d(x){var h,E,v=x.replace(/[\r\n=]/g,""),R=v.length,w=c,B=0,U=[];for(h=0;h<R;h++)h%4===0&&h&&(U.push(B>>16&255),U.push(B>>8&255),U.push(B&255)),B=B<<6|w.indexOf(v.charAt(h));return E=R%4*6,E===0?(U.push(B>>16&255),U.push(B>>8&255),U.push(B&255)):E===18?(U.push(B>>10&255),U.push(B>>2&255)):E===12&&U.push(B>>4&255),t?t.from?t.from(U):new t(U):U}function m(x){var h="",E=0,v,R,w=x.length,B=c;for(v=0;v<w;v++)v%3===0&&v&&(h+=B[E>>18&63],h+=B[E>>12&63],h+=B[E>>6&63],h+=B[E&63]),E=(E<<8)+x[v];return R=w%3,R===0?(h+=B[E>>18&63],h+=B[E>>12&63],h+=B[E>>6&63],h+=B[E&63]):R===2?(h+=B[E>>10&63],h+=B[E>>4&63],h+=B[E<<2&63],h+=B[64]):R===1&&(h+=B[E>>2&63],h+=B[E<<4&63],h+=B[64],h+=B[64]),h}function f(x){return t&&t.isBuffer(x)}return binary=new l("tag:yaml.org,2002:binary",{kind:"scalar",resolve:s,construct:d,predicate:f,represent:m}),binary}var omap,hasRequiredOmap;function requireOmap(){if(hasRequiredOmap)return omap;hasRequiredOmap=1;var t=requireType(),a=Object.prototype.hasOwnProperty,l=Object.prototype.toString;function c(d){if(d===null)return!0;var m=[],f,x,h,E,v,R=d;for(f=0,x=R.length;f<x;f+=1){if(h=R[f],v=!1,l.call(h)!=="[object Object]")return!1;for(E in h)if(a.call(h,E))if(!v)v=!0;else return!1;if(!v)return!1;if(m.indexOf(E)===-1)m.push(E);else return!1}return!0}function s(d){return d!==null?d:[]}return omap=new t("tag:yaml.org,2002:omap",{kind:"sequence",resolve:c,construct:s}),omap}var pairs,hasRequiredPairs;function requirePairs(){if(hasRequiredPairs)return pairs;hasRequiredPairs=1;var t=requireType(),a=Object.prototype.toString;function l(s){if(s===null)return!0;var d,m,f,x,h,E=s;for(h=new Array(E.length),d=0,m=E.length;d<m;d+=1){if(f=E[d],a.call(f)!=="[object Object]"||(x=Object.keys(f),x.length!==1))return!1;h[d]=[x[0],f[x[0]]]}return!0}function c(s){if(s===null)return[];var d,m,f,x,h,E=s;for(h=new Array(E.length),d=0,m=E.length;d<m;d+=1)f=E[d],x=Object.keys(f),h[d]=[x[0],f[x[0]]];return h}return pairs=new t("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:l,construct:c}),pairs}var set,hasRequiredSet;function requireSet(){if(hasRequiredSet)return set;hasRequiredSet=1;var t=requireType(),a=Object.prototype.hasOwnProperty;function l(s){if(s===null)return!0;var d,m=s;for(d in m)if(a.call(m,d)&&m[d]!==null)return!1;return!0}function c(s){return s!==null?s:{}}return set=new t("tag:yaml.org,2002:set",{kind:"mapping",resolve:l,construct:c}),set}var default_safe,hasRequiredDefault_safe;function requireDefault_safe(){if(hasRequiredDefault_safe)return default_safe;hasRequiredDefault_safe=1;var t=requireSchema();return default_safe=new t({include:[requireCore()],implicit:[requireTimestamp(),requireMerge()],explicit:[requireBinary(),requireOmap(),requirePairs(),requireSet()]}),default_safe}var _undefined,hasRequired_undefined;function require_undefined(){if(hasRequired_undefined)return _undefined;hasRequired_undefined=1;var t=requireType();function a(){return!0}function l(){}function c(){return""}function s(d){return typeof d>"u"}return _undefined=new t("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:a,construct:l,predicate:s,represent:c}),_undefined}var regexp,hasRequiredRegexp;function requireRegexp(){if(hasRequiredRegexp)return regexp;hasRequiredRegexp=1;var t=requireType();function a(d){if(d===null||d.length===0)return!1;var m=d,f=/\/([gim]*)$/.exec(d),x="";return!(m[0]==="/"&&(f&&(x=f[1]),x.length>3||m[m.length-x.length-1]!=="/"))}function l(d){var m=d,f=/\/([gim]*)$/.exec(d),x="";return m[0]==="/"&&(f&&(x=f[1]),m=m.slice(1,m.length-x.length-1)),new RegExp(m,x)}function c(d){var m="/"+d.source+"/";return d.global&&(m+="g"),d.multiline&&(m+="m"),d.ignoreCase&&(m+="i"),m}function s(d){return Object.prototype.toString.call(d)==="[object RegExp]"}return regexp=new t("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:a,construct:l,predicate:s,represent:c}),regexp}var _function,hasRequired_function;function require_function(){if(hasRequired_function)return _function;hasRequired_function=1;var t;try{var a=commonjsRequire;t=a("esprima")}catch{typeof window<"u"&&(t=window.esprima)}var l=requireType();function c(f){if(f===null)return!1;try{var x="("+f+")",h=t.parse(x,{range:!0});return!(h.type!=="Program"||h.body.length!==1||h.body[0].type!=="ExpressionStatement"||h.body[0].expression.type!=="ArrowFunctionExpression"&&h.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function s(f){var x="("+f+")",h=t.parse(x,{range:!0}),E=[],v;if(h.type!=="Program"||h.body.length!==1||h.body[0].type!=="ExpressionStatement"||h.body[0].expression.type!=="ArrowFunctionExpression"&&h.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return h.body[0].expression.params.forEach(function(R){E.push(R.name)}),v=h.body[0].expression.body.range,h.body[0].expression.body.type==="BlockStatement"?new Function(E,x.slice(v[0]+1,v[1]-1)):new Function(E,"return "+x.slice(v[0],v[1]))}function d(f){return f.toString()}function m(f){return Object.prototype.toString.call(f)==="[object Function]"}return _function=new l("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:c,construct:s,predicate:m,represent:d}),_function}var default_full,hasRequiredDefault_full;function requireDefault_full(){if(hasRequiredDefault_full)return default_full;hasRequiredDefault_full=1;var t=requireSchema();return default_full=t.DEFAULT=new t({include:[requireDefault_safe()],explicit:[require_undefined(),requireRegexp(),require_function()]}),default_full}var hasRequiredLoader;function requireLoader(){if(hasRequiredLoader)return loader;hasRequiredLoader=1;var t=requireCommon(),a=requireException(),l=requireMark(),c=requireDefault_safe(),s=requireDefault_full(),d=Object.prototype.hasOwnProperty,m=1,f=2,x=3,h=4,E=1,v=2,R=3,w=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,B=/[\x85\u2028\u2029]/,U=/[,\[\]\{\}]/,$=/^(?:!|!!|![a-z\-]+!)$/i,z=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Z(y){return Object.prototype.toString.call(y)}function q(y){return y===10||y===13}function ge(y){return y===9||y===32}function ue(y){return y===9||y===32||y===10||y===13}function K(y){return y===44||y===91||y===93||y===123||y===125}function ne(y){var M;return 48<=y&&y<=57?y-48:(M=y|32,97<=M&&M<=102?M-97+10:-1)}function ke(y){return y===120?2:y===117?4:y===85?8:0}function _e(y){return 48<=y&&y<=57?y-48:-1}function Ae(y){return y===48?"\0":y===97?"\x07":y===98?"\b":y===116||y===9?"	":y===110?`
`:y===118?"\v":y===102?"\f":y===114?"\r":y===101?"\x1B":y===32?" ":y===34?'"':y===47?"/":y===92?"\\":y===78?"":y===95?" ":y===76?"\u2028":y===80?"\u2029":""}function ye(y){return y<=65535?String.fromCharCode(y):String.fromCharCode((y-65536>>10)+55296,(y-65536&1023)+56320)}function be(y,M,S){M==="__proto__"?Object.defineProperty(y,M,{configurable:!0,enumerable:!0,writable:!0,value:S}):y[M]=S}for(var Ne=new Array(256),xe=new Array(256),fe=0;fe<256;fe++)Ne[fe]=Ae(fe)?1:0,xe[fe]=Ae(fe);function F(y,M){this.input=y,this.filename=M.filename||null,this.schema=M.schema||s,this.onWarning=M.onWarning||null,this.legacy=M.legacy||!1,this.json=M.json||!1,this.listener=M.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=y.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function pe(y,M){return new a(M,new l(y.filename,y.input,y.position,y.line,y.position-y.lineStart))}function ce(y,M){throw pe(y,M)}function Re(y,M){y.onWarning&&y.onWarning.call(null,pe(y,M))}var L={YAML:function(M,S,g){var b,_,A;M.version!==null&&ce(M,"duplication of %YAML directive"),g.length!==1&&ce(M,"YAML directive accepts exactly one argument"),b=/^([0-9]+)\.([0-9]+)$/.exec(g[0]),b===null&&ce(M,"ill-formed argument of the YAML directive"),_=parseInt(b[1],10),A=parseInt(b[2],10),_!==1&&ce(M,"unacceptable YAML version of the document"),M.version=g[0],M.checkLineBreaks=A<2,A!==1&&A!==2&&Re(M,"unsupported YAML version of the document")},TAG:function(M,S,g){var b,_;g.length!==2&&ce(M,"TAG directive accepts exactly two arguments"),b=g[0],_=g[1],$.test(b)||ce(M,"ill-formed tag handle (first argument) of the TAG directive"),d.call(M.tagMap,b)&&ce(M,'there is a previously declared suffix for "'+b+'" tag handle'),z.test(_)||ce(M,"ill-formed tag prefix (second argument) of the TAG directive"),M.tagMap[b]=_}};function k(y,M,S,g){var b,_,A,O;if(M<S){if(O=y.input.slice(M,S),g)for(b=0,_=O.length;b<_;b+=1)A=O.charCodeAt(b),A===9||32<=A&&A<=1114111||ce(y,"expected valid JSON character");else w.test(O)&&ce(y,"the stream contains non-printable characters");y.result+=O}}function N(y,M,S,g){var b,_,A,O;for(t.isObject(S)||ce(y,"cannot merge mappings; the provided source object is unacceptable"),b=Object.keys(S),A=0,O=b.length;A<O;A+=1)_=b[A],d.call(M,_)||(be(M,_,S[_]),g[_]=!0)}function T(y,M,S,g,b,_,A,O){var j,Y;if(Array.isArray(b))for(b=Array.prototype.slice.call(b),j=0,Y=b.length;j<Y;j+=1)Array.isArray(b[j])&&ce(y,"nested arrays are not supported inside keys"),typeof b=="object"&&Z(b[j])==="[object Object]"&&(b[j]="[object Object]");if(typeof b=="object"&&Z(b)==="[object Object]"&&(b="[object Object]"),b=String(b),M===null&&(M={}),g==="tag:yaml.org,2002:merge")if(Array.isArray(_))for(j=0,Y=_.length;j<Y;j+=1)N(y,M,_[j],S);else N(y,M,_,S);else!y.json&&!d.call(S,b)&&d.call(M,b)&&(y.line=A||y.line,y.position=O||y.position,ce(y,"duplicated mapping key")),be(M,b,_),delete S[b];return M}function V(y){var M;M=y.input.charCodeAt(y.position),M===10?y.position++:M===13?(y.position++,y.input.charCodeAt(y.position)===10&&y.position++):ce(y,"a line break is expected"),y.line+=1,y.lineStart=y.position}function ee(y,M,S){for(var g=0,b=y.input.charCodeAt(y.position);b!==0;){for(;ge(b);)b=y.input.charCodeAt(++y.position);if(M&&b===35)do b=y.input.charCodeAt(++y.position);while(b!==10&&b!==13&&b!==0);if(q(b))for(V(y),b=y.input.charCodeAt(y.position),g++,y.lineIndent=0;b===32;)y.lineIndent++,b=y.input.charCodeAt(++y.position);else break}return S!==-1&&g!==0&&y.lineIndent<S&&Re(y,"deficient indentation"),g}function le(y){var M=y.position,S;return S=y.input.charCodeAt(M),!!((S===45||S===46)&&S===y.input.charCodeAt(M+1)&&S===y.input.charCodeAt(M+2)&&(M+=3,S=y.input.charCodeAt(M),S===0||ue(S)))}function he(y,M){M===1?y.result+=" ":M>1&&(y.result+=t.repeat(`
`,M-1))}function Ce(y,M,S){var g,b,_,A,O,j,Y,ie,G=y.kind,me=y.result,oe;if(oe=y.input.charCodeAt(y.position),ue(oe)||K(oe)||oe===35||oe===38||oe===42||oe===33||oe===124||oe===62||oe===39||oe===34||oe===37||oe===64||oe===96||(oe===63||oe===45)&&(b=y.input.charCodeAt(y.position+1),ue(b)||S&&K(b)))return!1;for(y.kind="scalar",y.result="",_=A=y.position,O=!1;oe!==0;){if(oe===58){if(b=y.input.charCodeAt(y.position+1),ue(b)||S&&K(b))break}else if(oe===35){if(g=y.input.charCodeAt(y.position-1),ue(g))break}else{if(y.position===y.lineStart&&le(y)||S&&K(oe))break;if(q(oe))if(j=y.line,Y=y.lineStart,ie=y.lineIndent,ee(y,!1,-1),y.lineIndent>=M){O=!0,oe=y.input.charCodeAt(y.position);continue}else{y.position=A,y.line=j,y.lineStart=Y,y.lineIndent=ie;break}}O&&(k(y,_,A,!1),he(y,y.line-j),_=A=y.position,O=!1),ge(oe)||(A=y.position+1),oe=y.input.charCodeAt(++y.position)}return k(y,_,A,!1),y.result?!0:(y.kind=G,y.result=me,!1)}function Ee(y,M){var S,g,b;if(S=y.input.charCodeAt(y.position),S!==39)return!1;for(y.kind="scalar",y.result="",y.position++,g=b=y.position;(S=y.input.charCodeAt(y.position))!==0;)if(S===39)if(k(y,g,y.position,!0),S=y.input.charCodeAt(++y.position),S===39)g=y.position,y.position++,b=y.position;else return!0;else q(S)?(k(y,g,b,!0),he(y,ee(y,!1,M)),g=b=y.position):y.position===y.lineStart&&le(y)?ce(y,"unexpected end of the document within a single quoted scalar"):(y.position++,b=y.position);ce(y,"unexpected end of the stream within a single quoted scalar")}function Ke(y,M){var S,g,b,_,A,O;if(O=y.input.charCodeAt(y.position),O!==34)return!1;for(y.kind="scalar",y.result="",y.position++,S=g=y.position;(O=y.input.charCodeAt(y.position))!==0;){if(O===34)return k(y,S,y.position,!0),y.position++,!0;if(O===92){if(k(y,S,y.position,!0),O=y.input.charCodeAt(++y.position),q(O))ee(y,!1,M);else if(O<256&&Ne[O])y.result+=xe[O],y.position++;else if((A=ke(O))>0){for(b=A,_=0;b>0;b--)O=y.input.charCodeAt(++y.position),(A=ne(O))>=0?_=(_<<4)+A:ce(y,"expected hexadecimal character");y.result+=ye(_),y.position++}else ce(y,"unknown escape sequence");S=g=y.position}else q(O)?(k(y,S,g,!0),he(y,ee(y,!1,M)),S=g=y.position):y.position===y.lineStart&&le(y)?ce(y,"unexpected end of the document within a double quoted scalar"):(y.position++,g=y.position)}ce(y,"unexpected end of the stream within a double quoted scalar")}function kn(y,M){var S=!0,g,b=y.tag,_,A=y.anchor,O,j,Y,ie,G,me={},oe,Te,je,Oe;if(Oe=y.input.charCodeAt(y.position),Oe===91)j=93,G=!1,_=[];else if(Oe===123)j=125,G=!0,_={};else return!1;for(y.anchor!==null&&(y.anchorMap[y.anchor]=_),Oe=y.input.charCodeAt(++y.position);Oe!==0;){if(ee(y,!0,M),Oe=y.input.charCodeAt(y.position),Oe===j)return y.position++,y.tag=b,y.anchor=A,y.kind=G?"mapping":"sequence",y.result=_,!0;S||ce(y,"missed comma between flow collection entries"),Te=oe=je=null,Y=ie=!1,Oe===63&&(O=y.input.charCodeAt(y.position+1),ue(O)&&(Y=ie=!0,y.position++,ee(y,!0,M))),g=y.line,Sn(y,M,m,!1,!0),Te=y.tag,oe=y.result,ee(y,!0,M),Oe=y.input.charCodeAt(y.position),(ie||y.line===g)&&Oe===58&&(Y=!0,Oe=y.input.charCodeAt(++y.position),ee(y,!0,M),Sn(y,M,m,!1,!0),je=y.result),G?T(y,_,me,Te,oe,je):Y?_.push(T(y,null,me,Te,oe,je)):_.push(oe),ee(y,!0,M),Oe=y.input.charCodeAt(y.position),Oe===44?(S=!0,Oe=y.input.charCodeAt(++y.position)):S=!1}ce(y,"unexpected end of the stream within a flow collection")}function Cn(y,M){var S,g,b=E,_=!1,A=!1,O=M,j=0,Y=!1,ie,G;if(G=y.input.charCodeAt(y.position),G===124)g=!1;else if(G===62)g=!0;else return!1;for(y.kind="scalar",y.result="";G!==0;)if(G=y.input.charCodeAt(++y.position),G===43||G===45)E===b?b=G===43?R:v:ce(y,"repeat of a chomping mode identifier");else if((ie=_e(G))>=0)ie===0?ce(y,"bad explicit indentation width of a block scalar; it cannot be less than one"):A?ce(y,"repeat of an indentation width identifier"):(O=M+ie-1,A=!0);else break;if(ge(G)){do G=y.input.charCodeAt(++y.position);while(ge(G));if(G===35)do G=y.input.charCodeAt(++y.position);while(!q(G)&&G!==0)}for(;G!==0;){for(V(y),y.lineIndent=0,G=y.input.charCodeAt(y.position);(!A||y.lineIndent<O)&&G===32;)y.lineIndent++,G=y.input.charCodeAt(++y.position);if(!A&&y.lineIndent>O&&(O=y.lineIndent),q(G)){j++;continue}if(y.lineIndent<O){b===R?y.result+=t.repeat(`
`,_?1+j:j):b===E&&_&&(y.result+=`
`);break}for(g?ge(G)?(Y=!0,y.result+=t.repeat(`
`,_?1+j:j)):Y?(Y=!1,y.result+=t.repeat(`
`,j+1)):j===0?_&&(y.result+=" "):y.result+=t.repeat(`
`,j):y.result+=t.repeat(`
`,_?1+j:j),_=!0,A=!0,j=0,S=y.position;!q(G)&&G!==0;)G=y.input.charCodeAt(++y.position);k(y,S,y.position,!1)}return!0}function vn(y,M){var S,g=y.tag,b=y.anchor,_=[],A,O=!1,j;for(y.anchor!==null&&(y.anchorMap[y.anchor]=_),j=y.input.charCodeAt(y.position);j!==0&&!(j!==45||(A=y.input.charCodeAt(y.position+1),!ue(A)));){if(O=!0,y.position++,ee(y,!0,-1)&&y.lineIndent<=M){_.push(null),j=y.input.charCodeAt(y.position);continue}if(S=y.line,Sn(y,M,x,!1,!0),_.push(y.result),ee(y,!0,-1),j=y.input.charCodeAt(y.position),(y.line===S||y.lineIndent>M)&&j!==0)ce(y,"bad indentation of a sequence entry");else if(y.lineIndent<M)break}return O?(y.tag=g,y.anchor=b,y.kind="sequence",y.result=_,!0):!1}function pn(y,M,S){var g,b,_,A,O=y.tag,j=y.anchor,Y={},ie={},G=null,me=null,oe=null,Te=!1,je=!1,Oe;for(y.anchor!==null&&(y.anchorMap[y.anchor]=Y),Oe=y.input.charCodeAt(y.position);Oe!==0;){if(g=y.input.charCodeAt(y.position+1),_=y.line,A=y.position,(Oe===63||Oe===58)&&ue(g))Oe===63?(Te&&(T(y,Y,ie,G,me,null),G=me=oe=null),je=!0,Te=!0,b=!0):Te?(Te=!1,b=!0):ce(y,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),y.position+=1,Oe=g;else if(Sn(y,S,f,!1,!0))if(y.line===_){for(Oe=y.input.charCodeAt(y.position);ge(Oe);)Oe=y.input.charCodeAt(++y.position);if(Oe===58)Oe=y.input.charCodeAt(++y.position),ue(Oe)||ce(y,"a whitespace character is expected after the key-value separator within a block mapping"),Te&&(T(y,Y,ie,G,me,null),G=me=oe=null),je=!0,Te=!1,b=!1,G=y.tag,me=y.result;else if(je)ce(y,"can not read an implicit mapping pair; a colon is missed");else return y.tag=O,y.anchor=j,!0}else if(je)ce(y,"can not read a block mapping entry; a multiline key may not be an implicit key");else return y.tag=O,y.anchor=j,!0;else break;if((y.line===_||y.lineIndent>M)&&(Sn(y,M,h,!0,b)&&(Te?me=y.result:oe=y.result),Te||(T(y,Y,ie,G,me,oe,_,A),G=me=oe=null),ee(y,!0,-1),Oe=y.input.charCodeAt(y.position)),y.lineIndent>M&&Oe!==0)ce(y,"bad indentation of a mapping entry");else if(y.lineIndent<M)break}return Te&&T(y,Y,ie,G,me,null),je&&(y.tag=O,y.anchor=j,y.kind="mapping",y.result=Y),je}function Ln(y){var M,S=!1,g=!1,b,_,A;if(A=y.input.charCodeAt(y.position),A!==33)return!1;if(y.tag!==null&&ce(y,"duplication of a tag property"),A=y.input.charCodeAt(++y.position),A===60?(S=!0,A=y.input.charCodeAt(++y.position)):A===33?(g=!0,b="!!",A=y.input.charCodeAt(++y.position)):b="!",M=y.position,S){do A=y.input.charCodeAt(++y.position);while(A!==0&&A!==62);y.position<y.length?(_=y.input.slice(M,y.position),A=y.input.charCodeAt(++y.position)):ce(y,"unexpected end of the stream within a verbatim tag")}else{for(;A!==0&&!ue(A);)A===33&&(g?ce(y,"tag suffix cannot contain exclamation marks"):(b=y.input.slice(M-1,y.position+1),$.test(b)||ce(y,"named tag handle cannot contain such characters"),g=!0,M=y.position+1)),A=y.input.charCodeAt(++y.position);_=y.input.slice(M,y.position),U.test(_)&&ce(y,"tag suffix cannot contain flow indicator characters")}return _&&!z.test(_)&&ce(y,"tag name cannot contain such characters: "+_),S?y.tag=_:d.call(y.tagMap,b)?y.tag=y.tagMap[b]+_:b==="!"?y.tag="!"+_:b==="!!"?y.tag="tag:yaml.org,2002:"+_:ce(y,'undeclared tag handle "'+b+'"'),!0}function In(y){var M,S;if(S=y.input.charCodeAt(y.position),S!==38)return!1;for(y.anchor!==null&&ce(y,"duplication of an anchor property"),S=y.input.charCodeAt(++y.position),M=y.position;S!==0&&!ue(S)&&!K(S);)S=y.input.charCodeAt(++y.position);return y.position===M&&ce(y,"name of an anchor node must contain at least one character"),y.anchor=y.input.slice(M,y.position),!0}function Vn(y){var M,S,g;if(g=y.input.charCodeAt(y.position),g!==42)return!1;for(g=y.input.charCodeAt(++y.position),M=y.position;g!==0&&!ue(g)&&!K(g);)g=y.input.charCodeAt(++y.position);return y.position===M&&ce(y,"name of an alias node must contain at least one character"),S=y.input.slice(M,y.position),d.call(y.anchorMap,S)||ce(y,'unidentified alias "'+S+'"'),y.result=y.anchorMap[S],ee(y,!0,-1),!0}function Sn(y,M,S,g,b){var _,A,O,j=1,Y=!1,ie=!1,G,me,oe,Te,je;if(y.listener!==null&&y.listener("open",y),y.tag=null,y.anchor=null,y.kind=null,y.result=null,_=A=O=h===S||x===S,g&&ee(y,!0,-1)&&(Y=!0,y.lineIndent>M?j=1:y.lineIndent===M?j=0:y.lineIndent<M&&(j=-1)),j===1)for(;Ln(y)||In(y);)ee(y,!0,-1)?(Y=!0,O=_,y.lineIndent>M?j=1:y.lineIndent===M?j=0:y.lineIndent<M&&(j=-1)):O=!1;if(O&&(O=Y||b),(j===1||h===S)&&(m===S||f===S?Te=M:Te=M+1,je=y.position-y.lineStart,j===1?O&&(vn(y,je)||pn(y,je,Te))||kn(y,Te)?ie=!0:(A&&Cn(y,Te)||Ee(y,Te)||Ke(y,Te)?ie=!0:Vn(y)?(ie=!0,(y.tag!==null||y.anchor!==null)&&ce(y,"alias node should not have any properties")):Ce(y,Te,m===S)&&(ie=!0,y.tag===null&&(y.tag="?")),y.anchor!==null&&(y.anchorMap[y.anchor]=y.result)):j===0&&(ie=O&&vn(y,je))),y.tag!==null&&y.tag!=="!")if(y.tag==="?"){for(y.result!==null&&y.kind!=="scalar"&&ce(y,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+y.kind+'"'),G=0,me=y.implicitTypes.length;G<me;G+=1)if(oe=y.implicitTypes[G],oe.resolve(y.result)){y.result=oe.construct(y.result),y.tag=oe.tag,y.anchor!==null&&(y.anchorMap[y.anchor]=y.result);break}}else d.call(y.typeMap[y.kind||"fallback"],y.tag)?(oe=y.typeMap[y.kind||"fallback"][y.tag],y.result!==null&&oe.kind!==y.kind&&ce(y,"unacceptable node kind for !<"+y.tag+'> tag; it should be "'+oe.kind+'", not "'+y.kind+'"'),oe.resolve(y.result)?(y.result=oe.construct(y.result),y.anchor!==null&&(y.anchorMap[y.anchor]=y.result)):ce(y,"cannot resolve a node with !<"+y.tag+"> explicit tag")):ce(y,"unknown tag !<"+y.tag+">");return y.listener!==null&&y.listener("close",y),y.tag!==null||y.anchor!==null||ie}function Gn(y){var M=y.position,S,g,b,_=!1,A;for(y.version=null,y.checkLineBreaks=y.legacy,y.tagMap={},y.anchorMap={};(A=y.input.charCodeAt(y.position))!==0&&(ee(y,!0,-1),A=y.input.charCodeAt(y.position),!(y.lineIndent>0||A!==37));){for(_=!0,A=y.input.charCodeAt(++y.position),S=y.position;A!==0&&!ue(A);)A=y.input.charCodeAt(++y.position);for(g=y.input.slice(S,y.position),b=[],g.length<1&&ce(y,"directive name must not be less than one character in length");A!==0;){for(;ge(A);)A=y.input.charCodeAt(++y.position);if(A===35){do A=y.input.charCodeAt(++y.position);while(A!==0&&!q(A));break}if(q(A))break;for(S=y.position;A!==0&&!ue(A);)A=y.input.charCodeAt(++y.position);b.push(y.input.slice(S,y.position))}A!==0&&V(y),d.call(L,g)?L[g](y,g,b):Re(y,'unknown document directive "'+g+'"')}if(ee(y,!0,-1),y.lineIndent===0&&y.input.charCodeAt(y.position)===45&&y.input.charCodeAt(y.position+1)===45&&y.input.charCodeAt(y.position+2)===45?(y.position+=3,ee(y,!0,-1)):_&&ce(y,"directives end mark is expected"),Sn(y,y.lineIndent-1,h,!1,!0),ee(y,!0,-1),y.checkLineBreaks&&B.test(y.input.slice(M,y.position))&&Re(y,"non-ASCII line breaks are interpreted as content"),y.documents.push(y.result),y.position===y.lineStart&&le(y)){y.input.charCodeAt(y.position)===46&&(y.position+=3,ee(y,!0,-1));return}if(y.position<y.length-1)ce(y,"end of the stream or a document separator is expected");else return}function Tn(y,M){y=String(y),M=M||{},y.length!==0&&(y.charCodeAt(y.length-1)!==10&&y.charCodeAt(y.length-1)!==13&&(y+=`
`),y.charCodeAt(0)===65279&&(y=y.slice(1)));var S=new F(y,M),g=y.indexOf("\0");for(g!==-1&&(S.position=g,ce(S,"null byte is not allowed in input")),S.input+="\0";S.input.charCodeAt(S.position)===32;)S.lineIndent+=1,S.position+=1;for(;S.position<S.length-1;)Gn(S);return S.documents}function wn(y,M,S){M!==null&&typeof M=="object"&&typeof S>"u"&&(S=M,M=null);var g=Tn(y,S);if(typeof M!="function")return g;for(var b=0,_=g.length;b<_;b+=1)M(g[b])}function mn(y,M){var S=Tn(y,M);if(S.length!==0){if(S.length===1)return S[0];throw new a("expected a single document in the stream, but found more")}}function rt(y,M,S){return typeof M=="object"&&M!==null&&typeof S>"u"&&(S=M,M=null),wn(y,M,t.extend({schema:c},S))}function en(y,M){return mn(y,t.extend({schema:c},M))}return loader.loadAll=wn,loader.load=mn,loader.safeLoadAll=rt,loader.safeLoad=en,loader}var dumper={},hasRequiredDumper;function requireDumper(){if(hasRequiredDumper)return dumper;hasRequiredDumper=1;var t=requireCommon(),a=requireException(),l=requireDefault_full(),c=requireDefault_safe(),s=Object.prototype.toString,d=Object.prototype.hasOwnProperty,m=9,f=10,x=13,h=32,E=33,v=34,R=35,w=37,B=38,U=39,$=42,z=44,Z=45,q=58,ge=61,ue=62,K=63,ne=64,ke=91,_e=93,Ae=96,ye=123,be=124,Ne=125,xe={};xe[0]="\\0",xe[7]="\\a",xe[8]="\\b",xe[9]="\\t",xe[10]="\\n",xe[11]="\\v",xe[12]="\\f",xe[13]="\\r",xe[27]="\\e",xe[34]='\\"',xe[92]="\\\\",xe[133]="\\N",xe[160]="\\_",xe[8232]="\\L",xe[8233]="\\P";var fe=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function F(_,A){var O,j,Y,ie,G,me,oe;if(A===null)return{};for(O={},j=Object.keys(A),Y=0,ie=j.length;Y<ie;Y+=1)G=j[Y],me=String(A[G]),G.slice(0,2)==="!!"&&(G="tag:yaml.org,2002:"+G.slice(2)),oe=_.compiledTypeMap.fallback[G],oe&&d.call(oe.styleAliases,me)&&(me=oe.styleAliases[me]),O[G]=me;return O}function pe(_){var A,O,j;if(A=_.toString(16).toUpperCase(),_<=255)O="x",j=2;else if(_<=65535)O="u",j=4;else if(_<=4294967295)O="U",j=8;else throw new a("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+O+t.repeat("0",j-A.length)+A}function ce(_){this.schema=_.schema||l,this.indent=Math.max(1,_.indent||2),this.noArrayIndent=_.noArrayIndent||!1,this.skipInvalid=_.skipInvalid||!1,this.flowLevel=t.isNothing(_.flowLevel)?-1:_.flowLevel,this.styleMap=F(this.schema,_.styles||null),this.sortKeys=_.sortKeys||!1,this.lineWidth=_.lineWidth||80,this.noRefs=_.noRefs||!1,this.noCompatMode=_.noCompatMode||!1,this.condenseFlow=_.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Re(_,A){for(var O=t.repeat(" ",A),j=0,Y=-1,ie="",G,me=_.length;j<me;)Y=_.indexOf(`
`,j),Y===-1?(G=_.slice(j),j=me):(G=_.slice(j,Y+1),j=Y+1),G.length&&G!==`
`&&(ie+=O),ie+=G;return ie}function L(_,A){return`
`+t.repeat(" ",_.indent*A)}function k(_,A){var O,j,Y;for(O=0,j=_.implicitTypes.length;O<j;O+=1)if(Y=_.implicitTypes[O],Y.resolve(A))return!0;return!1}function N(_){return _===h||_===m}function T(_){return 32<=_&&_<=126||161<=_&&_<=55295&&_!==8232&&_!==8233||57344<=_&&_<=65533&&_!==65279||65536<=_&&_<=1114111}function V(_){return T(_)&&!N(_)&&_!==65279&&_!==x&&_!==f}function ee(_,A){return T(_)&&_!==65279&&_!==z&&_!==ke&&_!==_e&&_!==ye&&_!==Ne&&_!==q&&(_!==R||A&&V(A))}function le(_){return T(_)&&_!==65279&&!N(_)&&_!==Z&&_!==K&&_!==q&&_!==z&&_!==ke&&_!==_e&&_!==ye&&_!==Ne&&_!==R&&_!==B&&_!==$&&_!==E&&_!==be&&_!==ge&&_!==ue&&_!==U&&_!==v&&_!==w&&_!==ne&&_!==Ae}function he(_){var A=/^\n* /;return A.test(_)}var Ce=1,Ee=2,Ke=3,kn=4,Cn=5;function vn(_,A,O,j,Y){var ie,G,me,oe=!1,Te=!1,je=j!==-1,Oe=-1,rn=le(_.charCodeAt(0))&&!N(_.charCodeAt(_.length-1));if(A)for(ie=0;ie<_.length;ie++){if(G=_.charCodeAt(ie),!T(G))return Cn;me=ie>0?_.charCodeAt(ie-1):null,rn=rn&&ee(G,me)}else{for(ie=0;ie<_.length;ie++){if(G=_.charCodeAt(ie),G===f)oe=!0,je&&(Te=Te||ie-Oe-1>j&&_[Oe+1]!==" ",Oe=ie);else if(!T(G))return Cn;me=ie>0?_.charCodeAt(ie-1):null,rn=rn&&ee(G,me)}Te=Te||je&&ie-Oe-1>j&&_[Oe+1]!==" "}return!oe&&!Te?rn&&!Y(_)?Ce:Ee:O>9&&he(_)?Cn:Te?kn:Ke}function pn(_,A,O,j){_.dump=(function(){if(A.length===0)return"''";if(!_.noCompatMode&&fe.indexOf(A)!==-1)return"'"+A+"'";var Y=_.indent*Math.max(1,O),ie=_.lineWidth===-1?-1:Math.max(Math.min(_.lineWidth,40),_.lineWidth-Y),G=j||_.flowLevel>-1&&O>=_.flowLevel;function me(oe){return k(_,oe)}switch(vn(A,G,_.indent,ie,me)){case Ce:return A;case Ee:return"'"+A.replace(/'/g,"''")+"'";case Ke:return"|"+Ln(A,_.indent)+In(Re(A,Y));case kn:return">"+Ln(A,_.indent)+In(Re(Vn(A,ie),Y));case Cn:return'"'+Gn(A)+'"';default:throw new a("impossible error: invalid scalar style")}})()}function Ln(_,A){var O=he(_)?String(A):"",j=_[_.length-1]===`
`,Y=j&&(_[_.length-2]===`
`||_===`
`),ie=Y?"+":j?"":"-";return O+ie+`
`}function In(_){return _[_.length-1]===`
`?_.slice(0,-1):_}function Vn(_,A){for(var O=/(\n+)([^\n]*)/g,j=(function(){var Te=_.indexOf(`
`);return Te=Te!==-1?Te:_.length,O.lastIndex=Te,Sn(_.slice(0,Te),A)})(),Y=_[0]===`
`||_[0]===" ",ie,G;G=O.exec(_);){var me=G[1],oe=G[2];ie=oe[0]===" ",j+=me+(!Y&&!ie&&oe!==""?`
`:"")+Sn(oe,A),Y=ie}return j}function Sn(_,A){if(_===""||_[0]===" ")return _;for(var O=/ [^ ]/g,j,Y=0,ie,G=0,me=0,oe="";j=O.exec(_);)me=j.index,me-Y>A&&(ie=G>Y?G:me,oe+=`
`+_.slice(Y,ie),Y=ie+1),G=me;return oe+=`
`,_.length-Y>A&&G>Y?oe+=_.slice(Y,G)+`
`+_.slice(G+1):oe+=_.slice(Y),oe.slice(1)}function Gn(_){for(var A="",O,j,Y,ie=0;ie<_.length;ie++){if(O=_.charCodeAt(ie),O>=55296&&O<=56319&&(j=_.charCodeAt(ie+1),j>=56320&&j<=57343)){A+=pe((O-55296)*1024+j-56320+65536),ie++;continue}Y=xe[O],A+=!Y&&T(O)?_[ie]:Y||pe(O)}return A}function Tn(_,A,O){var j="",Y=_.tag,ie,G;for(ie=0,G=O.length;ie<G;ie+=1)y(_,A,O[ie],!1,!1)&&(ie!==0&&(j+=","+(_.condenseFlow?"":" ")),j+=_.dump);_.tag=Y,_.dump="["+j+"]"}function wn(_,A,O,j){var Y="",ie=_.tag,G,me;for(G=0,me=O.length;G<me;G+=1)y(_,A+1,O[G],!0,!0)&&((!j||G!==0)&&(Y+=L(_,A)),_.dump&&f===_.dump.charCodeAt(0)?Y+="-":Y+="- ",Y+=_.dump);_.tag=ie,_.dump=Y||"[]"}function mn(_,A,O){var j="",Y=_.tag,ie=Object.keys(O),G,me,oe,Te,je;for(G=0,me=ie.length;G<me;G+=1)je="",G!==0&&(je+=", "),_.condenseFlow&&(je+='"'),oe=ie[G],Te=O[oe],y(_,A,oe,!1,!1)&&(_.dump.length>1024&&(je+="? "),je+=_.dump+(_.condenseFlow?'"':"")+":"+(_.condenseFlow?"":" "),y(_,A,Te,!1,!1)&&(je+=_.dump,j+=je));_.tag=Y,_.dump="{"+j+"}"}function rt(_,A,O,j){var Y="",ie=_.tag,G=Object.keys(O),me,oe,Te,je,Oe,rn;if(_.sortKeys===!0)G.sort();else if(typeof _.sortKeys=="function")G.sort(_.sortKeys);else if(_.sortKeys)throw new a("sortKeys must be a boolean or a function");for(me=0,oe=G.length;me<oe;me+=1)rn="",(!j||me!==0)&&(rn+=L(_,A)),Te=G[me],je=O[Te],y(_,A+1,Te,!0,!0,!0)&&(Oe=_.tag!==null&&_.tag!=="?"||_.dump&&_.dump.length>1024,Oe&&(_.dump&&f===_.dump.charCodeAt(0)?rn+="?":rn+="? "),rn+=_.dump,Oe&&(rn+=L(_,A)),y(_,A+1,je,!0,Oe)&&(_.dump&&f===_.dump.charCodeAt(0)?rn+=":":rn+=": ",rn+=_.dump,Y+=rn));_.tag=ie,_.dump=Y||"{}"}function en(_,A,O){var j,Y,ie,G,me,oe;for(Y=O?_.explicitTypes:_.implicitTypes,ie=0,G=Y.length;ie<G;ie+=1)if(me=Y[ie],(me.instanceOf||me.predicate)&&(!me.instanceOf||typeof A=="object"&&A instanceof me.instanceOf)&&(!me.predicate||me.predicate(A))){if(_.tag=O?me.tag:"?",me.represent){if(oe=_.styleMap[me.tag]||me.defaultStyle,s.call(me.represent)==="[object Function]")j=me.represent(A,oe);else if(d.call(me.represent,oe))j=me.represent[oe](A,oe);else throw new a("!<"+me.tag+'> tag resolver accepts not "'+oe+'" style');_.dump=j}return!0}return!1}function y(_,A,O,j,Y,ie){_.tag=null,_.dump=O,en(_,O,!1)||en(_,O,!0);var G=s.call(_.dump);j&&(j=_.flowLevel<0||_.flowLevel>A);var me=G==="[object Object]"||G==="[object Array]",oe,Te;if(me&&(oe=_.duplicates.indexOf(O),Te=oe!==-1),(_.tag!==null&&_.tag!=="?"||Te||_.indent!==2&&A>0)&&(Y=!1),Te&&_.usedDuplicates[oe])_.dump="*ref_"+oe;else{if(me&&Te&&!_.usedDuplicates[oe]&&(_.usedDuplicates[oe]=!0),G==="[object Object]")j&&Object.keys(_.dump).length!==0?(rt(_,A,_.dump,Y),Te&&(_.dump="&ref_"+oe+_.dump)):(mn(_,A,_.dump),Te&&(_.dump="&ref_"+oe+" "+_.dump));else if(G==="[object Array]"){var je=_.noArrayIndent&&A>0?A-1:A;j&&_.dump.length!==0?(wn(_,je,_.dump,Y),Te&&(_.dump="&ref_"+oe+_.dump)):(Tn(_,je,_.dump),Te&&(_.dump="&ref_"+oe+" "+_.dump))}else if(G==="[object String]")_.tag!=="?"&&pn(_,_.dump,A,ie);else{if(_.skipInvalid)return!1;throw new a("unacceptable kind of an object to dump "+G)}_.tag!==null&&_.tag!=="?"&&(_.dump="!<"+_.tag+"> "+_.dump)}return!0}function M(_,A){var O=[],j=[],Y,ie;for(S(_,O,j),Y=0,ie=j.length;Y<ie;Y+=1)A.duplicates.push(O[j[Y]]);A.usedDuplicates=new Array(ie)}function S(_,A,O){var j,Y,ie;if(_!==null&&typeof _=="object")if(Y=A.indexOf(_),Y!==-1)O.indexOf(Y)===-1&&O.push(Y);else if(A.push(_),Array.isArray(_))for(Y=0,ie=_.length;Y<ie;Y+=1)S(_[Y],A,O);else for(j=Object.keys(_),Y=0,ie=j.length;Y<ie;Y+=1)S(_[j[Y]],A,O)}function g(_,A){A=A||{};var O=new ce(A);return O.noRefs||M(_,O),y(O,0,_,!0,!0)?O.dump+`
`:""}function b(_,A){return g(_,t.extend({schema:c},A))}return dumper.dump=g,dumper.safeDump=b,dumper}var hasRequiredJsYaml$1;function requireJsYaml$1(){if(hasRequiredJsYaml$1)return jsYaml$1;hasRequiredJsYaml$1=1;var t=requireLoader(),a=requireDumper();function l(c){return function(){throw new Error("Function "+c+" is deprecated and cannot be used.")}}return jsYaml$1.Type=requireType(),jsYaml$1.Schema=requireSchema(),jsYaml$1.FAILSAFE_SCHEMA=requireFailsafe(),jsYaml$1.JSON_SCHEMA=requireJson(),jsYaml$1.CORE_SCHEMA=requireCore(),jsYaml$1.DEFAULT_SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_FULL_SCHEMA=requireDefault_full(),jsYaml$1.load=t.load,jsYaml$1.loadAll=t.loadAll,jsYaml$1.safeLoad=t.safeLoad,jsYaml$1.safeLoadAll=t.safeLoadAll,jsYaml$1.dump=a.dump,jsYaml$1.safeDump=a.safeDump,jsYaml$1.YAMLException=requireException(),jsYaml$1.MINIMAL_SCHEMA=requireFailsafe(),jsYaml$1.SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_SCHEMA=requireDefault_full(),jsYaml$1.scan=l("scan"),jsYaml$1.parse=l("parse"),jsYaml$1.compose=l("compose"),jsYaml$1.addConstructor=l("addConstructor"),jsYaml$1}var jsYaml,hasRequiredJsYaml;function requireJsYaml(){if(hasRequiredJsYaml)return jsYaml;hasRequiredJsYaml=1;var t=requireJsYaml$1();return jsYaml=t,jsYaml}var hasRequiredEngines;function requireEngines(){return hasRequiredEngines||(hasRequiredEngines=1,(function(module,exports$1){const yaml=requireJsYaml(),engines=module.exports;engines.yaml={parse:yaml.safeLoad.bind(yaml),stringify:yaml.safeDump.bind(yaml)},engines.json={parse:JSON.parse.bind(JSON),stringify:function(t,a){const l=Object.assign({replacer:null,space:2},a);return JSON.stringify(t,l.replacer,l.space)}},engines.javascript={parse:function parse(str,options,wrap){try{return wrap!==!1&&(str=`(function() {
return `+str.trim()+`;
}());`),eval(str)||{}}catch(t){if(wrap!==!1&&/(unexpected|identifier)/i.test(t.message))return parse(str,options,!1);throw new SyntaxError(t)}},stringify:function(){throw new Error("stringifying JavaScript is not supported")}}})(engines)),engines.exports}var utils={};/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */var stripBomString,hasRequiredStripBomString;function requireStripBomString(){return hasRequiredStripBomString||(hasRequiredStripBomString=1,stripBomString=function(t){return typeof t=="string"&&t.charAt(0)==="\uFEFF"?t.slice(1):t}),stripBomString}var hasRequiredUtils;function requireUtils(){return hasRequiredUtils||(hasRequiredUtils=1,(function(t){const a=requireStripBomString(),l=requireKindOf();t.define=function(c,s,d){Reflect.defineProperty(c,s,{enumerable:!1,configurable:!0,writable:!0,value:d})},t.isBuffer=function(c){return l(c)==="buffer"},t.isObject=function(c){return l(c)==="object"},t.toBuffer=function(c){return typeof c=="string"?Buffer.from(c):c},t.toString=function(c){if(t.isBuffer(c))return a(String(c));if(typeof c!="string")throw new TypeError("expected input to be a string or buffer");return a(c)},t.arrayify=function(c){return c?Array.isArray(c)?c:[c]:[]},t.startsWith=function(c,s,d){return typeof d!="number"&&(d=s.length),c.slice(0,d)===s}})(utils)),utils}var defaults,hasRequiredDefaults;function requireDefaults(){if(hasRequiredDefaults)return defaults;hasRequiredDefaults=1;const t=requireEngines(),a=requireUtils();return defaults=function(l){const c=Object.assign({},l);return c.delimiters=a.arrayify(c.delims||c.delimiters||"---"),c.delimiters.length===1&&c.delimiters.push(c.delimiters[0]),c.language=(c.language||c.lang||"yaml").toLowerCase(),c.engines=Object.assign({},t,c.parsers,c.engines),c},defaults}var engine,hasRequiredEngine;function requireEngine(){if(hasRequiredEngine)return engine;hasRequiredEngine=1,engine=function(a,l){let c=l.engines[a]||l.engines[t(a)];if(typeof c>"u")throw new Error('gray-matter engine "'+a+'" is not registered');return typeof c=="function"&&(c={parse:c}),c};function t(a){switch(a.toLowerCase()){case"js":case"javascript":return"javascript";case"coffee":case"coffeescript":case"cson":return"coffee";case"yaml":case"yml":return"yaml";default:return a}}return engine}var stringify$2,hasRequiredStringify;function requireStringify(){if(hasRequiredStringify)return stringify$2;hasRequiredStringify=1;const t=requireKindOf(),a=requireEngine(),l=requireDefaults();stringify$2=function(s,d,m){if(d==null&&m==null)switch(t(s)){case"object":d=s.data,m={};break;case"string":return s;default:throw new TypeError("expected file to be a string or object")}const f=s.content,x=l(m);if(d==null){if(!x.data)return s;d=x.data}const h=s.language||x.language,E=a(h,x);if(typeof E.stringify!="function")throw new TypeError('expected "'+h+'.stringify" to be a function');d=Object.assign({},s.data,d);const v=x.delimiters[0],R=x.delimiters[1],w=E.stringify(d,m).trim();let B="";return w!=="{}"&&(B=c(v)+c(w)+c(R)),typeof s.excerpt=="string"&&s.excerpt!==""&&f.indexOf(s.excerpt.trim())===-1&&(B+=c(s.excerpt)+c(R)),B+c(f)};function c(s){return s.slice(-1)!==`
`?s+`
`:s}return stringify$2}var excerpt,hasRequiredExcerpt;function requireExcerpt(){if(hasRequiredExcerpt)return excerpt;hasRequiredExcerpt=1;const t=requireDefaults();return excerpt=function(a,l){const c=t(l);if(a.data==null&&(a.data={}),typeof c.excerpt=="function")return c.excerpt(a,c);const s=a.data.excerpt_separator||c.excerpt_separator;if(s==null&&(c.excerpt===!1||c.excerpt==null))return a;const d=typeof c.excerpt=="string"?c.excerpt:s||c.delimiters[0],m=a.content.indexOf(d);return m!==-1&&(a.excerpt=a.content.slice(0,m)),a},excerpt}var toFile,hasRequiredToFile;function requireToFile(){if(hasRequiredToFile)return toFile;hasRequiredToFile=1;const t=requireKindOf(),a=requireStringify(),l=requireUtils();return toFile=function(c){return t(c)!=="object"&&(c={content:c}),t(c.data)!=="object"&&(c.data={}),c.contents&&c.content==null&&(c.content=c.contents),l.define(c,"orig",l.toBuffer(c.content)),l.define(c,"language",c.language||""),l.define(c,"matter",c.matter||""),l.define(c,"stringify",function(s,d){return d&&d.language&&(c.language=d.language),a(c,s,d)}),c.content=l.toString(c.content),c.isEmpty=!1,c.excerpt="",c},toFile}var parse$1,hasRequiredParse;function requireParse(){if(hasRequiredParse)return parse$1;hasRequiredParse=1;const t=requireEngine(),a=requireDefaults();return parse$1=function(l,c,s){const d=a(s),m=t(l,d);if(typeof m.parse!="function")throw new TypeError('expected "'+l+'.parse" to be a function');return m.parse(c,d)},parse$1}var grayMatter,hasRequiredGrayMatter;function requireGrayMatter(){if(hasRequiredGrayMatter)return grayMatter;hasRequiredGrayMatter=1;const t=require$$0,a=requireSectionMatter(),l=requireDefaults(),c=requireStringify(),s=requireExcerpt(),d=requireEngines(),m=requireToFile(),f=requireParse(),x=requireUtils();function h(v,R){if(v==="")return{data:{},content:v,excerpt:"",orig:v};let w=m(v);const B=h.cache[w.content];if(!R){if(B)return w=Object.assign({},B),w.orig=B.orig,w;h.cache[w.content]=w}return E(w,R)}function E(v,R){const w=l(R),B=w.delimiters[0],U=`
`+w.delimiters[1];let $=v.content;w.language&&(v.language=w.language);const z=B.length;if(!x.startsWith($,B,z))return s(v,w),v;if($.charAt(z)===B.slice(-1))return v;$=$.slice(z);const Z=$.length,q=h.language($,w);q.name&&(v.language=q.name,$=$.slice(q.raw.length));let ge=$.indexOf(U);return ge===-1&&(ge=Z),v.matter=$.slice(0,ge),v.matter.replace(/^\s*#[^\n]+/gm,"").trim()===""?(v.isEmpty=!0,v.empty=v.content,v.data={}):v.data=f(v.language,v.matter,w),ge===Z?v.content="":(v.content=$.slice(ge+U.length),v.content[0]==="\r"&&(v.content=v.content.slice(1)),v.content[0]===`
`&&(v.content=v.content.slice(1))),s(v,w),(w.sections===!0||typeof w.section=="function")&&a(v,w.section),v}return h.engines=d,h.stringify=function(v,R,w){return typeof v=="string"&&(v=h(v,w)),c(v,R,w)},h.read=function(v,R){const w=t.readFileSync(v,"utf8"),B=h(w,R);return B.path=v,B},h.test=function(v,R){return x.startsWith(v,l(R).delimiters[0])},h.language=function(v,R){const B=l(R).delimiters[0];h.test(v)&&(v=v.slice(B.length));const U=v.slice(0,v.search(/\r?\n/));return{raw:U,name:U?U.trim():""}},h.cache={},h.clearCache=function(){h.cache={}},grayMatter=h,grayMatter}requireGrayMatter();var buffer={},base64Js={},hasRequiredBase64Js;function requireBase64Js(){if(hasRequiredBase64Js)return base64Js;hasRequiredBase64Js=1,base64Js.byteLength=f,base64Js.toByteArray=h,base64Js.fromByteArray=R;for(var t=[],a=[],l=typeof Uint8Array<"u"?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,d=c.length;s<d;++s)t[s]=c[s],a[c.charCodeAt(s)]=s;a[45]=62,a[95]=63;function m(w){var B=w.length;if(B%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var U=w.indexOf("=");U===-1&&(U=B);var $=U===B?0:4-U%4;return[U,$]}function f(w){var B=m(w),U=B[0],$=B[1];return(U+$)*3/4-$}function x(w,B,U){return(B+U)*3/4-U}function h(w){var B,U=m(w),$=U[0],z=U[1],Z=new l(x(w,$,z)),q=0,ge=z>0?$-4:$,ue;for(ue=0;ue<ge;ue+=4)B=a[w.charCodeAt(ue)]<<18|a[w.charCodeAt(ue+1)]<<12|a[w.charCodeAt(ue+2)]<<6|a[w.charCodeAt(ue+3)],Z[q++]=B>>16&255,Z[q++]=B>>8&255,Z[q++]=B&255;return z===2&&(B=a[w.charCodeAt(ue)]<<2|a[w.charCodeAt(ue+1)]>>4,Z[q++]=B&255),z===1&&(B=a[w.charCodeAt(ue)]<<10|a[w.charCodeAt(ue+1)]<<4|a[w.charCodeAt(ue+2)]>>2,Z[q++]=B>>8&255,Z[q++]=B&255),Z}function E(w){return t[w>>18&63]+t[w>>12&63]+t[w>>6&63]+t[w&63]}function v(w,B,U){for(var $,z=[],Z=B;Z<U;Z+=3)$=(w[Z]<<16&16711680)+(w[Z+1]<<8&65280)+(w[Z+2]&255),z.push(E($));return z.join("")}function R(w){for(var B,U=w.length,$=U%3,z=[],Z=16383,q=0,ge=U-$;q<ge;q+=Z)z.push(v(w,q,q+Z>ge?ge:q+Z));return $===1?(B=w[U-1],z.push(t[B>>2]+t[B<<4&63]+"==")):$===2&&(B=(w[U-2]<<8)+w[U-1],z.push(t[B>>10]+t[B>>4&63]+t[B<<2&63]+"=")),z.join("")}return base64Js}var ieee754={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var hasRequiredIeee754;function requireIeee754(){return hasRequiredIeee754||(hasRequiredIeee754=1,ieee754.read=function(t,a,l,c,s){var d,m,f=s*8-c-1,x=(1<<f)-1,h=x>>1,E=-7,v=l?s-1:0,R=l?-1:1,w=t[a+v];for(v+=R,d=w&(1<<-E)-1,w>>=-E,E+=f;E>0;d=d*256+t[a+v],v+=R,E-=8);for(m=d&(1<<-E)-1,d>>=-E,E+=c;E>0;m=m*256+t[a+v],v+=R,E-=8);if(d===0)d=1-h;else{if(d===x)return m?NaN:(w?-1:1)*(1/0);m=m+Math.pow(2,c),d=d-h}return(w?-1:1)*m*Math.pow(2,d-c)},ieee754.write=function(t,a,l,c,s,d){var m,f,x,h=d*8-s-1,E=(1<<h)-1,v=E>>1,R=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=c?0:d-1,B=c?1:-1,U=a<0||a===0&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(f=isNaN(a)?1:0,m=E):(m=Math.floor(Math.log(a)/Math.LN2),a*(x=Math.pow(2,-m))<1&&(m--,x*=2),m+v>=1?a+=R/x:a+=R*Math.pow(2,1-v),a*x>=2&&(m++,x/=2),m+v>=E?(f=0,m=E):m+v>=1?(f=(a*x-1)*Math.pow(2,s),m=m+v):(f=a*Math.pow(2,v-1)*Math.pow(2,s),m=0));s>=8;t[l+w]=f&255,w+=B,f/=256,s-=8);for(m=m<<s|f,h+=s;h>0;t[l+w]=m&255,w+=B,m/=256,h-=8);t[l+w-B]|=U*128}),ieee754}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var hasRequiredBuffer;function requireBuffer(){return hasRequiredBuffer||(hasRequiredBuffer=1,(function(t){const a=requireBase64Js(),l=requireIeee754(),c=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=f,t.SlowBuffer=Z,t.INSPECT_MAX_BYTES=50;const s=2147483647;t.kMaxLength=s,f.TYPED_ARRAY_SUPPORT=d(),!f.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function d(){try{const S=new Uint8Array(1),g={foo:function(){return 42}};return Object.setPrototypeOf(g,Uint8Array.prototype),Object.setPrototypeOf(S,g),S.foo()===42}catch{return!1}}Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}});function m(S){if(S>s)throw new RangeError('The value "'+S+'" is invalid for option "size"');const g=new Uint8Array(S);return Object.setPrototypeOf(g,f.prototype),g}function f(S,g,b){if(typeof S=="number"){if(typeof g=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return v(S)}return x(S,g,b)}f.poolSize=8192;function x(S,g,b){if(typeof S=="string")return R(S,g);if(ArrayBuffer.isView(S))return B(S);if(S==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof S);if(mn(S,ArrayBuffer)||S&&mn(S.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(mn(S,SharedArrayBuffer)||S&&mn(S.buffer,SharedArrayBuffer)))return U(S,g,b);if(typeof S=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const _=S.valueOf&&S.valueOf();if(_!=null&&_!==S)return f.from(_,g,b);const A=$(S);if(A)return A;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof S[Symbol.toPrimitive]=="function")return f.from(S[Symbol.toPrimitive]("string"),g,b);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof S)}f.from=function(S,g,b){return x(S,g,b)},Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array);function h(S){if(typeof S!="number")throw new TypeError('"size" argument must be of type number');if(S<0)throw new RangeError('The value "'+S+'" is invalid for option "size"')}function E(S,g,b){return h(S),S<=0?m(S):g!==void 0?typeof b=="string"?m(S).fill(g,b):m(S).fill(g):m(S)}f.alloc=function(S,g,b){return E(S,g,b)};function v(S){return h(S),m(S<0?0:z(S)|0)}f.allocUnsafe=function(S){return v(S)},f.allocUnsafeSlow=function(S){return v(S)};function R(S,g){if((typeof g!="string"||g==="")&&(g="utf8"),!f.isEncoding(g))throw new TypeError("Unknown encoding: "+g);const b=q(S,g)|0;let _=m(b);const A=_.write(S,g);return A!==b&&(_=_.slice(0,A)),_}function w(S){const g=S.length<0?0:z(S.length)|0,b=m(g);for(let _=0;_<g;_+=1)b[_]=S[_]&255;return b}function B(S){if(mn(S,Uint8Array)){const g=new Uint8Array(S);return U(g.buffer,g.byteOffset,g.byteLength)}return w(S)}function U(S,g,b){if(g<0||S.byteLength<g)throw new RangeError('"offset" is outside of buffer bounds');if(S.byteLength<g+(b||0))throw new RangeError('"length" is outside of buffer bounds');let _;return g===void 0&&b===void 0?_=new Uint8Array(S):b===void 0?_=new Uint8Array(S,g):_=new Uint8Array(S,g,b),Object.setPrototypeOf(_,f.prototype),_}function $(S){if(f.isBuffer(S)){const g=z(S.length)|0,b=m(g);return b.length===0||S.copy(b,0,0,g),b}if(S.length!==void 0)return typeof S.length!="number"||rt(S.length)?m(0):w(S);if(S.type==="Buffer"&&Array.isArray(S.data))return w(S.data)}function z(S){if(S>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return S|0}function Z(S){return+S!=S&&(S=0),f.alloc(+S)}f.isBuffer=function(g){return g!=null&&g._isBuffer===!0&&g!==f.prototype},f.compare=function(g,b){if(mn(g,Uint8Array)&&(g=f.from(g,g.offset,g.byteLength)),mn(b,Uint8Array)&&(b=f.from(b,b.offset,b.byteLength)),!f.isBuffer(g)||!f.isBuffer(b))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(g===b)return 0;let _=g.length,A=b.length;for(let O=0,j=Math.min(_,A);O<j;++O)if(g[O]!==b[O]){_=g[O],A=b[O];break}return _<A?-1:A<_?1:0},f.isEncoding=function(g){switch(String(g).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(g,b){if(!Array.isArray(g))throw new TypeError('"list" argument must be an Array of Buffers');if(g.length===0)return f.alloc(0);let _;if(b===void 0)for(b=0,_=0;_<g.length;++_)b+=g[_].length;const A=f.allocUnsafe(b);let O=0;for(_=0;_<g.length;++_){let j=g[_];if(mn(j,Uint8Array))O+j.length>A.length?(f.isBuffer(j)||(j=f.from(j)),j.copy(A,O)):Uint8Array.prototype.set.call(A,j,O);else if(f.isBuffer(j))j.copy(A,O);else throw new TypeError('"list" argument must be an Array of Buffers');O+=j.length}return A};function q(S,g){if(f.isBuffer(S))return S.length;if(ArrayBuffer.isView(S)||mn(S,ArrayBuffer))return S.byteLength;if(typeof S!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof S);const b=S.length,_=arguments.length>2&&arguments[2]===!0;if(!_&&b===0)return 0;let A=!1;for(;;)switch(g){case"ascii":case"latin1":case"binary":return b;case"utf8":case"utf-8":return Vn(S).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b*2;case"hex":return b>>>1;case"base64":return Tn(S).length;default:if(A)return _?-1:Vn(S).length;g=(""+g).toLowerCase(),A=!0}}f.byteLength=q;function ge(S,g,b){let _=!1;if((g===void 0||g<0)&&(g=0),g>this.length||((b===void 0||b>this.length)&&(b=this.length),b<=0)||(b>>>=0,g>>>=0,b<=g))return"";for(S||(S="utf8");;)switch(S){case"hex":return Re(this,g,b);case"utf8":case"utf-8":return xe(this,g,b);case"ascii":return pe(this,g,b);case"latin1":case"binary":return ce(this,g,b);case"base64":return Ne(this,g,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,g,b);default:if(_)throw new TypeError("Unknown encoding: "+S);S=(S+"").toLowerCase(),_=!0}}f.prototype._isBuffer=!0;function ue(S,g,b){const _=S[g];S[g]=S[b],S[b]=_}f.prototype.swap16=function(){const g=this.length;if(g%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let b=0;b<g;b+=2)ue(this,b,b+1);return this},f.prototype.swap32=function(){const g=this.length;if(g%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let b=0;b<g;b+=4)ue(this,b,b+3),ue(this,b+1,b+2);return this},f.prototype.swap64=function(){const g=this.length;if(g%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let b=0;b<g;b+=8)ue(this,b,b+7),ue(this,b+1,b+6),ue(this,b+2,b+5),ue(this,b+3,b+4);return this},f.prototype.toString=function(){const g=this.length;return g===0?"":arguments.length===0?xe(this,0,g):ge.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(g){if(!f.isBuffer(g))throw new TypeError("Argument must be a Buffer");return this===g?!0:f.compare(this,g)===0},f.prototype.inspect=function(){let g="";const b=t.INSPECT_MAX_BYTES;return g=this.toString("hex",0,b).replace(/(.{2})/g,"$1 ").trim(),this.length>b&&(g+=" ... "),"<Buffer "+g+">"},c&&(f.prototype[c]=f.prototype.inspect),f.prototype.compare=function(g,b,_,A,O){if(mn(g,Uint8Array)&&(g=f.from(g,g.offset,g.byteLength)),!f.isBuffer(g))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof g);if(b===void 0&&(b=0),_===void 0&&(_=g?g.length:0),A===void 0&&(A=0),O===void 0&&(O=this.length),b<0||_>g.length||A<0||O>this.length)throw new RangeError("out of range index");if(A>=O&&b>=_)return 0;if(A>=O)return-1;if(b>=_)return 1;if(b>>>=0,_>>>=0,A>>>=0,O>>>=0,this===g)return 0;let j=O-A,Y=_-b;const ie=Math.min(j,Y),G=this.slice(A,O),me=g.slice(b,_);for(let oe=0;oe<ie;++oe)if(G[oe]!==me[oe]){j=G[oe],Y=me[oe];break}return j<Y?-1:Y<j?1:0};function K(S,g,b,_,A){if(S.length===0)return-1;if(typeof b=="string"?(_=b,b=0):b>2147483647?b=2147483647:b<-2147483648&&(b=-2147483648),b=+b,rt(b)&&(b=A?0:S.length-1),b<0&&(b=S.length+b),b>=S.length){if(A)return-1;b=S.length-1}else if(b<0)if(A)b=0;else return-1;if(typeof g=="string"&&(g=f.from(g,_)),f.isBuffer(g))return g.length===0?-1:ne(S,g,b,_,A);if(typeof g=="number")return g=g&255,typeof Uint8Array.prototype.indexOf=="function"?A?Uint8Array.prototype.indexOf.call(S,g,b):Uint8Array.prototype.lastIndexOf.call(S,g,b):ne(S,[g],b,_,A);throw new TypeError("val must be string, number or Buffer")}function ne(S,g,b,_,A){let O=1,j=S.length,Y=g.length;if(_!==void 0&&(_=String(_).toLowerCase(),_==="ucs2"||_==="ucs-2"||_==="utf16le"||_==="utf-16le")){if(S.length<2||g.length<2)return-1;O=2,j/=2,Y/=2,b/=2}function ie(me,oe){return O===1?me[oe]:me.readUInt16BE(oe*O)}let G;if(A){let me=-1;for(G=b;G<j;G++)if(ie(S,G)===ie(g,me===-1?0:G-me)){if(me===-1&&(me=G),G-me+1===Y)return me*O}else me!==-1&&(G-=G-me),me=-1}else for(b+Y>j&&(b=j-Y),G=b;G>=0;G--){let me=!0;for(let oe=0;oe<Y;oe++)if(ie(S,G+oe)!==ie(g,oe)){me=!1;break}if(me)return G}return-1}f.prototype.includes=function(g,b,_){return this.indexOf(g,b,_)!==-1},f.prototype.indexOf=function(g,b,_){return K(this,g,b,_,!0)},f.prototype.lastIndexOf=function(g,b,_){return K(this,g,b,_,!1)};function ke(S,g,b,_){b=Number(b)||0;const A=S.length-b;_?(_=Number(_),_>A&&(_=A)):_=A;const O=g.length;_>O/2&&(_=O/2);let j;for(j=0;j<_;++j){const Y=parseInt(g.substr(j*2,2),16);if(rt(Y))return j;S[b+j]=Y}return j}function _e(S,g,b,_){return wn(Vn(g,S.length-b),S,b,_)}function Ae(S,g,b,_){return wn(Sn(g),S,b,_)}function ye(S,g,b,_){return wn(Tn(g),S,b,_)}function be(S,g,b,_){return wn(Gn(g,S.length-b),S,b,_)}f.prototype.write=function(g,b,_,A){if(b===void 0)A="utf8",_=this.length,b=0;else if(_===void 0&&typeof b=="string")A=b,_=this.length,b=0;else if(isFinite(b))b=b>>>0,isFinite(_)?(_=_>>>0,A===void 0&&(A="utf8")):(A=_,_=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const O=this.length-b;if((_===void 0||_>O)&&(_=O),g.length>0&&(_<0||b<0)||b>this.length)throw new RangeError("Attempt to write outside buffer bounds");A||(A="utf8");let j=!1;for(;;)switch(A){case"hex":return ke(this,g,b,_);case"utf8":case"utf-8":return _e(this,g,b,_);case"ascii":case"latin1":case"binary":return Ae(this,g,b,_);case"base64":return ye(this,g,b,_);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return be(this,g,b,_);default:if(j)throw new TypeError("Unknown encoding: "+A);A=(""+A).toLowerCase(),j=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ne(S,g,b){return g===0&&b===S.length?a.fromByteArray(S):a.fromByteArray(S.slice(g,b))}function xe(S,g,b){b=Math.min(S.length,b);const _=[];let A=g;for(;A<b;){const O=S[A];let j=null,Y=O>239?4:O>223?3:O>191?2:1;if(A+Y<=b){let ie,G,me,oe;switch(Y){case 1:O<128&&(j=O);break;case 2:ie=S[A+1],(ie&192)===128&&(oe=(O&31)<<6|ie&63,oe>127&&(j=oe));break;case 3:ie=S[A+1],G=S[A+2],(ie&192)===128&&(G&192)===128&&(oe=(O&15)<<12|(ie&63)<<6|G&63,oe>2047&&(oe<55296||oe>57343)&&(j=oe));break;case 4:ie=S[A+1],G=S[A+2],me=S[A+3],(ie&192)===128&&(G&192)===128&&(me&192)===128&&(oe=(O&15)<<18|(ie&63)<<12|(G&63)<<6|me&63,oe>65535&&oe<1114112&&(j=oe))}}j===null?(j=65533,Y=1):j>65535&&(j-=65536,_.push(j>>>10&1023|55296),j=56320|j&1023),_.push(j),A+=Y}return F(_)}const fe=4096;function F(S){const g=S.length;if(g<=fe)return String.fromCharCode.apply(String,S);let b="",_=0;for(;_<g;)b+=String.fromCharCode.apply(String,S.slice(_,_+=fe));return b}function pe(S,g,b){let _="";b=Math.min(S.length,b);for(let A=g;A<b;++A)_+=String.fromCharCode(S[A]&127);return _}function ce(S,g,b){let _="";b=Math.min(S.length,b);for(let A=g;A<b;++A)_+=String.fromCharCode(S[A]);return _}function Re(S,g,b){const _=S.length;(!g||g<0)&&(g=0),(!b||b<0||b>_)&&(b=_);let A="";for(let O=g;O<b;++O)A+=en[S[O]];return A}function L(S,g,b){const _=S.slice(g,b);let A="";for(let O=0;O<_.length-1;O+=2)A+=String.fromCharCode(_[O]+_[O+1]*256);return A}f.prototype.slice=function(g,b){const _=this.length;g=~~g,b=b===void 0?_:~~b,g<0?(g+=_,g<0&&(g=0)):g>_&&(g=_),b<0?(b+=_,b<0&&(b=0)):b>_&&(b=_),b<g&&(b=g);const A=this.subarray(g,b);return Object.setPrototypeOf(A,f.prototype),A};function k(S,g,b){if(S%1!==0||S<0)throw new RangeError("offset is not uint");if(S+g>b)throw new RangeError("Trying to access beyond buffer length")}f.prototype.readUintLE=f.prototype.readUIntLE=function(g,b,_){g=g>>>0,b=b>>>0,_||k(g,b,this.length);let A=this[g],O=1,j=0;for(;++j<b&&(O*=256);)A+=this[g+j]*O;return A},f.prototype.readUintBE=f.prototype.readUIntBE=function(g,b,_){g=g>>>0,b=b>>>0,_||k(g,b,this.length);let A=this[g+--b],O=1;for(;b>0&&(O*=256);)A+=this[g+--b]*O;return A},f.prototype.readUint8=f.prototype.readUInt8=function(g,b){return g=g>>>0,b||k(g,1,this.length),this[g]},f.prototype.readUint16LE=f.prototype.readUInt16LE=function(g,b){return g=g>>>0,b||k(g,2,this.length),this[g]|this[g+1]<<8},f.prototype.readUint16BE=f.prototype.readUInt16BE=function(g,b){return g=g>>>0,b||k(g,2,this.length),this[g]<<8|this[g+1]},f.prototype.readUint32LE=f.prototype.readUInt32LE=function(g,b){return g=g>>>0,b||k(g,4,this.length),(this[g]|this[g+1]<<8|this[g+2]<<16)+this[g+3]*16777216},f.prototype.readUint32BE=f.prototype.readUInt32BE=function(g,b){return g=g>>>0,b||k(g,4,this.length),this[g]*16777216+(this[g+1]<<16|this[g+2]<<8|this[g+3])},f.prototype.readBigUInt64LE=y(function(g){g=g>>>0,vn(g,"offset");const b=this[g],_=this[g+7];(b===void 0||_===void 0)&&pn(g,this.length-8);const A=b+this[++g]*2**8+this[++g]*2**16+this[++g]*2**24,O=this[++g]+this[++g]*2**8+this[++g]*2**16+_*2**24;return BigInt(A)+(BigInt(O)<<BigInt(32))}),f.prototype.readBigUInt64BE=y(function(g){g=g>>>0,vn(g,"offset");const b=this[g],_=this[g+7];(b===void 0||_===void 0)&&pn(g,this.length-8);const A=b*2**24+this[++g]*2**16+this[++g]*2**8+this[++g],O=this[++g]*2**24+this[++g]*2**16+this[++g]*2**8+_;return(BigInt(A)<<BigInt(32))+BigInt(O)}),f.prototype.readIntLE=function(g,b,_){g=g>>>0,b=b>>>0,_||k(g,b,this.length);let A=this[g],O=1,j=0;for(;++j<b&&(O*=256);)A+=this[g+j]*O;return O*=128,A>=O&&(A-=Math.pow(2,8*b)),A},f.prototype.readIntBE=function(g,b,_){g=g>>>0,b=b>>>0,_||k(g,b,this.length);let A=b,O=1,j=this[g+--A];for(;A>0&&(O*=256);)j+=this[g+--A]*O;return O*=128,j>=O&&(j-=Math.pow(2,8*b)),j},f.prototype.readInt8=function(g,b){return g=g>>>0,b||k(g,1,this.length),this[g]&128?(255-this[g]+1)*-1:this[g]},f.prototype.readInt16LE=function(g,b){g=g>>>0,b||k(g,2,this.length);const _=this[g]|this[g+1]<<8;return _&32768?_|4294901760:_},f.prototype.readInt16BE=function(g,b){g=g>>>0,b||k(g,2,this.length);const _=this[g+1]|this[g]<<8;return _&32768?_|4294901760:_},f.prototype.readInt32LE=function(g,b){return g=g>>>0,b||k(g,4,this.length),this[g]|this[g+1]<<8|this[g+2]<<16|this[g+3]<<24},f.prototype.readInt32BE=function(g,b){return g=g>>>0,b||k(g,4,this.length),this[g]<<24|this[g+1]<<16|this[g+2]<<8|this[g+3]},f.prototype.readBigInt64LE=y(function(g){g=g>>>0,vn(g,"offset");const b=this[g],_=this[g+7];(b===void 0||_===void 0)&&pn(g,this.length-8);const A=this[g+4]+this[g+5]*2**8+this[g+6]*2**16+(_<<24);return(BigInt(A)<<BigInt(32))+BigInt(b+this[++g]*2**8+this[++g]*2**16+this[++g]*2**24)}),f.prototype.readBigInt64BE=y(function(g){g=g>>>0,vn(g,"offset");const b=this[g],_=this[g+7];(b===void 0||_===void 0)&&pn(g,this.length-8);const A=(b<<24)+this[++g]*2**16+this[++g]*2**8+this[++g];return(BigInt(A)<<BigInt(32))+BigInt(this[++g]*2**24+this[++g]*2**16+this[++g]*2**8+_)}),f.prototype.readFloatLE=function(g,b){return g=g>>>0,b||k(g,4,this.length),l.read(this,g,!0,23,4)},f.prototype.readFloatBE=function(g,b){return g=g>>>0,b||k(g,4,this.length),l.read(this,g,!1,23,4)},f.prototype.readDoubleLE=function(g,b){return g=g>>>0,b||k(g,8,this.length),l.read(this,g,!0,52,8)},f.prototype.readDoubleBE=function(g,b){return g=g>>>0,b||k(g,8,this.length),l.read(this,g,!1,52,8)};function N(S,g,b,_,A,O){if(!f.isBuffer(S))throw new TypeError('"buffer" argument must be a Buffer instance');if(g>A||g<O)throw new RangeError('"value" argument is out of bounds');if(b+_>S.length)throw new RangeError("Index out of range")}f.prototype.writeUintLE=f.prototype.writeUIntLE=function(g,b,_,A){if(g=+g,b=b>>>0,_=_>>>0,!A){const Y=Math.pow(2,8*_)-1;N(this,g,b,_,Y,0)}let O=1,j=0;for(this[b]=g&255;++j<_&&(O*=256);)this[b+j]=g/O&255;return b+_},f.prototype.writeUintBE=f.prototype.writeUIntBE=function(g,b,_,A){if(g=+g,b=b>>>0,_=_>>>0,!A){const Y=Math.pow(2,8*_)-1;N(this,g,b,_,Y,0)}let O=_-1,j=1;for(this[b+O]=g&255;--O>=0&&(j*=256);)this[b+O]=g/j&255;return b+_},f.prototype.writeUint8=f.prototype.writeUInt8=function(g,b,_){return g=+g,b=b>>>0,_||N(this,g,b,1,255,0),this[b]=g&255,b+1},f.prototype.writeUint16LE=f.prototype.writeUInt16LE=function(g,b,_){return g=+g,b=b>>>0,_||N(this,g,b,2,65535,0),this[b]=g&255,this[b+1]=g>>>8,b+2},f.prototype.writeUint16BE=f.prototype.writeUInt16BE=function(g,b,_){return g=+g,b=b>>>0,_||N(this,g,b,2,65535,0),this[b]=g>>>8,this[b+1]=g&255,b+2},f.prototype.writeUint32LE=f.prototype.writeUInt32LE=function(g,b,_){return g=+g,b=b>>>0,_||N(this,g,b,4,4294967295,0),this[b+3]=g>>>24,this[b+2]=g>>>16,this[b+1]=g>>>8,this[b]=g&255,b+4},f.prototype.writeUint32BE=f.prototype.writeUInt32BE=function(g,b,_){return g=+g,b=b>>>0,_||N(this,g,b,4,4294967295,0),this[b]=g>>>24,this[b+1]=g>>>16,this[b+2]=g>>>8,this[b+3]=g&255,b+4};function T(S,g,b,_,A){Cn(g,_,A,S,b,7);let O=Number(g&BigInt(4294967295));S[b++]=O,O=O>>8,S[b++]=O,O=O>>8,S[b++]=O,O=O>>8,S[b++]=O;let j=Number(g>>BigInt(32)&BigInt(4294967295));return S[b++]=j,j=j>>8,S[b++]=j,j=j>>8,S[b++]=j,j=j>>8,S[b++]=j,b}function V(S,g,b,_,A){Cn(g,_,A,S,b,7);let O=Number(g&BigInt(4294967295));S[b+7]=O,O=O>>8,S[b+6]=O,O=O>>8,S[b+5]=O,O=O>>8,S[b+4]=O;let j=Number(g>>BigInt(32)&BigInt(4294967295));return S[b+3]=j,j=j>>8,S[b+2]=j,j=j>>8,S[b+1]=j,j=j>>8,S[b]=j,b+8}f.prototype.writeBigUInt64LE=y(function(g,b=0){return T(this,g,b,BigInt(0),BigInt("0xffffffffffffffff"))}),f.prototype.writeBigUInt64BE=y(function(g,b=0){return V(this,g,b,BigInt(0),BigInt("0xffffffffffffffff"))}),f.prototype.writeIntLE=function(g,b,_,A){if(g=+g,b=b>>>0,!A){const ie=Math.pow(2,8*_-1);N(this,g,b,_,ie-1,-ie)}let O=0,j=1,Y=0;for(this[b]=g&255;++O<_&&(j*=256);)g<0&&Y===0&&this[b+O-1]!==0&&(Y=1),this[b+O]=(g/j>>0)-Y&255;return b+_},f.prototype.writeIntBE=function(g,b,_,A){if(g=+g,b=b>>>0,!A){const ie=Math.pow(2,8*_-1);N(this,g,b,_,ie-1,-ie)}let O=_-1,j=1,Y=0;for(this[b+O]=g&255;--O>=0&&(j*=256);)g<0&&Y===0&&this[b+O+1]!==0&&(Y=1),this[b+O]=(g/j>>0)-Y&255;return b+_},f.prototype.writeInt8=function(g,b,_){return g=+g,b=b>>>0,_||N(this,g,b,1,127,-128),g<0&&(g=255+g+1),this[b]=g&255,b+1},f.prototype.writeInt16LE=function(g,b,_){return g=+g,b=b>>>0,_||N(this,g,b,2,32767,-32768),this[b]=g&255,this[b+1]=g>>>8,b+2},f.prototype.writeInt16BE=function(g,b,_){return g=+g,b=b>>>0,_||N(this,g,b,2,32767,-32768),this[b]=g>>>8,this[b+1]=g&255,b+2},f.prototype.writeInt32LE=function(g,b,_){return g=+g,b=b>>>0,_||N(this,g,b,4,2147483647,-2147483648),this[b]=g&255,this[b+1]=g>>>8,this[b+2]=g>>>16,this[b+3]=g>>>24,b+4},f.prototype.writeInt32BE=function(g,b,_){return g=+g,b=b>>>0,_||N(this,g,b,4,2147483647,-2147483648),g<0&&(g=4294967295+g+1),this[b]=g>>>24,this[b+1]=g>>>16,this[b+2]=g>>>8,this[b+3]=g&255,b+4},f.prototype.writeBigInt64LE=y(function(g,b=0){return T(this,g,b,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),f.prototype.writeBigInt64BE=y(function(g,b=0){return V(this,g,b,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ee(S,g,b,_,A,O){if(b+_>S.length)throw new RangeError("Index out of range");if(b<0)throw new RangeError("Index out of range")}function le(S,g,b,_,A){return g=+g,b=b>>>0,A||ee(S,g,b,4),l.write(S,g,b,_,23,4),b+4}f.prototype.writeFloatLE=function(g,b,_){return le(this,g,b,!0,_)},f.prototype.writeFloatBE=function(g,b,_){return le(this,g,b,!1,_)};function he(S,g,b,_,A){return g=+g,b=b>>>0,A||ee(S,g,b,8),l.write(S,g,b,_,52,8),b+8}f.prototype.writeDoubleLE=function(g,b,_){return he(this,g,b,!0,_)},f.prototype.writeDoubleBE=function(g,b,_){return he(this,g,b,!1,_)},f.prototype.copy=function(g,b,_,A){if(!f.isBuffer(g))throw new TypeError("argument should be a Buffer");if(_||(_=0),!A&&A!==0&&(A=this.length),b>=g.length&&(b=g.length),b||(b=0),A>0&&A<_&&(A=_),A===_||g.length===0||this.length===0)return 0;if(b<0)throw new RangeError("targetStart out of bounds");if(_<0||_>=this.length)throw new RangeError("Index out of range");if(A<0)throw new RangeError("sourceEnd out of bounds");A>this.length&&(A=this.length),g.length-b<A-_&&(A=g.length-b+_);const O=A-_;return this===g&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(b,_,A):Uint8Array.prototype.set.call(g,this.subarray(_,A),b),O},f.prototype.fill=function(g,b,_,A){if(typeof g=="string"){if(typeof b=="string"?(A=b,b=0,_=this.length):typeof _=="string"&&(A=_,_=this.length),A!==void 0&&typeof A!="string")throw new TypeError("encoding must be a string");if(typeof A=="string"&&!f.isEncoding(A))throw new TypeError("Unknown encoding: "+A);if(g.length===1){const j=g.charCodeAt(0);(A==="utf8"&&j<128||A==="latin1")&&(g=j)}}else typeof g=="number"?g=g&255:typeof g=="boolean"&&(g=Number(g));if(b<0||this.length<b||this.length<_)throw new RangeError("Out of range index");if(_<=b)return this;b=b>>>0,_=_===void 0?this.length:_>>>0,g||(g=0);let O;if(typeof g=="number")for(O=b;O<_;++O)this[O]=g;else{const j=f.isBuffer(g)?g:f.from(g,A),Y=j.length;if(Y===0)throw new TypeError('The value "'+g+'" is invalid for argument "value"');for(O=0;O<_-b;++O)this[O+b]=j[O%Y]}return this};const Ce={};function Ee(S,g,b){Ce[S]=class extends b{constructor(){super(),Object.defineProperty(this,"message",{value:g.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${S}]`,this.stack,delete this.name}get code(){return S}set code(A){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:A,writable:!0})}toString(){return`${this.name} [${S}]: ${this.message}`}}}Ee("ERR_BUFFER_OUT_OF_BOUNDS",function(S){return S?`${S} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Ee("ERR_INVALID_ARG_TYPE",function(S,g){return`The "${S}" argument must be of type number. Received type ${typeof g}`},TypeError),Ee("ERR_OUT_OF_RANGE",function(S,g,b){let _=`The value of "${S}" is out of range.`,A=b;return Number.isInteger(b)&&Math.abs(b)>2**32?A=Ke(String(b)):typeof b=="bigint"&&(A=String(b),(b>BigInt(2)**BigInt(32)||b<-(BigInt(2)**BigInt(32)))&&(A=Ke(A)),A+="n"),_+=` It must be ${g}. Received ${A}`,_},RangeError);function Ke(S){let g="",b=S.length;const _=S[0]==="-"?1:0;for(;b>=_+4;b-=3)g=`_${S.slice(b-3,b)}${g}`;return`${S.slice(0,b)}${g}`}function kn(S,g,b){vn(g,"offset"),(S[g]===void 0||S[g+b]===void 0)&&pn(g,S.length-(b+1))}function Cn(S,g,b,_,A,O){if(S>b||S<g){const j=typeof g=="bigint"?"n":"";let Y;throw g===0||g===BigInt(0)?Y=`>= 0${j} and < 2${j} ** ${(O+1)*8}${j}`:Y=`>= -(2${j} ** ${(O+1)*8-1}${j}) and < 2 ** ${(O+1)*8-1}${j}`,new Ce.ERR_OUT_OF_RANGE("value",Y,S)}kn(_,A,O)}function vn(S,g){if(typeof S!="number")throw new Ce.ERR_INVALID_ARG_TYPE(g,"number",S)}function pn(S,g,b){throw Math.floor(S)!==S?(vn(S,b),new Ce.ERR_OUT_OF_RANGE("offset","an integer",S)):g<0?new Ce.ERR_BUFFER_OUT_OF_BOUNDS:new Ce.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${g}`,S)}const Ln=/[^+/0-9A-Za-z-_]/g;function In(S){if(S=S.split("=")[0],S=S.trim().replace(Ln,""),S.length<2)return"";for(;S.length%4!==0;)S=S+"=";return S}function Vn(S,g){g=g||1/0;let b;const _=S.length;let A=null;const O=[];for(let j=0;j<_;++j){if(b=S.charCodeAt(j),b>55295&&b<57344){if(!A){if(b>56319){(g-=3)>-1&&O.push(239,191,189);continue}else if(j+1===_){(g-=3)>-1&&O.push(239,191,189);continue}A=b;continue}if(b<56320){(g-=3)>-1&&O.push(239,191,189),A=b;continue}b=(A-55296<<10|b-56320)+65536}else A&&(g-=3)>-1&&O.push(239,191,189);if(A=null,b<128){if((g-=1)<0)break;O.push(b)}else if(b<2048){if((g-=2)<0)break;O.push(b>>6|192,b&63|128)}else if(b<65536){if((g-=3)<0)break;O.push(b>>12|224,b>>6&63|128,b&63|128)}else if(b<1114112){if((g-=4)<0)break;O.push(b>>18|240,b>>12&63|128,b>>6&63|128,b&63|128)}else throw new Error("Invalid code point")}return O}function Sn(S){const g=[];for(let b=0;b<S.length;++b)g.push(S.charCodeAt(b)&255);return g}function Gn(S,g){let b,_,A;const O=[];for(let j=0;j<S.length&&!((g-=2)<0);++j)b=S.charCodeAt(j),_=b>>8,A=b%256,O.push(A),O.push(_);return O}function Tn(S){return a.toByteArray(In(S))}function wn(S,g,b,_){let A;for(A=0;A<_&&!(A+b>=g.length||A>=S.length);++A)g[A+b]=S[A];return A}function mn(S,g){return S instanceof g||S!=null&&S.constructor!=null&&S.constructor.name!=null&&S.constructor.name===g.name}function rt(S){return S!==S}const en=(function(){const S="0123456789abcdef",g=new Array(256);for(let b=0;b<16;++b){const _=b*16;for(let A=0;A<16;++A)g[_+A]=S[b]+S[A]}return g})();function y(S){return typeof BigInt>"u"?M:S}function M(){throw new Error("BigInt not supported")}})(buffer)),buffer}var bufferExports=requireBuffer();function ensureBuffer(){typeof globalThis<"u"&&typeof globalThis.Buffer>"u"&&(globalThis.Buffer=bufferExports.Buffer)}ensureBuffer();const rustBlockCode=`// Create a content block with semantic metadata
use ucm_core::{Block, ContentType, Metadata};

let block = Block::builder()
    .content("Graph-based content management")
    .content_type(ContentType::Text)
    .role("intro.hook")
    .namespace("docs")
    .build()?;

// ID is deterministic - same content = same ID
println!("Block ID: {}", block.id());`,rustDocCode=`// Build a document as a directed acyclic graph
use ucm_core::{Document, Edge, EdgeType};

let mut doc = Document::new("Getting Started Guide");

// Add blocks to the document
doc.add_block(intro_block)?;
doc.add_block(code_example)?;

// Create semantic relationships
doc.add_edge(Edge::new(
    intro_block.id(),
    code_example.id(),
    EdgeType::Elaborates,
))?;`,uclCode=`# UCL - Token-efficient command language
# Perfect for LLM interactions

APPEND TO intro
  CONTENT "Understanding the graph model"
  ROLE body.explanation
END

LINK source -> target
  TYPE references
  WEIGHT 0.8
END

SNAPSHOT "v1.0"
  MESSAGE "Initial release"
END`;function LogoPlaceholder({name:t}){return jsxRuntimeExports$2.jsx("div",{className:"text-base font-semibold text-muted-foreground/50 tracking-tight",children:t})}function LandingPage(){return jsxRuntimeExports$2.jsxs("div",{className:"min-h-screen bg-background",children:[jsxRuntimeExports$2.jsx(CTABanner,{variant:"accent",action:jsxRuntimeExports$2.jsxs("a",{href:"/docs",className:"hover:text-foreground flex items-center gap-1 text-sm font-medium",children:["Read the docs ",jsxRuntimeExports$2.jsx(ChevronRight$1,{className:"w-4 h-4"})]}),children:"Introducing UCP 1.0 — Content as a graph, optimized for LLMs"}),jsxRuntimeExports$2.jsx(Navbar,{logo:jsxRuntimeExports$2.jsxs("a",{href:"/",className:"flex items-center gap-2.5 font-bold text-xl",children:[jsxRuntimeExports$2.jsx("div",{className:"w-9 h-9 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20",children:jsxRuntimeExports$2.jsx(Network,{className:"w-5 h-5 text-white"})}),jsxRuntimeExports$2.jsx("span",{className:"tracking-tight",children:"UCP"})]}),links:[{label:"Documentation",children:[{label:"Getting Started",href:"/docs/getting-started"},{label:"Core Concepts",href:"/docs/getting-started/concepts"},{label:"UCM Core",href:"/docs/ucm-core"},{label:"UCL Parser",href:"/docs/ucl-parser"}]},{label:"Resources",children:[{label:"Examples",href:"/docs/examples"},{label:"API Reference",href:"/docs/ucp-api"},{label:"LLM Utilities",href:"/docs/ucp-llm"},{label:"Observability",href:"/docs/ucp-observe"}]},{label:"GitHub",href:"https://github.com"}],actions:jsxRuntimeExports$2.jsxs("div",{className:"flex items-center gap-3",children:[jsxRuntimeExports$2.jsx(NavButton,{variant:"ghost",href:"/docs",children:"Docs"}),jsxRuntimeExports$2.jsx(NavButton,{variant:"primary",href:"/docs/getting-started",showArrow:!0,children:"Get Started"})]})}),jsxRuntimeExports$2.jsx(Hero,{size:"xl",layout:"centered",contentAlign:"center",className:"pt-24 md:pt-32",badge:jsxRuntimeExports$2.jsx(HeroBadge,{variant:"outline",showArrow:!0,href:"/docs/getting-started",children:"v1.0 now available"}),title:jsxRuntimeExports$2.jsxs("span",{className:"block",children:[jsxRuntimeExports$2.jsx(GradientText,{gradient:"purple-blue",as:"span",children:"Unified"})," ","Content"," ",jsxRuntimeExports$2.jsx(GradientText,{gradient:"cyan-blue",as:"span",children:"Protocol"})]}),subtitle:"A modern protocol for managing structured content as directed acyclic graphs. Graph-based relationships, LLM-optimized, immutable by design.",actions:[{label:"Get Started",href:"/docs/getting-started",variant:"primary"},{label:"View on GitHub",href:"https://github.com",variant:"ghost",icon:jsxRuntimeExports$2.jsx(Github,{className:"w-4 h-4"}),iconPosition:"left"}],backgroundElement:jsxRuntimeExports$2.jsx(HeroBackground,{variant:"radial",primaryColor:"rgba(139, 92, 246, 0.08)",secondaryColor:"rgba(59, 130, 246, 0.05)"})}),jsxRuntimeExports$2.jsx(LogoCloud,{title:"Built for modern content systems",variant:"muted",logos:[{name:"Documentation",logo:jsxRuntimeExports$2.jsx(LogoPlaceholder,{name:"Documentation"})},{name:"Knowledge Bases",logo:jsxRuntimeExports$2.jsx(LogoPlaceholder,{name:"Knowledge Bases"})},{name:"CMS Platforms",logo:jsxRuntimeExports$2.jsx(LogoPlaceholder,{name:"CMS Platforms"})},{name:"AI Applications",logo:jsxRuntimeExports$2.jsx(LogoPlaceholder,{name:"AI Applications"})},{name:"Research Tools",logo:jsxRuntimeExports$2.jsx(LogoPlaceholder,{name:"Research Tools"})}]}),jsxRuntimeExports$2.jsx(Section,{theme:"muted",spacing:"xl",children:jsxRuntimeExports$2.jsxs(Container,{children:[jsxRuntimeExports$2.jsx(SectionTitle,{label:"Developer Experience",title:"Elegant APIs, powerful abstractions",align:"center",className:"mb-16"}),jsxRuntimeExports$2.jsxs("div",{className:"grid gap-12 lg:grid-cols-2 items-start",children:[jsxRuntimeExports$2.jsxs("div",{children:[jsxRuntimeExports$2.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"UCP provides a clean, type-safe API for building content graphs. Every operation is predictable, every ID is deterministic."}),jsxRuntimeExports$2.jsxs("div",{className:"flex flex-wrap gap-4 mb-12",children:[jsxRuntimeExports$2.jsx(NavButton,{variant:"primary",href:"/docs",children:"Read the docs"}),jsxRuntimeExports$2.jsx(NavButton,{variant:"ghost",href:"/docs/examples",icon:jsxRuntimeExports$2.jsx(CodeXml,{className:"w-4 h-4"}),children:"View examples"})]}),jsxRuntimeExports$2.jsx("div",{className:"grid gap-6 sm:grid-cols-2",children:[{icon:jsxRuntimeExports$2.jsx(FingerprintPattern,{className:"w-5 h-5"}),title:"Content-Addressed IDs",description:"Deterministic, collision-free identifiers"},{icon:jsxRuntimeExports$2.jsx(Network,{className:"w-5 h-5"}),title:"Graph Relationships",description:"Rich semantic edges between blocks"},{icon:jsxRuntimeExports$2.jsx(Brain,{className:"w-5 h-5"}),title:"LLM Optimization",description:"Built-in token estimation for GPT, Claude"},{icon:jsxRuntimeExports$2.jsx(FileCodeCorner,{className:"w-5 h-5"}),title:"UCL Language",description:"Token-efficient command syntax"},{icon:jsxRuntimeExports$2.jsx(History,{className:"w-5 h-5"}),title:"Immutable History",description:"Full audit trail with snapshots"},{icon:jsxRuntimeExports$2.jsx(Layers,{className:"w-5 h-5"}),title:"8 Content Types",description:"Text, code, tables, math, media & more"}].map((t,a)=>jsxRuntimeExports$2.jsxs("div",{className:"flex gap-4",children:[jsxRuntimeExports$2.jsx(IconBox,{icon:t.icon,variant:"outlined",color:"primary",size:"md"}),jsxRuntimeExports$2.jsxs("div",{children:[jsxRuntimeExports$2.jsx("h4",{className:"font-medium text-foreground",children:t.title}),jsxRuntimeExports$2.jsx("p",{className:"text-sm text-muted-foreground",children:t.description})]})]},a))})]}),jsxRuntimeExports$2.jsx("div",{className:"space-y-4",children:jsxRuntimeExports$2.jsx(CodeTabs,{tabs:[{label:"Blocks",code:rustBlockCode,language:"rust"},{label:"Documents",code:rustDocCode,language:"rust"},{label:"UCL",code:uclCode,language:"bash"}]})})]})]})}),jsxRuntimeExports$2.jsx(FeatureShowcase,{label:"The core model",title:jsxRuntimeExports$2.jsxs(jsxRuntimeExports$2.Fragment,{children:["Content as a ",jsxRuntimeExports$2.jsx(GradientText,{gradient:"purple-blue",children:"Graph"}),jsxRuntimeExports$2.jsx("br",{}),jsxRuntimeExports$2.jsx("span",{className:"text-muted-foreground",children:"not just a tree"})]}),description:"Traditional content systems force hierarchical structures. UCP embraces the natural interconnectedness of information with directed acyclic graphs, semantic relationships, and rich metadata.",layout:"left",action:jsxRuntimeExports$2.jsx(NavButton,{variant:"primary",href:"/docs/getting-started/concepts",children:"Learn the concepts"}),features:[{icon:jsxRuntimeExports$2.jsx(Boxes,{className:"w-5 h-5"}),title:"Atomic Blocks",description:"Paragraphs, code, tables, images — each a self-contained unit with metadata"},{icon:jsxRuntimeExports$2.jsx(GitBranch,{className:"w-5 h-5"}),title:"Semantic Edges",description:"References, elaborations, contradictions — explicit relationships between content"},{icon:jsxRuntimeExports$2.jsx(Sparkles,{className:"w-5 h-5"}),title:"30+ Semantic Roles",description:"intro.hook, body.evidence, conclusion.summary — rich categorization"},{icon:jsxRuntimeExports$2.jsx(Shield,{className:"w-5 h-5"}),title:"Immutable by Design",description:"Every change creates a new version with full history preserved"}],media:jsxRuntimeExports$2.jsxs("div",{className:"relative",children:[jsxRuntimeExports$2.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-3xl blur-3xl"}),jsxRuntimeExports$2.jsxs("div",{className:"relative bg-card border border-border rounded-2xl p-8 shadow-2xl",children:[jsxRuntimeExports$2.jsxs("svg",{viewBox:"0 0 300 200",className:"w-full h-auto",children:[jsxRuntimeExports$2.jsx("line",{x1:"150",y1:"40",x2:"80",y2:"100",stroke:"currentColor",strokeOpacity:"0.2",strokeWidth:"2"}),jsxRuntimeExports$2.jsx("line",{x1:"150",y1:"40",x2:"220",y2:"100",stroke:"currentColor",strokeOpacity:"0.2",strokeWidth:"2"}),jsxRuntimeExports$2.jsx("line",{x1:"80",y1:"100",x2:"60",y2:"160",stroke:"currentColor",strokeOpacity:"0.2",strokeWidth:"2"}),jsxRuntimeExports$2.jsx("line",{x1:"80",y1:"100",x2:"120",y2:"160",stroke:"currentColor",strokeOpacity:"0.2",strokeWidth:"2"}),jsxRuntimeExports$2.jsx("line",{x1:"220",y1:"100",x2:"180",y2:"160",stroke:"currentColor",strokeOpacity:"0.2",strokeWidth:"2"}),jsxRuntimeExports$2.jsx("line",{x1:"220",y1:"100",x2:"240",y2:"160",stroke:"currentColor",strokeOpacity:"0.2",strokeWidth:"2"}),jsxRuntimeExports$2.jsx("path",{d:"M120 160 Q150 140 180 160",fill:"none",stroke:"url(#gradient)",strokeWidth:"2",strokeDasharray:"4 2"}),jsxRuntimeExports$2.jsx("defs",{children:jsxRuntimeExports$2.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[jsxRuntimeExports$2.jsx("stop",{offset:"0%",stopColor:"#8B5CF6"}),jsxRuntimeExports$2.jsx("stop",{offset:"100%",stopColor:"#3B82F6"})]})}),jsxRuntimeExports$2.jsx("circle",{cx:"150",cy:"40",r:"16",fill:"url(#gradient)"}),jsxRuntimeExports$2.jsx("circle",{cx:"80",cy:"100",r:"12",className:"fill-violet-500/80"}),jsxRuntimeExports$2.jsx("circle",{cx:"220",cy:"100",r:"12",className:"fill-blue-500/80"}),jsxRuntimeExports$2.jsx("circle",{cx:"60",cy:"160",r:"8",className:"fill-violet-400/60"}),jsxRuntimeExports$2.jsx("circle",{cx:"120",cy:"160",r:"8",className:"fill-violet-400/60"}),jsxRuntimeExports$2.jsx("circle",{cx:"180",cy:"160",r:"8",className:"fill-blue-400/60"}),jsxRuntimeExports$2.jsx("circle",{cx:"240",cy:"160",r:"8",className:"fill-blue-400/60"}),jsxRuntimeExports$2.jsx("text",{x:"150",y:"44",textAnchor:"middle",className:"fill-white text-[8px] font-medium",children:"Doc"})]}),jsxRuntimeExports$2.jsx("div",{className:"mt-4 text-center",children:jsxRuntimeExports$2.jsx("p",{className:"text-sm text-muted-foreground",children:"Blocks form a DAG with semantic edges"})})]})]})}),jsxRuntimeExports$2.jsx(FeatureGrid,{label:"Core Features",title:"Everything you need for structured content",subtitle:"From atomic blocks to complete documents, UCP provides a comprehensive toolkit for content management.",columns:3,className:"bg-muted/30",children:[{icon:jsxRuntimeExports$2.jsx(Boxes,{className:"w-5 h-5"}),title:"UCM Core",description:"The foundational data model — blocks, documents, edges, and metadata."},{icon:jsxRuntimeExports$2.jsx(Zap,{className:"w-5 h-5"}),title:"UCM Engine",description:"Operations, transactions, snapshots, and validation for document manipulation."},{icon:jsxRuntimeExports$2.jsx(Terminal,{className:"w-5 h-5"}),title:"UCL Parser",description:"A token-efficient command language designed for LLM interactions."},{icon:jsxRuntimeExports$2.jsx(FileCodeCorner,{className:"w-5 h-5"}),title:"Translators",description:"Convert to and from Markdown, HTML, and other formats seamlessly."},{icon:jsxRuntimeExports$2.jsx(Brain,{className:"w-5 h-5"}),title:"LLM Utilities",description:"Context management, token estimation for GPT-4, Claude, and Llama."},{icon:jsxRuntimeExports$2.jsx(Package,{className:"w-5 h-5"}),title:"High-Level API",description:"Simple client interface for common operations and integrations."}].map((t,a)=>jsxRuntimeExports$2.jsx(FeatureCard,{icon:jsxRuntimeExports$2.jsx(IconBox,{icon:t.icon,variant:"gradient",color:"primary"}),title:t.title,description:t.description,variant:"bordered"},a))}),jsxRuntimeExports$2.jsx(StatsSection,{title:"Built for scale and reliability",stats:[{value:"10M+",label:"Blocks",description:"collision-free"},{value:"8",label:"Content Types",description:"supported"},{value:"30+",label:"Semantic Roles",description:"built-in"},{value:"100+",label:"Error Codes",description:"for debugging"}],variant:"bordered",columns:4}),jsxRuntimeExports$2.jsx(CTASection,{variant:"card",title:"Ready to structure your content?",description:"Start building with UCP today. Graph-based, LLM-ready, and designed for the future of content management.",actions:[{label:"Get Started",href:"/docs/getting-started",variant:"primary"},{label:"View Documentation",href:"/docs",variant:"outline"}]}),jsxRuntimeExports$2.jsx(Footer,{logo:jsxRuntimeExports$2.jsxs("a",{href:"/",className:"flex items-center gap-2.5 font-bold text-xl",children:[jsxRuntimeExports$2.jsx("div",{className:"w-9 h-9 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center",children:jsxRuntimeExports$2.jsx(Network,{className:"w-5 h-5 text-white"})}),jsxRuntimeExports$2.jsx("span",{className:"tracking-tight",children:"UCP"})]}),description:"A modern protocol for managing structured content as directed acyclic graphs.",sections:[{title:"Documentation",links:[{label:"Getting Started",href:"/docs/getting-started"},{label:"Core Concepts",href:"/docs/getting-started/concepts"},{label:"UCM Core",href:"/docs/ucm-core"},{label:"Examples",href:"/docs/examples"}]},{title:"Components",links:[{label:"UCM Engine",href:"/docs/ucm-engine"},{label:"UCL Parser",href:"/docs/ucl-parser"},{label:"Translators",href:"/docs/translators"},{label:"API Reference",href:"/docs/ucp-api"}]},{title:"Resources",links:[{label:"LLM Utilities",href:"/docs/ucp-llm"},{label:"Observability",href:"/docs/ucp-observe"},{label:"Conformance",href:"/docs/conformance"},{label:"GitHub",href:"https://github.com"}]}],socialLinks:[{label:"GitHub",href:"https://github.com",icon:jsxRuntimeExports$2.jsx(Github,{className:"w-5 h-5"})},{label:"Twitter",href:"https://twitter.com",icon:jsxRuntimeExports$2.jsx(Twitter,{className:"w-5 h-5"})}],copyright:`© ${new Date().getFullYear()} Unified Content Protocol. Open source.`,bottomLinks:[{label:"License",href:"#"},{label:"Contributing",href:"#"}]})]})}const __vite_glob_0_0=`# Unified Content Protocol (UCP) Documentation

Welcome to the comprehensive documentation for the **Unified Content Protocol (UCP)** — a graph-based intermediate representation for structured content, designed for efficient manipulation by Large Language Models (LLMs).

## Overview

UCP provides a token-efficient, deterministic framework for representing and transforming structured documents. It consists of several interconnected crates that work together to provide a complete content management solution.

## Architecture

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                         ucp-api                                  │
│              (High-level API for applications)                   │
├─────────────────────────────────────────────────────────────────┤
│     ucl-parser          │         ucm-engine                     │
│  (Command Language)     │    (Transformation Engine)             │
├─────────────────────────────────────────────────────────────────┤
│                         ucm-core                                 │
│         (Core Types: Block, Document, Content, Edge)             │
├─────────────────────────────────────────────────────────────────┤
│ ucp-translator-markdown / ucp-translator-html │    ucp-observe      │
│             (Format Translators)              │ (Observability)    │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

## Core Crates

| Crate | Description |
|-------|-------------|
| [\`ucm-core\`](./ucm-core/README.md) | Core types and traits for the Unified Content Model |
| [\`ucm-engine\`](./ucm-engine/README.md) | Transformation engine for applying operations to documents |
| [\`ucl-parser\`](./ucl-parser/README.md) | Parser for the Unified Content Language (UCL) |
| [\`ucp-api\`](./ucp-api/README.md) | High-level API for application integration |
| [\`ucp-translator-markdown\`](./translators/markdown/README.md) | Bidirectional Markdown conversion |
| [\`ucp-translator-html\`](./translators/html/README.md) | HTML → UCM translator with semantic extraction |
| [\`ucp-llm\`](./ucp-llm/README.md) | LLM utilities (ID mapping, prompt building) |
| [\`ucp-observe\`](./ucp-observe/README.md) | Observability utilities (tracing, metrics, audit) |

## Quick Start

### Installation

Add UCP to your \`Cargo.toml\`:

\`\`\`toml
[dependencies]
ucp-api = "0.1.4"
\`\`\`

### Basic Usage

\`\`\`rust
use ucp_api::UcpClient;

fn main() {
    // Create a client
    let client = UcpClient::new();
    
    // Create a new document
    let mut doc = client.create_document();
    
    // Add content
    let root = doc.root.clone();
    client.add_text(&mut doc, &root, "Hello, UCP!", Some("intro")).unwrap();
    
    // Execute UCL commands
    client.execute_ucl(&mut doc, r#"
        EDIT blk_abc123 SET content.text = "Updated content"
    "#).unwrap();
}
\`\`\`

## Key Concepts

### Blocks

The fundamental unit of content in UCP. Each block:
- Has a **content-addressed ID** (96-bit, deterministic)
- Contains **typed content** (text, code, table, math, media, JSON, binary)
- Carries **metadata** (semantic role, tags, labels, token estimates)
- Can have **edges** to other blocks (relationships)

### Documents

A collection of blocks organized in a hierarchical tree structure:
- Single **root block** as entry point
- **Adjacency map** defining parent-child relationships
- **Secondary indices** for fast lookup by tag, role, label, or content type
- **Edge index** for relationship traversal
- **Traversal utilities** (BFS/DFS/path-finding) for navigation and context gathering

### UCL (Unified Content Language)

A token-efficient command language for document manipulation:
- \`EDIT\` - Modify block content or metadata
- \`APPEND\` - Add new blocks
- \`MOVE\` - Reorganize structure
- \`DELETE\` - Remove blocks
- \`LINK/UNLINK\` - Manage relationships
- \`SNAPSHOT\` - Version management
- \`WRITE_SECTION\` - Replace section content from Markdown with undo support

## Documentation Structure

\`\`\`
docs/
├── README.md                    # This file
├── getting-started/
│   ├── installation.md
│   ├── quick-start.md
│   └── concepts.md
├── ucm-core/
│   ├── README.md
│   ├── blocks.md
│   ├── content-types.md
│   ├── documents.md
│   ├── edges.md
│   ├── metadata.md
│   └── id-generation.md
├── ucm-engine/
│   ├── README.md
│   ├── operations.md
│   ├── transactions.md
│   ├── snapshots.md
│   └── validation.md
├── ucl-parser/
│   ├── README.md
│   ├── syntax.md
│   ├── commands.md
│   └── expressions.md
├── ucp-api/
│   ├── README.md
│   └── client.md
├── translators/
│   ├── markdown/
│   │   └── README.md
│   └── html/
│       └── README.md
├── ucp-llm/
│   └── README.md
├── ucp-observe/
│   └── README.md
└── examples/
    ├── basic.md
    ├── intermediate.md
    └── advanced.md
\`\`\`

## License

See the LICENSE file in the repository root.
`,__vite_glob_0_1=`# UCP Cross-Language Conformance Specification

This document defines the canonical behaviors that all UCP implementations (Rust, TypeScript, Python) must follow to ensure interoperability.

## Overview

The Rust implementation in \`crates/\` is the **reference implementation**. SDKs in \`packages/\` should either:
1. Use WASM/FFI bindings to the Rust core, or
2. Implement the spec exactly as defined here

## Core Types

### BlockId

A 96-bit (12-byte) content-addressed identifier.

**Format**: \`blk_\` prefix followed by 24 lowercase hexadecimal characters.

\`\`\`
blk_000000000000  (root block)
blk_a1b2c3d4e5f6  (content-derived)
\`\`\`

**Generation Algorithm**:
1. Normalize content (NFC Unicode normalization)
2. Compute SHA-256 hash of: \`content_bytes || semantic_role || namespace\`
3. Take first 12 bytes of hash
4. Encode as lowercase hex with \`blk_\` prefix

**Test Vectors**:
| Content | Role | Namespace | Expected ID |
|---------|------|-----------|-------------|
| "Hello" | "intro" | None | Implementation-defined (run Rust to get canonical) |
| "" | None | None | \`blk_000000000000\` (root) |

### ContentHash

A 256-bit SHA-256 hash of normalized content.

**Format**: 64 lowercase hexadecimal characters.

### Document

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| \`id\` | DocumentId | Yes | Unique document identifier |
| \`root\` | BlockId | Yes | Root block ID (always exists) |
| \`blocks\` | Map<BlockId, Block> | Yes | All blocks in document |
| \`children\` | Map<BlockId, Vec<BlockId>> | Yes | Parent → children mapping |
| \`metadata\` | DocumentMetadata | No | Document-level metadata |
| \`version\` | DocumentVersion | Yes | Version tracking |

### Block

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| \`id\` | BlockId | Yes | Content-derived identifier |
| \`content\` | Content | Yes | Typed content |
| \`metadata\` | BlockMetadata | Yes | Block metadata |
| \`edges\` | Vec<Edge> | No | Explicit relationships |
| \`version\` | Version | Yes | Optimistic concurrency |

### Content Types

All implementations must support:

| Type | Rust | TypeScript | Python |
|------|------|------------|--------|
| Text | \`Content::Text\` | \`type: 'text'\` | \`ContentType.TEXT\` |
| Code | \`Content::Code\` | \`type: 'code'\` | \`ContentType.CODE\` |
| Table | \`Content::Table\` | \`type: 'table'\` | \`ContentType.TABLE\` |
| Math | \`Content::Math\` | \`type: 'math'\` | \`ContentType.MATH\` |
| Media | \`Content::Media\` | \`type: 'media'\` | \`ContentType.MEDIA\` |
| Json | \`Content::Json\` | \`type: 'json'\` | \`ContentType.JSON\` |

### Edge Types

| Type | Description |
|------|-------------|
| \`references\` | General reference |
| \`derived_from\` | Content derivation |
| \`supersedes\` | Version replacement |
| \`supports\` | Semantic support |
| \`contradicts\` | Semantic contradiction |
| \`elaborates\` | Expansion of content |
| \`summarizes\` | Condensed version |
| \`parent_of\` | Structural parent |
| \`child_of\` | Structural child |

## UCL Commands

### EDIT

\`\`\`ucl
EDIT <block_id> SET <path> = <value>
EDIT <block_id> APPEND <path> = <value>
EDIT <block_id> REMOVE <path> = <value>
\`\`\`

**Paths**:
- \`text\` or \`content.text\` - Text content
- \`metadata.label\` - Block label
- \`metadata.tags\` - Tags array
- \`metadata.summary\` - Summary
- \`metadata.custom.<key>\` - Custom metadata

### APPEND

\`\`\`ucl
APPEND <parent_id> <content_type> :: <content>
APPEND <parent_id> <content_type> WITH label="x", role="y" :: <content>
APPEND <parent_id> <content_type> AT <index> :: <content>
\`\`\`

### MOVE

\`\`\`ucl
MOVE <block_id> TO <new_parent_id>
MOVE <block_id> TO <new_parent_id> AT <index>
MOVE <block_id> BEFORE <sibling_id>
MOVE <block_id> AFTER <sibling_id>
\`\`\`

### DELETE

\`\`\`ucl
DELETE <block_id>
DELETE <block_id> CASCADE
DELETE <block_id> PRESERVE_CHILDREN
\`\`\`

### LINK / UNLINK

\`\`\`ucl
LINK <source_id> <edge_type> <target_id>
LINK <source_id> <edge_type> <target_id> WITH confidence=0.9
UNLINK <source_id> <edge_type> <target_id>
\`\`\`

### PRUNE

\`\`\`ucl
PRUNE UNREACHABLE
PRUNE WHERE tag = "draft"
\`\`\`

### SNAPSHOT

\`\`\`ucl
SNAPSHOT CREATE "name"
SNAPSHOT CREATE "name" WITH description="..."
SNAPSHOT RESTORE "name"
SNAPSHOT DELETE "name"
SNAPSHOT LIST
\`\`\`

### ATOMIC

\`\`\`ucl
ATOMIC {
  EDIT ...
  APPEND ...
}
\`\`\`

## Validation

### Error Codes

| Code | Severity | Description |
|------|----------|-------------|
| E001 | Error | Block not found |
| E002 | Error | Invalid block ID format |
| E101 | Error | Parse error |
| E201 | Error | Cycle detected |
| E202 | Error | Invalid parent reference |
| E203 | Warning | Orphaned block |
| E301 | Error | Transaction conflict |
| E400 | Error | Block count limit exceeded |
| E401 | Error | Document size limit exceeded |
| E402 | Error | Block size limit exceeded |
| E403 | Error | Nesting depth limit exceeded |
| E404 | Error | Edge count limit exceeded |

### Default Limits

| Limit | Value |
|-------|-------|
| Max document size | 50 MB |
| Max block count | 100,000 |
| Max block size | 5 MB |
| Max nesting depth | 50 |
| Max edges per block | 1,000 |

## Serialization

### JSON Format

Documents serialize to JSON with stable key ordering:

\`\`\`json
{
  "id": "doc_...",
  "root": "blk_000000000000",
  "blocks": {
    "blk_000000000000": {
      "id": "blk_000000000000",
      "content": { "type": "text", "text": "" },
      "metadata": { ... },
      "edges": [],
      "version": { "counter": 1, "timestamp": "..." }
    }
  },
  "children": {
    "blk_000000000000": ["blk_..."]
  },
  "metadata": { ... },
  "version": { ... }
}
\`\`\`

### UCL Format

\`\`\`ucl
STRUCTURE
blk_000000000000: [blk_111111111111, blk_222222222222]
blk_111111111111: []

BLOCKS
text #blk_111111111111 label="Introduction" :: "Hello, world!"

COMMANDS
EDIT blk_111111111111 SET text = "Updated"
\`\`\`

## Conformance Test Suite

Each implementation must pass the test cases in \`tests/conformance/\`:

1. **ID Generation** - Verify BlockId generation matches reference
2. **Document Operations** - Create, add, move, delete blocks
3. **UCL Parsing** - Parse all command types
4. **UCL Execution** - Execute commands with expected results
5. **Validation** - Detect all error conditions
6. **Serialization** - Round-trip JSON/UCL formats
7. **Edge Operations** - Link/unlink with all edge types

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 0.1.0 | 2026-01-09 | Initial spec |
`,__vite_glob_0_2=`# Advanced Examples

This document provides advanced examples demonstrating complex UCP usage patterns and integrations.

## Example 1: Building a Document Pipeline

\`\`\`rust
use ucp_api::UcpClient;
use ucm_core::{Block, Content, Document, Edge, EdgeType};
use ucm_engine::{Engine, Operation};
use ucp_translator_markdown::parse_markdown;

/// A document processing pipeline
struct DocumentPipeline {
    client: UcpClient,
    engine: Engine,
    stages: Vec<Box<dyn PipelineStage>>,
}

trait PipelineStage {
    fn name(&self) -> &str;
    fn process(&self, doc: &mut Document) -> Result<(), String>;
}

struct AddMetadataStage {
    author: String,
    version: String,
}

impl PipelineStage for AddMetadataStage {
    fn name(&self) -> &str { "add-metadata" }
    
    fn process(&self, doc: &mut Document) -> Result<(), String> {
        doc.metadata.authors.push(self.author.clone());
        doc.metadata.custom.insert(
            "version".to_string(),
            serde_json::json!(self.version)
        );
        Ok(())
    }
}

struct TagCodeBlocksStage;

impl PipelineStage for TagCodeBlocksStage {
    fn name(&self) -> &str { "tag-code-blocks" }
    
    fn process(&self, doc: &mut Document) -> Result<(), String> {
        let code_ids: Vec<_> = doc.indices.find_by_type("code").iter().cloned().collect();
        
        for id in code_ids {
            if let Some(block) = doc.get_block_mut(&id) {
                if let Content::Code(code) = &block.content {
                    block.metadata.tags.push(format!("lang:{}", code.language));
                }
            }
        }
        
        doc.rebuild_indices();
        Ok(())
    }
}

struct ValidateStructureStage;

impl PipelineStage for ValidateStructureStage {
    fn name(&self) -> &str { "validate-structure" }
    
    fn process(&self, doc: &mut Document) -> Result<(), String> {
        let issues = doc.validate();
        let errors: Vec<_> = issues.iter()
            .filter(|i| i.severity == ucm_core::ValidationSeverity::Error)
            .collect();
        
        if !errors.is_empty() {
            return Err(format!("{} validation errors", errors.len()));
        }
        Ok(())
    }
}

impl DocumentPipeline {
    fn new() -> Self {
        Self {
            client: UcpClient::new(),
            engine: Engine::new(),
            stages: Vec::new(),
        }
    }
    
    fn add_stage(mut self, stage: Box<dyn PipelineStage>) -> Self {
        self.stages.push(stage);
        self
    }
    
    fn process(&self, doc: &mut Document) -> Result<(), String> {
        for stage in &self.stages {
            println!("Running stage: {}", stage.name());
            stage.process(doc)?;
        }
        Ok(())
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create pipeline
    let pipeline = DocumentPipeline::new()
        .add_stage(Box::new(AddMetadataStage {
            author: "Pipeline".to_string(),
            version: "1.0.0".to_string(),
        }))
        .add_stage(Box::new(TagCodeBlocksStage))
        .add_stage(Box::new(ValidateStructureStage));
    
    // Process document
    let markdown = r#"
# Example Document

Some introduction text.

\`\`\`rust
fn main() {
    println!("Hello!");
}
\`\`\`

\`\`\`python
def hello():
    print("Hello!")
\`\`\`
"#;
    
    let mut doc = parse_markdown(markdown)?;
    pipeline.process(&mut doc)?;
    
    println!("\\nProcessed document:");
    println!("  Authors: {:?}", doc.metadata.authors);
    println!("  Rust code blocks: {}", doc.indices.find_by_tag("lang:rust").len());
    println!("  Python code blocks: {}", doc.indices.find_by_tag("lang:python").len());
    
    Ok(())
}
\`\`\`

## Example 2: Implementing a Document Diff

\`\`\`rust
use ucm_core::{Block, BlockId, Content, Document};
use std::collections::{HashMap, HashSet};

#[derive(Debug)]
enum DiffChange {
    Added(BlockId),
    Removed(BlockId),
    Modified { id: BlockId, old_hash: String, new_hash: String },
    Moved { id: BlockId, old_parent: BlockId, new_parent: BlockId },
}

struct DocumentDiff {
    changes: Vec<DiffChange>,
}

impl DocumentDiff {
    fn compute(old: &Document, new: &Document) -> Self {
        let mut changes = Vec::new();
        
        let old_ids: HashSet<_> = old.blocks.keys().cloned().collect();
        let new_ids: HashSet<_> = new.blocks.keys().cloned().collect();
        
        // Find added blocks
        for id in new_ids.difference(&old_ids) {
            changes.push(DiffChange::Added(id.clone()));
        }
        
        // Find removed blocks
        for id in old_ids.difference(&new_ids) {
            changes.push(DiffChange::Removed(id.clone()));
        }
        
        // Find modified and moved blocks
        for id in old_ids.intersection(&new_ids) {
            let old_block = old.get_block(id).unwrap();
            let new_block = new.get_block(id).unwrap();
            
            // Check content change
            let old_hash = format!("{:?}", old_block.metadata.content_hash);
            let new_hash = format!("{:?}", new_block.metadata.content_hash);
            
            if old_hash != new_hash {
                changes.push(DiffChange::Modified {
                    id: id.clone(),
                    old_hash,
                    new_hash,
                });
            }
            
            // Check parent change
            let old_parent = old.parent(id);
            let new_parent = new.parent(id);
            
            if old_parent != new_parent {
                if let (Some(op), Some(np)) = (old_parent, new_parent) {
                    changes.push(DiffChange::Moved {
                        id: id.clone(),
                        old_parent: op.clone(),
                        new_parent: np.clone(),
                    });
                }
            }
        }
        
        Self { changes }
    }
    
    fn summary(&self) -> String {
        let added = self.changes.iter().filter(|c| matches!(c, DiffChange::Added(_))).count();
        let removed = self.changes.iter().filter(|c| matches!(c, DiffChange::Removed(_))).count();
        let modified = self.changes.iter().filter(|c| matches!(c, DiffChange::Modified { .. })).count();
        let moved = self.changes.iter().filter(|c| matches!(c, DiffChange::Moved { .. })).count();
        
        format!(
            "+{} -{} ~{} >{} (added/removed/modified/moved)",
            added, removed, modified, moved
        )
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create original document
    let mut doc1 = Document::create();
    let root = doc1.root.clone();
    
    let block1 = Block::new(Content::text("Original content"), Some("paragraph"));
    let block1_id = doc1.add_block(block1, &root)?;
    
    let block2 = Block::new(Content::text("Will be removed"), Some("paragraph"));
    let block2_id = doc1.add_block(block2, &root)?;
    
    // Create modified document
    let mut doc2 = Document::create();
    let root2 = doc2.root.clone();
    
    // Modified block1
    let block1_mod = Block::new(Content::text("Modified content"), Some("paragraph"));
    doc2.add_block(block1_mod, &root2)?;
    
    // New block
    let block3 = Block::new(Content::text("New block"), Some("paragraph"));
    doc2.add_block(block3, &root2)?;
    
    // Compute diff
    let diff = DocumentDiff::compute(&doc1, &doc2);
    
    println!("Document diff: {}", diff.summary());
    println!("\\nChanges:");
    for change in &diff.changes {
        println!("  {:?}", change);
    }
    
    Ok(())
}
\`\`\`

## Example 3: Building a Query Language

\`\`\`rust
use ucm_core::{Block, BlockId, Content, Document};

#[derive(Debug, Clone)]
enum Query {
    All,
    ByType(String),
    ByTag(String),
    ByLabel(String),
    ByRole(String),
    And(Box<Query>, Box<Query>),
    Or(Box<Query>, Box<Query>),
    Not(Box<Query>),
    HasChild(Box<Query>),
    HasParent(Box<Query>),
}

struct QueryEngine;

impl QueryEngine {
    fn execute(doc: &Document, query: &Query) -> Vec<BlockId> {
        let all_ids: Vec<_> = doc.blocks.keys().cloned().collect();
        
        all_ids.into_iter()
            .filter(|id| Self::matches(doc, id, query))
            .collect()
    }
    
    fn matches(doc: &Document, id: &BlockId, query: &Query) -> bool {
        let block = match doc.get_block(id) {
            Some(b) => b,
            None => return false,
        };
        
        match query {
            Query::All => true,
            
            Query::ByType(t) => block.content_type() == t,
            
            Query::ByTag(tag) => block.has_tag(tag),
            
            Query::ByLabel(label) => {
                block.metadata.label.as_ref() == Some(label)
            }
            
            Query::ByRole(role) => {
                block.metadata.semantic_role
                    .as_ref()
                    .map(|r| r.category.as_str() == role)
                    .unwrap_or(false)
            }
            
            Query::And(a, b) => {
                Self::matches(doc, id, a) && Self::matches(doc, id, b)
            }
            
            Query::Or(a, b) => {
                Self::matches(doc, id, a) || Self::matches(doc, id, b)
            }
            
            Query::Not(q) => !Self::matches(doc, id, q),
            
            Query::HasChild(child_query) => {
                doc.children(id).iter().any(|child_id| {
                    Self::matches(doc, child_id, child_query)
                })
            }
            
            Query::HasParent(parent_query) => {
                doc.parent(id)
                    .map(|parent_id| Self::matches(doc, parent_id, parent_query))
                    .unwrap_or(false)
            }
        }
    }
}

// Query builder for ergonomic API
struct QueryBuilder;

impl QueryBuilder {
    fn all() -> Query { Query::All }
    fn by_type(t: &str) -> Query { Query::ByType(t.to_string()) }
    fn by_tag(t: &str) -> Query { Query::ByTag(t.to_string()) }
    fn by_label(l: &str) -> Query { Query::ByLabel(l.to_string()) }
    fn by_role(r: &str) -> Query { Query::ByRole(r.to_string()) }
    
    fn and(a: Query, b: Query) -> Query { Query::And(Box::new(a), Box::new(b)) }
    fn or(a: Query, b: Query) -> Query { Query::Or(Box::new(a), Box::new(b)) }
    fn not(q: Query) -> Query { Query::Not(Box::new(q)) }
    
    fn has_child(q: Query) -> Query { Query::HasChild(Box::new(q)) }
    fn has_parent(q: Query) -> Query { Query::HasParent(Box::new(q)) }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Build document
    let section = Block::new(Content::text("Section"), Some("heading2"))
        .with_tag("important");
    let section_id = doc.add_block(section, &root)?;
    
    let para = Block::new(Content::text("Paragraph"), Some("paragraph"))
        .with_tag("draft");
    doc.add_block(para, &section_id)?;
    
    let code = Block::new(Content::code("rust", "fn main() {}"), Some("code"))
        .with_tag("example");
    doc.add_block(code, &section_id)?;
    
    // Execute queries
    use QueryBuilder as Q;
    
    // Find all code blocks
    let code_blocks = QueryEngine::execute(&doc, &Q::by_type("code"));
    println!("Code blocks: {}", code_blocks.len());
    
    // Find important blocks
    let important = QueryEngine::execute(&doc, &Q::by_tag("important"));
    println!("Important blocks: {}", important.len());
    
    // Find blocks that are either code or have 'draft' tag
    let query = Q::or(Q::by_type("code"), Q::by_tag("draft"));
    let results = QueryEngine::execute(&doc, &query);
    println!("Code OR draft: {}", results.len());
    
    // Find sections that have code children
    let query = Q::and(
        Q::by_role("heading2"),
        Q::has_child(Q::by_type("code"))
    );
    let sections_with_code = QueryEngine::execute(&doc, &query);
    println!("Sections with code: {}", sections_with_code.len());
    
    Ok(())
}
\`\`\`

## Example 4: Implementing Document Templates

\`\`\`rust
use ucm_core::{Block, Content, Document, BlockId};
use std::collections::HashMap;

struct DocumentTemplate {
    name: String,
    structure: Vec<TemplateNode>,
}

struct TemplateNode {
    role: String,
    content_type: String,
    placeholder: Option<String>,
    children: Vec<TemplateNode>,
}

impl DocumentTemplate {
    fn new(name: &str) -> Self {
        Self {
            name: name.to_string(),
            structure: Vec::new(),
        }
    }
    
    fn add_node(mut self, node: TemplateNode) -> Self {
        self.structure.push(node);
        self
    }
    
    fn instantiate(&self, values: &HashMap<String, String>) -> Result<Document, String> {
        let mut doc = Document::create();
        let root = doc.root.clone();
        
        for node in &self.structure {
            Self::instantiate_node(&mut doc, &root, node, values)?;
        }
        
        Ok(doc)
    }
    
    fn instantiate_node(
        doc: &mut Document,
        parent: &BlockId,
        node: &TemplateNode,
        values: &HashMap<String, String>,
    ) -> Result<BlockId, String> {
        let content_text = if let Some(placeholder) = &node.placeholder {
            values.get(placeholder)
                .cloned()
                .unwrap_or_else(|| format!("[{}]", placeholder))
        } else {
            String::new()
        };
        
        let content = match node.content_type.as_str() {
            "text" => Content::text(&content_text),
            "code" => Content::code("text", &content_text),
            _ => Content::text(&content_text),
        };
        
        let block = Block::new(content, Some(&node.role));
        let block_id = doc.add_block(block, parent).map_err(|e| e.to_string())?;
        
        for child in &node.children {
            Self::instantiate_node(doc, &block_id, child, values)?;
        }
        
        Ok(block_id)
    }
}

impl TemplateNode {
    fn new(role: &str, content_type: &str) -> Self {
        Self {
            role: role.to_string(),
            content_type: content_type.to_string(),
            placeholder: None,
            children: Vec::new(),
        }
    }
    
    fn with_placeholder(mut self, placeholder: &str) -> Self {
        self.placeholder = Some(placeholder.to_string());
        self
    }
    
    fn with_child(mut self, child: TemplateNode) -> Self {
        self.children.push(child);
        self
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Define a blog post template
    let template = DocumentTemplate::new("blog-post")
        .add_node(
            TemplateNode::new("title", "text")
                .with_placeholder("title")
        )
        .add_node(
            TemplateNode::new("heading2", "text")
                .with_placeholder("intro_heading")
                .with_child(
                    TemplateNode::new("paragraph", "text")
                        .with_placeholder("intro_content")
                )
        )
        .add_node(
            TemplateNode::new("heading2", "text")
                .with_placeholder("main_heading")
                .with_child(
                    TemplateNode::new("paragraph", "text")
                        .with_placeholder("main_content")
                )
                .with_child(
                    TemplateNode::new("code", "code")
                        .with_placeholder("code_example")
                )
        )
        .add_node(
            TemplateNode::new("heading2", "text")
                .with_placeholder("conclusion_heading")
                .with_child(
                    TemplateNode::new("paragraph", "text")
                        .with_placeholder("conclusion_content")
                )
        );
    
    // Instantiate with values
    let mut values = HashMap::new();
    values.insert("title".to_string(), "My Blog Post".to_string());
    values.insert("intro_heading".to_string(), "Introduction".to_string());
    values.insert("intro_content".to_string(), "Welcome to my blog post.".to_string());
    values.insert("main_heading".to_string(), "Main Content".to_string());
    values.insert("main_content".to_string(), "Here's the main content.".to_string());
    values.insert("code_example".to_string(), "fn example() {}".to_string());
    values.insert("conclusion_heading".to_string(), "Conclusion".to_string());
    values.insert("conclusion_content".to_string(), "Thanks for reading!".to_string());
    
    let doc = template.instantiate(&values)?;
    
    println!("Created document from template:");
    println!("  Blocks: {}", doc.block_count());
    
    // Render to markdown
    let markdown = ucp_translator_markdown::render_markdown(&doc)?;
    println!("\\n{}", markdown);
    
    Ok(())
}
\`\`\`

## Example 5: Building a Document Index

\`\`\`rust
use ucm_core::{Block, BlockId, Content, Document};
use std::collections::HashMap;

/// Full-text search index for documents
struct DocumentIndex {
    /// Word -> (BlockId, frequency)
    word_index: HashMap<String, Vec<(BlockId, u32)>>,
    /// BlockId -> word count
    block_lengths: HashMap<BlockId, u32>,
    /// Total documents indexed
    total_blocks: u32,
}

impl DocumentIndex {
    fn new() -> Self {
        Self {
            word_index: HashMap::new(),
            block_lengths: HashMap::new(),
            total_blocks: 0,
        }
    }
    
    fn index_document(&mut self, doc: &Document) {
        for (id, block) in &doc.blocks {
            self.index_block(id, block);
        }
    }
    
    fn index_block(&mut self, id: &BlockId, block: &Block) {
        let text = Self::extract_text(&block.content);
        let words = Self::tokenize(&text);
        
        let mut word_freq: HashMap<String, u32> = HashMap::new();
        for word in &words {
            *word_freq.entry(word.clone()).or_insert(0) += 1;
        }
        
        for (word, freq) in word_freq {
            self.word_index
                .entry(word)
                .or_insert_with(Vec::new)
                .push((id.clone(), freq));
        }
        
        self.block_lengths.insert(id.clone(), words.len() as u32);
        self.total_blocks += 1;
    }
    
    fn search(&self, query: &str) -> Vec<(BlockId, f64)> {
        let query_words = Self::tokenize(query);
        let mut scores: HashMap<BlockId, f64> = HashMap::new();
        
        for word in &query_words {
            if let Some(postings) = self.word_index.get(word) {
                let idf = (self.total_blocks as f64 / postings.len() as f64).ln();
                
                for (block_id, freq) in postings {
                    let block_len = self.block_lengths.get(block_id).copied().unwrap_or(1) as f64;
                    let tf = *freq as f64 / block_len;
                    let score = tf * idf;
                    
                    *scores.entry(block_id.clone()).or_insert(0.0) += score;
                }
            }
        }
        
        let mut results: Vec<_> = scores.into_iter().collect();
        results.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap());
        results
    }
    
    fn extract_text(content: &Content) -> String {
        match content {
            Content::Text(t) => t.text.clone(),
            Content::Code(c) => c.source.clone(),
            Content::Table(t) => {
                t.rows.iter()
                    .flat_map(|r| r.cells.iter())
                    .filter_map(|c| match c {
                        ucm_core::Cell::Text(s) => Some(s.clone()),
                        _ => None,
                    })
                    .collect::<Vec<_>>()
                    .join(" ")
            }
            _ => String::new(),
        }
    }
    
    fn tokenize(text: &str) -> Vec<String> {
        text.to_lowercase()
            .split(|c: char| !c.is_alphanumeric())
            .filter(|s| !s.is_empty() && s.len() > 2)
            .map(String::from)
            .collect()
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Add searchable content
    let blocks = vec![
        ("Rust Programming", "Rust is a systems programming language focused on safety."),
        ("Memory Safety", "Rust provides memory safety without garbage collection."),
        ("Concurrency", "Rust enables fearless concurrency through ownership."),
        ("Performance", "Rust offers zero-cost abstractions for high performance."),
        ("WebAssembly", "Rust compiles to WebAssembly for web applications."),
    ];
    
    for (title, content) in blocks {
        let heading = Block::new(Content::text(title), Some("heading2"));
        let heading_id = doc.add_block(heading, &root)?;
        
        let para = Block::new(Content::text(content), Some("paragraph"));
        doc.add_block(para, &heading_id)?;
    }
    
    // Build index
    let mut index = DocumentIndex::new();
    index.index_document(&doc);
    
    // Search
    let queries = vec!["memory safety", "programming", "web", "performance"];
    
    for query in queries {
        println!("\\nSearch: '{}'", query);
        let results = index.search(query);
        
        for (id, score) in results.iter().take(3) {
            if let Some(block) = doc.get_block(id) {
                let preview = match &block.content {
                    Content::Text(t) => t.text.chars().take(50).collect::<String>(),
                    _ => "[non-text]".to_string(),
                };
                println!("  {:.3}: {}...", score, preview);
            }
        }
    }
    
    Ok(())
}
\`\`\`

## Example 6: Event-Driven Document Processing

\`\`\`rust
use ucm_core::{Block, BlockId, Content, Document};
use std::sync::mpsc::{channel, Sender, Receiver};

#[derive(Debug, Clone)]
enum DocumentEvent {
    BlockAdded { id: BlockId, parent: BlockId },
    BlockRemoved { id: BlockId },
    BlockModified { id: BlockId },
    EdgeAdded { source: BlockId, target: BlockId },
    DocumentValidated { valid: bool, issue_count: usize },
}

trait EventHandler: Send {
    fn handle(&self, event: &DocumentEvent);
}

struct LoggingHandler;

impl EventHandler for LoggingHandler {
    fn handle(&self, event: &DocumentEvent) {
        println!("[LOG] {:?}", event);
    }
}

struct MetricsHandler {
    sender: Sender<DocumentEvent>,
}

impl EventHandler for MetricsHandler {
    fn handle(&self, event: &DocumentEvent) {
        let _ = self.sender.send(event.clone());
    }
}

struct EventEmitter {
    handlers: Vec<Box<dyn EventHandler>>,
}

impl EventEmitter {
    fn new() -> Self {
        Self { handlers: Vec::new() }
    }
    
    fn add_handler(&mut self, handler: Box<dyn EventHandler>) {
        self.handlers.push(handler);
    }
    
    fn emit(&self, event: DocumentEvent) {
        for handler in &self.handlers {
            handler.handle(&event);
        }
    }
}

struct ObservableDocument {
    doc: Document,
    emitter: EventEmitter,
}

impl ObservableDocument {
    fn new(emitter: EventEmitter) -> Self {
        Self {
            doc: Document::create(),
            emitter,
        }
    }
    
    fn add_block(&mut self, block: Block, parent: &BlockId) -> Result<BlockId, String> {
        let id = self.doc.add_block(block, parent).map_err(|e| e.to_string())?;
        
        self.emitter.emit(DocumentEvent::BlockAdded {
            id: id.clone(),
            parent: parent.clone(),
        });
        
        Ok(id)
    }
    
    fn delete_block(&mut self, id: &BlockId) -> Result<(), String> {
        self.doc.delete_block(id).map_err(|e| e.to_string())?;
        
        self.emitter.emit(DocumentEvent::BlockRemoved {
            id: id.clone(),
        });
        
        Ok(())
    }
    
    fn validate(&self) -> bool {
        let issues = self.doc.validate();
        let valid = issues.iter().all(|i| i.severity != ucm_core::ValidationSeverity::Error);
        
        self.emitter.emit(DocumentEvent::DocumentValidated {
            valid,
            issue_count: issues.len(),
        });
        
        valid
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Set up event handling
    let (tx, rx) = channel();
    
    let mut emitter = EventEmitter::new();
    emitter.add_handler(Box::new(LoggingHandler));
    emitter.add_handler(Box::new(MetricsHandler { sender: tx }));
    
    // Create observable document
    let mut doc = ObservableDocument::new(emitter);
    let root = doc.doc.root.clone();
    
    // Perform operations (events will be emitted)
    let block1 = Block::new(Content::text("First block"), Some("paragraph"));
    let id1 = doc.add_block(block1, &root)?;
    
    let block2 = Block::new(Content::text("Second block"), Some("paragraph"));
    let id2 = doc.add_block(block2, &root)?;
    
    doc.validate();
    
    doc.delete_block(&id2)?;
    
    // Process received events
    println!("\\nReceived events:");
    while let Ok(event) = rx.try_recv() {
        println!("  {:?}", event);
    }
    
    Ok(())
}
\`\`\`

## Example 7: Multi-Format Export

\`\`\`rust
use ucm_core::{Block, Content, Document};
use ucp_translator_markdown::render_markdown;

trait DocumentExporter {
    fn export(&self, doc: &Document) -> Result<String, String>;
    fn format_name(&self) -> &str;
}

struct MarkdownExporter;

impl DocumentExporter for MarkdownExporter {
    fn export(&self, doc: &Document) -> Result<String, String> {
        render_markdown(doc).map_err(|e| e.to_string())
    }
    
    fn format_name(&self) -> &str { "markdown" }
}

struct HtmlExporter;

impl DocumentExporter for HtmlExporter {
    fn export(&self, doc: &Document) -> Result<String, String> {
        let mut html = String::from("<!DOCTYPE html>\\n<html>\\n<head><title>Document</title></head>\\n<body>\\n");
        
        Self::render_block(doc, &doc.root, &mut html, 0);
        
        html.push_str("</body>\\n</html>");
        Ok(html)
    }
    
    fn format_name(&self) -> &str { "html" }
}

impl HtmlExporter {
    fn render_block(doc: &Document, id: &ucm_core::BlockId, html: &mut String, depth: usize) {
        if let Some(block) = doc.get_block(id) {
            if !block.is_root() {
                let role = block.metadata.semantic_role
                    .as_ref()
                    .map(|r| r.category.as_str())
                    .unwrap_or("div");
                
                match &block.content {
                    Content::Text(t) => {
                        let tag = match role {
                            "heading1" => "h1",
                            "heading2" => "h2",
                            "heading3" => "h3",
                            "paragraph" => "p",
                            "quote" => "blockquote",
                            _ => "div",
                        };
                        html.push_str(&format!("<{}>{}</{}>\\n", tag, t.text, tag));
                    }
                    Content::Code(c) => {
                        html.push_str(&format!(
                            "<pre><code class=\\"language-{}\\">{}</code></pre>\\n",
                            c.language, c.source
                        ));
                    }
                    _ => {}
                }
            }
        }
        
        if let Some(children) = doc.structure.get(id) {
            for child in children {
                Self::render_block(doc, child, html, depth + 1);
            }
        }
    }
}

struct JsonExporter;

impl DocumentExporter for JsonExporter {
    fn export(&self, doc: &Document) -> Result<String, String> {
        serde_json::to_string_pretty(doc).map_err(|e| e.to_string())
    }
    
    fn format_name(&self) -> &str { "json" }
}

struct ExportManager {
    exporters: Vec<Box<dyn DocumentExporter>>,
}

impl ExportManager {
    fn new() -> Self {
        Self { exporters: Vec::new() }
    }
    
    fn register(mut self, exporter: Box<dyn DocumentExporter>) -> Self {
        self.exporters.push(exporter);
        self
    }
    
    fn export(&self, doc: &Document, format: &str) -> Result<String, String> {
        self.exporters
            .iter()
            .find(|e| e.format_name() == format)
            .ok_or_else(|| format!("Unknown format: {}", format))?
            .export(doc)
    }
    
    fn export_all(&self, doc: &Document) -> Vec<(String, Result<String, String>)> {
        self.exporters
            .iter()
            .map(|e| (e.format_name().to_string(), e.export(doc)))
            .collect()
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create document
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    let title = Block::new(Content::text("My Document"), Some("heading1"));
    let title_id = doc.add_block(title, &root)?;
    
    let para = Block::new(Content::text("This is a paragraph."), Some("paragraph"));
    doc.add_block(para, &title_id)?;
    
    let code = Block::new(Content::code("rust", "fn main() {}"), Some("code"));
    doc.add_block(code, &title_id)?;
    
    // Set up export manager
    let manager = ExportManager::new()
        .register(Box::new(MarkdownExporter))
        .register(Box::new(HtmlExporter))
        .register(Box::new(JsonExporter));
    
    // Export to all formats
    for (format, result) in manager.export_all(&doc) {
        println!("=== {} ===", format.to_uppercase());
        match result {
            Ok(content) => println!("{}\\n", &content[..content.len().min(500)]),
            Err(e) => println!("Error: {}\\n", e),
        }
    }
    
    Ok(())
}
\`\`\`

## Example 8: Undoable Section Replace (Rust & Python)

This scenario shows how to replace a section's content from Markdown while keeping a restore payload that can be replayed later.

\`\`\`rust
use ucm_core::{Content, Document};
use ucm_engine::{Engine, Operation};
use ucm_engine::section::{clear_section_content_with_undo, restore_deleted_content};
use ucp_translator_markdown::parse_markdown;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();

    // Seed a section
    let section = doc.add_block(Content::text("Chapter 1"), Some("heading1"), &root)?;
    doc.add_block(Content::text("Legacy paragraph"), Some("paragraph"), &section)?;

    // Capture existing content before replacement
    let ClearSectionResult { removed_ids, deleted_content } =
        clear_section_content_with_undo(&mut doc, &section)?;
    assert!(!removed_ids.is_empty());

    // Integrate new markdown using the WriteSection operation
    let markdown = "## New Intro\\\\n\\\\nFresh content.".to_string();
    let mut engine = Engine::new();
    engine.execute(&mut doc, Operation::WriteSection {
        section_id: section.clone(),
        markdown,
        base_heading_level: Some(1),
    })?;

    // ... later, roll back to the snapshot
    let restored = restore_deleted_content(&mut doc, &deleted_content)?;
    assert_eq!(restored.len(), removed_ids.len());
    Ok(())
}
\`\`\`

\`\`\`python
import ucp

doc = ucp.parse("""# Chapter 1\\n\\nLegacy paragraph\\n""")
section_id = ucp.find_section_by_path(doc, "Chapter 1")

snapshot = ucp.clear_section_with_undo(doc, section_id)
ucp.write_section(doc, section_id, "## New Intro\\n\\nFresh content", base_heading_level=1)

# ... persist snapshot.deleted_content somewhere durable ...

ucp.restore_deleted_section(doc, snapshot.deleted_content)
assert ucp.find_section_by_path(doc, "Chapter 1 > Legacy paragraph")
\`\`\`

## Example 9: Context Window Management with Traversal (Python)

Combine the traversal engine with the context manager to collect relevant blocks, curate them, and render an LLM-ready prompt.

\`\`\`python
from ucp import (
    create, add_block, find_section_by_path,
    TraversalEngine, TraversalFilter, NavigateDirection,
    create_context, ExpandDirection, CompressionMethod,
)

doc = create()
root = doc.root_id
chapter = add_block(doc, root, "Chapter 1", role="heading1")
section = add_block(doc, chapter, "1.1 Overview", role="heading2")
para = add_block(doc, section, "This section introduces the topic.", role="paragraph")

# Traverse downward two levels starting at Chapter 1
engine = TraversalEngine()
nodes = engine.traverse(
    doc,
    start_id=chapter,
    direction=NavigateDirection.BREADTH_FIRST,
    max_depth=2,
    filter=TraversalFilter(include_roles=["heading", "paragraph"]),
)

print(f"Collected {len(nodes.nodes)} nodes for consideration")

# Build a context window around the same section
ctx = create_context("analysis", max_tokens=2000)
ctx.initialize_focus(doc, section, "Summarize the overview")
ctx.expand_context(doc, ExpandDirection.DOWN, depth=2)

# Drop any block you don't want to keep
for block_id in list(ctx.window.blocks.keys()):
    meta = ctx.window.blocks[block_id]
    if meta.relevance_score < 0.2:
        ctx.remove_block(block_id)

# Compress if over budget, then render for the LLM
ctx.compress(doc, CompressionMethod.TRUNCATE)
prompt = ctx.render_for_prompt(doc)
print(prompt)
\`\`\`

## Example 10: HTML Ingestion Pipeline

Use the HTML translator to harvest structured content from arbitrary markup, normalize heading depth, and append it under an existing section.

\`\`\`rust
use ucm_core::{Content, Document};
use ucp_translator_html::{HtmlParser, ParseConfig};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();
    let appendix = doc.add_block(Content::text("Appendix"), Some("heading1"), &root)?;

    let html = r#"
    <article>
        <h1>Release Notes</h1>
        <p>Highlights of the latest release.</p>
        <h2>Bug Fixes</h2>
        <ul><li>Fixed context window bug</li><li>Improved traversal speed</li></ul>
    </article>
    "#;

    let parser = HtmlParser::new(ParseConfig {
        base_heading_level: Some(2), // slot beneath Appendix (H1)
        denied_nodes: Some(vec!["script", "style"]),
        capture_attributes: true,
        ..Default::default()
    });

    let imported = parser.parse(html)?;

    // Integrate imported doc as a subtree under Appendix
    for child in imported.children(&imported.root) {
        doc.clone_subtree_from(&imported, child, &appendix)?;
    }

    println!("Appendix now has {} children", doc.children(&appendix).len());
    Ok(())
}
\`\`\`

## See Also

- [Basic Examples](./basic.md) - Getting started examples
- [Intermediate Examples](./intermediate.md) - More complex scenarios
- [UCM Core](../ucm-core/README.md) - Core types reference
- [UCM Engine](../ucm-engine/README.md) - Engine documentation
`,__vite_glob_0_3=`# Basic Examples

This document provides basic examples for getting started with UCP.

## Example 1: Creating a Simple Document

\`\`\`rust
use ucp_api::UcpClient;
use ucm_core::{Block, Content};

fn main() {
    let client = UcpClient::new();
    
    // Create a new document
    let mut doc = client.create_document();
    let root = doc.root.clone();
    
    // Add a title
    let title = Block::new(Content::text("My First Document"), Some("title"));
    let title_id = doc.add_block(title, &root).unwrap();
    
    // Add a paragraph
    let para = Block::new(
        Content::text("This is my first UCP document."),
        Some("paragraph")
    );
    doc.add_block(para, &title_id).unwrap();
    
    println!("Created document with {} blocks", doc.block_count());
}
\`\`\`

## Example 2: Using the UcpClient

\`\`\`rust
use ucp_api::UcpClient;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = UcpClient::new();
    let mut doc = client.create_document();
    let root = doc.root.clone();
    
    // Add text using convenience method
    let intro_id = client.add_text(
        &mut doc,
        &root,
        "Welcome to UCP!",
        Some("intro")
    )?;
    
    // Add code using convenience method
    let code_id = client.add_code(
        &mut doc,
        &root,
        "rust",
        "fn hello() {\\n    println!(\\"Hello!\\");\\n}"
    )?;
    
    // Serialize to JSON
    let json = client.to_json(&doc)?;
    println!("{}", json);
    
    Ok(())
}
\`\`\`

## Example 3: Basic UCL Commands

\`\`\`rust
use ucp_api::UcpClient;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = UcpClient::new();
    let mut doc = client.create_document();
    
    // Execute UCL commands
    let results = client.execute_ucl(&mut doc, r#"
        // Add a heading
        APPEND blk_ff00000000000000000000 text WITH role="heading1" :: "Getting Started"
        
        // Add a paragraph
        APPEND blk_ff00000000000000000000 text WITH role="paragraph" :: "This guide will help you get started with UCP."
        
        // Add a code example
        APPEND blk_ff00000000000000000000 code :: "cargo add ucp-api"
    "#)?;
    
    println!("Executed {} commands", results.len());
    println!("Document has {} blocks", doc.block_count());
    
    Ok(())
}
\`\`\`

## Example 4: Working with Content Types

\`\`\`rust
use ucm_core::{Block, Content, Document};

fn main() {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Text content
    let text = Block::new(Content::text("Plain text content"), Some("paragraph"));
    doc.add_block(text, &root).unwrap();
    
    // Markdown content
    let markdown = Block::new(
        Content::markdown("**Bold** and *italic* text"),
        Some("paragraph")
    );
    doc.add_block(markdown, &root).unwrap();
    
    // Code content
    let code = Block::new(
        Content::code("python", "def greet(name):\\n    print(f'Hello, {name}!')"),
        Some("code")
    );
    doc.add_block(code, &root).unwrap();
    
    // Table content
    let table = Block::new(
        Content::table(vec![
            vec!["Name".into(), "Age".into(), "City".into()],
            vec!["Alice".into(), "30".into(), "NYC".into()],
            vec!["Bob".into(), "25".into(), "LA".into()],
        ]),
        Some("table")
    );
    doc.add_block(table, &root).unwrap();
    
    // JSON content
    let json = Block::new(
        Content::json(serde_json::json!({
            "name": "config",
            "debug": true,
            "level": 5
        })),
        Some("metadata")
    );
    doc.add_block(json, &root).unwrap();
    
    println!("Created {} blocks with different content types", doc.block_count());
}
\`\`\`

## Example 5: Building Document Structure

\`\`\`rust
use ucm_core::{Block, Content, Document};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Create chapter 1
    let ch1 = Block::new(Content::text("Chapter 1: Introduction"), Some("heading1"));
    let ch1_id = doc.add_block(ch1, &root)?;
    
    // Add sections to chapter 1
    let sec1_1 = Block::new(Content::text("1.1 Overview"), Some("heading2"));
    let sec1_1_id = doc.add_block(sec1_1, &ch1_id)?;
    
    let para1 = Block::new(Content::text("This section provides an overview."), Some("paragraph"));
    doc.add_block(para1, &sec1_1_id)?;
    
    let sec1_2 = Block::new(Content::text("1.2 Background"), Some("heading2"));
    let sec1_2_id = doc.add_block(sec1_2, &ch1_id)?;
    
    let para2 = Block::new(Content::text("Some background information."), Some("paragraph"));
    doc.add_block(para2, &sec1_2_id)?;
    
    // Create chapter 2
    let ch2 = Block::new(Content::text("Chapter 2: Details"), Some("heading1"));
    let ch2_id = doc.add_block(ch2, &root)?;
    
    let para3 = Block::new(Content::text("Detailed content here."), Some("paragraph"));
    doc.add_block(para3, &ch2_id)?;
    
    // Print structure
    println!("Document structure:");
    print_structure(&doc, &root, 0);
    
    Ok(())
}

fn print_structure(doc: &Document, block_id: &ucm_core::BlockId, depth: usize) {
    let indent = "  ".repeat(depth);
    
    if let Some(block) = doc.get_block(block_id) {
        let content_preview = match &block.content {
            ucm_core::Content::Text(t) => t.text.chars().take(30).collect::<String>(),
            _ => block.content_type().to_string(),
        };
        println!("{}{}: {}", indent, block_id, content_preview);
    }
    
    if let Some(children) = doc.structure.get(block_id) {
        for child in children {
            print_structure(doc, child, depth + 1);
        }
    }
}
\`\`\`

## Example 6: Using Tags and Labels

\`\`\`rust
use ucm_core::{Block, Content, Document};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Create blocks with tags and labels
    let important = Block::new(Content::text("Important note"), Some("note"))
        .with_label("important-note")
        .with_tag("important")
        .with_tag("review-needed");
    let important_id = doc.add_block(important, &root)?;
    
    let draft = Block::new(Content::text("Draft content"), Some("paragraph"))
        .with_label("draft-section")
        .with_tag("draft")
        .with_tag("wip");
    doc.add_block(draft, &root)?;
    
    let final_content = Block::new(Content::text("Final content"), Some("paragraph"))
        .with_label("final-section")
        .with_tag("final")
        .with_tag("approved");
    doc.add_block(final_content, &root)?;
    
    // Query by tag
    let important_blocks = doc.indices.find_by_tag("important");
    println!("Important blocks: {}", important_blocks.len());
    
    let draft_blocks = doc.indices.find_by_tag("draft");
    println!("Draft blocks: {}", draft_blocks.len());
    
    // Query by label
    if let Some(id) = doc.indices.find_by_label("important-note") {
        println!("Found important-note: {}", id);
    }
    
    // Check if block has tag
    let block = doc.get_block(&important_id).unwrap();
    println!("Has 'important' tag: {}", block.has_tag("important"));
    println!("Has 'draft' tag: {}", block.has_tag("draft"));
    
    Ok(())
}
\`\`\`

## Example 7: Querying Documents

\`\`\`rust
use ucm_core::{Block, Content, Document};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Build a document
    let heading = Block::new(Content::text("Title"), Some("heading1"));
    let heading_id = doc.add_block(heading, &root)?;
    
    let para1 = Block::new(Content::text("First paragraph"), Some("paragraph"));
    doc.add_block(para1, &heading_id)?;
    
    let code = Block::new(Content::code("rust", "fn main() {}"), Some("code"));
    doc.add_block(code, &heading_id)?;
    
    let para2 = Block::new(Content::text("Second paragraph"), Some("paragraph"));
    doc.add_block(para2, &heading_id)?;
    
    // Query by content type
    let text_blocks = doc.indices.find_by_type("text");
    println!("Text blocks: {}", text_blocks.len());
    
    let code_blocks = doc.indices.find_by_type("code");
    println!("Code blocks: {}", code_blocks.len());
    
    // Get children of a block
    let children = doc.children(&heading_id);
    println!("Heading has {} children", children.len());
    
    // Get parent
    if let Some(parent) = doc.parent(&heading_id) {
        println!("Heading's parent: {}", parent);
    }
    
    // Get all descendants
    let descendants = doc.descendants(&root);
    println!("Root has {} descendants", descendants.len());
    
    Ok(())
}
\`\`\`

## Example 8: Markdown Conversion

\`\`\`rust
use ucp_translator_markdown::{parse_markdown, render_markdown};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Parse Markdown to UCM
    let markdown = r#"
# Welcome

This is a simple document.

## Features

- Easy to use
- Powerful
- Flexible

\`\`\`rust
fn main() {
    println!("Hello, UCP!");
}
\`\`\`
"#;

    let doc = parse_markdown(markdown)?;
    println!("Parsed {} blocks from Markdown", doc.block_count());
    
    // Render back to Markdown
    let rendered = render_markdown(&doc)?;
    println!("\\nRendered Markdown:\\n{}", rendered);
    
    Ok(())
}
\`\`\`

## Example 9: Document Validation

\`\`\`rust
use ucm_core::{Block, Content, Document, ValidationSeverity};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Add some blocks
    let block = Block::new(Content::text("Content"), Some("paragraph"));
    let block_id = doc.add_block(block, &root)?;
    
    // Validate document
    let issues = doc.validate();
    
    if issues.is_empty() {
        println!("Document is valid!");
    } else {
        for issue in &issues {
            match issue.severity {
                ValidationSeverity::Error => eprintln!("ERROR: {}", issue.message),
                ValidationSeverity::Warning => println!("WARNING: {}", issue.message),
                ValidationSeverity::Info => println!("INFO: {}", issue.message),
            }
        }
    }
    
    // Create an orphan to demonstrate warning
    doc.remove_from_structure(&block_id);
    
    let issues = doc.validate();
    println!("\\nAfter creating orphan:");
    for issue in &issues {
        println!("[{:?}] {}", issue.severity, issue.message);
    }
    
    Ok(())
}
\`\`\`

## Example 10: Serialization

\`\`\`rust
use ucp_api::UcpClient;
use ucm_core::{Block, Content};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = UcpClient::new();
    let mut doc = client.create_document();
    let root = doc.root.clone();
    
    // Add content
    client.add_text(&mut doc, &root, "Hello, World!", Some("greeting"))?;
    client.add_code(&mut doc, &root, "rust", "fn main() {}")?;
    
    // Serialize document to JSON
    let json = client.to_json(&doc)?;
    println!("Document JSON:\\n{}", json);
    
    // Serialize individual block
    let block = doc.get_block(&root).unwrap();
    let block_json = serde_json::to_string_pretty(block)?;
    println!("\\nRoot block JSON:\\n{}", block_json);
    
    Ok(())
}
\`\`\`

## Example 11: Python SDK - Semantic Roles

\`\`\`python
from ucp import (
    create, parse, Block, SemanticRole,
    ValidationResult, ValidationIssue, ValidationSeverity
)

# Create a document with semantic roles
doc = create()

# Add blocks with various semantic roles
doc.add_block(doc.root_id, "My Document", role=SemanticRole.TITLE)
doc.add_block(doc.root_id, "Welcome to this guide", role=SemanticRole.INTRO)

# Use callout roles for important content
doc.add_block(doc.root_id, "Remember to save your work", role=SemanticRole.NOTE)
doc.add_block(doc.root_id, "This action cannot be undone!", role=SemanticRole.WARNING)
doc.add_block(doc.root_id, "Pro tip: Use keyboard shortcuts", role=SemanticRole.TIP)

# Technical content
doc.add_block(doc.root_id, "E = mc^2", role=SemanticRole.EQUATION)
doc.add_block(doc.root_id, "[1] Author, Title, 2024", role=SemanticRole.CITATION)

print(f"Created document with {len(doc.blocks)} blocks")

# List all blocks with their roles
for block_id, block in doc.blocks.items():
    role_name = block.role.value if block.role else "none"
    print(f"  {block_id[:12]}... - {role_name}: {block.content[:30]}")
\`\`\`

## Example 12: Python SDK - Validation API

\`\`\`python
from ucp import (
    create, ValidationResult, ValidationIssue, ValidationSeverity
)

# Create validation result with different severities
result = ValidationResult(
    valid=True,
    issues=[
        ValidationIssue.error("E001", "Missing required field", block_id="blk_123"),
        ValidationIssue.warning("W001", "Deprecated syntax used"),
        ValidationIssue.info("I001", "Consider adding a description"),
    ]
)

# Filter issues by severity
errors = result.errors()
warnings = result.warnings()
infos = result.infos()

print(f"Errors: {len(errors)}")
print(f"Warnings: {len(warnings)}")
print(f"Infos: {len(infos)}")

# Check document validation
doc = create()
doc.add_block(doc.root_id, "Content")

validation = doc.validate()
if validation.valid:
    print("Document is valid!")
else:
    for error in validation.errors():
        print(f"ERROR [{error.code}]: {error.message}")
\`\`\`

## Example 13: Python SDK - Block Hashability

\`\`\`python
from ucp import create, Block, SemanticRole

# Blocks can be used in sets and as dictionary keys
block1 = Block.text("Hello", role=SemanticRole.PARAGRAPH)
block2 = Block.text("World", role=SemanticRole.PARAGRAPH)

# Add to set
block_set = {block1, block2}
print(f"Set contains {len(block_set)} blocks")

# Use as dictionary key
block_metadata = {
    block1: {"priority": "high"},
    block2: {"priority": "low"},
}
print(f"Block 1 priority: {block_metadata[block1]['priority']}")

# Equality is based on block ID
same_id_block = Block(id=block1.id, content="Different content")
print(f"Same ID means equal: {block1 == same_id_block}")
\`\`\`

## Next Steps

- [Intermediate Examples](./intermediate.md) - More complex scenarios
- [Advanced Examples](./advanced.md) - Advanced usage patterns
- [UCL Commands](../ucl-parser/commands.md) - UCL reference
- [Semantic Roles](../ucm-core/semantic-roles.md) - Complete role reference
`,__vite_glob_0_4=`# Intermediate Examples

This document provides intermediate examples demonstrating more complex UCP usage patterns.

## Example 1: Document Transformation with UCL

\`\`\`rust
use ucp_api::UcpClient;
use ucm_core::Document;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = UcpClient::new();
    let mut doc = client.create_document();
    
    // Build initial structure
    client.execute_ucl(&mut doc, r#"
        APPEND blk_ff00000000000000000000 text WITH role="heading1" label="title" :: "Technical Guide"
        APPEND blk_ff00000000000000000000 text WITH role="heading2" label="intro" :: "Introduction"
        APPEND blk_ff00000000000000000000 text WITH role="heading2" label="setup" :: "Setup"
        APPEND blk_ff00000000000000000000 text WITH role="heading2" label="usage" :: "Usage"
    "#)?;
    
    // Add content under sections
    if let Some(intro_id) = doc.indices.find_by_label("intro") {
        client.execute_ucl(&mut doc, &format!(r#"
            APPEND {} text WITH role="paragraph" :: "Welcome to this technical guide."
            APPEND {} text WITH role="paragraph" :: "This guide covers installation and usage."
        "#, intro_id, intro_id))?;
    }
    
    if let Some(setup_id) = doc.indices.find_by_label("setup") {
        client.execute_ucl(&mut doc, &format!(r#"
            APPEND {} text WITH role="paragraph" :: "Follow these steps to set up:"
            APPEND {} code WITH lang="bash" :: "cargo add my-crate"
        "#, setup_id, setup_id))?;
    }
    
    // Transform: Add tags to all paragraphs
    for block_id in doc.indices.find_by_type("text").clone() {
        if let Some(block) = doc.get_block(&block_id) {
            if block.metadata.semantic_role
                .as_ref()
                .map(|r| r.category.as_str() == "paragraph")
                .unwrap_or(false)
            {
                client.execute_ucl(&mut doc, &format!(
                    r#"EDIT {} SET metadata.tags += ["content"]"#,
                    block_id
                ))?;
            }
        }
    }
    
    println!("Document has {} blocks", doc.block_count());
    println!("Content-tagged blocks: {}", doc.indices.find_by_tag("content").len());
    
    Ok(())
}
\`\`\`

## Example 2: Working with Edges and Relationships

\`\`\`rust
use ucm_core::{Block, Content, Document, Edge, EdgeType};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Create a claim
    let claim = Block::new(
        Content::text("Rust provides memory safety without garbage collection."),
        Some("body.argument")
    ).with_label("main-claim");
    let claim_id = doc.add_block(claim, &root)?;
    
    // Create supporting evidence
    let evidence1 = Block::new(
        Content::text("The borrow checker enforces ownership rules at compile time."),
        Some("body.evidence")
    ).with_label("evidence-1");
    let evidence1_id = doc.add_block(evidence1, &root)?;
    
    let evidence2 = Block::new(
        Content::text("Lifetimes ensure references are always valid."),
        Some("body.evidence")
    ).with_label("evidence-2");
    let evidence2_id = doc.add_block(evidence2, &root)?;
    
    // Create counterargument
    let counter = Block::new(
        Content::text("Unsafe blocks can bypass safety guarantees."),
        Some("body.counterargument")
    ).with_label("counter-1");
    let counter_id = doc.add_block(counter, &root)?;
    
    // Create rebuttal
    let rebuttal = Block::new(
        Content::text("Unsafe is explicit and auditable, unlike implicit unsafety."),
        Some("body.rebuttal")
    ).with_label("rebuttal-1");
    let rebuttal_id = doc.add_block(rebuttal, &root)?;
    
    // Add relationships
    // Evidence supports claim
    let edge1 = Edge::new(EdgeType::Supports, claim_id.clone())
        .with_confidence(0.95);
    doc.get_block_mut(&evidence1_id).unwrap().add_edge(edge1.clone());
    doc.edge_index.add_edge(&evidence1_id, &edge1);
    
    let edge2 = Edge::new(EdgeType::Supports, claim_id.clone())
        .with_confidence(0.90);
    doc.get_block_mut(&evidence2_id).unwrap().add_edge(edge2.clone());
    doc.edge_index.add_edge(&evidence2_id, &edge2);
    
    // Counter contradicts claim
    let edge3 = Edge::new(EdgeType::Contradicts, claim_id.clone())
        .with_confidence(0.7);
    doc.get_block_mut(&counter_id).unwrap().add_edge(edge3.clone());
    doc.edge_index.add_edge(&counter_id, &edge3);
    
    // Rebuttal contradicts counter
    let edge4 = Edge::new(EdgeType::Contradicts, counter_id.clone())
        .with_confidence(0.85);
    doc.get_block_mut(&rebuttal_id).unwrap().add_edge(edge4.clone());
    doc.edge_index.add_edge(&rebuttal_id, &edge4);
    
    // Query relationships
    println!("Blocks supporting the claim:");
    for source_id in doc.edge_index.incoming_of_type(&claim_id, &EdgeType::Supports) {
        if let Some(block) = doc.get_block(&source_id) {
            if let Content::Text(text) = &block.content {
                println!("  - {}", &text.text[..50.min(text.text.len())]);
            }
        }
    }
    
    println!("\\nBlocks contradicting the claim:");
    for source_id in doc.edge_index.incoming_of_type(&claim_id, &EdgeType::Contradicts) {
        if let Some(block) = doc.get_block(&source_id) {
            if let Content::Text(text) = &block.content {
                println!("  - {}", &text.text[..50.min(text.text.len())]);
            }
        }
    }
    
    Ok(())
}
\`\`\`

## Example 3: Transactions and Snapshots

\`\`\`rust
use ucm_engine::{Engine, Operation};
use ucm_core::{Content, Document};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut engine = Engine::new();
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Create initial snapshot
    engine.create_snapshot("initial", &doc, Some("Empty document".into()))?;
    
    // Transaction 1: Add structure
    let txn1 = engine.begin_named_transaction("add-chapters");
    
    engine.add_to_transaction(&txn1, Operation::Append {
        parent_id: root.clone(),
        content: Content::text("Chapter 1"),
        label: Some("ch1".into()),
        tags: vec!["chapter".into()],
        semantic_role: Some("heading1".into()),
        index: None,
    })?;
    
    engine.add_to_transaction(&txn1, Operation::Append {
        parent_id: root.clone(),
        content: Content::text("Chapter 2"),
        label: Some("ch2".into()),
        tags: vec!["chapter".into()],
        semantic_role: Some("heading1".into()),
        index: None,
    })?;
    
    let results = engine.commit_transaction(&txn1, &mut doc)?;
    println!("Transaction 1: Added {} blocks", results.len());
    
    // Snapshot after chapters
    engine.create_snapshot("with-chapters", &doc, Some("Added chapters".into()))?;
    
    // Transaction 2: Add content (will be rolled back)
    let txn2 = engine.begin_named_transaction("add-content");
    
    let ch1_id = doc.indices.find_by_label("ch1").unwrap();
    engine.add_to_transaction(&txn2, Operation::Append {
        parent_id: ch1_id,
        content: Content::text("Wrong content - will be rolled back"),
        label: None,
        tags: vec![],
        semantic_role: Some("paragraph".into()),
        index: None,
    })?;
    
    // Oops, wrong content - rollback
    engine.rollback_transaction(&txn2)?;
    println!("Transaction 2: Rolled back");
    
    // Transaction 3: Add correct content
    let txn3 = engine.begin_named_transaction("add-correct-content");
    
    engine.add_to_transaction(&txn3, Operation::Append {
        parent_id: ch1_id,
        content: Content::text("This is the correct introduction to Chapter 1."),
        label: None,
        tags: vec![],
        semantic_role: Some("paragraph".into()),
        index: None,
    })?;
    
    engine.commit_transaction(&txn3, &mut doc)?;
    println!("Transaction 3: Committed");
    
    // Final snapshot
    engine.create_snapshot("final", &doc, Some("Complete document".into()))?;
    
    // List snapshots
    println!("\\nSnapshots:");
    for name in engine.list_snapshots() {
        println!("  - {}", name);
    }
    
    // Demonstrate restore
    println!("\\nCurrent block count: {}", doc.block_count());
    
    let restored = engine.restore_snapshot("with-chapters")?;
    println!("After restore to 'with-chapters': {} blocks", restored.block_count());
    
    Ok(())
}
\`\`\`

## Example 4: Custom Validation Rules

\`\`\`rust
use ucm_core::{Document, Block, Content, ValidationIssue, ValidationSeverity, ErrorCode};
use ucm_engine::validate::{ValidationPipeline, ValidationResult};

fn validate_document_rules(doc: &Document) -> ValidationResult {
    let mut issues = Vec::new();
    
    // Rule 1: Document must have a title
    let has_title = doc.blocks.values().any(|b| {
        b.metadata.semantic_role
            .as_ref()
            .map(|r| r.category.as_str() == "title")
            .unwrap_or(false)
    });
    
    if !has_title {
        issues.push(ValidationIssue::warning(
            ErrorCode::E202InvalidStructure,
            "Document should have a title block".to_string(),
        ));
    }
    
    // Rule 2: All code blocks should have a language
    for block in doc.blocks.values() {
        if let Content::Code(code) = &block.content {
            if code.language.is_empty() || code.language == "text" {
                issues.push(ValidationIssue::warning(
                    ErrorCode::E200SchemaViolation,
                    format!("Code block {} has no language specified", block.id),
                ));
            }
        }
    }
    
    // Rule 3: Headings should not be empty
    for block in doc.blocks.values() {
        if let Some(role) = &block.metadata.semantic_role {
            if role.category.as_str().starts_with("heading") {
                if let Content::Text(text) = &block.content {
                    if text.text.trim().is_empty() {
                        issues.push(ValidationIssue::error(
                            ErrorCode::E200SchemaViolation,
                            format!("Heading block {} is empty", block.id),
                        ));
                    }
                }
            }
        }
    }
    
    // Rule 4: Labels should be unique (already enforced, but let's check)
    let mut labels = std::collections::HashSet::new();
    for block in doc.blocks.values() {
        if let Some(label) = &block.metadata.label {
            if !labels.insert(label.clone()) {
                issues.push(ValidationIssue::error(
                    ErrorCode::E200SchemaViolation,
                    format!("Duplicate label: {}", label),
                ));
            }
        }
    }
    
    ValidationResult::invalid(issues)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Add blocks (intentionally missing title)
    let heading = Block::new(Content::text(""), Some("heading1")); // Empty heading
    doc.add_block(heading, &root)?;
    
    let code = Block::new(Content::code("", "print('hello')"), Some("code")); // No language
    doc.add_block(code, &root)?;
    
    // Standard validation
    let standard_validator = ValidationPipeline::new();
    let mut result = standard_validator.validate_document(&doc);
    
    // Custom validation
    result.merge(validate_document_rules(&doc));
    
    println!("Validation Results:");
    println!("  Valid: {}", result.valid);
    println!("  Errors: {}", result.errors().len());
    println!("  Warnings: {}", result.warnings().len());
    
    for issue in &result.issues {
        println!("  [{:?}] {}", issue.severity, issue.message);
    }
    
    Ok(())
}
\`\`\`

## Example 5: Document Merging

\`\`\`rust
use ucm_core::{Block, Content, Document, BlockId};
use std::collections::HashMap;

fn merge_documents(target: &mut Document, source: &Document, parent_id: &BlockId) -> Result<HashMap<BlockId, BlockId>, String> {
    let mut id_mapping = HashMap::new();
    
    // Copy blocks from source, maintaining structure
    fn copy_subtree(
        target: &mut Document,
        source: &Document,
        source_id: &BlockId,
        target_parent: &BlockId,
        id_mapping: &mut HashMap<BlockId, BlockId>,
    ) -> Result<(), String> {
        if let Some(block) = source.get_block(source_id) {
            if block.is_root() {
                // Don't copy root, just process children
                if let Some(children) = source.structure.get(source_id) {
                    for child_id in children {
                        copy_subtree(target, source, child_id, target_parent, id_mapping)?;
                    }
                }
            } else {
                // Clone block and add to target
                let new_block = Block::new(block.content.clone(), 
                    block.metadata.semantic_role.as_ref().map(|r| r.category.as_str()));
                
                let new_id = target.add_block(new_block, target_parent)
                    .map_err(|e| e.to_string())?;
                
                id_mapping.insert(source_id.clone(), new_id.clone());
                
                // Copy children
                if let Some(children) = source.structure.get(source_id) {
                    for child_id in children {
                        copy_subtree(target, source, child_id, &new_id, id_mapping)?;
                    }
                }
            }
        }
        Ok(())
    }
    
    copy_subtree(target, source, &source.root, parent_id, &mut id_mapping)?;
    
    Ok(id_mapping)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create main document
    let mut main_doc = Document::create();
    let main_root = main_doc.root.clone();
    
    let title = Block::new(Content::text("Main Document"), Some("title"));
    let title_id = main_doc.add_block(title, &main_root)?;
    
    let section = Block::new(Content::text("Existing Section"), Some("heading2"));
    let section_id = main_doc.add_block(section, &title_id)?;
    
    // Create document to merge
    let mut merge_doc = Document::create();
    let merge_root = merge_doc.root.clone();
    
    let merge_section = Block::new(Content::text("Merged Section"), Some("heading2"));
    let merge_section_id = merge_doc.add_block(merge_section, &merge_root)?;
    
    let merge_para = Block::new(Content::text("Content from merged document."), Some("paragraph"));
    merge_doc.add_block(merge_para, &merge_section_id)?;
    
    let merge_code = Block::new(Content::code("rust", "fn merged() {}"), Some("code"));
    merge_doc.add_block(merge_code, &merge_section_id)?;
    
    println!("Before merge:");
    println!("  Main doc blocks: {}", main_doc.block_count());
    println!("  Merge doc blocks: {}", merge_doc.block_count());
    
    // Merge under title
    let id_mapping = merge_documents(&mut main_doc, &merge_doc, &title_id)?;
    
    println!("\\nAfter merge:");
    println!("  Main doc blocks: {}", main_doc.block_count());
    println!("  Mapped {} block IDs", id_mapping.len());
    
    Ok(())
}
\`\`\`

## Example 6: Token-Aware Document Processing

\`\`\`rust
use ucm_core::{Block, Content, Document};
use ucm_core::metadata::{TokenEstimate, TokenModel};

fn estimate_document_tokens(doc: &Document, model: TokenModel) -> u32 {
    doc.blocks.values()
        .map(|b| b.token_estimate().for_model(model))
        .sum()
}

fn find_blocks_within_budget(
    doc: &Document,
    block_ids: &[ucm_core::BlockId],
    budget: u32,
    model: TokenModel,
) -> Vec<ucm_core::BlockId> {
    let mut result = Vec::new();
    let mut used = 0u32;
    
    for id in block_ids {
        if let Some(block) = doc.get_block(id) {
            let tokens = block.token_estimate().for_model(model);
            if used + tokens <= budget {
                result.push(id.clone());
                used += tokens;
            }
        }
    }
    
    result
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Add blocks with varying content sizes
    let short = Block::new(Content::text("Short text."), Some("paragraph"));
    let short_id = doc.add_block(short, &root)?;
    
    let medium = Block::new(
        Content::text("This is a medium-length paragraph with more content that will use more tokens in the estimation."),
        Some("paragraph")
    );
    let medium_id = doc.add_block(medium, &root)?;
    
    let long = Block::new(
        Content::text(&"Long content. ".repeat(100)),
        Some("paragraph")
    );
    let long_id = doc.add_block(long, &root)?;
    
    let code = Block::new(
        Content::code("rust", &"fn example() {\\n    // code\\n}\\n".repeat(20)),
        Some("code")
    );
    let code_id = doc.add_block(code, &root)?;
    
    // Estimate tokens
    println!("Token estimates (GPT-4):");
    for (name, id) in [("Short", &short_id), ("Medium", &medium_id), ("Long", &long_id), ("Code", &code_id)] {
        let block = doc.get_block(id).unwrap();
        let tokens = block.token_estimate().for_model(TokenModel::GPT4);
        println!("  {}: {} tokens", name, tokens);
    }
    
    let total = estimate_document_tokens(&doc, TokenModel::GPT4);
    println!("\\nTotal document: {} tokens", total);
    
    // Find blocks within budget
    let all_ids = vec![short_id, medium_id, long_id, code_id];
    let budget = 500;
    let within_budget = find_blocks_within_budget(&doc, &all_ids, budget, TokenModel::GPT4);
    
    println!("\\nBlocks within {} token budget: {}", budget, within_budget.len());
    
    Ok(())
}
\`\`\`

## Example 7: Batch Document Processing

\`\`\`rust
use ucp_api::UcpClient;
use ucp_translator_markdown::{parse_markdown, render_markdown};
use std::collections::HashMap;

fn process_markdown_files(files: &[(&str, &str)]) -> Result<HashMap<String, String>, Box<dyn std::error::Error>> {
    let client = UcpClient::new();
    let mut results = HashMap::new();
    
    for (name, content) in files {
        // Parse markdown
        let mut doc = parse_markdown(content)?;
        
        // Add processing metadata
        client.execute_ucl(&mut doc, &format!(r#"
            EDIT blk_ff00000000000000000000 SET metadata.processed = true
            EDIT blk_ff00000000000000000000 SET metadata.source = "{}"
        "#, name))?;
        
        // Add tags to all paragraphs
        for block_id in doc.indices.find_by_type("text").clone() {
            if let Some(block) = doc.get_block(&block_id) {
                if !block.is_root() {
                    client.execute_ucl(&mut doc, &format!(
                        r#"EDIT {} SET metadata.tags += ["processed"]"#,
                        block_id
                    ))?;
                }
            }
        }
        
        // Render back
        let rendered = render_markdown(&doc)?;
        results.insert(name.to_string(), rendered);
    }
    
    Ok(results)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let files = vec![
        ("doc1", "# Document 1\\n\\nFirst document content."),
        ("doc2", "# Document 2\\n\\nSecond document content.\\n\\n## Section\\n\\nMore content."),
        ("doc3", "# Document 3\\n\\n\`\`\`rust\\nfn main() {}\\n\`\`\`"),
    ];
    
    let results = process_markdown_files(&files)?;
    
    for (name, content) in &results {
        println!("=== {} ===", name);
        println!("{}", content);
        println!();
    }
    
    Ok(())
}
\`\`\`

## Next Steps

- [Advanced Examples](./advanced.md) - Complex patterns and integrations
- [UCL Commands](../ucl-parser/commands.md) - Complete UCL reference
- [UCM Engine](../ucm-engine/README.md) - Engine documentation
`,__vite_glob_0_5=`# Core Concepts

This document explains the fundamental concepts and architecture of the Unified Content Protocol.

## The Content Graph Model

UCP represents documents as **directed acyclic graphs (DAGs)** where:

- **Nodes** are content blocks
- **Structural edges** define parent-child relationships (the document tree)
- **Semantic edges** define relationships like references, derivations, and contradictions

\`\`\`
                    ┌─────────────┐
                    │    Root     │
                    └──────┬──────┘
                           │
            ┌──────────────┼──────────────┐
            │              │              │
      ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐
      │  Title    │  │  Section  │  │  Section  │
      └───────────┘  └─────┬─────┘  └─────┬─────┘
                           │              │
                     ┌─────┴─────┐        │
                     │           │        │
               ┌─────▼───┐ ┌─────▼───┐ ┌──▼──────┐
               │  Para   │ │  Code   │ │  Para   │
               └─────────┘ └─────────┘ └─────────┘
\`\`\`

## Blocks

### What is a Block?

A **Block** is the fundamental unit of content in UCP. Every piece of content—whether a paragraph, code snippet, table, or image—is represented as a block.

\`\`\`rust
pub struct Block {
    pub id: BlockId,           // Content-addressed identifier
    pub content: Content,      // The actual content
    pub metadata: BlockMetadata, // Searchable metadata
    pub edges: Vec<Edge>,      // Relationships to other blocks
    pub version: Version,      // For optimistic concurrency
}
\`\`\`

### Block Identity

Block IDs are **deterministic** and **content-addressed**:

- Generated from content hash + semantic role + optional namespace
- 96-bit entropy (24 hex characters) ensures collision resistance < 10⁻¹⁵ at 10M blocks
- Format: \`blk_<24 hex chars>\` (e.g., \`blk_a1b2c3d4e5f6a1b2c3d4e5f6\`)

\`\`\`rust
use ucm_core::{Content, id::generate_block_id};

let content = Content::text("Hello, world!");
let id1 = generate_block_id(&content, Some("intro"), None);
let id2 = generate_block_id(&content, Some("intro"), None);

assert_eq!(id1, id2); // Same content + role = same ID
\`\`\`

### Block Lifecycle States

\`\`\`
┌─────────┐     delete      ┌───────────┐
│  Live   │ ───────────────►│  Deleted  │
└────┬────┘                 └───────────┘
     │
     │ remove from structure
     ▼
┌──────────┐    prune       ┌───────────┐
│ Orphaned │ ──────────────►│  Deleted  │
└──────────┘                └───────────┘
\`\`\`

- **Live**: Reachable from document root
- **Orphaned**: Exists but not reachable (can be restored or pruned)
- **Deleted**: Removed from document

## Content Types

UCP supports rich, typed content:

| Type | Description | Example |
|------|-------------|---------|
| \`Text\` | Plain, Markdown, or rich text | Paragraphs, headings |
| \`Code\` | Source code with language hint | Code snippets |
| \`Table\` | Tabular data with schema | Data tables |
| \`Math\` | LaTeX, MathML, AsciiMath | Equations |
| \`Media\` | Images, audio, video | Embedded media |
| \`Json\` | Structured JSON data | Configuration |
| \`Binary\` | Raw binary with MIME type | Files |
| \`Composite\` | Container referencing other blocks | Layouts |

\`\`\`rust
use ucm_core::Content;

// Text content
let text = Content::text("Hello, world!");
let markdown = Content::markdown("**Bold** and *italic*");

// Code content
let code = Content::code("rust", "fn main() {}");

// Table content
let table = Content::table(vec![
    vec!["Name".into(), "Age".into()],
    vec!["Alice".into(), "30".into()],
]);

// JSON content
let json = Content::json(serde_json::json!({
    "key": "value"
}));
\`\`\`

## Documents

A **Document** is a collection of blocks with hierarchical structure:

\`\`\`rust
pub struct Document {
    pub id: DocumentId,
    pub root: BlockId,
    pub structure: HashMap<BlockId, Vec<BlockId>>,  // Adjacency map
    pub blocks: HashMap<BlockId, Block>,
    pub metadata: DocumentMetadata,
    pub indices: DocumentIndices,      // Secondary indices
    pub edge_index: EdgeIndex,         // Relationship index
    pub version: DocumentVersion,
}
\`\`\`

### Document Operations

| Operation | Description |
|-----------|-------------|
| \`add_block\` | Add a block as child of a parent |
| \`add_block_at\` | Add at specific position |
| \`move_block\` | Move to new parent |
| \`delete_block\` | Remove single block |
| \`delete_cascade\` | Remove block and descendants |
| \`prune_unreachable\` | Remove orphaned blocks |

### Secondary Indices

Documents maintain indices for fast lookup:

- **by_tag**: Find blocks with specific tags
- **by_role**: Find blocks by semantic role category
- **by_content_type**: Find blocks by content type
- **by_label**: Find block by unique label

## Edges (Relationships)

Edges represent explicit relationships between blocks:

### Edge Types

**Derivation Relationships:**
- \`DerivedFrom\` - Block created from another
- \`Supersedes\` - Block replaces another
- \`TransformedFrom\` - Block is transformation of another

**Reference Relationships:**
- \`References\` - Block references another
- \`CitedBy\` - Inverse of References (auto-maintained)
- \`LinksTo\` - Hyperlink relationship

**Semantic Relationships:**
- \`Supports\` - Provides evidence for
- \`Contradicts\` - Contradicts (symmetric)
- \`Elaborates\` - Expands on
- \`Summarizes\` - Summarizes

**Structural Relationships (auto-maintained):**
- \`ParentOf\` / \`ChildOf\`
- \`SiblingOf\`
- \`PreviousSibling\` / \`NextSibling\`

**Version Relationships:**
- \`VersionOf\` - Different version
- \`AlternativeOf\` - Alternative representation
- \`TranslationOf\` - Translation

\`\`\`rust
use ucm_core::{Edge, EdgeType};

let edge = Edge::new(EdgeType::References, target_id)
    .with_confidence(0.95)
    .with_description("Important reference");
\`\`\`

## Metadata

### Block Metadata

\`\`\`rust
pub struct BlockMetadata {
    pub semantic_role: Option<SemanticRole>,  // Document role
    pub label: Option<String>,                 // Unique identifier
    pub tags: Vec<String>,                     // Searchable tags
    pub summary: Option<String>,               // For folding
    pub token_estimate: Option<TokenEstimate>, // LLM optimization
    pub content_hash: ContentHash,             // Change detection
    pub created_at: DateTime<Utc>,
    pub modified_at: DateTime<Utc>,
    pub custom: HashMap<String, Value>,        // Extension point
}
\`\`\`

### Semantic Roles

Semantic roles describe a block's function in the document:

\`\`\`rust
use ucm_core::metadata::{SemanticRole, RoleCategory};

// Parse from string
let role = SemanticRole::parse("intro.hook").unwrap();

// Build programmatically
let role = SemanticRole::new(RoleCategory::Intro)
    .with_subcategory("hook")
    .with_qualifier("v2");
\`\`\`

**Role Categories:**

| Category | Description |
|----------|-------------|
| \`Title\`, \`Subtitle\`, \`Abstract\` | Document structure |
| \`Heading1\` - \`Heading6\` | Section headings |
| \`Intro\`, \`IntroHook\`, \`IntroThesis\` | Introduction elements |
| \`Body\`, \`BodyArgument\`, \`BodyEvidence\` | Body elements |
| \`Conclusion\`, \`ConclusionSummary\` | Conclusion elements |
| \`Code\`, \`Definition\`, \`Theorem\` | Technical elements |
| \`Quote\`, \`Note\`, \`Warning\`, \`Callout\` | Special sections |

### Token Estimation

UCP provides token estimates for LLM context management:

\`\`\`rust
use ucm_core::metadata::{TokenEstimate, TokenModel};

let estimate = TokenEstimate::compute(&content);

println!("GPT-4 tokens: {}", estimate.for_model(TokenModel::GPT4));
println!("Claude tokens: {}", estimate.for_model(TokenModel::Claude));
println!("Llama tokens: {}", estimate.for_model(TokenModel::Llama));
\`\`\`

## Normalization

Content is normalized before hashing to ensure deterministic IDs:

- **Unicode normalization** (NFC by default)
- **Whitespace normalization** (collapse for text, preserve for code)
- **Line ending normalization** (LF)
- **Canonical JSON** (sorted keys, no whitespace)

\`\`\`rust
use ucm_core::normalize::{normalize_content, normalize_text, NormalizationConfig};

// Normalize content for hashing
let normalized = normalize_content(&content);

// Custom normalization
let config = NormalizationConfig {
    whitespace: WhitespaceNorm::Preserve,
    ..Default::default()
};
let normalized = normalize_text("  hello  world  ", config);
\`\`\`

## Versioning

### Block Versioning

Each block has a version for optimistic concurrency:

\`\`\`rust
pub struct Version {
    pub counter: u64,
    pub timestamp: DateTime<Utc>,
}
\`\`\`

### Document Versioning

Documents track version with state hash:

\`\`\`rust
pub struct DocumentVersion {
    pub counter: u64,
    pub timestamp: DateTime<Utc>,
    pub state_hash: [u8; 8],
}
\`\`\`

## Error Handling

UCP uses structured error codes for categorization:

| Range | Category |
|-------|----------|
| E001-E099 | Reference errors (block not found, invalid ID) |
| E100-E199 | Syntax errors (malformed commands) |
| E200-E299 | Validation errors (cycles, orphans) |
| E300-E399 | Concurrency errors (version conflicts) |
| E400-E499 | Resource errors (size limits) |
| E500-E599 | Security errors (path traversal) |
| E900-E999 | Internal errors |

\`\`\`rust
use ucm_core::{Error, ErrorCode};

let err = Error::new(ErrorCode::E001BlockNotFound, "Block not found")
    .with_location(Location::new(10, 5))
    .with_suggestion("Did you mean 'blk_abc'?");
\`\`\`

## Next Steps

- [UCM Core Reference](../ucm-core/README.md) - Detailed API documentation
- [UCL Syntax](../ucl-parser/syntax.md) - Command language reference
- [Examples](../examples/basic.md) - Practical examples
`,__vite_glob_0_6=`# Installation

This guide covers how to install and configure UCP for your Rust project.

## Requirements

- **Rust**: 1.70 or later
- **Cargo**: Latest stable version

## Adding UCP to Your Project

### Using the High-Level API (Recommended)

For most use cases, add \`ucp-api\` which re-exports everything you need:

\`\`\`toml
[dependencies]
ucp-api = "0.1.4"
\`\`\`

### Individual Crates

For fine-grained control, you can depend on specific crates:

\`\`\`toml
[dependencies]
# Core types only
ucm-core = "0.1.4"

# Core + transformation engine
ucm-engine = "0.1.4"

# UCL command parsing
ucl-parser = "0.1.4"

# Markdown conversion
ucp-translator-markdown = "0.1.4"

# Observability utilities
ucp-observe = "0.1.4"
\`\`\`

## Feature Flags

### ucm-core

| Feature | Description | Default |
|---------|-------------|---------|
| \`serde\` | Serialization support | ✓ |

### ucm-engine

| Feature | Description | Default |
|---------|-------------|---------|
| \`tracing\` | Structured logging | ✓ |

## Verifying Installation

Create a simple test program:

\`\`\`rust
use ucp_api::UcpClient;
use ucm_core::{Block, Content, Document};

fn main() {
    // Create a client
    let client = UcpClient::new();
    
    // Create a document
    let doc = client.create_document();
    
    println!("Document created with {} block(s)", doc.block_count());
    println!("Root block ID: {}", doc.root);
}
\`\`\`

Run with:

\`\`\`bash
cargo run
\`\`\`

Expected output:

\`\`\`
Document created with 1 block(s)
Root block ID: blk_ff00000000000000000000
\`\`\`

## Development Setup

For contributing to UCP or running tests:

\`\`\`bash
# Clone the repository
git clone https://github.com/your-org/unified-content-protocol.git
cd unified-content-protocol

# Run all tests
cargo test --workspace

# Run tests for a specific crate
cargo test -p ucm-core

# Build documentation
cargo doc --workspace --no-deps --open
\`\`\`

## Troubleshooting

### Common Issues

**Compilation Error: Missing Dependencies**

Ensure all workspace dependencies are available:

\`\`\`bash
cargo update
cargo build --workspace
\`\`\`

**Version Conflicts**

If you're using multiple UCP crates, ensure they're all from the same version:

\`\`\`toml
[dependencies]
ucm-core = "0.1.4"
ucm-engine = "0.1.4"  # Must match ucm-core version
\`\`\`

## Next Steps

- [Quick Start Guide](./quick-start.md) - Build your first UCP application
- [Core Concepts](./concepts.md) - Understand the UCP architecture
`,__vite_glob_0_7=`# Quick Start Guide

This guide walks you through creating your first UCP application, from basic document creation to advanced operations.

## Your First Document

\`\`\`rust
use ucp_api::UcpClient;
use ucm_core::{Block, Content};

fn main() {
    // Initialize the client
    let client = UcpClient::new();
    
    // Create a new document (automatically includes a root block)
    let mut doc = client.create_document();
    
    println!("Created document: {}", doc.id);
    println!("Root block: {}", doc.root);
}
\`\`\`

## Adding Content

### Text Blocks

\`\`\`rust
use ucp_api::UcpClient;
use ucm_core::{Block, Content};

fn main() {
    let client = UcpClient::new();
    let mut doc = client.create_document();
    let root = doc.root.clone();
    
    // Add a text block with a semantic role
    let intro_id = client.add_text(
        &mut doc, 
        &root, 
        "Welcome to UCP!", 
        Some("intro")
    ).unwrap();
    
    // Add another text block
    let body_id = client.add_text(
        &mut doc,
        &root,
        "This is the body content.",
        Some("body")
    ).unwrap();
    
    println!("Document now has {} blocks", doc.block_count());
}
\`\`\`

### Code Blocks

\`\`\`rust
let code_id = client.add_code(
    &mut doc,
    &root,
    "rust",
    r#"fn hello() {
    println!("Hello, world!");
}"#
).unwrap();
\`\`\`

### Using Block Builder Pattern

For more control, create blocks directly:

\`\`\`rust
use ucm_core::{Block, Content};

// Create a block with tags and labels
let block = Block::new(Content::text("Important note"), Some("note"))
    .with_label("warning-note")
    .with_tag("important")
    .with_tag("review-needed");

let block_id = doc.add_block(block, &root).unwrap();
\`\`\`

## Document Structure

UCP documents are hierarchical. Blocks can have children:

\`\`\`rust
use ucp_api::UcpClient;
use ucm_core::{Block, Content};

fn main() {
    let client = UcpClient::new();
    let mut doc = client.create_document();
    let root = doc.root.clone();
    
    // Create a section
    let section = Block::new(Content::text("Chapter 1: Introduction"), Some("heading1"));
    let section_id = doc.add_block(section, &root).unwrap();
    
    // Add content under the section
    let para1 = Block::new(Content::text("First paragraph..."), Some("paragraph"));
    doc.add_block(para1, &section_id).unwrap();
    
    let para2 = Block::new(Content::text("Second paragraph..."), Some("paragraph"));
    doc.add_block(para2, &section_id).unwrap();
    
    // Check the structure
    let children = doc.children(&section_id);
    println!("Section has {} children", children.len());
}
\`\`\`

## Using UCL Commands

UCL (Unified Content Language) provides a token-efficient way to manipulate documents:

\`\`\`rust
use ucp_api::UcpClient;

fn main() {
    let client = UcpClient::new();
    let mut doc = client.create_document();
    
    // Execute UCL commands
    let results = client.execute_ucl(&mut doc, r#"
        APPEND blk_ff00000000000000000000 text WITH label="greeting" :: "Hello, UCL!"
        APPEND blk_ff00000000000000000000 code WITH label="example" :: "fn main() {}"
    "#).unwrap();
    
    for result in results {
        if result.success {
            println!("Operation succeeded, affected: {:?}", result.affected_blocks);
        }
    }
}
\`\`\`

## Querying Documents

### Find Blocks by Tag

\`\`\`rust
let important_blocks = doc.indices.find_by_tag("important");
for block_id in important_blocks {
    if let Some(block) = doc.get_block(&block_id) {
        println!("Found: {}", block_id);
    }
}
\`\`\`

### Find Blocks by Label

\`\`\`rust
if let Some(block_id) = doc.indices.find_by_label("warning-note") {
    let block = doc.get_block(&block_id).unwrap();
    println!("Found block by label: {}", block_id);
}
\`\`\`

### Find Blocks by Content Type

\`\`\`rust
let code_blocks = doc.indices.find_by_type("code");
println!("Document has {} code blocks", code_blocks.len());
\`\`\`

## Modifying Content

### Direct Modification

\`\`\`rust
if let Some(block) = doc.get_block_mut(&block_id) {
    block.update_content(Content::text("Updated text"), Some("paragraph"));
}
\`\`\`

### Using UCL EDIT Command

\`\`\`rust
client.execute_ucl(&mut doc, r#"
    EDIT blk_abc123def456 SET content.text = "New content"
    EDIT blk_abc123def456 SET metadata.tags += ["updated"]
"#).unwrap();
\`\`\`

## Moving Blocks

\`\`\`rust
// Move a block to a new parent
doc.move_block(&child_id, &new_parent_id).unwrap();

// Move to a specific position
doc.move_block_at(&child_id, &new_parent_id, 0).unwrap(); // Insert at beginning
\`\`\`

## Deleting Blocks

\`\`\`rust
// Delete a single block (children become orphaned)
doc.delete_block(&block_id).unwrap();

// Delete with all descendants
doc.delete_cascade(&block_id).unwrap();

// Clean up orphaned blocks
let pruned = doc.prune_unreachable();
println!("Pruned {} orphaned blocks", pruned.len());
\`\`\`

## Serialization

### To JSON

\`\`\`rust
let json = client.to_json(&doc).unwrap();
println!("{}", json);
\`\`\`

### Block Serialization

\`\`\`rust
use serde_json;

let block = doc.get_block(&block_id).unwrap();
let json = serde_json::to_string_pretty(block).unwrap();
\`\`\`

## Working with Edges (Relationships)

\`\`\`rust
use ucm_core::{Edge, EdgeType};

// Add a reference relationship
let edge = Edge::new(EdgeType::References, target_block_id.clone());
if let Some(block) = doc.get_block_mut(&source_block_id) {
    block.add_edge(edge);
}

// Query relationships
let outgoing = doc.edge_index.outgoing_from(&source_block_id);
let incoming = doc.edge_index.incoming_to(&target_block_id);
\`\`\`

## Complete Example

\`\`\`rust
use ucp_api::UcpClient;
use ucm_core::{Block, Content, Edge, EdgeType};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = UcpClient::new();
    let mut doc = client.create_document();
    let root = doc.root.clone();
    
    // Build document structure
    let title = Block::new(Content::text("My Document"), Some("title"));
    let title_id = doc.add_block(title, &root)?;
    
    let intro = Block::new(Content::text("This document demonstrates UCP."), Some("intro"));
    let intro_id = doc.add_block(intro, &title_id)?;
    
    let section = Block::new(Content::text("Main Content"), Some("heading2"));
    let section_id = doc.add_block(section, &title_id)?;
    
    let code = Block::new(
        Content::code("rust", "println!(\\"Hello!\\");"),
        Some("code")
    ).with_tag("example");
    let code_id = doc.add_block(code, &section_id)?;
    
    // Add a reference from intro to code
    let edge = Edge::new(EdgeType::References, code_id.clone());
    doc.get_block_mut(&intro_id).unwrap().add_edge(edge.clone());
    doc.edge_index.add_edge(&intro_id, &edge);
    
    // Validate the document
    let issues = doc.validate();
    if issues.is_empty() {
        println!("Document is valid!");
    } else {
        for issue in issues {
            println!("Issue: {}", issue.message);
        }
    }
    
    // Print statistics
    println!("Total blocks: {}", doc.block_count());
    println!("Code blocks: {}", doc.indices.find_by_type("code").len());
    
    Ok(())
}
\`\`\`

## Next Steps

- [Core Concepts](./concepts.md) - Deep dive into UCP architecture
- [UCM Core Documentation](../ucm-core/README.md) - Detailed type reference
- [UCL Syntax Guide](../ucl-parser/syntax.md) - Complete UCL reference
- [Examples](../examples/basic.md) - More code examples
`,__vite_glob_0_8=`# Unified Content Protocol Documentation Index

Welcome to the Unified Content Protocol (UCP) docs. Jump directly to any major area below.

## Getting Started

- [Installation](./getting-started/installation.md)
- [Quick Start Guide](./getting-started/quick-start.md)
- [Core Concepts](./getting-started/concepts.md)

## Core Model (ucm-core)

- [Overview](./ucm-core/README.md)
- [Blocks](./ucm-core/blocks.md)
- [Content Types](./ucm-core/content-types.md)
- [Documents](./ucm-core/documents.md)
- [Edges & Relationships](./ucm-core/edges.md)
- [Metadata & Semantic Roles](./ucm-core/metadata.md)
- [ID Generation](./ucm-core/id-generation.md)

## Transformation Engine (ucm-engine)

- [Overview](./ucm-engine/README.md)
- [Operations](./ucm-engine/operations.md)
- [Transactions](./ucm-engine/transactions.md)
- [Snapshots](./ucm-engine/snapshots.md)
- [Validation](./ucm-engine/validation.md)

## Unified Content Language (ucl-parser)

- [Overview](./ucl-parser/README.md)
- [Syntax Reference](./ucl-parser/syntax.md)
- [Command Reference](./ucl-parser/commands.md)
- [Expressions](./ucl-parser/expressions.md)

## High-Level API (ucp-api)

- [Client Overview](./ucp-api/README.md)

## Translators

- [Markdown Translator](./translators/markdown/README.md)
- [HTML Translator](./translators/html/README.md)

## LLM Utilities (ucp-llm)

- [Overview & Context Management](./ucp-llm/README.md)

## Observability (ucp-observe)

- [Tracing, Audit, Metrics](./ucp-observe/README.md)

## Examples

- [Basic Examples](./examples/basic.md)
- [Intermediate Examples](./examples/intermediate.md)
- [Advanced Examples](./examples/advanced.md)
`,__vite_glob_0_9='# HTML Translator\n\nThe **ucp-translator-html** crate converts HTML documents into the Unified Content Model (UCM).\n\n## Capabilities\n\n- **HTML parsing** using `html5ever` and `scraper`\n- **Semantic mapping** for headings, lists, emphasis, tables, code blocks, media, and links\n- **Metadata extraction** (ids, classes, aria labels, rel attributes)\n- **Content normalization** (whitespace trimming, entity decoding)\n- **Selective traversal** via CSS selectors or whitelist/blacklist policies\n\n## Installation\n\n```toml\n[dependencies]\nucp-translator-html = "0.1.3"\n```\n\n## Quick Start\n\n```rust\nuse ucp_translator_html::HtmlParser;\n\nlet html = r#"\n<!doctype html>\n<html>\n  <body>\n    <h1>Intro</h1>\n    <p>Hello <strong>HTML</strong>!</p>\n  </body>\n</html>\n"#;\n\nlet parser = HtmlParser::default();\nlet doc = parser.parse(html)?;\nprintln!("Parsed {} blocks", doc.block_count());\n```\n\n## Parser Configuration\n\n```rust\nuse ucp_translator_html::{HtmlParser, ParseConfig};\n\nlet parser = HtmlParser::new(ParseConfig {\n    preserve_whitespace: false,\n    max_depth: Some(12),\n    allowed_nodes: None,\n    denied_nodes: Some(vec!["script", "style"]),\n    capture_attributes: true,\n});\n```\n\n### Key Options\n\n| Option | Description |\n| ------ | ----------- |\n| `preserve_whitespace` | Keep raw whitespace blocks instead of collapsing |\n| `max_depth` | Stop traversal after a depth threshold |\n| `allowed_nodes` / `denied_nodes` | Filter elements by tag name or CSS selector |\n| `capture_attributes` | Persist `id`, `class`, `href`, `src`, `data-*`, `aria-*` |\n| `base_heading_level` | Offset heading levels when integrating into existing sections |\n\n## Semantic Mapping\n\n| HTML | UCM Role |\n| ---- | -------- |\n| `<h1>..</h1>` | `heading1` |\n| `<h2>..</h2>` | `heading2` |\n| `<p>` | `paragraph` |\n| `<a>` | `link` |\n| `<blockquote>` | `quote` |\n| `<code>` / `<pre>` | `code` |\n| `<ul>/<ol>` | `list` |\n| `<figure>` | `media` |\n| `<table>` | `table` |\n\n## Error Handling\n\n```rust\nmatch parser.parse(input) {\n    Ok(doc) => println!("blocks: {}", doc.block_count()),\n    Err(e) => eprintln!("HTML parse error: {e}")\n}\n```\n\nAll errors use the crate-specific `HtmlError` enum, which includes:\n\n- `ParseError { line, column, message }`\n- `UnsupportedNode(String)`\n- `DepthExceeded { max_depth }`\n- `Io(std::io::Error)`\n\n## Testing\n\nThe crate ships with property tests (`cargo test -p ucp-translator-html`) that fuzz real-world HTML snippets to ensure parsing stability. Add additional fixtures under `crates/translators/html/tests/fixtures` and reference them in the test module.\n\n## See Also\n\n- [Markdown Translator](../markdown/README.md)\n- [UCM Core Content Types](../../ucm-core/content-types.md)\n- [Section Writing APIs](../../ucm-engine/operations.md#write_section)\n',__vite_glob_0_10=`# Markdown Translator

**ucp-translator-markdown** provides bidirectional conversion between Markdown and UCM documents.

## Overview

The Markdown translator enables:

- **Parsing** - Convert Markdown to UCM documents
- **Rendering** - Convert UCM documents to Markdown
- **Round-trip** - Preserve structure through conversion cycles
- **Semantic mapping** - Map Markdown elements to semantic roles

## Installation

\`\`\`toml
[dependencies]
ucp-translator-markdown = "0.1.4"0.1.3
\`\`\`

## Quick Start

\`\`\`rust
use ucp_translator_markdown::{parse_markdown, render_markdown};

// Parse Markdown to UCM
let markdown = r#"
# Introduction

Welcome to the guide.

## Getting Started

Here's some code:

\`\`\`rust
fn main() {
    println!("Hello!");
}
\`\`\`
"#;

let doc = parse_markdown(markdown).unwrap();
println!("Parsed {} blocks", doc.block_count());

// Render UCM back to Markdown
let rendered = render_markdown(&doc).unwrap();
println!("{}", rendered);
\`\`\`

## Parsing Markdown

### MarkdownParser

\`\`\`rust
use ucp_translator_markdown::MarkdownParser;

// Default parser
let parser = MarkdownParser::new();
let doc = parser.parse(markdown)?;

// With raw preservation (stores original markdown)
let parser = MarkdownParser::new().preserve_raw(true);
let doc = parser.parse(markdown)?;
\`\`\`

### Supported Elements

| Markdown Element | UCM Content Type | Semantic Role |
|------------------|------------------|---------------|
| \`# Heading\` | Text | \`heading1\` |
| \`## Heading\` | Text | \`heading2\` |
| \`### Heading\` | Text | \`heading3\` |
| \`#### Heading\` | Text | \`heading4\` |
| \`##### Heading\` | Text | \`heading5\` |
| \`###### Heading\` | Text | \`heading6\` |
| Paragraph | Text | \`paragraph\` |
| \`\` \`\`\`code\`\`\` \`\` | Code | \`code\` |
| \`- list item\` | Text | \`list\` |
| \`> quote\` | Text | \`quote\` |
| \`\\| table \\|\` | Table | \`table\` |

### Inline Formatting

**Important**: Inline formatting (bold, italic, inline code, links) is **preserved as raw text**, not parsed into separate elements.

\`\`\`markdown
This is **bold** and *italic* text with \`code\`.
\`\`\`

Is stored as a single text block containing the literal markdown characters:
\`\`\`
"This is **bold** and *italic* text with \`code\`."
\`\`\`

This design choice:
- Preserves fidelity during round-trip conversion
- Keeps the block structure simple
- Delegates inline rendering to consuming applications

### List Marker Preservation

List markers (ordered and unordered) are stored in the raw text content:

\`\`\`markdown
- First item
- Second item
1. Numbered item
2. Another numbered
\`\`\`

The list content is stored with markers intact, ensuring round-trip fidelity.

### Heading Hierarchy

The parser creates a hierarchical structure based on heading levels:

\`\`\`markdown
# Title           <- Child of root
## Section 1      <- Child of Title
### Subsection    <- Child of Section 1
## Section 2      <- Child of Title (sibling of Section 1)
\`\`\`

Results in:

\`\`\`
root
└── Title (H1)
    ├── Section 1 (H2)
    │   └── Subsection (H3)
    └── Section 2 (H2)
\`\`\`

### Example: Parsing

\`\`\`rust
use ucp_translator_markdown::MarkdownParser;
use ucm_core::Content;

let markdown = r#"
# My Document

This is the introduction.

## Chapter 1

Some content here.

\`\`\`python
def hello():
    print("Hello!")
\`\`\`

## Chapter 2

More content.
"#;

let parser = MarkdownParser::new();
let doc = parser.parse(markdown).unwrap();

// Check structure
println!("Total blocks: {}", doc.block_count());

// Find headings
for block in doc.blocks.values() {
    if let Some(role) = &block.metadata.semantic_role {
        if role.category.as_str().starts_with("heading") {
            if let Content::Text(text) = &block.content {
                println!("{}: {}", role.category.as_str(), text.text);
            }
        }
    }
}
\`\`\`

## Rendering Markdown

### MarkdownRenderer

\`\`\`rust
use ucp_translator_markdown::{MarkdownRenderer, HeadingMode};

// Default renderer
let renderer = MarkdownRenderer::new();
let markdown = renderer.render(&doc)?;

// With custom settings
let renderer = MarkdownRenderer::new()
    .indent_size(4)
    .heading_mode(HeadingMode::Explicit)
    .heading_offset(1);  // Start at H2
let markdown = renderer.render(&doc)?;
\`\`\`

### Heading Modes

| Mode | Description |
|------|-------------|
| \`Explicit\` | Use semantic roles only (heading1, heading2, etc.) |
| \`Structural\` | Derive heading level from document tree depth |
| \`Hybrid\` | Use explicit roles when present, fall back to structural |

\`\`\`rust
use ucp_translator_markdown::{MarkdownRenderer, HeadingMode};

// Explicit - only blocks with heading roles become headings
let renderer = MarkdownRenderer::new()
    .heading_mode(HeadingMode::Explicit);

// Structural - depth 1 = H1, depth 2 = H2, etc.
let renderer = MarkdownRenderer::new()
    .heading_mode(HeadingMode::Structural);

// Hybrid (default) - explicit when available, structural fallback
let renderer = MarkdownRenderer::new()
    .heading_mode(HeadingMode::Hybrid);
\`\`\`

### Heading Offset

For nested documents (e.g., embedding in another document):

\`\`\`rust
// Start headings at H2 instead of H1
let renderer = MarkdownRenderer::new()
    .heading_offset(1);

// H1 in UCM becomes ## in Markdown
// H2 in UCM becomes ### in Markdown
\`\`\`

### Content Type Rendering

| UCM Content | Markdown Output |
|-------------|-----------------|
| Text (heading role) | \`# Heading\` |
| Text (paragraph) | Plain paragraph |
| Text (quote role) | \`> Quoted text\` |
| Text (list role) | Preserved list format |
| Code | \`\` \`\`\`lang\\ncode\\n\`\`\` \`\` |
| Table | Pipe-delimited table |
| Math (display) | \`$$\\nexpression\\n$$\` |
| Math (inline) | \`$expression$\` |
| Media | \`![alt](url)\` |
| JSON | \`\` \`\`\`json\\n{...}\\n\`\`\` \`\` |

### Example: Rendering

\`\`\`rust
use ucp_translator_markdown::MarkdownRenderer;
use ucm_core::{Document, Block, Content};

let mut doc = Document::create();
let root = doc.root.clone();

// Add heading
let heading = Block::new(Content::text("My Document"), Some("heading1"));
let heading_id = doc.add_block(heading, &root).unwrap();

// Add paragraph
let para = Block::new(Content::text("This is a paragraph."), Some("paragraph"));
doc.add_block(para, &heading_id).unwrap();

// Add code
let code = Block::new(Content::code("rust", "fn main() {}"), Some("code"));
doc.add_block(code, &heading_id).unwrap();

// Render
let renderer = MarkdownRenderer::new();
let markdown = renderer.render(&doc).unwrap();

println!("{}", markdown);
// Output:
// # My Document
//
// This is a paragraph.
//
// \`\`\`rust
// fn main() {}
// \`\`\`
\`\`\`

## Round-Trip Conversion

\`\`\`rust
use ucp_translator_markdown::{parse_markdown, render_markdown};

let original = r#"# Title

Introduction paragraph.

## Section

Content here.
"#;

// Parse to UCM
let doc = parse_markdown(original).unwrap();

// Render back to Markdown
let rendered = render_markdown(&doc).unwrap();

// Should be equivalent
assert_eq!(original, rendered);
\`\`\`

## Error Handling

\`\`\`rust
use ucp_translator_markdown::{parse_markdown, TranslatorError};

match parse_markdown(markdown) {
    Ok(doc) => println!("Parsed {} blocks", doc.block_count()),
    Err(TranslatorError::ParseError { line, message }) => {
        eprintln!("Parse error at line {}: {}", line, message);
    }
    Err(TranslatorError::InvalidStructure(msg)) => {
        eprintln!("Invalid structure: {}", msg);
    }
    Err(e) => eprintln!("Error: {}", e),
}
\`\`\`

## Complete Example

\`\`\`rust
use ucp_translator_markdown::{MarkdownParser, MarkdownRenderer, HeadingMode};
use ucm_core::{Block, Content};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Parse complex Markdown
    let markdown = r#"
# Technical Guide

Welcome to this comprehensive technical guide.

## Installation

Install using cargo:

\`\`\`bash
cargo add my-crate
\`\`\`

## Usage

Here's a basic example:

\`\`\`rust
use my_crate::Client;

fn main() {
    let client = Client::new();
    client.run();
}
\`\`\`

### Advanced Usage

For advanced scenarios:

| Option | Description | Default |
|--------|-------------|---------|
| \`debug\` | Enable debug mode | \`false\` |
| \`timeout\` | Request timeout | \`30s\` |

> **Note**: Always configure timeouts in production.

## Conclusion

That's all you need to know!
"#;

    // Parse
    let parser = MarkdownParser::new();
    let mut doc = parser.parse(markdown)?;
    
    println!("Parsed document:");
    println!("  Blocks: {}", doc.block_count());
    println!("  Code blocks: {}", doc.indices.find_by_type("code").len());
    println!("  Tables: {}", doc.indices.find_by_type("table").len());
    
    // Modify document
    let root = doc.root.clone();
    let appendix = Block::new(Content::text("Appendix"), Some("heading2"));
    let appendix_id = doc.add_block(appendix, &root)?;
    
    let note = Block::new(
        Content::text("Additional resources available online."),
        Some("paragraph")
    );
    doc.add_block(note, &appendix_id)?;
    
    // Render back
    let renderer = MarkdownRenderer::new()
        .heading_mode(HeadingMode::Hybrid);
    let rendered = renderer.render(&doc)?;
    
    println!("\\nRendered Markdown:\\n{}", rendered);
    
    Ok(())
}
\`\`\`

## Best Practices

### 1. Use Semantic Roles

\`\`\`rust
// Good - semantic role preserved
let block = Block::new(Content::text("Title"), Some("heading1"));

// Less ideal - no semantic information
let block = Block::new(Content::text("# Title"), None);
\`\`\`

### 2. Preserve Structure

\`\`\`rust
// Parse and render maintain hierarchy
let doc = parse_markdown(markdown)?;
// Modify document...
let rendered = render_markdown(&doc)?;
\`\`\`

### 3. Handle Code Languages

\`\`\`rust
// Language is preserved
let code = Block::new(Content::code("python", "print('hello')"), Some("code"));

// Renders as:
// \`\`\`python
// print('hello')
// \`\`\`
\`\`\`

### 4. Use Appropriate Heading Mode

\`\`\`rust
// For documents with explicit roles
let renderer = MarkdownRenderer::new()
    .heading_mode(HeadingMode::Explicit);

// For documents derived from structure
let renderer = MarkdownRenderer::new()
    .heading_mode(HeadingMode::Structural);
\`\`\`

## See Also

- [UCM Core Content Types](../ucm-core/content-types.md) - Content type reference
- [Metadata](../ucm-core/metadata.md) - Semantic roles
- [Documents](../ucm-core/documents.md) - Document structure
`,__vite_glob_0_11=`# UCL Parser

**ucl-parser** provides the parser for the Unified Content Language (UCL) — a token-efficient command language for manipulating UCM documents.

## Overview

UCL is designed for:
- **Token efficiency** - Minimal tokens for LLM interactions
- **Expressiveness** - Rich operations for document manipulation
- **Safety** - Structured commands prevent injection attacks
- **Readability** - Human-readable syntax

## Installation

\`\`\`toml
[dependencies]
ucl-parser = "0.1.4"0.1.3
\`\`\`

## Quick Example

\`\`\`rust
use ucl_parser::{parse, parse_commands};

// Parse a full UCL document
let ucl = r#"
STRUCTURE
blk_root: [blk_intro, blk_body]

BLOCKS
text #blk_intro label="Introduction" :: "Welcome to UCP!"

COMMANDS
EDIT blk_intro SET content.text = "Updated introduction"
"#;

let doc = parse(ucl).unwrap();
println!("Structure entries: {}", doc.structure.len());
println!("Block definitions: {}", doc.blocks.len());
println!("Commands: {}", doc.commands.len());

// Parse commands only
let commands = parse_commands(r#"
    EDIT blk_abc SET content.text = "Hello"
    APPEND blk_root text :: "New block"
"#).unwrap();

println!("Parsed {} commands", commands.len());
\`\`\`

## Module Overview

| Module | Description |
|--------|-------------|
| [\`ast\`](./syntax.md) | Abstract Syntax Tree types |
| [\`lexer\`](./syntax.md) | Tokenizer using Logos |
| [\`parser\`](./syntax.md) | Recursive descent parser |

## Public API

### Functions

\`\`\`rust
/// Parse a full UCL document
pub fn parse(input: &str) -> ParseResult<UclDocument>;

/// Parse UCL commands only (without STRUCTURE/BLOCKS sections)
pub fn parse_commands(input: &str) -> ParseResult<Vec<Command>>;
\`\`\`

### Re-exports

\`\`\`rust
pub use ast::*;
pub use lexer::{Token, TokenKind};
pub use parser::{ParseError, ParseResult, Parser};
\`\`\`

## UCL Document Structure

A UCL document has three optional sections:

\`\`\`
STRUCTURE
<adjacency declarations>

BLOCKS
<block definitions>

COMMANDS
<transformation commands>
\`\`\`

### STRUCTURE Section

Declares parent-child relationships:

\`\`\`
STRUCTURE
blk_root: [blk_child1, blk_child2]
blk_child1: [blk_grandchild]
\`\`\`

### BLOCKS Section

Defines block content:

\`\`\`
BLOCKS
text #blk_intro label="Introduction" :: "Welcome!"
code #blk_example lang="rust" :: "fn main() {}"
\`\`\`

### COMMANDS Section

Specifies operations:

\`\`\`
COMMANDS
EDIT blk_intro SET content.text = "Updated"
APPEND blk_root text :: "New paragraph"
DELETE blk_old CASCADE
\`\`\`

## Commands

| Command | Description |
|---------|-------------|
| \`EDIT\` | Modify block content or metadata |
| \`MOVE\` | Move block to new parent |
| \`APPEND\` | Add new block |
| \`DELETE\` | Remove block |
| \`PRUNE\` | Remove unreachable blocks |
| \`FOLD\` | Collapse content for context management |
| \`LINK\` | Add relationship edge |
| \`UNLINK\` | Remove relationship edge |
| \`SNAPSHOT\` | Version management |
| \`BEGIN/COMMIT/ROLLBACK\` | Transaction control |
| \`ATOMIC\` | Atomic operation group |

## Error Handling

\`\`\`rust
use ucl_parser::{parse_commands, ParseError};

let result = parse_commands("INVALID SYNTAX");

match result {
    Ok(commands) => println!("Parsed {} commands", commands.len()),
    Err(ParseError::UnexpectedToken { expected, found, line, column }) => {
        eprintln!("Error at {}:{}: expected {}, found {}", line, column, expected, found);
    }
    Err(ParseError::UnexpectedEof) => {
        eprintln!("Unexpected end of input");
    }
    Err(e) => eprintln!("Parse error: {}", e),
}
\`\`\`

## See Also

- [Syntax Reference](./syntax.md) - Complete syntax documentation
- [Commands Reference](./commands.md) - Detailed command documentation
- [Expressions](./expressions.md) - Path and condition expressions
`,__vite_glob_0_12=`# UCL Commands Reference

This document provides detailed documentation for each UCL command.

## EDIT Command

Modify block content or metadata.

### Syntax

\`\`\`ucl
EDIT <block_id> SET <path> <operator> <value> [WHERE <condition>]
\`\`\`

### Parameters

| Parameter | Description |
|-----------|-------------|
| \`block_id\` | Target block ID |
| \`path\` | Property path to modify |
| \`operator\` | Assignment operator (\`=\`, \`+=\`, \`-=\`, \`++\`, \`--\`) |
| \`value\` | New value |
| \`condition\` | Optional filter condition |

### Examples

\`\`\`ucl
// Set text content
EDIT blk_abc123def456 SET content.text = "New content"

// Append to text
EDIT blk_abc123def456 SET content.text += " additional text"

// Remove from text
EDIT blk_abc123def456 SET content.text -= "remove this"

// Set label
EDIT blk_abc123def456 SET metadata.label = "new-label"

// Add tags
EDIT blk_abc123def456 SET metadata.tags += ["tag1", "tag2"]

// Remove tag
EDIT blk_abc123def456 SET metadata.tags -= ["old-tag"]

// Set summary
EDIT blk_abc123def456 SET metadata.summary = "Brief description"

// Custom metadata
EDIT blk_abc123def456 SET metadata.author = "Alice"

// Conditional edit
EDIT blk_abc123def456 SET content.text = "Updated" WHERE status = "draft"
\`\`\`

### Supported Paths

| Path | Description |
|------|-------------|
| \`content.text\` or \`text\` | Text content |
| \`metadata.label\` | Block label |
| \`metadata.tags\` | Block tags |
| \`metadata.summary\` | Block summary |
| \`metadata.<key>\` | Custom metadata |

---

## MOVE Command

Move a block to a new location in the document structure.

### Syntax

\`\`\`ucl
MOVE <block_id> TO <parent_id> [AT <index>]
MOVE <block_id> BEFORE <sibling_id>
MOVE <block_id> AFTER <sibling_id>
\`\`\`

### Parameters

| Parameter | Description |
|-----------|-------------|
| \`block_id\` | Block to move |
| \`parent_id\` | New parent block |
| \`sibling_id\` | Reference sibling |
| \`index\` | Position in parent's children (0-indexed) |

### Examples

\`\`\`ucl
// Move to new parent (appends to end)
MOVE blk_child TO blk_newparent

// Move to specific position
MOVE blk_child TO blk_parent AT 0    // First position
MOVE blk_child TO blk_parent AT 2    // Third position

// Move relative to sibling
MOVE blk_child BEFORE blk_sibling
MOVE blk_child AFTER blk_sibling
\`\`\`

### Notes

- Moving a block to one of its descendants is prevented (cycle detection)
- Moving to the same parent at a different position is allowed

---

## APPEND Command

Add a new block to the document.

### Syntax

\`\`\`ucl
APPEND <parent_id> <content_type> [AT <index>] [WITH <properties>] :: <content>
\`\`\`

### Parameters

| Parameter | Description |
|-----------|-------------|
| \`parent_id\` | Parent block ID |
| \`content_type\` | Type: \`text\`, \`code\`, \`table\`, \`math\`, \`media\`, \`json\`, \`binary\`, \`composite\` |
| \`index\` | Optional position (0-indexed) |
| \`properties\` | Optional key=value pairs |
| \`content\` | Content literal |

### Properties

| Property | Description |
|----------|-------------|
| \`label\` | Block label |
| \`tags\` | Block tags (array) |
| \`role\` | Semantic role |

### Examples

\`\`\`ucl
// Simple text
APPEND blk_parent text :: "New paragraph"

// With label and tags
APPEND blk_parent text WITH label="intro" tags=["important"] :: "Introduction"

// At specific position
APPEND blk_parent text AT 0 :: "First child"

// Code block
APPEND blk_parent code :: "fn main() {
    println!(\\"Hello!\\");
}"

// With semantic role
APPEND blk_parent text WITH role="heading2" :: "Section Title"

// JSON content
APPEND blk_parent json :: {"key": "value", "count": 42}

// Table (pipe-delimited)
APPEND blk_parent table :: |Name|Age|
                           |Alice|30|
                           |Bob|25|
\`\`\`

---

## DELETE Command

Remove a block from the document.

### Syntax

\`\`\`ucl
DELETE <block_id> [CASCADE] [PRESERVE_CHILDREN]
DELETE WHERE <condition>
\`\`\`

### Parameters

| Parameter | Description |
|-----------|-------------|
| \`block_id\` | Block to delete |
| \`CASCADE\` | Also delete all descendants |
| \`PRESERVE_CHILDREN\` | Reparent children to grandparent before deleting |
| \`condition\` | Delete blocks matching condition |

### Examples

\`\`\`ucl
// Delete single block (children become orphaned)
DELETE blk_abc123def456

// Delete with all descendants
DELETE blk_abc123def456 CASCADE

// Delete but keep children (move to grandparent)
DELETE blk_abc123def456 PRESERVE_CHILDREN

// Delete by condition
DELETE WHERE tags CONTAINS "deprecated"
DELETE WHERE metadata.status = "archived"
\`\`\`

### Notes

- Without \`CASCADE\`, children become orphaned (unreachable)
- \`PRESERVE_CHILDREN\` moves children to the deleted block's parent
- Conditional delete affects all matching blocks

---

## PRUNE Command

Remove unreachable blocks or blocks matching a condition.

### Syntax

\`\`\`ucl
PRUNE UNREACHABLE [DRY_RUN]
PRUNE WHERE <condition> [DRY_RUN]
\`\`\`

### Parameters

| Parameter | Description |
|-----------|-------------|
| \`UNREACHABLE\` | Remove blocks not reachable from root |
| \`condition\` | Remove blocks matching condition |
| \`DRY_RUN\` | Report without actually deleting |

### Examples

\`\`\`ucl
// Remove all orphaned blocks
PRUNE UNREACHABLE

// Preview what would be pruned
PRUNE UNREACHABLE DRY_RUN

// Prune by tag
PRUNE WHERE tags CONTAINS "temporary"

// Prune old blocks
PRUNE WHERE metadata.created_at < "2024-01-01"
\`\`\`

---

## FOLD Command

Collapse content for context management (LLM optimization).

### Syntax

\`\`\`ucl
FOLD <block_id> [DEPTH <n>] [MAX_TOKENS <n>] [PRESERVE_TAGS <tags>]
\`\`\`

### Parameters

| Parameter | Description |
|-----------|-------------|
| \`block_id\` | Block to fold |
| \`DEPTH\` | Maximum depth to preserve |
| \`MAX_TOKENS\` | Maximum tokens to preserve |
| \`PRESERVE_TAGS\` | Tags to always preserve |

### Examples

\`\`\`ucl
// Fold to depth 2
FOLD blk_section DEPTH 2

// Fold by token limit
FOLD blk_document MAX_TOKENS 4000

// Preserve important content
FOLD blk_section DEPTH 1 PRESERVE_TAGS ["important", "summary"]

// Combine options
FOLD blk_chapter DEPTH 3 MAX_TOKENS 2000 PRESERVE_TAGS ["key-point"]
\`\`\`

### Notes

- Folded content is replaced with summaries (if available)
- Blocks with preserved tags are not folded
- Useful for fitting documents into LLM context windows

---

## LINK Command

Add a relationship edge between blocks.

### Syntax

\`\`\`ucl
LINK <source_id> <edge_type> <target_id> [WITH <properties>]
\`\`\`

### Parameters

| Parameter | Description |
|-----------|-------------|
| \`source_id\` | Source block ID |
| \`edge_type\` | Relationship type |
| \`target_id\` | Target block ID |
| \`properties\` | Optional edge metadata |

### Edge Types

| Type | Description |
|------|-------------|
| \`references\` | General reference |
| \`derived_from\` | Content derived from |
| \`supersedes\` | Replaces another block |
| \`supports\` | Provides evidence for |
| \`contradicts\` | Contradicts (symmetric) |
| \`elaborates\` | Expands on |
| \`summarizes\` | Summarizes |
| \`version_of\` | Different version |
| \`translation_of\` | Translation |
| Custom | Any custom type |

### Examples

\`\`\`ucl
// Basic reference
LINK blk_paragraph references blk_source

// Evidence supports claim
LINK blk_evidence supports blk_claim WITH confidence=0.95

// Derivation
LINK blk_summary derived_from blk_original

// Contradiction
LINK blk_counter contradicts blk_argument

// Custom relationship
LINK blk_impl implements blk_interface

// With description
LINK blk_a references blk_b WITH description="See also"
\`\`\`

---

## UNLINK Command

Remove a relationship edge between blocks.

### Syntax

\`\`\`ucl
UNLINK <source_id> <edge_type> <target_id>
\`\`\`

### Examples

\`\`\`ucl
UNLINK blk_paragraph references blk_source
UNLINK blk_evidence supports blk_claim
\`\`\`

---

## SNAPSHOT Commands

Manage document versions.

### Create Snapshot

\`\`\`ucl
SNAPSHOT CREATE "<name>"
SNAPSHOT CREATE "<name>" WITH description="<description>"
\`\`\`

### Restore Snapshot

\`\`\`ucl
SNAPSHOT RESTORE "<name>"
\`\`\`

### List Snapshots

\`\`\`ucl
SNAPSHOT LIST
\`\`\`

### Delete Snapshot

\`\`\`ucl
SNAPSHOT DELETE "<name>"
\`\`\`

### Compare Snapshots

\`\`\`ucl
SNAPSHOT DIFF "<name1>" "<name2>"
\`\`\`

### Examples

\`\`\`ucl
// Create versioned snapshot
SNAPSHOT CREATE "v1.0" WITH description="Initial release"

// Create checkpoint
SNAPSHOT CREATE "before-refactor"

// Restore previous version
SNAPSHOT RESTORE "v1.0"

// Clean up old snapshots
SNAPSHOT DELETE "draft-1"
SNAPSHOT DELETE "draft-2"
\`\`\`

---

## Transaction Commands

Group operations for atomic execution.

### BEGIN TRANSACTION

\`\`\`ucl
BEGIN TRANSACTION
BEGIN TRANSACTION "<name>"
\`\`\`

### COMMIT

\`\`\`ucl
COMMIT
COMMIT "<name>"
\`\`\`

### ROLLBACK

\`\`\`ucl
ROLLBACK
ROLLBACK "<name>"
\`\`\`

### Examples

\`\`\`ucl
// Anonymous transaction
BEGIN TRANSACTION
APPEND blk_root text :: "Block 1"
APPEND blk_root text :: "Block 2"
COMMIT

// Named transaction
BEGIN TRANSACTION "import-chapter"
APPEND blk_root text WITH role="heading1" :: "Chapter 3"
APPEND blk_chapter3 text :: "Content..."
COMMIT "import-chapter"

// Rollback on error
BEGIN TRANSACTION "risky-operation"
DELETE blk_important CASCADE
// Oops, wrong block!
ROLLBACK "risky-operation"
\`\`\`

---

## ATOMIC Command

Execute multiple commands atomically.

### Syntax

\`\`\`ucl
ATOMIC {
    <command>
    <command>
    ...
}
\`\`\`

### Examples

\`\`\`ucl
// Atomic block creation with linking
ATOMIC {
    APPEND blk_root text WITH label="claim" :: "Main argument"
    APPEND blk_root text WITH label="evidence" :: "Supporting evidence"
    LINK blk_evidence supports blk_claim
}

// Atomic restructure
ATOMIC {
    MOVE blk_section1 TO blk_chapter2
    MOVE blk_section2 TO blk_chapter2
    DELETE blk_chapter1 CASCADE
}
\`\`\`

### Notes

- All commands succeed or none are applied
- Equivalent to a transaction with immediate commit
- Useful for operations that must be atomic

---

## Command Chaining

Commands can be written on separate lines or chained:

\`\`\`ucl
// Separate lines
EDIT blk_a SET text = "Hello"
EDIT blk_b SET text = "World"

// Multiple operations
APPEND blk_root text :: "Para 1"
APPEND blk_root text :: "Para 2"
LINK blk_para1 references blk_para2
\`\`\`

## See Also

- [Syntax Reference](./syntax.md) - Complete syntax documentation
- [Expressions](./expressions.md) - Path and condition expressions
- [UCM Engine Operations](../ucm-engine/operations.md) - How commands execute
`,__vite_glob_0_13=`# UCL Expressions

This document covers path expressions and condition expressions used in UCL commands.

## Path Expressions

Paths navigate through block structure to access properties.

### Simple Paths

\`\`\`ucl
// Single property
content
metadata
label

// Nested property
content.text
metadata.tags
metadata.semantic_role.category
\`\`\`

### Array Access

\`\`\`ucl
// Index (0-based)
rows[0]
cells[5]
tags[0]

// Negative index (from end)
rows[-1]    // Last element
tags[-2]    // Second to last
\`\`\`

### Array Slices

\`\`\`ucl
// Range [start:end) - end is exclusive
rows[0:5]   // First 5 elements
rows[2:7]   // Elements 2-6

// Open-ended slices
rows[:5]    // First 5 elements
rows[5:]    // From index 5 to end
rows[:]     // All elements (copy)
\`\`\`

### JSON Path

For navigating JSON content:

\`\`\`ucl
// JSON path prefix with $
$data.users[0].name
$config.settings.debug
$response.items[*].id
\`\`\`

### Combined Paths

\`\`\`ucl
// Complex navigation
content.table.rows[0].cells[2]
metadata.custom.nested.value
$data.users[0].addresses[0].city
\`\`\`

## Path Segments

| Segment Type | Syntax | Example |
|--------------|--------|---------|
| Property | \`name\` | \`content\` |
| Index | \`[n]\` | \`[0]\`, \`[-1]\` |
| Slice | \`[start:end]\` | \`[0:5]\`, \`[:3]\` |
| JSON Path | \`$path\` | \`$data.key\` |

## Condition Expressions

Conditions filter operations based on block properties.

### Basic Syntax

\`\`\`ucl
WHERE <expression>
\`\`\`

### Comparison Operations

\`\`\`ucl
// Equality
WHERE content.text = "Hello"
WHERE metadata.label = "intro"

// Inequality
WHERE status != "archived"
WHERE priority != 0

// Numeric comparisons
WHERE priority > 5
WHERE count >= 10
WHERE value < 100
WHERE score <= 0.5
\`\`\`

### String Operations

\`\`\`ucl
// Contains substring
WHERE content.text CONTAINS "important"
WHERE tags CONTAINS "draft"

// Prefix match
WHERE label STARTS_WITH "chapter"
WHERE content.text STARTS_WITH "Note:"

// Suffix match
WHERE filename ENDS_WITH ".md"
WHERE label ENDS_WITH "-v2"

// Regex match
WHERE content.text MATCHES "^[A-Z].*\\\\.$"
WHERE label MATCHES "section-[0-9]+"
\`\`\`

### Existence Checks

\`\`\`ucl
// Property exists
WHERE summary EXISTS
WHERE metadata.custom.author EXISTS

// Null checks
WHERE deprecated IS_NULL
WHERE label IS_NOT_NULL

// Empty checks
WHERE content.text IS_EMPTY
WHERE tags IS_EMPTY
\`\`\`

### Logical Operators

\`\`\`ucl
// AND - both conditions must be true
WHERE priority > 5 AND status = "active"
WHERE type = "code" AND lang = "rust"

// OR - either condition must be true
WHERE type = "warning" OR type = "error"
WHERE status = "draft" OR status = "review"

// NOT - negation
WHERE NOT archived
WHERE NOT tags CONTAINS "deprecated"

// Combined
WHERE (priority > 5 OR urgent) AND NOT archived
WHERE type = "code" AND (lang = "rust" OR lang = "python")
\`\`\`

### Operator Precedence

From highest to lowest:
1. \`NOT\`
2. \`AND\`
3. \`OR\`

Use parentheses to override:

\`\`\`ucl
// Without parentheses: NOT binds tightest
WHERE NOT a AND b    // (NOT a) AND b

// With parentheses
WHERE NOT (a AND b)  // NOT (a AND b)

// OR has lowest precedence
WHERE a AND b OR c   // (a AND b) OR c
WHERE a AND (b OR c) // a AND (b OR c)
\`\`\`

## Condition Examples

### By Content Type

\`\`\`ucl
// Find text blocks
WHERE content.type = "text"

// Find code blocks
WHERE content.type = "code"

// Find code in specific language
WHERE content.type = "code" AND content.lang = "rust"
\`\`\`

### By Metadata

\`\`\`ucl
// By label
WHERE metadata.label = "introduction"

// By tag
WHERE metadata.tags CONTAINS "important"

// By role
WHERE metadata.semantic_role.category = "heading1"

// By multiple tags
WHERE metadata.tags CONTAINS "draft" AND metadata.tags CONTAINS "review"
\`\`\`

### By Custom Properties

\`\`\`ucl
// Custom metadata
WHERE metadata.custom.author = "Alice"
WHERE metadata.custom.version > 2
WHERE metadata.custom.approved = true
\`\`\`

### Complex Conditions

\`\`\`ucl
// Find draft code blocks needing review
WHERE content.type = "code" 
  AND metadata.tags CONTAINS "draft"
  AND metadata.tags CONTAINS "needs-review"

// Find important content that's not archived
WHERE (metadata.tags CONTAINS "important" OR priority > 8)
  AND NOT metadata.tags CONTAINS "archived"

// Find headings in first two levels
WHERE (metadata.semantic_role.category = "heading1"
    OR metadata.semantic_role.category = "heading2")
  AND content.text IS_NOT_NULL
\`\`\`

## Using Conditions in Commands

### EDIT with Condition

\`\`\`ucl
// Update all draft blocks
EDIT blk_section SET metadata.tags += ["reviewed"] WHERE status = "draft"

// Clear deprecated content
EDIT blk_doc SET content.text = "[DEPRECATED]" WHERE deprecated = true
\`\`\`

### DELETE with Condition

\`\`\`ucl
// Delete all deprecated blocks
DELETE WHERE metadata.tags CONTAINS "deprecated"

// Delete old temporary blocks
DELETE WHERE metadata.tags CONTAINS "temp" AND created_at < "2024-01-01"
\`\`\`

### PRUNE with Condition

\`\`\`ucl
// Prune by tag
PRUNE WHERE metadata.tags CONTAINS "temporary"

// Prune empty blocks
PRUNE WHERE content.text IS_EMPTY
\`\`\`

## Value Types in Conditions

### Strings

\`\`\`ucl
WHERE label = "intro"
WHERE label = 'intro'  // Single quotes also work
\`\`\`

### Numbers

\`\`\`ucl
WHERE priority = 5
WHERE score = 3.14
WHERE count = -1
\`\`\`

### Booleans

\`\`\`ucl
WHERE active = true
WHERE deprecated = false
\`\`\`

### Null

\`\`\`ucl
WHERE value = null
WHERE optional IS_NULL
\`\`\`

### Arrays

\`\`\`ucl
WHERE tags = ["a", "b", "c"]
WHERE metadata.tags CONTAINS "important"
\`\`\`

### Block References

\`\`\`ucl
WHERE parent = @blk_abc123def456
WHERE references CONTAINS @blk_target
\`\`\`

## AST Representation

Conditions are represented in the AST as:

\`\`\`rust
pub enum Condition {
    Comparison { path: Path, op: ComparisonOp, value: Value },
    Contains { path: Path, value: Value },
    StartsWith { path: Path, prefix: String },
    EndsWith { path: Path, suffix: String },
    Matches { path: Path, regex: String },
    Exists { path: Path },
    IsNull { path: Path },
    And(Box<Condition>, Box<Condition>),
    Or(Box<Condition>, Box<Condition>),
    Not(Box<Condition>),
}

pub enum ComparisonOp {
    Eq,  // =
    Ne,  // !=
    Gt,  // >
    Ge,  // >=
    Lt,  // <
    Le,  // <=
}
\`\`\`

## Best Practices

### 1. Use Specific Paths

\`\`\`ucl
// Good - specific path
WHERE metadata.tags CONTAINS "draft"

// Less ideal - ambiguous
WHERE tags CONTAINS "draft"
\`\`\`

### 2. Combine Conditions Logically

\`\`\`ucl
// Good - clear grouping
WHERE (type = "warning" OR type = "error") AND NOT resolved

// Confusing - relies on precedence
WHERE type = "warning" OR type = "error" AND NOT resolved
\`\`\`

### 3. Use Appropriate Operators

\`\`\`ucl
// For substring search
WHERE content.text CONTAINS "keyword"

// For exact match
WHERE label = "exact-value"

// For pattern matching
WHERE label MATCHES "chapter-[0-9]+"
\`\`\`

### 4. Check Existence Before Comparison

\`\`\`ucl
// If property might not exist
WHERE metadata.custom.author EXISTS AND metadata.custom.author = "Alice"
\`\`\`

## See Also

- [Syntax Reference](./syntax.md) - Complete syntax documentation
- [Commands Reference](./commands.md) - Command documentation
`,__vite_glob_0_14=`# UCL Syntax Reference

This document provides a complete reference for the Unified Content Language (UCL) syntax.

## Lexical Elements

### Comments

\`\`\`ucl
// Single-line comment
EDIT blk_abc SET text = "value"  // Inline comment
\`\`\`

### Identifiers

\`\`\`ucl
// Block IDs: blk_ prefix + 24 hex characters
blk_a1b2c3d4e5f6a1b2c3d4e5f6

// Property names
label
content
metadata
\`\`\`

### Literals

#### Strings

\`\`\`ucl
// Double-quoted
"Hello, world!"

// Single-quoted
'Hello, world!'

// Escape sequences
"Line 1\\nLine 2"
"Tab:\\tvalue"
"Quote: \\"quoted\\""
\`\`\`

#### Numbers

\`\`\`ucl
// Integers
42
-17
0

// Floats
3.14
-2.5
0.001
\`\`\`

#### Booleans

\`\`\`ucl
true
false
\`\`\`

#### Null

\`\`\`ucl
null
\`\`\`

#### Arrays

\`\`\`ucl
[1, 2, 3]
["a", "b", "c"]
[true, false, null]
[]
\`\`\`

#### Objects

\`\`\`ucl
{"key": "value"}
{"name": "Alice", "age": 30}
{}
\`\`\`

#### Block References

\`\`\`ucl
@blk_a1b2c3d4e5f6a1b2c3d4e5f6
\`\`\`

### Content Types

\`\`\`ucl
text      // Plain text
table     // Tabular data
code      // Source code
math      // Mathematical expressions
media     // Images, audio, video
json      // JSON data
binary    // Binary data
composite // Container for other blocks
\`\`\`

### Operators

#### Assignment Operators

| Operator | Name | Description |
|----------|------|-------------|
| \`=\` | Set | Replace value |
| \`+=\` | Append | Append to string/array |
| \`-=\` | Remove | Remove from string/array |
| \`++\` | Increment | Increment number |
| \`--\` | Decrement | Decrement number |

#### Comparison Operators

| Operator | Name | Description |
|----------|------|-------------|
| \`=\` | Equal | Equality check |
| \`!=\` | Not Equal | Inequality check |
| \`>\` | Greater Than | Greater than |
| \`>=\` | Greater or Equal | Greater than or equal |
| \`<\` | Less Than | Less than |
| \`<=\` | Less or Equal | Less than or equal |

#### Logical Operators

| Operator | Description |
|----------|-------------|
| \`AND\` | Logical AND |
| \`OR\` | Logical OR |
| \`NOT\` | Logical NOT |

#### String Operators

| Operator | Description |
|----------|-------------|
| \`CONTAINS\` | String contains |
| \`STARTS_WITH\` | String starts with |
| \`ENDS_WITH\` | String ends with |
| \`MATCHES\` | Regex match |

#### Existence Operators

| Operator | Description |
|----------|-------------|
| \`EXISTS\` | Path exists |
| \`IS_NULL\` | Value is null |
| \`IS_NOT_NULL\` | Value is not null |
| \`IS_EMPTY\` | Value is empty |

## Document Structure

### STRUCTURE Section

Declares the document hierarchy:

\`\`\`ucl
STRUCTURE
blk_root: [blk_child1, blk_child2, blk_child3]
blk_child1: [blk_grandchild1, blk_grandchild2]
blk_child2: []
\`\`\`

### BLOCKS Section

Defines block content:

\`\`\`ucl
BLOCKS
// Text block
text #blk_intro label="Introduction" tags=["important"] :: "Welcome to UCP!"

// Code block
code #blk_example lang="rust" :: "fn main() {
    println!(\\"Hello!\\");
}"

// Table block
table #blk_data :: |Name|Age|City|
                   |Alice|30|NYC|
                   |Bob|25|LA|

// JSON block
json #blk_config :: {"debug": true, "level": 5}
\`\`\`

#### Block Definition Syntax

\`\`\`
<content_type> #<block_id> [properties...] :: <content>
\`\`\`

Properties:
- \`label="value"\` - Block label
- \`tags=["tag1", "tag2"]\` - Block tags
- \`role="semantic_role"\` - Semantic role
- Custom properties as key=value

### COMMANDS Section

Contains transformation commands:

\`\`\`ucl
COMMANDS
EDIT blk_intro SET content.text = "Updated"
APPEND blk_root text :: "New paragraph"
MOVE blk_child TO blk_newparent
DELETE blk_old CASCADE
\`\`\`

## Path Expressions

Paths navigate block structure:

\`\`\`ucl
// Simple property
content

// Nested property
content.text

// Array index
rows[0]

// Array slice
rows[0:5]
rows[:5]
rows[5:]

// JSON path
$data.users[0].name
\`\`\`

### Path Segments

| Segment | Example | Description |
|---------|---------|-------------|
| Property | \`content\` | Access property |
| Index | \`[0]\` | Array index |
| Slice | \`[0:5]\` | Array slice |
| JSONPath | \`$path\` | JSON path expression |

## Conditions

Conditions filter operations:

\`\`\`ucl
// Simple comparison
WHERE content.text = "Hello"

// Numeric comparison
WHERE metadata.priority > 5

// String operations
WHERE content.text CONTAINS "important"
WHERE label STARTS_WITH "chapter"
WHERE content.text MATCHES "^[A-Z].*"

// Existence checks
WHERE summary EXISTS
WHERE deprecated IS_NULL

// Logical combinations
WHERE priority > 5 AND status = "active"
WHERE type = "warning" OR type = "error"
WHERE NOT archived

// Parentheses for grouping
WHERE (priority > 5 OR urgent) AND NOT archived
\`\`\`

## Commands

### EDIT

Modify block content or metadata:

\`\`\`ucl
// Set content
EDIT blk_abc SET content.text = "New text"

// Append to content
EDIT blk_abc SET content.text += " more text"

// Set metadata
EDIT blk_abc SET metadata.label = "new-label"

// Add tags
EDIT blk_abc SET metadata.tags += ["new-tag"]

// Remove tags
EDIT blk_abc SET metadata.tags -= ["old-tag"]

// Conditional edit
EDIT blk_abc SET content.text = "Updated" WHERE status = "draft"
\`\`\`

### MOVE

Move block to new location:

\`\`\`ucl
// Move to new parent
MOVE blk_child TO blk_newparent

// Move to specific position
MOVE blk_child TO blk_parent AT 0

// Move before sibling
MOVE blk_child BEFORE blk_sibling

// Move after sibling
MOVE blk_child AFTER blk_sibling
\`\`\`

### APPEND

Add new block:

\`\`\`ucl
// Basic append
APPEND blk_parent text :: "New paragraph"

// With properties
APPEND blk_parent text WITH label="intro" tags=["important"] :: "Content"

// At specific position
APPEND blk_parent text AT 0 :: "First child"

// Code block
APPEND blk_parent code WITH lang="python" :: "def hello(): pass"
\`\`\`

### DELETE

Remove block:

\`\`\`ucl
// Delete single block
DELETE blk_abc

// Delete with descendants
DELETE blk_abc CASCADE

// Delete but keep children
DELETE blk_abc PRESERVE_CHILDREN

// Conditional delete
DELETE WHERE tags CONTAINS "deprecated"
\`\`\`

### PRUNE

Remove unreachable or matching blocks:

\`\`\`ucl
// Prune unreachable blocks
PRUNE UNREACHABLE

// Prune by condition
PRUNE WHERE tags CONTAINS "temp"

// Dry run (report without deleting)
PRUNE UNREACHABLE DRY_RUN
\`\`\`

### FOLD

Collapse content for context management:

\`\`\`ucl
// Fold to depth
FOLD blk_section DEPTH 2

// Fold by token limit
FOLD blk_section MAX_TOKENS 1000

// Preserve specific tags
FOLD blk_section DEPTH 1 PRESERVE_TAGS ["important", "summary"]
\`\`\`

### LINK

Add relationship edge:

\`\`\`ucl
// Basic link
LINK blk_source references blk_target

// With metadata
LINK blk_evidence supports blk_claim WITH confidence=0.95

// Custom edge type
LINK blk_impl implements blk_interface
\`\`\`

### UNLINK

Remove relationship edge:

\`\`\`ucl
UNLINK blk_source references blk_target
\`\`\`

### SNAPSHOT

Version management:

\`\`\`ucl
// Create snapshot
SNAPSHOT CREATE "v1.0"
SNAPSHOT CREATE "draft" WITH description="First draft"

// Restore snapshot
SNAPSHOT RESTORE "v1.0"

// List snapshots
SNAPSHOT LIST

// Delete snapshot
SNAPSHOT DELETE "old-version"

// Compare snapshots
SNAPSHOT DIFF "v1.0" "v2.0"
\`\`\`

### Transaction Commands

\`\`\`ucl
// Begin transaction
BEGIN TRANSACTION
BEGIN TRANSACTION "import-data"

// Commit transaction
COMMIT
COMMIT "import-data"

// Rollback transaction
ROLLBACK
ROLLBACK "import-data"
\`\`\`

### ATOMIC

Group commands for atomic execution:

\`\`\`ucl
ATOMIC {
    APPEND blk_root text :: "Block 1"
    APPEND blk_root text :: "Block 2"
    LINK blk_1 references blk_2
}
\`\`\`

## Complete Example

\`\`\`ucl
// Define document structure
STRUCTURE
blk_root: [blk_title, blk_intro, blk_chapter1]
blk_chapter1: [blk_section1, blk_section2]

// Define blocks
BLOCKS
text #blk_title role="title" :: "My Document"
text #blk_intro role="intro" label="introduction" :: "Welcome to this guide."
text #blk_chapter1 role="heading1" :: "Chapter 1: Getting Started"
text #blk_section1 role="heading2" :: "Installation"
text #blk_section2 role="heading2" :: "Configuration"

// Commands to modify
COMMANDS
// Update introduction
EDIT blk_intro SET content.text = "Welcome to this comprehensive guide."

// Add code example under section 1
APPEND blk_section1 code WITH label="install-cmd" lang="bash" :: "cargo add ucp-api"

// Add reference
LINK blk_intro references blk_section1

// Tag for review
EDIT blk_intro SET metadata.tags += ["needs-review"]

// Create snapshot
SNAPSHOT CREATE "initial" WITH description="Initial document structure"
\`\`\`

## Grammar Summary

\`\`\`ebnf
document     = [structure] [blocks] [commands]

structure    = "STRUCTURE" {structure_entry}
structure_entry = block_id ":" "[" [block_id {"," block_id}] "]"

blocks       = "BLOCKS" {block_def}
block_def    = content_type "#" block_id {property} "::" content_literal

commands     = "COMMANDS" {command}
command      = edit | move | append | delete | prune | fold 
             | link | unlink | snapshot | transaction | atomic

edit         = "EDIT" block_id "SET" path operator value [condition]
move         = "MOVE" block_id move_target
append       = "APPEND" block_id content_type ["AT" int] ["WITH" properties] "::" content
delete       = "DELETE" [block_id] ["CASCADE"] ["PRESERVE_CHILDREN"] [condition]
prune        = "PRUNE" prune_target ["DRY_RUN"]
fold         = "FOLD" block_id {fold_option}
link         = "LINK" block_id edge_type block_id ["WITH" properties]
unlink       = "UNLINK" block_id edge_type block_id
snapshot     = "SNAPSHOT" snapshot_action
transaction  = "BEGIN" "TRANSACTION" [string] | "COMMIT" [string] | "ROLLBACK" [string]
atomic       = "ATOMIC" "{" {command} "}"

path         = path_segment {"." path_segment}
path_segment = identifier | "[" int "]" | "[" [int] ":" [int] "]"
condition    = "WHERE" expression
expression   = and_expr {"OR" and_expr}
and_expr     = unary_expr {"AND" unary_expr}
unary_expr   = ["NOT"] primary_expr
primary_expr = comparison | "(" expression ")"
comparison   = path comp_op value | path string_op string | path exist_op
\`\`\`

## See Also

- [Commands Reference](./commands.md) - Detailed command documentation
- [Expressions](./expressions.md) - Path and condition expressions
- [UCM Engine Operations](../ucm-engine/operations.md) - How commands map to operations
`,__vite_glob_0_15=`# UCM Core

**ucm-core** provides the fundamental building blocks for the Unified Content Model — the core types and traits for representing structured content in a graph-based intermediate representation.

## Overview

UCM Core is the foundation of the UCP ecosystem. It defines:

- **Block** - The fundamental unit of content
- **Content** - Typed content variants (text, code, table, etc.)
- **Document** - A collection of blocks with hierarchical structure
- **Edge** - Explicit relationships between blocks
- **BlockId** - Content-addressed identifiers with 96-bit collision resistance
- **Metadata** - Semantic roles, tags, and token estimates

## Installation

\`\`\`toml
[dependencies]
ucm-core = "0.1.4"
\`\`\`

## Module Overview

| Module | Description |
|--------|-------------|
| [\`block\`](./blocks.md) | Block type and lifecycle |
| [\`content\`](./content-types.md) | Content type variants |
| [\`document\`](./documents.md) | Document structure and operations |
| [\`edge\`](./edges.md) | Relationship types and edge index |
| [\`id\`](./id-generation.md) | Block ID generation |
| [\`metadata\`](./metadata.md) | Block metadata and semantic roles |
| \`error\` | Error types and codes |
| \`normalize\` | Content normalization |
| \`version\` | Version tracking |

## Quick Example

\`\`\`rust
use ucm_core::{Block, Content, Document, DocumentId};

fn main() {
    // Create a document
    let mut doc = Document::new(DocumentId::new("my-doc"));
    let root = doc.root.clone();
    
    // Create and add a block
    let block = Block::new(Content::text("Hello, UCM!"), Some("intro"))
        .with_label("greeting")
        .with_tag("example");
    
    let block_id = doc.add_block(block, &root).unwrap();
    
    // Query the block
    let block = doc.get_block(&block_id).unwrap();
    println!("Block ID: {}", block.id);
    println!("Content type: {}", block.content_type());
}
\`\`\`

## Public API

### Re-exports

\`\`\`rust
pub use block::{Block, BlockState};
pub use content::{
    BinaryEncoding, Cell, Code, Column, CompositeLayout, Content, 
    DataType, Dimensions, JsonSchema, LineRange, Math, MathFormat, 
    Media, MediaSource, MediaType, Row, Table, TableSchema, Text, TextFormat,
};
pub use document::{Document, DocumentId, DocumentMetadata};
pub use edge::{Edge, EdgeIndex, EdgeMetadata, EdgeType};
pub use error::{Error, ErrorCode, Result, ValidationIssue, ValidationSeverity};
pub use id::{BlockId, ContentHash, IdGenerator, IdGeneratorConfig};
pub use metadata::{BlockMetadata, RoleCategory, SemanticRole, TokenEstimate, TokenModel};
pub use version::{DocumentVersion, Version};
\`\`\`

## Design Principles

### Content-Addressed Identity

Block IDs are derived deterministically from:
1. Content type discriminant
2. Semantic role (optional)
3. Normalized content
4. Namespace (optional, for multi-tenant scenarios)

This ensures:
- **Reproducibility**: Same content always produces same ID
- **Deduplication**: Identical blocks naturally share IDs
- **Integrity**: ID changes if content changes

### Immutability by Default

Blocks are conceptually immutable. When content changes:
1. A new ID is generated
2. Version counter increments
3. Timestamp updates

This enables:
- Change detection via ID comparison
- Efficient caching
- Audit trails

### Rich Typing

Content is strongly typed with variants for:
- Text (plain, markdown, rich)
- Code (with language hints)
- Tables (with schema)
- Math (LaTeX, MathML, AsciiMath)
- Media (images, audio, video)
- JSON (with optional schema)
- Binary (with MIME type)
- Composite (block references)

### LLM Optimization

Built-in support for LLM workflows:
- Token estimation per model (GPT-4, Claude, Llama)
- Semantic roles for context management
- Summaries for content folding
- Efficient serialization

## See Also

- [Blocks](./blocks.md) - Detailed block documentation
- [Content Types](./content-types.md) - All content variants
- [Documents](./documents.md) - Document operations
- [Edges](./edges.md) - Relationship types
- [ID Generation](./id-generation.md) - How IDs are generated
- [Metadata](./metadata.md) - Semantic roles and metadata
`,__vite_glob_0_16=`# Blocks

The **Block** is the fundamental unit of content in UCM. Every piece of content in a document is represented as a block.

## Block Structure

\`\`\`rust
pub struct Block {
    /// Unique, content-derived identifier
    pub id: BlockId,
    
    /// The actual content
    pub content: Content,
    
    /// Block metadata (role, tags, labels, etc.)
    pub metadata: BlockMetadata,
    
    /// Explicit relationships to other blocks
    pub edges: Vec<Edge>,
    
    /// Version for optimistic concurrency control
    pub version: Version,
}
\`\`\`

## Creating Blocks

### Basic Creation

\`\`\`rust
use ucm_core::{Block, Content};

// Create with content and semantic role
let block = Block::new(Content::text("Hello, world!"), Some("intro"));

// Create without semantic role
let block = Block::new(Content::text("Plain text"), None);

// Create with specific ID (for deserialization or testing)
let block = Block::with_id(block_id, Content::text("Test"));

// Create root block
let root = Block::root();
\`\`\`

### Builder Pattern

\`\`\`rust
use ucm_core::{Block, Content, Edge, EdgeType};

let block = Block::new(Content::text("Important note"), Some("note"))
    .with_label("warning-001")
    .with_tag("important")
    .with_tag("review-needed")
    .with_edge(Edge::new(EdgeType::References, other_block_id));
\`\`\`

### With Metadata

\`\`\`rust
use ucm_core::{Block, Content, BlockMetadata, id::compute_content_hash};

let content = Content::text("Custom metadata example");
let hash = compute_content_hash(&content);

let metadata = BlockMetadata::new(hash)
    .with_label("custom-block")
    .with_tags(["tag1", "tag2"])
    .with_summary("A brief summary for folding");

let block = Block::new(content, Some("example"))
    .with_metadata(metadata);
\`\`\`

## Block Properties

### ID

The block ID is a content-addressed identifier:

\`\`\`rust
let block = Block::new(Content::text("Hello"), Some("intro"));

println!("Block ID: {}", block.id);  // blk_a1b2c3d4e5f6...

// IDs are deterministic
let block2 = Block::new(Content::text("Hello"), Some("intro"));
assert_eq!(block.id, block2.id);

// Different role = different ID
let block3 = Block::new(Content::text("Hello"), Some("conclusion"));
assert_ne!(block.id, block3.id);
\`\`\`

### Content Type

\`\`\`rust
let text_block = Block::new(Content::text("Hello"), None);
assert_eq!(text_block.content_type(), "text");

let code_block = Block::new(Content::code("rust", "fn main() {}"), None);
assert_eq!(code_block.content_type(), "code");
\`\`\`

### Root Detection

\`\`\`rust
let root = Block::root();
assert!(root.is_root());

let regular = Block::new(Content::text("Not root"), None);
assert!(!regular.is_root());
\`\`\`

### Size and Tokens

\`\`\`rust
let block = Block::new(Content::text("Hello, world!"), None);

// Content size in bytes
let size = block.size_bytes();

// Token estimate
let tokens = block.token_estimate();
println!("GPT-4 tokens: {}", tokens.gpt4);
println!("Claude tokens: {}", tokens.claude);
\`\`\`

## Modifying Blocks

### Update Content

\`\`\`rust
let mut block = Block::new(Content::text("Original"), Some("intro"));
let original_id = block.id.clone();

// Update content (regenerates ID)
block.update_content(Content::text("Updated"), Some("intro"));

assert_ne!(block.id, original_id);  // ID changed
assert!(block.version.counter > 1); // Version incremented
\`\`\`

### Managing Edges

\`\`\`rust
use ucm_core::{Block, Content, Edge, EdgeType, BlockId};

let mut block = Block::new(Content::text("Source"), None);
let target_id = BlockId::from_bytes([1u8; 12]);

// Add edge
let edge = Edge::new(EdgeType::References, target_id.clone());
block.add_edge(edge);

// Query edges
let refs = block.edges_of_type(&EdgeType::References);
assert_eq!(refs.len(), 1);

// Remove edge
block.remove_edge(&target_id, &EdgeType::References);
assert!(block.edges.is_empty());
\`\`\`

### Tags

\`\`\`rust
let block = Block::new(Content::text("Test"), None)
    .with_tag("important")
    .with_tag("draft");

assert!(block.has_tag("important"));
assert!(block.has_tag("draft"));
assert!(!block.has_tag("final"));
\`\`\`

## Block Lifecycle States

\`\`\`rust
pub enum BlockState {
    /// Reachable from document root
    Live,
    /// Not reachable from root but not deleted
    Orphaned,
    /// Marked for garbage collection
    Deleted,
}
\`\`\`

### Checking State

\`\`\`rust
use ucm_core::{Document, Block, Content};

let mut doc = Document::create();
let root = doc.root.clone();

let block = Block::new(Content::text("Test"), None);
let block_id = doc.add_block(block, &root).unwrap();

// Check state
assert_eq!(doc.block_state(&block_id), BlockState::Live);

// Remove from structure (orphan it)
doc.remove_from_structure(&block_id);
assert_eq!(doc.block_state(&block_id), BlockState::Orphaned);

// Delete completely
doc.delete_block(&block_id).unwrap();
assert_eq!(doc.block_state(&block_id), BlockState::Deleted);
\`\`\`

## Serialization

Blocks implement \`Serialize\` and \`Deserialize\`:

\`\`\`rust
use ucm_core::{Block, Content};
use serde_json;

let block = Block::new(Content::text("Hello"), Some("intro"))
    .with_label("greeting")
    .with_tag("example");

// Serialize to JSON
let json = serde_json::to_string_pretty(&block).unwrap();
println!("{}", json);

// Deserialize from JSON
let restored: Block = serde_json::from_str(&json).unwrap();
assert_eq!(block.id, restored.id);
\`\`\`

### JSON Structure

\`\`\`json
{
  "id": "a1b2c3d4e5f6a1b2c3d4e5f6",
  "content": {
    "type": "text",
    "text": "Hello",
    "format": "plain"
  },
  "metadata": {
    "semantic_role": {
      "category": "intro"
    },
    "label": "greeting",
    "tags": ["example"],
    "content_hash": "...",
    "created_at": "2024-01-01T00:00:00Z",
    "modified_at": "2024-01-01T00:00:00Z"
  },
  "version": {
    "counter": 1,
    "timestamp": "2024-01-01T00:00:00Z"
  }
}
\`\`\`

## Best Practices

### 1. Use Semantic Roles

Always assign semantic roles when the block's purpose is known:

\`\`\`rust
// Good - clear purpose
let intro = Block::new(Content::text("..."), Some("intro.hook"));
let code = Block::new(Content::code("rust", "..."), Some("code"));

// Less ideal - no semantic information
let block = Block::new(Content::text("..."), None);
\`\`\`

### 2. Use Labels for Unique References

Labels provide human-readable identifiers:

\`\`\`rust
let block = Block::new(Content::text("Important"), None)
    .with_label("main-warning");

// Later, find by label
let id = doc.indices.find_by_label("main-warning");
\`\`\`

### 3. Use Tags for Categories

Tags enable filtering and grouping:

\`\`\`rust
let block = Block::new(Content::text("..."), None)
    .with_tag("draft")
    .with_tag("needs-review")
    .with_tag("chapter-1");

// Find all drafts
let drafts = doc.indices.find_by_tag("draft");
\`\`\`

### 4. Leverage Content Types

Use the appropriate content type for your data:

\`\`\`rust
// Text for prose
Content::text("A paragraph of text...")

// Code for source code
Content::code("python", "def hello(): pass")

// Table for structured data
Content::table(vec![...])

// JSON for structured configuration
Content::json(serde_json::json!({...}))
\`\`\`

## See Also

- [Content Types](./content-types.md) - All content variants
- [Metadata](./metadata.md) - Block metadata details
- [ID Generation](./id-generation.md) - How block IDs work
- [Edges](./edges.md) - Block relationships
`,__vite_glob_0_17=`# Content Types

UCM supports rich, typed content through the \`Content\` enum. Each variant is optimized for its specific use case.

## Content Enum

\`\`\`rust
pub enum Content {
    Text(Text),
    Table(Table),
    Code(Code),
    Math(Math),
    Media(Media),
    Json { value: serde_json::Value, schema: Option<JsonSchema> },
    Binary { mime_type: String, data: Vec<u8>, encoding: BinaryEncoding },
    Composite { layout: CompositeLayout, children: Vec<BlockId> },
}
\`\`\`

## Text Content

For plain text, markdown, or rich text content.

### Structure

\`\`\`rust
pub struct Text {
    pub text: String,
    pub format: TextFormat,
}

pub enum TextFormat {
    Plain,    // Default
    Markdown,
    Rich,
}
\`\`\`

### Creating Text Content

\`\`\`rust
use ucm_core::Content;

// Plain text (default)
let plain = Content::text("Hello, world!");

// Markdown text
let markdown = Content::markdown("**Bold** and *italic* text");

// Direct construction
use ucm_core::content::{Text, TextFormat};
let rich = Content::Text(Text {
    text: "Rich text content".to_string(),
    format: TextFormat::Rich,
});
\`\`\`

### Properties

\`\`\`rust
let content = Content::text("Hello");

// Type tag for identification
assert_eq!(content.type_tag(), "text");

// Check if empty
assert!(!content.is_empty());

// Size in bytes
let size = content.size_bytes();
\`\`\`

## Code Content

For source code with language hints and optional line highlights.

### Structure

\`\`\`rust
pub struct Code {
    pub language: String,
    pub source: String,
    pub highlights: Vec<LineRange>,
}

pub struct LineRange {
    pub start: usize,
    pub end: usize,
}
\`\`\`

### Creating Code Content

\`\`\`rust
use ucm_core::Content;
use ucm_core::content::{Code, LineRange};

// Simple creation
let code = Content::code("rust", r#"
fn main() {
    println!("Hello, world!");
}
"#);

// With highlights
let code = Content::Code(Code {
    language: "python".to_string(),
    source: "def hello():\\n    print('Hello')\\n\\nhello()".to_string(),
    highlights: vec![
        LineRange::new(1, 2),  // Highlight lines 1-2
        LineRange::single(4),   // Highlight line 4
    ],
});
\`\`\`

### Code Operations

\`\`\`rust
use ucm_core::content::Code;

let code = Code::new("rust", "line1\\nline2\\nline3\\nline4");

// Line count
assert_eq!(code.line_count(), 4);

// Extract lines (1-indexed)
let lines = code.get_lines(2, 3);
assert_eq!(lines, Some("line2\\nline3".to_string()));
\`\`\`

## Table Content

For tabular data with optional schema.

### Structure

\`\`\`rust
pub struct Table {
    pub columns: Vec<Column>,
    pub rows: Vec<Row>,
    pub schema: Option<TableSchema>,
}

pub struct Column {
    pub name: String,
    pub data_type: Option<DataType>,
    pub nullable: bool,
}

pub struct Row {
    pub cells: Vec<Cell>,
}

pub enum Cell {
    Null,
    Text(String),
    Number(f64),
    Boolean(bool),
    Date(String),
    DateTime(String),
    Json(serde_json::Value),
}

pub enum DataType {
    Text,
    Integer,
    Float,
    Boolean,
    Date,
    DateTime,
    Json,
}
\`\`\`

### Creating Tables

\`\`\`rust
use ucm_core::Content;
use ucm_core::content::{Table, Column, Row, Cell, DataType};

// Simple table from string rows
let table = Content::table(vec![
    vec!["Name".into(), "Age".into(), "City".into()],
    vec!["Alice".into(), "30".into(), "NYC".into()],
    vec!["Bob".into(), "25".into(), "LA".into()],
]);

// Typed table with schema
let mut table = Table::new(vec![
    Column::new("name").with_type(DataType::Text).not_null(),
    Column::new("age").with_type(DataType::Integer),
    Column::new("active").with_type(DataType::Boolean),
]);

table.add_row(Row::new(vec![
    Cell::Text("Alice".into()),
    Cell::Number(30.0),
    Cell::Boolean(true),
]));

table.add_row(Row::from_strings(vec!["Bob", "25", "false"]));

let content = Content::Table(table);
\`\`\`

### Table Operations

\`\`\`rust
let table = Table::new(vec![
    Column::new("col1"),
    Column::new("col2"),
]);

assert_eq!(table.column_count(), 2);
assert_eq!(table.row_count(), 0);
\`\`\`

### Table Schema

\`\`\`rust
use ucm_core::content::{TableSchema, Constraint, IndexDef};

let schema = TableSchema {
    primary_key: Some(vec!["id".to_string()]),
    constraints: vec![
        Constraint::Unique { columns: vec!["email".to_string()] },
        Constraint::Check { expression: "age >= 0".to_string() },
    ],
    indices: vec![
        IndexDef {
            name: "idx_name".to_string(),
            columns: vec!["name".to_string()],
            unique: false,
        },
    ],
};
\`\`\`

## Math Content

For mathematical expressions in various formats.

### Structure

\`\`\`rust
pub struct Math {
    pub format: MathFormat,
    pub expression: String,
    pub display_mode: bool,
}

pub enum MathFormat {
    LaTeX,     // Default
    MathML,
    AsciiMath,
}
\`\`\`

### Creating Math Content

\`\`\`rust
use ucm_core::content::Math;
use ucm_core::Content;

// LaTeX (inline)
let inline = Content::Math(Math::latex("E = mc^2"));

// LaTeX (display mode)
let display = Content::Math(Math::latex(r"\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}").display());

// MathML
let mathml = Content::Math(Math {
    format: ucm_core::content::MathFormat::MathML,
    expression: "<math>...</math>".to_string(),
    display_mode: false,
});
\`\`\`

## Media Content

For images, audio, video, and documents.

### Structure

\`\`\`rust
pub struct Media {
    pub media_type: MediaType,
    pub source: MediaSource,
    pub alt_text: Option<String>,
    pub dimensions: Option<Dimensions>,
    pub content_hash: Option<[u8; 32]>,
}

pub enum MediaType {
    Image,
    Audio,
    Video,
    Document,
}

pub enum MediaSource {
    Url(String),
    Base64(String),
    Reference(BlockId),
    External(ExternalRef),
}

pub struct ExternalRef {
    pub provider: String,
    pub bucket: String,
    pub key: String,
    pub region: Option<String>,
}

pub struct Dimensions {
    pub width: u32,
    pub height: u32,
}
\`\`\`

### Creating Media Content

\`\`\`rust
use ucm_core::content::{Media, MediaSource};
use ucm_core::Content;

// Image from URL
let image = Content::Media(
    Media::image(MediaSource::url("https://example.com/image.png"))
        .with_alt("Example image")
        .with_dimensions(800, 600)
);

// Image from base64
let image = Content::Media(
    Media::image(MediaSource::Base64("iVBORw0KGgo...".to_string()))
);

// External storage reference
use ucm_core::content::ExternalRef;
let image = Content::Media(Media {
    media_type: ucm_core::content::MediaType::Image,
    source: MediaSource::External(ExternalRef {
        provider: "s3".to_string(),
        bucket: "my-bucket".to_string(),
        key: "images/photo.jpg".to_string(),
        region: Some("us-east-1".to_string()),
    }),
    alt_text: Some("Photo".to_string()),
    dimensions: None,
    content_hash: None,
});
\`\`\`

## JSON Content

For structured JSON data with optional schema validation.

### Structure

\`\`\`rust
pub enum JsonSchema {
    Uri(String),           // Reference to external schema
    Inline(serde_json::Value),  // Embedded schema
}
\`\`\`

### Creating JSON Content

\`\`\`rust
use ucm_core::Content;
use ucm_core::content::JsonSchema;

// Simple JSON
let json = Content::json(serde_json::json!({
    "name": "Alice",
    "age": 30,
    "tags": ["developer", "rust"]
}));

// JSON with schema reference
let json = Content::Json {
    value: serde_json::json!({"type": "user", "id": 123}),
    schema: Some(JsonSchema::Uri("https://example.com/schemas/user.json".to_string())),
};

// JSON with inline schema
let json = Content::Json {
    value: serde_json::json!({"count": 42}),
    schema: Some(JsonSchema::Inline(serde_json::json!({
        "type": "object",
        "properties": {
            "count": {"type": "integer"}
        }
    }))),
};
\`\`\`

## Binary Content

For raw binary data with MIME type.

### Structure

\`\`\`rust
pub enum BinaryEncoding {
    Raw,     // Default
    Base64,
    Hex,
}
\`\`\`

### Creating Binary Content

\`\`\`rust
use ucm_core::Content;
use ucm_core::content::BinaryEncoding;

let binary = Content::Binary {
    mime_type: "application/pdf".to_string(),
    data: vec![0x25, 0x50, 0x44, 0x46], // PDF magic bytes
    encoding: BinaryEncoding::Raw,
};
\`\`\`

## Composite Content

For blocks that contain references to other blocks.

### Structure

\`\`\`rust
pub enum CompositeLayout {
    Vertical,   // Default - stack vertically
    Horizontal, // Side by side
    Grid(usize), // Grid with N columns
    Tabs,       // Tabbed interface
}
\`\`\`

### Creating Composite Content

\`\`\`rust
use ucm_core::Content;
use ucm_core::content::CompositeLayout;
use ucm_core::BlockId;

let composite = Content::Composite {
    layout: CompositeLayout::Grid(2),
    children: vec![
        child1_id,
        child2_id,
        child3_id,
        child4_id,
    ],
};
\`\`\`

## Content Operations

### Type Identification

\`\`\`rust
let content = Content::code("rust", "fn main() {}");
assert_eq!(content.type_tag(), "code");
\`\`\`

### Empty Check

\`\`\`rust
assert!(Content::text("").is_empty());
assert!(!Content::text("hello").is_empty());
assert!(Content::table(vec![]).is_empty());
\`\`\`

### Size Estimation

\`\`\`rust
let content = Content::text("Hello, world!");
let bytes = content.size_bytes();
\`\`\`

## Serialization

All content types serialize to JSON with a \`type\` discriminator:

\`\`\`json
// Text
{
  "type": "text",
  "text": "Hello, world!",
  "format": "plain"
}

// Code
{
  "type": "code",
  "language": "rust",
  "source": "fn main() {}",
  "highlights": []
}

// Table
{
  "type": "table",
  "columns": [{"name": "col1", "nullable": true}],
  "rows": [{"cells": ["value"]}]
}
\`\`\`

## Best Practices

### 1. Choose the Right Type

\`\`\`rust
// Use Text for prose
Content::text("A paragraph of explanation...")

// Use Code for source code (enables syntax highlighting)
Content::code("python", "def hello(): pass")

// Use Table for structured data (enables querying)
Content::table(vec![...])

// Use JSON for configuration/metadata
Content::json(serde_json::json!({...}))
\`\`\`

### 2. Use Markdown for Rich Text

\`\`\`rust
// Prefer markdown for formatted text
Content::markdown("**Important**: This is *emphasized*")

// Rather than plain text with formatting lost
Content::text("Important: This is emphasized")
\`\`\`

### 3. Include Language Hints for Code

\`\`\`rust
// Good - enables syntax highlighting and analysis
Content::code("typescript", "const x: number = 42;")

// Less ideal - no language information
Content::code("", "const x = 42")
\`\`\`

### 4. Provide Alt Text for Media

\`\`\`rust
Media::image(MediaSource::url("..."))
    .with_alt("Diagram showing system architecture")
\`\`\`

## See Also

- [Blocks](./blocks.md) - Block structure
- [Metadata](./metadata.md) - Content metadata
- [ID Generation](./id-generation.md) - Content-addressed IDs
`,__vite_glob_0_18=`# Documents

A **Document** is a collection of blocks organized in a hierarchical tree structure. It provides the container for content and manages relationships between blocks.

## Document Structure

\`\`\`rust
pub struct Document {
    /// Document identifier
    pub id: DocumentId,
    
    /// Root block ID
    pub root: BlockId,
    
    /// Adjacency map: parent -> ordered children
    pub structure: HashMap<BlockId, Vec<BlockId>>,
    
    /// All blocks in the document
    pub blocks: HashMap<BlockId, Block>,
    
    /// Document-level metadata
    pub metadata: DocumentMetadata,
    
    /// Secondary indices for fast lookup
    pub indices: DocumentIndices,
    
    /// Edge index for relationship traversal
    pub edge_index: EdgeIndex,
    
    /// Document version for concurrency control
    pub version: DocumentVersion,
}
\`\`\`

## Creating Documents

### Basic Creation

\`\`\`rust
use ucm_core::{Document, DocumentId};

// With specific ID
let doc = Document::new(DocumentId::new("my-document"));

// With auto-generated ID
let doc = Document::create();

println!("Document ID: {}", doc.id);
println!("Root block: {}", doc.root);
println!("Block count: {}", doc.block_count()); // 1 (root)
\`\`\`

### With Metadata

\`\`\`rust
use ucm_core::{Document, DocumentMetadata};

let metadata = DocumentMetadata::new()
    .with_title("My Document");

let doc = Document::create()
    .with_metadata(metadata);
\`\`\`

## Document Metadata

\`\`\`rust
pub struct DocumentMetadata {
    pub title: Option<String>,
    pub description: Option<String>,
    pub authors: Vec<String>,
    pub created_at: DateTime<Utc>,
    pub modified_at: DateTime<Utc>,
    pub language: Option<String>,  // ISO 639-1
    pub custom: HashMap<String, serde_json::Value>,
}
\`\`\`

### Working with Metadata

\`\`\`rust
let mut metadata = DocumentMetadata::new()
    .with_title("Technical Specification");

metadata.authors.push("Alice".to_string());
metadata.language = Some("en".to_string());
metadata.custom.insert(
    "version".to_string(),
    serde_json::json!("1.0.0")
);

// Update modification time
metadata.touch();
\`\`\`

## Adding Blocks

### Basic Addition

\`\`\`rust
use ucm_core::{Document, Block, Content};

let mut doc = Document::create();
let root = doc.root.clone();

// Add block as child of root
let block = Block::new(Content::text("Hello"), Some("intro"));
let block_id = doc.add_block(block, &root).unwrap();

// Add block at specific position
let block2 = Block::new(Content::text("First!"), Some("intro"));
let block2_id = doc.add_block_at(block2, &root, 0).unwrap(); // Insert at beginning
\`\`\`

### Building Hierarchies

\`\`\`rust
let mut doc = Document::create();
let root = doc.root.clone();

// Create chapter
let chapter = Block::new(Content::text("Chapter 1"), Some("heading1"));
let chapter_id = doc.add_block(chapter, &root).unwrap();

// Add sections under chapter
let section1 = Block::new(Content::text("Section 1.1"), Some("heading2"));
let section1_id = doc.add_block(section1, &chapter_id).unwrap();

let section2 = Block::new(Content::text("Section 1.2"), Some("heading2"));
let section2_id = doc.add_block(section2, &chapter_id).unwrap();

// Add content under section
let para = Block::new(Content::text("Paragraph content..."), Some("paragraph"));
doc.add_block(para, &section1_id).unwrap();
\`\`\`

## Querying Documents

### Get Block by ID

\`\`\`rust
// Immutable reference
if let Some(block) = doc.get_block(&block_id) {
    println!("Content type: {}", block.content_type());
}

// Mutable reference
if let Some(block) = doc.get_block_mut(&block_id) {
    block.metadata.tags.push("modified".to_string());
}
\`\`\`

### Get Children

\`\`\`rust
let children: &[BlockId] = doc.children(&parent_id);
for child_id in children {
    let child = doc.get_block(child_id).unwrap();
    println!("Child: {}", child_id);
}
\`\`\`

### Get Parent

\`\`\`rust
if let Some(parent_id) = doc.parent(&child_id) {
    println!("Parent: {}", parent_id);
}
\`\`\`

### Get Descendants

\`\`\`rust
// Get all descendants (recursive)
let descendants: Vec<BlockId> = doc.descendants(&block_id);
println!("Block has {} descendants", descendants.len());
\`\`\`

### Check Ancestry

\`\`\`rust
// Check if block_a is an ancestor of block_b
if doc.is_ancestor(&block_a, &block_b) {
    println!("block_a is an ancestor of block_b");
}
\`\`\`

## Secondary Indices

Documents maintain indices for fast lookup:

\`\`\`rust
pub struct DocumentIndices {
    pub by_tag: HashMap<String, HashSet<BlockId>>,
    pub by_role: HashMap<String, HashSet<BlockId>>,
    pub by_content_type: HashMap<String, HashSet<BlockId>>,
    pub by_label: HashMap<String, BlockId>,
}
\`\`\`

### Find by Tag

\`\`\`rust
let important_blocks = doc.indices.find_by_tag("important");
for block_id in important_blocks {
    println!("Important block: {}", block_id);
}
\`\`\`

### Find by Content Type

\`\`\`rust
let code_blocks = doc.indices.find_by_type("code");
let text_blocks = doc.indices.find_by_type("text");
let table_blocks = doc.indices.find_by_type("table");
\`\`\`

### Find by Label

\`\`\`rust
if let Some(block_id) = doc.indices.find_by_label("main-content") {
    let block = doc.get_block(&block_id).unwrap();
    // ...
}
\`\`\`

### Rebuild Indices

After bulk modifications, rebuild indices:

\`\`\`rust
doc.rebuild_indices();
\`\`\`

## Moving Blocks

### Move to New Parent

\`\`\`rust
// Move block to end of new parent's children
doc.move_block(&block_id, &new_parent_id).unwrap();

// Move to specific position
doc.move_block_at(&block_id, &new_parent_id, 0).unwrap(); // First position
\`\`\`

### Cycle Detection

Moving a block to one of its descendants is prevented:

\`\`\`rust
let result = doc.move_block(&parent_id, &child_id);
assert!(result.is_err()); // CycleDetected error
\`\`\`

## Deleting Blocks

### Delete Single Block

\`\`\`rust
// Delete block (children become orphaned)
let deleted_block = doc.delete_block(&block_id).unwrap();
\`\`\`

### Delete with Cascade

\`\`\`rust
// Delete block and all descendants
let deleted_blocks = doc.delete_cascade(&block_id).unwrap();
println!("Deleted {} blocks", deleted_blocks.len());
\`\`\`

### Remove from Structure Only

\`\`\`rust
// Remove from tree but keep in document (orphan)
doc.remove_from_structure(&block_id);

// Block is now orphaned but still exists
assert!(doc.get_block(&block_id).is_some());
assert!(!doc.is_reachable(&block_id));
\`\`\`

## Orphan Management

### Find Orphans

\`\`\`rust
let orphans = doc.find_orphans();
for orphan_id in &orphans {
    println!("Orphaned block: {}", orphan_id);
}
\`\`\`

### Check Reachability

\`\`\`rust
if doc.is_reachable(&block_id) {
    println!("Block is reachable from root");
} else {
    println!("Block is orphaned");
}
\`\`\`

### Prune Orphans

\`\`\`rust
// Remove all unreachable blocks
let pruned = doc.prune_unreachable();
println!("Pruned {} orphaned blocks", pruned.len());
\`\`\`

### Block State

\`\`\`rust
use ucm_core::block::BlockState;

let state = doc.block_state(&block_id);
match state {
    BlockState::Live => println!("Reachable from root"),
    BlockState::Orphaned => println!("Exists but unreachable"),
    BlockState::Deleted => println!("Not in document"),
}
\`\`\`

## Validation

### Validate Document

\`\`\`rust
let issues = doc.validate();

for issue in &issues {
    match issue.severity {
        ValidationSeverity::Error => eprintln!("ERROR: {}", issue.message),
        ValidationSeverity::Warning => println!("WARNING: {}", issue.message),
        ValidationSeverity::Info => println!("INFO: {}", issue.message),
    }
}

if issues.iter().any(|i| i.severity == ValidationSeverity::Error) {
    println!("Document has errors!");
}
\`\`\`

### Validation Checks

The validator checks for:
- **Cycles** in document structure
- **Orphaned blocks** (warning)
- **Dangling references** (edges to non-existent blocks)
- **Invalid structure** (references to missing blocks)

## Token Estimation

\`\`\`rust
use ucm_core::metadata::TokenModel;

// Total tokens for the document
let gpt4_tokens = doc.total_tokens(TokenModel::GPT4);
let claude_tokens = doc.total_tokens(TokenModel::Claude);

println!("GPT-4 tokens: {}", gpt4_tokens);
println!("Claude tokens: {}", claude_tokens);
\`\`\`

## Edge Index

The document maintains an edge index for relationship traversal:

\`\`\`rust
// Get outgoing edges from a block
let outgoing = doc.edge_index.outgoing_from(&block_id);
for (edge_type, target) in outgoing {
    println!("{} -> {} ({:?})", block_id, target, edge_type);
}

// Get incoming edges to a block
let incoming = doc.edge_index.incoming_to(&block_id);

// Check if edge exists
let has_ref = doc.edge_index.has_edge(&source, &target, &EdgeType::References);

// Get edges of specific type
let refs = doc.edge_index.outgoing_of_type(&block_id, &EdgeType::References);
\`\`\`

## Complete Example

\`\`\`rust
use ucm_core::{Document, DocumentMetadata, Block, Content, Edge, EdgeType};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create document with metadata
    let metadata = DocumentMetadata::new()
        .with_title("Technical Guide");
    
    let mut doc = Document::create().with_metadata(metadata);
    let root = doc.root.clone();
    
    // Build structure
    let intro = Block::new(Content::text("Introduction"), Some("heading1"))
        .with_label("intro");
    let intro_id = doc.add_block(intro, &root)?;
    
    let overview = Block::new(
        Content::text("This guide covers..."),
        Some("paragraph")
    );
    let overview_id = doc.add_block(overview, &intro_id)?;
    
    let chapter1 = Block::new(Content::text("Getting Started"), Some("heading1"))
        .with_label("chapter-1");
    let chapter1_id = doc.add_block(chapter1, &root)?;
    
    let code_example = Block::new(
        Content::code("rust", "fn main() {\\n    println!(\\"Hello!\\");\\n}"),
        Some("code")
    ).with_tag("example");
    let code_id = doc.add_block(code_example, &chapter1_id)?;
    
    // Add reference from overview to code
    let edge = Edge::new(EdgeType::References, code_id.clone());
    doc.get_block_mut(&overview_id).unwrap().add_edge(edge.clone());
    doc.edge_index.add_edge(&overview_id, &edge);
    
    // Query document
    println!("Total blocks: {}", doc.block_count());
    println!("Code blocks: {}", doc.indices.find_by_type("code").len());
    println!("Example blocks: {}", doc.indices.find_by_tag("example").len());
    
    // Find by label
    if let Some(id) = doc.indices.find_by_label("chapter-1") {
        println!("Found chapter-1: {}", id);
    }
    
    // Validate
    let issues = doc.validate();
    if issues.is_empty() {
        println!("Document is valid!");
    }
    
    // Check structure
    let intro_children = doc.children(&intro_id);
    println!("Intro has {} children", intro_children.len());
    
    Ok(())
}
\`\`\`

## Best Practices

### 1. Use Meaningful Document IDs

\`\`\`rust
// Good - descriptive
Document::new(DocumentId::new("user-guide-v2"))
Document::new(DocumentId::new("api-spec-2024-01"))

// Less ideal - generic
Document::create() // Auto-generated ID
\`\`\`

### 2. Maintain Document Metadata

\`\`\`rust
let mut doc = Document::create();
doc.metadata.title = Some("Important Document".to_string());
doc.metadata.authors.push("Author Name".to_string());
doc.metadata.language = Some("en".to_string());
\`\`\`

### 3. Use Labels for Key Blocks

\`\`\`rust
let toc = Block::new(Content::text("Table of Contents"), Some("toc"))
    .with_label("table-of-contents");

// Later, find easily
let toc_id = doc.indices.find_by_label("table-of-contents");
\`\`\`

### 4. Validate After Bulk Operations

\`\`\`rust
// After many modifications
doc.rebuild_indices();
let issues = doc.validate();
\`\`\`

### 5. Clean Up Orphans

\`\`\`rust
// Periodically or before serialization
doc.prune_unreachable();
\`\`\`

## See Also

- [Blocks](./blocks.md) - Block structure
- [Edges](./edges.md) - Relationship management
- [Metadata](./metadata.md) - Document and block metadata
`,__vite_glob_0_19=`# Edges

**Edges** represent explicit relationships between blocks. They enable rich semantic connections beyond the basic parent-child hierarchy.

## Edge Structure

\`\`\`rust
pub struct Edge {
    /// Type of relationship
    pub edge_type: EdgeType,
    
    /// Target block
    pub target: BlockId,
    
    /// Edge-specific metadata
    pub metadata: EdgeMetadata,
    
    /// When the edge was created
    pub created_at: DateTime<Utc>,
}
\`\`\`

## Creating Edges

### Basic Creation

\`\`\`rust
use ucm_core::{Edge, EdgeType, BlockId};

let target_id = BlockId::from_bytes([1u8; 12]);

// Simple edge
let edge = Edge::new(EdgeType::References, target_id);
\`\`\`

### With Metadata

\`\`\`rust
let edge = Edge::new(EdgeType::References, target_id)
    .with_confidence(0.95)
    .with_description("Important reference to supporting evidence");
\`\`\`

### With Custom Metadata

\`\`\`rust
use ucm_core::edge::EdgeMetadata;

let metadata = EdgeMetadata::new()
    .with_confidence(0.8)
    .with_description("Derived from original source")
    .with_custom("source_version", serde_json::json!("1.0"));

let edge = Edge::new(EdgeType::DerivedFrom, target_id)
    .with_metadata(metadata);
\`\`\`

## Edge Types

### Derivation Relationships

Track content provenance and transformations:

| Type | Description | Inverse |
|------|-------------|---------|
| \`DerivedFrom\` | Block was created from another | - |
| \`Supersedes\` | Block replaces another | - |
| \`TransformedFrom\` | Block is a transformation of another | - |

\`\`\`rust
// Mark block as derived from another
let edge = Edge::new(EdgeType::DerivedFrom, original_id);

// Mark block as superseding (replacing) another
let edge = Edge::new(EdgeType::Supersedes, old_version_id);

// Mark as transformation (e.g., summary, translation)
let edge = Edge::new(EdgeType::TransformedFrom, source_id);
\`\`\`

### Reference Relationships

Track citations and links:

| Type | Description | Inverse |
|------|-------------|---------|
| \`References\` | Block references another | \`CitedBy\` |
| \`CitedBy\` | Inverse of References (auto-maintained) | \`References\` |
| \`LinksTo\` | Hyperlink relationship | - |

\`\`\`rust
// Add a reference
let edge = Edge::new(EdgeType::References, cited_block_id);

// The edge index automatically maintains the inverse CitedBy relationship
\`\`\`

### Semantic Relationships

Express meaning and argumentation:

| Type | Description | Inverse |
|------|-------------|---------|
| \`Supports\` | Provides evidence for | - |
| \`Contradicts\` | Contradicts (symmetric) | \`Contradicts\` |
| \`Elaborates\` | Expands on | - |
| \`Summarizes\` | Summarizes | - |

\`\`\`rust
// Evidence supports a claim
let edge = Edge::new(EdgeType::Supports, claim_id)
    .with_confidence(0.9);

// Two blocks contradict each other
let edge = Edge::new(EdgeType::Contradicts, other_id);

// Block elaborates on another
let edge = Edge::new(EdgeType::Elaborates, topic_id);

// Block summarizes another
let edge = Edge::new(EdgeType::Summarizes, detailed_id);
\`\`\`

### Structural Relationships

Auto-maintained from document structure:

| Type | Description | Inverse |
|------|-------------|---------|
| \`ParentOf\` | Structural parent | \`ChildOf\` |
| \`ChildOf\` | Structural child | \`ParentOf\` |
| \`SiblingOf\` | Same parent (symmetric) | \`SiblingOf\` |
| \`PreviousSibling\` | Immediate previous sibling | \`NextSibling\` |
| \`NextSibling\` | Immediate next sibling | \`PreviousSibling\` |

\`\`\`rust
// These are typically auto-maintained by the document structure
// but can be queried via the edge index
\`\`\`

### Version Relationships

Track versions and alternatives:

| Type | Description | Inverse |
|------|-------------|---------|
| \`VersionOf\` | Different version of same logical content | - |
| \`AlternativeOf\` | Alternative representation | - |
| \`TranslationOf\` | Translation to different language | - |

\`\`\`rust
// Mark as version of another
let edge = Edge::new(EdgeType::VersionOf, original_id);

// Mark as alternative (e.g., different format)
let edge = Edge::new(EdgeType::AlternativeOf, primary_id);

// Mark as translation
let edge = Edge::new(EdgeType::TranslationOf, source_id)
    .with_metadata(EdgeMetadata::new()
        .with_custom("source_language", serde_json::json!("en"))
        .with_custom("target_language", serde_json::json!("es")));
\`\`\`

### Custom Relationships

Define your own relationship types:

\`\`\`rust
let edge = Edge::new(
    EdgeType::Custom("implements".to_string()),
    interface_id
);
\`\`\`

## Edge Type Properties

### Inverse Relationships

\`\`\`rust
let edge_type = EdgeType::References;
let inverse = edge_type.inverse();
assert_eq!(inverse, Some(EdgeType::CitedBy));

let edge_type = EdgeType::DerivedFrom;
let inverse = edge_type.inverse();
assert_eq!(inverse, None); // No automatic inverse
\`\`\`

### Symmetric Relationships

\`\`\`rust
assert!(EdgeType::Contradicts.is_symmetric());
assert!(EdgeType::SiblingOf.is_symmetric());
assert!(!EdgeType::References.is_symmetric());
\`\`\`

### Structural Relationships

\`\`\`rust
assert!(EdgeType::ParentOf.is_structural());
assert!(EdgeType::ChildOf.is_structural());
assert!(!EdgeType::References.is_structural());
\`\`\`

### Parsing from String

\`\`\`rust
let edge_type = EdgeType::from_str("references").unwrap();
assert_eq!(edge_type, EdgeType::References);

let custom = EdgeType::from_str("custom:my_type").unwrap();
assert_eq!(custom, EdgeType::Custom("my_type".to_string()));
\`\`\`

### Converting to String

\`\`\`rust
let s = EdgeType::References.as_str();
assert_eq!(s, "references");

let s = EdgeType::Custom("my_type".to_string()).as_str();
assert_eq!(s, "custom:my_type");
\`\`\`

## Edge Metadata

\`\`\`rust
pub struct EdgeMetadata {
    /// Confidence score (0.0 - 1.0) for inferred relationships
    pub confidence: Option<f32>,
    
    /// Human-readable description
    pub description: Option<String>,
    
    /// Custom key-value pairs
    pub custom: HashMap<String, serde_json::Value>,
}
\`\`\`

### Working with Metadata

\`\`\`rust
use ucm_core::edge::EdgeMetadata;

let metadata = EdgeMetadata::new()
    .with_confidence(0.85)
    .with_description("Inferred from content similarity")
    .with_custom("similarity_score", serde_json::json!(0.92))
    .with_custom("method", serde_json::json!("cosine"));

// Check if empty
assert!(!metadata.is_empty());
\`\`\`

## Edge Index

The \`EdgeIndex\` provides efficient bidirectional traversal of relationships.

### Structure

\`\`\`rust
pub struct EdgeIndex {
    /// Outgoing edges: source -> [(type, target)]
    outgoing: HashMap<BlockId, Vec<(EdgeType, BlockId)>>,
    
    /// Incoming edges: target -> [(type, source)]
    incoming: HashMap<BlockId, Vec<(EdgeType, BlockId)>>,
}
\`\`\`

### Adding Edges

\`\`\`rust
use ucm_core::edge::EdgeIndex;

let mut index = EdgeIndex::new();
let source = BlockId::from_bytes([1u8; 12]);
let target = BlockId::from_bytes([2u8; 12]);

let edge = Edge::new(EdgeType::References, target.clone());
index.add_edge(&source, &edge);

// Inverse relationship is automatically maintained
\`\`\`

### Querying Edges

\`\`\`rust
// Get all outgoing edges from a block
let outgoing = index.outgoing_from(&source);
for (edge_type, target) in outgoing {
    println!("{:?} -> {}", edge_type, target);
}

// Get all incoming edges to a block
let incoming = index.incoming_to(&target);
for (edge_type, source) in incoming {
    println!("{} <- {:?}", source, edge_type);
}

// Get edges of specific type
let refs = index.outgoing_of_type(&source, &EdgeType::References);
let cited_by = index.incoming_of_type(&target, &EdgeType::CitedBy);

// Check if edge exists
let exists = index.has_edge(&source, &target, &EdgeType::References);
\`\`\`

### Removing Edges

\`\`\`rust
// Remove specific edge
index.remove_edge(&source, &target, &EdgeType::References);

// Remove all edges involving a block
index.remove_block(&block_id);

// Clear all edges
index.clear();
\`\`\`

### Statistics

\`\`\`rust
let count = index.edge_count();
println!("Total edges: {}", count);
\`\`\`

## Working with Edges in Documents

### Adding Edges to Blocks

\`\`\`rust
use ucm_core::{Document, Block, Content, Edge, EdgeType};

let mut doc = Document::create();
let root = doc.root.clone();

// Create blocks
let source = Block::new(Content::text("Source"), None);
let source_id = doc.add_block(source, &root).unwrap();

let target = Block::new(Content::text("Target"), None);
let target_id = doc.add_block(target, &root).unwrap();

// Add edge to source block
let edge = Edge::new(EdgeType::References, target_id.clone());
doc.get_block_mut(&source_id).unwrap().add_edge(edge.clone());

// Update document's edge index
doc.edge_index.add_edge(&source_id, &edge);
\`\`\`

### Querying Edges via Document

\`\`\`rust
// Find all blocks that reference a target
let referencing = doc.edge_index.incoming_of_type(&target_id, &EdgeType::CitedBy);

// Find all blocks referenced by a source
let referenced = doc.edge_index.outgoing_of_type(&source_id, &EdgeType::References);

// Check relationship
if doc.edge_index.has_edge(&source_id, &target_id, &EdgeType::References) {
    println!("Source references Target");
}
\`\`\`

### Removing Edges from Blocks

\`\`\`rust
// Remove from block
let removed = doc.get_block_mut(&source_id)
    .unwrap()
    .remove_edge(&target_id, &EdgeType::References);

// Update index
if removed {
    doc.edge_index.remove_edge(&source_id, &target_id, &EdgeType::References);
}
\`\`\`

## Complete Example

\`\`\`rust
use ucm_core::{Document, Block, Content, Edge, EdgeType};
use ucm_core::edge::EdgeMetadata;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Create a claim
    let claim = Block::new(
        Content::text("Rust is memory safe"),
        Some("body.argument")
    ).with_label("main-claim");
    let claim_id = doc.add_block(claim, &root)?;
    
    // Create evidence
    let evidence1 = Block::new(
        Content::text("The borrow checker prevents data races"),
        Some("body.evidence")
    );
    let evidence1_id = doc.add_block(evidence1, &root)?;
    
    let evidence2 = Block::new(
        Content::text("No null pointer dereferences"),
        Some("body.evidence")
    );
    let evidence2_id = doc.add_block(evidence2, &root)?;
    
    // Create counterargument
    let counter = Block::new(
        Content::text("Unsafe blocks can bypass safety"),
        Some("body.counterargument")
    );
    let counter_id = doc.add_block(counter, &root)?;
    
    // Add relationships
    // Evidence supports claim
    let edge1 = Edge::new(EdgeType::Supports, claim_id.clone())
        .with_confidence(0.95);
    doc.get_block_mut(&evidence1_id).unwrap().add_edge(edge1.clone());
    doc.edge_index.add_edge(&evidence1_id, &edge1);
    
    let edge2 = Edge::new(EdgeType::Supports, claim_id.clone())
        .with_confidence(0.90);
    doc.get_block_mut(&evidence2_id).unwrap().add_edge(edge2.clone());
    doc.edge_index.add_edge(&evidence2_id, &edge2);
    
    // Counterargument contradicts claim
    let edge3 = Edge::new(EdgeType::Contradicts, claim_id.clone())
        .with_confidence(0.7)
        .with_description("Partial contradiction - unsafe exists but is explicit");
    doc.get_block_mut(&counter_id).unwrap().add_edge(edge3.clone());
    doc.edge_index.add_edge(&counter_id, &edge3);
    
    // Query relationships
    println!("Blocks supporting the claim:");
    let supporters = doc.edge_index.incoming_of_type(&claim_id, &EdgeType::Supports);
    for supporter_id in supporters {
        let block = doc.get_block(&supporter_id).unwrap();
        if let Content::Text(text) = &block.content {
            println!("  - {}", text.text);
        }
    }
    
    println!("\\nBlocks contradicting the claim:");
    let contradictors = doc.edge_index.incoming_of_type(&claim_id, &EdgeType::Contradicts);
    for contradictor_id in contradictors {
        let block = doc.get_block(&contradictor_id).unwrap();
        if let Content::Text(text) = &block.content {
            println!("  - {}", text.text);
        }
    }
    
    println!("\\nTotal edges: {}", doc.edge_index.edge_count());
    
    Ok(())
}
\`\`\`

## Best Practices

### 1. Use Appropriate Edge Types

\`\`\`rust
// Good - semantic meaning is clear
Edge::new(EdgeType::Supports, claim_id)
Edge::new(EdgeType::DerivedFrom, original_id)

// Less ideal - generic reference
Edge::new(EdgeType::References, some_id)
\`\`\`

### 2. Add Confidence for Inferred Relationships

\`\`\`rust
// For relationships inferred by analysis
Edge::new(EdgeType::Supports, claim_id)
    .with_confidence(0.85)

// For explicit relationships, confidence can be omitted or set to 1.0
Edge::new(EdgeType::References, cited_id)
\`\`\`

### 3. Document Relationships

\`\`\`rust
Edge::new(EdgeType::Contradicts, other_id)
    .with_description("Contradicts on the point of performance")
\`\`\`

### 4. Keep Edge Index in Sync

\`\`\`rust
// Always update both block and index
let edge = Edge::new(EdgeType::References, target_id);
block.add_edge(edge.clone());
doc.edge_index.add_edge(&source_id, &edge);

// Same for removal
block.remove_edge(&target_id, &EdgeType::References);
doc.edge_index.remove_edge(&source_id, &target_id, &EdgeType::References);
\`\`\`

### 5. Use Custom Types Sparingly

\`\`\`rust
// Prefer built-in types when they fit
EdgeType::References  // Not Custom("references")

// Use custom only for domain-specific relationships
EdgeType::Custom("implements_interface".to_string())
\`\`\`

## See Also

- [Blocks](./blocks.md) - Block structure
- [Documents](./documents.md) - Document operations
- [UCL Commands](../ucl-parser/commands.md) - LINK/UNLINK commands
`,__vite_glob_0_20=`# ID Generation

Block IDs in UCM are **content-addressed identifiers** with 96-bit collision resistance. This ensures deterministic, reproducible identification of content.

## BlockId Structure

\`\`\`rust
/// Block identifier with 96 bits of entropy (12 bytes).
/// Format: \`blk_<24 hex characters>\`
pub struct BlockId(pub [u8; 12]);
\`\`\`

### Format

- **Prefix**: \`blk_\`
- **Body**: 24 hexadecimal characters (12 bytes)
- **Total length**: 28 characters

\`\`\`
blk_a1b2c3d4e5f6a1b2c3d4e5f6
└─┬─┘└──────────┬──────────┘
prefix    24 hex chars (96 bits)
\`\`\`

## Creating Block IDs

### From Content (Recommended)

\`\`\`rust
use ucm_core::Content;
use ucm_core::id::generate_block_id;

let content = Content::text("Hello, world!");

// Generate deterministic ID
let id = generate_block_id(&content, Some("intro"), None);
println!("{}", id); // blk_a1b2c3d4e5f6...

// Same content + role = same ID
let id2 = generate_block_id(&content, Some("intro"), None);
assert_eq!(id, id2);
\`\`\`

### From Raw Bytes

\`\`\`rust
use ucm_core::BlockId;

let id = BlockId::from_bytes([0x01, 0x02, 0x03, 0x04, 0x05, 0x06,
                               0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c]);
println!("{}", id); // blk_0102030405060708090a0b0c
\`\`\`

### From Hex String

\`\`\`rust
use ucm_core::BlockId;

let id = BlockId::from_hex("a1b2c3d4e5f6a1b2c3d4e5f6").unwrap();
\`\`\`

### Parsing from String

\`\`\`rust
use ucm_core::BlockId;
use std::str::FromStr;

let id: BlockId = "blk_a1b2c3d4e5f6a1b2c3d4e5f6".parse().unwrap();

// Or using FromStr
let id = BlockId::from_str("blk_a1b2c3d4e5f6a1b2c3d4e5f6").unwrap();
\`\`\`

### Root Block ID

\`\`\`rust
use ucm_core::BlockId;

let root = BlockId::root();
assert!(root.is_root());
println!("{}", root); // blk_ff00000000000000000000
\`\`\`

## ID Generation Algorithm

Block IDs are generated by hashing:

1. **Namespace** (optional) - For multi-tenant isolation
2. **Content type** - The type discriminant (text, code, table, etc.)
3. **Semantic role** (optional) - The block's role in the document
4. **Normalized content** - The content after normalization

\`\`\`rust
pub fn generate_block_id(
    content: &Content,
    semantic_role: Option<&str>,
    namespace: Option<&str>,
) -> BlockId {
    let mut hasher = Sha256::new();
    
    // Add namespace if present
    if let Some(ns) = namespace {
        hasher.update(ns.as_bytes());
        hasher.update(b":");
    }
    
    // Add content type discriminant
    hasher.update(content.type_tag().as_bytes());
    hasher.update(b":");
    
    // Add semantic role
    if let Some(role) = semantic_role {
        hasher.update(role.as_bytes());
    }
    hasher.update(b":");
    
    // Add normalized content
    let normalized = normalize_content(content);
    hasher.update(normalized.as_bytes());
    
    // Extract 96 bits from SHA256
    let hash = hasher.finalize();
    let mut id_bytes = [0u8; 12];
    id_bytes.copy_from_slice(&hash[..12]);
    
    BlockId(id_bytes)
}
\`\`\`

## Determinism

IDs are **deterministic** - the same inputs always produce the same ID:

\`\`\`rust
use ucm_core::Content;
use ucm_core::id::generate_block_id;

let content = Content::text("Hello");

// Same content + same role = same ID
let id1 = generate_block_id(&content, Some("intro"), None);
let id2 = generate_block_id(&content, Some("intro"), None);
assert_eq!(id1, id2);

// Different role = different ID
let id3 = generate_block_id(&content, Some("conclusion"), None);
assert_ne!(id1, id3);

// Different content = different ID
let content2 = Content::text("Hello!");
let id4 = generate_block_id(&content2, Some("intro"), None);
assert_ne!(id1, id4);
\`\`\`

## Namespace Isolation

Namespaces enable multi-tenant scenarios:

\`\`\`rust
use ucm_core::Content;
use ucm_core::id::generate_block_id;

let content = Content::text("Hello");

// Different namespaces = different IDs
let id_tenant_a = generate_block_id(&content, None, Some("tenant-a"));
let id_tenant_b = generate_block_id(&content, None, Some("tenant-b"));
assert_ne!(id_tenant_a, id_tenant_b);

// Same namespace = same ID
let id_tenant_a2 = generate_block_id(&content, None, Some("tenant-a"));
assert_eq!(id_tenant_a, id_tenant_a2);
\`\`\`

## ID Generator

For repeated ID generation with consistent configuration:

\`\`\`rust
use ucm_core::id::{IdGenerator, IdGeneratorConfig};
use ucm_core::Content;

// Create generator with configuration
let config = IdGeneratorConfig::new()
    .with_namespace("my-app")
    .with_semantic_role(true);

let generator = IdGenerator::new(config);

// Generate IDs
let content = Content::text("Hello");
let id = generator.generate(&content, Some("intro"));
\`\`\`

### Configuration Options

\`\`\`rust
pub struct IdGeneratorConfig {
    /// Namespace for multi-tenant scenarios
    pub namespace: Option<String>,
    
    /// Whether to include semantic role in hash
    pub include_semantic_role: bool,
}
\`\`\`

## Content Hash

For full content hashing (SHA256):

\`\`\`rust
use ucm_core::id::{compute_content_hash, ContentHash};
use ucm_core::Content;

let content = Content::text("Hello, world!");
let hash: ContentHash = compute_content_hash(&content);

println!("{}", hash); // Full 64 hex chars (256 bits)

// Access raw bytes
let bytes: &[u8; 32] = hash.as_bytes();
\`\`\`

## Collision Resistance

With 96 bits of entropy:

- **Collision probability**: < 10⁻¹⁵ at 10 million blocks
- **Birthday bound**: ~2⁴⁸ blocks before 50% collision probability

This is sufficient for virtually all practical use cases.

## BlockId Operations

### Display and Debug

\`\`\`rust
let id = BlockId::from_bytes([0x01; 12]);

// Display format
println!("{}", id); // blk_010101010101010101010101

// Debug format
println!("{:?}", id); // BlockId(blk_010101010101010101010101)
\`\`\`

### Access Raw Bytes

\`\`\`rust
let id = BlockId::from_bytes([0x01; 12]);
let bytes: &[u8; 12] = id.as_bytes();
\`\`\`

### Root Detection

\`\`\`rust
let root = BlockId::root();
assert!(root.is_root());

let regular = BlockId::from_bytes([0x01; 12]);
assert!(!regular.is_root());
\`\`\`

### Serialization

\`\`\`rust
use serde_json;

let id = BlockId::from_bytes([0x01; 12]);

// Serialize
let json = serde_json::to_string(&id).unwrap();
// "010101010101010101010101"

// Deserialize
let restored: BlockId = serde_json::from_str(&json).unwrap();
assert_eq!(id, restored);
\`\`\`

## Content Normalization

Before hashing, content is normalized to ensure equivalent content produces identical IDs:

### Text Normalization

- **Unicode**: NFC normalization
- **Whitespace**: Collapsed to single spaces
- **Line endings**: Normalized to LF

\`\`\`rust
use ucm_core::normalize::{normalize_text, NormalizationConfig, WhitespaceNorm};

// Default: collapse whitespace
let normalized = normalize_text("  hello   world  ", NormalizationConfig::default());
assert_eq!(normalized, "hello world");

// Preserve whitespace (for code)
let config = NormalizationConfig {
    whitespace: WhitespaceNorm::Preserve,
    ..Default::default()
};
let normalized = normalize_text("  hello   world  ", config);
assert_eq!(normalized, "  hello   world  ");
\`\`\`

### Code Normalization

- **Whitespace**: Preserved
- **Line endings**: Normalized to LF
- **Language**: Lowercased

### JSON Normalization

- **Keys**: Sorted lexicographically
- **Whitespace**: Removed
- **Numbers**: Canonical form

\`\`\`rust
use ucm_core::normalize::canonical_json;

let json = serde_json::json!({"b": 1, "a": 2});
let canonical = canonical_json(&json);
assert_eq!(canonical, r#"{"a":2,"b":1}"#);
\`\`\`

## Complete Example

\`\`\`rust
use ucm_core::{Block, Content, Document};
use ucm_core::id::{generate_block_id, compute_content_hash, IdGenerator, IdGeneratorConfig};

fn main() {
    // Direct ID generation
    let content = Content::text("Hello, world!");
    let id = generate_block_id(&content, Some("intro"), None);
    println!("Generated ID: {}", id);
    
    // With namespace
    let id_namespaced = generate_block_id(&content, Some("intro"), Some("my-app"));
    println!("Namespaced ID: {}", id_namespaced);
    assert_ne!(id, id_namespaced);
    
    // Using IdGenerator
    let generator = IdGenerator::new(
        IdGeneratorConfig::new().with_namespace("production")
    );
    let id = generator.generate(&content, Some("intro"));
    
    // Content hash for change detection
    let hash = compute_content_hash(&content);
    println!("Content hash: {}", hash);
    
    // In practice, Block::new handles ID generation
    let block = Block::new(content, Some("intro"));
    println!("Block ID: {}", block.id);
    
    // Verify determinism
    let block2 = Block::new(Content::text("Hello, world!"), Some("intro"));
    assert_eq!(block.id, block2.id);
}
\`\`\`

## Best Practices

### 1. Use Semantic Roles for Differentiation

\`\`\`rust
// Same content, different roles = different IDs
let intro = Block::new(Content::text("Hello"), Some("intro"));
let conclusion = Block::new(Content::text("Hello"), Some("conclusion"));
assert_ne!(intro.id, conclusion.id);
\`\`\`

### 2. Use Namespaces for Multi-Tenancy

\`\`\`rust
let config = IdGeneratorConfig::new()
    .with_namespace(&tenant_id);
let generator = IdGenerator::new(config);
\`\`\`

### 3. Don't Rely on ID Format

\`\`\`rust
// Good - use provided methods
let is_root = id.is_root();
let bytes = id.as_bytes();

// Avoid - parsing the string format
let s = id.to_string();
// Don't manually parse "blk_..."
\`\`\`

### 4. Store IDs as Strings in External Systems

\`\`\`rust
// For databases, APIs, etc.
let id_string = block.id.to_string();

// Restore later
let id: BlockId = id_string.parse().unwrap();
\`\`\`

## See Also

- [Blocks](./blocks.md) - Block structure
- [Content Types](./content-types.md) - Content variants
- [Metadata](./metadata.md) - Content hash in metadata
`,__vite_glob_0_21=`# Metadata

Block metadata provides rich information for search, display, and LLM optimization. This includes semantic roles, tags, labels, token estimates, and custom properties.

## Block Metadata Structure

\`\`\`rust
pub struct BlockMetadata {
    /// Semantic role in document structure
    pub semantic_role: Option<SemanticRole>,
    
    /// Human-readable label (unique within document)
    pub label: Option<String>,
    
    /// Searchable tags
    pub tags: Vec<String>,
    
    /// Pre-computed summary for folding/context management
    pub summary: Option<String>,
    
    /// Estimated token count (computed lazily)
    pub token_estimate: Option<TokenEstimate>,
    
    /// Content hash for change detection
    pub content_hash: ContentHash,
    
    /// Creation timestamp
    pub created_at: DateTime<Utc>,
    
    /// Last modification timestamp
    pub modified_at: DateTime<Utc>,
    
    /// Custom key-value metadata
    pub custom: HashMap<String, serde_json::Value>,
}
\`\`\`

## Creating Metadata

### Basic Creation

\`\`\`rust
use ucm_core::metadata::BlockMetadata;
use ucm_core::id::compute_content_hash;
use ucm_core::Content;

let content = Content::text("Hello, world!");
let hash = compute_content_hash(&content);

let metadata = BlockMetadata::new(hash);
\`\`\`

### Builder Pattern

\`\`\`rust
use ucm_core::metadata::{BlockMetadata, SemanticRole, RoleCategory};
use ucm_core::id::compute_content_hash;

let hash = compute_content_hash(&content);

let metadata = BlockMetadata::new(hash)
    .with_role(SemanticRole::new(RoleCategory::Intro))
    .with_label("introduction")
    .with_tag("important")
    .with_tags(["draft", "review-needed"])
    .with_summary("Brief introduction to the topic")
    .with_custom("author", serde_json::json!("Alice"));
\`\`\`

## Semantic Roles

Semantic roles describe a block's function in the document structure.

### Structure

\`\`\`rust
pub struct SemanticRole {
    /// Primary category
    pub category: RoleCategory,
    
    /// Subcategory (optional)
    pub subcategory: Option<String>,
    
    /// Custom qualifier
    pub qualifier: Option<String>,
}
\`\`\`

### Creating Semantic Roles

\`\`\`rust
use ucm_core::metadata::{SemanticRole, RoleCategory};

// Simple role
let role = SemanticRole::new(RoleCategory::Intro);

// With subcategory
let role = SemanticRole::new(RoleCategory::Intro)
    .with_subcategory("hook");

// With qualifier
let role = SemanticRole::new(RoleCategory::Body)
    .with_subcategory("argument")
    .with_qualifier("v2");

// Parse from string
let role = SemanticRole::parse("intro.hook").unwrap();
let role = SemanticRole::parse("body.argument.v2").unwrap();

// Display
println!("{}", role); // "body.argument.v2"
\`\`\`

### Role Categories

#### Document Structure

| Category | Description | String |
|----------|-------------|--------|
| \`Title\` | Document title | \`title\` |
| \`Subtitle\` | Document subtitle | \`subtitle\` |
| \`Abstract\` | Document abstract | \`abstract\` |
| \`TableOfContents\` | Table of contents | \`toc\` |

#### Headings

| Category | Description | String |
|----------|-------------|--------|
| \`Heading1\` | H1 heading | \`heading1\`, \`h1\` |
| \`Heading2\` | H2 heading | \`heading2\`, \`h2\` |
| \`Heading3\` | H3 heading | \`heading3\`, \`h3\` |
| \`Heading4\` | H4 heading | \`heading4\`, \`h4\` |
| \`Heading5\` | H5 heading | \`heading5\`, \`h5\` |
| \`Heading6\` | H6 heading | \`heading6\`, \`h6\` |

#### Content Structure

| Category | Description | String |
|----------|-------------|--------|
| \`Paragraph\` | Regular paragraph | \`paragraph\`, \`para\`, \`p\` |
| \`List\` | List content | \`list\`, \`ul\`, \`ol\` |

#### Introduction Elements

| Category | Description | String |
|----------|-------------|--------|
| \`Intro\` | Introduction section | \`intro\`, \`introduction\` |
| \`IntroHook\` | Opening hook | \`intro_hook\`, \`hook\` |
| \`IntroContext\` | Background context | \`intro_context\`, \`context\` |
| \`IntroThesis\` | Thesis statement | \`intro_thesis\`, \`thesis\` |

#### Body Elements

| Category | Description | String |
|----------|-------------|--------|
| \`Body\` | Body section | \`body\` |
| \`BodyArgument\` | Main argument | \`body_argument\`, \`argument\` |
| \`BodyEvidence\` | Supporting evidence | \`body_evidence\`, \`evidence\` |
| \`BodyExample\` | Example | \`body_example\`, \`example\` |
| \`BodyCounterargument\` | Counterargument | \`body_counterargument\` |
| \`BodyTransition\` | Transition | \`body_transition\`, \`transition\` |

#### Conclusion Elements

| Category | Description | String |
|----------|-------------|--------|
| \`Conclusion\` | Conclusion section | \`conclusion\` |
| \`ConclusionSummary\` | Summary | \`conclusion_summary\`, \`summary\` |
| \`ConclusionImplication\` | Implications | \`conclusion_implication\` |
| \`ConclusionCallToAction\` | Call to action | \`conclusion_cta\`, \`cta\` |

#### Special Sections

| Category | Description | String |
|----------|-------------|--------|
| \`Sidebar\` | Sidebar content | \`sidebar\` |
| \`Callout\` | Callout box | \`callout\` |
| \`Warning\` | Warning message | \`warning\` |
| \`Note\` | Note | \`note\` |
| \`Quote\` | Block quote | \`quote\`, \`blockquote\` |

#### Technical Elements

| Category | Description | String |
|----------|-------------|--------|
| \`Definition\` | Definition | \`definition\` |
| \`Theorem\` | Theorem | \`theorem\` |
| \`Proof\` | Proof | \`proof\` |
| \`Algorithm\` | Algorithm | \`algorithm\` |
| \`Code\` | Code block | \`code\` |

#### Meta Elements

| Category | Description | String |
|----------|-------------|--------|
| \`Metadata\` | Metadata block | \`metadata\`, \`meta\` |
| \`Citation\` | Citation | \`citation\`, \`cite\` |
| \`Footnote\` | Footnote | \`footnote\` |
| \`Appendix\` | Appendix | \`appendix\` |
| \`Reference\` | Reference | \`reference\`, \`ref\` |

### Using Roles in Blocks

\`\`\`rust
use ucm_core::{Block, Content};

// Via Block::new
let block = Block::new(Content::text("Introduction"), Some("intro.hook"));

// The role is automatically parsed
let role = block.metadata.semantic_role.as_ref().unwrap();
assert_eq!(role.category, RoleCategory::Intro);
\`\`\`

## Labels

Labels provide unique, human-readable identifiers for blocks.

\`\`\`rust
let block = Block::new(Content::text("Important"), None)
    .with_label("main-warning");

// Find by label
if let Some(id) = doc.indices.find_by_label("main-warning") {
    let block = doc.get_block(&id).unwrap();
}
\`\`\`

### Label Best Practices

\`\`\`rust
// Good - descriptive, unique
.with_label("chapter-1-intro")
.with_label("api-overview")
.with_label("warning-deprecated")

// Less ideal - generic, may conflict
.with_label("intro")
.with_label("section1")
\`\`\`

## Tags

Tags enable categorization and filtering.

\`\`\`rust
let block = Block::new(Content::text("Draft content"), None)
    .with_tag("draft")
    .with_tag("needs-review")
    .with_tag("chapter-1");

// Check for tag
assert!(block.has_tag("draft"));

// Find by tag
let drafts = doc.indices.find_by_tag("draft");
\`\`\`

### Tag Best Practices

\`\`\`rust
// Good - consistent naming
.with_tag("status:draft")
.with_tag("status:final")
.with_tag("priority:high")
.with_tag("author:alice")

// Useful categories
.with_tag("needs-review")
.with_tag("deprecated")
.with_tag("experimental")
.with_tag("public-api")
\`\`\`

## Token Estimation

Token estimates help with LLM context management.

### Structure

\`\`\`rust
pub struct TokenEstimate {
    /// Estimated tokens for GPT-4 tokenizer
    pub gpt4: u32,
    
    /// Estimated tokens for Claude tokenizer
    pub claude: u32,
    
    /// Estimated tokens for Llama tokenizer
    pub llama: u32,
    
    /// Generic estimate (average)
    pub generic: u32,
}
\`\`\`

### Computing Estimates

\`\`\`rust
use ucm_core::metadata::{TokenEstimate, TokenModel};
use ucm_core::Content;

let content = Content::text("Hello, world! This is a test.");
let estimate = TokenEstimate::compute(&content);

println!("GPT-4: {} tokens", estimate.gpt4);
println!("Claude: {} tokens", estimate.claude);
println!("Llama: {} tokens", estimate.llama);
println!("Generic: {} tokens", estimate.generic);

// Get for specific model
let tokens = estimate.for_model(TokenModel::GPT4);
\`\`\`

### Token Models

\`\`\`rust
pub enum TokenModel {
    GPT4,
    Claude,
    Llama,
    Generic,
}
\`\`\`

### Estimation Details

Token estimation considers:

- **Text**: Word count, character count, CJK character ratio
- **Code**: Line count, character count, language-specific adjustments
- **Tables**: Cell count, header tokens, structure tokens
- **JSON**: Serialized length

\`\`\`rust
// CJK text has different tokenization
let cjk_estimate = TokenEstimate::compute(&Content::text("你好世界"));

// Code has language-specific adjustments
let rust_estimate = TokenEstimate::compute(&Content::code("rust", "fn main() {}"));
let python_estimate = TokenEstimate::compute(&Content::code("python", "def main(): pass"));
\`\`\`

### Document-Level Tokens

\`\`\`rust
use ucm_core::metadata::TokenModel;

let total_gpt4 = doc.total_tokens(TokenModel::GPT4);
let total_claude = doc.total_tokens(TokenModel::Claude);

println!("Document has {} GPT-4 tokens", total_gpt4);
\`\`\`

## Summaries

Summaries enable content folding for context management.

\`\`\`rust
let metadata = BlockMetadata::new(hash)
    .with_summary("Brief overview of the algorithm's complexity analysis");

// Use summary when folding content
if let Some(summary) = &block.metadata.summary {
    println!("Folded: {}", summary);
}
\`\`\`

## Content Hash

The content hash enables change detection.

\`\`\`rust
use ucm_core::id::{compute_content_hash, ContentHash};

let content = Content::text("Hello");
let hash = compute_content_hash(&content);

// Hash is stored in metadata
let metadata = BlockMetadata::new(hash);

// Compare hashes to detect changes
let new_hash = compute_content_hash(&new_content);
if metadata.content_hash != new_hash {
    println!("Content has changed!");
}
\`\`\`

## Timestamps

\`\`\`rust
// Creation time is set automatically
let metadata = BlockMetadata::new(hash);
println!("Created: {}", metadata.created_at);

// Update modification time
metadata.touch();
println!("Modified: {}", metadata.modified_at);
\`\`\`

## Custom Metadata

Store arbitrary key-value pairs:

\`\`\`rust
let metadata = BlockMetadata::new(hash)
    .with_custom("author", serde_json::json!("Alice"))
    .with_custom("version", serde_json::json!(2))
    .with_custom("config", serde_json::json!({
        "highlight": true,
        "language": "en"
    }));

// Access custom metadata
if let Some(author) = metadata.custom.get("author") {
    println!("Author: {}", author);
}
\`\`\`

## Complete Example

\`\`\`rust
use ucm_core::{Block, Content, Document};
use ucm_core::metadata::{BlockMetadata, SemanticRole, RoleCategory, TokenEstimate, TokenModel};
use ucm_core::id::compute_content_hash;

fn main() {
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Create block with rich metadata
    let content = Content::text(
        "This chapter introduces the core concepts of memory safety in Rust."
    );
    let hash = compute_content_hash(&content);
    
    let metadata = BlockMetadata::new(hash)
        .with_role(SemanticRole::new(RoleCategory::Intro)
            .with_subcategory("overview"))
        .with_label("chapter-1-intro")
        .with_tags(["chapter-1", "memory-safety", "introduction"])
        .with_summary("Introduction to Rust memory safety concepts")
        .with_custom("difficulty", serde_json::json!("beginner"))
        .with_custom("estimated_read_time_minutes", serde_json::json!(5));
    
    let block = Block::new(content, Some("intro.overview"))
        .with_metadata(metadata);
    
    let block_id = doc.add_block(block, &root).unwrap();
    
    // Query by various criteria
    let intros = doc.indices.find_by_tag("introduction");
    let chapter1 = doc.indices.find_by_tag("chapter-1");
    let by_label = doc.indices.find_by_label("chapter-1-intro");
    
    // Get token estimate
    let block = doc.get_block(&block_id).unwrap();
    let tokens = block.token_estimate();
    println!("GPT-4 tokens: {}", tokens.for_model(TokenModel::GPT4));
    
    // Check semantic role
    if let Some(role) = &block.metadata.semantic_role {
        println!("Role: {}", role); // "intro.overview"
    }
}
\`\`\`

## Best Practices

### 1. Use Semantic Roles Consistently

\`\`\`rust
// Good - clear document structure
Block::new(content, Some("heading1"))
Block::new(content, Some("intro.hook"))
Block::new(content, Some("body.evidence"))

// Less ideal - no semantic information
Block::new(content, None)
\`\`\`

### 2. Use Labels for Key Blocks

\`\`\`rust
// Blocks you'll need to reference later
.with_label("main-thesis")
.with_label("conclusion-summary")
.with_label("api-example-1")
\`\`\`

### 3. Use Tags for Categories

\`\`\`rust
// Consistent tag naming
.with_tag("status:draft")
.with_tag("type:example")
.with_tag("topic:memory-safety")
\`\`\`

### 4. Provide Summaries for Long Content

\`\`\`rust
// For blocks that might be folded
.with_summary("Detailed analysis of O(n log n) sorting algorithms")
\`\`\`

### 5. Store Domain-Specific Data in Custom

\`\`\`rust
// Application-specific metadata
.with_custom("review_status", serde_json::json!("approved"))
.with_custom("last_reviewer", serde_json::json!("bob@example.com"))
\`\`\`

## See Also

- [Semantic Roles](./semantic-roles.md) - Complete semantic role reference
- [Blocks](./blocks.md) - Block structure
- [ID Generation](./id-generation.md) - Content hashing
- [Documents](./documents.md) - Document indices
`,__vite_glob_0_22='# Semantic Roles\n\nSemantic roles describe a block\'s function within a document\'s structure. This page provides comprehensive documentation for all semantic roles available in UCP.\n\n## Overview\n\nSemantic roles help:\n- Organize documents hierarchically and semantically\n- Enable intelligent content folding and summarization\n- Support LLM context management\n- Facilitate structured rendering and export\n\n## Python SDK Usage\n\n```python\nfrom ucp import SemanticRole, Block, create\n\n# Create blocks with semantic roles\nintro = Block.text("Welcome to our guide", role=SemanticRole.INTRO)\nwarning = Block.text("Do not run in production", role=SemanticRole.WARNING)\n\n# Use in documents\ndoc = create()\ndoc.add_block(doc.root_id, "Important note", role=SemanticRole.NOTE)\n```\n\n## Role Categories\n\n### Headings\n\nFor document headings and titles at various levels.\n\n| Role | Value | Description |\n|------|-------|-------------|\n| `HEADING1` | `heading1` | Top-level heading (H1) |\n| `HEADING2` | `heading2` | Second-level heading (H2) |\n| `HEADING3` | `heading3` | Third-level heading (H3) |\n| `HEADING4` | `heading4` | Fourth-level heading (H4) |\n| `HEADING5` | `heading5` | Fifth-level heading (H5) |\n| `HEADING6` | `heading6` | Sixth-level heading (H6) |\n\n```python\nh1 = Block.text("Main Title", role=SemanticRole.HEADING1)\nh2 = Block.text("Chapter 1", role=SemanticRole.HEADING2)\n```\n\n### Content Structure\n\nBasic content organization roles.\n\n| Role | Value | Description |\n|------|-------|-------------|\n| `PARAGRAPH` | `paragraph` | Standard text paragraph |\n| `QUOTE` | `quote` | Block quote |\n| `LIST` | `list` | List content (ordered or unordered) |\n\n```python\npara = Block.text("This is a paragraph.", role=SemanticRole.PARAGRAPH)\nquote = Block.text("To be or not to be", role=SemanticRole.QUOTE)\n```\n\n### Technical Content\n\nFor code, math, and structured data.\n\n| Role | Value | Description |\n|------|-------|-------------|\n| `CODE` | `code` | Code block |\n| `TABLE` | `table` | Table data |\n| `EQUATION` | `equation` | Mathematical equation |\n\n```python\ncode = Block.code("print(\'Hello\')", language="python")  # Automatically uses CODE role\nequation = Block.text("E = mc^2", role=SemanticRole.EQUATION)\n```\n\n### Document Structure\n\nHigh-level document organization.\n\n| Role | Value | Description |\n|------|-------|-------------|\n| `TITLE` | `title` | Document title |\n| `SUBTITLE` | `subtitle` | Document subtitle |\n| `ABSTRACT` | `abstract` | Document abstract/summary |\n| `SECTION` | `section` | Generic section container |\n\n```python\ntitle = Block.text("Research Paper Title", role=SemanticRole.TITLE)\nabstract = Block.text("This paper explores...", role=SemanticRole.ABSTRACT)\n```\n\n### Narrative Structure\n\nFor essay/article organization.\n\n| Role | Value | Description |\n|------|-------|-------------|\n| `INTRO` | `intro` | Introduction section |\n| `BODY` | `body` | Main body content |\n| `CONCLUSION` | `conclusion` | Conclusion section |\n\n```python\nintro = Block.text("In this article, we will...", role=SemanticRole.INTRO)\nbody = Block.text("The main argument is...", role=SemanticRole.BODY)\nconclusion = Block.text("In summary...", role=SemanticRole.CONCLUSION)\n```\n\n### Callouts and Special Sections\n\nFor highlighted content and notifications.\n\n| Role | Value | Description |\n|------|-------|-------------|\n| `NOTE` | `note` | Informational note |\n| `WARNING` | `warning` | Warning message |\n| `TIP` | `tip` | Helpful tip or hint |\n| `SIDEBAR` | `sidebar` | Sidebar content |\n| `CALLOUT` | `callout` | Generic callout box |\n\n```python\nnote = Block.text("Remember to save your work", role=SemanticRole.NOTE)\nwarning = Block.text("This action cannot be undone", role=SemanticRole.WARNING)\ntip = Block.text("Pro tip: Use keyboard shortcuts", role=SemanticRole.TIP)\n```\n\n### Meta Elements\n\nFor references and supplementary content.\n\n| Role | Value | Description |\n|------|-------|-------------|\n| `METADATA` | `metadata` | Metadata block |\n| `CITATION` | `citation` | Citation or reference |\n| `FOOTNOTE` | `footnote` | Footnote content |\n\n```python\ncitation = Block.text("[1] Author, Title, 2024", role=SemanticRole.CITATION)\nfootnote = Block.text("See appendix for details", role=SemanticRole.FOOTNOTE)\n```\n\n## Complete Role List\n\n| Role | Value | Category |\n|------|-------|----------|\n| `HEADING1` | `heading1` | Headings |\n| `HEADING2` | `heading2` | Headings |\n| `HEADING3` | `heading3` | Headings |\n| `HEADING4` | `heading4` | Headings |\n| `HEADING5` | `heading5` | Headings |\n| `HEADING6` | `heading6` | Headings |\n| `PARAGRAPH` | `paragraph` | Content |\n| `QUOTE` | `quote` | Content |\n| `LIST` | `list` | Content |\n| `CODE` | `code` | Technical |\n| `TABLE` | `table` | Technical |\n| `EQUATION` | `equation` | Technical |\n| `TITLE` | `title` | Document |\n| `SUBTITLE` | `subtitle` | Document |\n| `ABSTRACT` | `abstract` | Document |\n| `SECTION` | `section` | Document |\n| `INTRO` | `intro` | Narrative |\n| `BODY` | `body` | Narrative |\n| `CONCLUSION` | `conclusion` | Narrative |\n| `NOTE` | `note` | Callouts |\n| `WARNING` | `warning` | Callouts |\n| `TIP` | `tip` | Callouts |\n| `SIDEBAR` | `sidebar` | Callouts |\n| `CALLOUT` | `callout` | Callouts |\n| `METADATA` | `metadata` | Meta |\n| `CITATION` | `citation` | Meta |\n| `FOOTNOTE` | `footnote` | Meta |\n\n## Rust SDK Roles\n\nThe Rust SDK provides additional granularity through subcategories. See [Metadata](./metadata.md#semantic-roles) for the complete Rust API.\n\nAdditional Rust-only role categories include:\n- Introduction elements: `IntroHook`, `IntroContext`, `IntroThesis`\n- Body elements: `BodyArgument`, `BodyEvidence`, `BodyExample`, `BodyCounterargument`, `BodyTransition`\n- Conclusion elements: `ConclusionSummary`, `ConclusionImplication`, `ConclusionCallToAction`\n- Technical elements: `Definition`, `Theorem`, `Proof`, `Algorithm`\n\n## Best Practices\n\n### 1. Use Roles Consistently\n\n```python\n# Good - clear semantic structure\ndoc.add_block(root, "Title", role=SemanticRole.TITLE)\ndoc.add_block(root, "Introduction", role=SemanticRole.INTRO)\ndoc.add_block(root, "Main content", role=SemanticRole.BODY)\n\n# Less ideal - no semantic information\ndoc.add_block(root, "Title")  # What kind of block is this?\n```\n\n### 2. Choose Appropriate Roles\n\n```python\n# Use WARNING for important cautions\ndoc.add_block(root, "Data loss may occur!", role=SemanticRole.WARNING)\n\n# Use TIP for helpful hints\ndoc.add_block(root, "Try using Ctrl+S", role=SemanticRole.TIP)\n\n# Use NOTE for general information\ndoc.add_block(root, "See also: Related topic", role=SemanticRole.NOTE)\n```\n\n### 3. Leverage Roles for LLM Context\n\n```python\nfrom ucp import IdMapper, PromptBuilder\n\n# Build context-aware prompts\ndoc = parse(markdown)\nmapper = IdMapper(doc)\n\n# IdMapper.describe() uses normalized format with structure and blocks\nprint(mapper.describe(doc))\n# Output shows:\n# Document structure:\n# 1: 2 3\n# 2:\n# 3:\n#\n# Blocks:\n# 1 type=text content=""\n# 2 type=text content="Introduction"\n# 3 type=text content="Content..."\n```\n\n## See Also\n\n- [Metadata](./metadata.md) - Full metadata documentation\n- [Blocks](./blocks.md) - Block structure\n- [LLM Utilities](../ucp-llm/README.md) - Using roles with LLMs\n',__vite_glob_0_23=`# UCM Engine

**ucm-engine** provides the transformation engine for applying operations to UCM documents. It handles operation execution, transaction management, snapshots, and validation.

## Overview

The engine is the execution layer of UCP, responsible for:

- **Operation Execution** - Apply changes to documents
- **Transaction Management** - Group operations atomically
- **Snapshot Management** - Version and restore documents
- **Validation** - Ensure document integrity

## Installation

\`\`\`toml
[dependencies]
ucm-engine = "0.1.4"0.1.3
\`\`\`

## Module Overview

| Module | Description |
|--------|-------------|
| [\`engine\`](./operations.md) | Main Engine type and operation execution |
| [\`operation\`](./operations.md) | Operation types (Edit, Move, Append, etc.) |
| [\`transaction\`](./transactions.md) | Transaction management |
| [\`snapshot\`](./snapshots.md) | Snapshot creation and restoration |
| [\`validate\`](./validation.md) | Document validation pipeline |

## Quick Example

\`\`\`rust
use ucm_engine::{Engine, Operation};
use ucm_core::{Content, Document};

fn main() {
    let engine = Engine::new();
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Execute an operation
    let result = engine.execute(&mut doc, Operation::Append {
        parent_id: root,
        content: Content::text("Hello, Engine!"),
        label: Some("greeting".into()),
        tags: vec!["example".into()],
        semantic_role: Some("intro".into()),
        index: None,
    }).unwrap();
    
    if result.success {
        println!("Added block: {:?}", result.affected_blocks);
    }
}
\`\`\`

## Public API

### Re-exports

\`\`\`rust
pub use engine::Engine;
pub use operation::{EditOperator, Operation, OperationResult, PruneCondition};
pub use snapshot::{Snapshot, SnapshotId, SnapshotManager};
pub use transaction::{Transaction, TransactionId, TransactionManager, TransactionState};
pub use validate::{ValidationPipeline, ValidationResult};
\`\`\`

## Engine Configuration

\`\`\`rust
use ucm_engine::{Engine, EngineConfig};

let config = EngineConfig {
    validate_on_operation: true,   // Validate after each operation
    max_batch_size: 10000,         // Maximum operations per batch
    enable_transactions: true,      // Enable transaction support
    enable_snapshots: true,         // Enable snapshot support
};

let engine = Engine::with_config(config);
\`\`\`

## Operations

The engine supports these operations:

| Operation | Description |
|-----------|-------------|
| \`Edit\` | Modify block content or metadata |
| \`Move\` | Move block to new parent |
| \`Append\` | Add new block |
| \`Delete\` | Remove block |
| \`Prune\` | Remove unreachable blocks |
| \`Link\` | Add edge between blocks |
| \`Unlink\` | Remove edge |
| \`CreateSnapshot\` | Create document snapshot |
| \`RestoreSnapshot\` | Restore from snapshot |

## Transactions

Group operations for atomic execution:

\`\`\`rust
let mut engine = Engine::new();
let mut doc = Document::create();

// Begin transaction
let txn_id = engine.begin_transaction();

// Add operations
engine.add_to_transaction(&txn_id, Operation::Append { ... })?;
engine.add_to_transaction(&txn_id, Operation::Edit { ... })?;

// Commit (executes all operations)
let results = engine.commit_transaction(&txn_id, &mut doc)?;

// Or rollback
// engine.rollback_transaction(&txn_id)?;
\`\`\`

## Snapshots

Version and restore documents:

\`\`\`rust
let mut engine = Engine::new();
let doc = Document::create();

// Create snapshot
engine.create_snapshot("v1", &doc, Some("Initial version".into()))?;

// Make changes...

// Restore
let restored = engine.restore_snapshot("v1")?;
\`\`\`

## Validation

Validate document integrity:

\`\`\`rust
let engine = Engine::new();
let result = engine.validate(&doc);

if result.valid {
    println!("Document is valid");
} else {
    for issue in result.errors() {
        eprintln!("Error: {}", issue.message);
    }
    for issue in result.warnings() {
        println!("Warning: {}", issue.message);
    }
}
\`\`\`

## See Also

- [Operations](./operations.md) - Detailed operation reference
- [Transactions](./transactions.md) - Transaction management
- [Snapshots](./snapshots.md) - Snapshot system
- [Validation](./validation.md) - Validation pipeline
`,__vite_glob_0_24=`# Operations

Operations are the fundamental units of change in UCM. The engine executes operations to modify documents.

## Operation Types

\`\`\`rust
pub enum Operation {
    Edit { block_id, path, value, operator },
    Move { block_id, new_parent, index },
    Append { parent_id, content, label, tags, semantic_role, index },
    Delete { block_id, cascade, preserve_children },
    Prune { condition },
    Link { source, edge_type, target, metadata },
    Unlink { source, edge_type, target },
    CreateSnapshot { name, description },
    RestoreSnapshot { name },
    WriteSection { section_id, markdown, base_heading_level },
}
\`\`\`

## Edit Operation

Modify block content or metadata.

### Structure

\`\`\`rust
Operation::Edit {
    block_id: BlockId,
    path: String,
    value: serde_json::Value,
    operator: EditOperator,
}
\`\`\`

### Edit Operators

| Operator | Operation | Description |
|-----------|-------------|-------------|
| \`Edit\` | Modify block content or metadata |
| \`Move\` | Move block to new parent |
| \`Append\` | Add new block |
| \`Delete\` | Remove block |
| \`Prune\` | Remove unreachable blocks |
| \`Link\` | Add edge between blocks |
| \`Unlink\` | Remove edge |
| \`CreateSnapshot\` | Create document snapshot |
| \`RestoreSnapshot\` | Restore from snapshot |
| \`WriteSection\` | Replace a section's children from Markdown with optional heading offset and undo |

### Examples

\`\`\`rust
use ucm_engine::{Engine, Operation, EditOperator};
use ucm_core::{Document, Block, Content};

let engine = Engine::new();
let mut doc = Document::create();
let root = doc.root.clone();

// Add a block first
let block = Block::new(Content::text("Original text"), None);
let block_id = doc.add_block(block, &root).unwrap();

// Edit content
let result = engine.execute(&mut doc, Operation::Edit {
    block_id: block_id.clone(),
    path: "content.text".to_string(),
    value: serde_json::json!("Updated text"),
    operator: EditOperator::Set,
}).unwrap();

// Append to content
let result = engine.execute(&mut doc, Operation::Edit {
    block_id: block_id.clone(),
    path: "content.text".to_string(),
    value: serde_json::json!(" - more text"),
    operator: EditOperator::Append,
}).unwrap();

// Edit metadata
let result = engine.execute(&mut doc, Operation::Edit {
    block_id: block_id.clone(),
    path: "metadata.label".to_string(),
    value: serde_json::json!("my-label"),
    operator: EditOperator::Set,
}).unwrap();

// Add tags
let result = engine.execute(&mut doc, Operation::Edit {
    block_id: block_id.clone(),
    path: "metadata.tags".to_string(),
    value: serde_json::json!(["important", "draft"]),
    operator: EditOperator::Append,
}).unwrap();

// Remove tag
let result = engine.execute(&mut doc, Operation::Edit {
    block_id: block_id.clone(),
    path: "metadata.tags".to_string(),
    value: serde_json::json!("draft"),
    operator: EditOperator::Remove,
}).unwrap();

// Delete single block (children become orphaned)
let result = engine.execute(&mut doc, Operation::Delete {
    block_id: block_id.clone(),
    cascade: false,
    preserve_children: false,
}).unwrap();

// Delete with all descendants
let result = engine.execute(&mut doc, Operation::Delete {
    block_id: block_id.clone(),
    cascade: true,
    preserve_children: false,
}).unwrap();

// Delete but keep children (reparent to grandparent)
let result = engine.execute(&mut doc, Operation::Delete {
    block_id: block_id.clone(),
    cascade: false,
    preserve_children: true,
}).unwrap();

## WriteSection Operation

Replace an entire section's children with parsed Markdown while capturing an undo payload.

### Structure

\`\`\`rust
Operation::WriteSection {
    section_id: BlockId,
    markdown: String,
    base_heading_level: Option<usize>,
}
\`\`\`

### Behavior

1. Calls \`clear_section_content_with_undo\` to remove the section's descendants and produce a \`ClearSectionResult\` containing \`removed_ids\` and a \`DeletedContent\` snapshot (blocks + structure + parent metadata).
2. Parses the supplied Markdown using \`ucp-translator-markdown\` and integrates it beneath \`section_id\`. When \`base_heading_level\` is set, each heading is re-based (e.g., \`Some(3)\` promotes the inserted top-level heading to \`###\`).
3. Returns an \`OperationResult\` whose \`affected_blocks\` include both deleted and newly added block IDs so downstream systems can update caches.

### Undo Workflow

Persist \`DeletedContent\` if you want a full rollback. Restoring first clears whatever content currently resides under the section (including manual edits after the write) and then reattaches the preserved subtree.

\`\`\`rust
use ucm_engine::section::{clear_section_content_with_undo, restore_deleted_content};

let result = clear_section_content_with_undo(&mut doc, &section_id)?;
let snapshot = result.deleted_content;

// ... Write new markdown or perform edits ...

let restored_ids = restore_deleted_content(&mut doc, &snapshot)?;
assert_eq!(restored_ids.len(), result.removed_ids.len());
\`\`\`

### SDK Support

- **Python**: \`ucp.clear_section_with_undo(doc, section_id)\` and \`ucp.restore_deleted_section(doc, deleted_content)\` mirror the Rust helpers. Restoration always removes the "replacement" subtree before reattaching the saved blocks.
- **JavaScript**: \`clearSectionWithUndo(doc, sectionId)\` returns \`{ removedIds, deletedContent }\` and \`restoreDeletedSection(doc, deletedContent)\` restores it.

The deleted payload is pure JSON (blocks, structure, parent metadata), so you can persist it in durable storage to enable long-lived undo stacks.

## Move Operation

Move a block to a new parent.

### Structure

\`\`\`rust
Operation::Move {
    block_id: BlockId,
    new_parent: BlockId,
    index: Option<usize>,
}
\`\`\`

### Examples

\`\`\`rust
// Move to end of new parent's children
let result = engine.execute(&mut doc, Operation::Move {
    block_id: child_id.clone(),
    new_parent: new_parent_id.clone(),
    index: None,
}).unwrap();

// Move to specific position
let result = engine.execute(&mut doc, Operation::Move {
    block_id: child_id.clone(),
    new_parent: new_parent_id.clone(),
    index: Some(0), // First position
}).unwrap();
\`\`\`

### Cycle Detection

Moving a block to one of its descendants is prevented:

\`\`\`rust
// This will fail with CycleDetected error
let result = engine.execute(&mut doc, Operation::Move {
    block_id: parent_id,
    new_parent: child_id, // child is descendant of parent
    index: None,
});
assert!(!result.unwrap().success);
\`\`\`

## Append Operation

Add a new block to the document.

### Structure

\`\`\`rust
Operation::Append {
    parent_id: BlockId,
    content: Content,
    label: Option<String>,
    tags: Vec<String>,
    semantic_role: Option<String>,
    index: Option<usize>,
}
\`\`\`

### Examples

\`\`\`rust
use ucm_core::Content;

// Append text block
let result = engine.execute(&mut doc, Operation::Append {
    parent_id: root.clone(),
    content: Content::text("New paragraph"),
    label: Some("intro-para".into()),
    tags: vec!["introduction".into()],
    semantic_role: Some("paragraph".into()),
    index: None,
}).unwrap();

let new_block_id = &result.affected_blocks[0];

// Append code block
let result = engine.execute(&mut doc, Operation::Append {
    parent_id: root.clone(),
    content: Content::code("rust", "fn main() {}"),
    label: Some("example-1".into()),
    tags: vec!["example".into(), "rust".into()],
    semantic_role: Some("code".into()),
    index: None,
}).unwrap();

// Append at specific position
let result = engine.execute(&mut doc, Operation::Append {
    parent_id: root.clone(),
    content: Content::text("First!"),
    label: None,
    tags: vec![],
    semantic_role: None,
    index: Some(0), // Insert at beginning
}).unwrap();
\`\`\`

## Delete Operation

Remove a block from the document.

### Structure

\`\`\`rust
Operation::Delete {
    block_id: BlockId,
    cascade: bool,
    preserve_children: bool,
}
\`\`\`

### Options

| Option | Description |
|--------|-------------|
| \`cascade: false\` | Delete only the specified block |
| \`cascade: true\` | Delete block and all descendants |
| \`preserve_children: true\` | Reparent children to grandparent before delete |

### Examples

\`\`\`rust
// Delete single block (children become orphaned)
let result = engine.execute(&mut doc, Operation::Delete {
    block_id: block_id.clone(),
    cascade: false,
    preserve_children: false,
}).unwrap();

// Delete with all descendants
let result = engine.execute(&mut doc, Operation::Delete {
    block_id: block_id.clone(),
    cascade: true,
    preserve_children: false,
}).unwrap();

// Delete but keep children (reparent to grandparent)
let result = engine.execute(&mut doc, Operation::Delete {
    block_id: block_id.clone(),
    cascade: false,
    preserve_children: true,
}).unwrap();
\`\`\`

## Prune Operation

Remove unreachable blocks or blocks matching a condition.

### Structure

\`\`\`rust
Operation::Prune {
    condition: Option<PruneCondition>,
}

pub enum PruneCondition {
    Unreachable,
    TagContains(String),
    Custom(String),
}
\`\`\`

### Examples

\`\`\`rust
// Prune all unreachable blocks
let result = engine.execute(&mut doc, Operation::Prune {
    condition: None, // Defaults to Unreachable
}).unwrap();

// Explicitly prune unreachable
let result = engine.execute(&mut doc, Operation::Prune {
    condition: Some(PruneCondition::Unreachable),
}).unwrap();

// Prune blocks with specific tag
let result = engine.execute(&mut doc, Operation::Prune {
    condition: Some(PruneCondition::TagContains("deprecated".into())),
}).unwrap();

println!("Pruned {} blocks", result.affected_blocks.len());
\`\`\`

## Link Operation

Add an edge between blocks.

### Structure

\`\`\`rust
Operation::Link {
    source: BlockId,
    edge_type: EdgeType,
    target: BlockId,
    metadata: Option<serde_json::Value>,
}
\`\`\`

### Examples

\`\`\`rust
use ucm_core::EdgeType;

// Add reference
let result = engine.execute(&mut doc, Operation::Link {
    source: source_id.clone(),
    edge_type: EdgeType::References,
    target: target_id.clone(),
    metadata: None,
}).unwrap();

// Add with metadata
let result = engine.execute(&mut doc, Operation::Link {
    source: source_id.clone(),
    edge_type: EdgeType::Supports,
    target: claim_id.clone(),
    metadata: Some(serde_json::json!({
        "confidence": 0.95,
        "reason": "Direct evidence"
    })),
}).unwrap();

// Custom edge type
let result = engine.execute(&mut doc, Operation::Link {
    source: impl_id.clone(),
    edge_type: EdgeType::Custom("implements".into()),
    target: interface_id.clone(),
    metadata: None,
}).unwrap();
\`\`\`

## Unlink Operation

Remove an edge between blocks.

### Structure

\`\`\`rust
Operation::Unlink {
    source: BlockId,
    edge_type: EdgeType,
    target: BlockId,
}
\`\`\`

### Examples

\`\`\`rust
let result = engine.execute(&mut doc, Operation::Unlink {
    source: source_id.clone(),
    edge_type: EdgeType::References,
    target: target_id.clone(),
}).unwrap();

if result.success {
    println!("Edge removed");
} else {
    println!("Edge not found");
}
\`\`\`

## Operation Results

\`\`\`rust
pub struct OperationResult {
    /// Whether the operation succeeded
    pub success: bool,
    
    /// Affected block IDs
    pub affected_blocks: Vec<BlockId>,
    
    /// Any warnings generated
    pub warnings: Vec<String>,
    
    /// Error message if failed
    pub error: Option<String>,
}
\`\`\`

### Handling Results

\`\`\`rust
let result = engine.execute(&mut doc, operation).unwrap();

if result.success {
    println!("Success! Affected blocks:");
    for block_id in &result.affected_blocks {
        println!("  - {}", block_id);
    }
    
    for warning in &result.warnings {
        println!("Warning: {}", warning);
    }
} else {
    eprintln!("Failed: {}", result.error.unwrap_or_default());
}
\`\`\`

## Batch Execution

Execute multiple operations:

\`\`\`rust
let ops = vec![
    Operation::Append { ... },
    Operation::Edit { ... },
    Operation::Link { ... },
];

let results = engine.execute_batch(&mut doc, ops).unwrap();

for (i, result) in results.iter().enumerate() {
    if result.success {
        println!("Operation {} succeeded", i);
    } else {
        println!("Operation {} failed: {:?}", i, result.error);
        break; // Batch stops on first failure
    }
}
\`\`\`

### Batch Limits

\`\`\`rust
let config = EngineConfig {
    max_batch_size: 1000, // Limit batch size
    ..Default::default()
};

let engine = Engine::with_config(config);

// This will fail if ops.len() > 1000
let results = engine.execute_batch(&mut doc, ops);
\`\`\`

## Operation Descriptions

Operations provide descriptions for logging:

\`\`\`rust
let op = Operation::Edit {
    block_id: id.clone(),
    path: "content.text".into(),
    value: serde_json::json!("new"),
    operator: EditOperator::Set,
};

println!("{}", op.description()); // "EDIT blk_... SET content.text"
\`\`\`

## Complete Example

\`\`\`rust
use ucm_engine::{Engine, Operation, EditOperator, PruneCondition};
use ucm_core::{Content, Document, EdgeType};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let engine = Engine::new();
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Build document structure
    let result = engine.execute(&mut doc, Operation::Append {
        parent_id: root.clone(),
        content: Content::text("Introduction"),
        label: Some("intro".into()),
        tags: vec!["section".into()],
        semantic_role: Some("heading1".into()),
        index: None,
    })?;
    let intro_id = result.affected_blocks[0].clone();
    
    let result = engine.execute(&mut doc, Operation::Append {
        parent_id: intro_id.clone(),
        content: Content::text("Welcome to the guide."),
        label: None,
        tags: vec![],
        semantic_role: Some("paragraph".into()),
        index: None,
    })?;
    let para_id = result.affected_blocks[0].clone();
    
    let result = engine.execute(&mut doc, Operation::Append {
        parent_id: root.clone(),
        content: Content::code("rust", "fn main() {\\n    println!(\\"Hello!\\");\\n}"),
        label: Some("example-1".into()),
        tags: vec!["example".into()],
        semantic_role: Some("code".into()),
        index: None,
    })?;
    let code_id = result.affected_blocks[0].clone();
    
    // Add reference from paragraph to code
    engine.execute(&mut doc, Operation::Link {
        source: para_id.clone(),
        edge_type: EdgeType::References,
        target: code_id.clone(),
        metadata: None,
    })?;
    
    // Edit the paragraph
    engine.execute(&mut doc, Operation::Edit {
        block_id: para_id.clone(),
        path: "content.text".into(),
        value: serde_json::json!("Welcome to the guide. See the example below."),
        operator: EditOperator::Set,
    })?;
    
    // Add tags
    engine.execute(&mut doc, Operation::Edit {
        block_id: para_id.clone(),
        path: "metadata.tags".into(),
        value: serde_json::json!(["updated"]),
        operator: EditOperator::Append,
    })?;
    
    // Validate
    let validation = engine.validate(&doc);
    println!("Valid: {}", validation.valid);
    
    // Print structure
    println!("Document has {} blocks", doc.block_count());
    
    Ok(())
}
\`\`\`

## See Also

- [Transactions](./transactions.md) - Atomic operation groups
- [Snapshots](./snapshots.md) - Document versioning
- [Validation](./validation.md) - Document validation
- [UCL Commands](../ucl-parser/commands.md) - UCL command syntax
`,__vite_glob_0_25=`# Snapshots

Snapshots provide document versioning, allowing you to save and restore document states.

## Snapshot Structure

\`\`\`rust
pub struct Snapshot {
    pub id: SnapshotId,
    pub description: Option<String>,
    pub created_at: DateTime<Utc>,
    pub document_version: DocumentVersion,
    pub data: SnapshotData,
}

pub enum SnapshotData {
    Full(SerializedDocument),
    Delta { base: SnapshotId, changes: Vec<SnapshotChange> },
}
\`\`\`

## Basic Usage

### Create Snapshot

\`\`\`rust
use ucm_engine::Engine;
use ucm_core::Document;

let mut engine = Engine::new();
let doc = Document::create();

// Create snapshot
engine.create_snapshot("v1", &doc, Some("Initial version".into())).unwrap();

// Create without description
engine.create_snapshot("v2", &doc, None).unwrap();
\`\`\`

### Restore Snapshot

\`\`\`rust
// Make changes to document...

// Restore to previous state
let restored_doc = engine.restore_snapshot("v1").unwrap();

println!("Restored document has {} blocks", restored_doc.block_count());
\`\`\`

### List Snapshots

\`\`\`rust
let snapshots = engine.list_snapshots();
for name in snapshots {
    println!("Snapshot: {}", name);
}
\`\`\`

### Delete Snapshot

\`\`\`rust
let deleted = engine.delete_snapshot("v1");
if deleted {
    println!("Snapshot deleted");
} else {
    println!("Snapshot not found");
}
\`\`\`

## Snapshot Manager

For direct snapshot management:

\`\`\`rust
use ucm_engine::snapshot::{SnapshotManager, SnapshotId};

// Create manager
let mut mgr = SnapshotManager::new();

// With max snapshots limit
let mut mgr = SnapshotManager::with_max_snapshots(10);

// Create snapshot
let id = mgr.create("v1", &doc, Some("Description".into())).unwrap();

// Check existence
if mgr.exists("v1") {
    println!("Snapshot exists");
}

// Get snapshot metadata
if let Some(snapshot) = mgr.get("v1") {
    println!("Created: {}", snapshot.created_at);
    println!("Description: {:?}", snapshot.description);
}

// List all snapshots (sorted by creation time, newest first)
let snapshots = mgr.list();
for snapshot in snapshots {
    println!("{}: {:?}", snapshot.id, snapshot.description);
}

// Restore
let doc = mgr.restore("v1").unwrap();

// Delete
mgr.delete("v1");

// Count
println!("Total snapshots: {}", mgr.count());
\`\`\`

## Automatic Eviction

When the snapshot limit is reached, the oldest snapshot is automatically evicted:

\`\`\`rust
let mut mgr = SnapshotManager::with_max_snapshots(3);

mgr.create("v1", &doc, None).unwrap();
mgr.create("v2", &doc, None).unwrap();
mgr.create("v3", &doc, None).unwrap();

// This will evict v1
mgr.create("v4", &doc, None).unwrap();

assert!(!mgr.exists("v1")); // Evicted
assert!(mgr.exists("v2"));
assert!(mgr.exists("v3"));
assert!(mgr.exists("v4"));
\`\`\`

## Snapshot Workflow

### Version Control Pattern

\`\`\`rust
use ucm_engine::Engine;
use ucm_core::Document;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut engine = Engine::new();
    let mut doc = Document::create();
    
    // Initial state
    engine.create_snapshot("initial", &doc, Some("Empty document".into()))?;
    
    // Add content
    // ... operations ...
    engine.create_snapshot("draft-1", &doc, Some("First draft".into()))?;
    
    // More changes
    // ... operations ...
    engine.create_snapshot("draft-2", &doc, Some("Second draft".into()))?;
    
    // Oops, draft-2 was bad, restore draft-1
    doc = engine.restore_snapshot("draft-1")?;
    
    // Continue from draft-1
    // ... operations ...
    engine.create_snapshot("final", &doc, Some("Final version".into()))?;
    
    Ok(())
}
\`\`\`

### Checkpoint Pattern

\`\`\`rust
// Before risky operation
engine.create_snapshot("before-refactor", &doc, None)?;

// Attempt refactor
let result = perform_risky_refactor(&mut doc);

if result.is_err() {
    // Restore on failure
    doc = engine.restore_snapshot("before-refactor")?;
    engine.delete_snapshot("before-refactor");
    return Err(result.unwrap_err());
}

// Success - clean up checkpoint
engine.delete_snapshot("before-refactor");
\`\`\`

### A/B Testing Pattern

\`\`\`rust
// Create base snapshot
engine.create_snapshot("base", &doc, None)?;

// Version A
let mut doc_a = engine.restore_snapshot("base")?;
apply_version_a(&mut doc_a);
engine.create_snapshot("version-a", &doc_a, Some("Version A".into()))?;

// Version B
let mut doc_b = engine.restore_snapshot("base")?;
apply_version_b(&mut doc_b);
engine.create_snapshot("version-b", &doc_b, Some("Version B".into()))?;

// Compare or choose
let chosen = engine.restore_snapshot("version-a")?;
\`\`\`

## Serialization Details

Snapshots serialize the complete document state:

\`\`\`rust
pub struct SerializedDocument {
    pub json: String,
}
\`\`\`

The serialized format includes:
- Document ID
- Root block ID
- Structure (adjacency map)
- All blocks (with content and metadata)
- Document metadata
- Document version

## Error Handling

### Snapshot Not Found

\`\`\`rust
let result = engine.restore_snapshot("nonexistent");
assert!(result.is_err());
\`\`\`

### Serialization Errors

\`\`\`rust
// Rare, but possible with custom content
let result = mgr.create("snapshot", &doc, None);
if let Err(e) = result {
    eprintln!("Failed to create snapshot: {}", e);
}
\`\`\`

## Complete Example

\`\`\`rust
use ucm_engine::{Engine, Operation};
use ucm_core::{Content, Document};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut engine = Engine::new();
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Create initial snapshot
    engine.create_snapshot("empty", &doc, Some("Empty document".into()))?;
    
    // Add chapter 1
    engine.execute(&mut doc, Operation::Append {
        parent_id: root.clone(),
        content: Content::text("Chapter 1: Introduction"),
        label: Some("chapter-1".into()),
        tags: vec![],
        semantic_role: Some("heading1".into()),
        index: None,
    })?;
    
    engine.create_snapshot("chapter-1", &doc, Some("Added chapter 1".into()))?;
    
    // Add chapter 2
    engine.execute(&mut doc, Operation::Append {
        parent_id: root.clone(),
        content: Content::text("Chapter 2: Details"),
        label: Some("chapter-2".into()),
        tags: vec![],
        semantic_role: Some("heading1".into()),
        index: None,
    })?;
    
    engine.create_snapshot("chapter-2", &doc, Some("Added chapter 2".into()))?;
    
    // List snapshots
    println!("Snapshots:");
    for name in engine.list_snapshots() {
        println!("  - {}", name);
    }
    
    // Current state
    println!("\\nCurrent: {} blocks", doc.block_count());
    
    // Restore to chapter-1
    doc = engine.restore_snapshot("chapter-1")?;
    println!("After restore to chapter-1: {} blocks", doc.block_count());
    
    // Restore to empty
    doc = engine.restore_snapshot("empty")?;
    println!("After restore to empty: {} blocks", doc.block_count());
    
    // Clean up
    engine.delete_snapshot("empty");
    engine.delete_snapshot("chapter-1");
    engine.delete_snapshot("chapter-2");
    
    Ok(())
}
\`\`\`

## Best Practices

### 1. Use Descriptive Names

\`\`\`rust
// Good - descriptive
engine.create_snapshot("before-migration-v2", &doc, None)?;
engine.create_snapshot("after-review-alice", &doc, None)?;

// Less ideal - generic
engine.create_snapshot("v1", &doc, None)?;
engine.create_snapshot("backup", &doc, None)?;
\`\`\`

### 2. Add Descriptions

\`\`\`rust
engine.create_snapshot(
    "release-1.0",
    &doc,
    Some("Release 1.0 - reviewed and approved".into())
)?;
\`\`\`

### 3. Clean Up Old Snapshots

\`\`\`rust
// After successful operation
engine.delete_snapshot("checkpoint");

// Or use max_snapshots limit
let mgr = SnapshotManager::with_max_snapshots(10);
\`\`\`

### 4. Use Checkpoints for Risky Operations

\`\`\`rust
engine.create_snapshot("checkpoint", &doc, None)?;

match risky_operation(&mut doc) {
    Ok(_) => {
        engine.delete_snapshot("checkpoint");
    }
    Err(e) => {
        doc = engine.restore_snapshot("checkpoint")?;
        engine.delete_snapshot("checkpoint");
        return Err(e);
    }
}
\`\`\`

### 5. Consider Snapshot Size

Snapshots store the full document. For large documents:
- Limit the number of snapshots
- Delete unnecessary snapshots promptly
- Consider external storage for long-term versioning

## See Also

- [Operations](./operations.md) - Document operations
- [Transactions](./transactions.md) - Atomic operations
- [UCL Commands](../ucl-parser/commands.md) - SNAPSHOT commands
`,__vite_glob_0_26=`# Transactions

Transactions group operations for atomic execution. Either all operations succeed, or none are applied.

## Transaction Structure

\`\`\`rust
pub struct Transaction {
    pub id: TransactionId,
    pub name: Option<String>,
    pub operations: Vec<Operation>,
    pub savepoints: Vec<Savepoint>,
    pub state: TransactionState,
    pub started_at: Instant,
    pub created_at: DateTime<Utc>,
    pub timeout: Duration,
}

pub enum TransactionState {
    Active,
    Committed,
    RolledBack,
    TimedOut,
}
\`\`\`

## Basic Usage

### Begin, Add, Commit

\`\`\`rust
use ucm_engine::{Engine, Operation};
use ucm_core::{Content, Document};

let mut engine = Engine::new();
let mut doc = Document::create();
let root = doc.root.clone();

// Begin transaction
let txn_id = engine.begin_transaction();

// Add operations
engine.add_to_transaction(&txn_id, Operation::Append {
    parent_id: root.clone(),
    content: Content::text("First block"),
    label: None,
    tags: vec![],
    semantic_role: None,
    index: None,
}).unwrap();

engine.add_to_transaction(&txn_id, Operation::Append {
    parent_id: root.clone(),
    content: Content::text("Second block"),
    label: None,
    tags: vec![],
    semantic_role: None,
    index: None,
}).unwrap();

// Commit - executes all operations
let results = engine.commit_transaction(&txn_id, &mut doc).unwrap();

assert_eq!(results.len(), 2);
assert!(results.iter().all(|r| r.success));
\`\`\`

### Named Transactions

\`\`\`rust
let txn_id = engine.begin_named_transaction("add-chapter-1");

// Transaction ID is the name
assert_eq!(txn_id.0, "add-chapter-1");
\`\`\`

### Rollback

\`\`\`rust
let txn_id = engine.begin_transaction();

engine.add_to_transaction(&txn_id, Operation::Append { ... }).unwrap();
engine.add_to_transaction(&txn_id, Operation::Append { ... }).unwrap();

// Decide not to commit
engine.rollback_transaction(&txn_id).unwrap();

// Document is unchanged
\`\`\`

## Transaction Manager

The \`TransactionManager\` handles transaction lifecycle:

\`\`\`rust
use ucm_engine::transaction::{TransactionManager, TransactionId};
use std::time::Duration;

// Create with default timeout (30 seconds)
let mut mgr = TransactionManager::new();

// Create with custom timeout
let mut mgr = TransactionManager::with_timeout(Duration::from_secs(60));

// Begin transaction
let txn_id = mgr.begin();

// Get transaction
if let Some(txn) = mgr.get(&txn_id) {
    println!("Operations: {}", txn.operation_count());
    println!("Elapsed: {:?}", txn.elapsed());
}

// Check active count
println!("Active transactions: {}", mgr.active_count());

// Cleanup completed/timed out transactions
mgr.cleanup();
\`\`\`

## Timeouts

Transactions have a timeout to prevent resource leaks:

\`\`\`rust
use std::time::Duration;
use ucm_engine::transaction::TransactionManager;

let mut mgr = TransactionManager::with_timeout(Duration::from_secs(5));

let txn_id = mgr.begin();

// Wait too long...
std::thread::sleep(Duration::from_secs(6));

// Commit will fail
let result = mgr.commit(&txn_id);
assert!(result.is_err()); // TransactionTimeout
\`\`\`

### Checking Timeout

\`\`\`rust
if let Some(txn) = mgr.get(&txn_id) {
    if txn.is_timed_out() {
        println!("Transaction timed out!");
    }
}
\`\`\`

## Savepoints

Savepoints allow partial rollback within a transaction:

\`\`\`rust
use ucm_engine::transaction::Transaction;
use std::time::Duration;

let mut txn = Transaction::new(Duration::from_secs(30));

// Add some operations
txn.add_operation(op1).unwrap();
txn.add_operation(op2).unwrap();

// Create savepoint
txn.savepoint("before-risky-ops");

// Add more operations
txn.add_operation(op3).unwrap();
txn.add_operation(op4).unwrap();

// Savepoint records the operation index
let sp = &txn.savepoints[0];
println!("Savepoint '{}' at operation {}", sp.name, sp.operation_index);
\`\`\`

## Transaction States

\`\`\`
┌────────┐
│ Active │
└───┬────┘
    │
    ├─── commit() ───► Committed
    │
    ├─── rollback() ──► RolledBack
    │
    └─── timeout ─────► TimedOut
\`\`\`

### State Transitions

\`\`\`rust
use ucm_engine::transaction::TransactionState;

let txn_id = mgr.begin();

// Initially Active
let txn = mgr.get(&txn_id).unwrap();
assert_eq!(txn.state, TransactionState::Active);

// After commit
mgr.commit(&txn_id).unwrap();
let txn = mgr.get(&txn_id).unwrap();
assert_eq!(txn.state, TransactionState::Committed);

// Or after rollback
// mgr.rollback(&txn_id).unwrap();
// assert_eq!(txn.state, TransactionState::RolledBack);
\`\`\`

## Error Handling

### Adding to Non-Active Transaction

\`\`\`rust
let txn_id = mgr.begin();
mgr.commit(&txn_id).unwrap();

// Can't add to committed transaction
let result = mgr.add_operation(&txn_id, operation);
assert!(result.is_err());
\`\`\`

### Committing Non-Active Transaction

\`\`\`rust
let txn_id = mgr.begin();
mgr.rollback(&txn_id).unwrap();

// Can't commit rolled back transaction
let result = mgr.commit(&txn_id);
assert!(result.is_err());
\`\`\`

### Transaction Not Found

\`\`\`rust
let fake_id = TransactionId::generate();
let result = mgr.commit(&fake_id);
assert!(result.is_err()); // TransactionNotFound
\`\`\`

## Using with Engine

The \`Engine\` provides convenient transaction methods:

\`\`\`rust
use ucm_engine::Engine;

let mut engine = Engine::new();
let mut doc = Document::create();

// Begin
let txn_id = engine.begin_transaction();
// or: engine.begin_named_transaction("my-txn")

// Add operations
engine.add_to_transaction(&txn_id, op1)?;
engine.add_to_transaction(&txn_id, op2)?;

// Commit (executes operations)
let results = engine.commit_transaction(&txn_id, &mut doc)?;

// Or rollback
// engine.rollback_transaction(&txn_id)?;
\`\`\`

## Complete Example

\`\`\`rust
use ucm_engine::{Engine, Operation, EditOperator};
use ucm_core::{Content, Document, EdgeType};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut engine = Engine::new();
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Transaction 1: Add structure
    let txn1 = engine.begin_named_transaction("add-structure");
    
    engine.add_to_transaction(&txn1, Operation::Append {
        parent_id: root.clone(),
        content: Content::text("Chapter 1"),
        label: Some("chapter-1".into()),
        tags: vec!["chapter".into()],
        semantic_role: Some("heading1".into()),
        index: None,
    })?;
    
    engine.add_to_transaction(&txn1, Operation::Append {
        parent_id: root.clone(),
        content: Content::text("Chapter 2"),
        label: Some("chapter-2".into()),
        tags: vec!["chapter".into()],
        semantic_role: Some("heading1".into()),
        index: None,
    })?;
    
    let results = engine.commit_transaction(&txn1, &mut doc)?;
    println!("Added {} blocks", results.len());
    
    let chapter1_id = results[0].affected_blocks[0].clone();
    let chapter2_id = results[1].affected_blocks[0].clone();
    
    // Transaction 2: Add content to chapters
    let txn2 = engine.begin_named_transaction("add-content");
    
    engine.add_to_transaction(&txn2, Operation::Append {
        parent_id: chapter1_id.clone(),
        content: Content::text("Introduction to the topic."),
        label: None,
        tags: vec![],
        semantic_role: Some("paragraph".into()),
        index: None,
    })?;
    
    engine.add_to_transaction(&txn2, Operation::Append {
        parent_id: chapter2_id.clone(),
        content: Content::text("Advanced concepts."),
        label: None,
        tags: vec![],
        semantic_role: Some("paragraph".into()),
        index: None,
    })?;
    
    // Add cross-reference
    engine.add_to_transaction(&txn2, Operation::Link {
        source: chapter2_id.clone(),
        edge_type: EdgeType::References,
        target: chapter1_id.clone(),
        metadata: None,
    })?;
    
    let results = engine.commit_transaction(&txn2, &mut doc)?;
    println!("Transaction 2: {} operations", results.len());
    
    // Transaction 3: Demonstrate rollback
    let txn3 = engine.begin_transaction();
    
    engine.add_to_transaction(&txn3, Operation::Delete {
        block_id: chapter1_id.clone(),
        cascade: true,
        preserve_children: false,
    })?;
    
    // Decide not to delete
    engine.rollback_transaction(&txn3)?;
    println!("Rolled back deletion");
    
    // Chapter 1 still exists
    assert!(doc.get_block(&chapter1_id).is_some());
    
    println!("Final document has {} blocks", doc.block_count());
    
    Ok(())
}
\`\`\`

## Best Practices

### 1. Use Named Transactions for Clarity

\`\`\`rust
// Good - descriptive name
let txn = engine.begin_named_transaction("import-chapter-3");

// Less ideal - anonymous
let txn = engine.begin_transaction();
\`\`\`

### 2. Keep Transactions Short

\`\`\`rust
// Good - focused transaction
let txn = engine.begin_transaction();
engine.add_to_transaction(&txn, op1)?;
engine.add_to_transaction(&txn, op2)?;
engine.commit_transaction(&txn, &mut doc)?;

// Less ideal - long-running transaction
let txn = engine.begin_transaction();
// ... many operations over time ...
// Risk of timeout
\`\`\`

### 3. Handle Errors Appropriately

\`\`\`rust
let txn = engine.begin_transaction();

match engine.add_to_transaction(&txn, operation) {
    Ok(_) => {},
    Err(e) => {
        engine.rollback_transaction(&txn)?;
        return Err(e.into());
    }
}

match engine.commit_transaction(&txn, &mut doc) {
    Ok(results) => {
        // Check individual results
        for result in &results {
            if !result.success {
                println!("Warning: {:?}", result.error);
            }
        }
    }
    Err(e) => {
        // Transaction failed
        return Err(e.into());
    }
}
\`\`\`

### 4. Clean Up Periodically

\`\`\`rust
// In long-running applications
mgr.cleanup(); // Remove completed/timed out transactions
\`\`\`

## See Also

- [Operations](./operations.md) - Operation types
- [Snapshots](./snapshots.md) - Document versioning
- [UCL Commands](../ucl-parser/commands.md) - Transaction commands in UCL
`,__vite_glob_0_27=`# Validation

The validation pipeline ensures document integrity by checking for structural issues, resource limits, and consistency.

## Validation Result

\`\`\`rust
pub struct ValidationResult {
    pub valid: bool,
    pub issues: Vec<ValidationIssue>,
}

pub struct ValidationIssue {
    pub severity: ValidationSeverity,
    pub code: ErrorCode,
    pub message: String,
    pub location: Option<Location>,
    pub suggestion: Option<String>,
}

pub enum ValidationSeverity {
    Error,   // Document is invalid
    Warning, // Potential issue
    Info,    // Informational
}
\`\`\`

## Basic Usage

\`\`\`rust
use ucm_engine::Engine;
use ucm_core::Document;

let engine = Engine::new();
let doc = Document::create();

let result = engine.validate(&doc);

if result.valid {
    println!("Document is valid!");
} else {
    println!("Document has issues:");
    for issue in &result.issues {
        println!("  [{:?}] {}", issue.severity, issue.message);
    }
}
\`\`\`

## Validation Pipeline

\`\`\`rust
use ucm_engine::validate::{ValidationPipeline, ResourceLimits};

// Default pipeline
let validator = ValidationPipeline::new();

// With custom limits
let limits = ResourceLimits {
    max_document_size: 10 * 1024 * 1024,  // 10MB
    max_block_count: 50_000,
    max_block_size: 1 * 1024 * 1024,      // 1MB
    max_nesting_depth: 20,
    max_edges_per_block: 500,
};
let validator = ValidationPipeline::with_limits(limits);

let result = validator.validate_document(&doc);
\`\`\`

## Resource Limits

\`\`\`rust
pub struct ResourceLimits {
    /// Maximum total document size (default: 50MB)
    pub max_document_size: usize,
    
    /// Maximum number of blocks (default: 100,000)
    pub max_block_count: usize,
    
    /// Maximum size of a single block (default: 5MB)
    pub max_block_size: usize,
    
    /// Maximum nesting depth (default: 50)
    pub max_nesting_depth: usize,
    
    /// Maximum edges per block (default: 1,000)
    pub max_edges_per_block: usize,
}
\`\`\`

## Validation Checks

### Structure Validation

**Cycle Detection**
\`\`\`rust
// Cycles in document structure are errors
// E201: Cycle detected in structure
\`\`\`

**Nesting Depth**
\`\`\`rust
// Deep nesting beyond limit
// E403: Nesting depth limit exceeded
\`\`\`

**Missing References**
\`\`\`rust
// Structure references non-existent blocks
// E001: Block not found
\`\`\`

### Block Validation

**Block Size**
\`\`\`rust
// Block content exceeds size limit
// E402: Block size limit exceeded
\`\`\`

**Edge Count**
\`\`\`rust
// Too many edges on a single block
// E404: Edge count limit exceeded
\`\`\`

**Dangling Edge Targets**
\`\`\`rust
// Edge points to non-existent block
// E001: Block not found
\`\`\`

### Document Validation

**Block Count**
\`\`\`rust
// Too many blocks in document
// E400: Document size limit exceeded
\`\`\`

**Orphaned Blocks**
\`\`\`rust
// Blocks unreachable from root (warning)
// E203: Orphaned block detected
\`\`\`

## Working with Results

### Filter by Severity

\`\`\`rust
let result = engine.validate(&doc);

// Get only errors
let errors = result.errors();
for error in errors {
    eprintln!("ERROR [{}]: {}", error.code, error.message);
}

// Get only warnings
let warnings = result.warnings();
for warning in warnings {
    println!("WARNING [{}]: {}", warning.code, warning.message);
}
\`\`\`

### Check Validity

\`\`\`rust
let result = engine.validate(&doc);

// Document is valid if no errors (warnings are OK)
if result.valid {
    println!("Ready to proceed");
} else {
    println!("Fix {} errors before continuing", result.errors().len());
}
\`\`\`

### Merge Results

\`\`\`rust
let mut result1 = validator.validate_document(&doc);
let result2 = validate_custom_rules(&doc);

result1.merge(result2);

// result1 now contains all issues from both validations
\`\`\`

## Validating Block IDs

\`\`\`rust
let validator = ValidationPipeline::new();

// Validate block ID format
match validator.validate_block_id("blk_a1b2c3d4e5f6a1b2c3d4e5f6") {
    Ok(id) => println!("Valid ID: {}", id),
    Err(e) => eprintln!("Invalid ID: {}", e),
}

// Invalid formats
assert!(validator.validate_block_id("invalid").is_err());
assert!(validator.validate_block_id("blk_xyz").is_err());
\`\`\`

## Error Codes

| Code | Description |
|------|-------------|
| E001 | Block not found |
| E002 | Invalid block ID format |
| E201 | Cycle detected in structure |
| E203 | Orphaned block (warning) |
| E400 | Document size exceeded |
| E402 | Block size exceeded |
| E403 | Nesting depth exceeded |
| E404 | Edge count exceeded |

## Validation on Operations

The engine can validate after each operation:

\`\`\`rust
use ucm_engine::{Engine, EngineConfig};

let config = EngineConfig {
    validate_on_operation: true,  // Enable (default)
    ..Default::default()
};

let engine = Engine::with_config(config);

// Each operation triggers validation
let result = engine.execute(&mut doc, operation)?;

if !result.success {
    // Operation failed validation
    println!("Failed: {:?}", result.error);
}
\`\`\`

## Custom Validation

Extend validation with custom rules:

\`\`\`rust
use ucm_engine::validate::ValidationResult;
use ucm_core::{ValidationIssue, ValidationSeverity, ErrorCode, Document};

fn validate_custom_rules(doc: &Document) -> ValidationResult {
    let mut issues = Vec::new();
    
    // Example: Require all blocks to have labels
    for block in doc.blocks.values() {
        if block.metadata.label.is_none() && !block.is_root() {
            issues.push(ValidationIssue::warning(
                ErrorCode::E200SchemaViolation,
                format!("Block {} has no label", block.id),
            ));
        }
    }
    
    // Example: Require at least one heading
    let has_heading = doc.blocks.values().any(|b| {
        b.metadata.semantic_role
            .as_ref()
            .map(|r| r.category.as_str().starts_with("heading"))
            .unwrap_or(false)
    });
    
    if !has_heading {
        issues.push(ValidationIssue::warning(
            ErrorCode::E202InvalidStructure,
            "Document has no headings".to_string(),
        ));
    }
    
    ValidationResult::invalid(issues)
}

// Use with standard validation
let mut result = engine.validate(&doc);
result.merge(validate_custom_rules(&doc));
\`\`\`

## Complete Example

\`\`\`rust
use ucm_engine::{Engine, Operation};
use ucm_engine::validate::{ValidationPipeline, ResourceLimits};
use ucm_core::{Content, Document, Block};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create validator with strict limits
    let limits = ResourceLimits {
        max_block_count: 100,
        max_nesting_depth: 5,
        max_block_size: 10_000,
        max_edges_per_block: 10,
        ..Default::default()
    };
    let validator = ValidationPipeline::with_limits(limits);
    
    let mut doc = Document::create();
    let root = doc.root.clone();
    
    // Add some blocks
    for i in 0..10 {
        let block = Block::new(
            Content::text(&format!("Block {}", i)),
            Some("paragraph")
        );
        doc.add_block(block, &root)?;
    }
    
    // Validate
    let result = validator.validate_document(&doc);
    
    println!("Validation Result:");
    println!("  Valid: {}", result.valid);
    println!("  Errors: {}", result.errors().len());
    println!("  Warnings: {}", result.warnings().len());
    
    if !result.valid {
        println!("\\nErrors:");
        for error in result.errors() {
            println!("  [{}] {}", error.code, error.message);
            if let Some(suggestion) = &error.suggestion {
                println!("      Suggestion: {}", suggestion);
            }
        }
    }
    
    if !result.warnings().is_empty() {
        println!("\\nWarnings:");
        for warning in result.warnings() {
            println!("  [{}] {}", warning.code, warning.message);
        }
    }
    
    // Create orphan to demonstrate warning
    let orphan = Block::new(Content::text("Orphan"), None);
    let orphan_id = doc.add_block(orphan, &root)?;
    doc.remove_from_structure(&orphan_id);
    
    let result = validator.validate_document(&doc);
    println!("\\nAfter creating orphan:");
    println!("  Valid: {}", result.valid); // Still valid (orphans are warnings)
    println!("  Warnings: {}", result.warnings().len());
    
    Ok(())
}
\`\`\`

## Best Practices

### 1. Validate Before Serialization

\`\`\`rust
let result = engine.validate(&doc);
if !result.valid {
    return Err("Cannot save invalid document".into());
}
save_document(&doc)?;
\`\`\`

### 2. Use Appropriate Limits

\`\`\`rust
// For user-generated content
let limits = ResourceLimits {
    max_block_count: 1_000,
    max_block_size: 100_000,
    ..Default::default()
};

// For machine-generated content
let limits = ResourceLimits {
    max_block_count: 100_000,
    max_block_size: 5_000_000,
    ..Default::default()
};
\`\`\`

### 3. Handle Warnings Appropriately

\`\`\`rust
let result = engine.validate(&doc);

// Errors are blockers
if !result.valid {
    return Err("Document has errors".into());
}

// Warnings may need attention
if !result.warnings().is_empty() {
    log::warn!("Document has {} warnings", result.warnings().len());
    for w in result.warnings() {
        log::warn!("  {}", w.message);
    }
}
\`\`\`

### 4. Validate After Bulk Operations

\`\`\`rust
// After import or bulk changes
doc.rebuild_indices();
let result = engine.validate(&doc);
\`\`\`

### 5. Provide Suggestions

\`\`\`rust
let issue = ValidationIssue::error(
    ErrorCode::E001BlockNotFound,
    format!("Block {} not found", block_id),
).with_suggestion("Check if the block was deleted or if the ID is correct");
\`\`\`

## See Also

- [Operations](./operations.md) - Document operations
- [Documents](../ucm-core/documents.md) - Document structure
- [Error Handling](../ucm-core/README.md) - Error codes
`,__vite_glob_0_28=`# UCP API

**ucp-api** provides a high-level API for working with UCP, combining all core crates into a convenient interface for application development.

## Overview

The UCP API is the recommended entry point for most applications. It provides:

- **UcpClient** - Main client for document manipulation
- **Unified interface** - Access to all UCP functionality
- **UCL integration** - Execute UCL commands directly
- **Convenience methods** - Common operations simplified

## Installation

\`\`\`toml
[dependencies]
ucp-api = "0.1.4"0.1.3
\`\`\`

## Quick Start

\`\`\`rust
use ucp_api::UcpClient;

fn main() {
    // Create client
    let client = UcpClient::new();
    
    // Create document
    let mut doc = client.create_document();
    let root = doc.root.clone();
    
    // Add content
    client.add_text(&mut doc, &root, "Hello, UCP!", Some("intro")).unwrap();
    
    // Execute UCL
    client.execute_ucl(&mut doc, r#"
        APPEND blk_root text :: "More content"
    "#).unwrap();
    
    // Serialize
    let json = client.to_json(&doc).unwrap();
    println!("{}", json);
}
\`\`\`

## UcpClient

The main entry point for UCP operations.

### Creating a Client

\`\`\`rust
use ucp_api::UcpClient;

// Default client
let client = UcpClient::new();
\`\`\`

### Document Operations

\`\`\`rust
// Create new document
let mut doc = client.create_document();

// Get document info
println!("Document ID: {}", doc.id);
println!("Root block: {}", doc.root);
println!("Block count: {}", doc.block_count());
\`\`\`

### Adding Content

\`\`\`rust
let root = doc.root.clone();

// Add text block
let text_id = client.add_text(
    &mut doc,
    &root,
    "Paragraph content",
    Some("paragraph")  // semantic role
).unwrap();

// Add code block
let code_id = client.add_code(
    &mut doc,
    &root,
    "rust",
    "fn main() {\\n    println!(\\"Hello!\\");\\n}"
).unwrap();
\`\`\`

### Executing UCL

\`\`\`rust
// Parse UCL (without executing)
let commands = client.parse_ucl(r#"
    EDIT blk_abc SET content.text = "Hello"
    APPEND blk_root text :: "New block"
"#).unwrap();

println!("Parsed {} commands", commands.len());

// Execute UCL commands
let results = client.execute_ucl(&mut doc, r#"
    APPEND blk_root text WITH label="intro" :: "Introduction"
    EDIT blk_intro SET metadata.tags += ["important"]
"#).unwrap();

for result in &results {
    if result.success {
        println!("Success: {:?}", result.affected_blocks);
    } else {
        println!("Failed: {:?}", result.error);
    }
}
\`\`\`

### Serialization

\`\`\`rust
// Serialize document to JSON
let json = client.to_json(&doc).unwrap();
println!("{}", json);

// Pretty-print if needed
let pretty: serde_json::Value = serde_json::from_str(&json).unwrap();
println!("{}", serde_json::to_string_pretty(&pretty).unwrap());
\`\`\`

## Complete Example

\`\`\`rust
use ucp_api::UcpClient;
use ucm_core::{Block, Content, Edge, EdgeType};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = UcpClient::new();
    let mut doc = client.create_document();
    let root = doc.root.clone();
    
    // Build document structure using convenience methods
    let title_id = client.add_text(
        &mut doc,
        &root,
        "My Technical Guide",
        Some("title")
    )?;
    
    let intro_id = client.add_text(
        &mut doc,
        &root,
        "Welcome to this comprehensive guide.",
        Some("intro")
    )?;
    
    // Add code example
    let code_id = client.add_code(
        &mut doc,
        &root,
        "rust",
        r#"fn main() {
    println!("Hello, UCP!");
}"#
    )?;
    
    // Use UCL for more complex operations
    client.execute_ucl(&mut doc, r#"
        // Add tags to intro
        EDIT blk_intro SET metadata.tags += ["overview", "start-here"]
        
        // Add reference from intro to code
        LINK blk_intro references blk_code
        
        // Create a snapshot
        SNAPSHOT CREATE "v1" WITH description="Initial version"
    "#)?;
    
    // Query document
    let code_blocks = doc.indices.find_by_type("code");
    println!("Code blocks: {}", code_blocks.len());
    
    let important = doc.indices.find_by_tag("overview");
    println!("Overview blocks: {}", important.len());
    
    // Validate
    let issues = doc.validate();
    if issues.is_empty() {
        println!("Document is valid!");
    }
    
    // Serialize
    let json = client.to_json(&doc)?;
    println!("\\nDocument JSON:\\n{}", json);
    
    Ok(())
}
\`\`\`

## Integration with Other Crates

UCP API re-exports types from underlying crates:

\`\`\`rust
use ucp_api::UcpClient;

// From ucm-core
use ucm_core::{Block, Content, Document, Edge, EdgeType, BlockId};
use ucm_core::metadata::{SemanticRole, RoleCategory, TokenEstimate};

// From ucm-engine
use ucm_engine::{Engine, Operation, OperationResult};

// From ucl-parser
use ucl_parser::{parse, parse_commands, Command};
\`\`\`

## Error Handling

\`\`\`rust
use ucp_api::UcpClient;

let client = UcpClient::new();
let mut doc = client.create_document();

// Handle UCL errors
match client.execute_ucl(&mut doc, "INVALID SYNTAX") {
    Ok(results) => {
        for result in results {
            if !result.success {
                eprintln!("Operation failed: {:?}", result.error);
            }
        }
    }
    Err(e) => {
        eprintln!("Parse error: {}", e);
    }
}

// Handle add errors
match client.add_text(&mut doc, &invalid_parent, "text", None) {
    Ok(id) => println!("Added: {}", id),
    Err(e) => eprintln!("Failed to add: {}", e),
}
\`\`\`

## Best Practices

### 1. Use UCL for Complex Operations

\`\`\`rust
// Good - UCL for multiple related operations
client.execute_ucl(&mut doc, r#"
    APPEND blk_root text WITH label="section" :: "Section 1"
    APPEND blk_section text :: "Content..."
    LINK blk_section references blk_intro
"#)?;

// Less ideal - multiple separate calls
let section = client.add_text(&mut doc, &root, "Section 1", None)?;
let content = client.add_text(&mut doc, &section, "Content...", None)?;
// Manual edge management...
\`\`\`

### 2. Use Convenience Methods for Simple Operations

\`\`\`rust
// Good - simple addition
let id = client.add_text(&mut doc, &root, "Hello", Some("intro"))?;

// Overkill for simple cases
client.execute_ucl(&mut doc, r#"
    APPEND blk_root text WITH role="intro" :: "Hello"
"#)?;
\`\`\`

### 3. Validate Before Serialization

\`\`\`rust
let issues = doc.validate();
if !issues.is_empty() {
    for issue in &issues {
        log::warn!("Validation issue: {}", issue.message);
    }
}

let json = client.to_json(&doc)?;
\`\`\`

### 4. Use Snapshots for Safety

\`\`\`rust
// Before risky operations
client.execute_ucl(&mut doc, r#"
    SNAPSHOT CREATE "checkpoint"
"#)?;

// Perform operations...

// If something goes wrong, restore
// client.execute_ucl(&mut doc, "SNAPSHOT RESTORE \\"checkpoint\\"")?;
\`\`\`

## See Also

- [Quick Start Guide](../getting-started/quick-start.md) - Getting started with UCP
- [UCL Commands](../ucl-parser/commands.md) - UCL command reference
- [UCM Core](../ucm-core/README.md) - Core types documentation
- [UCM Engine](../ucm-engine/README.md) - Engine documentation
`,__vite_glob_0_29=`# UCP LLM Utilities

**ucp-llm** contains helpers for turning UCM documents into LLM-friendly prompts and UCL command scaffolds. It focuses on token efficiency, deterministic mappings, and safe prompt composition.

## Features

| Component | Description |
|-----------|-------------|
| [\`IdMapper\`](#idmapper) | Maps long \`BlockId\`s (\`blk_…\`) to short numeric IDs to save tokens, and converts UCL in both directions |
| [\`PromptBuilder\`](#promptbuilder) | Builds capability-scoped system instructions, task context, and rule sets for LLM agents |
| [\`presets\`](#presets) | Ready-made prompt configurations (basic editing, structure manipulation, etc.) |

### IdMapper

Token budgets collapse quickly when every UCL command references \`blk_a1b2…\`. \`IdMapper\` provides a deterministic mapping so prompts can use \`1\`, \`2\`, \`3\`, … instead. Key APIs:

\`\`\`rust
use ucp_llm::IdMapper;
use ucm_core::{Content, Document};

let mut doc = Document::create();
let root = doc.root.clone();
let heading = doc.add_block(Content::text("Intro"), Some("heading1"), &root)?;

let mapper = IdMapper::from_document(&doc);
assert_eq!(mapper.to_short_id(&root), Some(1));
assert!(mapper.to_short_id(&heading).is_some());

let long = "EDIT blk_ff00000000000000000000 SET text = \\"Hello\\"";
let short = mapper.shorten_ucl(long);
assert_eq!(short, "EDIT 1 SET text = \\"Hello\\"");
\`\`\`

Highlights:
- Deterministic ordering (root first, remaining blocks sorted by ID)
- \`shorten_ucl\` / \`expand_ucl\` for round-tripping commands
- \`document_to_prompt\` helper for normalized document representation
- \`estimate_token_savings\` for quick what-if analysis

#### Document Format

\`document_to_prompt\` outputs a normalized, flat format with two sections:

\`\`\`
Document structure:
1: 2 3
2:
3:

Blocks:
1 type=text content=""
2 type=text content="Title"
3 type=text content="Paragraph"
\`\`\`

- **Document structure**: Parent-child relationships (\`parent: child1 child2 ...\`)
- **Blocks**: Block details with type and escaped content

### PromptBuilder

\`PromptBuilder\` assembles the system/task instructions LLMs need to safely emit UCL.

\`\`\`rust
use ucp_llm::{PromptBuilder, UclCapability};

let builder = PromptBuilder::new()
    .with_capability(UclCapability::Edit)
    .with_capability(UclCapability::Append)
    .with_rule("Never delete blocks unless explicitly asked")
    .with_short_ids(true);

let system_prompt = builder.build_system_prompt();
let doc_context = "Document structure:\\n1: 2\\n2:\\n\\nBlocks:\\n1 type=text content=\\"\\"\\n2 type=text content=\\"Hello\\"";
let final_prompt = builder.build_prompt(&doc_context, "Update block 2 to mention the date");
\`\`\`

Capabilities gate which command documentation is included (\`EDIT\`, \`APPEND\`, \`MOVE\`, \`DELETE\`, \`LINK\`, \`SNAPSHOT\`, \`TRANSACTION\`). Short-ID mode automatically updates rule text so the model knows IDs like \`1\`, \`2\`, \`3\` will appear.

### Presets

\`\`\`rust
use ucp_llm::presets;

let editing = presets::basic_editing();      // EDIT/APPEND/DELETE
let structural = presets::structure_manipulation();
let token_efficient = presets::token_efficient();
\`\`\`

Use these as starting points for common workflows.

## When to Use \`ucp-llm\`

- Building an agent that reads a UCM document and must output UCL
- Preparing evaluation prompts for the benchmarking suite
- Any time you need short IDs, consistent command references, or prebuilt rule sets for LLM instructions

## Dependency

Add the crate via workspace dependency:

\`\`\`toml
ucp-llm = { path = "crates/ucp-llm" }
\`\`\`

## See Also

- [Getting Started › Concepts](../getting-started/concepts.md) – background on BlockIds and deterministic IDs
- [UCL Commands](../ucl-parser/commands.md) – reference for the actual command syntax
`,__vite_glob_0_30=`# UCP Observe

**ucp-observe** provides observability utilities for UCP applications, including tracing initialization, audit logging, and metrics collection.

## Overview

UCP Observe helps you:

- **Initialize tracing** - Set up structured logging
- **Audit operations** - Track document changes
- **Collect metrics** - Monitor performance

## Installation

\`\`\`toml
[dependencies]
ucp-observe = "0.1.4"
\`\`\`

## Quick Start

\`\`\`rust
use ucp_observe::{init_tracing, AuditEntry, MetricsRecorder};

fn main() {
    // Initialize tracing
    init_tracing();
    
    // Create metrics recorder
    let mut metrics = MetricsRecorder::new();
    
    // Record operations
    metrics.record("document_created", 1);
    metrics.record("blocks_added", 5);
    
    // Create audit entry
    let audit = AuditEntry::new("create_document")
        .with_user("alice")
        .with_detail("document_id", "doc-123");
    
    println!("{}", audit);
}
\`\`\`

## Tracing

### Initialize Tracing

\`\`\`rust
use ucp_observe::init_tracing;

fn main() {
    // Initialize with default settings
    init_tracing();
    
    // Now tracing macros work
    tracing::info!("Application started");
    tracing::debug!("Debug information");
}
\`\`\`

### Tracing in UCP Operations

The UCM Engine uses tracing for operation logging:

\`\`\`rust
use ucm_engine::Engine;
use tracing::info;

let engine = Engine::new();

// Operations are automatically traced
let result = engine.execute(&mut doc, operation)?;

// Add your own traces
info!(
    operation = "custom_operation",
    block_count = doc.block_count(),
    "Operation completed"
);
\`\`\`

### Log Levels

| Level | Usage |
|-------|-------|
| \`error\` | Errors that need attention |
| \`warn\` | Warnings about potential issues |
| \`info\` | General information |
| \`debug\` | Detailed debugging information |
| \`trace\` | Very detailed tracing |

\`\`\`rust
use tracing::{error, warn, info, debug, trace};

error!("Operation failed: {}", error_message);
warn!("Deprecated feature used");
info!("Document saved");
debug!("Block ID: {}", block_id);
trace!("Entering function");
\`\`\`

## Audit Logging

### AuditEntry

Track operations for compliance and debugging:

\`\`\`rust
use ucp_observe::AuditEntry;

// Create audit entry
let entry = AuditEntry::new("edit_block")
    .with_user("alice@example.com")
    .with_detail("block_id", "blk_abc123")
    .with_detail("operation", "update_content")
    .with_detail("old_value", "Hello")
    .with_detail("new_value", "Hello, World!");

// Log the entry
println!("{}", entry);

// Access fields
println!("Action: {}", entry.action);
println!("User: {:?}", entry.user);
println!("Timestamp: {}", entry.timestamp);
\`\`\`

### AuditEntry Structure

\`\`\`rust
pub struct AuditEntry {
    /// Unique entry ID
    pub id: String,
    
    /// Action performed
    pub action: String,
    
    /// User who performed the action
    pub user: Option<String>,
    
    /// When the action occurred
    pub timestamp: DateTime<Utc>,
    
    /// Additional details
    pub details: HashMap<String, String>,
}
\`\`\`

### Audit Trail Example

\`\`\`rust
use ucp_observe::AuditEntry;
use std::collections::VecDeque;

struct AuditTrail {
    entries: VecDeque<AuditEntry>,
    max_entries: usize,
}

impl AuditTrail {
    fn new(max_entries: usize) -> Self {
        Self {
            entries: VecDeque::new(),
            max_entries,
        }
    }
    
    fn log(&mut self, entry: AuditEntry) {
        if self.entries.len() >= self.max_entries {
            self.entries.pop_front();
        }
        self.entries.push_back(entry);
    }
    
    fn recent(&self, n: usize) -> Vec<&AuditEntry> {
        self.entries.iter().rev().take(n).collect()
    }
}

// Usage
let mut trail = AuditTrail::new(1000);

trail.log(AuditEntry::new("create_document")
    .with_user("alice")
    .with_detail("doc_id", "doc-1"));

trail.log(AuditEntry::new("add_block")
    .with_user("alice")
    .with_detail("doc_id", "doc-1")
    .with_detail("block_id", "blk_abc"));

// Get recent entries
for entry in trail.recent(10) {
    println!("{}: {} by {:?}", entry.timestamp, entry.action, entry.user);
}
\`\`\`

## Metrics Collection

### MetricsRecorder

Simple metrics collection:

\`\`\`rust
use ucp_observe::MetricsRecorder;

let mut metrics = MetricsRecorder::new();

// Record counts
metrics.record("documents_created", 1);
metrics.record("blocks_added", 10);
metrics.record("operations_executed", 5);

// Increment existing metric
metrics.record("operations_executed", 3);  // Now 8

// Get metric value
if let Some(count) = metrics.get("documents_created") {
    println!("Documents created: {}", count);
}

// Get all metrics
for (name, value) in metrics.all() {
    println!("{}: {}", name, value);
}
\`\`\`

### MetricsRecorder Structure

\`\`\`rust
pub struct MetricsRecorder {
    counters: HashMap<String, u64>,
}

impl MetricsRecorder {
    pub fn new() -> Self;
    pub fn record(&mut self, name: &str, value: u64);
    pub fn get(&self, name: &str) -> Option<u64>;
    pub fn all(&self) -> impl Iterator<Item = (&String, &u64)>;
    pub fn reset(&mut self);
}
\`\`\`

### Metrics Example

\`\`\`rust
use ucp_observe::MetricsRecorder;
use ucm_engine::Engine;
use ucm_core::Document;

struct InstrumentedEngine {
    engine: Engine,
    metrics: MetricsRecorder,
}

impl InstrumentedEngine {
    fn new() -> Self {
        Self {
            engine: Engine::new(),
            metrics: MetricsRecorder::new(),
        }
    }
    
    fn execute(&mut self, doc: &mut Document, op: Operation) -> Result<OperationResult> {
        self.metrics.record("operations_total", 1);
        
        let result = self.engine.execute(doc, op)?;
        
        if result.success {
            self.metrics.record("operations_success", 1);
            self.metrics.record("blocks_affected", result.affected_blocks.len() as u64);
        } else {
            self.metrics.record("operations_failed", 1);
        }
        
        Ok(result)
    }
    
    fn report(&self) {
        println!("Metrics Report:");
        for (name, value) in self.metrics.all() {
            println!("  {}: {}", name, value);
        }
    }
}
\`\`\`

## Complete Example

\`\`\`rust
use ucp_observe::{init_tracing, AuditEntry, MetricsRecorder};
use ucm_engine::{Engine, Operation};
use ucm_core::{Content, Document};
use tracing::{info, warn, error, instrument};

struct UcpApplication {
    engine: Engine,
    metrics: MetricsRecorder,
    current_user: Option<String>,
}

impl UcpApplication {
    fn new() -> Self {
        init_tracing();
        
        Self {
            engine: Engine::new(),
            metrics: MetricsRecorder::new(),
            current_user: None,
        }
    }
    
    fn set_user(&mut self, user: &str) {
        self.current_user = Some(user.to_string());
        info!(user = user, "User set");
    }
    
    #[instrument(skip(self, doc))]
    fn create_document(&mut self) -> Document {
        let doc = Document::create();
        
        self.metrics.record("documents_created", 1);
        
        let audit = AuditEntry::new("create_document")
            .with_user(self.current_user.as_deref().unwrap_or("anonymous"))
            .with_detail("document_id", &doc.id.0);
        
        info!(%audit, "Document created");
        
        doc
    }
    
    #[instrument(skip(self, doc, op), fields(op_type = %op.description()))]
    fn execute(&mut self, doc: &mut Document, op: Operation) -> Result<(), String> {
        self.metrics.record("operations_total", 1);
        
        let result = self.engine.execute(doc, op.clone())
            .map_err(|e| e.to_string())?;
        
        if result.success {
            self.metrics.record("operations_success", 1);
            
            let audit = AuditEntry::new(&op.description())
                .with_user(self.current_user.as_deref().unwrap_or("anonymous"))
                .with_detail("affected_blocks", &format!("{:?}", result.affected_blocks));
            
            info!(%audit, "Operation succeeded");
        } else {
            self.metrics.record("operations_failed", 1);
            
            warn!(
                error = ?result.error,
                "Operation failed"
            );
            
            return Err(result.error.unwrap_or_default());
        }
        
        Ok(())
    }
    
    fn report_metrics(&self) {
        info!("=== Metrics Report ===");
        for (name, value) in self.metrics.all() {
            info!(metric = name, value = value, "Metric");
        }
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut app = UcpApplication::new();
    
    app.set_user("alice@example.com");
    
    let mut doc = app.create_document();
    let root = doc.root.clone();
    
    // Execute operations
    app.execute(&mut doc, Operation::Append {
        parent_id: root.clone(),
        content: Content::text("Hello, World!"),
        label: Some("greeting".into()),
        tags: vec![],
        semantic_role: Some("intro".into()),
        index: None,
    })?;
    
    app.execute(&mut doc, Operation::Append {
        parent_id: root,
        content: Content::code("rust", "fn main() {}"),
        label: Some("example".into()),
        tags: vec!["code".into()],
        semantic_role: Some("code".into()),
        index: None,
    })?;
    
    // Report
    app.report_metrics();
    
    Ok(())
}
\`\`\`

## Integration with External Systems

### Prometheus-style Metrics

\`\`\`rust
use ucp_observe::MetricsRecorder;

impl MetricsRecorder {
    fn to_prometheus(&self) -> String {
        let mut output = String::new();
        for (name, value) in self.all() {
            output.push_str(&format!(
                "ucp_{} {}\\n",
                name.replace("-", "_"),
                value
            ));
        }
        output
    }
}

// Expose via HTTP endpoint
// GET /metrics -> metrics.to_prometheus()
\`\`\`

### JSON Audit Export

\`\`\`rust
use ucp_observe::AuditEntry;
use serde_json;

impl AuditEntry {
    fn to_json(&self) -> String {
        serde_json::json!({
            "id": self.id,
            "action": self.action,
            "user": self.user,
            "timestamp": self.timestamp.to_rfc3339(),
            "details": self.details,
        }).to_string()
    }
}

// Send to logging service
// audit_service.log(entry.to_json());
\`\`\`

## Best Practices

### 1. Initialize Tracing Early

\`\`\`rust
fn main() {
    // First thing in main
    init_tracing();
    
    // Rest of application...
}
\`\`\`

### 2. Use Structured Logging

\`\`\`rust
// Good - structured fields
info!(
    document_id = %doc.id,
    block_count = doc.block_count(),
    "Document loaded"
);

// Less ideal - string interpolation
info!("Document {} loaded with {} blocks", doc.id, doc.block_count());
\`\`\`

### 3. Include Context in Audit Entries

\`\`\`rust
let audit = AuditEntry::new("delete_block")
    .with_user(&user_id)
    .with_detail("block_id", &block_id.to_string())
    .with_detail("reason", "User requested deletion")
    .with_detail("cascade", &cascade.to_string());
\`\`\`

### 4. Reset Metrics Periodically

\`\`\`rust
// For time-windowed metrics
metrics.reset();

// Or use separate recorders for different windows
let hourly_metrics = MetricsRecorder::new();
let daily_metrics = MetricsRecorder::new();
\`\`\`

## See Also

- [UCM Engine](../ucm-engine/README.md) - Engine with tracing support
- [UCP API](../ucp-api/README.md) - High-level API
`;function ok$1(){}function unreachable(){}function stringify$1(t,a){const l={};return(t[t.length-1]===""?[...t,""]:t).join((l.padRight?" ":"")+","+(l.padLeft===!1?"":" ")).trim()}const nameRe=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,nameReJsx=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,emptyOptions$2={};function name(t,a){return(emptyOptions$2.jsx?nameReJsx:nameRe).test(t)}const re=/[ \t\n\f\r]/g;function whitespace(t){return typeof t=="object"?t.type==="text"?empty$1(t.value):!1:empty$1(t)}function empty$1(t){return t.replace(re,"")===""}class Schema{constructor(a,l,c){this.normal=l,this.property=a,c&&(this.space=c)}}Schema.prototype.normal={};Schema.prototype.property={};Schema.prototype.space=void 0;function merge(t,a){const l={},c={};for(const s of t)Object.assign(l,s.property),Object.assign(c,s.normal);return new Schema(l,c,a)}function normalize$1(t){return t.toLowerCase()}class Info{constructor(a,l){this.attribute=l,this.property=a}}Info.prototype.attribute="";Info.prototype.booleanish=!1;Info.prototype.boolean=!1;Info.prototype.commaOrSpaceSeparated=!1;Info.prototype.commaSeparated=!1;Info.prototype.defined=!1;Info.prototype.mustUseProperty=!1;Info.prototype.number=!1;Info.prototype.overloadedBoolean=!1;Info.prototype.property="";Info.prototype.spaceSeparated=!1;Info.prototype.space=void 0;let powers=0;const boolean=increment(),booleanish=increment(),overloadedBoolean=increment(),number=increment(),spaceSeparated=increment(),commaSeparated=increment(),commaOrSpaceSeparated=increment();function increment(){return 2**++powers}const types=Object.freeze(Object.defineProperty({__proto__:null,boolean,booleanish,commaOrSpaceSeparated,commaSeparated,number,overloadedBoolean,spaceSeparated},Symbol.toStringTag,{value:"Module"})),checks=Object.keys(types);class DefinedInfo extends Info{constructor(a,l,c,s){let d=-1;if(super(a,l),mark(this,"space",s),typeof c=="number")for(;++d<checks.length;){const m=checks[d];mark(this,checks[d],(c&types[m])===types[m])}}}DefinedInfo.prototype.defined=!0;function mark(t,a,l){l&&(t[a]=l)}function create(t){const a={},l={};for(const[c,s]of Object.entries(t.properties)){const d=new DefinedInfo(c,t.transform(t.attributes||{},c),s,t.space);t.mustUseProperty&&t.mustUseProperty.includes(c)&&(d.mustUseProperty=!0),a[c]=d,l[normalize$1(c)]=c,l[normalize$1(d.attribute)]=c}return new Schema(a,l,t.space)}const aria=create({properties:{ariaActiveDescendant:null,ariaAtomic:booleanish,ariaAutoComplete:null,ariaBusy:booleanish,ariaChecked:booleanish,ariaColCount:number,ariaColIndex:number,ariaColSpan:number,ariaControls:spaceSeparated,ariaCurrent:null,ariaDescribedBy:spaceSeparated,ariaDetails:null,ariaDisabled:booleanish,ariaDropEffect:spaceSeparated,ariaErrorMessage:null,ariaExpanded:booleanish,ariaFlowTo:spaceSeparated,ariaGrabbed:booleanish,ariaHasPopup:null,ariaHidden:booleanish,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:spaceSeparated,ariaLevel:number,ariaLive:null,ariaModal:booleanish,ariaMultiLine:booleanish,ariaMultiSelectable:booleanish,ariaOrientation:null,ariaOwns:spaceSeparated,ariaPlaceholder:null,ariaPosInSet:number,ariaPressed:booleanish,ariaReadOnly:booleanish,ariaRelevant:null,ariaRequired:booleanish,ariaRoleDescription:spaceSeparated,ariaRowCount:number,ariaRowIndex:number,ariaRowSpan:number,ariaSelected:booleanish,ariaSetSize:number,ariaSort:null,ariaValueMax:number,ariaValueMin:number,ariaValueNow:number,ariaValueText:null,role:null},transform(t,a){return a==="role"?a:"aria-"+a.slice(4).toLowerCase()}});function caseSensitiveTransform(t,a){return a in t?t[a]:a}function caseInsensitiveTransform(t,a){return caseSensitiveTransform(t,a.toLowerCase())}const html$2=create({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:commaSeparated,acceptCharset:spaceSeparated,accessKey:spaceSeparated,action:null,allow:null,allowFullScreen:boolean,allowPaymentRequest:boolean,allowUserMedia:boolean,alt:null,as:null,async:boolean,autoCapitalize:null,autoComplete:spaceSeparated,autoFocus:boolean,autoPlay:boolean,blocking:spaceSeparated,capture:null,charSet:null,checked:boolean,cite:null,className:spaceSeparated,cols:number,colSpan:null,content:null,contentEditable:booleanish,controls:boolean,controlsList:spaceSeparated,coords:number|commaSeparated,crossOrigin:null,data:null,dateTime:null,decoding:null,default:boolean,defer:boolean,dir:null,dirName:null,disabled:boolean,download:overloadedBoolean,draggable:booleanish,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:boolean,formTarget:null,headers:spaceSeparated,height:number,hidden:overloadedBoolean,high:number,href:null,hrefLang:null,htmlFor:spaceSeparated,httpEquiv:spaceSeparated,id:null,imageSizes:null,imageSrcSet:null,inert:boolean,inputMode:null,integrity:null,is:null,isMap:boolean,itemId:null,itemProp:spaceSeparated,itemRef:spaceSeparated,itemScope:boolean,itemType:spaceSeparated,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:boolean,low:number,manifest:null,max:null,maxLength:number,media:null,method:null,min:null,minLength:number,multiple:boolean,muted:boolean,name:null,nonce:null,noModule:boolean,noValidate:boolean,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:boolean,optimum:number,pattern:null,ping:spaceSeparated,placeholder:null,playsInline:boolean,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:boolean,referrerPolicy:null,rel:spaceSeparated,required:boolean,reversed:boolean,rows:number,rowSpan:number,sandbox:spaceSeparated,scope:null,scoped:boolean,seamless:boolean,selected:boolean,shadowRootClonable:boolean,shadowRootDelegatesFocus:boolean,shadowRootMode:null,shape:null,size:number,sizes:null,slot:null,span:number,spellCheck:booleanish,src:null,srcDoc:null,srcLang:null,srcSet:null,start:number,step:null,style:null,tabIndex:number,target:null,title:null,translate:null,type:null,typeMustMatch:boolean,useMap:null,value:booleanish,width:number,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:spaceSeparated,axis:null,background:null,bgColor:null,border:number,borderColor:null,bottomMargin:number,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:boolean,declare:boolean,event:null,face:null,frame:null,frameBorder:null,hSpace:number,leftMargin:number,link:null,longDesc:null,lowSrc:null,marginHeight:number,marginWidth:number,noResize:boolean,noHref:boolean,noShade:boolean,noWrap:boolean,object:null,profile:null,prompt:null,rev:null,rightMargin:number,rules:null,scheme:null,scrolling:booleanish,standby:null,summary:null,text:null,topMargin:number,valueType:null,version:null,vAlign:null,vLink:null,vSpace:number,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:boolean,disableRemotePlayback:boolean,prefix:null,property:null,results:number,security:null,unselectable:null},space:"html",transform:caseInsensitiveTransform}),svg$1=create({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:commaOrSpaceSeparated,accentHeight:number,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:number,amplitude:number,arabicForm:null,ascent:number,attributeName:null,attributeType:null,azimuth:number,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:number,by:null,calcMode:null,capHeight:number,className:spaceSeparated,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:number,diffuseConstant:number,direction:null,display:null,dur:null,divisor:number,dominantBaseline:null,download:boolean,dx:null,dy:null,edgeMode:null,editable:null,elevation:number,enableBackground:null,end:null,event:null,exponent:number,externalResourcesRequired:null,fill:null,fillOpacity:number,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:commaSeparated,g2:commaSeparated,glyphName:commaSeparated,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:number,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:number,horizOriginX:number,horizOriginY:number,id:null,ideographic:number,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:number,k:number,k1:number,k2:number,k3:number,k4:number,kernelMatrix:commaOrSpaceSeparated,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:number,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:number,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:number,overlineThickness:number,paintOrder:null,panose1:null,path:null,pathLength:number,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:spaceSeparated,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:number,pointsAtY:number,pointsAtZ:number,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:commaOrSpaceSeparated,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:commaOrSpaceSeparated,rev:commaOrSpaceSeparated,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:commaOrSpaceSeparated,requiredFeatures:commaOrSpaceSeparated,requiredFonts:commaOrSpaceSeparated,requiredFormats:commaOrSpaceSeparated,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:number,specularExponent:number,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:number,strikethroughThickness:number,string:null,stroke:null,strokeDashArray:commaOrSpaceSeparated,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:number,strokeOpacity:number,strokeWidth:null,style:null,surfaceScale:number,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:commaOrSpaceSeparated,tabIndex:number,tableValues:null,target:null,targetX:number,targetY:number,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:commaOrSpaceSeparated,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:number,underlineThickness:number,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:number,values:null,vAlphabetic:number,vMathematical:number,vectorEffect:null,vHanging:number,vIdeographic:number,version:null,vertAdvY:number,vertOriginX:number,vertOriginY:number,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:number,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:caseSensitiveTransform}),xlink=create({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,a){return"xlink:"+a.slice(5).toLowerCase()}}),xmlns=create({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:caseInsensitiveTransform}),xml=create({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,a){return"xml:"+a.slice(3).toLowerCase()}}),hastToReact={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},cap$1=/[A-Z]/g,dash=/-[a-z]/g,valid=/^data[-\w.:]+$/i;function find(t,a){const l=normalize$1(a);let c=a,s=Info;if(l in t.normal)return t.property[t.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&valid.test(a)){if(a.charAt(4)==="-"){const d=a.slice(5).replace(dash,camelcase);c="data"+d.charAt(0).toUpperCase()+d.slice(1)}else{const d=a.slice(4);if(!dash.test(d)){let m=d.replace(cap$1,kebab);m.charAt(0)!=="-"&&(m="-"+m),a="data"+m}}s=DefinedInfo}return new s(c,a)}function kebab(t){return"-"+t.toLowerCase()}function camelcase(t){return t.charAt(1).toUpperCase()}const html$1=merge([aria,html$2,xlink,xmlns,xml],"html"),svg=merge([aria,svg$1,xlink,xmlns,xml],"svg");function stringify(t){return t.join(" ").trim()}var cjs$2={},cjs$1,hasRequiredCjs$2;function requireCjs$2(){if(hasRequiredCjs$2)return cjs$1;hasRequiredCjs$2=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,a=/\n/g,l=/^\s*/,c=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,d=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,m=/^[;\s]*/,f=/^\s+|\s+$/g,x=`
`,h="/",E="*",v="",R="comment",w="declaration";function B($,z){if(typeof $!="string")throw new TypeError("First argument must be a string");if(!$)return[];z=z||{};var Z=1,q=1;function ge(xe){var fe=xe.match(a);fe&&(Z+=fe.length);var F=xe.lastIndexOf(x);q=~F?xe.length-F:q+xe.length}function ue(){var xe={line:Z,column:q};return function(fe){return fe.position=new K(xe),_e(),fe}}function K(xe){this.start=xe,this.end={line:Z,column:q},this.source=z.source}K.prototype.content=$;function ne(xe){var fe=new Error(z.source+":"+Z+":"+q+": "+xe);if(fe.reason=xe,fe.filename=z.source,fe.line=Z,fe.column=q,fe.source=$,!z.silent)throw fe}function ke(xe){var fe=xe.exec($);if(fe){var F=fe[0];return ge(F),$=$.slice(F.length),fe}}function _e(){ke(l)}function Ae(xe){var fe;for(xe=xe||[];fe=ye();)fe!==!1&&xe.push(fe);return xe}function ye(){var xe=ue();if(!(h!=$.charAt(0)||E!=$.charAt(1))){for(var fe=2;v!=$.charAt(fe)&&(E!=$.charAt(fe)||h!=$.charAt(fe+1));)++fe;if(fe+=2,v===$.charAt(fe-1))return ne("End of comment missing");var F=$.slice(2,fe-2);return q+=2,ge(F),$=$.slice(fe),q+=2,xe({type:R,comment:F})}}function be(){var xe=ue(),fe=ke(c);if(fe){if(ye(),!ke(s))return ne("property missing ':'");var F=ke(d),pe=xe({type:w,property:U(fe[0].replace(t,v)),value:F?U(F[0].replace(t,v)):v});return ke(m),pe}}function Ne(){var xe=[];Ae(xe);for(var fe;fe=be();)fe!==!1&&(xe.push(fe),Ae(xe));return xe}return _e(),Ne()}function U($){return $?$.replace(f,v):v}return cjs$1=B,cjs$1}var hasRequiredCjs$1;function requireCjs$1(){if(hasRequiredCjs$1)return cjs$2;hasRequiredCjs$1=1;var t=cjs$2&&cjs$2.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(cjs$2,"__esModule",{value:!0}),cjs$2.default=l;const a=t(requireCjs$2());function l(c,s){let d=null;if(!c||typeof c!="string")return d;const m=(0,a.default)(c),f=typeof s=="function";return m.forEach(x=>{if(x.type!=="declaration")return;const{property:h,value:E}=x;f?s(h,E,x):E&&(d=d||{},d[h]=E)}),d}return cjs$2}var utilities={},hasRequiredUtilities;function requireUtilities(){if(hasRequiredUtilities)return utilities;hasRequiredUtilities=1,Object.defineProperty(utilities,"__esModule",{value:!0}),utilities.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,a=/-([a-z])/g,l=/^[^-]+$/,c=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,d=function(h){return!h||l.test(h)||t.test(h)},m=function(h,E){return E.toUpperCase()},f=function(h,E){return"".concat(E,"-")},x=function(h,E){return E===void 0&&(E={}),d(h)?h:(h=h.toLowerCase(),E.reactCompat?h=h.replace(s,f):h=h.replace(c,f),h.replace(a,m))};return utilities.camelCase=x,utilities}var cjs,hasRequiredCjs;function requireCjs(){if(hasRequiredCjs)return cjs;hasRequiredCjs=1;var t=cjs&&cjs.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},a=t(requireCjs$1()),l=requireUtilities();function c(s,d){var m={};return!s||typeof s!="string"||(0,a.default)(s,function(f,x){f&&x&&(m[(0,l.camelCase)(f,d)]=x)}),m}return c.default=c,cjs=c,cjs}var cjsExports=requireCjs();const styleToJs=getDefaultExportFromCjs(cjsExports),pointEnd=point$2("end"),pointStart=point$2("start");function point$2(t){return a;function a(l){const c=l&&l.position&&l.position[t]||{};if(typeof c.line=="number"&&c.line>0&&typeof c.column=="number"&&c.column>0)return{line:c.line,column:c.column,offset:typeof c.offset=="number"&&c.offset>-1?c.offset:void 0}}}function position$1(t){const a=pointStart(t),l=pointEnd(t);if(a&&l)return{start:a,end:l}}function stringifyPosition(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?position(t.position):"start"in t||"end"in t?position(t):"line"in t||"column"in t?point$1(t):""}function point$1(t){return index(t&&t.line)+":"+index(t&&t.column)}function position(t){return point$1(t&&t.start)+"-"+point$1(t&&t.end)}function index(t){return t&&typeof t=="number"?t:1}class VFileMessage extends Error{constructor(a,l,c){super(),typeof l=="string"&&(c=l,l=void 0);let s="",d={},m=!1;if(l&&("line"in l&&"column"in l?d={place:l}:"start"in l&&"end"in l?d={place:l}:"type"in l?d={ancestors:[l],place:l.position}:d={...l}),typeof a=="string"?s=a:!d.cause&&a&&(m=!0,s=a.message,d.cause=a),!d.ruleId&&!d.source&&typeof c=="string"){const x=c.indexOf(":");x===-1?d.ruleId=c:(d.source=c.slice(0,x),d.ruleId=c.slice(x+1))}if(!d.place&&d.ancestors&&d.ancestors){const x=d.ancestors[d.ancestors.length-1];x&&(d.place=x.position)}const f=d.place&&"start"in d.place?d.place.start:d.place;this.ancestors=d.ancestors||void 0,this.cause=d.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=f?f.line:void 0,this.name=stringifyPosition(d.place)||"1:1",this.place=d.place||void 0,this.reason=this.message,this.ruleId=d.ruleId||void 0,this.source=d.source||void 0,this.stack=m&&d.cause&&typeof d.cause.stack=="string"?d.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}VFileMessage.prototype.file="";VFileMessage.prototype.name="";VFileMessage.prototype.reason="";VFileMessage.prototype.message="";VFileMessage.prototype.stack="";VFileMessage.prototype.column=void 0;VFileMessage.prototype.line=void 0;VFileMessage.prototype.ancestors=void 0;VFileMessage.prototype.cause=void 0;VFileMessage.prototype.fatal=void 0;VFileMessage.prototype.place=void 0;VFileMessage.prototype.ruleId=void 0;VFileMessage.prototype.source=void 0;const own$3={}.hasOwnProperty,emptyMap=new Map,cap=/[A-Z]/g,tableElements=new Set(["table","tbody","thead","tfoot","tr"]),tableCellElement=new Set(["td","th"]),docs="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function toJsxRuntime(t,a){if(!a||a.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const l=a.filePath||void 0;let c;if(a.development){if(typeof a.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");c=developmentCreate(l,a.jsxDEV)}else{if(typeof a.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof a.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");c=productionCreate(l,a.jsx,a.jsxs)}const s={Fragment:a.Fragment,ancestors:[],components:a.components||{},create:c,elementAttributeNameCase:a.elementAttributeNameCase||"react",evaluater:a.createEvaluater?a.createEvaluater():void 0,filePath:l,ignoreInvalidStyle:a.ignoreInvalidStyle||!1,passKeys:a.passKeys!==!1,passNode:a.passNode||!1,schema:a.space==="svg"?svg:html$1,stylePropertyNameCase:a.stylePropertyNameCase||"dom",tableCellAlignToStyle:a.tableCellAlignToStyle!==!1},d=one$1(s,t,void 0);return d&&typeof d!="string"?d:s.create(t,s.Fragment,{children:d||void 0},void 0)}function one$1(t,a,l){if(a.type==="element")return element$1(t,a,l);if(a.type==="mdxFlowExpression"||a.type==="mdxTextExpression")return mdxExpression(t,a);if(a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement")return mdxJsxElement(t,a,l);if(a.type==="mdxjsEsm")return mdxEsm(t,a);if(a.type==="root")return root$1(t,a,l);if(a.type==="text")return text$3(t,a)}function element$1(t,a,l){const c=t.schema;let s=c;a.tagName.toLowerCase()==="svg"&&c.space==="html"&&(s=svg,t.schema=s),t.ancestors.push(a);const d=findComponentFromName(t,a.tagName,!1),m=createElementProps(t,a);let f=createChildren(t,a);return tableElements.has(a.tagName)&&(f=f.filter(function(x){return typeof x=="string"?!whitespace(x):!0})),addNode(t,m,d,a),addChildren(m,f),t.ancestors.pop(),t.schema=c,t.create(a,d,m,l)}function mdxExpression(t,a){if(a.data&&a.data.estree&&t.evaluater){const c=a.data.estree.body[0];return c.type,t.evaluater.evaluateExpression(c.expression)}crashEstree(t,a.position)}function mdxEsm(t,a){if(a.data&&a.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(a.data.estree);crashEstree(t,a.position)}function mdxJsxElement(t,a,l){const c=t.schema;let s=c;a.name==="svg"&&c.space==="html"&&(s=svg,t.schema=s),t.ancestors.push(a);const d=a.name===null?t.Fragment:findComponentFromName(t,a.name,!0),m=createJsxElementProps(t,a),f=createChildren(t,a);return addNode(t,m,d,a),addChildren(m,f),t.ancestors.pop(),t.schema=c,t.create(a,d,m,l)}function root$1(t,a,l){const c={};return addChildren(c,createChildren(t,a)),t.create(a,t.Fragment,c,l)}function text$3(t,a){return a.value}function addNode(t,a,l,c){typeof l!="string"&&l!==t.Fragment&&t.passNode&&(a.node=c)}function addChildren(t,a){if(a.length>0){const l=a.length>1?a:a[0];l&&(t.children=l)}}function productionCreate(t,a,l){return c;function c(s,d,m,f){const h=Array.isArray(m.children)?l:a;return f?h(d,m,f):h(d,m)}}function developmentCreate(t,a){return l;function l(c,s,d,m){const f=Array.isArray(d.children),x=pointStart(c);return a(s,d,m,f,{columnNumber:x?x.column-1:void 0,fileName:t,lineNumber:x?x.line:void 0},void 0)}}function createElementProps(t,a){const l={};let c,s;for(s in a.properties)if(s!=="children"&&own$3.call(a.properties,s)){const d=createProperty(t,s,a.properties[s]);if(d){const[m,f]=d;t.tableCellAlignToStyle&&m==="align"&&typeof f=="string"&&tableCellElement.has(a.tagName)?c=f:l[m]=f}}if(c){const d=l.style||(l.style={});d[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=c}return l}function createJsxElementProps(t,a){const l={};for(const c of a.attributes)if(c.type==="mdxJsxExpressionAttribute")if(c.data&&c.data.estree&&t.evaluater){const d=c.data.estree.body[0];d.type;const m=d.expression;m.type;const f=m.properties[0];f.type,Object.assign(l,t.evaluater.evaluateExpression(f.argument))}else crashEstree(t,a.position);else{const s=c.name;let d;if(c.value&&typeof c.value=="object")if(c.value.data&&c.value.data.estree&&t.evaluater){const f=c.value.data.estree.body[0];f.type,d=t.evaluater.evaluateExpression(f.expression)}else crashEstree(t,a.position);else d=c.value===null?!0:c.value;l[s]=d}return l}function createChildren(t,a){const l=[];let c=-1;const s=t.passKeys?new Map:emptyMap;for(;++c<a.children.length;){const d=a.children[c];let m;if(t.passKeys){const x=d.type==="element"?d.tagName:d.type==="mdxJsxFlowElement"||d.type==="mdxJsxTextElement"?d.name:void 0;if(x){const h=s.get(x)||0;m=x+"-"+h,s.set(x,h+1)}}const f=one$1(t,d,m);f!==void 0&&l.push(f)}return l}function createProperty(t,a,l){const c=find(t.schema,a);if(!(l==null||typeof l=="number"&&Number.isNaN(l))){if(Array.isArray(l)&&(l=c.commaSeparated?stringify$1(l):stringify(l)),c.property==="style"){let s=typeof l=="object"?l:parseStyle(t,String(l));return t.stylePropertyNameCase==="css"&&(s=transformStylesToCssCasing(s)),["style",s]}return[t.elementAttributeNameCase==="react"&&c.space?hastToReact[c.property]||c.property:c.attribute,l]}}function parseStyle(t,a){try{return styleToJs(a,{reactCompat:!0})}catch(l){if(t.ignoreInvalidStyle)return{};const c=l,s=new VFileMessage("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:c,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=docs+"#cannot-parse-style-attribute",s}}function findComponentFromName(t,a,l){let c;if(!l)c={type:"Literal",value:a};else if(a.includes(".")){const s=a.split(".");let d=-1,m;for(;++d<s.length;){const f=name(s[d])?{type:"Identifier",name:s[d]}:{type:"Literal",value:s[d]};m=m?{type:"MemberExpression",object:m,property:f,computed:!!(d&&f.type==="Literal"),optional:!1}:f}c=m}else c=name(a)&&!/^[a-z]/.test(a)?{type:"Identifier",name:a}:{type:"Literal",value:a};if(c.type==="Literal"){const s=c.value;return own$3.call(t.components,s)?t.components[s]:s}if(t.evaluater)return t.evaluater.evaluateExpression(c);crashEstree(t)}function crashEstree(t,a){const l=new VFileMessage("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:a,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw l.file=t.filePath||void 0,l.url=docs+"#cannot-handle-mdx-estrees-without-createevaluater",l}function transformStylesToCssCasing(t){const a={};let l;for(l in t)own$3.call(t,l)&&(a[transformStyleToCssCasing(l)]=t[l]);return a}function transformStyleToCssCasing(t){let a=t.replace(cap,toDash);return a.slice(0,3)==="ms-"&&(a="-"+a),a}function toDash(t){return"-"+t.toLowerCase()}const urlAttributes={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};var jsxRuntime={exports:{}},reactJsxRuntime_production={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactJsxRuntime_production;function requireReactJsxRuntime_production(){if(hasRequiredReactJsxRuntime_production)return reactJsxRuntime_production;hasRequiredReactJsxRuntime_production=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(c,s,d){var m=null;if(d!==void 0&&(m=""+d),s.key!==void 0&&(m=""+s.key),"key"in s){d={};for(var f in s)f!=="key"&&(d[f]=s[f])}else d=s;return s=d.ref,{$$typeof:t,type:c,key:m,ref:s!==void 0?s:null,props:d}}return reactJsxRuntime_production.Fragment=a,reactJsxRuntime_production.jsx=l,reactJsxRuntime_production.jsxs=l,reactJsxRuntime_production}var hasRequiredJsxRuntime;function requireJsxRuntime(){return hasRequiredJsxRuntime||(hasRequiredJsxRuntime=1,jsxRuntime.exports=requireReactJsxRuntime_production()),jsxRuntime.exports}var jsxRuntimeExports=requireJsxRuntime(),react={exports:{}},react_production={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReact_production;function requireReact_production(){if(hasRequiredReact_production)return react_production;hasRequiredReact_production=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),R=Symbol.iterator;function w(k){return k===null||typeof k!="object"?null:(k=R&&k[R]||k["@@iterator"],typeof k=="function"?k:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,$={};function z(k,N,T){this.props=k,this.context=N,this.refs=$,this.updater=T||B}z.prototype.isReactComponent={},z.prototype.setState=function(k,N){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,N,"setState")},z.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Z(){}Z.prototype=z.prototype;function q(k,N,T){this.props=k,this.context=N,this.refs=$,this.updater=T||B}var ge=q.prototype=new Z;ge.constructor=q,U(ge,z.prototype),ge.isPureReactComponent=!0;var ue=Array.isArray;function K(){}var ne={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function _e(k,N,T){var V=T.ref;return{$$typeof:t,type:k,key:N,ref:V!==void 0?V:null,props:T}}function Ae(k,N){return _e(k.type,N,k.props)}function ye(k){return typeof k=="object"&&k!==null&&k.$$typeof===t}function be(k){var N={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(T){return N[T]})}var Ne=/\/+/g;function xe(k,N){return typeof k=="object"&&k!==null&&k.key!=null?be(""+k.key):N.toString(36)}function fe(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(K,K):(k.status="pending",k.then(function(N){k.status==="pending"&&(k.status="fulfilled",k.value=N)},function(N){k.status==="pending"&&(k.status="rejected",k.reason=N)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function F(k,N,T,V,ee){var le=typeof k;(le==="undefined"||le==="boolean")&&(k=null);var he=!1;if(k===null)he=!0;else switch(le){case"bigint":case"string":case"number":he=!0;break;case"object":switch(k.$$typeof){case t:case a:he=!0;break;case E:return he=k._init,F(he(k._payload),N,T,V,ee)}}if(he)return ee=ee(k),he=V===""?"."+xe(k,0):V,ue(ee)?(T="",he!=null&&(T=he.replace(Ne,"$&/")+"/"),F(ee,N,T,"",function(Ke){return Ke})):ee!=null&&(ye(ee)&&(ee=Ae(ee,T+(ee.key==null||k&&k.key===ee.key?"":(""+ee.key).replace(Ne,"$&/")+"/")+he)),N.push(ee)),1;he=0;var Ce=V===""?".":V+":";if(ue(k))for(var Ee=0;Ee<k.length;Ee++)V=k[Ee],le=Ce+xe(V,Ee),he+=F(V,N,T,le,ee);else if(Ee=w(k),typeof Ee=="function")for(k=Ee.call(k),Ee=0;!(V=k.next()).done;)V=V.value,le=Ce+xe(V,Ee++),he+=F(V,N,T,le,ee);else if(le==="object"){if(typeof k.then=="function")return F(fe(k),N,T,V,ee);throw N=String(k),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return he}function pe(k,N,T){if(k==null)return k;var V=[],ee=0;return F(k,V,"","",function(le){return N.call(T,le,ee++)}),V}function ce(k){if(k._status===-1){var N=k._result;N=N(),N.then(function(T){(k._status===0||k._status===-1)&&(k._status=1,k._result=T)},function(T){(k._status===0||k._status===-1)&&(k._status=2,k._result=T)}),k._status===-1&&(k._status=0,k._result=N)}if(k._status===1)return k._result.default;throw k._result}var Re=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},L={map:pe,forEach:function(k,N,T){pe(k,function(){N.apply(this,arguments)},T)},count:function(k){var N=0;return pe(k,function(){N++}),N},toArray:function(k){return pe(k,function(N){return N})||[]},only:function(k){if(!ye(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return react_production.Activity=v,react_production.Children=L,react_production.Component=z,react_production.Fragment=l,react_production.Profiler=s,react_production.PureComponent=q,react_production.StrictMode=c,react_production.Suspense=x,react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne,react_production.__COMPILER_RUNTIME={__proto__:null,c:function(k){return ne.H.useMemoCache(k)}},react_production.cache=function(k){return function(){return k.apply(null,arguments)}},react_production.cacheSignal=function(){return null},react_production.cloneElement=function(k,N,T){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var V=U({},k.props),ee=k.key;if(N!=null)for(le in N.key!==void 0&&(ee=""+N.key),N)!ke.call(N,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&N.ref===void 0||(V[le]=N[le]);var le=arguments.length-2;if(le===1)V.children=T;else if(1<le){for(var he=Array(le),Ce=0;Ce<le;Ce++)he[Ce]=arguments[Ce+2];V.children=he}return _e(k.type,ee,V)},react_production.createContext=function(k){return k={$$typeof:m,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:d,_context:k},k},react_production.createElement=function(k,N,T){var V,ee={},le=null;if(N!=null)for(V in N.key!==void 0&&(le=""+N.key),N)ke.call(N,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ee[V]=N[V]);var he=arguments.length-2;if(he===1)ee.children=T;else if(1<he){for(var Ce=Array(he),Ee=0;Ee<he;Ee++)Ce[Ee]=arguments[Ee+2];ee.children=Ce}if(k&&k.defaultProps)for(V in he=k.defaultProps,he)ee[V]===void 0&&(ee[V]=he[V]);return _e(k,le,ee)},react_production.createRef=function(){return{current:null}},react_production.forwardRef=function(k){return{$$typeof:f,render:k}},react_production.isValidElement=ye,react_production.lazy=function(k){return{$$typeof:E,_payload:{_status:-1,_result:k},_init:ce}},react_production.memo=function(k,N){return{$$typeof:h,type:k,compare:N===void 0?null:N}},react_production.startTransition=function(k){var N=ne.T,T={};ne.T=T;try{var V=k(),ee=ne.S;ee!==null&&ee(T,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(K,Re)}catch(le){Re(le)}finally{N!==null&&T.types!==null&&(N.types=T.types),ne.T=N}},react_production.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()},react_production.use=function(k){return ne.H.use(k)},react_production.useActionState=function(k,N,T){return ne.H.useActionState(k,N,T)},react_production.useCallback=function(k,N){return ne.H.useCallback(k,N)},react_production.useContext=function(k){return ne.H.useContext(k)},react_production.useDebugValue=function(){},react_production.useDeferredValue=function(k,N){return ne.H.useDeferredValue(k,N)},react_production.useEffect=function(k,N){return ne.H.useEffect(k,N)},react_production.useEffectEvent=function(k){return ne.H.useEffectEvent(k)},react_production.useId=function(){return ne.H.useId()},react_production.useImperativeHandle=function(k,N,T){return ne.H.useImperativeHandle(k,N,T)},react_production.useInsertionEffect=function(k,N){return ne.H.useInsertionEffect(k,N)},react_production.useLayoutEffect=function(k,N){return ne.H.useLayoutEffect(k,N)},react_production.useMemo=function(k,N){return ne.H.useMemo(k,N)},react_production.useOptimistic=function(k,N){return ne.H.useOptimistic(k,N)},react_production.useReducer=function(k,N,T){return ne.H.useReducer(k,N,T)},react_production.useRef=function(k){return ne.H.useRef(k)},react_production.useState=function(k){return ne.H.useState(k)},react_production.useSyncExternalStore=function(k,N,T){return ne.H.useSyncExternalStore(k,N,T)},react_production.useTransition=function(){return ne.H.useTransition()},react_production.version="19.2.3",react_production}var hasRequiredReact;function requireReact(){return hasRequiredReact||(hasRequiredReact=1,react.exports=requireReact_production()),react.exports}requireReact();const emptyOptions$1={};function toString$1(t,a){const l=emptyOptions$1,c=typeof l.includeImageAlt=="boolean"?l.includeImageAlt:!0,s=typeof l.includeHtml=="boolean"?l.includeHtml:!0;return one(t,c,s)}function one(t,a,l){if(node(t)){if("value"in t)return t.type==="html"&&!l?"":t.value;if(a&&"alt"in t&&t.alt)return t.alt;if("children"in t)return all(t.children,a,l)}return Array.isArray(t)?all(t,a,l):""}function all(t,a,l){const c=[];let s=-1;for(;++s<t.length;)c[s]=one(t[s],a,l);return c.join("")}function node(t){return!!(t&&typeof t=="object")}const element=document.createElement("i");function decodeNamedCharacterReference(t){const a="&"+t+";";element.innerHTML=a;const l=element.textContent;return l.charCodeAt(l.length-1)===59&&t!=="semi"||l===a?!1:l}function splice(t,a,l,c){const s=t.length;let d=0,m;if(a<0?a=-a>s?0:s+a:a=a>s?s:a,l=l>0?l:0,c.length<1e4)m=Array.from(c),m.unshift(a,l),t.splice(...m);else for(l&&t.splice(a,l);d<c.length;)m=c.slice(d,d+1e4),m.unshift(a,0),t.splice(...m),d+=1e4,a+=1e4}function push(t,a){return t.length>0?(splice(t,t.length,0,a),t):a}const hasOwnProperty={}.hasOwnProperty;function combineExtensions(t){const a={};let l=-1;for(;++l<t.length;)syntaxExtension(a,t[l]);return a}function syntaxExtension(t,a){let l;for(l in a){const s=(hasOwnProperty.call(t,l)?t[l]:void 0)||(t[l]={}),d=a[l];let m;if(d)for(m in d){hasOwnProperty.call(s,m)||(s[m]=[]);const f=d[m];constructs(s[m],Array.isArray(f)?f:f?[f]:[])}}}function constructs(t,a){let l=-1;const c=[];for(;++l<a.length;)(a[l].add==="after"?t:c).push(a[l]);splice(t,0,0,c)}function decodeNumericCharacterReference(t,a){const l=Number.parseInt(t,a);return l<9||l===11||l>13&&l<32||l>126&&l<160||l>55295&&l<57344||l>64975&&l<65008||(l&65535)===65535||(l&65535)===65534||l>1114111?"�":String.fromCodePoint(l)}function normalizeIdentifier(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const asciiAlpha=regexCheck(/[A-Za-z]/),asciiAlphanumeric=regexCheck(/[\dA-Za-z]/),asciiAtext=regexCheck(/[#-'*+\--9=?A-Z^-~]/);function asciiControl(t){return t!==null&&(t<32||t===127)}const asciiDigit=regexCheck(/\d/),asciiHexDigit=regexCheck(/[\dA-Fa-f]/),asciiPunctuation=regexCheck(/[!-/:-@[-`{-~]/);function markdownLineEnding(t){return t!==null&&t<-2}function markdownLineEndingOrSpace(t){return t!==null&&(t<0||t===32)}function markdownSpace(t){return t===-2||t===-1||t===32}const unicodePunctuation=regexCheck(new RegExp("\\p{P}|\\p{S}","u")),unicodeWhitespace=regexCheck(/\s/);function regexCheck(t){return a;function a(l){return l!==null&&l>-1&&t.test(String.fromCharCode(l))}}function normalizeUri(t){const a=[];let l=-1,c=0,s=0;for(;++l<t.length;){const d=t.charCodeAt(l);let m="";if(d===37&&asciiAlphanumeric(t.charCodeAt(l+1))&&asciiAlphanumeric(t.charCodeAt(l+2)))s=2;else if(d<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(d))||(m=String.fromCharCode(d));else if(d>55295&&d<57344){const f=t.charCodeAt(l+1);d<56320&&f>56319&&f<57344?(m=String.fromCharCode(d,f),s=1):m="�"}else m=String.fromCharCode(d);m&&(a.push(t.slice(c,l),encodeURIComponent(m)),c=l+s+1,m=""),s&&(l+=s,s=0)}return a.join("")+t.slice(c)}function factorySpace(t,a,l,c){const s=c?c-1:Number.POSITIVE_INFINITY;let d=0;return m;function m(x){return markdownSpace(x)?(t.enter(l),f(x)):a(x)}function f(x){return markdownSpace(x)&&d++<s?(t.consume(x),f):(t.exit(l),a(x))}}const content$1={tokenize:initializeContent};function initializeContent(t){const a=t.attempt(this.parser.constructs.contentInitial,c,s);let l;return a;function c(f){if(f===null){t.consume(f);return}return t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),factorySpace(t,a,"linePrefix")}function s(f){return t.enter("paragraph"),d(f)}function d(f){const x=t.enter("chunkText",{contentType:"text",previous:l});return l&&(l.next=x),l=x,m(f)}function m(f){if(f===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(f);return}return markdownLineEnding(f)?(t.consume(f),t.exit("chunkText"),d):(t.consume(f),m)}}const document$2={tokenize:initializeDocument},containerConstruct={tokenize:tokenizeContainer};function initializeDocument(t){const a=this,l=[];let c=0,s,d,m;return f;function f(q){if(c<l.length){const ge=l[c];return a.containerState=ge[1],t.attempt(ge[0].continuation,x,h)(q)}return h(q)}function x(q){if(c++,a.containerState._closeFlow){a.containerState._closeFlow=void 0,s&&Z();const ge=a.events.length;let ue=ge,K;for(;ue--;)if(a.events[ue][0]==="exit"&&a.events[ue][1].type==="chunkFlow"){K=a.events[ue][1].end;break}z(c);let ne=ge;for(;ne<a.events.length;)a.events[ne][1].end={...K},ne++;return splice(a.events,ue+1,0,a.events.slice(ge)),a.events.length=ne,h(q)}return f(q)}function h(q){if(c===l.length){if(!s)return R(q);if(s.currentConstruct&&s.currentConstruct.concrete)return B(q);a.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return a.containerState={},t.check(containerConstruct,E,v)(q)}function E(q){return s&&Z(),z(c),R(q)}function v(q){return a.parser.lazy[a.now().line]=c!==l.length,m=a.now().offset,B(q)}function R(q){return a.containerState={},t.attempt(containerConstruct,w,B)(q)}function w(q){return c++,l.push([a.currentConstruct,a.containerState]),R(q)}function B(q){if(q===null){s&&Z(),z(0),t.consume(q);return}return s=s||a.parser.flow(a.now()),t.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:d}),U(q)}function U(q){if(q===null){$(t.exit("chunkFlow"),!0),z(0),t.consume(q);return}return markdownLineEnding(q)?(t.consume(q),$(t.exit("chunkFlow")),c=0,a.interrupt=void 0,f):(t.consume(q),U)}function $(q,ge){const ue=a.sliceStream(q);if(ge&&ue.push(null),q.previous=d,d&&(d.next=q),d=q,s.defineSkip(q.start),s.write(ue),a.parser.lazy[q.start.line]){let K=s.events.length;for(;K--;)if(s.events[K][1].start.offset<m&&(!s.events[K][1].end||s.events[K][1].end.offset>m))return;const ne=a.events.length;let ke=ne,_e,Ae;for(;ke--;)if(a.events[ke][0]==="exit"&&a.events[ke][1].type==="chunkFlow"){if(_e){Ae=a.events[ke][1].end;break}_e=!0}for(z(c),K=ne;K<a.events.length;)a.events[K][1].end={...Ae},K++;splice(a.events,ke+1,0,a.events.slice(ne)),a.events.length=K}}function z(q){let ge=l.length;for(;ge-- >q;){const ue=l[ge];a.containerState=ue[1],ue[0].exit.call(a,t)}l.length=q}function Z(){s.write([null]),d=void 0,s=void 0,a.containerState._closeFlow=void 0}}function tokenizeContainer(t,a,l){return factorySpace(t,t.attempt(this.parser.constructs.document,a,l),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function classifyCharacter(t){if(t===null||markdownLineEndingOrSpace(t)||unicodeWhitespace(t))return 1;if(unicodePunctuation(t))return 2}function resolveAll(t,a,l){const c=[];let s=-1;for(;++s<t.length;){const d=t[s].resolveAll;d&&!c.includes(d)&&(a=d(a,l),c.push(d))}return a}const attention={name:"attention",resolveAll:resolveAllAttention,tokenize:tokenizeAttention};function resolveAllAttention(t,a){let l=-1,c,s,d,m,f,x,h,E;for(;++l<t.length;)if(t[l][0]==="enter"&&t[l][1].type==="attentionSequence"&&t[l][1]._close){for(c=l;c--;)if(t[c][0]==="exit"&&t[c][1].type==="attentionSequence"&&t[c][1]._open&&a.sliceSerialize(t[c][1]).charCodeAt(0)===a.sliceSerialize(t[l][1]).charCodeAt(0)){if((t[c][1]._close||t[l][1]._open)&&(t[l][1].end.offset-t[l][1].start.offset)%3&&!((t[c][1].end.offset-t[c][1].start.offset+t[l][1].end.offset-t[l][1].start.offset)%3))continue;x=t[c][1].end.offset-t[c][1].start.offset>1&&t[l][1].end.offset-t[l][1].start.offset>1?2:1;const v={...t[c][1].end},R={...t[l][1].start};movePoint(v,-x),movePoint(R,x),m={type:x>1?"strongSequence":"emphasisSequence",start:v,end:{...t[c][1].end}},f={type:x>1?"strongSequence":"emphasisSequence",start:{...t[l][1].start},end:R},d={type:x>1?"strongText":"emphasisText",start:{...t[c][1].end},end:{...t[l][1].start}},s={type:x>1?"strong":"emphasis",start:{...m.start},end:{...f.end}},t[c][1].end={...m.start},t[l][1].start={...f.end},h=[],t[c][1].end.offset-t[c][1].start.offset&&(h=push(h,[["enter",t[c][1],a],["exit",t[c][1],a]])),h=push(h,[["enter",s,a],["enter",m,a],["exit",m,a],["enter",d,a]]),h=push(h,resolveAll(a.parser.constructs.insideSpan.null,t.slice(c+1,l),a)),h=push(h,[["exit",d,a],["enter",f,a],["exit",f,a],["exit",s,a]]),t[l][1].end.offset-t[l][1].start.offset?(E=2,h=push(h,[["enter",t[l][1],a],["exit",t[l][1],a]])):E=0,splice(t,c-1,l-c+3,h),l=c+h.length-E-2;break}}for(l=-1;++l<t.length;)t[l][1].type==="attentionSequence"&&(t[l][1].type="data");return t}function tokenizeAttention(t,a){const l=this.parser.constructs.attentionMarkers.null,c=this.previous,s=classifyCharacter(c);let d;return m;function m(x){return d=x,t.enter("attentionSequence"),f(x)}function f(x){if(x===d)return t.consume(x),f;const h=t.exit("attentionSequence"),E=classifyCharacter(x),v=!E||E===2&&s||l.includes(x),R=!s||s===2&&E||l.includes(c);return h._open=!!(d===42?v:v&&(s||!R)),h._close=!!(d===42?R:R&&(E||!v)),a(x)}}function movePoint(t,a){t.column+=a,t.offset+=a,t._bufferIndex+=a}const autolink={name:"autolink",tokenize:tokenizeAutolink};function tokenizeAutolink(t,a,l){let c=0;return s;function s(w){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(w),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),d}function d(w){return asciiAlpha(w)?(t.consume(w),m):w===64?l(w):h(w)}function m(w){return w===43||w===45||w===46||asciiAlphanumeric(w)?(c=1,f(w)):h(w)}function f(w){return w===58?(t.consume(w),c=0,x):(w===43||w===45||w===46||asciiAlphanumeric(w))&&c++<32?(t.consume(w),f):(c=0,h(w))}function x(w){return w===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(w),t.exit("autolinkMarker"),t.exit("autolink"),a):w===null||w===32||w===60||asciiControl(w)?l(w):(t.consume(w),x)}function h(w){return w===64?(t.consume(w),E):asciiAtext(w)?(t.consume(w),h):l(w)}function E(w){return asciiAlphanumeric(w)?v(w):l(w)}function v(w){return w===46?(t.consume(w),c=0,E):w===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(w),t.exit("autolinkMarker"),t.exit("autolink"),a):R(w)}function R(w){if((w===45||asciiAlphanumeric(w))&&c++<63){const B=w===45?R:v;return t.consume(w),B}return l(w)}}const blankLine={partial:!0,tokenize:tokenizeBlankLine};function tokenizeBlankLine(t,a,l){return c;function c(d){return markdownSpace(d)?factorySpace(t,s,"linePrefix")(d):s(d)}function s(d){return d===null||markdownLineEnding(d)?a(d):l(d)}}const blockQuote={continuation:{tokenize:tokenizeBlockQuoteContinuation},exit,name:"blockQuote",tokenize:tokenizeBlockQuoteStart};function tokenizeBlockQuoteStart(t,a,l){const c=this;return s;function s(m){if(m===62){const f=c.containerState;return f.open||(t.enter("blockQuote",{_container:!0}),f.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(m),t.exit("blockQuoteMarker"),d}return l(m)}function d(m){return markdownSpace(m)?(t.enter("blockQuotePrefixWhitespace"),t.consume(m),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),a):(t.exit("blockQuotePrefix"),a(m))}}function tokenizeBlockQuoteContinuation(t,a,l){const c=this;return s;function s(m){return markdownSpace(m)?factorySpace(t,d,"linePrefix",c.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):d(m)}function d(m){return t.attempt(blockQuote,a,l)(m)}}function exit(t){t.exit("blockQuote")}const characterEscape={name:"characterEscape",tokenize:tokenizeCharacterEscape};function tokenizeCharacterEscape(t,a,l){return c;function c(d){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(d),t.exit("escapeMarker"),s}function s(d){return asciiPunctuation(d)?(t.enter("characterEscapeValue"),t.consume(d),t.exit("characterEscapeValue"),t.exit("characterEscape"),a):l(d)}}const characterReference={name:"characterReference",tokenize:tokenizeCharacterReference};function tokenizeCharacterReference(t,a,l){const c=this;let s=0,d,m;return f;function f(v){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(v),t.exit("characterReferenceMarker"),x}function x(v){return v===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(v),t.exit("characterReferenceMarkerNumeric"),h):(t.enter("characterReferenceValue"),d=31,m=asciiAlphanumeric,E(v))}function h(v){return v===88||v===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(v),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),d=6,m=asciiHexDigit,E):(t.enter("characterReferenceValue"),d=7,m=asciiDigit,E(v))}function E(v){if(v===59&&s){const R=t.exit("characterReferenceValue");return m===asciiAlphanumeric&&!decodeNamedCharacterReference(c.sliceSerialize(R))?l(v):(t.enter("characterReferenceMarker"),t.consume(v),t.exit("characterReferenceMarker"),t.exit("characterReference"),a)}return m(v)&&s++<d?(t.consume(v),E):l(v)}}const nonLazyContinuation={partial:!0,tokenize:tokenizeNonLazyContinuation},codeFenced={concrete:!0,name:"codeFenced",tokenize:tokenizeCodeFenced};function tokenizeCodeFenced(t,a,l){const c=this,s={partial:!0,tokenize:ue};let d=0,m=0,f;return x;function x(K){return h(K)}function h(K){const ne=c.events[c.events.length-1];return d=ne&&ne[1].type==="linePrefix"?ne[2].sliceSerialize(ne[1],!0).length:0,f=K,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),E(K)}function E(K){return K===f?(m++,t.consume(K),E):m<3?l(K):(t.exit("codeFencedFenceSequence"),markdownSpace(K)?factorySpace(t,v,"whitespace")(K):v(K))}function v(K){return K===null||markdownLineEnding(K)?(t.exit("codeFencedFence"),c.interrupt?a(K):t.check(nonLazyContinuation,U,ge)(K)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),R(K))}function R(K){return K===null||markdownLineEnding(K)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),v(K)):markdownSpace(K)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),factorySpace(t,w,"whitespace")(K)):K===96&&K===f?l(K):(t.consume(K),R)}function w(K){return K===null||markdownLineEnding(K)?v(K):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),B(K))}function B(K){return K===null||markdownLineEnding(K)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),v(K)):K===96&&K===f?l(K):(t.consume(K),B)}function U(K){return t.attempt(s,ge,$)(K)}function $(K){return t.enter("lineEnding"),t.consume(K),t.exit("lineEnding"),z}function z(K){return d>0&&markdownSpace(K)?factorySpace(t,Z,"linePrefix",d+1)(K):Z(K)}function Z(K){return K===null||markdownLineEnding(K)?t.check(nonLazyContinuation,U,ge)(K):(t.enter("codeFlowValue"),q(K))}function q(K){return K===null||markdownLineEnding(K)?(t.exit("codeFlowValue"),Z(K)):(t.consume(K),q)}function ge(K){return t.exit("codeFenced"),a(K)}function ue(K,ne,ke){let _e=0;return Ae;function Ae(fe){return K.enter("lineEnding"),K.consume(fe),K.exit("lineEnding"),ye}function ye(fe){return K.enter("codeFencedFence"),markdownSpace(fe)?factorySpace(K,be,"linePrefix",c.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(fe):be(fe)}function be(fe){return fe===f?(K.enter("codeFencedFenceSequence"),Ne(fe)):ke(fe)}function Ne(fe){return fe===f?(_e++,K.consume(fe),Ne):_e>=m?(K.exit("codeFencedFenceSequence"),markdownSpace(fe)?factorySpace(K,xe,"whitespace")(fe):xe(fe)):ke(fe)}function xe(fe){return fe===null||markdownLineEnding(fe)?(K.exit("codeFencedFence"),ne(fe)):ke(fe)}}}function tokenizeNonLazyContinuation(t,a,l){const c=this;return s;function s(m){return m===null?l(m):(t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),d)}function d(m){return c.parser.lazy[c.now().line]?l(m):a(m)}}const codeIndented={name:"codeIndented",tokenize:tokenizeCodeIndented},furtherStart={partial:!0,tokenize:tokenizeFurtherStart};function tokenizeCodeIndented(t,a,l){const c=this;return s;function s(h){return t.enter("codeIndented"),factorySpace(t,d,"linePrefix",5)(h)}function d(h){const E=c.events[c.events.length-1];return E&&E[1].type==="linePrefix"&&E[2].sliceSerialize(E[1],!0).length>=4?m(h):l(h)}function m(h){return h===null?x(h):markdownLineEnding(h)?t.attempt(furtherStart,m,x)(h):(t.enter("codeFlowValue"),f(h))}function f(h){return h===null||markdownLineEnding(h)?(t.exit("codeFlowValue"),m(h)):(t.consume(h),f)}function x(h){return t.exit("codeIndented"),a(h)}}function tokenizeFurtherStart(t,a,l){const c=this;return s;function s(m){return c.parser.lazy[c.now().line]?l(m):markdownLineEnding(m)?(t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),s):factorySpace(t,d,"linePrefix",5)(m)}function d(m){const f=c.events[c.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?a(m):markdownLineEnding(m)?s(m):l(m)}}const codeText={name:"codeText",previous,resolve:resolveCodeText,tokenize:tokenizeCodeText};function resolveCodeText(t){let a=t.length-4,l=3,c,s;if((t[l][1].type==="lineEnding"||t[l][1].type==="space")&&(t[a][1].type==="lineEnding"||t[a][1].type==="space")){for(c=l;++c<a;)if(t[c][1].type==="codeTextData"){t[l][1].type="codeTextPadding",t[a][1].type="codeTextPadding",l+=2,a-=2;break}}for(c=l-1,a++;++c<=a;)s===void 0?c!==a&&t[c][1].type!=="lineEnding"&&(s=c):(c===a||t[c][1].type==="lineEnding")&&(t[s][1].type="codeTextData",c!==s+2&&(t[s][1].end=t[c-1][1].end,t.splice(s+2,c-s-2),a-=c-s-2,c=s+2),s=void 0);return t}function previous(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function tokenizeCodeText(t,a,l){let c=0,s,d;return m;function m(v){return t.enter("codeText"),t.enter("codeTextSequence"),f(v)}function f(v){return v===96?(t.consume(v),c++,f):(t.exit("codeTextSequence"),x(v))}function x(v){return v===null?l(v):v===32?(t.enter("space"),t.consume(v),t.exit("space"),x):v===96?(d=t.enter("codeTextSequence"),s=0,E(v)):markdownLineEnding(v)?(t.enter("lineEnding"),t.consume(v),t.exit("lineEnding"),x):(t.enter("codeTextData"),h(v))}function h(v){return v===null||v===32||v===96||markdownLineEnding(v)?(t.exit("codeTextData"),x(v)):(t.consume(v),h)}function E(v){return v===96?(t.consume(v),s++,E):s===c?(t.exit("codeTextSequence"),t.exit("codeText"),a(v)):(d.type="codeTextData",h(v))}}class SpliceBuffer{constructor(a){this.left=a?[...a]:[],this.right=[]}get(a){if(a<0||a>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+a+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return a<this.left.length?this.left[a]:this.right[this.right.length-a+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(a,l){const c=l??Number.POSITIVE_INFINITY;return c<this.left.length?this.left.slice(a,c):a>this.left.length?this.right.slice(this.right.length-c+this.left.length,this.right.length-a+this.left.length).reverse():this.left.slice(a).concat(this.right.slice(this.right.length-c+this.left.length).reverse())}splice(a,l,c){const s=l||0;this.setCursor(Math.trunc(a));const d=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return c&&chunkedPush(this.left,c),d.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(a){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(a)}pushMany(a){this.setCursor(Number.POSITIVE_INFINITY),chunkedPush(this.left,a)}unshift(a){this.setCursor(0),this.right.push(a)}unshiftMany(a){this.setCursor(0),chunkedPush(this.right,a.reverse())}setCursor(a){if(!(a===this.left.length||a>this.left.length&&this.right.length===0||a<0&&this.left.length===0))if(a<this.left.length){const l=this.left.splice(a,Number.POSITIVE_INFINITY);chunkedPush(this.right,l.reverse())}else{const l=this.right.splice(this.left.length+this.right.length-a,Number.POSITIVE_INFINITY);chunkedPush(this.left,l.reverse())}}}function chunkedPush(t,a){let l=0;if(a.length<1e4)t.push(...a);else for(;l<a.length;)t.push(...a.slice(l,l+1e4)),l+=1e4}function subtokenize(t){const a={};let l=-1,c,s,d,m,f,x,h;const E=new SpliceBuffer(t);for(;++l<E.length;){for(;l in a;)l=a[l];if(c=E.get(l),l&&c[1].type==="chunkFlow"&&E.get(l-1)[1].type==="listItemPrefix"&&(x=c[1]._tokenizer.events,d=0,d<x.length&&x[d][1].type==="lineEndingBlank"&&(d+=2),d<x.length&&x[d][1].type==="content"))for(;++d<x.length&&x[d][1].type!=="content";)x[d][1].type==="chunkText"&&(x[d][1]._isInFirstContentOfListItem=!0,d++);if(c[0]==="enter")c[1].contentType&&(Object.assign(a,subcontent(E,l)),l=a[l],h=!0);else if(c[1]._container){for(d=l,s=void 0;d--;)if(m=E.get(d),m[1].type==="lineEnding"||m[1].type==="lineEndingBlank")m[0]==="enter"&&(s&&(E.get(s)[1].type="lineEndingBlank"),m[1].type="lineEnding",s=d);else if(!(m[1].type==="linePrefix"||m[1].type==="listItemIndent"))break;s&&(c[1].end={...E.get(s)[1].start},f=E.slice(s,l),f.unshift(c),E.splice(s,l-s+1,f))}}return splice(t,0,Number.POSITIVE_INFINITY,E.slice(0)),!h}function subcontent(t,a){const l=t.get(a)[1],c=t.get(a)[2];let s=a-1;const d=[];let m=l._tokenizer;m||(m=c.parser[l.contentType](l.start),l._contentTypeTextTrailing&&(m._contentTypeTextTrailing=!0));const f=m.events,x=[],h={};let E,v,R=-1,w=l,B=0,U=0;const $=[U];for(;w;){for(;t.get(++s)[1]!==w;);d.push(s),w._tokenizer||(E=c.sliceStream(w),w.next||E.push(null),v&&m.defineSkip(w.start),w._isInFirstContentOfListItem&&(m._gfmTasklistFirstContentOfListItem=!0),m.write(E),w._isInFirstContentOfListItem&&(m._gfmTasklistFirstContentOfListItem=void 0)),v=w,w=w.next}for(w=l;++R<f.length;)f[R][0]==="exit"&&f[R-1][0]==="enter"&&f[R][1].type===f[R-1][1].type&&f[R][1].start.line!==f[R][1].end.line&&(U=R+1,$.push(U),w._tokenizer=void 0,w.previous=void 0,w=w.next);for(m.events=[],w?(w._tokenizer=void 0,w.previous=void 0):$.pop(),R=$.length;R--;){const z=f.slice($[R],$[R+1]),Z=d.pop();x.push([Z,Z+z.length-1]),t.splice(Z,2,z)}for(x.reverse(),R=-1;++R<x.length;)h[B+x[R][0]]=B+x[R][1],B+=x[R][1]-x[R][0]-1;return h}const content={resolve:resolveContent,tokenize:tokenizeContent},continuationConstruct={partial:!0,tokenize:tokenizeContinuation};function resolveContent(t){return subtokenize(t),t}function tokenizeContent(t,a){let l;return c;function c(f){return t.enter("content"),l=t.enter("chunkContent",{contentType:"content"}),s(f)}function s(f){return f===null?d(f):markdownLineEnding(f)?t.check(continuationConstruct,m,d)(f):(t.consume(f),s)}function d(f){return t.exit("chunkContent"),t.exit("content"),a(f)}function m(f){return t.consume(f),t.exit("chunkContent"),l.next=t.enter("chunkContent",{contentType:"content",previous:l}),l=l.next,s}}function tokenizeContinuation(t,a,l){const c=this;return s;function s(m){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),factorySpace(t,d,"linePrefix")}function d(m){if(m===null||markdownLineEnding(m))return l(m);const f=c.events[c.events.length-1];return!c.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?a(m):t.interrupt(c.parser.constructs.flow,l,a)(m)}}function factoryDestination(t,a,l,c,s,d,m,f,x){const h=x||Number.POSITIVE_INFINITY;let E=0;return v;function v(z){return z===60?(t.enter(c),t.enter(s),t.enter(d),t.consume(z),t.exit(d),R):z===null||z===32||z===41||asciiControl(z)?l(z):(t.enter(c),t.enter(m),t.enter(f),t.enter("chunkString",{contentType:"string"}),U(z))}function R(z){return z===62?(t.enter(d),t.consume(z),t.exit(d),t.exit(s),t.exit(c),a):(t.enter(f),t.enter("chunkString",{contentType:"string"}),w(z))}function w(z){return z===62?(t.exit("chunkString"),t.exit(f),R(z)):z===null||z===60||markdownLineEnding(z)?l(z):(t.consume(z),z===92?B:w)}function B(z){return z===60||z===62||z===92?(t.consume(z),w):w(z)}function U(z){return!E&&(z===null||z===41||markdownLineEndingOrSpace(z))?(t.exit("chunkString"),t.exit(f),t.exit(m),t.exit(c),a(z)):E<h&&z===40?(t.consume(z),E++,U):z===41?(t.consume(z),E--,U):z===null||z===32||z===40||asciiControl(z)?l(z):(t.consume(z),z===92?$:U)}function $(z){return z===40||z===41||z===92?(t.consume(z),U):U(z)}}function factoryLabel(t,a,l,c,s,d){const m=this;let f=0,x;return h;function h(w){return t.enter(c),t.enter(s),t.consume(w),t.exit(s),t.enter(d),E}function E(w){return f>999||w===null||w===91||w===93&&!x||w===94&&!f&&"_hiddenFootnoteSupport"in m.parser.constructs?l(w):w===93?(t.exit(d),t.enter(s),t.consume(w),t.exit(s),t.exit(c),a):markdownLineEnding(w)?(t.enter("lineEnding"),t.consume(w),t.exit("lineEnding"),E):(t.enter("chunkString",{contentType:"string"}),v(w))}function v(w){return w===null||w===91||w===93||markdownLineEnding(w)||f++>999?(t.exit("chunkString"),E(w)):(t.consume(w),x||(x=!markdownSpace(w)),w===92?R:v)}function R(w){return w===91||w===92||w===93?(t.consume(w),f++,v):v(w)}}function factoryTitle(t,a,l,c,s,d){let m;return f;function f(R){return R===34||R===39||R===40?(t.enter(c),t.enter(s),t.consume(R),t.exit(s),m=R===40?41:R,x):l(R)}function x(R){return R===m?(t.enter(s),t.consume(R),t.exit(s),t.exit(c),a):(t.enter(d),h(R))}function h(R){return R===m?(t.exit(d),x(m)):R===null?l(R):markdownLineEnding(R)?(t.enter("lineEnding"),t.consume(R),t.exit("lineEnding"),factorySpace(t,h,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),E(R))}function E(R){return R===m||R===null||markdownLineEnding(R)?(t.exit("chunkString"),h(R)):(t.consume(R),R===92?v:E)}function v(R){return R===m||R===92?(t.consume(R),E):E(R)}}function factoryWhitespace(t,a){let l;return c;function c(s){return markdownLineEnding(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),l=!0,c):markdownSpace(s)?factorySpace(t,c,l?"linePrefix":"lineSuffix")(s):a(s)}}const definition={name:"definition",tokenize:tokenizeDefinition},titleBefore={partial:!0,tokenize:tokenizeTitleBefore};function tokenizeDefinition(t,a,l){const c=this;let s;return d;function d(w){return t.enter("definition"),m(w)}function m(w){return factoryLabel.call(c,t,f,l,"definitionLabel","definitionLabelMarker","definitionLabelString")(w)}function f(w){return s=normalizeIdentifier(c.sliceSerialize(c.events[c.events.length-1][1]).slice(1,-1)),w===58?(t.enter("definitionMarker"),t.consume(w),t.exit("definitionMarker"),x):l(w)}function x(w){return markdownLineEndingOrSpace(w)?factoryWhitespace(t,h)(w):h(w)}function h(w){return factoryDestination(t,E,l,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(w)}function E(w){return t.attempt(titleBefore,v,v)(w)}function v(w){return markdownSpace(w)?factorySpace(t,R,"whitespace")(w):R(w)}function R(w){return w===null||markdownLineEnding(w)?(t.exit("definition"),c.parser.defined.push(s),a(w)):l(w)}}function tokenizeTitleBefore(t,a,l){return c;function c(f){return markdownLineEndingOrSpace(f)?factoryWhitespace(t,s)(f):l(f)}function s(f){return factoryTitle(t,d,l,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function d(f){return markdownSpace(f)?factorySpace(t,m,"whitespace")(f):m(f)}function m(f){return f===null||markdownLineEnding(f)?a(f):l(f)}}const hardBreakEscape={name:"hardBreakEscape",tokenize:tokenizeHardBreakEscape};function tokenizeHardBreakEscape(t,a,l){return c;function c(d){return t.enter("hardBreakEscape"),t.consume(d),s}function s(d){return markdownLineEnding(d)?(t.exit("hardBreakEscape"),a(d)):l(d)}}const headingAtx={name:"headingAtx",resolve:resolveHeadingAtx,tokenize:tokenizeHeadingAtx};function resolveHeadingAtx(t,a){let l=t.length-2,c=3,s,d;return t[c][1].type==="whitespace"&&(c+=2),l-2>c&&t[l][1].type==="whitespace"&&(l-=2),t[l][1].type==="atxHeadingSequence"&&(c===l-1||l-4>c&&t[l-2][1].type==="whitespace")&&(l-=c+1===l?2:4),l>c&&(s={type:"atxHeadingText",start:t[c][1].start,end:t[l][1].end},d={type:"chunkText",start:t[c][1].start,end:t[l][1].end,contentType:"text"},splice(t,c,l-c+1,[["enter",s,a],["enter",d,a],["exit",d,a],["exit",s,a]])),t}function tokenizeHeadingAtx(t,a,l){let c=0;return s;function s(E){return t.enter("atxHeading"),d(E)}function d(E){return t.enter("atxHeadingSequence"),m(E)}function m(E){return E===35&&c++<6?(t.consume(E),m):E===null||markdownLineEndingOrSpace(E)?(t.exit("atxHeadingSequence"),f(E)):l(E)}function f(E){return E===35?(t.enter("atxHeadingSequence"),x(E)):E===null||markdownLineEnding(E)?(t.exit("atxHeading"),a(E)):markdownSpace(E)?factorySpace(t,f,"whitespace")(E):(t.enter("atxHeadingText"),h(E))}function x(E){return E===35?(t.consume(E),x):(t.exit("atxHeadingSequence"),f(E))}function h(E){return E===null||E===35||markdownLineEndingOrSpace(E)?(t.exit("atxHeadingText"),f(E)):(t.consume(E),h)}}const htmlBlockNames=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],htmlRawNames=["pre","script","style","textarea"],htmlFlow={concrete:!0,name:"htmlFlow",resolveTo:resolveToHtmlFlow,tokenize:tokenizeHtmlFlow},blankLineBefore={partial:!0,tokenize:tokenizeBlankLineBefore},nonLazyContinuationStart={partial:!0,tokenize:tokenizeNonLazyContinuationStart};function resolveToHtmlFlow(t){let a=t.length;for(;a--&&!(t[a][0]==="enter"&&t[a][1].type==="htmlFlow"););return a>1&&t[a-2][1].type==="linePrefix"&&(t[a][1].start=t[a-2][1].start,t[a+1][1].start=t[a-2][1].start,t.splice(a-2,2)),t}function tokenizeHtmlFlow(t,a,l){const c=this;let s,d,m,f,x;return h;function h(T){return E(T)}function E(T){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(T),v}function v(T){return T===33?(t.consume(T),R):T===47?(t.consume(T),d=!0,U):T===63?(t.consume(T),s=3,c.interrupt?a:L):asciiAlpha(T)?(t.consume(T),m=String.fromCharCode(T),$):l(T)}function R(T){return T===45?(t.consume(T),s=2,w):T===91?(t.consume(T),s=5,f=0,B):asciiAlpha(T)?(t.consume(T),s=4,c.interrupt?a:L):l(T)}function w(T){return T===45?(t.consume(T),c.interrupt?a:L):l(T)}function B(T){const V="CDATA[";return T===V.charCodeAt(f++)?(t.consume(T),f===V.length?c.interrupt?a:be:B):l(T)}function U(T){return asciiAlpha(T)?(t.consume(T),m=String.fromCharCode(T),$):l(T)}function $(T){if(T===null||T===47||T===62||markdownLineEndingOrSpace(T)){const V=T===47,ee=m.toLowerCase();return!V&&!d&&htmlRawNames.includes(ee)?(s=1,c.interrupt?a(T):be(T)):htmlBlockNames.includes(m.toLowerCase())?(s=6,V?(t.consume(T),z):c.interrupt?a(T):be(T)):(s=7,c.interrupt&&!c.parser.lazy[c.now().line]?l(T):d?Z(T):q(T))}return T===45||asciiAlphanumeric(T)?(t.consume(T),m+=String.fromCharCode(T),$):l(T)}function z(T){return T===62?(t.consume(T),c.interrupt?a:be):l(T)}function Z(T){return markdownSpace(T)?(t.consume(T),Z):Ae(T)}function q(T){return T===47?(t.consume(T),Ae):T===58||T===95||asciiAlpha(T)?(t.consume(T),ge):markdownSpace(T)?(t.consume(T),q):Ae(T)}function ge(T){return T===45||T===46||T===58||T===95||asciiAlphanumeric(T)?(t.consume(T),ge):ue(T)}function ue(T){return T===61?(t.consume(T),K):markdownSpace(T)?(t.consume(T),ue):q(T)}function K(T){return T===null||T===60||T===61||T===62||T===96?l(T):T===34||T===39?(t.consume(T),x=T,ne):markdownSpace(T)?(t.consume(T),K):ke(T)}function ne(T){return T===x?(t.consume(T),x=null,_e):T===null||markdownLineEnding(T)?l(T):(t.consume(T),ne)}function ke(T){return T===null||T===34||T===39||T===47||T===60||T===61||T===62||T===96||markdownLineEndingOrSpace(T)?ue(T):(t.consume(T),ke)}function _e(T){return T===47||T===62||markdownSpace(T)?q(T):l(T)}function Ae(T){return T===62?(t.consume(T),ye):l(T)}function ye(T){return T===null||markdownLineEnding(T)?be(T):markdownSpace(T)?(t.consume(T),ye):l(T)}function be(T){return T===45&&s===2?(t.consume(T),F):T===60&&s===1?(t.consume(T),pe):T===62&&s===4?(t.consume(T),k):T===63&&s===3?(t.consume(T),L):T===93&&s===5?(t.consume(T),Re):markdownLineEnding(T)&&(s===6||s===7)?(t.exit("htmlFlowData"),t.check(blankLineBefore,N,Ne)(T)):T===null||markdownLineEnding(T)?(t.exit("htmlFlowData"),Ne(T)):(t.consume(T),be)}function Ne(T){return t.check(nonLazyContinuationStart,xe,N)(T)}function xe(T){return t.enter("lineEnding"),t.consume(T),t.exit("lineEnding"),fe}function fe(T){return T===null||markdownLineEnding(T)?Ne(T):(t.enter("htmlFlowData"),be(T))}function F(T){return T===45?(t.consume(T),L):be(T)}function pe(T){return T===47?(t.consume(T),m="",ce):be(T)}function ce(T){if(T===62){const V=m.toLowerCase();return htmlRawNames.includes(V)?(t.consume(T),k):be(T)}return asciiAlpha(T)&&m.length<8?(t.consume(T),m+=String.fromCharCode(T),ce):be(T)}function Re(T){return T===93?(t.consume(T),L):be(T)}function L(T){return T===62?(t.consume(T),k):T===45&&s===2?(t.consume(T),L):be(T)}function k(T){return T===null||markdownLineEnding(T)?(t.exit("htmlFlowData"),N(T)):(t.consume(T),k)}function N(T){return t.exit("htmlFlow"),a(T)}}function tokenizeNonLazyContinuationStart(t,a,l){const c=this;return s;function s(m){return markdownLineEnding(m)?(t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),d):l(m)}function d(m){return c.parser.lazy[c.now().line]?l(m):a(m)}}function tokenizeBlankLineBefore(t,a,l){return c;function c(s){return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),t.attempt(blankLine,a,l)}}const htmlText={name:"htmlText",tokenize:tokenizeHtmlText};function tokenizeHtmlText(t,a,l){const c=this;let s,d,m;return f;function f(L){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(L),x}function x(L){return L===33?(t.consume(L),h):L===47?(t.consume(L),ue):L===63?(t.consume(L),q):asciiAlpha(L)?(t.consume(L),ke):l(L)}function h(L){return L===45?(t.consume(L),E):L===91?(t.consume(L),d=0,B):asciiAlpha(L)?(t.consume(L),Z):l(L)}function E(L){return L===45?(t.consume(L),w):l(L)}function v(L){return L===null?l(L):L===45?(t.consume(L),R):markdownLineEnding(L)?(m=v,pe(L)):(t.consume(L),v)}function R(L){return L===45?(t.consume(L),w):v(L)}function w(L){return L===62?F(L):L===45?R(L):v(L)}function B(L){const k="CDATA[";return L===k.charCodeAt(d++)?(t.consume(L),d===k.length?U:B):l(L)}function U(L){return L===null?l(L):L===93?(t.consume(L),$):markdownLineEnding(L)?(m=U,pe(L)):(t.consume(L),U)}function $(L){return L===93?(t.consume(L),z):U(L)}function z(L){return L===62?F(L):L===93?(t.consume(L),z):U(L)}function Z(L){return L===null||L===62?F(L):markdownLineEnding(L)?(m=Z,pe(L)):(t.consume(L),Z)}function q(L){return L===null?l(L):L===63?(t.consume(L),ge):markdownLineEnding(L)?(m=q,pe(L)):(t.consume(L),q)}function ge(L){return L===62?F(L):q(L)}function ue(L){return asciiAlpha(L)?(t.consume(L),K):l(L)}function K(L){return L===45||asciiAlphanumeric(L)?(t.consume(L),K):ne(L)}function ne(L){return markdownLineEnding(L)?(m=ne,pe(L)):markdownSpace(L)?(t.consume(L),ne):F(L)}function ke(L){return L===45||asciiAlphanumeric(L)?(t.consume(L),ke):L===47||L===62||markdownLineEndingOrSpace(L)?_e(L):l(L)}function _e(L){return L===47?(t.consume(L),F):L===58||L===95||asciiAlpha(L)?(t.consume(L),Ae):markdownLineEnding(L)?(m=_e,pe(L)):markdownSpace(L)?(t.consume(L),_e):F(L)}function Ae(L){return L===45||L===46||L===58||L===95||asciiAlphanumeric(L)?(t.consume(L),Ae):ye(L)}function ye(L){return L===61?(t.consume(L),be):markdownLineEnding(L)?(m=ye,pe(L)):markdownSpace(L)?(t.consume(L),ye):_e(L)}function be(L){return L===null||L===60||L===61||L===62||L===96?l(L):L===34||L===39?(t.consume(L),s=L,Ne):markdownLineEnding(L)?(m=be,pe(L)):markdownSpace(L)?(t.consume(L),be):(t.consume(L),xe)}function Ne(L){return L===s?(t.consume(L),s=void 0,fe):L===null?l(L):markdownLineEnding(L)?(m=Ne,pe(L)):(t.consume(L),Ne)}function xe(L){return L===null||L===34||L===39||L===60||L===61||L===96?l(L):L===47||L===62||markdownLineEndingOrSpace(L)?_e(L):(t.consume(L),xe)}function fe(L){return L===47||L===62||markdownLineEndingOrSpace(L)?_e(L):l(L)}function F(L){return L===62?(t.consume(L),t.exit("htmlTextData"),t.exit("htmlText"),a):l(L)}function pe(L){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(L),t.exit("lineEnding"),ce}function ce(L){return markdownSpace(L)?factorySpace(t,Re,"linePrefix",c.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):Re(L)}function Re(L){return t.enter("htmlTextData"),m(L)}}const labelEnd={name:"labelEnd",resolveAll:resolveAllLabelEnd,resolveTo:resolveToLabelEnd,tokenize:tokenizeLabelEnd},resourceConstruct={tokenize:tokenizeResource},referenceFullConstruct={tokenize:tokenizeReferenceFull},referenceCollapsedConstruct={tokenize:tokenizeReferenceCollapsed};function resolveAllLabelEnd(t){let a=-1;const l=[];for(;++a<t.length;){const c=t[a][1];if(l.push(t[a]),c.type==="labelImage"||c.type==="labelLink"||c.type==="labelEnd"){const s=c.type==="labelImage"?4:2;c.type="data",a+=s}}return t.length!==l.length&&splice(t,0,t.length,l),t}function resolveToLabelEnd(t,a){let l=t.length,c=0,s,d,m,f;for(;l--;)if(s=t[l][1],d){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;t[l][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(m){if(t[l][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(d=l,s.type!=="labelLink")){c=2;break}}else s.type==="labelEnd"&&(m=l);const x={type:t[d][1].type==="labelLink"?"link":"image",start:{...t[d][1].start},end:{...t[t.length-1][1].end}},h={type:"label",start:{...t[d][1].start},end:{...t[m][1].end}},E={type:"labelText",start:{...t[d+c+2][1].end},end:{...t[m-2][1].start}};return f=[["enter",x,a],["enter",h,a]],f=push(f,t.slice(d+1,d+c+3)),f=push(f,[["enter",E,a]]),f=push(f,resolveAll(a.parser.constructs.insideSpan.null,t.slice(d+c+4,m-3),a)),f=push(f,[["exit",E,a],t[m-2],t[m-1],["exit",h,a]]),f=push(f,t.slice(m+1)),f=push(f,[["exit",x,a]]),splice(t,d,t.length,f),t}function tokenizeLabelEnd(t,a,l){const c=this;let s=c.events.length,d,m;for(;s--;)if((c.events[s][1].type==="labelImage"||c.events[s][1].type==="labelLink")&&!c.events[s][1]._balanced){d=c.events[s][1];break}return f;function f(R){return d?d._inactive?v(R):(m=c.parser.defined.includes(normalizeIdentifier(c.sliceSerialize({start:d.end,end:c.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(R),t.exit("labelMarker"),t.exit("labelEnd"),x):l(R)}function x(R){return R===40?t.attempt(resourceConstruct,E,m?E:v)(R):R===91?t.attempt(referenceFullConstruct,E,m?h:v)(R):m?E(R):v(R)}function h(R){return t.attempt(referenceCollapsedConstruct,E,v)(R)}function E(R){return a(R)}function v(R){return d._balanced=!0,l(R)}}function tokenizeResource(t,a,l){return c;function c(v){return t.enter("resource"),t.enter("resourceMarker"),t.consume(v),t.exit("resourceMarker"),s}function s(v){return markdownLineEndingOrSpace(v)?factoryWhitespace(t,d)(v):d(v)}function d(v){return v===41?E(v):factoryDestination(t,m,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(v)}function m(v){return markdownLineEndingOrSpace(v)?factoryWhitespace(t,x)(v):E(v)}function f(v){return l(v)}function x(v){return v===34||v===39||v===40?factoryTitle(t,h,l,"resourceTitle","resourceTitleMarker","resourceTitleString")(v):E(v)}function h(v){return markdownLineEndingOrSpace(v)?factoryWhitespace(t,E)(v):E(v)}function E(v){return v===41?(t.enter("resourceMarker"),t.consume(v),t.exit("resourceMarker"),t.exit("resource"),a):l(v)}}function tokenizeReferenceFull(t,a,l){const c=this;return s;function s(f){return factoryLabel.call(c,t,d,m,"reference","referenceMarker","referenceString")(f)}function d(f){return c.parser.defined.includes(normalizeIdentifier(c.sliceSerialize(c.events[c.events.length-1][1]).slice(1,-1)))?a(f):l(f)}function m(f){return l(f)}}function tokenizeReferenceCollapsed(t,a,l){return c;function c(d){return t.enter("reference"),t.enter("referenceMarker"),t.consume(d),t.exit("referenceMarker"),s}function s(d){return d===93?(t.enter("referenceMarker"),t.consume(d),t.exit("referenceMarker"),t.exit("reference"),a):l(d)}}const labelStartImage={name:"labelStartImage",resolveAll:labelEnd.resolveAll,tokenize:tokenizeLabelStartImage};function tokenizeLabelStartImage(t,a,l){const c=this;return s;function s(f){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(f),t.exit("labelImageMarker"),d}function d(f){return f===91?(t.enter("labelMarker"),t.consume(f),t.exit("labelMarker"),t.exit("labelImage"),m):l(f)}function m(f){return f===94&&"_hiddenFootnoteSupport"in c.parser.constructs?l(f):a(f)}}const labelStartLink={name:"labelStartLink",resolveAll:labelEnd.resolveAll,tokenize:tokenizeLabelStartLink};function tokenizeLabelStartLink(t,a,l){const c=this;return s;function s(m){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(m),t.exit("labelMarker"),t.exit("labelLink"),d}function d(m){return m===94&&"_hiddenFootnoteSupport"in c.parser.constructs?l(m):a(m)}}const lineEnding={name:"lineEnding",tokenize:tokenizeLineEnding};function tokenizeLineEnding(t,a){return l;function l(c){return t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),factorySpace(t,a,"linePrefix")}}const thematicBreak$1={name:"thematicBreak",tokenize:tokenizeThematicBreak};function tokenizeThematicBreak(t,a,l){let c=0,s;return d;function d(h){return t.enter("thematicBreak"),m(h)}function m(h){return s=h,f(h)}function f(h){return h===s?(t.enter("thematicBreakSequence"),x(h)):c>=3&&(h===null||markdownLineEnding(h))?(t.exit("thematicBreak"),a(h)):l(h)}function x(h){return h===s?(t.consume(h),c++,x):(t.exit("thematicBreakSequence"),markdownSpace(h)?factorySpace(t,f,"whitespace")(h):f(h))}}const list$1={continuation:{tokenize:tokenizeListContinuation},exit:tokenizeListEnd,name:"list",tokenize:tokenizeListStart},listItemPrefixWhitespaceConstruct={partial:!0,tokenize:tokenizeListItemPrefixWhitespace},indentConstruct={partial:!0,tokenize:tokenizeIndent};function tokenizeListStart(t,a,l){const c=this,s=c.events[c.events.length-1];let d=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,m=0;return f;function f(w){const B=c.containerState.type||(w===42||w===43||w===45?"listUnordered":"listOrdered");if(B==="listUnordered"?!c.containerState.marker||w===c.containerState.marker:asciiDigit(w)){if(c.containerState.type||(c.containerState.type=B,t.enter(B,{_container:!0})),B==="listUnordered")return t.enter("listItemPrefix"),w===42||w===45?t.check(thematicBreak$1,l,h)(w):h(w);if(!c.interrupt||w===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),x(w)}return l(w)}function x(w){return asciiDigit(w)&&++m<10?(t.consume(w),x):(!c.interrupt||m<2)&&(c.containerState.marker?w===c.containerState.marker:w===41||w===46)?(t.exit("listItemValue"),h(w)):l(w)}function h(w){return t.enter("listItemMarker"),t.consume(w),t.exit("listItemMarker"),c.containerState.marker=c.containerState.marker||w,t.check(blankLine,c.interrupt?l:E,t.attempt(listItemPrefixWhitespaceConstruct,R,v))}function E(w){return c.containerState.initialBlankLine=!0,d++,R(w)}function v(w){return markdownSpace(w)?(t.enter("listItemPrefixWhitespace"),t.consume(w),t.exit("listItemPrefixWhitespace"),R):l(w)}function R(w){return c.containerState.size=d+c.sliceSerialize(t.exit("listItemPrefix"),!0).length,a(w)}}function tokenizeListContinuation(t,a,l){const c=this;return c.containerState._closeFlow=void 0,t.check(blankLine,s,d);function s(f){return c.containerState.furtherBlankLines=c.containerState.furtherBlankLines||c.containerState.initialBlankLine,factorySpace(t,a,"listItemIndent",c.containerState.size+1)(f)}function d(f){return c.containerState.furtherBlankLines||!markdownSpace(f)?(c.containerState.furtherBlankLines=void 0,c.containerState.initialBlankLine=void 0,m(f)):(c.containerState.furtherBlankLines=void 0,c.containerState.initialBlankLine=void 0,t.attempt(indentConstruct,a,m)(f))}function m(f){return c.containerState._closeFlow=!0,c.interrupt=void 0,factorySpace(t,t.attempt(list$1,a,l),"linePrefix",c.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function tokenizeIndent(t,a,l){const c=this;return factorySpace(t,s,"listItemIndent",c.containerState.size+1);function s(d){const m=c.events[c.events.length-1];return m&&m[1].type==="listItemIndent"&&m[2].sliceSerialize(m[1],!0).length===c.containerState.size?a(d):l(d)}}function tokenizeListEnd(t){t.exit(this.containerState.type)}function tokenizeListItemPrefixWhitespace(t,a,l){const c=this;return factorySpace(t,s,"listItemPrefixWhitespace",c.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(d){const m=c.events[c.events.length-1];return!markdownSpace(d)&&m&&m[1].type==="listItemPrefixWhitespace"?a(d):l(d)}}const setextUnderline={name:"setextUnderline",resolveTo:resolveToSetextUnderline,tokenize:tokenizeSetextUnderline};function resolveToSetextUnderline(t,a){let l=t.length,c,s,d;for(;l--;)if(t[l][0]==="enter"){if(t[l][1].type==="content"){c=l;break}t[l][1].type==="paragraph"&&(s=l)}else t[l][1].type==="content"&&t.splice(l,1),!d&&t[l][1].type==="definition"&&(d=l);const m={type:"setextHeading",start:{...t[c][1].start},end:{...t[t.length-1][1].end}};return t[s][1].type="setextHeadingText",d?(t.splice(s,0,["enter",m,a]),t.splice(d+1,0,["exit",t[c][1],a]),t[c][1].end={...t[d][1].end}):t[c][1]=m,t.push(["exit",m,a]),t}function tokenizeSetextUnderline(t,a,l){const c=this;let s;return d;function d(h){let E=c.events.length,v;for(;E--;)if(c.events[E][1].type!=="lineEnding"&&c.events[E][1].type!=="linePrefix"&&c.events[E][1].type!=="content"){v=c.events[E][1].type==="paragraph";break}return!c.parser.lazy[c.now().line]&&(c.interrupt||v)?(t.enter("setextHeadingLine"),s=h,m(h)):l(h)}function m(h){return t.enter("setextHeadingLineSequence"),f(h)}function f(h){return h===s?(t.consume(h),f):(t.exit("setextHeadingLineSequence"),markdownSpace(h)?factorySpace(t,x,"lineSuffix")(h):x(h))}function x(h){return h===null||markdownLineEnding(h)?(t.exit("setextHeadingLine"),a(h)):l(h)}}const flow$1={tokenize:initializeFlow};function initializeFlow(t){const a=this,l=t.attempt(blankLine,c,t.attempt(this.parser.constructs.flowInitial,s,factorySpace(t,t.attempt(this.parser.constructs.flow,s,t.attempt(content,s)),"linePrefix")));return l;function c(d){if(d===null){t.consume(d);return}return t.enter("lineEndingBlank"),t.consume(d),t.exit("lineEndingBlank"),a.currentConstruct=void 0,l}function s(d){if(d===null){t.consume(d);return}return t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),a.currentConstruct=void 0,l}}const resolver={resolveAll:createResolver()},string$1=initializeFactory("string"),text$2=initializeFactory("text");function initializeFactory(t){return{resolveAll:createResolver(t==="text"?resolveAllLineSuffixes:void 0),tokenize:a};function a(l){const c=this,s=this.parser.constructs[t],d=l.attempt(s,m,f);return m;function m(E){return h(E)?d(E):f(E)}function f(E){if(E===null){l.consume(E);return}return l.enter("data"),l.consume(E),x}function x(E){return h(E)?(l.exit("data"),d(E)):(l.consume(E),x)}function h(E){if(E===null)return!0;const v=s[E];let R=-1;if(v)for(;++R<v.length;){const w=v[R];if(!w.previous||w.previous.call(c,c.previous))return!0}return!1}}}function createResolver(t){return a;function a(l,c){let s=-1,d;for(;++s<=l.length;)d===void 0?l[s]&&l[s][1].type==="data"&&(d=s,s++):(!l[s]||l[s][1].type!=="data")&&(s!==d+2&&(l[d][1].end=l[s-1][1].end,l.splice(d+2,s-d-2),s=d+2),d=void 0);return t?t(l,c):l}}function resolveAllLineSuffixes(t,a){let l=0;for(;++l<=t.length;)if((l===t.length||t[l][1].type==="lineEnding")&&t[l-1][1].type==="data"){const c=t[l-1][1],s=a.sliceStream(c);let d=s.length,m=-1,f=0,x;for(;d--;){const h=s[d];if(typeof h=="string"){for(m=h.length;h.charCodeAt(m-1)===32;)f++,m--;if(m)break;m=-1}else if(h===-2)x=!0,f++;else if(h!==-1){d++;break}}if(a._contentTypeTextTrailing&&l===t.length&&(f=0),f){const h={type:l===t.length||x||f<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:d?m:c.start._bufferIndex+m,_index:c.start._index+d,line:c.end.line,column:c.end.column-f,offset:c.end.offset-f},end:{...c.end}};c.end={...h.start},c.start.offset===c.end.offset?Object.assign(c,h):(t.splice(l,0,["enter",h,a],["exit",h,a]),l+=2)}l++}return t}const document$1={42:list$1,43:list$1,45:list$1,48:list$1,49:list$1,50:list$1,51:list$1,52:list$1,53:list$1,54:list$1,55:list$1,56:list$1,57:list$1,62:blockQuote},contentInitial={91:definition},flowInitial={[-2]:codeIndented,[-1]:codeIndented,32:codeIndented},flow={35:headingAtx,42:thematicBreak$1,45:[setextUnderline,thematicBreak$1],60:htmlFlow,61:setextUnderline,95:thematicBreak$1,96:codeFenced,126:codeFenced},string={38:characterReference,92:characterEscape},text$1={[-5]:lineEnding,[-4]:lineEnding,[-3]:lineEnding,33:labelStartImage,38:characterReference,42:attention,60:[autolink,htmlText],91:labelStartLink,92:[hardBreakEscape,characterEscape],93:labelEnd,95:attention,96:codeText},insideSpan={null:[attention,resolver]},attentionMarkers={null:[42,95]},disable={null:[]},defaultConstructs=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers,contentInitial,disable,document:document$1,flow,flowInitial,insideSpan,string,text:text$1},Symbol.toStringTag,{value:"Module"}));function createTokenizer(t,a,l){let c={_bufferIndex:-1,_index:0,line:l&&l.line||1,column:l&&l.column||1,offset:l&&l.offset||0};const s={},d=[];let m=[],f=[];const x={attempt:ne(ue),check:ne(K),consume:Z,enter:q,exit:ge,interrupt:ne(K,{interrupt:!0})},h={code:null,containerState:{},defineSkip:U,events:[],now:B,parser:t,previous:null,sliceSerialize:R,sliceStream:w,write:v};let E=a.tokenize.call(h,x);return a.resolveAll&&d.push(a),h;function v(ye){return m=push(m,ye),$(),m[m.length-1]!==null?[]:(ke(a,0),h.events=resolveAll(d,h.events,h),h.events)}function R(ye,be){return serializeChunks(w(ye),be)}function w(ye){return sliceChunks(m,ye)}function B(){const{_bufferIndex:ye,_index:be,line:Ne,column:xe,offset:fe}=c;return{_bufferIndex:ye,_index:be,line:Ne,column:xe,offset:fe}}function U(ye){s[ye.line]=ye.column,Ae()}function $(){let ye;for(;c._index<m.length;){const be=m[c._index];if(typeof be=="string")for(ye=c._index,c._bufferIndex<0&&(c._bufferIndex=0);c._index===ye&&c._bufferIndex<be.length;)z(be.charCodeAt(c._bufferIndex));else z(be)}}function z(ye){E=E(ye)}function Z(ye){markdownLineEnding(ye)?(c.line++,c.column=1,c.offset+=ye===-3?2:1,Ae()):ye!==-1&&(c.column++,c.offset++),c._bufferIndex<0?c._index++:(c._bufferIndex++,c._bufferIndex===m[c._index].length&&(c._bufferIndex=-1,c._index++)),h.previous=ye}function q(ye,be){const Ne=be||{};return Ne.type=ye,Ne.start=B(),h.events.push(["enter",Ne,h]),f.push(Ne),Ne}function ge(ye){const be=f.pop();return be.end=B(),h.events.push(["exit",be,h]),be}function ue(ye,be){ke(ye,be.from)}function K(ye,be){be.restore()}function ne(ye,be){return Ne;function Ne(xe,fe,F){let pe,ce,Re,L;return Array.isArray(xe)?N(xe):"tokenize"in xe?N([xe]):k(xe);function k(le){return he;function he(Ce){const Ee=Ce!==null&&le[Ce],Ke=Ce!==null&&le.null,kn=[...Array.isArray(Ee)?Ee:Ee?[Ee]:[],...Array.isArray(Ke)?Ke:Ke?[Ke]:[]];return N(kn)(Ce)}}function N(le){return pe=le,ce=0,le.length===0?F:T(le[ce])}function T(le){return he;function he(Ce){return L=_e(),Re=le,le.partial||(h.currentConstruct=le),le.name&&h.parser.constructs.disable.null.includes(le.name)?ee():le.tokenize.call(be?Object.assign(Object.create(h),be):h,x,V,ee)(Ce)}}function V(le){return ye(Re,L),fe}function ee(le){return L.restore(),++ce<pe.length?T(pe[ce]):F}}}function ke(ye,be){ye.resolveAll&&!d.includes(ye)&&d.push(ye),ye.resolve&&splice(h.events,be,h.events.length-be,ye.resolve(h.events.slice(be),h)),ye.resolveTo&&(h.events=ye.resolveTo(h.events,h))}function _e(){const ye=B(),be=h.previous,Ne=h.currentConstruct,xe=h.events.length,fe=Array.from(f);return{from:xe,restore:F};function F(){c=ye,h.previous=be,h.currentConstruct=Ne,h.events.length=xe,f=fe,Ae()}}function Ae(){c.line in s&&c.column<2&&(c.column=s[c.line],c.offset+=s[c.line]-1)}}function sliceChunks(t,a){const l=a.start._index,c=a.start._bufferIndex,s=a.end._index,d=a.end._bufferIndex;let m;if(l===s)m=[t[l].slice(c,d)];else{if(m=t.slice(l,s),c>-1){const f=m[0];typeof f=="string"?m[0]=f.slice(c):m.shift()}d>0&&m.push(t[s].slice(0,d))}return m}function serializeChunks(t,a){let l=-1;const c=[];let s;for(;++l<t.length;){const d=t[l];let m;if(typeof d=="string")m=d;else switch(d){case-5:{m="\r";break}case-4:{m=`
`;break}case-3:{m=`\r
`;break}case-2:{m=a?" ":"	";break}case-1:{if(!a&&s)continue;m=" ";break}default:m=String.fromCharCode(d)}s=d===-2,c.push(m)}return c.join("")}function parse(t){const c={constructs:combineExtensions([defaultConstructs,...(t||{}).extensions||[]]),content:s(content$1),defined:[],document:s(document$2),flow:s(flow$1),lazy:{},string:s(string$1),text:s(text$2)};return c;function s(d){return m;function m(f){return createTokenizer(c,d,f)}}}function postprocess(t){for(;!subtokenize(t););return t}const search=/[\0\t\n\r]/g;function preprocess(){let t=1,a="",l=!0,c;return s;function s(d,m,f){const x=[];let h,E,v,R,w;for(d=a+(typeof d=="string"?d.toString():new TextDecoder(m||void 0).decode(d)),v=0,a="",l&&(d.charCodeAt(0)===65279&&v++,l=void 0);v<d.length;){if(search.lastIndex=v,h=search.exec(d),R=h&&h.index!==void 0?h.index:d.length,w=d.charCodeAt(R),!h){a=d.slice(v);break}if(w===10&&v===R&&c)x.push(-3),c=void 0;else switch(c&&(x.push(-5),c=void 0),v<R&&(x.push(d.slice(v,R)),t+=R-v),w){case 0:{x.push(65533),t++;break}case 9:{for(E=Math.ceil(t/4)*4,x.push(-2);t++<E;)x.push(-1);break}case 10:{x.push(-4),t=1;break}default:c=!0,t=1}v=R+1}return f&&(c&&x.push(-5),a&&x.push(a),x.push(null)),x}}const characterEscapeOrReference=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function decodeString(t){return t.replace(characterEscapeOrReference,decode)}function decode(t,a,l){if(a)return a;if(l.charCodeAt(0)===35){const s=l.charCodeAt(1),d=s===120||s===88;return decodeNumericCharacterReference(l.slice(d?2:1),d?16:10)}return decodeNamedCharacterReference(l)||t}const own$2={}.hasOwnProperty;function fromMarkdown(t,a,l){return typeof a!="string"&&(l=a,a=void 0),compiler(l)(postprocess(parse(l).document().write(preprocess()(t,a,!0))))}function compiler(t){const a={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:d(Gn),autolinkProtocol:_e,autolinkEmail:_e,atxHeading:d(Ln),blockQuote:d(Ke),characterEscape:_e,characterReference:_e,codeFenced:d(kn),codeFencedFenceInfo:m,codeFencedFenceMeta:m,codeIndented:d(kn,m),codeText:d(Cn,m),codeTextData:_e,data:_e,codeFlowValue:_e,definition:d(vn),definitionDestinationString:m,definitionLabelString:m,definitionTitleString:m,emphasis:d(pn),hardBreakEscape:d(In),hardBreakTrailing:d(In),htmlFlow:d(Vn,m),htmlFlowData:_e,htmlText:d(Vn,m),htmlTextData:_e,image:d(Sn),label:m,link:d(Gn),listItem:d(wn),listItemValue:R,listOrdered:d(Tn,v),listUnordered:d(Tn),paragraph:d(mn),reference:T,referenceString:m,resourceDestinationString:m,resourceTitleString:m,setextHeading:d(Ln),strong:d(rt),thematicBreak:d(y)},exit:{atxHeading:x(),atxHeadingSequence:ue,autolink:x(),autolinkEmail:Ee,autolinkProtocol:Ce,blockQuote:x(),characterEscapeValue:Ae,characterReferenceMarkerHexadecimal:ee,characterReferenceMarkerNumeric:ee,characterReferenceValue:le,characterReference:he,codeFenced:x($),codeFencedFence:U,codeFencedFenceInfo:w,codeFencedFenceMeta:B,codeFlowValue:Ae,codeIndented:x(z),codeText:x(fe),codeTextData:Ae,data:Ae,definition:x(),definitionDestinationString:ge,definitionLabelString:Z,definitionTitleString:q,emphasis:x(),hardBreakEscape:x(be),hardBreakTrailing:x(be),htmlFlow:x(Ne),htmlFlowData:Ae,htmlText:x(xe),htmlTextData:Ae,image:x(pe),label:Re,labelText:ce,lineEnding:ye,link:x(F),listItem:x(),listOrdered:x(),listUnordered:x(),paragraph:x(),referenceString:V,resourceDestinationString:L,resourceTitleString:k,resource:N,setextHeading:x(ke),setextHeadingLineSequence:ne,setextHeadingText:K,strong:x(),thematicBreak:x()}};configure(a,(t||{}).mdastExtensions||[]);const l={};return c;function c(M){let S={type:"root",children:[]};const g={stack:[S],tokenStack:[],config:a,enter:f,exit:h,buffer:m,resume:E,data:l},b=[];let _=-1;for(;++_<M.length;)if(M[_][1].type==="listOrdered"||M[_][1].type==="listUnordered")if(M[_][0]==="enter")b.push(_);else{const A=b.pop();_=s(M,A,_)}for(_=-1;++_<M.length;){const A=a[M[_][0]];own$2.call(A,M[_][1].type)&&A[M[_][1].type].call(Object.assign({sliceSerialize:M[_][2].sliceSerialize},g),M[_][1])}if(g.tokenStack.length>0){const A=g.tokenStack[g.tokenStack.length-1];(A[1]||defaultOnError).call(g,void 0,A[0])}for(S.position={start:point(M.length>0?M[0][1].start:{line:1,column:1,offset:0}),end:point(M.length>0?M[M.length-2][1].end:{line:1,column:1,offset:0})},_=-1;++_<a.transforms.length;)S=a.transforms[_](S)||S;return S}function s(M,S,g){let b=S-1,_=-1,A=!1,O,j,Y,ie;for(;++b<=g;){const G=M[b];switch(G[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{G[0]==="enter"?_++:_--,ie=void 0;break}case"lineEndingBlank":{G[0]==="enter"&&(O&&!ie&&!_&&!Y&&(Y=b),ie=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ie=void 0}if(!_&&G[0]==="enter"&&G[1].type==="listItemPrefix"||_===-1&&G[0]==="exit"&&(G[1].type==="listUnordered"||G[1].type==="listOrdered")){if(O){let me=b;for(j=void 0;me--;){const oe=M[me];if(oe[1].type==="lineEnding"||oe[1].type==="lineEndingBlank"){if(oe[0]==="exit")continue;j&&(M[j][1].type="lineEndingBlank",A=!0),oe[1].type="lineEnding",j=me}else if(!(oe[1].type==="linePrefix"||oe[1].type==="blockQuotePrefix"||oe[1].type==="blockQuotePrefixWhitespace"||oe[1].type==="blockQuoteMarker"||oe[1].type==="listItemIndent"))break}Y&&(!j||Y<j)&&(O._spread=!0),O.end=Object.assign({},j?M[j][1].start:G[1].end),M.splice(j||b,0,["exit",O,G[2]]),b++,g++}if(G[1].type==="listItemPrefix"){const me={type:"listItem",_spread:!1,start:Object.assign({},G[1].start),end:void 0};O=me,M.splice(b,0,["enter",me,G[2]]),b++,g++,Y=void 0,ie=!0}}}return M[S][1]._spread=A,g}function d(M,S){return g;function g(b){f.call(this,M(b),b),S&&S.call(this,b)}}function m(){this.stack.push({type:"fragment",children:[]})}function f(M,S,g){this.stack[this.stack.length-1].children.push(M),this.stack.push(M),this.tokenStack.push([S,g||void 0]),M.position={start:point(S.start),end:void 0}}function x(M){return S;function S(g){M&&M.call(this,g),h.call(this,g)}}function h(M,S){const g=this.stack.pop(),b=this.tokenStack.pop();if(b)b[0].type!==M.type&&(S?S.call(this,M,b[0]):(b[1]||defaultOnError).call(this,M,b[0]));else throw new Error("Cannot close `"+M.type+"` ("+stringifyPosition({start:M.start,end:M.end})+"): it’s not open");g.position.end=point(M.end)}function E(){return toString$1(this.stack.pop())}function v(){this.data.expectingFirstListItemValue=!0}function R(M){if(this.data.expectingFirstListItemValue){const S=this.stack[this.stack.length-2];S.start=Number.parseInt(this.sliceSerialize(M),10),this.data.expectingFirstListItemValue=void 0}}function w(){const M=this.resume(),S=this.stack[this.stack.length-1];S.lang=M}function B(){const M=this.resume(),S=this.stack[this.stack.length-1];S.meta=M}function U(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function $(){const M=this.resume(),S=this.stack[this.stack.length-1];S.value=M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function z(){const M=this.resume(),S=this.stack[this.stack.length-1];S.value=M.replace(/(\r?\n|\r)$/g,"")}function Z(M){const S=this.resume(),g=this.stack[this.stack.length-1];g.label=S,g.identifier=normalizeIdentifier(this.sliceSerialize(M)).toLowerCase()}function q(){const M=this.resume(),S=this.stack[this.stack.length-1];S.title=M}function ge(){const M=this.resume(),S=this.stack[this.stack.length-1];S.url=M}function ue(M){const S=this.stack[this.stack.length-1];if(!S.depth){const g=this.sliceSerialize(M).length;S.depth=g}}function K(){this.data.setextHeadingSlurpLineEnding=!0}function ne(M){const S=this.stack[this.stack.length-1];S.depth=this.sliceSerialize(M).codePointAt(0)===61?1:2}function ke(){this.data.setextHeadingSlurpLineEnding=void 0}function _e(M){const g=this.stack[this.stack.length-1].children;let b=g[g.length-1];(!b||b.type!=="text")&&(b=en(),b.position={start:point(M.start),end:void 0},g.push(b)),this.stack.push(b)}function Ae(M){const S=this.stack.pop();S.value+=this.sliceSerialize(M),S.position.end=point(M.end)}function ye(M){const S=this.stack[this.stack.length-1];if(this.data.atHardBreak){const g=S.children[S.children.length-1];g.position.end=point(M.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&a.canContainEols.includes(S.type)&&(_e.call(this,M),Ae.call(this,M))}function be(){this.data.atHardBreak=!0}function Ne(){const M=this.resume(),S=this.stack[this.stack.length-1];S.value=M}function xe(){const M=this.resume(),S=this.stack[this.stack.length-1];S.value=M}function fe(){const M=this.resume(),S=this.stack[this.stack.length-1];S.value=M}function F(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const S=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=S,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function pe(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const S=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=S,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function ce(M){const S=this.sliceSerialize(M),g=this.stack[this.stack.length-2];g.label=decodeString(S),g.identifier=normalizeIdentifier(S).toLowerCase()}function Re(){const M=this.stack[this.stack.length-1],S=this.resume(),g=this.stack[this.stack.length-1];if(this.data.inReference=!0,g.type==="link"){const b=M.children;g.children=b}else g.alt=S}function L(){const M=this.resume(),S=this.stack[this.stack.length-1];S.url=M}function k(){const M=this.resume(),S=this.stack[this.stack.length-1];S.title=M}function N(){this.data.inReference=void 0}function T(){this.data.referenceType="collapsed"}function V(M){const S=this.resume(),g=this.stack[this.stack.length-1];g.label=S,g.identifier=normalizeIdentifier(this.sliceSerialize(M)).toLowerCase(),this.data.referenceType="full"}function ee(M){this.data.characterReferenceType=M.type}function le(M){const S=this.sliceSerialize(M),g=this.data.characterReferenceType;let b;g?(b=decodeNumericCharacterReference(S,g==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):b=decodeNamedCharacterReference(S);const _=this.stack[this.stack.length-1];_.value+=b}function he(M){const S=this.stack.pop();S.position.end=point(M.end)}function Ce(M){Ae.call(this,M);const S=this.stack[this.stack.length-1];S.url=this.sliceSerialize(M)}function Ee(M){Ae.call(this,M);const S=this.stack[this.stack.length-1];S.url="mailto:"+this.sliceSerialize(M)}function Ke(){return{type:"blockquote",children:[]}}function kn(){return{type:"code",lang:null,meta:null,value:""}}function Cn(){return{type:"inlineCode",value:""}}function vn(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function pn(){return{type:"emphasis",children:[]}}function Ln(){return{type:"heading",depth:0,children:[]}}function In(){return{type:"break"}}function Vn(){return{type:"html",value:""}}function Sn(){return{type:"image",title:null,url:"",alt:null}}function Gn(){return{type:"link",title:null,url:"",children:[]}}function Tn(M){return{type:"list",ordered:M.type==="listOrdered",start:null,spread:M._spread,children:[]}}function wn(M){return{type:"listItem",spread:M._spread,checked:null,children:[]}}function mn(){return{type:"paragraph",children:[]}}function rt(){return{type:"strong",children:[]}}function en(){return{type:"text",value:""}}function y(){return{type:"thematicBreak"}}}function point(t){return{line:t.line,column:t.column,offset:t.offset}}function configure(t,a){let l=-1;for(;++l<a.length;){const c=a[l];Array.isArray(c)?configure(t,c):extension(t,c)}}function extension(t,a){let l;for(l in a)if(own$2.call(a,l))switch(l){case"canContainEols":{const c=a[l];c&&t[l].push(...c);break}case"transforms":{const c=a[l];c&&t[l].push(...c);break}case"enter":case"exit":{const c=a[l];c&&Object.assign(t[l],c);break}}}function defaultOnError(t,a){throw t?new Error("Cannot close `"+t.type+"` ("+stringifyPosition({start:t.start,end:t.end})+"): a different token (`"+a.type+"`, "+stringifyPosition({start:a.start,end:a.end})+") is open"):new Error("Cannot close document, a token (`"+a.type+"`, "+stringifyPosition({start:a.start,end:a.end})+") is still open")}function remarkParse(t){const a=this;a.parser=l;function l(c){return fromMarkdown(c,{...a.data("settings"),...t,extensions:a.data("micromarkExtensions")||[],mdastExtensions:a.data("fromMarkdownExtensions")||[]})}}function blockquote(t,a){const l={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(a),!0)};return t.patch(a,l),t.applyData(a,l)}function hardBreak(t,a){const l={type:"element",tagName:"br",properties:{},children:[]};return t.patch(a,l),[t.applyData(a,l),{type:"text",value:`
`}]}function code(t,a){const l=a.value?a.value+`
`:"",c={},s=a.lang?a.lang.split(/\s+/):[];s.length>0&&(c.className=["language-"+s[0]]);let d={type:"element",tagName:"code",properties:c,children:[{type:"text",value:l}]};return a.meta&&(d.data={meta:a.meta}),t.patch(a,d),d=t.applyData(a,d),d={type:"element",tagName:"pre",properties:{},children:[d]},t.patch(a,d),d}function strikethrough(t,a){const l={type:"element",tagName:"del",properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}function emphasis(t,a){const l={type:"element",tagName:"em",properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}function footnoteReference(t,a){const l=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",c=String(a.identifier).toUpperCase(),s=normalizeUri(c.toLowerCase()),d=t.footnoteOrder.indexOf(c);let m,f=t.footnoteCounts.get(c);f===void 0?(f=0,t.footnoteOrder.push(c),m=t.footnoteOrder.length):m=d+1,f+=1,t.footnoteCounts.set(c,f);const x={type:"element",tagName:"a",properties:{href:"#"+l+"fn-"+s,id:l+"fnref-"+s+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(m)}]};t.patch(a,x);const h={type:"element",tagName:"sup",properties:{},children:[x]};return t.patch(a,h),t.applyData(a,h)}function heading(t,a){const l={type:"element",tagName:"h"+a.depth,properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}function html(t,a){if(t.options.allowDangerousHtml){const l={type:"raw",value:a.value};return t.patch(a,l),t.applyData(a,l)}}function revert(t,a){const l=a.referenceType;let c="]";if(l==="collapsed"?c+="[]":l==="full"&&(c+="["+(a.label||a.identifier)+"]"),a.type==="imageReference")return[{type:"text",value:"!["+a.alt+c}];const s=t.all(a),d=s[0];d&&d.type==="text"?d.value="["+d.value:s.unshift({type:"text",value:"["});const m=s[s.length-1];return m&&m.type==="text"?m.value+=c:s.push({type:"text",value:c}),s}function imageReference(t,a){const l=String(a.identifier).toUpperCase(),c=t.definitionById.get(l);if(!c)return revert(t,a);const s={src:normalizeUri(c.url||""),alt:a.alt};c.title!==null&&c.title!==void 0&&(s.title=c.title);const d={type:"element",tagName:"img",properties:s,children:[]};return t.patch(a,d),t.applyData(a,d)}function image(t,a){const l={src:normalizeUri(a.url)};a.alt!==null&&a.alt!==void 0&&(l.alt=a.alt),a.title!==null&&a.title!==void 0&&(l.title=a.title);const c={type:"element",tagName:"img",properties:l,children:[]};return t.patch(a,c),t.applyData(a,c)}function inlineCode(t,a){const l={type:"text",value:a.value.replace(/\r?\n|\r/g," ")};t.patch(a,l);const c={type:"element",tagName:"code",properties:{},children:[l]};return t.patch(a,c),t.applyData(a,c)}function linkReference(t,a){const l=String(a.identifier).toUpperCase(),c=t.definitionById.get(l);if(!c)return revert(t,a);const s={href:normalizeUri(c.url||"")};c.title!==null&&c.title!==void 0&&(s.title=c.title);const d={type:"element",tagName:"a",properties:s,children:t.all(a)};return t.patch(a,d),t.applyData(a,d)}function link(t,a){const l={href:normalizeUri(a.url)};a.title!==null&&a.title!==void 0&&(l.title=a.title);const c={type:"element",tagName:"a",properties:l,children:t.all(a)};return t.patch(a,c),t.applyData(a,c)}function listItem(t,a,l){const c=t.all(a),s=l?listLoose(l):listItemLoose(a),d={},m=[];if(typeof a.checked=="boolean"){const E=c[0];let v;E&&E.type==="element"&&E.tagName==="p"?v=E:(v={type:"element",tagName:"p",properties:{},children:[]},c.unshift(v)),v.children.length>0&&v.children.unshift({type:"text",value:" "}),v.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:a.checked,disabled:!0},children:[]}),d.className=["task-list-item"]}let f=-1;for(;++f<c.length;){const E=c[f];(s||f!==0||E.type!=="element"||E.tagName!=="p")&&m.push({type:"text",value:`
`}),E.type==="element"&&E.tagName==="p"&&!s?m.push(...E.children):m.push(E)}const x=c[c.length-1];x&&(s||x.type!=="element"||x.tagName!=="p")&&m.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:d,children:m};return t.patch(a,h),t.applyData(a,h)}function listLoose(t){let a=!1;if(t.type==="list"){a=t.spread||!1;const l=t.children;let c=-1;for(;!a&&++c<l.length;)a=listItemLoose(l[c])}return a}function listItemLoose(t){const a=t.spread;return a??t.children.length>1}function list(t,a){const l={},c=t.all(a);let s=-1;for(typeof a.start=="number"&&a.start!==1&&(l.start=a.start);++s<c.length;){const m=c[s];if(m.type==="element"&&m.tagName==="li"&&m.properties&&Array.isArray(m.properties.className)&&m.properties.className.includes("task-list-item")){l.className=["contains-task-list"];break}}const d={type:"element",tagName:a.ordered?"ol":"ul",properties:l,children:t.wrap(c,!0)};return t.patch(a,d),t.applyData(a,d)}function paragraph(t,a){const l={type:"element",tagName:"p",properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}function root(t,a){const l={type:"root",children:t.wrap(t.all(a))};return t.patch(a,l),t.applyData(a,l)}function strong(t,a){const l={type:"element",tagName:"strong",properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}function table(t,a){const l=t.all(a),c=l.shift(),s=[];if(c){const m={type:"element",tagName:"thead",properties:{},children:t.wrap([c],!0)};t.patch(a.children[0],m),s.push(m)}if(l.length>0){const m={type:"element",tagName:"tbody",properties:{},children:t.wrap(l,!0)},f=pointStart(a.children[1]),x=pointEnd(a.children[a.children.length-1]);f&&x&&(m.position={start:f,end:x}),s.push(m)}const d={type:"element",tagName:"table",properties:{},children:t.wrap(s,!0)};return t.patch(a,d),t.applyData(a,d)}function tableRow(t,a,l){const c=l?l.children:void 0,d=(c?c.indexOf(a):1)===0?"th":"td",m=l&&l.type==="table"?l.align:void 0,f=m?m.length:a.children.length;let x=-1;const h=[];for(;++x<f;){const v=a.children[x],R={},w=m?m[x]:void 0;w&&(R.align=w);let B={type:"element",tagName:d,properties:R,children:[]};v&&(B.children=t.all(v),t.patch(v,B),B=t.applyData(v,B)),h.push(B)}const E={type:"element",tagName:"tr",properties:{},children:t.wrap(h,!0)};return t.patch(a,E),t.applyData(a,E)}function tableCell(t,a){const l={type:"element",tagName:"td",properties:{},children:t.all(a)};return t.patch(a,l),t.applyData(a,l)}const tab=9,space=32;function trimLines(t){const a=String(t),l=/\r?\n|\r/g;let c=l.exec(a),s=0;const d=[];for(;c;)d.push(trimLine(a.slice(s,c.index),s>0,!0),c[0]),s=c.index+c[0].length,c=l.exec(a);return d.push(trimLine(a.slice(s),s>0,!1)),d.join("")}function trimLine(t,a,l){let c=0,s=t.length;if(a){let d=t.codePointAt(c);for(;d===tab||d===space;)c++,d=t.codePointAt(c)}if(l){let d=t.codePointAt(s-1);for(;d===tab||d===space;)s--,d=t.codePointAt(s-1)}return s>c?t.slice(c,s):""}function text(t,a){const l={type:"text",value:trimLines(String(a.value))};return t.patch(a,l),t.applyData(a,l)}function thematicBreak(t,a){const l={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(a,l),t.applyData(a,l)}const handlers={blockquote,break:hardBreak,code,delete:strikethrough,emphasis,footnoteReference,heading,html,imageReference,image,inlineCode,linkReference,link,listItem,list,paragraph,root,strong,table,tableCell,tableRow,text,thematicBreak,toml:ignore,yaml:ignore,definition:ignore,footnoteDefinition:ignore};function ignore(){}const VOID=-1,PRIMITIVE=0,ARRAY=1,OBJECT=2,DATE=3,REGEXP=4,MAP=5,SET=6,ERROR=7,BIGINT=8,env=typeof self=="object"?self:globalThis,deserializer=(t,a)=>{const l=(s,d)=>(t.set(d,s),s),c=s=>{if(t.has(s))return t.get(s);const[d,m]=a[s];switch(d){case PRIMITIVE:case VOID:return l(m,s);case ARRAY:{const f=l([],s);for(const x of m)f.push(c(x));return f}case OBJECT:{const f=l({},s);for(const[x,h]of m)f[c(x)]=c(h);return f}case DATE:return l(new Date(m),s);case REGEXP:{const{source:f,flags:x}=m;return l(new RegExp(f,x),s)}case MAP:{const f=l(new Map,s);for(const[x,h]of m)f.set(c(x),c(h));return f}case SET:{const f=l(new Set,s);for(const x of m)f.add(c(x));return f}case ERROR:{const{name:f,message:x}=m;return l(new env[f](x),s)}case BIGINT:return l(BigInt(m),s);case"BigInt":return l(Object(BigInt(m)),s);case"ArrayBuffer":return l(new Uint8Array(m).buffer,m);case"DataView":{const{buffer:f}=new Uint8Array(m);return l(new DataView(f),m)}}return l(new env[d](m),s)};return c},deserialize=t=>deserializer(new Map,t)(0),EMPTY="",{toString}={},{keys}=Object,typeOf=t=>{const a=typeof t;if(a!=="object"||!t)return[PRIMITIVE,a];const l=toString.call(t).slice(8,-1);switch(l){case"Array":return[ARRAY,EMPTY];case"Object":return[OBJECT,EMPTY];case"Date":return[DATE,EMPTY];case"RegExp":return[REGEXP,EMPTY];case"Map":return[MAP,EMPTY];case"Set":return[SET,EMPTY];case"DataView":return[ARRAY,l]}return l.includes("Array")?[ARRAY,l]:l.includes("Error")?[ERROR,l]:[OBJECT,l]},shouldSkip=([t,a])=>t===PRIMITIVE&&(a==="function"||a==="symbol"),serializer=(t,a,l,c)=>{const s=(m,f)=>{const x=c.push(m)-1;return l.set(f,x),x},d=m=>{if(l.has(m))return l.get(m);let[f,x]=typeOf(m);switch(f){case PRIMITIVE:{let E=m;switch(x){case"bigint":f=BIGINT,E=m.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+x);E=null;break;case"undefined":return s([VOID],m)}return s([f,E],m)}case ARRAY:{if(x){let R=m;return x==="DataView"?R=new Uint8Array(m.buffer):x==="ArrayBuffer"&&(R=new Uint8Array(m)),s([x,[...R]],m)}const E=[],v=s([f,E],m);for(const R of m)E.push(d(R));return v}case OBJECT:{if(x)switch(x){case"BigInt":return s([x,m.toString()],m);case"Boolean":case"Number":case"String":return s([x,m.valueOf()],m)}if(a&&"toJSON"in m)return d(m.toJSON());const E=[],v=s([f,E],m);for(const R of keys(m))(t||!shouldSkip(typeOf(m[R])))&&E.push([d(R),d(m[R])]);return v}case DATE:return s([f,m.toISOString()],m);case REGEXP:{const{source:E,flags:v}=m;return s([f,{source:E,flags:v}],m)}case MAP:{const E=[],v=s([f,E],m);for(const[R,w]of m)(t||!(shouldSkip(typeOf(R))||shouldSkip(typeOf(w))))&&E.push([d(R),d(w)]);return v}case SET:{const E=[],v=s([f,E],m);for(const R of m)(t||!shouldSkip(typeOf(R)))&&E.push(d(R));return v}}const{message:h}=m;return s([f,{name:x,message:h}],m)};return d},serialize=(t,{json:a,lossy:l}={})=>{const c=[];return serializer(!(a||l),!!a,new Map,c)(t),c},structuredClone$1=typeof structuredClone=="function"?(t,a)=>a&&("json"in a||"lossy"in a)?deserialize(serialize(t,a)):structuredClone(t):(t,a)=>deserialize(serialize(t,a));function defaultFootnoteBackContent(t,a){const l=[{type:"text",value:"↩"}];return a>1&&l.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(a)}]}),l}function defaultFootnoteBackLabel(t,a){return"Back to reference "+(t+1)+(a>1?"-"+a:"")}function footer(t){const a=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",l=t.options.footnoteBackContent||defaultFootnoteBackContent,c=t.options.footnoteBackLabel||defaultFootnoteBackLabel,s=t.options.footnoteLabel||"Footnotes",d=t.options.footnoteLabelTagName||"h2",m=t.options.footnoteLabelProperties||{className:["sr-only"]},f=[];let x=-1;for(;++x<t.footnoteOrder.length;){const h=t.footnoteById.get(t.footnoteOrder[x]);if(!h)continue;const E=t.all(h),v=String(h.identifier).toUpperCase(),R=normalizeUri(v.toLowerCase());let w=0;const B=[],U=t.footnoteCounts.get(v);for(;U!==void 0&&++w<=U;){B.length>0&&B.push({type:"text",value:" "});let Z=typeof l=="string"?l:l(x,w);typeof Z=="string"&&(Z={type:"text",value:Z}),B.push({type:"element",tagName:"a",properties:{href:"#"+a+"fnref-"+R+(w>1?"-"+w:""),dataFootnoteBackref:"",ariaLabel:typeof c=="string"?c:c(x,w),className:["data-footnote-backref"]},children:Array.isArray(Z)?Z:[Z]})}const $=E[E.length-1];if($&&$.type==="element"&&$.tagName==="p"){const Z=$.children[$.children.length-1];Z&&Z.type==="text"?Z.value+=" ":$.children.push({type:"text",value:" "}),$.children.push(...B)}else E.push(...B);const z={type:"element",tagName:"li",properties:{id:a+"fn-"+R},children:t.wrap(E,!0)};t.patch(h,z),f.push(z)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:d,properties:{...structuredClone$1(m),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(f,!0)},{type:"text",value:`
`}]}}const convert=(function(t){if(t==null)return ok;if(typeof t=="function")return castFactory(t);if(typeof t=="object")return Array.isArray(t)?anyFactory(t):propertiesFactory(t);if(typeof t=="string")return typeFactory(t);throw new Error("Expected function, string, or object as test")});function anyFactory(t){const a=[];let l=-1;for(;++l<t.length;)a[l]=convert(t[l]);return castFactory(c);function c(...s){let d=-1;for(;++d<a.length;)if(a[d].apply(this,s))return!0;return!1}}function propertiesFactory(t){const a=t;return castFactory(l);function l(c){const s=c;let d;for(d in t)if(s[d]!==a[d])return!1;return!0}}function typeFactory(t){return castFactory(a);function a(l){return l&&l.type===t}}function castFactory(t){return a;function a(l,c,s){return!!(looksLikeANode(l)&&t.call(this,l,typeof c=="number"?c:void 0,s||void 0))}}function ok(){return!0}function looksLikeANode(t){return t!==null&&typeof t=="object"&&"type"in t}function color(t){return t}const empty=[],CONTINUE=!0,EXIT=!1,SKIP="skip";function visitParents(t,a,l,c){let s;typeof a=="function"&&typeof l!="function"?(c=l,l=a):s=a;const d=convert(s),m=c?-1:1;f(t,void 0,[])();function f(x,h,E){const v=x&&typeof x=="object"?x:{};if(typeof v.type=="string"){const w=typeof v.tagName=="string"?v.tagName:typeof v.name=="string"?v.name:void 0;Object.defineProperty(R,"name",{value:"node ("+(x.type+(w?"<"+w+">":""))+")"})}return R;function R(){let w=empty,B,U,$;if((!a||d(x,h,E[E.length-1]||void 0))&&(w=toResult(l(x,E)),w[0]===EXIT))return w;if("children"in x&&x.children){const z=x;if(z.children&&w[0]!==SKIP)for(U=(c?z.children.length:-1)+m,$=E.concat(z);U>-1&&U<z.children.length;){const Z=z.children[U];if(B=f(Z,U,$)(),B[0]===EXIT)return B;U=typeof B[1]=="number"?B[1]:U+m}}return w}}}function toResult(t){return Array.isArray(t)?t:typeof t=="number"?[CONTINUE,t]:t==null?empty:[t]}function visit(t,a,l,c){let s,d,m;typeof a=="function"&&typeof l!="function"?(d=void 0,m=a,s=l):(d=a,m=l,s=c),visitParents(t,d,f,s);function f(x,h){const E=h[h.length-1],v=E?E.children.indexOf(x):void 0;return m(x,v,E)}}const own$1={}.hasOwnProperty,emptyOptions={};function createState(t,a){const l=a||emptyOptions,c=new Map,s=new Map,d=new Map,m={...handlers,...l.handlers},f={all:h,applyData,definitionById:c,footnoteById:s,footnoteCounts:d,footnoteOrder:[],handlers:m,one:x,options:l,patch,wrap:wrap$1};return visit(t,function(E){if(E.type==="definition"||E.type==="footnoteDefinition"){const v=E.type==="definition"?c:s,R=String(E.identifier).toUpperCase();v.has(R)||v.set(R,E)}}),f;function x(E,v){const R=E.type,w=f.handlers[R];if(own$1.call(f.handlers,R)&&w)return w(f,E,v);if(f.options.passThrough&&f.options.passThrough.includes(R)){if("children"in E){const{children:U,...$}=E,z=structuredClone$1($);return z.children=f.all(E),z}return structuredClone$1(E)}return(f.options.unknownHandler||defaultUnknownHandler)(f,E,v)}function h(E){const v=[];if("children"in E){const R=E.children;let w=-1;for(;++w<R.length;){const B=f.one(R[w],E);if(B){if(w&&R[w-1].type==="break"&&(!Array.isArray(B)&&B.type==="text"&&(B.value=trimMarkdownSpaceStart(B.value)),!Array.isArray(B)&&B.type==="element")){const U=B.children[0];U&&U.type==="text"&&(U.value=trimMarkdownSpaceStart(U.value))}Array.isArray(B)?v.push(...B):v.push(B)}}}return v}}function patch(t,a){t.position&&(a.position=position$1(t))}function applyData(t,a){let l=a;if(t&&t.data){const c=t.data.hName,s=t.data.hChildren,d=t.data.hProperties;if(typeof c=="string")if(l.type==="element")l.tagName=c;else{const m="children"in l?l.children:[l];l={type:"element",tagName:c,properties:{},children:m}}l.type==="element"&&d&&Object.assign(l.properties,structuredClone$1(d)),"children"in l&&l.children&&s!==null&&s!==void 0&&(l.children=s)}return l}function defaultUnknownHandler(t,a){const l=a.data||{},c="value"in a&&!(own$1.call(l,"hProperties")||own$1.call(l,"hChildren"))?{type:"text",value:a.value}:{type:"element",tagName:"div",properties:{},children:t.all(a)};return t.patch(a,c),t.applyData(a,c)}function wrap$1(t,a){const l=[];let c=-1;for(a&&l.push({type:"text",value:`
`});++c<t.length;)c&&l.push({type:"text",value:`
`}),l.push(t[c]);return a&&t.length>0&&l.push({type:"text",value:`
`}),l}function trimMarkdownSpaceStart(t){let a=0,l=t.charCodeAt(a);for(;l===9||l===32;)a++,l=t.charCodeAt(a);return t.slice(a)}function toHast(t,a){const l=createState(t,a),c=l.one(t,void 0),s=footer(l),d=Array.isArray(c)?{type:"root",children:c}:c||{type:"root",children:[]};return s&&d.children.push({type:"text",value:`
`},s),d}function remarkRehype(t,a){return t&&"run"in t?async function(l,c){const s=toHast(l,{file:c,...a});await t.run(s,c)}:function(l,c){return toHast(l,{file:c,...t||a})}}function bail(t){if(t)throw t}var extend$1,hasRequiredExtend;function requireExtend(){if(hasRequiredExtend)return extend$1;hasRequiredExtend=1;var t=Object.prototype.hasOwnProperty,a=Object.prototype.toString,l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,s=function(h){return typeof Array.isArray=="function"?Array.isArray(h):a.call(h)==="[object Array]"},d=function(h){if(!h||a.call(h)!=="[object Object]")return!1;var E=t.call(h,"constructor"),v=h.constructor&&h.constructor.prototype&&t.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!E&&!v)return!1;var R;for(R in h);return typeof R>"u"||t.call(h,R)},m=function(h,E){l&&E.name==="__proto__"?l(h,E.name,{enumerable:!0,configurable:!0,value:E.newValue,writable:!0}):h[E.name]=E.newValue},f=function(h,E){if(E==="__proto__")if(t.call(h,E)){if(c)return c(h,E).value}else return;return h[E]};return extend$1=function x(){var h,E,v,R,w,B,U=arguments[0],$=1,z=arguments.length,Z=!1;for(typeof U=="boolean"&&(Z=U,U=arguments[1]||{},$=2),(U==null||typeof U!="object"&&typeof U!="function")&&(U={});$<z;++$)if(h=arguments[$],h!=null)for(E in h)v=f(U,E),R=f(h,E),U!==R&&(Z&&R&&(d(R)||(w=s(R)))?(w?(w=!1,B=v&&s(v)?v:[]):B=v&&d(v)?v:{},m(U,{name:E,newValue:x(Z,B,R)})):typeof R<"u"&&m(U,{name:E,newValue:R}));return U},extend$1}var extendExports=requireExtend();const extend=getDefaultExportFromCjs(extendExports);function isPlainObject(t){if(typeof t!="object"||t===null)return!1;const a=Object.getPrototypeOf(t);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function trough(){const t=[],a={run:l,use:c};return a;function l(...s){let d=-1;const m=s.pop();if(typeof m!="function")throw new TypeError("Expected function as last argument, not "+m);f(null,...s);function f(x,...h){const E=t[++d];let v=-1;if(x){m(x);return}for(;++v<s.length;)(h[v]===null||h[v]===void 0)&&(h[v]=s[v]);s=h,E?wrap(E,f)(...h):m(null,...h)}}function c(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return t.push(s),a}}function wrap(t,a){let l;return c;function c(...m){const f=t.length>m.length;let x;f&&m.push(s);try{x=t.apply(this,m)}catch(h){const E=h;if(f&&l)throw E;return s(E)}f||(x&&x.then&&typeof x.then=="function"?x.then(d,s):x instanceof Error?s(x):d(x))}function s(m,...f){l||(l=!0,a(m,...f))}function d(m){s(null,m)}}const minpath={basename,dirname,extname,join,sep:"/"};function basename(t,a){if(a!==void 0&&typeof a!="string")throw new TypeError('"ext" argument must be a string');assertPath$1(t);let l=0,c=-1,s=t.length,d;if(a===void 0||a.length===0||a.length>t.length){for(;s--;)if(t.codePointAt(s)===47){if(d){l=s+1;break}}else c<0&&(d=!0,c=s+1);return c<0?"":t.slice(l,c)}if(a===t)return"";let m=-1,f=a.length-1;for(;s--;)if(t.codePointAt(s)===47){if(d){l=s+1;break}}else m<0&&(d=!0,m=s+1),f>-1&&(t.codePointAt(s)===a.codePointAt(f--)?f<0&&(c=s):(f=-1,c=m));return l===c?c=m:c<0&&(c=t.length),t.slice(l,c)}function dirname(t){if(assertPath$1(t),t.length===0)return".";let a=-1,l=t.length,c;for(;--l;)if(t.codePointAt(l)===47){if(c){a=l;break}}else c||(c=!0);return a<0?t.codePointAt(0)===47?"/":".":a===1&&t.codePointAt(0)===47?"//":t.slice(0,a)}function extname(t){assertPath$1(t);let a=t.length,l=-1,c=0,s=-1,d=0,m;for(;a--;){const f=t.codePointAt(a);if(f===47){if(m){c=a+1;break}continue}l<0&&(m=!0,l=a+1),f===46?s<0?s=a:d!==1&&(d=1):s>-1&&(d=-1)}return s<0||l<0||d===0||d===1&&s===l-1&&s===c+1?"":t.slice(s,l)}function join(...t){let a=-1,l;for(;++a<t.length;)assertPath$1(t[a]),t[a]&&(l=l===void 0?t[a]:l+"/"+t[a]);return l===void 0?".":normalize(l)}function normalize(t){assertPath$1(t);const a=t.codePointAt(0)===47;let l=normalizeString(t,!a);return l.length===0&&!a&&(l="."),l.length>0&&t.codePointAt(t.length-1)===47&&(l+="/"),a?"/"+l:l}function normalizeString(t,a){let l="",c=0,s=-1,d=0,m=-1,f,x;for(;++m<=t.length;){if(m<t.length)f=t.codePointAt(m);else{if(f===47)break;f=47}if(f===47){if(!(s===m-1||d===1))if(s!==m-1&&d===2){if(l.length<2||c!==2||l.codePointAt(l.length-1)!==46||l.codePointAt(l.length-2)!==46){if(l.length>2){if(x=l.lastIndexOf("/"),x!==l.length-1){x<0?(l="",c=0):(l=l.slice(0,x),c=l.length-1-l.lastIndexOf("/")),s=m,d=0;continue}}else if(l.length>0){l="",c=0,s=m,d=0;continue}}a&&(l=l.length>0?l+"/..":"..",c=2)}else l.length>0?l+="/"+t.slice(s+1,m):l=t.slice(s+1,m),c=m-s-1;s=m,d=0}else f===46&&d>-1?d++:d=-1}return l}function assertPath$1(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const minproc={cwd};function cwd(){return"/"}function isUrl(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function urlToPath(t){if(typeof t=="string")t=new URL(t);else if(!isUrl(t)){const a=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw a.code="ERR_INVALID_ARG_TYPE",a}if(t.protocol!=="file:"){const a=new TypeError("The URL must be of scheme file");throw a.code="ERR_INVALID_URL_SCHEME",a}return getPathFromURLPosix(t)}function getPathFromURLPosix(t){if(t.hostname!==""){const c=new TypeError('File URL host must be "localhost" or empty on darwin');throw c.code="ERR_INVALID_FILE_URL_HOST",c}const a=t.pathname;let l=-1;for(;++l<a.length;)if(a.codePointAt(l)===37&&a.codePointAt(l+1)===50){const c=a.codePointAt(l+2);if(c===70||c===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(a)}const order=["history","path","basename","stem","extname","dirname"];class VFile{constructor(a){let l;a?isUrl(a)?l={path:a}:typeof a=="string"||isUint8Array$1(a)?l={value:a}:l=a:l={},this.cwd="cwd"in l?"":minproc.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let c=-1;for(;++c<order.length;){const d=order[c];d in l&&l[d]!==void 0&&l[d]!==null&&(this[d]=d==="history"?[...l[d]]:l[d])}let s;for(s in l)order.includes(s)||(this[s]=l[s])}get basename(){return typeof this.path=="string"?minpath.basename(this.path):void 0}set basename(a){assertNonEmpty(a,"basename"),assertPart(a,"basename"),this.path=minpath.join(this.dirname||"",a)}get dirname(){return typeof this.path=="string"?minpath.dirname(this.path):void 0}set dirname(a){assertPath(this.basename,"dirname"),this.path=minpath.join(a||"",this.basename)}get extname(){return typeof this.path=="string"?minpath.extname(this.path):void 0}set extname(a){if(assertPart(a,"extname"),assertPath(this.dirname,"extname"),a){if(a.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(a.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=minpath.join(this.dirname,this.stem+(a||""))}get path(){return this.history[this.history.length-1]}set path(a){isUrl(a)&&(a=urlToPath(a)),assertNonEmpty(a,"path"),this.path!==a&&this.history.push(a)}get stem(){return typeof this.path=="string"?minpath.basename(this.path,this.extname):void 0}set stem(a){assertNonEmpty(a,"stem"),assertPart(a,"stem"),this.path=minpath.join(this.dirname||"",a+(this.extname||""))}fail(a,l,c){const s=this.message(a,l,c);throw s.fatal=!0,s}info(a,l,c){const s=this.message(a,l,c);return s.fatal=void 0,s}message(a,l,c){const s=new VFileMessage(a,l,c);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(a){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(a||void 0).decode(this.value)}}function assertPart(t,a){if(t&&t.includes(minpath.sep))throw new Error("`"+a+"` cannot be a path: did not expect `"+minpath.sep+"`")}function assertNonEmpty(t,a){if(!t)throw new Error("`"+a+"` cannot be empty")}function assertPath(t,a){if(!t)throw new Error("Setting `"+a+"` requires `path` to be set too")}function isUint8Array$1(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const CallableInstance=(function(t){const c=this.constructor.prototype,s=c[t],d=function(){return s.apply(d,arguments)};return Object.setPrototypeOf(d,c),d}),own={}.hasOwnProperty;class Processor extends CallableInstance{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=trough()}copy(){const a=new Processor;let l=-1;for(;++l<this.attachers.length;){const c=this.attachers[l];a.use(...c)}return a.data(extend(!0,{},this.namespace)),a}data(a,l){return typeof a=="string"?arguments.length===2?(assertUnfrozen("data",this.frozen),this.namespace[a]=l,this):own.call(this.namespace,a)&&this.namespace[a]||void 0:a?(assertUnfrozen("data",this.frozen),this.namespace=a,this):this.namespace}freeze(){if(this.frozen)return this;const a=this;for(;++this.freezeIndex<this.attachers.length;){const[l,...c]=this.attachers[this.freezeIndex];if(c[0]===!1)continue;c[0]===!0&&(c[0]=void 0);const s=l.call(a,...c);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(a){this.freeze();const l=vfile(a),c=this.parser||this.Parser;return assertParser("parse",c),c(String(l),l)}process(a,l){const c=this;return this.freeze(),assertParser("process",this.parser||this.Parser),assertCompiler("process",this.compiler||this.Compiler),l?s(void 0,l):new Promise(s);function s(d,m){const f=vfile(a),x=c.parse(f);c.run(x,f,function(E,v,R){if(E||!v||!R)return h(E);const w=v,B=c.stringify(w,R);looksLikeAValue(B)?R.value=B:R.result=B,h(E,R)});function h(E,v){E||!v?m(E):d?d(v):l(void 0,v)}}}processSync(a){let l=!1,c;return this.freeze(),assertParser("processSync",this.parser||this.Parser),assertCompiler("processSync",this.compiler||this.Compiler),this.process(a,s),assertDone("processSync","process",l),c;function s(d,m){l=!0,bail(d),c=m}}run(a,l,c){assertNode(a),this.freeze();const s=this.transformers;return!c&&typeof l=="function"&&(c=l,l=void 0),c?d(void 0,c):new Promise(d);function d(m,f){const x=vfile(l);s.run(a,x,h);function h(E,v,R){const w=v||a;E?f(E):m?m(w):c(void 0,w,R)}}}runSync(a,l){let c=!1,s;return this.run(a,l,d),assertDone("runSync","run",c),s;function d(m,f){bail(m),s=f,c=!0}}stringify(a,l){this.freeze();const c=vfile(l),s=this.compiler||this.Compiler;return assertCompiler("stringify",s),assertNode(a),s(a,c)}use(a,...l){const c=this.attachers,s=this.namespace;if(assertUnfrozen("use",this.frozen),a!=null)if(typeof a=="function")x(a,l);else if(typeof a=="object")Array.isArray(a)?f(a):m(a);else throw new TypeError("Expected usable value, not `"+a+"`");return this;function d(h){if(typeof h=="function")x(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[E,...v]=h;x(E,v)}else m(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function m(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(h.plugins),h.settings&&(s.settings=extend(!0,s.settings,h.settings))}function f(h){let E=-1;if(h!=null)if(Array.isArray(h))for(;++E<h.length;){const v=h[E];d(v)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function x(h,E){let v=-1,R=-1;for(;++v<c.length;)if(c[v][0]===h){R=v;break}if(R===-1)c.push([h,...E]);else if(E.length>0){let[w,...B]=E;const U=c[R][1];isPlainObject(U)&&isPlainObject(w)&&(w=extend(!0,U,w)),c[R]=[h,w,...B]}}}}const unified=new Processor().freeze();function assertParser(t,a){if(typeof a!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function assertCompiler(t,a){if(typeof a!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function assertUnfrozen(t,a){if(a)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function assertNode(t){if(!isPlainObject(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function assertDone(t,a,l){if(!l)throw new Error("`"+t+"` finished async. Use `"+a+"` instead")}function vfile(t){return looksLikeAVFile(t)?t:new VFile(t)}function looksLikeAVFile(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function looksLikeAValue(t){return typeof t=="string"||isUint8Array(t)}function isUint8Array(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const changelog="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",emptyPlugins=[],emptyRemarkRehypeOptions={allowDangerousHtml:!0},safeProtocol=/^(https?|ircs?|mailto|xmpp)$/i,deprecations=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Markdown(t){const a=createProcessor(t),l=createFile(t);return post(a.runSync(a.parse(l),l),t)}function createProcessor(t){const a=t.rehypePlugins||emptyPlugins,l=t.remarkPlugins||emptyPlugins,c=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...emptyRemarkRehypeOptions}:emptyRemarkRehypeOptions;return unified().use(remarkParse).use(l).use(remarkRehype,c).use(a)}function createFile(t){const a=t.children||"",l=new VFile;return typeof a=="string"&&(l.value=a),l}function post(t,a){const l=a.allowedElements,c=a.allowElement,s=a.components,d=a.disallowedElements,m=a.skipHtml,f=a.unwrapDisallowed,x=a.urlTransform||defaultUrlTransform;for(const E of deprecations)Object.hasOwn(a,E.from)&&(""+E.from+(E.to?"use `"+E.to+"` instead":"remove it")+changelog+E.id,void 0);return visit(t,h),toJsxRuntime(t,{Fragment:jsxRuntimeExports.Fragment,components:s,ignoreInvalidStyle:!0,jsx:jsxRuntimeExports.jsx,jsxs:jsxRuntimeExports.jsxs,passKeys:!0,passNode:!0});function h(E,v,R){if(E.type==="raw"&&R&&typeof v=="number")return m?R.children.splice(v,1):R.children[v]={type:"text",value:E.value},v;if(E.type==="element"){let w;for(w in urlAttributes)if(Object.hasOwn(urlAttributes,w)&&Object.hasOwn(E.properties,w)){const B=E.properties[w],U=urlAttributes[w];(U===null||U.includes(E.tagName))&&(E.properties[w]=x(String(B||""),w,E))}}if(E.type==="element"){let w=l?!l.includes(E.tagName):d?d.includes(E.tagName):!1;if(!w&&c&&typeof v=="number"&&(w=!c(E,v,R)),w&&R&&typeof v=="number")return f&&E.children?R.children.splice(v,1,...E.children):R.children.splice(v,1),v}}}function defaultUrlTransform(t){const a=t.indexOf(":"),l=t.indexOf("?"),c=t.indexOf("#"),s=t.indexOf("/");return a===-1||s!==-1&&a>s||l!==-1&&a>l||c!==-1&&a>c||safeProtocol.test(t.slice(0,a))?t:""}const navigation$1=[{title:"Getting Started",href:"/docs/getting-started",children:[{title:"Installation",href:"/docs/getting-started/installation"},{title:"Quick Start",href:"/docs/getting-started/quick-start"},{title:"Core Concepts",href:"/docs/getting-started/concepts"}]},{title:"UCM Core",href:"/docs/ucm-core",children:[{title:"Blocks",href:"/docs/ucm-core/blocks"},{title:"Content Types",href:"/docs/ucm-core/content-types"},{title:"Documents",href:"/docs/ucm-core/documents"},{title:"Edges",href:"/docs/ucm-core/edges"},{title:"Metadata",href:"/docs/ucm-core/metadata"},{title:"ID Generation",href:"/docs/ucm-core/id-generation"}]},{title:"UCM Engine",href:"/docs/ucm-engine",children:[{title:"Operations",href:"/docs/ucm-engine/operations"},{title:"Transactions",href:"/docs/ucm-engine/transactions"},{title:"Snapshots",href:"/docs/ucm-engine/snapshots"},{title:"Validation",href:"/docs/ucm-engine/validation"}]},{title:"UCL Parser",href:"/docs/ucl-parser",children:[{title:"Syntax",href:"/docs/ucl-parser/syntax"},{title:"Commands",href:"/docs/ucl-parser/commands"},{title:"Expressions",href:"/docs/ucl-parser/expressions"}]},{title:"Translators",href:"/docs/translators",children:[{title:"Markdown",href:"/docs/translators/markdown"},{title:"HTML",href:"/docs/translators/html"}]},{title:"API & Tools",href:"/docs/ucp-api",children:[{title:"UCP API",href:"/docs/ucp-api"},{title:"LLM Utilities",href:"/docs/ucp-llm"},{title:"Observability",href:"/docs/ucp-observe"}]},{title:"Examples",href:"/docs/examples"},{title:"Conformance",href:"/docs/conformance"}],docModules=Object.assign({"/docs/README.md":__vite_glob_0_0,"/docs/conformance/README.md":__vite_glob_0_1,"/docs/examples/advanced.md":__vite_glob_0_2,"/docs/examples/basic.md":__vite_glob_0_3,"/docs/examples/intermediate.md":__vite_glob_0_4,"/docs/getting-started/concepts.md":__vite_glob_0_5,"/docs/getting-started/installation.md":__vite_glob_0_6,"/docs/getting-started/quick-start.md":__vite_glob_0_7,"/docs/index.md":__vite_glob_0_8,"/docs/translators/html/README.md":__vite_glob_0_9,"/docs/translators/markdown/README.md":__vite_glob_0_10,"/docs/ucl-parser/README.md":__vite_glob_0_11,"/docs/ucl-parser/commands.md":__vite_glob_0_12,"/docs/ucl-parser/expressions.md":__vite_glob_0_13,"/docs/ucl-parser/syntax.md":__vite_glob_0_14,"/docs/ucm-core/README.md":__vite_glob_0_15,"/docs/ucm-core/blocks.md":__vite_glob_0_16,"/docs/ucm-core/content-types.md":__vite_glob_0_17,"/docs/ucm-core/documents.md":__vite_glob_0_18,"/docs/ucm-core/edges.md":__vite_glob_0_19,"/docs/ucm-core/id-generation.md":__vite_glob_0_20,"/docs/ucm-core/metadata.md":__vite_glob_0_21,"/docs/ucm-core/semantic-roles.md":__vite_glob_0_22,"/docs/ucm-engine/README.md":__vite_glob_0_23,"/docs/ucm-engine/operations.md":__vite_glob_0_24,"/docs/ucm-engine/snapshots.md":__vite_glob_0_25,"/docs/ucm-engine/transactions.md":__vite_glob_0_26,"/docs/ucm-engine/validation.md":__vite_glob_0_27,"/docs/ucp-api/README.md":__vite_glob_0_28,"/docs/ucp-llm/README.md":__vite_glob_0_29,"/docs/ucp-observe/README.md":__vite_glob_0_30});function loadDocContent(t){let a=t.replace("/docs","/docs").replace(/\/$/,"");a==="/docs"&&(a="/docs/getting-started");for(const[l,c]of Object.entries(docModules)){const s=l.replace("/docs/","").replace(".md","").replace(/^\//,""),d=a.replace("/docs/","").replace(/^\//,"");if(s===d||`/${s}`===a)return{title:extractTitle(c),content:c}}return{title:"Getting Started",content:`# Getting Started

Welcome to UCP documentation.`}}function extractTitle(t){const a=t.match(/^#\s+(.+)$/m);return a?a[1]:"Documentation"}function NavItem({item:t,depth:a=0,isActive:l}){const[c,s]=reactExports$1.useState(l);return jsxRuntimeExports$2.jsxs("div",{children:[jsxRuntimeExports$2.jsxs("a",{href:t.href,className:`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${l?"bg-violet-500/10 text-violet-600 font-medium":"text-muted-foreground hover:text-foreground hover:bg-muted/50"} ${a>0?"ml-4":""}`,children:[jsxRuntimeExports$2.jsx("span",{children:t.title}),t.children&&jsxRuntimeExports$2.jsx(ChevronRight$1,{className:`w-4 h-4 ml-auto transition-transform ${c?"rotate-90":""}`,onClick:d=>{d.preventDefault(),s(!c)}})]}),t.children&&c&&jsxRuntimeExports$2.jsx("div",{className:"mt-1",children:t.children.map(d=>jsxRuntimeExports$2.jsx(NavItem,{item:d,depth:a+1,isActive:d.href===window.location.pathname},d.href))})]})}function DocsPage(){const t=useLocation(),[a,l]=reactExports$1.useState(!1),c=reactExports$1.useMemo(()=>loadDocContent(t.pathname),[t.pathname]);return jsxRuntimeExports$2.jsxs("div",{className:"min-h-screen bg-background",children:[jsxRuntimeExports$2.jsx("header",{className:"sticky top-0 z-40 border-b bg-background/95 backdrop-blur",children:jsxRuntimeExports$2.jsxs("div",{className:"flex items-center justify-between px-4 h-14",children:[jsxRuntimeExports$2.jsx("a",{href:"/",className:"flex items-center gap-2 font-bold text-lg",children:jsxRuntimeExports$2.jsx("span",{className:"text-violet-600",children:"UCP"})}),jsxRuntimeExports$2.jsx("a",{href:"/",className:"text-sm text-muted-foreground hover:text-foreground",children:"← Back to home"}),jsxRuntimeExports$2.jsx("button",{onClick:()=>l(!a),className:"lg:hidden p-2 rounded-md hover:bg-muted",children:a?jsxRuntimeExports$2.jsx(X$1,{className:"w-5 h-5"}):jsxRuntimeExports$2.jsx(Menu$1,{className:"w-5 h-5"})})]})}),jsxRuntimeExports$2.jsxs("div",{className:"flex",children:[jsxRuntimeExports$2.jsx("aside",{className:`fixed lg:sticky top-14 left-0 w-64 h-[calc(100vh-3.5rem)] bg-background border-r overflow-y-auto transition-transform lg:translate-x-0 z-30 ${a?"translate-x-0":"-translate-x-full"}`,children:jsxRuntimeExports$2.jsx("nav",{className:"p-4 space-y-4",children:navigation$1.map(s=>jsxRuntimeExports$2.jsxs("div",{children:[jsxRuntimeExports$2.jsx("h4",{className:"text-xs font-semibold uppercase tracking-widest text-muted-foreground px-3 py-2",children:s.title}),s.children&&jsxRuntimeExports$2.jsx("div",{className:"space-y-1",children:s.children.map(d=>jsxRuntimeExports$2.jsx(NavItem,{item:d,isActive:d.href===t.pathname},d.href))})]},s.href))})}),jsxRuntimeExports$2.jsx("main",{className:"flex-1 min-w-0",children:jsxRuntimeExports$2.jsx(Container,{className:"max-w-4xl py-12",children:jsxRuntimeExports$2.jsx("article",{className:"prose prose-sm dark:prose-invert max-w-none",children:jsxRuntimeExports$2.jsx(Markdown,{components:{h1:({children:s})=>jsxRuntimeExports$2.jsx("h1",{className:"text-4xl font-bold mb-6",children:s}),h2:({children:s})=>jsxRuntimeExports$2.jsx("h2",{className:"text-2xl font-bold mt-8 mb-4",children:s}),h3:({children:s})=>jsxRuntimeExports$2.jsx("h3",{className:"text-xl font-bold mt-6 mb-3",children:s}),p:({children:s})=>jsxRuntimeExports$2.jsx("p",{className:"text-base leading-7 mb-4",children:s}),a:({href:s,children:d})=>jsxRuntimeExports$2.jsx("a",{href:s,className:"text-violet-600 hover:text-violet-700 dark:text-violet-400",children:d}),code:({children:s})=>jsxRuntimeExports$2.jsx("code",{className:"px-1.5 py-0.5 bg-muted rounded text-sm font-mono",children:s}),pre:({children:s})=>jsxRuntimeExports$2.jsx("pre",{className:"mb-4",children:s}),ul:({children:s})=>jsxRuntimeExports$2.jsx("ul",{className:"list-disc list-inside mb-4 space-y-2",children:s}),ol:({children:s})=>jsxRuntimeExports$2.jsx("ol",{className:"list-decimal list-inside mb-4 space-y-2",children:s}),li:({children:s})=>jsxRuntimeExports$2.jsx("li",{className:"text-base",children:s}),blockquote:({children:s})=>jsxRuntimeExports$2.jsx("blockquote",{className:"border-l-4 border-violet-500 pl-4 italic text-muted-foreground my-4",children:s}),table:({children:s})=>jsxRuntimeExports$2.jsx("div",{className:"overflow-x-auto mb-4",children:jsxRuntimeExports$2.jsx("table",{className:"w-full border-collapse border border-border",children:s})}),th:({children:s})=>jsxRuntimeExports$2.jsx("th",{className:"border border-border bg-muted p-2",children:s}),td:({children:s})=>jsxRuntimeExports$2.jsx("td",{className:"border border-border p-2",children:s})},children:(c==null?void 0:c.content)||`# Not Found

This documentation page does not exist.`})})})})]}),a&&jsxRuntimeExports$2.jsx("div",{className:"fixed inset-0 bg-black/20 lg:hidden z-20",onClick:()=>l(!1)})]})}clientExports.createRoot(document.getElementById("root")).render(jsxRuntimeExports$2.jsx(reactExports$1.StrictMode,{children:jsxRuntimeExports$2.jsx(BrowserRouter,{children:jsxRuntimeExports$2.jsxs(Routes,{children:[jsxRuntimeExports$2.jsx(Route,{path:"/",element:jsxRuntimeExports$2.jsx(LandingPage,{})}),jsxRuntimeExports$2.jsx(Route,{path:"/docs/*",element:jsxRuntimeExports$2.jsx(DocsPage,{})})]})})}));
