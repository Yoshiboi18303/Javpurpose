const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags')
const emojis = require('../storage/emojis.json');

module.exports = {
  name: "reload",
  aliases: ['rload'],
  description: "Reloads a command inside the bot!",
  async execute(client, message, args) {

    if(message.author.id === '697414293712273408') {
      if(!args[0]) return message.reply("You didn't mention a command for me to reload!");

    let commandName = args[0].toLowerCase()

    try {
      delete require.cache[require.resolve(`./${commandName}.js`)];
      client.commands.delete(commandName);
      const pull = require(`./${commandName}.js`);
      client.commands.set(commandName, pull);

    } catch(error) {
        let errorEmbed = new MessageEmbed()
         errorEmbed.setColor("#00FF02");
         errorEmbed.setTitle("**ERROR**");
         errorEmbed.setDescription('There was an Error. This will be sent in the next message!');
          message.reply(errorEmbed);

        await message.channel.send(stripIndents`Here was the error.
         \`\`\`${error}\`\`\`
        `)
     }
    message.reply(`Reloaded the ${commandName}.js File!`)
    } else {
       message.reply(`You are **NOT** the owner of <@${client.user.id}>!`);
    }
  }
}
