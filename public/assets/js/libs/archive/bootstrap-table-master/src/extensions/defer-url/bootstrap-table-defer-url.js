$.extend($.fn.bootstrapTable.defaults,{deferUrl:void 0}),$.BootstrapTable=class extends $.BootstrapTable{init(...t){super.init(...t),this.options.deferUrl&&(this.options.url=this.options.deferUrl)}};