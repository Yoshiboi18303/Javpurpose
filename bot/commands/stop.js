const emojis = require('../storage/emojis.json');

module.exports = {
  name: "stop",
  aliases: [],
  description: "Stop the music playing in a Discord Server!",
  async execute(client, message, args) {
    if(!message.member.voice.channel) return message.reply(`${emojis.animated_emojis.crossemoji} You're not in a voice channel!`);

    await client.distube.stop(message)
    message.reply(`${emojis.animated_emojis.doneEmoji} Stopped the music!`)
  }
}
