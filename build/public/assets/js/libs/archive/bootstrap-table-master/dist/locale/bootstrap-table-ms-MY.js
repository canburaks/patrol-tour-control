!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).jQuery)}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=n(t),e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,n){return t(n={exports:{}},n.exports),n.exports}var i=function(t){return t&&t.Math==Math&&t},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||function(){return this}()||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},f=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!c.call({1:2},1)?function(t){var n=l(this,t);return!!n&&n.enumerable}:c},p=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},d={}.toString,m=function(t){return d.call(t).slice(8,-1)},g="".split,y=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==m(t)?g.call(t,""):Object(t)}:Object,h=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},b=function(t){return y(h(t))},v=function(t){return"object"==typeof t?null!==t:"function"==typeof t},w=function(t,n){if(!v(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!v(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!v(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!v(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,T=function(t,n){return S.call(t,n)},j=u.document,O=v(j)&&v(j.createElement),P=!f&&!a((function(){return 7!=Object.defineProperty((t="div",O?j.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),x=Object.getOwnPropertyDescriptor,k={f:f?x:function(t,n){if(t=b(t),n=w(n,!0),P)try{return x(t,n)}catch(t){}if(T(t,n))return p(!s.f.call(t,n),t[n])}},C=function(t){if(!v(t))throw TypeError(String(t)+" is not an object");return t},A=Object.defineProperty,E={f:f?A:function(t,n,r){if(C(t),n=w(n,!0),C(r),P)try{return A(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},M=f?function(t,n,r){return E.f(t,n,p(1,r))}:function(t,n,r){return t[n]=r,t},R=function(t,n){try{M(u,t,n)}catch(r){u[t]=n}return n},F="__core-js_shared__",L=u[F]||R(F,{}),N=Function.toString;"function"!=typeof L.inspectSource&&(L.inspectSource=function(t){return N.call(t)});var I,_,D,H,q=L.inspectSource,z=u.WeakMap,G="function"==typeof z&&/native code/.test(q(z)),Y=o((function(t){(t.exports=function(t,n){return L[t]||(L[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),B=0,W=Math.random(),J=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++B+W).toString(36)},K=Y("keys"),Q={},U=u.WeakMap;if(G){var V=L.state||(L.state=new U),X=V.get,Z=V.has,$=V.set;I=function(t,n){return n.facade=t,$.call(V,t,n),n},_=function(t){return X.call(V,t)||{}},D=function(t){return Z.call(V,t)}}else{var tt=K[H="state"]||(K[H]=J(H));Q[tt]=!0,I=function(t,n){return n.facade=t,M(t,tt,n),n},_=function(t){return T(t,tt)?t[tt]:{}},D=function(t){return T(t,tt)}}var nt,rt,et={set:I,get:_,has:D,enforce:function(t){return D(t)?_(t):I(t,{})},getterFor:function(t){return function(n){var r;if(!v(n)||(r=_(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},ot=o((function(t){var n=et.get,r=et.enforce,e=String(String).split("String");(t.exports=function(t,n,o,i){var a,f=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof n||T(o,"name")||M(o,"name",n),(a=r(o)).source||(a.source=e.join("string"==typeof n?n:""))),t!==u?(f?!l&&t[n]&&(c=!0):delete t[n],c?t[n]=o:M(t,n,o)):c?t[n]=o:R(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||q(this)}))})),it=u,ut=function(t){return"function"==typeof t?t:void 0},at=function(t,n){return arguments.length<2?ut(it[t])||ut(u[t]):it[t]&&it[t][n]||u[t]&&u[t][n]},ft=Math.ceil,ct=Math.floor,lt=function(t){return isNaN(t=+t)?0:(t>0?ct:ft)(t)},st=Math.min,pt=function(t){return t>0?st(lt(t),9007199254740991):0},dt=Math.max,mt=Math.min,gt=function(t){return function(n,r,e){var o,i=b(n),u=pt(i.length),a=function(t,n){var r=lt(t);return r<0?dt(r+n,0):mt(r,n)}(e,u);if(t&&r!=r){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===r)return t||a||0;return!t&&-1}},yt={includes:gt(!0),indexOf:gt(!1)}.indexOf,ht=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),bt={f:Object.getOwnPropertyNames||function(t){return function(t,n){var r,e=b(t),o=0,i=[];for(r in e)!T(Q,r)&&T(e,r)&&i.push(r);for(;n.length>o;)T(e,r=n[o++])&&(~yt(i,r)||i.push(r));return i}(t,ht)}},vt={f:Object.getOwnPropertySymbols},wt=at("Reflect","ownKeys")||function(t){var n=bt.f(C(t)),r=vt.f;return r?n.concat(r(t)):n},St=function(t,n){for(var r=wt(n),e=E.f,o=k.f,i=0;i<r.length;i++){var u=r[i];T(t,u)||e(t,u,o(n,u))}},Tt=/#|\.prototype\./,jt=function(t,n){var r=Pt[Ot(t)];return r==kt||r!=xt&&("function"==typeof n?a(n):!!n)},Ot=jt.normalize=function(t){return String(t).replace(Tt,".").toLowerCase()},Pt=jt.data={},xt=jt.NATIVE="N",kt=jt.POLYFILL="P",Ct=jt,At=k.f,Et=Array.isArray||function(t){return"Array"==m(t)},Mt=function(t){return Object(h(t))},Rt=function(t,n,r){var e=w(n);e in t?E.f(t,e,p(0,r)):t[e]=r},Ft="process"==m(u.process),Lt=at("navigator","userAgent")||"",Nt=u.process,It=Nt&&Nt.versions,_t=It&&It.v8;_t?rt=(nt=_t.split("."))[0]+nt[1]:Lt&&(!(nt=Lt.match(/Edge\/(\d+)/))||nt[1]>=74)&&(nt=Lt.match(/Chrome\/(\d+)/))&&(rt=nt[1]);var Dt,Ht=rt&&+rt,qt=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(Ft?38===Ht:Ht>37&&Ht<41)})),zt=qt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Gt=Y("wks"),Yt=u.Symbol,Bt=zt?Yt:Yt&&Yt.withoutSetter||J,Wt=function(t){return T(Gt,t)&&(qt||"string"==typeof Gt[t])||(qt&&T(Yt,t)?Gt[t]=Yt[t]:Gt[t]=Bt("Symbol."+t)),Gt[t]},Jt=Wt("species"),Kt=function(t,n){var r;return Et(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Et(r.prototype)?v(r)&&null===(r=r[Jt])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)},Qt=Wt("species"),Ut=Wt("isConcatSpreadable"),Vt=9007199254740991,Xt="Maximum allowed index exceeded",Zt=Ht>=51||!a((function(){var t=[];return t[Ut]=!1,t.concat()[0]!==t})),$t=(Dt="concat",Ht>=51||!a((function(){var t=[];return(t.constructor={})[Qt]=function(){return{foo:1}},1!==t[Dt](Boolean).foo}))),tn=function(t){if(!v(t))return!1;var n=t[Ut];return void 0!==n?!!n:Et(t)};!function(t,n){var r,e,o,i,a,f=t.target,c=t.global,l=t.stat;if(r=c?u:l?u[f]||R(f,{}):(u[f]||{}).prototype)for(e in n){if(i=n[e],o=t.noTargetGet?(a=At(r,e))&&a.value:r[e],!Ct(c?e:f+(l?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;St(i,o)}(t.sham||o&&o.sham)&&M(i,"sham",!0),ot(r,e,i,t)}}({target:"Array",proto:!0,forced:!Zt||!$t},{concat:function(t){var n,r,e,o,i,u=Mt(this),a=Kt(u,0),f=0;for(n=-1,e=arguments.length;n<e;n++)if(tn(i=-1===n?u:arguments[n])){if(f+(o=pt(i.length))>Vt)throw TypeError(Xt);for(r=0;r<o;r++,f++)r in i&&Rt(a,f,i[r])}else{if(f>=Vt)throw TypeError(Xt);Rt(a,f++,i)}return a.length=f,a}}),r.default.fn.bootstrapTable.locales["ms-MY"]=r.default.fn.bootstrapTable.locales.ms={formatCopyRows:function(){return"Copy Rows"},formatPrint:function(){return"Print"},formatLoadingMessage:function(){return"Permintaan sedang dimuatkan. Sila tunggu sebentar"},formatRecordsPerPage:function(t){return"".concat(t," rekod setiap muka surat")},formatShowingRows:function(t,n,r,e){return void 0!==e&&e>0&&e>r?"Sedang memaparkan rekod ".concat(t," hingga ").concat(n," daripada jumlah ").concat(r," rekod (filtered from ").concat(e," total rows)"):"Sedang memaparkan rekod ".concat(t," hingga ").concat(n," daripada jumlah ").concat(r," rekod")},formatSRPaginationPreText:function(){return"previous page"},formatSRPaginationPageText:function(t){return"to page ".concat(t)},formatSRPaginationNextText:function(){return"next page"},formatDetailPagination:function(t){return"Showing ".concat(t," rows")},formatClearSearch:function(){return"Clear Search"},formatSearch:function(){return"Cari"},formatNoMatches:function(){return"Tiada rekod yang menyamai permintaan"},formatPaginationSwitch:function(){return"Tunjuk/sembunyi muka surat"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRefresh:function(){return"Muatsemula"},formatToggle:function(){return"Tukar"},formatToggleOn:function(){return"Show card view"},formatToggleOff:function(){return"Hide card view"},formatColumns:function(){return"Lajur"},formatColumnsToggleAll:function(){return"Toggle all"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"Semua"},formatAutoRefresh:function(){return"Auto Refresh"},formatExport:function(){return"Export data"},formatJumpTo:function(){return"GO"},formatAdvancedSearch:function(){return"Advanced search"},formatAdvancedCloseButton:function(){return"Close"},formatFilterControlSwitch:function(){return"Hide/Show controls"},formatFilterControlSwitchHide:function(){return"Hide controls"},formatFilterControlSwitchShow:function(){return"Show controls"}},r.default.extend(r.default.fn.bootstrapTable.defaults,r.default.fn.bootstrapTable.locales["ms-MY"])}));