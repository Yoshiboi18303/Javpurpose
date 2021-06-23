const emojis = require('../storage/emojis.json');

module.exports = {
  name: "play",
  aliases: ['p','pm'],
  description: "Start playing music in your Discord Server!",
  async execute(client, message, args) {
    if(!message.member.voice.channel) return message.reply(`${emojis.animated_emojis.crossemoji} You're not in a voice channel!`);

    const music = args.join(" ");
    if(!music) return message.reply(`${emojis.animated_emojis.crossemoji} Please specify a song!`)
    await client.distube.play(message, music)
  }
}
