const emojis = require('../storage/emojis.json');

module.exports = {
  name: "repeat",
  aliases: ['loop','l','r'],
  description: "Loop through the current song!",
  async execute(client, message, args) {
    if(!message.member.voice.channel) return message.reply(`${emojis.animated_emojis.crossemoji} You're not in a voice channel!`);

    await client.distube.setRepeatMode(message, parseInt(args[0]));

    if(args[0] === '0') {
      message.reply("Disabled Repeat Mode!")
    } else if(args[0] === '1') {
      message.reply("Repeating Current Song!")
    } else if(args[0] === '2') {
      message.reply("Repeating Entire Queue!")
    }
  }
}
