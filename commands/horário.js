const Discord = require("discord.js");

exports.run = (client,message,args) => {
    
  if(message.content.startsWith("-horário")){
    msgDel = 1;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
  }  

    embed = {
        "title": "⏰ **Horário das Lives** ⏰",
        "description": `Olá ${message.author}, aqui estão os horários, são atualizados toda semana. \n Se você é de portugal, utilize -horáriopt.`,
        "color": 4886754,
        "thumbnail": {
          "url": "https://media1.tenor.com/images/7b02799e8956ad375c39ba2710795003/tenor.gif?itemid=10654881"
        },
        "author": {
          "name": "Pernalonga",
          "url": "https://www.twitch.tv/lorran_aa",
          "icon_url": "https://www.walldesk.com.br/fotos/11879_natal-do-pernalonga-e-do-taz-no-gelo.jpg"
        },
        "fields": [
          {
            "name": "\n❌ **Domingo**",
            "value": "**~~Sem Live~~**",
            "inline": true
          },
          {
            "name": "✅  **Segunda**",
            "value": "**21Hrs até 00Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Terça**",
            "value": "**20Hrs até 00Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Quarta**",
            "value": "**20Hrs até 00Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Quinta**",
            "value": "**20Hrs até 00Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Sexta**",
            "value": "**20Hrs até 00Hrs**",
            "inline": true
          },
          {
            "name": "✅ **Sábado**",
            "value": "**19Hrs até 00Hrs**",
            "inline": true
          },
          {
            "name": "💜 **Twitch**",
            "value": "**Lorran_aa**",
            "inline": true
          },
          {
            "name": "📸 **Instagram**",
            "value": "**lorran.exe**",
            "inline": true
          }
        ]
      };
      message.channel.send({ embed });
      
}

exports.help = {
    name: "horário"
}

