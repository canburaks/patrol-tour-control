const Utils=$.fn.bootstrapTable.utils;$.extend($.fn.bootstrapTable.defaults,{editable:!0,onEditableInit:()=>!1,onEditableSave:(t,e,a,i,s)=>!1,onEditableShown:(t,e,a,i)=>!1,onEditableHidden:(t,e,a,i)=>!1}),$.extend($.fn.bootstrapTable.columnDefaults,{alwaysUseFormatter:!1}),$.extend($.fn.bootstrapTable.Constructor.EVENTS,{"editable-init.bs.table":"onEditableInit","editable-save.bs.table":"onEditableSave","editable-shown.bs.table":"onEditableShown","editable-hidden.bs.table":"onEditableHidden"}),$.BootstrapTable=class extends $.BootstrapTable{initTable(){super.initTable(),this.options.editable&&(this.editedCells=[],$.each(this.columns,((t,e)=>{if(!e.editable)return;const a={},i=[],s="editable-",n=(t,e)=>{const i=t.replace(/([A-Z])/g,(t=>`-${t.toLowerCase()}`));0===i.indexOf(s)&&(a[i.replace(s,"data-")]=e)};$.each(this.options,n),e.formatter=e.formatter||(t=>t),e._formatter=e._formatter?e._formatter:e.formatter,e.formatter=(t,s,d)=>{let o=Utils.calculateObjectValue(e,e._formatter,[t,s,d],t);if(o=null==o?this.options.undefinedText:o,void 0!==this.options.uniqueId&&!e.alwaysUseFormatter){const a=Utils.getItemField(s,this.options.uniqueId,!1);-1!==$.inArray(e.field+a,this.editedCells)&&(o=t)}$.each(e,n),$.each(a,((t,e)=>{i.push(` ${t}="${e}"`)}));let l=!1;const r=Utils.calculateObjectValue(e,e.editable,[d,s],{});return r.hasOwnProperty("noEditFormatter")&&(l=r.noEditFormatter(t,s,d)),!1===l?`<a href="javascript:void(0)"\n            data-name="${e.field}"\n            data-pk="${s[this.options.idField]}"\n            data-value="${o}"\n            ${i.join("")}></a>`:l}})))}initBody(t){super.initBody(t),this.options.editable&&($.each(this.columns,((t,e)=>{if(!e.editable)return;const a=this.getData({escape:!0}),i=this.$body.find(`a[data-name="${e.field}"]`);i.each(((t,i)=>{const s=$(i),n=s.closest("tr").data("index"),d=a[n],o=Utils.calculateObjectValue(e,e.editable,[n,d,s],{});s.editable(o)})),i.off("save").on("save",(({currentTarget:t},{submitValue:a})=>{const i=$(t),s=this.getData(),n=i.parents("tr[data-index]").data("index"),d=s[n],o=d[e.field];if(void 0!==this.options.uniqueId&&!e.alwaysUseFormatter){const t=Utils.getItemField(d,this.options.uniqueId,!1);-1===$.inArray(e.field+t,this.editedCells)&&this.editedCells.push(e.field+t)}a=Utils.escapeHTML(a),i.data("value",a),d[e.field]=a,this.trigger("editable-save",e.field,d,n,o,i),this.initBody()})),i.off("shown").on("shown",(({currentTarget:t},a)=>{const i=$(t),s=this.getData()[i.parents("tr[data-index]").data("index")];this.trigger("editable-shown",e.field,s,i,a)})),i.off("hidden").on("hidden",(({currentTarget:t},a)=>{const i=$(t),s=this.getData()[i.parents("tr[data-index]").data("index")];this.trigger("editable-hidden",e.field,s,i,a)}))})),this.trigger("editable-init"))}getData(t){const e=super.getData(t);if(t&&t.escape)for(const t of e)for(const[e,a]of Object.entries(t))t[e]=Utils.unescapeHTML(a);return e}};