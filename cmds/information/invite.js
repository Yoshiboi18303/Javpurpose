const { MessageButton, MessageActionRow } = require('discord-buttons');
const Commando = require('discord.js-commando');

module.exports = class inviteCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      group: 'information',
      memberName: 'invite',
      description: 'Use this command for a button to invite Javpurpose and his Privacy Policy!'
    })
  }

  async run(message) {
        let inviteButton = new MessageButton()
         inviteButton.setStyle('url');
         inviteButton.setURL('https://discord.com/oauth2/authorize?client_id=848729278069211136&scope=bot&permissions=335891478');
         inviteButton.setLabel('Invite Javpurpose!');
         inviteButton.setEmoji('712732635541012642')

        let privacyButton = new MessageButton()
         privacyButton.setStyle('url');
         privacyButton.setURL('https://github.com/Yoshiboi18303/Javpurpose/blob/main/PRIVACY.md');
         privacyButton.setLabel('Privacy Policy');
         privacyButton.setEmoji('850161209487261716');

      let buttonRow = new MessageActionRow()
       .addComponent(inviteButton)
       .addComponent(privacyButton)

    message.reply(`You can Invite Me or view my Privacy Policy with this button row!`, { component: buttonRow })
  }
}