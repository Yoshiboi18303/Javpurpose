const { MessageEmbed } = require('discord.js');
const ms = require('ms');
const { stripIndents } = require('common-tags');
const emojis = require('../storage/emojis.json')

module.exports = {
  name: "givestart",
  aliases: ['gstart'],
  description: "Start a giveaway for a specified prize!",
  async execute(client, message, args) {

    const channel = message.mentions.channels.first();
    const prize = args.slice(2).join(" ");
    
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply("You don't have the `MANAGE_GUILD` permission!");
    
    if(!args[0]) {
      let responses = ['Did you forget about the time?',"We can't wait for thin air minutes!","Please provide a time!"];
      let response = Math.floor((Math.random() * responses.length));
      message.reply(`${responses[response]}`);
    }
    if(!args[0].endsWith('d') && !args[0].endsWith('h') && !args[0].endsWith('m')) return message.reply("**BAD FORMAT** | Please format the time with d (days), h (hours), and/or m (minutes)!");
    if(isNaN(args[0][0])) return message.mentions.channels.first();
    if(!channel) return message.reply("I couldn't find that channel!");
    if(!prize) {
      let responses = ['Are you giving away thin air?','Failure, bad prize.',"I can't giveaway thin air!",'Please include a prize!'];
      let response = Math.floor((Math.random() * responses.length));
      message.reply(`${responses[response]}`)
    }

    try {
     message.channel.send(`Giveaway has started in ${channel}!`)
      const successEmbed = new MessageEmbed()
       successEmbed.setColor("#00FF02");
       successEmbed.setTitle(`${emojis.animated_emojis.giveawayStarted} Giveaway! ${emojis.animated_emojis.giveawayStarted}`);
       successEmbed.setDescription(`**REACT WITH 🎉 TO ENTER!**`);
       successEmbed.addField(name="Prize:", value=`**${prize}**`);
       successEmbed.addField(name="Host:", value=`${message.author}`);
       successEmbed.setFooter("Good luck to all!");
       successEmbed.setTimestamp(Date.now() + ms(args[0]));

     let giveawayEmbedMessage = await channel.send(successEmbed);
      giveawayEmbedMessage.react('🎉');
      giveawayEmbedMessage.pin({ reason: "Just in case the channel gets flooded" })

    setTimeout(() => {
      if(giveawayEmbedMessage.reactions.cache.size==0) return channel.send(`No one has reacted, so no one won the prize of ${prize}... 😭`);

      giveawayEmbedMessage.delete();

      const giveawayEndedEmbed = new MessageEmbed()
       giveawayEndedEmbed.setColor("#00FF02")
       giveawayEndedEmbed.setTitle(`${emojis.animated_emojis.giveawayStarted} Giveaway Ended! ${emojis.animated_emojis.giveawayStarted}`);
       giveawayEndedEmbed.addField(name="Prize:", value=`**${prize}**`);
       giveawayEndedEmbed.addField(name="Host:", value=`${message.author}`);
       giveawayEndedEmbed.addField(name="Winner:", value=winner || "None... 😭")
       giveawayEndedEmbed.setFooter("Good luck to all!");
       giveawayEndedEmbed.setTimestamp(Date.now() + ms(args[0]));

      let winner = giveawayEmbedMessage.reactions.cache.get('🎉').users.cache.filter(u => !u.bot).random();
      channel.send(`${emojis.animated_emojis.giveawayStarted} Congratulations ${winner}, you just won the prize of **${prize}**! ${emojis.animated_emojis.giveawayStarted}`)
     }, ms(args[0]));
    } catch(error) {
        message.channel.send(stripIndents`
         ☠️ **ERROR** ☠️

          \`\`\`${error}\`\`\`
          This should not have happened. Please report this error here <https://discord.gg/wvCDhsXEDa>
         `)    
    }
  }
}
