const emojis = require('../storage/emojis.json');

module.exports = {
  name: "continue",
  aliases: ['resume'],
  description: "Continue/Resume the current song in the queue!",
  async execute(client, message, args) {
    if(!message.member.voice.channel) return message.reply(`${emojis.animated_emojis.crossEmoji} You are not in a Voice Channel!`);

    client.distube.resume(message)
     await message.reply(`${emojis.animated_emojis.doneEmoji} Current Song Continuing!`)
  }
}
