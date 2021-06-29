const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const translate = require('@iamtraction/google-translate')
const fs = require('fs');
const myToken = process.env['TOKEN'];
const { stripIndents } = require('common-tags');
const bot_intents = Discord.Intents.ALL;
const myString = process.env['URI']
const config = require('./storage/config.json');
// const client = new Discord.Client(intents=bot_intents, { partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const path = require('path');
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const Commando = require('discord.js-commando');
const client = new Commando.CommandoClient({
  owner: config.ids.ownerID,
  commandPrefix: config.prefix,
  invite: 'https://discord.gg/wvCDhsXEDa',
  intents: bot_intents,
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
})
require('discord-buttons')(client);
const botPrefix = "tjs;";
const distubePlayer = require('distube');
const fluxpoint = require("@fearfuldev/fluxpoint");

client.distube = new distubePlayer(client, { searchSongs: true, emitNewSongsOnly: true, leaveOnEmpty: true, highWaterMark: 1<<25 });
const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || 'Off'}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'All Queue' : 'This Song' : 'Off'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
client.distube
.on('playSong', (message, queue, song) => {
const nowPlayingEmbed = new MessageEmbed()
.setColor("GREEN")
.setTitle("Now Playing!")
.setDescription(`Playing [${song.name}](${song.url}) - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`)
.setFooter(song.user.username, song.user.displayAvatarURL())
message.channel.send(nowPlayingEmbed)
})
	.on('addSong', (message, queue, song) => message.channel.send(
		`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
	))
  .on('addList', (message, queue, playlist) => message.channel.send(
		`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`,
	))
	.on('playList', (message, queue, playlist, song) => { 
   const playingListEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Playing Playlist!")
    .setDescription(`Playing \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`)
    .setFooter(song.user.username, song.user.displayAvatarURL())
  message.channel.send(playingListEmbed)
})
  .on('searchResult', (message, result, query) => {
		let i = 0
    const searchresultsEmbed = new MessageEmbed()
     .setColor("#7879D7")
     .setTitle(`Search Results for ${query}`)
     .setDescription(`**Choose an option from below**\n${result.map(song => `**${++i}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\` | \`${song.views} views\``).join('\n')}\n*Enter anything else or wait 60 seconds to cancel*`)
		message.channel.send(searchresultsEmbed)
	})
  .on('searchCancel', message => message.channel.send(`Cancelled.`))
  .on('empty', message => message.channel.send(`Seems like this Voice Channel has been empty for 60 seconds. Leaving Voice Channel!`))
	.on('error', (message, error) => {
		console.error(error)
		message.channel.send(`There was an error while trying to play music: ${error}`)
	})

// client.commands = new Discord.Collection();
// client.events = new Discord.Collection();
// client.aliases = new Discord.Collection();

// ['command_handler','event_handler'].forEach(handler => {
 //   require(`./handlers/${handler}`)(client, Discord);
// });
const imaging = require('./etc/generate_image');

client.on('ready', () => {
    console.log(`Ready! Logged into ${client.user.tag}' Client on Discord! ${client.user.username} is in ${client.guilds.cache.size} servers!`);
    client.user.setActivity(`Testing Bot`, { type: 'STREAMING', url: 'https://www.youtube.com/watch?v=lzZU-8FU2wQ' })

    client.registry
    .registerGroups([
      ['economy', 'Economy'],
      ['fun', 'Fun'],
      ['information', 'Information'],
      ['misc', 'Miscellaneous'],
      ['moderation', 'Moderation'],
      ['music', 'Music'],
      ['owner', 'Owner'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))
});

client.on('guildCreate', joinedGuild => {
 
   let helloEmbed = new Discord.MessageEmbed()
    helloEmbed.setColor("RANDOM");
    helloEmbed.setTitle(`Hello! I'm ${client.user.username}!`);
    helloEmbed.setDescription(stripIndents`Hello!
     Thank you for adding me to ${joinedGuild.name}!
     All my commands can be found by running ${botPrefix}help!

     **Need help?**
      My support team is always here to help! Join the support server [here](https://discord.gg/wvCDhsXEDa)
 `)
  joinedGuild.message.send(helloEmbed) 
 });

client.login(myToken)