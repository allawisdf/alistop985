const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("530818619974746112")
setInterval(function() {
channel.send(`Welcome to server AliSTOP`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
