!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,n){return t(n={exports:{}},n.exports),n.exports}var i=function(t){return t&&t.Math==Math&&t},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||function(){return this}()||Function("return this")(),f=function(t){try{return!!t()}catch(t){return!0}},c=!f((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!a.call({1:2},1)?function(t){var n=l(this,t);return!!n&&n.enumerable}:a},p=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},y={}.toString,g=function(t){return y.call(t).slice(8,-1)},d="".split,h=f((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==g(t)?d.call(t,""):Object(t)}:Object,m=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},b=function(t){return h(m(t))},v=function(t){return"object"==typeof t?null!==t:"function"==typeof t},w=function(t,n){if(!v(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!v(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!v(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!v(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,T=function(t,n){return S.call(t,n)},O=u.document,P=v(O)&&v(O.createElement),j=!c&&!f((function(){return 7!=Object.defineProperty((t="div",P?O.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),x=Object.getOwnPropertyDescriptor,E={f:c?x:function(t,n){if(t=b(t),n=w(n,!0),j)try{return x(t,n)}catch(t){}if(T(t,n))return p(!s.f.call(t,n),t[n])}},A=function(t){if(!v(t))throw TypeError(String(t)+" is not an object");return t},C=Object.defineProperty,M={f:c?C:function(t,n,r){if(A(t),n=w(n,!0),A(r),j)try{return C(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},R=c?function(t,n,r){return M.f(t,n,p(1,r))}:function(t,n,r){return t[n]=r,t},F=function(t,n){try{R(u,t,n)}catch(r){u[t]=n}return n},N="__core-js_shared__",k=u[N]||F(N,{}),I=Function.toString;"function"!=typeof k.inspectSource&&(k.inspectSource=function(t){return I.call(t)});var L,_,D,q,B=k.inspectSource,G=u.WeakMap,z="function"==typeof G&&/native code/.test(B(G)),H=o((function(t){(t.exports=function(t,n){return k[t]||(k[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),W=0,J=Math.random(),K=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++W+J).toString(36)},Q=H("keys"),U={},V=u.WeakMap;if(z){var Y=k.state||(k.state=new V),X=Y.get,Z=Y.has,$=Y.set;L=function(t,n){return n.facade=t,$.call(Y,t,n),n},_=function(t){return X.call(Y,t)||{}},D=function(t){return Z.call(Y,t)}}else{var tt=Q[q="state"]||(Q[q]=K(q));U[tt]=!0,L=function(t,n){return n.facade=t,R(t,tt,n),n},_=function(t){return T(t,tt)?t[tt]:{}},D=function(t){return T(t,tt)}}var nt,rt,et={set:L,get:_,has:D,enforce:function(t){return D(t)?_(t):L(t,{})},getterFor:function(t){return function(n){var r;if(!v(n)||(r=_(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},ot=o((function(t){var n=et.get,r=et.enforce,e=String(String).split("String");(t.exports=function(t,n,o,i){var f,c=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof n||T(o,"name")||R(o,"name",n),(f=r(o)).source||(f.source=e.join("string"==typeof n?n:""))),t!==u?(c?!l&&t[n]&&(a=!0):delete t[n],a?t[n]=o:R(t,n,o)):a?t[n]=o:F(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||B(this)}))})),it=u,ut=function(t){return"function"==typeof t?t:void 0},ft=function(t,n){return arguments.length<2?ut(it[t])||ut(u[t]):it[t]&&it[t][n]||u[t]&&u[t][n]},ct=Math.ceil,at=Math.floor,lt=function(t){return isNaN(t=+t)?0:(t>0?at:ct)(t)},st=Math.min,pt=function(t){return t>0?st(lt(t),9007199254740991):0},yt=Math.max,gt=Math.min,dt=function(t){return function(n,r,e){var o,i=b(n),u=pt(i.length),f=function(t,n){var r=lt(t);return r<0?yt(r+n,0):gt(r,n)}(e,u);if(t&&r!=r){for(;u>f;)if((o=i[f++])!=o)return!0}else for(;u>f;f++)if((t||f in i)&&i[f]===r)return t||f||0;return!t&&-1}},ht={includes:dt(!0),indexOf:dt(!1)}.indexOf,mt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),bt={f:Object.getOwnPropertyNames||function(t){return function(t,n){var r,e=b(t),o=0,i=[];for(r in e)!T(U,r)&&T(e,r)&&i.push(r);for(;n.length>o;)T(e,r=n[o++])&&(~ht(i,r)||i.push(r));return i}(t,mt)}},vt={f:Object.getOwnPropertySymbols},wt=ft("Reflect","ownKeys")||function(t){var n=bt.f(A(t)),r=vt.f;return r?n.concat(r(t)):n},St=function(t,n){for(var r=wt(n),e=M.f,o=E.f,i=0;i<r.length;i++){var u=r[i];T(t,u)||e(t,u,o(n,u))}},Tt=/#|\.prototype\./,Ot=function(t,n){var r=jt[Pt(t)];return r==Et||r!=xt&&("function"==typeof n?f(n):!!n)},Pt=Ot.normalize=function(t){return String(t).replace(Tt,".").toLowerCase()},jt=Ot.data={},xt=Ot.NATIVE="N",Et=Ot.POLYFILL="P",At=Ot,Ct=E.f,Mt=Array.isArray||function(t){return"Array"==g(t)},Rt=function(t){return Object(m(t))},Ft=function(t,n,r){var e=w(n);e in t?M.f(t,e,p(0,r)):t[e]=r},Nt="process"==g(u.process),kt=ft("navigator","userAgent")||"",It=u.process,Lt=It&&It.versions,_t=Lt&&Lt.v8;_t?rt=(nt=_t.split("."))[0]+nt[1]:kt&&(!(nt=kt.match(/Edge\/(\d+)/))||nt[1]>=74)&&(nt=kt.match(/Chrome\/(\d+)/))&&(rt=nt[1]);var Dt,qt=rt&&+rt,Bt=!!Object.getOwnPropertySymbols&&!f((function(){return!Symbol.sham&&(Nt?38===qt:qt>37&&qt<41)})),Gt=Bt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,zt=H("wks"),Ht=u.Symbol,Wt=Gt?Ht:Ht&&Ht.withoutSetter||K,Jt=function(t){return T(zt,t)&&(Bt||"string"==typeof zt[t])||(Bt&&T(Ht,t)?zt[t]=Ht[t]:zt[t]=Wt("Symbol."+t)),zt[t]},Kt=Jt("species"),Qt=function(t,n){var r;return Mt(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Mt(r.prototype)?v(r)&&null===(r=r[Kt])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)},Ut=Jt("species"),Vt=Jt("isConcatSpreadable"),Yt=9007199254740991,Xt="Maximum allowed index exceeded",Zt=qt>=51||!f((function(){var t=[];return t[Vt]=!1,t.concat()[0]!==t})),$t=(Dt="concat",qt>=51||!f((function(){var t=[];return(t.constructor={})[Ut]=function(){return{foo:1}},1!==t[Dt](Boolean).foo}))),tn=function(t){if(!v(t))return!1;var n=t[Vt];return void 0!==n?!!n:Mt(t)};!function(t,n){var r,e,o,i,f,c=t.target,a=t.global,l=t.stat;if(r=a?u:l?u[c]||F(c,{}):(u[c]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(f=Ct(r,e))&&f.value:r[e],!At(a?e:c+(l?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;St(i,o)}(t.sham||o&&o.sham)&&R(i,"sham",!0),ot(r,e,i,t)}}({target:"Array",proto:!0,forced:!Zt||!$t},{concat:function(t){var n,r,e,o,i,u=Rt(this),f=Qt(u,0),c=0;for(n=-1,e=arguments.length;n<e;n++)if(tn(i=-1===n?u:arguments[n])){if(c+(o=pt(i.length))>Yt)throw TypeError(Xt);for(r=0;r<o;r++,c++)r in i&&Ft(f,c,i[r])}else{if(c>=Yt)throw TypeError(Xt);Ft(f,c++,i)}return f.length=c,f}}),r.default.fn.bootstrapTable.locales["bg-BG"]=r.default.fn.bootstrapTable.locales.bg={formatCopyRows:function(){return"Copy Rows"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Зареждане, моля изчакайте"},formatRecordsPerPage:function(t){return"".concat(t," реда на страница")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"Показани редове от ".concat(t," до ").concat(n," от ").concat(r," реда (филтрирани от общо ").concat(e," реда)"):"Показани редове от ".concat(t," до ").concat(n," от общо ").concat(r," реда")},formatSRPaginationPreText:function(){return"предишна страница"},formatSRPaginationPageText:function(t){return"до страница ".concat(t)},formatSRPaginationNextText:function(){return"следваща страница"},formatDetailPagination:function(t){return"Показани ".concat(t," реда")},formatClearSearch:function(){return"Изчистване на търсенето"},formatSearch:function(){return"Търсене"},formatNoMatches:function(){return"Не са намерени съвпадащи записи"},formatPaginationSwitch:function(){return"Скриване/Показване на странициране"},formatPaginationSwitchDown:function(){return"Показване на странициране"},formatPaginationSwitchUp:function(){return"Скриване на странициране"},formatRefresh:function(){return"Обновяване"},formatToggle:function(){return"Превключване"},formatToggleOn:function(){return"Показване на изглед карта"},formatToggleOff:function(){return"Скриване на изглед карта"},formatColumns:function(){return"Колони"},formatColumnsToggleAll:function(){return"Превключване на всички"},formatFullscreen:function(){return"Цял екран"},formatAllRows:function(){return"Всички"},formatAutoRefresh:function(){return"Автоматично обновяване"},formatExport:function(){return"Експорт на данни"},formatJumpTo:function(){return"ОТИДИ"},formatAdvancedSearch:function(){return"Разширено търсене"},formatAdvancedCloseButton:function(){return"Затваряне"},formatFilterControlSwitch:function(){return"Hide/Show controls"},formatFilterControlSwitchHide:function(){return"Hide controls"},formatFilterControlSwitchShow:function(){return"Show controls"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["bg-BG"])}));