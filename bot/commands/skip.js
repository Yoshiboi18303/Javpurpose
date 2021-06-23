const emojis = require('../storage/emojis.json');

module.exports = {
  name: "skip",
  aliases: [],
  description: "Skip the currently playing song!",
  async execute(client, message, args) {
    if(!message.member.voice.channel) return message.reply(`${emojis.animated_emojis.crossemoji} You're not in a voice channel!`);

    await client.distube.skip(message)
     message.reply(`${emojis.animated_emojis.doneEmoji} Skipped the song!`)
  }
}
