const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === '!serverstatus') {
    checkServerStatus(message);
  }
});

function checkServerStatus(message) {
  // Replace "YOUR_SERVER_IP" and "YOUR_SERVER_PORT" with the IP and port of your Minecraft server
  const serverIP = "YOUR_SERVER_IP";
  const serverPort = "YOUR_SERVER_PORT";

  const mcServer = require('minecraft-server-util');
  mcServer.ping({ host: serverIP, port: serverPort }, function(res) {
    if (res === null) {
      message.channel.send("The Minecraft server is offline");
    } else {
      message.channel.send(`The Minecraft server is online with ${res.players.online} out of ${res.players.max} players`);
    }
  });
}

client.login('YOUR_DISCORD_BOT_TOKEN');
