import*as UtilsFilterControl from"./utils.js";const Utils=$.fn.bootstrapTable.utils;$.extend($.fn.bootstrapTable.defaults,{filterControl:!1,filterControlVisible:!0,onColumnSearch:(t,o)=>!1,onCreatedControls:()=>!1,alignmentSelectControlOptions:void 0,filterTemplate:{input:(t,o,e,i)=>Utils.sprintf('<input type="search" class="form-control bootstrap-table-filter-control-%s search-input" style="width: 100%;" placeholder="%s" value="%s">',o,void 0===e?"":e,void 0===i?"":i),select:({options:t},o)=>Utils.sprintf('<select class="form-control bootstrap-table-filter-control-%s" style="width: 100%;" dir="%s"></select>',o,UtilsFilterControl.getDirectionOfSelectOptions(t.alignmentSelectControlOptions)),datepicker:(t,o,e)=>Utils.sprintf('<input type="text" class="form-control date-filter-control bootstrap-table-filter-control-%s" style="width: 100%;" value="%s">',o,void 0===e?"":e)},disableControlWhenSearch:!1,searchOnEnterKey:!1,showFilterControlSwitch:!1,valuesFilterControl:[]}),$.extend($.fn.bootstrapTable.columnDefaults,{filterControl:void 0,filterDataCollector:void 0,filterData:void 0,filterDatepickerOptions:{},filterStrictSearch:!1,filterStartsWithSearch:!1,filterControlPlaceholder:"",filterDefault:"",filterOrderBy:"asc"}),$.extend($.fn.bootstrapTable.Constructor.EVENTS,{"column-search.bs.table":"onColumnSearch","created-controls.bs.table":"onCreatedControls"}),$.extend($.fn.bootstrapTable.defaults.icons,{clear:{bootstrap3:"glyphicon-trash icon-clear"}[$.fn.bootstrapTable.theme]||"fa-trash",filterControlSwitchHide:{bootstrap3:"glyphicon-zoom-out icon-zoom-out",materialize:"zoom_out"}[$.fn.bootstrapTable.theme]||"fa-search-minus",filterControlSwitchShow:{bootstrap3:"glyphicon-zoom-in icon-zoom-in",materialize:"zoom_in"}[$.fn.bootstrapTable.theme]||"fa-search-plus"}),$.extend($.fn.bootstrapTable.locales,{formatFilterControlSwitch:()=>"Hide/Show controls",formatFilterControlSwitchHide:()=>"Hide controls",formatFilterControlSwitchShow:()=>"Show controls"}),$.extend($.fn.bootstrapTable.defaults,$.fn.bootstrapTable.locales),$.extend($.fn.bootstrapTable.defaults,{formatClearSearch:()=>"Clear filters"}),$.fn.bootstrapTable.methods.push("triggerSearch"),$.fn.bootstrapTable.methods.push("clearFilterControl"),$.fn.bootstrapTable.methods.push("toggleFilterControl"),$.BootstrapTable=class extends $.BootstrapTable{init(){this.options.filterControl&&(this.options.valuesFilterControl=[],this.$el.on("reset-view.bs.table",(()=>{if(!this.options.height)return;const t=UtilsFilterControl.getControlContainer(this);(t.find("select").length>0||t.find('input:not([type="checkbox"]):not([type="radio"])').length>0)&&!this.options.filterControlContainer||UtilsFilterControl.createControls(this,t)})).on("post-header.bs.table",(()=>{UtilsFilterControl.setValues(this)})).on("post-body.bs.table",(()=>{this.options.height&&!this.options.filterControlContainer&&UtilsFilterControl.fixHeaderCSS(this),this.$tableLoading.css("top",this.$header.outerHeight()+1)})).on("column-switch.bs.table",(()=>{UtilsFilterControl.setValues(this)})).on("load-success.bs.table",(()=>{this.enableControls(!0)})).on("load-error.bs.table",(()=>{this.enableControls(!0)}))),super.init()}initHeader(){super.initHeader(),this.options.filterControl&&!this.options.height&&UtilsFilterControl.createControls(this,UtilsFilterControl.getControlContainer(this))}initBody(){super.initBody(),UtilsFilterControl.syncControls(this),UtilsFilterControl.initFilterSelectControls(this)}initSearch(){const t=this,o=$.isEmptyObject(t.filterColumnsPartial)?null:t.filterColumnsPartial;super.initSearch(),"server"!==this.options.sidePagination&&null!==o&&(t.data=o?t.data.filter(((e,i)=>{const r=[],s=Object.keys(e),l=Object.keys(o);return s.concat(l.filter((t=>!s.includes(t)))).forEach((s=>{const l=t.columns[t.fieldsColumnsIndex[s]],n=(o[s]||"").toLowerCase();let a,h=Utils.unescapeHTML(Utils.getItemField(e,s,!1));""===n?a=!0:(l&&l.searchFormatter&&(h=$.fn.bootstrapTable.utils.calculateObjectValue(t.header,t.header.formatters[$.inArray(s,t.header.fields)],[h,e,i],h)),-1!==$.inArray(s,t.header.fields)&&(null==h?a=!1:"object"==typeof h?h.forEach((o=>{a||(this.options.searchAccentNeutralise&&(o=Utils.normalizeAccent(o)),a=t.isValueExpected(n,o,l,s))})):"string"!=typeof h&&"number"!=typeof h&&"boolean"!=typeof h||(this.options.searchAccentNeutralise&&(h=Utils.normalizeAccent(h)),a=t.isValueExpected(n,h,l,s)))),r.push(a)})),!r.includes(!1)})):t.data,t.unsortedData=[...t.data])}isValueExpected(t,o,e,i){let r=!1;r=e.filterStrictSearch?o.toString().toLowerCase()===t.toString().toLowerCase():e.filterStartsWithSearch?0===`${o}`.toLowerCase().indexOf(t):`${o}`.toLowerCase().includes(t);const s=/(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm.exec(t);if(s){const t=s[1]||`${s[5]}l`,e=s[2]||s[3],i=parseInt(o,10),l=parseInt(e,10);switch(t){case">":case"<l":r=i>l;break;case"<":case">l":r=i<l;break;case"<=":case"=<":case">=l":case"=>l":r=i<=l;break;case">=":case"=>":case"<=l":case"=<l":r=i>=l}}if(e.filterCustomSearch){const s=Utils.calculateObjectValue(this,e.filterCustomSearch,[t,o,i,this.options.data],!0);null!==s&&(r=s)}return r}initColumnSearch(t){if(UtilsFilterControl.copyValues(this),t){this.filterColumnsPartial=t,this.updatePagination();for(const o in t)this.trigger("column-search",o,t[o])}}onColumnSearch({currentTarget:t,keyCode:o}){if($.inArray(o,[37,38,39,40])>-1)return;UtilsFilterControl.copyValues(this);const e=$.trim($(t).val()),i=$(t).closest("[data-field]").data("field");this.trigger("column-search",i,e),$.isEmptyObject(this.filterColumnsPartial)&&(this.filterColumnsPartial={}),e?this.filterColumnsPartial[i]=e:delete this.filterColumnsPartial[i],this.options.pageNumber=1,this.enableControls(!1),this.onSearch({currentTarget:t},!1)}initToolbar(){this.showToolbar=this.showToolbar||this.options.showFilterControlSwitch,this.showSearchClearButton=this.options.filterControl&&this.options.showSearchClearButton,this.options.showFilterControlSwitch&&(this.buttons=Object.assign(this.buttons,{filterControlSwitch:{text:this.options.filterControlVisible?this.options.formatFilterControlSwitchHide():this.options.formatFilterControlSwitchShow(),icon:this.options.filterControlVisible?this.options.icons.filterControlSwitchHide:this.options.icons.filterControlSwitchShow,event:this.toggleFilterControl,attributes:{"aria-label":this.options.formatFilterControlSwitch(),title:this.options.formatFilterControlSwitch()}}})),super.initToolbar()}resetSearch(t){this.options.filterControl&&this.options.showSearchClearButton&&this.clearFilterControl(),super.resetSearch(t)}clearFilterControl(){if(this.options.filterControl){const t=this,o=UtilsFilterControl.collectBootstrapCookies(),e=this.$el.closest("table"),i=UtilsFilterControl.getSearchControls(t),r=Utils.getSearchInput(this);let s=!1,l=0;if($.each(t.options.valuesFilterControl,((t,o)=>{s=!!s||""!==o.value,o.value=""})),$.each(t.options.filterControls,((t,o)=>{o.text=""})),UtilsFilterControl.setValues(t),clearTimeout(l),l=setTimeout((()=>{o&&o.length>0&&$.each(o,((o,e)=>{void 0!==t.deleteCookie&&t.deleteCookie(e)}))}),t.options.searchTimeOut),!s)return;if(!(i.length>0))return;if(this.filterColumnsPartial={},$(i[0]).trigger("INPUT"===i[0].tagName?"keyup":"change",{keyCode:13}),r.length>0&&t.resetSearch(),t.options.sortName!==e.data("sortName")||t.options.sortOrder!==e.data("sortOrder")){const o=this.$header.find(Utils.sprintf('[data-field="%s"]',$(i[0]).closest("table").data("sortName")));o.length>0&&(t.onSort({type:"keypress",currentTarget:o}),$(o).find(".sortable").trigger("click"))}}}triggerSearch(){UtilsFilterControl.getSearchControls(this).each((function(){const t=$(this);t.is("select")?t.change():t.keyup()}))}enableControls(t){if(this.options.disableControlWhenSearch&&"server"===this.options.sidePagination){const o=UtilsFilterControl.getSearchControls(this);t?o.removeProp("disabled"):o.prop("disabled","disabled")}}toggleFilterControl(){this.options.filterControlVisible=!this.options.filterControlVisible;const t=UtilsFilterControl.getControlContainer(this).find(".filter-control, .no-filter-control");this.options.filterControlVisible?t.show():(t.hide(),this.clearFilterControl());const o=this.options.showButtonIcons?this.options.filterControlVisible?this.options.icons.filterControlSwitchHide:this.options.icons.filterControlSwitchShow:"",e=this.options.showButtonText?this.options.filterControlVisible?this.options.formatFilterControlSwitchHide():this.options.formatFilterControlSwitchShow():"";this.$toolbar.find(">.columns").find(".filter-control-switch").html(`${Utils.sprintf(this.constants.html.icon,this.options.iconsPrefix,o)} ${e}`)}};