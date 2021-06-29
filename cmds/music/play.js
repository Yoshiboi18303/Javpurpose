const Commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const emojis = require('../../storage/emojis.json');

module.exports = class playCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'play',
      aliases: ['p','pm'],
      guildOnly: true,
      group: 'music',
      memberName: 'play',
      description: 'Start playing music in your Discord Server!',
      examples: ['js;play SOME_SONG'],
      clientPermissions: ['CONNECT','SPEAK'],
      argsType: 'multiple'
    })
  }
  async run(message, args) {
   if(!message.member.voice.channel) return message.reply("Please join a Voice Channel!");
    const music = args.join(" ");
     const searchingEmbed = new MessageEmbed()
      .setColor("YELLOW")
      .setTitle("Searching...")
      .setDescription(`Searching for your query on YouTube... ${emojis.animated_emojis.loadingEmoji}`)
        message.channel.send(searchingEmbed).then(msg => msg.delete({ timeout: "2569" }))

    await message.channel.send("Found some results, sending embed!").then(msg => msg.delete({ timeout: "4000" }))
     await this.client.distube.play(message, music)
  }
}