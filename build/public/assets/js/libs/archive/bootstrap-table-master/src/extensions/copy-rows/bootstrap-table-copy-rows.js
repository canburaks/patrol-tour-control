const Utils=$.fn.bootstrapTable.utils;$.extend($.fn.bootstrapTable.locales,{formatCopyRows:()=>"Copy Rows"}),$.extend($.fn.bootstrapTable.defaults,$.fn.bootstrapTable.locales),$.extend($.fn.bootstrapTable.defaults.icons,{copy:{bootstrap3:"glyphicon-copy icon-pencil",materialize:"content_copy","bootstrap-table":"icon-copy"}[$.fn.bootstrapTable.theme]||"fa-copy"});const copyText=t=>{const o=document.createElement("textarea");$(o).html(t),document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(t){console.warn("Oops, unable to copy")}$(o).remove()};$.extend($.fn.bootstrapTable.defaults,{showCopyRows:!1,copyWithHidden:!1,copyDelimiter:", ",copyNewline:"\n"}),$.fn.bootstrapTable.methods.push("copyColumnsToClipboard"),$.BootstrapTable=class extends $.BootstrapTable{initToolbar(...t){this.options.showCopyRows&&this.header.stateField&&(this.buttons=Object.assign(this.buttons,{copyRows:{text:this.options.formatCopyRows(),icon:this.options.icons.copy,event:this.copyColumnsToClipboard,attributes:{"aria-label":this.options.formatCopyRows(),title:this.options.formatCopyRows()}}})),super.initToolbar(...t),this.$copyButton=this.$toolbar.find('>.columns [name="copyRows"]'),this.options.showCopyRows&&this.header.stateField&&this.updateCopyButton()}copyColumnsToClipboard(){const t=[];$.each(this.getSelections(),((o,e)=>{const s=[];$.each(this.options.columns[0],((t,i)=>{i.field!==this.header.stateField&&(!this.options.copyWithHidden||this.options.copyWithHidden&&i.visible)&&null!==e[i.field]&&s.push(Utils.calculateObjectValue(i,this.header.formatters[t],[e[i.field],e,o],e[i.field]))})),t.push(s.join(this.options.copyDelimiter))})),copyText(t.join(this.options.copyNewline))}updateSelected(){super.updateSelected(),this.updateCopyButton()}updateCopyButton(){this.options.showCopyRows&&this.header.stateField&&this.$copyButton&&this.$copyButton.prop("disabled",!this.getSelections().length)}};