module.exports = {
  name: "queue",
  aliases: ['q'],
  description: "View the queue!",
  execute(client, message, args) {
    const queue = client.distube.getQueue(message)
		message.channel.send(`Current queue:\n${queue.songs.map((song, id) =>
			`**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join('\n')}`)
  }
}
