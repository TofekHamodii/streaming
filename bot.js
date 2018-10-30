const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("#Road, To 2k.",{type: 'WATCHING'});
  
  });

client.login(process.env.BOT_TOKEN);
