const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NzMwNDc0OTE2NjQxNTA1Mzkw.Xw8V-g.XYYUUfSDq_3dAmPqXirqeFtmuNo');
