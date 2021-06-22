const config = require('../storage/config.json');
const emojis = require('../storage/emojis.json');

module.exports = {
    name: "eval",
    aliases: ['env','evaluate'],
    description: "Evaluate JavaScript code!",
    async execute(client, message, args) {

         // Checking if the user has my ID on Discord
        if(message.author.id === config.ids.ownerID) {

         message.reply(`Cleaning Text... ${emojis.animated_emojis.loadingEmoji}`).then(msg => msg.delete({timeout: "2000"}))

        // Cleaning up the text needed for the command to work
          function clean(text) {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
              return text;
          }
        try {
          const code = args.join(" ");
          let evaled = eval(code);

           await message.reply(`Thinking... ${emojis.animated_emojis.loadingEmoji}`).then(msg => msg.delete({timeout: "2000"}))


          if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);


         // Sending the final results of the code sent
          message.channel.send(clean(evaled), {code:"xl"});
          await message.channel.send(`<@${config.ids.ownerID}>`);

         // If there's an error then...
        } catch(error) {
            message.channel.send(`<a:Animated_Cross:854142043365441546> **ERROR** \`\`\`xl\n${clean(error)}\n\`\`\``);
         }
        } else {
            message.reply(`${emojis.animated_emojis.crossemoji} You are **NOT** the owner of <@${client.user.id}>!`)
        }
    }
}
