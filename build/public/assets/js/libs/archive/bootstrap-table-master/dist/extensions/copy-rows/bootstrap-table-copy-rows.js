!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(t,e){return t(e={exports:{}},e.exports),e.exports}var p=function(t){return t&&t.Math==Math&&t},y=p("object"==typeof globalThis&&globalThis)||p("object"==typeof window&&window)||p("object"==typeof self&&self)||p("object"==typeof l&&l)||function(){return this}()||Function("return this")(),d=function(t){try{return!!t()}catch(t){return!0}},h=!d((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),b={}.propertyIsEnumerable,v=Object.getOwnPropertyDescriptor,g={f:v&&!b.call({1:2},1)?function(t){var e=v(this,t);return!!e&&e.enumerable}:b},m=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},w={}.toString,O=function(t){return w.call(t).slice(8,-1)},j="".split,S=d((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==O(t)?j.call(t,""):Object(t)}:Object,T=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},C=function(t){return S(T(t))},P=function(t){return"object"==typeof t?null!==t:"function"==typeof t},E=function(t,e){if(!P(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!P(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!P(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!P(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},x={}.hasOwnProperty,R=function(t,e){return x.call(t,e)},_=y.document,A=P(_)&&P(_.createElement),k=function(t){return A?_.createElement(t):{}},B=!h&&!d((function(){return 7!=Object.defineProperty(k("div"),"a",{get:function(){return 7}}).a})),F=Object.getOwnPropertyDescriptor,M={f:h?F:function(t,e){if(t=C(t),e=E(e,!0),B)try{return F(t,e)}catch(t){}if(R(t,e))return m(!g.f.call(t,e),t[e])}},I=function(t){if(!P(t))throw TypeError(String(t)+" is not an object");return t},N=Object.defineProperty,W={f:h?N:function(t,e,n){if(I(t),e=E(e,!0),I(n),B)try{return N(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},D=h?function(t,e,n){return W.f(t,e,m(1,n))}:function(t,e,n){return t[e]=n,t},q=function(t,e){try{D(y,t,e)}catch(n){y[t]=e}return e},L="__core-js_shared__",z=y[L]||q(L,{}),$=Function.toString;"function"!=typeof z.inspectSource&&(z.inspectSource=function(t){return $.call(t)});var H,G,V,K=z.inspectSource,Q=y.WeakMap,X="function"==typeof Q&&/native code/.test(K(Q)),Y=s((function(t){(t.exports=function(t,e){return z[t]||(z[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),J=0,U=Math.random(),Z=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++J+U).toString(36)},tt=Y("keys"),et=function(t){return tt[t]||(tt[t]=Z(t))},nt={},rt=y.WeakMap;if(X){var ot=z.state||(z.state=new rt),it=ot.get,ut=ot.has,ct=ot.set;H=function(t,e){return e.facade=t,ct.call(ot,t,e),e},G=function(t){return it.call(ot,t)||{}},V=function(t){return ut.call(ot,t)}}else{var at=et("state");nt[at]=!0,H=function(t,e){return e.facade=t,D(t,at,e),e},G=function(t){return R(t,at)?t[at]:{}},V=function(t){return R(t,at)}}var ft={set:H,get:G,has:V,enforce:function(t){return V(t)?G(t):H(t,{})},getterFor:function(t){return function(e){var n;if(!P(e)||(n=G(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},lt=s((function(t){var e=ft.get,n=ft.enforce,r=String(String).split("String");(t.exports=function(t,e,o,i){var u,c=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||R(o,"name")||D(o,"name",e),(u=n(o)).source||(u.source=r.join("string"==typeof e?e:""))),t!==y?(c?!f&&t[e]&&(a=!0):delete t[e],a?t[e]=o:D(t,e,o)):a?t[e]=o:q(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||K(this)}))})),st=y,pt=function(t){return"function"==typeof t?t:void 0},yt=function(t,e){return arguments.length<2?pt(st[t])||pt(y[t]):st[t]&&st[t][e]||y[t]&&y[t][e]},dt=Math.ceil,ht=Math.floor,bt=function(t){return isNaN(t=+t)?0:(t>0?ht:dt)(t)},vt=Math.min,gt=function(t){return t>0?vt(bt(t),9007199254740991):0},mt=Math.max,wt=Math.min,Ot=function(t){return function(e,n,r){var o,i=C(e),u=gt(i.length),c=function(t,e){var n=bt(t);return n<0?mt(n+e,0):wt(n,e)}(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},jt={includes:Ot(!0),indexOf:Ot(!1)}.indexOf,St=function(t,e){var n,r=C(t),o=0,i=[];for(n in r)!R(nt,n)&&R(r,n)&&i.push(n);for(;e.length>o;)R(r,n=e[o++])&&(~jt(i,n)||i.push(n));return i},Tt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ct=Tt.concat("length","prototype"),Pt={f:Object.getOwnPropertyNames||function(t){return St(t,Ct)}},Et={f:Object.getOwnPropertySymbols},xt=yt("Reflect","ownKeys")||function(t){var e=Pt.f(I(t)),n=Et.f;return n?e.concat(n(t)):e},Rt=function(t,e){for(var n=xt(e),r=W.f,o=M.f,i=0;i<n.length;i++){var u=n[i];R(t,u)||r(t,u,o(e,u))}},_t=/#|\.prototype\./,At=function(t,e){var n=Bt[kt(t)];return n==Mt||n!=Ft&&("function"==typeof e?d(e):!!e)},kt=At.normalize=function(t){return String(t).replace(_t,".").toLowerCase()},Bt=At.data={},Ft=At.NATIVE="N",Mt=At.POLYFILL="P",It=At,Nt=M.f,Wt=function(t,e){var n,r,o,i,u,c=t.target,a=t.global,f=t.stat;if(n=a?y:f?y[c]||q(c,{}):(y[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(u=Nt(n,r))&&u.value:n[r],!It(a?r:c+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Rt(i,o)}(t.sham||o&&o.sham)&&D(i,"sham",!0),lt(n,r,i,t)}},Dt=Object.keys||function(t){return St(t,Tt)},qt=function(t){return Object(T(t))},Lt=Object.assign,zt=Object.defineProperty,$t=!Lt||d((function(){if(h&&1!==Lt({b:1},Lt(zt({},"a",{enumerable:!0,get:function(){zt(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=Lt({},t)[n]||Dt(Lt({},e)).join("")!=r}))?function(t,e){for(var n=qt(t),r=arguments.length,o=1,i=Et.f,u=g.f;r>o;)for(var c,a=S(arguments[o++]),f=i?Dt(a).concat(i(a)):Dt(a),l=f.length,s=0;l>s;)c=f[s++],h&&!u.call(a,c)||(n[c]=a[c]);return n}:Lt;Wt({target:"Object",stat:!0,forced:Object.assign!==$t},{assign:$t});var Ht,Gt,Vt=Array.isArray||function(t){return"Array"==O(t)},Kt=function(t,e,n){var r=E(e);r in t?W.f(t,r,m(0,n)):t[r]=n},Qt="process"==O(y.process),Xt=yt("navigator","userAgent")||"",Yt=y.process,Jt=Yt&&Yt.versions,Ut=Jt&&Jt.v8;Ut?Gt=(Ht=Ut.split("."))[0]+Ht[1]:Xt&&(!(Ht=Xt.match(/Edge\/(\d+)/))||Ht[1]>=74)&&(Ht=Xt.match(/Chrome\/(\d+)/))&&(Gt=Ht[1]);var Zt,te=Gt&&+Gt,ee=!!Object.getOwnPropertySymbols&&!d((function(){return!Symbol.sham&&(Qt?38===te:te>37&&te<41)})),ne=ee&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,re=Y("wks"),oe=y.Symbol,ie=ne?oe:oe&&oe.withoutSetter||Z,ue=function(t){return R(re,t)&&(ee||"string"==typeof re[t])||(ee&&R(oe,t)?re[t]=oe[t]:re[t]=ie("Symbol."+t)),re[t]},ce=ue("species"),ae=function(t,e){var n;return Vt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Vt(n.prototype)?P(n)&&null===(n=n[ce])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},fe=ue("species"),le=ue("isConcatSpreadable"),se=9007199254740991,pe="Maximum allowed index exceeded",ye=te>=51||!d((function(){var t=[];return t[le]=!1,t.concat()[0]!==t})),de=(Zt="concat",te>=51||!d((function(){var t=[];return(t.constructor={})[fe]=function(){return{foo:1}},1!==t[Zt](Boolean).foo}))),he=function(t){if(!P(t))return!1;var e=t[le];return void 0!==e?!!e:Vt(t)};Wt({target:"Array",proto:!0,forced:!ye||!de},{concat:function(t){var e,n,r,o,i,u=qt(this),c=ae(u,0),a=0;for(e=-1,r=arguments.length;e<r;e++)if(he(i=-1===e?u:arguments[e])){if(a+(o=gt(i.length))>se)throw TypeError(pe);for(n=0;n<o;n++,a++)n in i&&Kt(c,a,i[n])}else{if(a>=se)throw TypeError(pe);Kt(c,a++,i)}return c.length=a,c}});var be,ve=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},ge=[].push,me=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,u=7==t,c=5==t||i;return function(a,f,l,s){for(var p,y,d=qt(a),h=S(d),b=ve(f,l,3),v=gt(h.length),g=0,m=s||ae,w=e?m(a,v):n||u?m(a,0):void 0;v>g;g++)if((c||g in h)&&(y=b(p=h[g],g,d),t))if(e)w[g]=y;else if(y)switch(t){case 3:return!0;case 5:return p;case 6:return g;case 2:ge.call(w,p)}else switch(t){case 4:return!1;case 7:ge.call(w,p)}return i?-1:r||o?o:w}},we={forEach:me(0),map:me(1),filter:me(2),some:me(3),every:me(4),find:me(5),findIndex:me(6),filterOut:me(7)},Oe=h?Object.defineProperties:function(t,e){I(t);for(var n,r=Dt(e),o=r.length,i=0;o>i;)W.f(t,n=r[i++],e[n]);return t},je=yt("document","documentElement"),Se=et("IE_PROTO"),Te=function(){},Ce=function(t){return"<script>"+t+"</"+"script>"},Pe=function(){try{be=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Pe=be?function(t){t.write(Ce("")),t.close();var e=t.parentWindow.Object;return t=null,e}(be):((e=k("iframe")).style.display="none",je.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Ce("document.F=Object")),t.close(),t.F);for(var n=Tt.length;n--;)delete Pe.prototype[Tt[n]];return Pe()};nt[Se]=!0;var Ee=Object.create||function(t,e){var n;return null!==t?(Te.prototype=I(t),n=new Te,Te.prototype=null,n[Se]=t):n=Pe(),void 0===e?n:Oe(n,e)},xe=ue("unscopables"),Re=Array.prototype;null==Re[xe]&&W.f(Re,xe,{configurable:!0,value:Ee(null)});var _e,Ae=we.find,ke="find",Be=!0;ke in[]&&Array(1).find((function(){Be=!1})),Wt({target:"Array",proto:!0,forced:Be},{find:function(t){return Ae(this,t,arguments.length>1?arguments[1]:void 0)}}),_e=ke,Re[xe][_e]=!0;var Fe=[].join,Me=S!=Object,Ie=function(t,e){var n=[][t];return!!n&&d((function(){n.call(null,e||function(){throw 1},1)}))}("join",",");Wt({target:"Array",proto:!0,forced:Me||!Ie},{join:function(t){return Fe.call(C(this),void 0===t?",":t)}});var Ne=n.default.fn.bootstrapTable.utils;n.default.extend(n.default.fn.bootstrapTable.locales,{formatCopyRows:function(){return"Copy Rows"}}),n.default.extend(n.default.fn.bootstrapTable.defaults,n.default.fn.bootstrapTable.locales),n.default.extend(n.default.fn.bootstrapTable.defaults.icons,{copy:{bootstrap3:"glyphicon-copy icon-pencil",materialize:"content_copy","bootstrap-table":"icon-copy"}[n.default.fn.bootstrapTable.theme]||"fa-copy"});n.default.extend(n.default.fn.bootstrapTable.defaults,{showCopyRows:!1,copyWithHidden:!1,copyDelimiter:", ",copyNewline:"\n"}),n.default.fn.bootstrapTable.methods.push("copyColumnsToClipboard"),n.default.BootstrapTable=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(p,t);var e,c,l,s=a(p);function p(){return r(this,p),s.apply(this,arguments)}return e=p,(c=[{key:"initToolbar",value:function(){var t;this.options.showCopyRows&&this.header.stateField&&(this.buttons=Object.assign(this.buttons,{copyRows:{text:this.options.formatCopyRows(),icon:this.options.icons.copy,event:this.copyColumnsToClipboard,attributes:{"aria-label":this.options.formatCopyRows(),title:this.options.formatCopyRows()}}}));for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];(t=f(i(p.prototype),"initToolbar",this)).call.apply(t,[this].concat(n)),this.$copyButton=this.$toolbar.find('>.columns [name="copyRows"]'),this.options.showCopyRows&&this.header.stateField&&this.updateCopyButton()}},{key:"copyColumnsToClipboard",value:function(){var t=this,e=[];n.default.each(this.getSelections(),(function(r,o){var i=[];n.default.each(t.options.columns[0],(function(e,n){n.field!==t.header.stateField&&(!t.options.copyWithHidden||t.options.copyWithHidden&&n.visible)&&null!==o[n.field]&&i.push(Ne.calculateObjectValue(n,t.header.formatters[e],[o[n.field],o,r],o[n.field]))})),e.push(i.join(t.options.copyDelimiter))})),function(t){var e=document.createElement("textarea");n.default(e).html(t),document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch(t){console.warn("Oops, unable to copy")}n.default(e).remove()}(e.join(this.options.copyNewline))}},{key:"updateSelected",value:function(){f(i(p.prototype),"updateSelected",this).call(this),this.updateCopyButton()}},{key:"updateCopyButton",value:function(){this.options.showCopyRows&&this.header.stateField&&this.$copyButton&&this.$copyButton.prop("disabled",!this.getSelections().length)}}])&&o(e.prototype,c),l&&o(e,l),p}(n.default.BootstrapTable)}));