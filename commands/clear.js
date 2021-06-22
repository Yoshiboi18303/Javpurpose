module.exports = {
    name: "clear",
    aliases: ['purge'],
    description: "Clear up to 100 messages from a Text Channel!",
    async execute(client, message, args, Discord) {

    const messageAmount = args[0] // <-- Not in there right now (it's just args[0]).
    const channel = args[1]

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the `MANAGE_MESSAGES` permission!")
        if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.reply("I require the `MANAGE_MESSAGES` permission for this command!");

    if(!args[0]) return message.reply("Please specify a number!");
    if(isNaN(args[0])) return message.reply(`**INVALID NUMBER**\n${emojis.animated_emojis.crossemoji} Please Specify a **NUMBER** not **TEXT**!`);

    if(args[0] > 100) return message.reply("**NUMBER TOO HIGH**\nI can only purge 100 messages due to the Discord Limit!");
    if(args[0] < 1) return message.reply(`You can't delete ${args[0]} messages!`)
      await message.channel.messages.fetch({limit: args[0]}).then(messages => {
        message.channel.bulkDelete(messages)
      })
     const successEmbed2 = new Discord.MessageEmbed()
       successEmbed2.setColor("#00FF02")
       successEmbed2.setTitle("Finished!")
       successEmbed2.setThumbnail(`https://cdn.discordapp.com/attachments/849015839414812713/849016241175920661/Trash.png`)
       successEmbed2.addField(name="Channel:", value=`<#${message.channel.id}>`)
       successEmbed2.addField(name="Moderator:", value=`<@${message.author.id}>`)
       successEmbed2.addField(name="Messages Deleted:", value=args[0])
         message.channel.send(successEmbed2)
    }
  }
