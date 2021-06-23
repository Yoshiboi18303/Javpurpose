const config = require('../storage/config.json');
const emojis = require('../storage/emojis.json');

module.exports = {
  name: "restart",
  aliases: [],
  description: "Restart Javpurpose!",
  execute(client, message) {

if(message.author.id === config.ids.ownerID) {

  message.reply(`Restarting... <a:windows_loading:854438904325472287>`).then(msg => msg.delete({timeout: "5000"}));
   client.destroy();
   client.login('No');
  message.reply(`${emojis.animated_emojis.doneEmoji} Finished!`)
  } else {
     message.reply(`${emojis.animated_emojis.crossemoji} You are **NOT** the owner of <@${client.user.id}>!`)
  }
 }
} 
