$.akottr.dragtable.prototype._restoreState=function(e){let t=0;for(const[o,s]of Object.entries(e)){const e=this.originalTable.el.find(`th[data-field="${o}"]`);e.length?(this.originalTable.startIndex=e.prevAll().length+1,this.originalTable.endIndex=parseInt(s,10)+1-t,this._bubbleCols()):t++}};const filterFn=()=>{Array.prototype.filter||(Array.prototype.filter=function(e){if(null==this)throw new TypeError;const t=Object(this),o=t.length>>>0;if("function"!=typeof e)throw new TypeError;const s=[],r=arguments.length>=2?arguments[1]:void 0;for(let i=0;i<o;i++)if(i in t){const o=t[i];e.call(r,o,i,t)&&s.push(o)}return s})};$.extend($.fn.bootstrapTable.defaults,{reorderableColumns:!1,maxMovingRows:10,onReorderColumn:e=>!1,dragaccept:null}),$.extend($.fn.bootstrapTable.Constructor.EVENTS,{"reorder-column.bs.table":"onReorderColumn"}),$.fn.bootstrapTable.methods.push("orderColumns"),$.BootstrapTable=class extends $.BootstrapTable{initHeader(...e){super.initHeader(...e),this.options.reorderableColumns&&this.makeRowsReorderable()}_toggleColumn(...e){super._toggleColumn(...e),this.options.reorderableColumns&&this.makeRowsReorderable()}toggleView(...e){super.toggleView(...e),this.options.reorderableColumns&&(this.options.cardView||this.makeRowsReorderable())}resetView(...e){super.resetView(...e),this.options.reorderableColumns&&this.makeRowsReorderable()}makeRowsReorderable(e=null){try{$(this.$el).dragtable("destroy")}catch(e){}$(this.$el).dragtable({maxMovingRows:this.options.maxMovingRows,dragaccept:this.options.dragaccept,clickDelay:200,dragHandle:".th-inner",restoreState:e||this.columnsSortOrder,beforeStop:e=>{const t={};e.el.find("th").each(((e,o)=>{t[$(o).data("field")]=e})),this.columnsSortOrder=t,this.options.cookie&&this.persistReorderColumnsState(this);const o=[],s=[],r=[];let i=[],l=-1;const n=[];if(this.$header.find("th:not(.detail)").each(((e,t)=>{o.push($(t).data("field")),s.push($(t).data("formatter"))})),o.length<this.columns.length){i=this.columns.filter((e=>!e.visible));for(let e=0;e<i.length;e++)o.push(i[e].field),s.push(i[e].formatter)}for(let e=0;e<o.length;e++)l=this.fieldsColumnsIndex[o[e]],-1!==l&&(this.fieldsColumnsIndex[o[e]]=e,this.columns[l].fieldIndex=e,r.push(this.columns[l]));this.columns=r,filterFn(),$.each(this.columns,((e,t)=>{let o=!1;const s=t.field;this.options.columns[0].filter((e=>!(!o&&e.field===s)||(n.push(e),o=!0,!1)))})),this.options.columns[0]=n,this.header.fields=o,this.header.formatters=s,this.initHeader(),this.initToolbar(),this.initSearchText(),this.initBody(),this.resetView(),this.trigger("reorder-column",o)}})}orderColumns(e){this.columnsSortOrder=e,this.makeRowsReorderable()}};