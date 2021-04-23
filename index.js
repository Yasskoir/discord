var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "HELLO C'Yasskoir bot !!",
assets : {
large_image : "zootopia",
large_text : "Your Status" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Mon twitch !!" , url : "https://www.twitch.tv/yasskoir"},{label : "Instagram",url : "https://www.instagram.com"}]
}
})
})
client.login({ clientId : "766052651530977313" }).catch(console.error);