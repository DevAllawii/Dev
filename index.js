const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); 

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch(process.env.channel) 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: process.env.guild, 
       selfMute: true,
       selfDeaf: true,
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 

client.login(process.env.token);