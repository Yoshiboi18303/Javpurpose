const { stripIndents } = require('common-tags');
const emojis = require('../storage/emojis.json');

module.exports = {
    name: "ban",
    aliases: ['hammer'],
    description: "Ban a member from your Discord Server!",
    async execute(client, message, args, Discord) {

      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("<a:Animated_Cross:854142043365441546> You don't have the `BAN_MEMBERS` permission!")
      if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply("<a:Animated_Cross:854142043365441546> I require the `BAN_MEMBERS` permission for this command!");

        const mentioned = message.mentions.members.first();
         if(!mentioned) return message.reply(`${emojis.animated_emojis.crossemoji} You didn't mention someone for me to ban!`);
         if(mentioned.user.id === message.author.id) return message.reply(`${emojis.animated_emojis.crossemoji} You can't ban yourself!`);
         if(mentioned.user.id === message.guild.owner.user.id) return message.reply(`${emojis.animated_emojis.crossemoji} You can't ban the owner of this server!`);
         if(mentioned.user.id === client.user.id) return message.reply(`${emojis.animated_emojis.crossemoji} You can't ban the bot!`);
         if(mentioned.member.hasPermission('ADMINISTRATOR')) return message.reply("<a:Animated_Cross:854142043365441546> Sorry, I can't ban that member as they have the `ADMINISTRATOR` permission!");
         if(mentioned.member.roles.highest.position < client.user.roles.highest.position) return message.reply(`${emojis.animated_emojis.crossemoji} I can't ban that member! Try dragging my role above the mentioned user (${mentioned})' highest role!`)
      try {
         const reason = args.slice(1).join(" ")
         
        const memberTarget = message.guild.members.cache.get(mentioned.id);
          memberTarget.ban();

        const successEmbed = new Discord.MessageEmbed()
          successEmbed.setColor("#00FF02")
          successEmbed.setTitle("Finished!")
          successEmbed.addField(name="Banned Member", value=`<@${mentioned.id}>`, inline=true)
          successEmbed.addField(name="Moderator", value=`<@${message.author.id}>`, inline=true)
          successEmbed.addField(name="Reason", value=reason || "No Reason Provided by Moderator!", inline=true)
            message.channel.send(successEmbed)
        } catch(error) {
         message.channel.send(stripIndents`
         ☠️ **ERROR** ☠️

          \`\`\`${error}\`\`\`
          This should not have happened. Please report this error here <https://discord.gg/wvCDhsXEDa>
         `)
        }
    }
}
