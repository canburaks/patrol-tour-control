const Utils=$.fn.bootstrapTable.utils,UtilsCookie={cookieIds:{sortOrder:"bs.table.sortOrder",sortName:"bs.table.sortName",pageNumber:"bs.table.pageNumber",pageList:"bs.table.pageList",columns:"bs.table.columns",searchText:"bs.table.searchText",reorderColumns:"bs.table.reorderColumns",filterControl:"bs.table.filterControl",filterBy:"bs.table.filterBy"},getCurrentHeader(o){let e=o.$header;return o.options.height&&(e=o.$tableHeader),e},getCurrentSearchControls(o){let e="select, input";return o.options.height&&(e="table select, table input"),e},cookieEnabled:()=>!!navigator.cookieEnabled,inArrayCookiesEnabled(o,e){let t=-1;for(let i=0;i<e.length;i++)if(o.toLowerCase()===e[i].toLowerCase()){t=i;break}return t},setCookie(o,e,t){if(o.options.cookie&&UtilsCookie.cookieEnabled()&&""!==o.options.cookieIdTable&&-1!==UtilsCookie.inArrayCookiesEnabled(e,o.options.cookiesEnabled)){switch(e=`${o.options.cookieIdTable}.${e}`,o.options.cookieStorage){case"cookieStorage":document.cookie=[e,"=",encodeURIComponent(t),`; expires=${UtilsCookie.calculateExpiration(o.options.cookieExpire)}`,o.options.cookiePath?`; path=${o.options.cookiePath}`:"",o.options.cookieDomain?`; domain=${o.options.cookieDomain}`:"",o.options.cookieSecure?"; secure":"",`;SameSite=${o.options.cookieSameSite}`].join("");break;case"localStorage":localStorage.setItem(e,t);break;case"sessionStorage":sessionStorage.setItem(e,t);break;case"customStorage":if(!o.options.cookieCustomStorageSet||!o.options.cookieCustomStorageGet||!o.options.cookieCustomStorageDelete)throw new Error("The following options must be set while using the customStorage: cookieCustomStorageSet, cookieCustomStorageGet and cookieCustomStorageDelete");Utils.calculateObjectValue(o.options,o.options.cookieCustomStorageSet,[e,t],"");break;default:return!1}return!0}},getCookie(o,e,t){if(!t)return null;if(-1===UtilsCookie.inArrayCookiesEnabled(t,o.options.cookiesEnabled))return null;switch(t=`${e}.${t}`,o.options.cookieStorage){case"cookieStorage":const e=`; ${document.cookie}`.split(`; ${t}=`);return 2===e.length?decodeURIComponent(e.pop().split(";").shift()):null;case"localStorage":return localStorage.getItem(t);case"sessionStorage":return sessionStorage.getItem(t);case"customStorage":if(!o.options.cookieCustomStorageSet||!o.options.cookieCustomStorageGet||!o.options.cookieCustomStorageDelete)throw new Error("The following options must be set while using the customStorage: cookieCustomStorageSet, cookieCustomStorageGet and cookieCustomStorageDelete");return Utils.calculateObjectValue(o.options,o.options.cookieCustomStorageGet,[t],"");default:return null}},deleteCookie(o,e,t){switch(t=`${e}.${t}`,o.options.cookieStorage){case"cookieStorage":document.cookie=[encodeURIComponent(t),"=","; expires=Thu, 01 Jan 1970 00:00:00 GMT",o.options.cookiePath?`; path=${o.options.cookiePath}`:"",o.options.cookieDomain?`; domain=${o.options.cookieDomain}`:"",`;SameSite=${o.options.cookieSameSite}`].join("");break;case"localStorage":localStorage.removeItem(t);break;case"sessionStorage":sessionStorage.removeItem(t);break;case"customStorage":if(!o.options.cookieCustomStorageSet||!o.options.cookieCustomStorageGet||!o.options.cookieCustomStorageDelete)throw new Error("The following options must be set while using the customStorage: cookieCustomStorageSet, cookieCustomStorageGet and cookieCustomStorageDelete");Utils.calculateObjectValue(o.options,o.options.cookieCustomStorageDelete,[t],"");break;default:return!1}return!0},calculateExpiration(o){const e=o.replace(/[0-9]*/,"");switch(o=o.replace(/[A-Za-z]{1,2}/,""),e.toLowerCase()){case"s":o=+o;break;case"mi":o*=60;break;case"h":o=60*o*60;break;case"d":o=24*o*60*60;break;case"m":o=30*o*24*60*60;break;case"y":o=365*o*24*60*60;break;default:o=void 0}if(!o)return"";const t=new Date;return t.setTime(t.getTime()+1e3*o),t.toGMTString()},initCookieFilters(o){setTimeout((()=>{const e=JSON.parse(UtilsCookie.getCookie(o,o.options.cookieIdTable,UtilsCookie.cookieIds.filterControl));if(!o.options.filterControlValuesLoaded&&e){const t={},i=UtilsCookie.getCurrentHeader(o),s=UtilsCookie.getCurrentSearchControls(o),r=(e,i)=>{i.forEach((i=>{if(""!==i.text&&("radio"!==e.type||e.value.toString()===i.text.toString()))if("INPUT"===e.tagName&&"radio"===e.type&&e.value.toString()===i.text.toString())e.checked=!0,t[i.field]=i.text;else if("INPUT"===e.tagName)e.value=i.text,t[i.field]=i.text;else if("SELECT"===e.tagName&&o.options.filterControlContainer)e.value=i.text,t[i.field]=i.text;else if(""!==i.text&&"SELECT"===e.tagName){for(let o=0;o<e.length;o++){const t=e[o];if(t.value===i.text)return void(t.selected=!0)}const o=document.createElement("option");o.value=i.text,o.text=i.text,e.add(o,e[1]),e.selectedIndex=1,t[i.field]=i.text}}))};let l=i;o.options.filterControlContainer&&(l=$(`${o.options.filterControlContainer}`)),l.find(s).each((function(){const o=$(this).closest("[data-field]").data("field"),t=e.filter((e=>e.field===o));r(this,t)})),o.initColumnSearch(t),o.options.filterControlValuesLoaded=!0,o.initServer()}}),250)}};$.extend($.fn.bootstrapTable.defaults,{cookie:!1,cookieExpire:"2h",cookiePath:null,cookieDomain:null,cookieSecure:null,cookieSameSite:"Lax",cookieIdTable:"",cookiesEnabled:["bs.table.sortOrder","bs.table.sortName","bs.table.pageNumber","bs.table.pageList","bs.table.columns","bs.table.searchText","bs.table.filterControl","bs.table.filterBy","bs.table.reorderColumns"],cookieStorage:"cookieStorage",cookieCustomStorageGet:null,cookieCustomStorageSet:null,cookieCustomStorageDelete:null,filterControls:[],filterControlValuesLoaded:!1}),$.fn.bootstrapTable.methods.push("getCookies"),$.fn.bootstrapTable.methods.push("deleteCookie"),$.extend($.fn.bootstrapTable.utils,{setCookie:UtilsCookie.setCookie,getCookie:UtilsCookie.getCookie}),$.BootstrapTable=class extends $.BootstrapTable{init(){if(this.options.cookie){const o=UtilsCookie.getCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds.filterBy);if("boolean"==typeof o&&!o)throw new Error("The cookie value of filterBy must be a json!");let e={};try{e=JSON.parse(o)}catch(o){throw new Error("Could not parse the json of the filterBy cookie!")}if(this.filterColumns=e||{},this.options.filterControls=[],this.options.filterControlValuesLoaded=!1,this.options.cookiesEnabled="string"==typeof this.options.cookiesEnabled?this.options.cookiesEnabled.replace("[","").replace("]","").replace(/'/g,"").replace(/ /g,"").toLowerCase().split(","):this.options.cookiesEnabled,this.options.filterControl){const o=this;this.$el.on("column-search.bs.table",((e,t,i)=>{let s=!0;for(let e=0;e<o.options.filterControls.length;e++)if(o.options.filterControls[e].field===t){o.options.filterControls[e].text=i,s=!1;break}s&&o.options.filterControls.push({field:t,text:i}),UtilsCookie.setCookie(o,UtilsCookie.cookieIds.filterControl,JSON.stringify(o.options.filterControls))})).on("created-controls.bs.table",UtilsCookie.initCookieFilters(o))}}super.init()}initServer(...o){if(this.options.cookie&&this.options.filterControl&&!this.options.filterControlValuesLoaded){if(JSON.parse(UtilsCookie.getCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds.filterControl)))return}super.initServer(...o)}initTable(...o){super.initTable(...o),this.initCookie()}onSort(...o){if(super.onSort(...o),void 0===this.options.sortName||void 0===this.options.sortOrder)return UtilsCookie.deleteCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds.sortName),void UtilsCookie.deleteCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds.sortOrder);UtilsCookie.setCookie(this,UtilsCookie.cookieIds.sortOrder,this.options.sortOrder),UtilsCookie.setCookie(this,UtilsCookie.cookieIds.sortName,this.options.sortName)}onPageNumber(...o){super.onPageNumber(...o),UtilsCookie.setCookie(this,UtilsCookie.cookieIds.pageNumber,this.options.pageNumber)}onPageListChange(...o){super.onPageListChange(...o),UtilsCookie.setCookie(this,UtilsCookie.cookieIds.pageList,this.options.pageSize),UtilsCookie.setCookie(this,UtilsCookie.cookieIds.pageNumber,this.options.pageNumber)}onPagePre(...o){super.onPagePre(...o),UtilsCookie.setCookie(this,UtilsCookie.cookieIds.pageNumber,this.options.pageNumber)}onPageNext(...o){super.onPageNext(...o),UtilsCookie.setCookie(this,UtilsCookie.cookieIds.pageNumber,this.options.pageNumber)}_toggleColumn(...o){super._toggleColumn(...o),UtilsCookie.setCookie(this,UtilsCookie.cookieIds.columns,JSON.stringify(this.getVisibleColumns().map((o=>o.field))))}_toggleAllColumns(...o){super._toggleAllColumns(...o),UtilsCookie.setCookie(this,UtilsCookie.cookieIds.columns,JSON.stringify(this.getVisibleColumns().map((o=>o.field))))}selectPage(o){super.selectPage(o),UtilsCookie.setCookie(this,UtilsCookie.cookieIds.pageNumber,o)}onSearch(o){super.onSearch(o),this.options.search&&UtilsCookie.setCookie(this,UtilsCookie.cookieIds.searchText,this.searchText),UtilsCookie.setCookie(this,UtilsCookie.cookieIds.pageNumber,this.options.pageNumber)}initHeader(...o){this.options.reorderableColumns&&(this.columnsSortOrder=JSON.parse(UtilsCookie.getCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds.reorderColumns))),super.initHeader(...o)}persistReorderColumnsState(o){UtilsCookie.setCookie(o,UtilsCookie.cookieIds.reorderColumns,JSON.stringify(o.columnsSortOrder))}filterBy(...o){super.filterBy(...o),UtilsCookie.setCookie(this,UtilsCookie.cookieIds.filterBy,JSON.stringify(this.filterColumns))}initCookie(){if(!this.options.cookie)return;if(""===this.options.cookieIdTable||""===this.options.cookieExpire||!UtilsCookie.cookieEnabled())return console.error("Configuration error. Please review the cookieIdTable and the cookieExpire property. If the properties are correct, then this browser does not support cookies."),void(this.options.cookie=!1);const o=UtilsCookie.getCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds.sortOrder),e=UtilsCookie.getCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds.sortName),t=UtilsCookie.getCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds.pageNumber),i=UtilsCookie.getCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds.pageList),s=UtilsCookie.getCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds.searchText),r=UtilsCookie.getCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds.columns);if("boolean"==typeof r&&!r)throw new Error("The cookie value of filterBy must be a json!");let l={};try{l=JSON.parse(r)}catch(o){throw new Error("Could not parse the json of the columns cookie!",r)}if(this.options.sortOrder=o||this.options.sortOrder,this.options.sortName=e||this.options.sortName,this.options.pageNumber=t?+t:this.options.pageNumber,this.options.pageSize=i?i===this.options.formatAllRows()?i:+i:this.options.pageSize,this.options.searchText=s||"",l)for(const o of this.columns)o.visible=l.filter((e=>!!this.isSelectionColumn(o)||(e instanceof Object?e.field===o.field:e===o.field))).length>0||!o.switchable}getCookies(){const o=this,e={};return $.each(UtilsCookie.cookieIds,((t,i)=>{e[t]=UtilsCookie.getCookie(o,o.options.cookieIdTable,i),"columns"===t&&(e[t]=JSON.parse(e[t]))})),e}deleteCookie(o){""!==o&&UtilsCookie.cookieEnabled()&&UtilsCookie.deleteCookie(this,this.options.cookieIdTable,UtilsCookie.cookieIds[o])}};