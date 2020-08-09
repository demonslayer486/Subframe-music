const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "music-help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setAuthor("Subframe V2-music Command", ``)
      .setTitle("Command List")
      .setDescription("List of all commands")
      .setColor("#ffffff")
      .setThumbnail(``);

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
