$((function(){$.getJSON("https://examples.wenzhixin.net.cn/opencollective/supports.json",(function(t){var n=[{title:"Gold",minimum:200},{title:"Bronze",minimum:20,maximum:200},{title:"Backer",maximum:20}];n.forEach((function(n){n.supports=t.filter((function(t){return t.totalDonations>=(n.minimum||0)&&t.totalDonations<(n.maximum||Number.MAX_VALUE)}))})),new window.Vue({el:"#supports",data:{ranks:n}}),$("#supports").show()}))}));