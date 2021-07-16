!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,n){return t(n={exports:{}},n.exports),n.exports}var i=function(t){return t&&t.Math==Math&&t},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||function(){return this}()||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},f=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!c.call({1:2},1)?function(t){var n=l(this,t);return!!n&&n.enumerable}:c},p=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},y={}.toString,g=function(t){return y.call(t).slice(8,-1)},d="".split,h=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==g(t)?d.call(t,""):Object(t)}:Object,m=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},b=function(t){return h(m(t))},v=function(t){return"object"==typeof t?null!==t:"function"==typeof t},w=function(t,n){if(!v(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!v(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!v(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!v(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,T=function(t,n){return S.call(t,n)},O=u.document,P=v(O)&&v(O.createElement),j=!f&&!a((function(){return 7!=Object.defineProperty((t="div",P?O.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),x=Object.getOwnPropertyDescriptor,A={f:f?x:function(t,n){if(t=b(t),n=w(n,!0),j)try{return x(t,n)}catch(t){}if(T(t,n))return p(!s.f.call(t,n),t[n])}},E=function(t){if(!v(t))throw TypeError(String(t)+" is not an object");return t},C=Object.defineProperty,R={f:f?C:function(t,n,r){if(E(t),n=w(n,!0),E(r),j)try{return C(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},M=f?function(t,n,r){return R.f(t,n,p(1,r))}:function(t,n,r){return t[n]=r,t},k=function(t,n){try{M(u,t,n)}catch(r){u[t]=n}return n},F="__core-js_shared__",N=u[F]||k(F,{}),D=Function.toString;"function"!=typeof N.inspectSource&&(N.inspectSource=function(t){return D.call(t)});var H,I,L,_,q=N.inspectSource,z=u.WeakMap,G="function"==typeof z&&/native code/.test(q(z)),Y=o((function(t){(t.exports=function(t,n){return N[t]||(N[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),B=0,W=Math.random(),J=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++B+W).toString(36)},K=Y("keys"),Q={},U=u.WeakMap;if(G){var V=N.state||(N.state=new U),X=V.get,Z=V.has,$=V.set;H=function(t,n){return n.facade=t,$.call(V,t,n),n},I=function(t){return X.call(V,t)||{}},L=function(t){return Z.call(V,t)}}else{var tt=K[_="state"]||(K[_]=J(_));Q[tt]=!0,H=function(t,n){return n.facade=t,M(t,tt,n),n},I=function(t){return T(t,tt)?t[tt]:{}},L=function(t){return T(t,tt)}}var nt,rt,et={set:H,get:I,has:L,enforce:function(t){return L(t)?I(t):H(t,{})},getterFor:function(t){return function(n){var r;if(!v(n)||(r=I(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},ot=o((function(t){var n=et.get,r=et.enforce,e=String(String).split("String");(t.exports=function(t,n,o,i){var a,f=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof n||T(o,"name")||M(o,"name",n),(a=r(o)).source||(a.source=e.join("string"==typeof n?n:""))),t!==u?(f?!l&&t[n]&&(c=!0):delete t[n],c?t[n]=o:M(t,n,o)):c?t[n]=o:k(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||q(this)}))})),it=u,ut=function(t){return"function"==typeof t?t:void 0},at=function(t,n){return arguments.length<2?ut(it[t])||ut(u[t]):it[t]&&it[t][n]||u[t]&&u[t][n]},ft=Math.ceil,ct=Math.floor,lt=function(t){return isNaN(t=+t)?0:(t>0?ct:ft)(t)},st=Math.min,pt=function(t){return t>0?st(lt(t),9007199254740991):0},yt=Math.max,gt=Math.min,dt=function(t){return function(n,r,e){var o,i=b(n),u=pt(i.length),a=function(t,n){var r=lt(t);return r<0?yt(r+n,0):gt(r,n)}(e,u);if(t&&r!=r){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===r)return t||a||0;return!t&&-1}},ht={includes:dt(!0),indexOf:dt(!1)}.indexOf,mt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),bt={f:Object.getOwnPropertyNames||function(t){return function(t,n){var r,e=b(t),o=0,i=[];for(r in e)!T(Q,r)&&T(e,r)&&i.push(r);for(;n.length>o;)T(e,r=n[o++])&&(~ht(i,r)||i.push(r));return i}(t,mt)}},vt={f:Object.getOwnPropertySymbols},wt=at("Reflect","ownKeys")||function(t){var n=bt.f(E(t)),r=vt.f;return r?n.concat(r(t)):n},St=function(t,n){for(var r=wt(n),e=R.f,o=A.f,i=0;i<r.length;i++){var u=r[i];T(t,u)||e(t,u,o(n,u))}},Tt=/#|\.prototype\./,Ot=function(t,n){var r=jt[Pt(t)];return r==At||r!=xt&&("function"==typeof n?a(n):!!n)},Pt=Ot.normalize=function(t){return String(t).replace(Tt,".").toLowerCase()},jt=Ot.data={},xt=Ot.NATIVE="N",At=Ot.POLYFILL="P",Et=Ot,Ct=A.f,Rt=Array.isArray||function(t){return"Array"==g(t)},Mt=function(t){return Object(m(t))},kt=function(t,n,r){var e=w(n);e in t?R.f(t,e,p(0,r)):t[e]=r},Ft="process"==g(u.process),Nt=at("navigator","userAgent")||"",Dt=u.process,Ht=Dt&&Dt.versions,It=Ht&&Ht.v8;It?rt=(nt=It.split("."))[0]+nt[1]:Nt&&(!(nt=Nt.match(/Edge\/(\d+)/))||nt[1]>=74)&&(nt=Nt.match(/Chrome\/(\d+)/))&&(rt=nt[1]);var Lt,_t=rt&&+rt,qt=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(Ft?38===_t:_t>37&&_t<41)})),zt=qt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Gt=Y("wks"),Yt=u.Symbol,Bt=zt?Yt:Yt&&Yt.withoutSetter||J,Wt=function(t){return T(Gt,t)&&(qt||"string"==typeof Gt[t])||(qt&&T(Yt,t)?Gt[t]=Yt[t]:Gt[t]=Bt("Symbol."+t)),Gt[t]},Jt=Wt("species"),Kt=function(t,n){var r;return Rt(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Rt(r.prototype)?v(r)&&null===(r=r[Jt])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)},Qt=Wt("species"),Ut=Wt("isConcatSpreadable"),Vt=9007199254740991,Xt="Maximum allowed index exceeded",Zt=_t>=51||!a((function(){var t=[];return t[Ut]=!1,t.concat()[0]!==t})),$t=(Lt="concat",_t>=51||!a((function(){var t=[];return(t.constructor={})[Qt]=function(){return{foo:1}},1!==t[Lt](Boolean).foo}))),tn=function(t){if(!v(t))return!1;var n=t[Ut];return void 0!==n?!!n:Rt(t)};!function(t,n){var r,e,o,i,a,f=t.target,c=t.global,l=t.stat;if(r=c?u:l?u[f]||k(f,{}):(u[f]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(a=Ct(r,e))&&a.value:r[e],!Et(c?e:f+(l?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;St(i,o)}(t.sham||o&&o.sham)&&M(i,"sham",!0),ot(r,e,i,t)}}({target:"Array",proto:!0,forced:!Zt||!$t},{concat:function(t){var n,r,e,o,i,u=Mt(this),a=Kt(u,0),f=0;for(n=-1,e=arguments.length;n<e;n++)if(tn(i=-1===n?u:arguments[n])){if(f+(o=pt(i.length))>Vt)throw TypeError(Xt);for(r=0;r<o;r++,f++)r in i&&kt(a,f,i[r])}else{if(f>=Vt)throw TypeError(Xt);kt(a,f++,i)}return a.length=f,a}}),r.default.fn.bootstrapTable.locales["tr-TR"]=r.default.fn.bootstrapTable.locales.tr={formatCopyRows:function(){return"Copy Rows"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Yükleniyor, lütfen bekleyin"},formatRecordsPerPage:function(t){return"Sayfa başına ".concat(t," kayıt.")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"".concat(r," kayıttan ").concat(t,"-").concat(n," arası gösteriliyor (filtered from ").concat(e," total rows)."):"".concat(r," kayıttan ").concat(t,"-").concat(n," arası gösteriliyor.")},formatSRPaginationPreText:function(){return"previous page"},formatSRPaginationPageText:function(t){return"to page ".concat(t)},formatSRPaginationNextText:function(){return"next page"},formatDetailPagination:function(t){return"Showing ".concat(t," rows")},formatClearSearch:function(){return"Clear Search"},formatSearch:function(){return"Ara"},formatNoMatches:function(){return"Eşleşen kayıt bulunamadı."},formatPaginationSwitch:function(){return"Hide/Show pagination"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRefresh:function(){return"Yenile"},formatToggle:function(){return"Değiştir"},formatToggleOn:function(){return"Show card view"},formatToggleOff:function(){return"Hide card view"},formatColumns:function(){return"Sütunlar"},formatColumnsToggleAll:function(){return"Toggle all"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"Tüm Satırlar"},formatAutoRefresh:function(){return"Auto Refresh"},formatExport:function(){return"Export data"},formatJumpTo:function(){return"GO"},formatAdvancedSearch:function(){return"Advanced search"},formatAdvancedCloseButton:function(){return"Close"},formatFilterControlSwitch:function(){return"Hide/Show controls"},formatFilterControlSwitchHide:function(){return"Hide controls"},formatFilterControlSwitchShow:function(){return"Show controls"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["tr-TR"])}));