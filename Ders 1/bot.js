const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '+'

client.on('ready', () => {
  console.log(`${client.user.tag} Kendisini aktif hale getirdi!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong! + client.ping + 'ms'');
  }
  
  if (msg.content === 'ping') {
    msg.reply('Pong! + client.ping + 'ms'');
  }
  
  if (msg.content === prefix + 'avatar') {
    msg.channel.sen(msg.aouthor.avatarURL);
  }
});

client.login('tokeninizi yazın.');