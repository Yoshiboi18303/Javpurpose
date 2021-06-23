const config = require('../storage/config.json');
const emojis = require('../storage/emojis.json');

module.exports = {
    name: "eval",
    aliases: ['env','evaluate'],
    description: "Evaluate JavaScript code!",
    async execute(client, message, args) {

        if(message.author.id === config.ids.ownerID) {
         message.reply(`Cleaning Text... ${emojis.animated_emojis.loadingEmoji}`).then(msg => msg.delete({timeout: "2000"}))
          function clean(text) {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
              return text;
          }
        try {
          const code = args.join(" ");
          let evaled = eval(code);

           message.reply(`Thinking... ${emojis.animated_emojis.loadingEmoji}`).then(msg => msg.delete({timeout: "2000"}))

          if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

          message.channel.send(clean(evaled), {code:"xl"});
          await message.channel.send(`<@${config.ids.ownerID}>`);
        } catch(error) {
            message.channel.send(`<a:Animated_Cross:854142043365441546> **ERROR** \`\`\`xl\n${clean(error)}\n\`\`\``);
         }
        } else {
            message.reply(`${emojis.animated_emojis.crossemoji} You are **NOT** the owner of <@${client.user.id}>!`)
        }
    }
}
