const { stripIndents } = require('common-tags')

module.exports = {
    name: "help",
    aliases: ['h'],
    description: "Sends all the commands for Javpurpose!",
    execute(client, message, args, Discord) {

     const embedSender = args[0];

        if(!embedSender) {
        const mainEmbed = new Discord.MessageEmbed()
         mainEmbed.setColor("RANDOM");
         mainEmbed.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
         mainEmbed.setTitle("Help");
         mainEmbed.setDescription(stripIndents`Hello ${message.author}! Use any of these arguments with this command to see the Commands of that Category!

          Economy Commands: js;help economy
          Fun Commands: js;help fun
          Giveaway Commands: js;help giveaway
          Information Commands: js;help info
          Moderation Commands: js;help moderation
          Music Commands (broken): js;help music
          Owner Restricted Commands: js;help owner
         `);
          mainEmbed.setThumbnail(`${client.user.displayAvatarURL()}`);
          mainEmbed.setFooter("This message will be automatically deleted in 30 seconds to avoid Chat Flood.")
          mainEmbed.setTimestamp();
          message.channel.send(mainEmbed).then(msg => msg.delete({ timeout: "30000" }))
        }
        if(embedSender === 'economy') {
          const economyEmbed = new Discord.MessageEmbed()
           economyEmbed.setColor("#85BB65")
           economyEmbed.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
           economyEmbed.setTitle("Economy Commands")
           economyEmbed.setDescription(stripIndents`
             Balance "js;balance (bal) <@USER>"
             Work (broken) "js;work (wrk || job)"
           `)
           economyEmbed.setThumbnail(`${client.user.displayAvatarURL()}`)
           economyEmbed.setFooter(`[] Arguments are required, and <> arguments are Optional.\n() arguments are Aliases for the command listed.`)
            message.channel.send(economyEmbed)
        }
        if(embedSender === 'fun') {
            const funEmbed = new Discord.MessageEmbed()
             funEmbed.setColor("#0FEAE8")
             funEmbed.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
             funEmbed.setTitle("Fun Commands")
             funEmbed.setDescription(stripIndents`
               Ascii "js;ascii [TEXT]"
               Bot "js;bot (robot) <@USER>"
               Facepalm "js;facepalm <@USER>"
               Meme "js;meme"
               Oof "js;oof <@USER>"
               Triggered "js;triggered <@USER>"
               Wanted "js;wanted <@USER>"
               Wasted "js;wasted <@USER>"
             `)
             funEmbed.setThumbnail(`${client.user.displayAvatarURL()}`)
             funEmbed.setFooter(`[] Arguments are required, and <> arguments are Optional.\n() arguments are Aliases for the command listed.`)
              message.channel.send(funEmbed)
        }
        if(embedSender === 'giveaway') {
            const giveawayEmbed = new Discord.MessageEmbed()
             giveawayEmbed.setColor('BLUE');
             giveawayEmbed.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
             giveawayEmbed.setTitle('Giveaway Commands');
             giveawayEmbed.setDescription(stripIndents`
               Givestart "js;givestart (gstart) [TIME] [CHANNEL] [PRIZE]"
         `);
             giveawayEmbed.setThumbnail(`${client.user.displayAvatarURL()}`);
             giveawayEmbed.setFooter(`[] Arguments are required, and <> arguments are Optional.\n() arguments are Aliases for the command listed.`);
              message.channel.send(giveawayEmbed);
        }
        if(embedSender === 'info') {
            const infoEmbed = new Discord.MessageEmbed()
             infoEmbed.setColor("#FFFFFF")
             infoEmbed.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
             infoEmbed.setTitle("Information Commands")
             infoEmbed.setDescription(stripIndents`
               Help "js;help (h)"
               Invite "js;invite"
               Ping "js;ping"
               Privacy "js;privacy (policy)"
               Serverinfo "js;serverinfo (si || sinfo)"
               Updates "js;updates"
               Userinfo "js;userinfo (uinfo) <@USER>"
               Weather "js;weather [LOCATION]"
             `)
             infoEmbed.setThumbnail(`${client.user.displayAvatarURL()}`)
             infoEmbed.setFooter(`[] Arguments are required, and <> arguments are Optional.\n() arguments are Aliases for the command listed.`)
              message.channel.send(infoEmbed)
        }
        if(embedSender === 'moderation') {
            const modEmbed = new Discord.MessageEmbed()
             modEmbed.setColor("#FF0000")
             modEmbed.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
             modEmbed.setTitle("Moderation Commands")
             modEmbed.setDescription(stripIndents`
               Ban "js;ban (hammer) [@USER] <REASON>"
               Clear "js;clear (purge) [# OF MESSAGES]"
               Kick "js;kick (boot) [@USER] <REASON>"
               Lockdown "js;lockdown (ld) [true **OR** false]"
               Mute "js;mute (m) [@USER] <REASON>"
               Unmute "js;unmute (unm || um) [@USER] <REASON>"
             `)
             modEmbed.setThumbnail(`${client.user.displayAvatarURL()}`)
             modEmbed.setFooter(`[] Arguments are required, and <> arguments are Optional.\n() arguments are Aliases for the command listed.`)
              message.channel.send(modEmbed)
        }
        if(embedSender === 'music') {
            const musicEmbed = new Discord.MessageEmbed()
             musicEmbed.setColor("#FF8080")
             musicEmbed.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
             musicEmbed.setTitle("Music Commands")
             musicEmbed.setDescription(stripIndents`
                Play "js;play (p **OR** pm) [SONG_NAME **OR** LINK]"
                Queue "js;queue"
                Repeat "js;repeat (loop **OR** l **OR** r) [1 (Repeat Current Song) **OR** 2 (Repeat Entire Queue)]"
                Skip "js;play [SONG_NAME **OR** LINK]"
                Stop "js;stop"
             `)
             musicEmbed.setThumbnail(`${client.user.displayAvatarURL()}`)
             musicEmbed.setFooter(`[] Arguments are required, and <> arguments are Optional.\n() arguments are Aliases for the command listed.`)
              message.channel.send(musicEmbed)
        }
        if(embedSender === 'owner') {
            const ownerEmbed = new Discord.MessageEmbed()
             ownerEmbed.setColor("RANDOM")
             ownerEmbed.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
             ownerEmbed.setTitle("Owner Restricted Commands")
             ownerEmbed.setDescription(stripIndents`
               Eval "js;eval (env || evaluate) [CODE]"
               Reload "js;reload (rload) [COMMAND_NAME]"
               Restart "js;restart"
             `)
             ownerEmbed.setThumbnail(`${client.user.displayAvatarURL()}`)
             ownerEmbed.setFooter(`[] Arguments are required, and <> arguments are Optional.\n() arguments are Aliases for the command listed.`)
              message.channel.send(ownerEmbed)
        }
    }
}
