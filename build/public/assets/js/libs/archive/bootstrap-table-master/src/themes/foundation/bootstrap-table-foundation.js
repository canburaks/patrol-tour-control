$.extend($.fn.bootstrapTable.defaults,{classes:"table hover",buttonsPrefix:"",buttonsClass:"button"}),$.fn.bootstrapTable.theme="foundation",$.BootstrapTable=class extends $.BootstrapTable{initConstants(){super.initConstants(),this.constants.classes.buttonsGroup="button-group",this.constants.classes.buttonsDropdown="dropdown-container",this.constants.classes.paginationDropdown="",this.constants.classes.dropdownActive="is-active",this.constants.classes.paginationActive="current",this.constants.classes.buttonActive="success",this.constants.html.toolbarDropdown=['<div class="dropdown-pane" data-dropdown><ul class="vertical menu">',"</ul></div>"],this.constants.html.toolbarDropdownItem='<li class="dropdown-item-marker"><label class="dropdown-item">%s</label></li>',this.constants.html.toolbarDropdownSeparator="<li><hr></li>",this.constants.html.pageDropdown=['<div class="dropdown-pane" id="pagination-list-id" data-dropdown><ul class="vertical menu">',"</ul></div>"],this.constants.html.pageDropdownItem='<li class="dropdown-item %s"><a href="#">%s</a></li>',this.constants.html.dropdownCaret='<i class="fa fa-angle-down"></i>',this.constants.html.pagination=['<ul class="pagination%s">',"</ul>"],this.constants.html.paginationItem='<li><a class="page-item%s" aria-label="%s" href="#">%s</a></li>',this.constants.html.inputGroup='<div class="input-group">%s <div class="input-group-button">%s</div></div>',this.constants.html.searchInput='<input class="%s input-%s input-group-field" type="search" placeholder="%s">'}initToolbar(){super.initToolbar(),this.handleToolbar()}handleToolbar(){this.$toolbar.find(".dropdown-toggle").length&&(this.$toolbar.find(".dropdown-toggle").each(((t,n)=>{if(!$(n).next().length)return;const o=`toolbar-columns-id${t}`;$(n).next().attr("id",o),$(n).attr("data-toggle",o);const s=$(n).next().attr("data-position","bottom").attr("data-alignment","right");new window.Foundation.Dropdown(s)})),this._initDropdown())}initPagination(){if(super.initPagination(),this.options.pagination&&this.paginationParts.includes("pageSize")){const t=this.$pagination.find(".dropdown-toggle");t.attr("data-toggle",t.next().attr("id"));const n=this.$pagination.find(".dropdown-pane").attr("data-position","top").attr("data-alignment","left");new window.Foundation.Dropdown(n),this._initDropdown()}}_initDropdown(){const t=this.$container.find(".dropdown-toggle");t.off("click").on("click",(n=>{const o=$(n.currentTarget);n.stopPropagation(),o.next().foundation("toggle"),t.not(o).length&&t.not(o).next().foundation("close")})),$(document).off("click.bs.dropdown.foundation").on("click.bs.dropdown.foundation",(()=>{t.next().foundation("close")}))}};