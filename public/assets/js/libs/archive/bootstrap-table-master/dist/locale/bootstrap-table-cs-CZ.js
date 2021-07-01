!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,n){return t(n={exports:{}},n.exports),n.exports}var i=function(t){return t&&t.Math==Math&&t},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||function(){return this}()||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},f=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!a.call({1:2},1)?function(t){var n=l(this,t);return!!n&&n.enumerable}:a},p=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},d={}.toString,h=function(t){return d.call(t).slice(8,-1)},y="".split,g=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==h(t)?y.call(t,""):Object(t)}:Object,m=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return g(m(t))},b=function(t){return"object"==typeof t?null!==t:"function"==typeof t},w=function(t,n){if(!b(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!b(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!b(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!b(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,T=function(t,n){return S.call(t,n)},j=u.document,O=b(j)&&b(j.createElement),P=!f&&!c((function(){return 7!=Object.defineProperty((t="div",O?j.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),x=Object.getOwnPropertyDescriptor,C={f:f?x:function(t,n){if(t=v(t),n=w(n,!0),P)try{return x(t,n)}catch(t){}if(T(t,n))return p(!s.f.call(t,n),t[n])}},k=function(t){if(!b(t))throw TypeError(String(t)+" is not an object");return t},A=Object.defineProperty,E={f:f?A:function(t,n,r){if(k(t),n=w(n,!0),k(r),P)try{return A(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},M=f?function(t,n,r){return E.f(t,n,p(1,r))}:function(t,n,r){return t[n]=r,t},R=function(t,n){try{M(u,t,n)}catch(r){u[t]=n}return n},z="__core-js_shared__",F=u[z]||R(z,{}),N=Function.toString;"function"!=typeof F.inspectSource&&(F.inspectSource=function(t){return N.call(t)});var I,L,_,D,H=F.inspectSource,Z=u.WeakMap,q="function"==typeof Z&&/native code/.test(H(Z)),G=o((function(t){(t.exports=function(t,n){return F[t]||(F[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),V=0,B=Math.random(),W=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++V+B).toString(36)},J=G("keys"),K={},Q=u.WeakMap;if(q){var U=F.state||(F.state=new Q),Y=U.get,X=U.has,$=U.set;I=function(t,n){return n.facade=t,$.call(U,t,n),n},L=function(t){return Y.call(U,t)||{}},_=function(t){return X.call(U,t)}}else{var tt=J[D="state"]||(J[D]=W(D));K[tt]=!0,I=function(t,n){return n.facade=t,M(t,tt,n),n},L=function(t){return T(t,tt)?t[tt]:{}},_=function(t){return T(t,tt)}}var nt,rt,et={set:I,get:L,has:_,enforce:function(t){return _(t)?L(t):I(t,{})},getterFor:function(t){return function(n){var r;if(!b(n)||(r=L(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},ot=o((function(t){var n=et.get,r=et.enforce,e=String(String).split("String");(t.exports=function(t,n,o,i){var c,f=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof n||T(o,"name")||M(o,"name",n),(c=r(o)).source||(c.source=e.join("string"==typeof n?n:""))),t!==u?(f?!l&&t[n]&&(a=!0):delete t[n],a?t[n]=o:M(t,n,o)):a?t[n]=o:R(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||H(this)}))})),it=u,ut=function(t){return"function"==typeof t?t:void 0},ct=function(t,n){return arguments.length<2?ut(it[t])||ut(u[t]):it[t]&&it[t][n]||u[t]&&u[t][n]},ft=Math.ceil,at=Math.floor,lt=function(t){return isNaN(t=+t)?0:(t>0?at:ft)(t)},st=Math.min,pt=function(t){return t>0?st(lt(t),9007199254740991):0},dt=Math.max,ht=Math.min,yt=function(t){return function(n,r,e){var o,i=v(n),u=pt(i.length),c=function(t,n){var r=lt(t);return r<0?dt(r+n,0):ht(r,n)}(e,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},gt={includes:yt(!0),indexOf:yt(!1)}.indexOf,mt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),vt={f:Object.getOwnPropertyNames||function(t){return function(t,n){var r,e=v(t),o=0,i=[];for(r in e)!T(K,r)&&T(e,r)&&i.push(r);for(;n.length>o;)T(e,r=n[o++])&&(~gt(i,r)||i.push(r));return i}(t,mt)}},bt={f:Object.getOwnPropertySymbols},wt=ct("Reflect","ownKeys")||function(t){var n=vt.f(k(t)),r=bt.f;return r?n.concat(r(t)):n},St=function(t,n){for(var r=wt(n),e=E.f,o=C.f,i=0;i<r.length;i++){var u=r[i];T(t,u)||e(t,u,o(n,u))}},Tt=/#|\.prototype\./,jt=function(t,n){var r=Pt[Ot(t)];return r==Ct||r!=xt&&("function"==typeof n?c(n):!!n)},Ot=jt.normalize=function(t){return String(t).replace(Tt,".").toLowerCase()},Pt=jt.data={},xt=jt.NATIVE="N",Ct=jt.POLYFILL="P",kt=jt,At=C.f,Et=Array.isArray||function(t){return"Array"==h(t)},Mt=function(t){return Object(m(t))},Rt=function(t,n,r){var e=w(n);e in t?E.f(t,e,p(0,r)):t[e]=r},zt="process"==h(u.process),Ft=ct("navigator","userAgent")||"",Nt=u.process,It=Nt&&Nt.versions,Lt=It&&It.v8;Lt?rt=(nt=Lt.split("."))[0]+nt[1]:Ft&&(!(nt=Ft.match(/Edge\/(\d+)/))||nt[1]>=74)&&(nt=Ft.match(/Chrome\/(\d+)/))&&(rt=nt[1]);var _t,Dt=rt&&+rt,Ht=!!Object.getOwnPropertySymbols&&!c((function(){return!Symbol.sham&&(zt?38===Dt:Dt>37&&Dt<41)})),Zt=Ht&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,qt=G("wks"),Gt=u.Symbol,Vt=Zt?Gt:Gt&&Gt.withoutSetter||W,Bt=function(t){return T(qt,t)&&(Ht||"string"==typeof qt[t])||(Ht&&T(Gt,t)?qt[t]=Gt[t]:qt[t]=Vt("Symbol."+t)),qt[t]},Wt=Bt("species"),Jt=function(t,n){var r;return Et(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Et(r.prototype)?b(r)&&null===(r=r[Wt])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)},Kt=Bt("species"),Qt=Bt("isConcatSpreadable"),Ut=9007199254740991,Yt="Maximum allowed index exceeded",Xt=Dt>=51||!c((function(){var t=[];return t[Qt]=!1,t.concat()[0]!==t})),$t=(_t="concat",Dt>=51||!c((function(){var t=[];return(t.constructor={})[Kt]=function(){return{foo:1}},1!==t[_t](Boolean).foo}))),tn=function(t){if(!b(t))return!1;var n=t[Qt];return void 0!==n?!!n:Et(t)};!function(t,n){var r,e,o,i,c,f=t.target,a=t.global,l=t.stat;if(r=a?u:l?u[f]||R(f,{}):(u[f]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(c=At(r,e))&&c.value:r[e],!kt(a?e:f+(l?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;St(i,o)}(t.sham||o&&o.sham)&&M(i,"sham",!0),ot(r,e,i,t)}}({target:"Array",proto:!0,forced:!Xt||!$t},{concat:function(t){var n,r,e,o,i,u=Mt(this),c=Jt(u,0),f=0;for(n=-1,e=arguments.length;n<e;n++)if(tn(i=-1===n?u:arguments[n])){if(f+(o=pt(i.length))>Ut)throw TypeError(Yt);for(r=0;r<o;r++,f++)r in i&&Rt(c,f,i[r])}else{if(f>=Ut)throw TypeError(Yt);Rt(c,f++,i)}return c.length=f,c}}),r.default.fn.bootstrapTable.locales["cs-CZ"]=r.default.fn.bootstrapTable.locales.cs={formatCopyRows:function(){return"Copy Rows"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Čekejte, prosím"},formatRecordsPerPage:function(t){return"".concat(t," položek na stránku")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"Zobrazena ".concat(t,". - ").concat(n," . položka z celkových ").concat(r," (filtered from ").concat(e," total rows)"):"Zobrazena ".concat(t,". - ").concat(n," . položka z celkových ").concat(r)},formatSRPaginationPreText:function(){return"previous page"},formatSRPaginationPageText:function(t){return"to page ".concat(t)},formatSRPaginationNextText:function(){return"next page"},formatDetailPagination:function(t){return"Showing ".concat(t," rows")},formatClearSearch:function(){return"Clear Search"},formatSearch:function(){return"Vyhledávání"},formatNoMatches:function(){return"Nenalezena žádná vyhovující položka"},formatPaginationSwitch:function(){return"Skrýt/Zobrazit stránkování"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRefresh:function(){return"Aktualizovat"},formatToggle:function(){return"Přepni"},formatToggleOn:function(){return"Show card view"},formatToggleOff:function(){return"Hide card view"},formatColumns:function(){return"Sloupce"},formatColumnsToggleAll:function(){return"Toggle all"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"Vše"},formatAutoRefresh:function(){return"Auto Refresh"},formatExport:function(){return"Export data"},formatJumpTo:function(){return"GO"},formatAdvancedSearch:function(){return"Advanced search"},formatAdvancedCloseButton:function(){return"Close"},formatFilterControlSwitch:function(){return"Hide/Show controls"},formatFilterControlSwitchHide:function(){return"Hide controls"},formatFilterControlSwitchShow:function(){return"Show controls"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["cs-CZ"])}));