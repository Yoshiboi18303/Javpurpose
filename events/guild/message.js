const { stripIndents } = require('common-tags');
const emojis = require('../../storage/emojis.json')

module.exports = (Discord, client, message) => {
    const prefix = "js;";
      if(message.content.match(new RegExp(`<@!?${client.user.id}>( |)$`))) {
        const helloEmbed = new Discord.MessageEmbed()
        helloEmbed.setColor("RANDOM");
        helloEmbed.setTitle(`Hello! I'm ${client.user.username}!`);
        helloEmbed.setDescription(stripIndents`
        Thanks so much for adding me to ${message.guild.name}!
        My prefix is ${prefix} (custom prefixes coming soon)!

        **Want to invite me to another server?**
        You can invite me using [this link](https://discord.com/oauth2/authorize?client_id=848729278069211136&scope=bot&permissions=4667600118) or by running ${prefix}invite!

        **Do you need help?**
        You can use [this link](https://discord.gg/wvCDhsXEDa) to join the support server!
        `)
         message.channel.send(helloEmbed)
    }
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))

    if(command) command.execute(client, message, args, Discord)
}
