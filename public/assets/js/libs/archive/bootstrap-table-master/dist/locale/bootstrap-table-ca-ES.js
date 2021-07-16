!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,n){return t(n={exports:{}},n.exports),n.exports}var i=function(t){return t&&t.Math==Math&&t},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||function(){return this}()||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},f=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!c.call({1:2},1)?function(t){var n=l(this,t);return!!n&&n.enumerable}:c},p=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},g={}.toString,d=function(t){return g.call(t).slice(8,-1)},y="".split,h=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?y.call(t,""):Object(t)}:Object,m=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return h(m(t))},b=function(t){return"object"==typeof t?null!==t:"function"==typeof t},w=function(t,n){if(!b(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!b(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!b(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!b(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,T=function(t,n){return S.call(t,n)},O=u.document,P=b(O)&&b(O.createElement),j=!f&&!a((function(){return 7!=Object.defineProperty((t="div",P?O.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),x=Object.getOwnPropertyDescriptor,E={f:f?x:function(t,n){if(t=v(t),n=w(n,!0),j)try{return x(t,n)}catch(t){}if(T(t,n))return p(!s.f.call(t,n),t[n])}},A=function(t){if(!b(t))throw TypeError(String(t)+" is not an object");return t},C=Object.defineProperty,M={f:f?C:function(t,n,r){if(A(t),n=w(n,!0),A(r),j)try{return C(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},R=f?function(t,n,r){return M.f(t,n,p(1,r))}:function(t,n,r){return t[n]=r,t},F=function(t,n){try{R(u,t,n)}catch(r){u[t]=n}return n},N="__core-js_shared__",k=u[N]||F(N,{}),I=Function.toString;"function"!=typeof k.inspectSource&&(k.inspectSource=function(t){return I.call(t)});var L,_,D,H,q=k.inspectSource,z=u.WeakMap,G="function"==typeof z&&/native code/.test(q(z)),B=o((function(t){(t.exports=function(t,n){return k[t]||(k[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),W=0,J=Math.random(),K=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++W+J).toString(36)},Q=B("keys"),U={},V=u.WeakMap;if(G){var Y=k.state||(k.state=new V),X=Y.get,Z=Y.has,$=Y.set;L=function(t,n){return n.facade=t,$.call(Y,t,n),n},_=function(t){return X.call(Y,t)||{}},D=function(t){return Z.call(Y,t)}}else{var tt=Q[H="state"]||(Q[H]=K(H));U[tt]=!0,L=function(t,n){return n.facade=t,R(t,tt,n),n},_=function(t){return T(t,tt)?t[tt]:{}},D=function(t){return T(t,tt)}}var nt,rt,et={set:L,get:_,has:D,enforce:function(t){return D(t)?_(t):L(t,{})},getterFor:function(t){return function(n){var r;if(!b(n)||(r=_(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},ot=o((function(t){var n=et.get,r=et.enforce,e=String(String).split("String");(t.exports=function(t,n,o,i){var a,f=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof n||T(o,"name")||R(o,"name",n),(a=r(o)).source||(a.source=e.join("string"==typeof n?n:""))),t!==u?(f?!l&&t[n]&&(c=!0):delete t[n],c?t[n]=o:R(t,n,o)):c?t[n]=o:F(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||q(this)}))})),it=u,ut=function(t){return"function"==typeof t?t:void 0},at=function(t,n){return arguments.length<2?ut(it[t])||ut(u[t]):it[t]&&it[t][n]||u[t]&&u[t][n]},ft=Math.ceil,ct=Math.floor,lt=function(t){return isNaN(t=+t)?0:(t>0?ct:ft)(t)},st=Math.min,pt=function(t){return t>0?st(lt(t),9007199254740991):0},gt=Math.max,dt=Math.min,yt=function(t){return function(n,r,e){var o,i=v(n),u=pt(i.length),a=function(t,n){var r=lt(t);return r<0?gt(r+n,0):dt(r,n)}(e,u);if(t&&r!=r){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===r)return t||a||0;return!t&&-1}},ht={includes:yt(!0),indexOf:yt(!1)}.indexOf,mt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),vt={f:Object.getOwnPropertyNames||function(t){return function(t,n){var r,e=v(t),o=0,i=[];for(r in e)!T(U,r)&&T(e,r)&&i.push(r);for(;n.length>o;)T(e,r=n[o++])&&(~ht(i,r)||i.push(r));return i}(t,mt)}},bt={f:Object.getOwnPropertySymbols},wt=at("Reflect","ownKeys")||function(t){var n=vt.f(A(t)),r=bt.f;return r?n.concat(r(t)):n},St=function(t,n){for(var r=wt(n),e=M.f,o=E.f,i=0;i<r.length;i++){var u=r[i];T(t,u)||e(t,u,o(n,u))}},Tt=/#|\.prototype\./,Ot=function(t,n){var r=jt[Pt(t)];return r==Et||r!=xt&&("function"==typeof n?a(n):!!n)},Pt=Ot.normalize=function(t){return String(t).replace(Tt,".").toLowerCase()},jt=Ot.data={},xt=Ot.NATIVE="N",Et=Ot.POLYFILL="P",At=Ot,Ct=E.f,Mt=Array.isArray||function(t){return"Array"==d(t)},Rt=function(t){return Object(m(t))},Ft=function(t,n,r){var e=w(n);e in t?M.f(t,e,p(0,r)):t[e]=r},Nt="process"==d(u.process),kt=at("navigator","userAgent")||"",It=u.process,Lt=It&&It.versions,_t=Lt&&Lt.v8;_t?rt=(nt=_t.split("."))[0]+nt[1]:kt&&(!(nt=kt.match(/Edge\/(\d+)/))||nt[1]>=74)&&(nt=kt.match(/Chrome\/(\d+)/))&&(rt=nt[1]);var Dt,Ht=rt&&+rt,qt=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(Nt?38===Ht:Ht>37&&Ht<41)})),zt=qt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Gt=B("wks"),Bt=u.Symbol,Wt=zt?Bt:Bt&&Bt.withoutSetter||K,Jt=function(t){return T(Gt,t)&&(qt||"string"==typeof Gt[t])||(qt&&T(Bt,t)?Gt[t]=Bt[t]:Gt[t]=Wt("Symbol."+t)),Gt[t]},Kt=Jt("species"),Qt=function(t,n){var r;return Mt(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Mt(r.prototype)?b(r)&&null===(r=r[Kt])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)},Ut=Jt("species"),Vt=Jt("isConcatSpreadable"),Yt=9007199254740991,Xt="Maximum allowed index exceeded",Zt=Ht>=51||!a((function(){var t=[];return t[Vt]=!1,t.concat()[0]!==t})),$t=(Dt="concat",Ht>=51||!a((function(){var t=[];return(t.constructor={})[Ut]=function(){return{foo:1}},1!==t[Dt](Boolean).foo}))),tn=function(t){if(!b(t))return!1;var n=t[Vt];return void 0!==n?!!n:Mt(t)};!function(t,n){var r,e,o,i,a,f=t.target,c=t.global,l=t.stat;if(r=c?u:l?u[f]||F(f,{}):(u[f]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(a=Ct(r,e))&&a.value:r[e],!At(c?e:f+(l?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;St(i,o)}(t.sham||o&&o.sham)&&R(i,"sham",!0),ot(r,e,i,t)}}({target:"Array",proto:!0,forced:!Zt||!$t},{concat:function(t){var n,r,e,o,i,u=Rt(this),a=Qt(u,0),f=0;for(n=-1,e=arguments.length;n<e;n++)if(tn(i=-1===n?u:arguments[n])){if(f+(o=pt(i.length))>Yt)throw TypeError(Xt);for(r=0;r<o;r++,f++)r in i&&Ft(a,f,i[r])}else{if(f>=Yt)throw TypeError(Xt);Ft(a,f++,i)}return a.length=f,a}}),r.default.fn.bootstrapTable.locales["ca-ES"]=r.default.fn.bootstrapTable.locales.ca={formatCopyRows:function(){return"Copy Rows"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Espereu, si us plau"},formatRecordsPerPage:function(t){return"".concat(t," resultats per pàgina")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"Mostrant de ".concat(t," fins ").concat(n," - total ").concat(r," resultats (filtered from ").concat(e," total rows)"):"Mostrant de ".concat(t," fins ").concat(n," - total ").concat(r," resultats")},formatSRPaginationPreText:function(){return"previous page"},formatSRPaginationPageText:function(t){return"to page ".concat(t)},formatSRPaginationNextText:function(){return"next page"},formatDetailPagination:function(t){return"Showing ".concat(t," rows")},formatClearSearch:function(){return"Clear Search"},formatSearch:function(){return"Cerca"},formatNoMatches:function(){return"No s'han trobat resultats"},formatPaginationSwitch:function(){return"Amaga/Mostra paginació"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRefresh:function(){return"Refresca"},formatToggle:function(){return"Alterna formatació"},formatToggleOn:function(){return"Show card view"},formatToggleOff:function(){return"Hide card view"},formatColumns:function(){return"Columnes"},formatColumnsToggleAll:function(){return"Toggle all"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"Tots"},formatAutoRefresh:function(){return"Auto Refresh"},formatExport:function(){return"Export data"},formatJumpTo:function(){return"GO"},formatAdvancedSearch:function(){return"Advanced search"},formatAdvancedCloseButton:function(){return"Close"},formatFilterControlSwitch:function(){return"Hide/Show controls"},formatFilterControlSwitchHide:function(){return"Hide controls"},formatFilterControlSwitchShow:function(){return"Show controls"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["ca-ES"])}));