const emojis = require('../storage/emojis.json');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ping",
    aliases: [],
    description: "Pong!",
    async execute(client, message) {

     const user = message.author;

      message.channel.send(`Pinging... please wait...! ${emojis.animated_emojis.loadingEmoji}`).then(msg => {
       setTimeout(function() {
        let pingEmbed = new MessageEmbed()
         pingEmbed.setColor("RANDOM");
         pingEmbed.setAuthor(`${message.author.username}`, user.displayAvatarURL());
         pingEmbed.setTitle(`${client.user.username} Ping!`);
         pingEmbed.addFields({
           name: "Heartbeat",
           value: `${client.ws.ping}ms`
         },
         {
           name: "Uptime",
           value: `${process.uptime()}s`
         })
        msg.edit(pingEmbed)
       }, 2669)
      })
    }
}
