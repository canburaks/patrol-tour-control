const debounce=(i,t)=>{let e=0;return(...n)=>{clearTimeout(e),e=setTimeout((()=>{e=0,i(...n)}),t)}};$.extend($.fn.bootstrapTable.defaults,{mobileResponsive:!1,minWidth:562,minHeight:void 0,heightThreshold:100,checkOnInit:!0,columnsHidden:[]}),$.BootstrapTable=class extends $.BootstrapTable{init(...i){if(super.init(...i),!this.options.mobileResponsive||!this.options.minWidth)return;this.options.minWidth<100&&this.options.resizable&&(console.warn("The minWidth when the resizable extension is active should be greater or equal than 100"),this.options.minWidth=100);let t={width:$(window).width(),height:$(window).height()};if($(window).on("resize orientationchange",debounce((()=>{const i=$(window).width(),e=$(window).height(),n=$(document.activeElement);n.length&&["INPUT","SELECT","TEXTAREA"].includes(n.prop("nodeName"))||(Math.abs(t.height-e)>this.options.heightThreshold||t.width!==i)&&(this.changeView(i,e),t={width:i,height:e})}),200)),this.options.checkOnInit){const i=$(window).width(),e=$(window).height();this.changeView(i,e),t={width:i,height:e}}}conditionCardView(){this.changeTableView(!1),this.showHideColumns(!1)}conditionFullView(){this.changeTableView(!0),this.showHideColumns(!0)}changeTableView(i){this.options.cardView=i,this.toggleView()}showHideColumns(i){this.options.columnsHidden.length>0&&this.columns.forEach((t=>{this.options.columnsHidden.includes(t.field)&&t.visible!==i&&this._toggleColumn(this.fieldsColumnsIndex[t.field],i,!0)}))}changeView(i,t){this.options.minHeight?i<=this.options.minWidth&&t<=this.options.minHeight?this.conditionCardView():i>this.options.minWidth&&t>this.options.minHeight&&this.conditionFullView():i<=this.options.minWidth?this.conditionCardView():i>this.options.minWidth&&this.conditionFullView(),this.resetView()}};