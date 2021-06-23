const { stripIndents } = require('common-tags')
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);
const limit = "15";

module.exports = {
  name: "ascii",
  aliases: [],
  description: "Ascii Art!",
  async execute(client, message, args, Discord) {
    
    let Content = args.join(" ");

    if (!Content) return message.channel.send("**ERROR** | No text was provided...");

    try {
        
    let Result = await figletAsync(Content);

    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("```" + Result + "```")
      .setTimestamp();

    if (Content.length > 15)
      return message.channel.send(`**ERROR** | Limit is ${limit}`);

    message.channel.send(embed)
    } catch(error) {
        message.channel.send(stripIndents`
        ☠️ **ERROR** ☠️

         \`\`\`${error}\`\`\`
         This should not have happened. Please report this error here <https://discord.gg/wvCDhsXEDa>
        `)
    }
  }
};
