require=require("esm")(module);const fs=require("fs"),chalk=require("chalk"),Constants=require("../src/constants/index.js").default;let errorSum=0;const exampleFilesFolder="./bootstrap-table-examples/",exampleFilesFound=fs.existsSync(exampleFilesFolder);let exampleFiles=[];exampleFilesFound?exampleFiles=[...fs.readdirSync(exampleFilesFolder+"welcomes"),...fs.readdirSync(exampleFilesFolder+"options"),...fs.readdirSync(exampleFilesFolder+"column-options"),...fs.readdirSync(exampleFilesFolder+"methods")]:(console.log(chalk.yellow(chalk.bold("Warning: ")+"Cant check if example files are correct formatted and have a valid url.")),console.log(chalk.yellow(chalk.bold("Warning: ")+'To enable that check, please clone the "bootstrap-table-examples" repository in the tools folder or create a symlink (if you already cloned the repository on an other path).')));class API{constructor(){this.init(),this.sortOptions(),this.check()}sortOptions(){this.options.sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase())))}check(){const e=`../site/docs/api/${this.file}`,t={},s=fs.readFileSync(e).toString().split("## "),o=s.slice(0,1),i=[],l=/\[.*\]\(.*\/(.*\.html)\)/m;for(const e of s.slice(1))t[e.split("\n")[0]]=e;Object.keys(t);for(const[e,s]of this.options.entries())try{if(t[s]){o.push(t[s]);const e=t[s].split("\n\n- ");for(let t=0;t<this.attributes.length;t++){const o=this.attributes[t];if(this.ignore&&this.ignore[s]&&this.ignore[s].includes(o))continue;const n=e[t+1].trim();if("Example"===o&&exampleFilesFound){const e=l.exec(n);if(!e){i.push(chalk.red(`[${s}] missing or wrong formatted example`,`"${n}"`));continue}exampleFiles.includes(e[1])||i.push(chalk.red(`[${s}] example '${e[1]}' could not be found`))}n&&-1!==n.indexOf(`**${o}:**`)||i.push(chalk.red(`[${s}] missing '${o}'`))}}else i.push(chalk.red(`[${s}] option could not be found`))}catch(e){console.log(e)}errorSum+=i.length,i.length>0&&(console.log("-------------------------"),console.log(`Checking file: ${e}`),console.log("-------------------------"),i.forEach((e=>{console.log(e)}))),fs.writeFileSync(e,o.join("## "))}}class TableOptions extends API{init(){this.file="table-options.md",this.options=Object.keys(Constants.DEFAULTS).filter((e=>!/^(on|format)[A-Z]/.test(e))),this.options.unshift("-"),this.attributes=["Attribute","Type","Detail","Default","Example"],this.ignore={totalRows:["Example"],totalNotFiltered:["Example"],virtualScrollItemHeight:["Example"]}}}class ColumnOptions extends API{init(){this.file="column-options.md",this.options=Object.keys(Constants.COLUMN_DEFAULTS),this.attributes=["Attribute","Type","Detail","Default","Example"]}}class Methods extends API{init(){this.file="methods.md",this.options=Constants.METHODS,this.attributes=["Parameter","Detail","Example"]}}class Events extends API{init(){this.file="events.md",this.options=Object.values(Constants.EVENTS),this.attributes=["jQuery Event","Parameter","Detail"]}}class Localizations extends API{init(){this.file="localizations.md",this.options=Object.keys(Constants.LOCALES.en),this.attributes=["Parameter","Default"]}}new TableOptions,new ColumnOptions,new Methods,new Events,new Localizations,0===errorSum&&(console.log("Good job! Anything up to date!"),process.exit(0)),process.exit(1);