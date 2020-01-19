const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    
  if(message.content.startsWith("-kick")){
    msgDel = 1;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
  }  

    if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("❌ **|** Você não tem **Permissão** suficiente !")
    message.delete().catch()
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("❌ **|** Por favor, mencione um **Usuário** válido !")
    if(!member.kickable)
      return message.reply("❌ **|** Não posso kickar esse **Usuário** .")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "❌"
    await member.kick(reason)
      .catch(error => message.reply(`❌ **|** Desculpe ${message.author} não consegui kickar o membro devido o: ${error}`))

      let pEmbed = new Discord.RichEmbed()
          .setTitle("🧨 **Kick**")
          .addField("Membro Kickado:", `✅**|** ${member.user.tag}`)
          .addField("Kickado por:", `🔧**|** ${message.author.tag}`)
          .addField("Motivo:", `💬**|** ${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setImage("https://media3.giphy.com/media/ejjNNnNQ2EUsU/source.gif")
          .setColor("RED").setTimestamp()

          message.guild.channels.get(`659602660986716181`).send(pEmbed)
          
}

module.exports.help = {
    name: "kick"
}
