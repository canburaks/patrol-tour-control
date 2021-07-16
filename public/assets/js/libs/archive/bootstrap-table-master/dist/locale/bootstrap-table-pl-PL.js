!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,n){return t(n={exports:{}},n.exports),n.exports}var i=function(t){return t&&t.Math==Math&&t},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||function(){return this}()||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},f=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!c.call({1:2},1)?function(t){var n=l(this,t);return!!n&&n.enumerable}:c},p=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},y={}.toString,d=function(t){return y.call(t).slice(8,-1)},m="".split,g=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?m.call(t,""):Object(t)}:Object,h=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},w=function(t){return g(h(t))},b=function(t){return"object"==typeof t?null!==t:"function"==typeof t},v=function(t,n){if(!b(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!b(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!b(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!b(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,P=function(t,n){return S.call(t,n)},j=u.document,k=b(j)&&b(j.createElement),O=!f&&!a((function(){return 7!=Object.defineProperty((t="div",k?j.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),T=Object.getOwnPropertyDescriptor,z={f:f?T:function(t,n){if(t=w(t),n=v(n,!0),O)try{return T(t,n)}catch(t){}if(P(t,n))return p(!s.f.call(t,n),t[n])}},x=function(t){if(!b(t))throw TypeError(String(t)+" is not an object");return t},E=Object.defineProperty,A={f:f?E:function(t,n,r){if(x(t),n=v(n,!0),x(r),O)try{return E(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},C=f?function(t,n,r){return A.f(t,n,p(1,r))}:function(t,n,r){return t[n]=r,t},M=function(t,n){try{C(u,t,n)}catch(r){u[t]=n}return n},F="__core-js_shared__",R=u[F]||M(F,{}),L=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(t){return L.call(t)});var N,W,I,_,D=R.inspectSource,U=u.WeakMap,q="function"==typeof U&&/native code/.test(D(U)),K=o((function(t){(t.exports=function(t,n){return R[t]||(R[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),B=0,G=Math.random(),Z=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++B+G).toString(36)},H=K("keys"),J={},Q=u.WeakMap;if(q){var V=R.state||(R.state=new Q),Y=V.get,X=V.has,$=V.set;N=function(t,n){return n.facade=t,$.call(V,t,n),n},W=function(t){return Y.call(V,t)||{}},I=function(t){return X.call(V,t)}}else{var tt=H[_="state"]||(H[_]=Z(_));J[tt]=!0,N=function(t,n){return n.facade=t,C(t,tt,n),n},W=function(t){return P(t,tt)?t[tt]:{}},I=function(t){return P(t,tt)}}var nt,rt,et={set:N,get:W,has:I,enforce:function(t){return I(t)?W(t):N(t,{})},getterFor:function(t){return function(n){var r;if(!b(n)||(r=W(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},ot=o((function(t){var n=et.get,r=et.enforce,e=String(String).split("String");(t.exports=function(t,n,o,i){var a,f=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof n||P(o,"name")||C(o,"name",n),(a=r(o)).source||(a.source=e.join("string"==typeof n?n:""))),t!==u?(f?!l&&t[n]&&(c=!0):delete t[n],c?t[n]=o:C(t,n,o)):c?t[n]=o:M(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||D(this)}))})),it=u,ut=function(t){return"function"==typeof t?t:void 0},at=function(t,n){return arguments.length<2?ut(it[t])||ut(u[t]):it[t]&&it[t][n]||u[t]&&u[t][n]},ft=Math.ceil,ct=Math.floor,lt=function(t){return isNaN(t=+t)?0:(t>0?ct:ft)(t)},st=Math.min,pt=function(t){return t>0?st(lt(t),9007199254740991):0},yt=Math.max,dt=Math.min,mt=function(t){return function(n,r,e){var o,i=w(n),u=pt(i.length),a=function(t,n){var r=lt(t);return r<0?yt(r+n,0):dt(r,n)}(e,u);if(t&&r!=r){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===r)return t||a||0;return!t&&-1}},gt={includes:mt(!0),indexOf:mt(!1)}.indexOf,ht=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),wt={f:Object.getOwnPropertyNames||function(t){return function(t,n){var r,e=w(t),o=0,i=[];for(r in e)!P(J,r)&&P(e,r)&&i.push(r);for(;n.length>o;)P(e,r=n[o++])&&(~gt(i,r)||i.push(r));return i}(t,ht)}},bt={f:Object.getOwnPropertySymbols},vt=at("Reflect","ownKeys")||function(t){var n=wt.f(x(t)),r=bt.f;return r?n.concat(r(t)):n},St=function(t,n){for(var r=vt(n),e=A.f,o=z.f,i=0;i<r.length;i++){var u=r[i];P(t,u)||e(t,u,o(n,u))}},Pt=/#|\.prototype\./,jt=function(t,n){var r=Ot[kt(t)];return r==zt||r!=Tt&&("function"==typeof n?a(n):!!n)},kt=jt.normalize=function(t){return String(t).replace(Pt,".").toLowerCase()},Ot=jt.data={},Tt=jt.NATIVE="N",zt=jt.POLYFILL="P",xt=jt,Et=z.f,At=Array.isArray||function(t){return"Array"==d(t)},Ct=function(t){return Object(h(t))},Mt=function(t,n,r){var e=v(n);e in t?A.f(t,e,p(0,r)):t[e]=r},Ft="process"==d(u.process),Rt=at("navigator","userAgent")||"",Lt=u.process,Nt=Lt&&Lt.versions,Wt=Nt&&Nt.v8;Wt?rt=(nt=Wt.split("."))[0]+nt[1]:Rt&&(!(nt=Rt.match(/Edge\/(\d+)/))||nt[1]>=74)&&(nt=Rt.match(/Chrome\/(\d+)/))&&(rt=nt[1]);var It,_t=rt&&+rt,Dt=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(Ft?38===_t:_t>37&&_t<41)})),Ut=Dt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,qt=K("wks"),Kt=u.Symbol,Bt=Ut?Kt:Kt&&Kt.withoutSetter||Z,Gt=function(t){return P(qt,t)&&(Dt||"string"==typeof qt[t])||(Dt&&P(Kt,t)?qt[t]=Kt[t]:qt[t]=Bt("Symbol."+t)),qt[t]},Zt=Gt("species"),Ht=function(t,n){var r;return At(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!At(r.prototype)?b(r)&&null===(r=r[Zt])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)},Jt=Gt("species"),Qt=Gt("isConcatSpreadable"),Vt=9007199254740991,Yt="Maximum allowed index exceeded",Xt=_t>=51||!a((function(){var t=[];return t[Qt]=!1,t.concat()[0]!==t})),$t=(It="concat",_t>=51||!a((function(){var t=[];return(t.constructor={})[Jt]=function(){return{foo:1}},1!==t[It](Boolean).foo}))),tn=function(t){if(!b(t))return!1;var n=t[Qt];return void 0!==n?!!n:At(t)};!function(t,n){var r,e,o,i,a,f=t.target,c=t.global,l=t.stat;if(r=c?u:l?u[f]||M(f,{}):(u[f]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(a=Et(r,e))&&a.value:r[e],!xt(c?e:f+(l?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;St(i,o)}(t.sham||o&&o.sham)&&C(i,"sham",!0),ot(r,e,i,t)}}({target:"Array",proto:!0,forced:!Xt||!$t},{concat:function(t){var n,r,e,o,i,u=Ct(this),a=Ht(u,0),f=0;for(n=-1,e=arguments.length;n<e;n++)if(tn(i=-1===n?u:arguments[n])){if(f+(o=pt(i.length))>Vt)throw TypeError(Yt);for(r=0;r<o;r++,f++)r in i&&Mt(a,f,i[r])}else{if(f>=Vt)throw TypeError(Yt);Mt(a,f++,i)}return a.length=f,a}}),r.default.fn.bootstrapTable.locales["pl-PL"]=r.default.fn.bootstrapTable.locales.pl={formatCopyRows:function(){return"Kopiuj wiersze"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Ładowanie, proszę czekać"},formatRecordsPerPage:function(t){return"".concat(t," rekordów na stronę")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"Wyświetlanie rekordów od ".concat(t," do ").concat(n," z ").concat(r," (filtered from ").concat(e," total rows)"):"Wyświetlanie rekordów od ".concat(t," do ").concat(n," z ").concat(r)},formatSRPaginationPreText:function(){return"poprzednia strona"},formatSRPaginationPageText:function(t){return"z ".concat(t)},formatSRPaginationNextText:function(){return"następna strona"},formatDetailPagination:function(t){return"Wyświetla ".concat(t," wierszy")},formatClearSearch:function(){return"Wyczyść wyszukiwanie"},formatSearch:function(){return"Szukaj"},formatNoMatches:function(){return"Niestety, nic nie znaleziono"},formatPaginationSwitch:function(){return"Pokaż/ukryj stronicowanie"},formatPaginationSwitchDown:function(){return"Pokaż stronicowanie"},formatPaginationSwitchUp:function(){return"Ukryj stronicowanie"},formatRefresh:function(){return"Odśwież"},formatToggle:function(){return"Przełącz"},formatToggleOn:function(){return"Pokaż układ karty"},formatToggleOff:function(){return"Ukryj układ karty"},formatColumns:function(){return"Kolumny"},formatColumnsToggleAll:function(){return"Zaznacz wszystko"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"Wszystkie"},formatAutoRefresh:function(){return"Auto odświeżanie"},formatExport:function(){return"Eksport danych"},formatJumpTo:function(){return"Przejdź"},formatAdvancedSearch:function(){return"Wyszukiwanie zaawansowane"},formatAdvancedCloseButton:function(){return"Zamknij"},formatFilterControlSwitch:function(){return"Pokaż/Ukryj"},formatFilterControlSwitchHide:function(){return"Pokaż"},formatFilterControlSwitchShow:function(){return"Ukryj"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["pl-PL"])}));