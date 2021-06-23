const { stripIndents } = require('common-tags');

module.exports = {
    name: "mute",
    aliases: ['m'],
    description: "Mute a member in your Discord Server!",
    async execute(client, message, args, Discord) {

        if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("You don't have the `MANAGE_ROLES` permission!");
        if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.reply("I require the `MANAGE_ROLES` permission for this command!");

        const mentioned = message.mentions.members.first();
         if(!mentioned) return message.reply("You didn't mention someone for me to mute!")
         if(mentioned.id === message.guild.owner.user.id) return message.reply("You can't mute the owner of the server!")
         if(mentioned.id === client.user.id) return message.reply("You can't mute the bot!")
         if(mentioned.id === message.author.id) return message.reply("You can't mute yourself, you idiot!")

         const main_role = message.guild.roles.cache.find(role => role.name === "Members")
         const mute_role = message.guild.roles.cache.find(role => role.name === "Muted")
         if(!mute_role) {
             message.reply("I see you don't have a muted role here. Let me fix that.")

             message.guild.roles.create({
                 data: {
                     name: "Muted",
                     color: "#FF0000",
                     permissions: SEND_MESSAGES=false,
                     hoist: true,
                 },
                 reason: "There was no role named Muted here, So I created this one. -Javpurpose"
             })
              await message.channel.send("Finished! Go ahead and run this command again!")
          if(!main_role) {
              message.reply("No members role detected.... making a Members role...!")

              message.guild.roles.create({
                  data: {
                      name: "Members",
                      color: "#00FF02",
                      hoist: true,
                  },
                  reason: "There was no members role detected in my system. So I created this one. -Javpurpose"
              })
               await message.channel.send("Finished! Go ahead and run this command again!")
          }
          if(mentioned.user.id !== main_role) return message.reply("You can't mute a muted member!");

          if(mentioned.member.roles.highest.position < client.members.roles.highest.position) return message.reply(`I can't mute that member! Try dragging my role above the mentioned user (${mentioned})' highest role!`);
          if(client.user.roles.highest.position < mute_role.position) return message.reply(`I can't manage the Mute Role! Try dragging my role above the mute role!`);
          if(client.user.roles.highest.position < main_role.position) return message.reply(`I can't manage the Members role! Try dragging my role above the Members role!`);
        } else {
             try {
                const reason = args.slice(1).join(" ")
                await mentioned.roles.remove(main_role)
                await mentioned.roles.add(mute_role)

                const successEmbed = new Discord.MessageEmbed()
                  successEmbed.setColor("#00FF02")
                  successEmbed.setTitle("Finished!")
                  successEmbed.addField(name="Muted Member", value=`<@${mentioned.id}>`, inline=true)
                  successEmbed.addField(name="Moderator", value=`<@${message.author.id}>`, inline=true)
                  successEmbed.addField(name="Reason", value=reason || "No Reason Provided by Moderator!", inline=true)
                    message.channel.send(successEmbed)
            } catch(error) {
                message.channel.send(stripIndents`
                ☠️ **ERROR** ☠️

                \`\`\`${error}\`\`\`
                This should not have happened. Please report this error here <https://discord.gg/wvCDhsXEDa>
                `)
                console.log(error)
            }
         }
    }
}
