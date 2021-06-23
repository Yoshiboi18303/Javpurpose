const { stripIndents } = require('common-tags')

module.exports = {
    name: "kick",
    aliases: ['boot'],
    description: "Kick a member from your Discord Server!",
    async execute(client, message, args, Discord) {

      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("You don't have the `KICK_MEMBERS` permission!");
      if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.reply("I require the `KICK_MEMBERS` permission for this command!");

        const mentioned = message.mentions.members.first();
         if(!mentioned) return message.reply("You didn't mention someone for me to kick!");
         if(mentioned.user.id === message.author.id) return message.reply("You can't kick yourself!");
         if(mentioned.user.id === message.guild.owner.user.id) return message.reply("You can't kick the owner of the server!");
         if(mentioned.user.id === client.user.id) return message.reply("You can't kick the bot!");
         if(mentioned.member.roles.highest.position < client.user.roles.highest.position) return message.reply(`I can't kick that member! Try dragging my role above the mentioned user (${mentioned})' highest role!`)

      try {
         const reason = args.slice(1).join(" ")
         
        const memberTarget = message.guild.members.cache.get(mentioned.id);
          memberTarget.kick();

        const successEmbed = new Discord.MessageEmbed()
          successEmbed.setColor("#00FF02")
          successEmbed.setTitle("Finished!")
          successEmbed.addField(name="Kicked Member", value=`<@${mentioned.id}>`, inline=true)
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
