const Discord = require ("discord.js");
const fs = require("fs");
var prefix = "$";

const client = new Discord.Client();



client.on("ready",()=>{
console.log('ready');
var status = "dnd";
client.user.setActivity("SakBot")
});

client.on("message",msg=>{ 
if (msg.author.bot) return;
if(msg.content ==="hello"){msg.reply("hi")}
if (msg.content === 'سكسكة') {     msg.reply('اتوقع انك تكلمه خاص افضل');   }
if (msg.content === 'saksaka') {     msg.reply('اتوقع انك تكلمه خاص افضل');   } 
if (msg.content === (prefix+'مساعدة'))
 msg.channel.send("***قائمة الاوامر***");

 });

///////////////////////////////////////////////////////////////////////////
 client.on("message", message => {
    if (message.content.startsWith("احلى صورة")) {
      var mentionned = message.mentions.users.first();
      var x5bzm;
      if (mentionned) {
        var x5bzm = mentionned;
      } else {
        var x5bzm = message.author;
      }
      const embed = new Discord.RichEmbed()
  
        .setImage("")
        .setTitle(`✽ **صورتك انت يا جمييل**`)
        .setColor("black")
        .setImage(`${x5bzm.avatarURL}`);
      message.channel.sendEmbed(embed);
    }
  });



client.on("message",message => {
    if(message.author.bot) return;
      if(message.content.startsWith(prefix + "صورة")){
    const mention = message.mentions.users.first()
    
    if(!mention) return console.log("") 
    let embed = new Discord.RichEmbed()
    .setColor("#080808")
    .setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
    .setTitle("رابط الصورة")
    .setURL(`${mention.avatarURL}`)
    .setImage(`${mention.avatarURL}`)
      .setFooter(`بطلب من ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed)
    }
    })
    
    client.on("message", message => {
      if(message.author.bot) return;
      if(message.content.startsWith(prefix + "صورة السيرفر")) {
        let doma = new Discord.RichEmbed()
        .setColor("#080808")
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setTitle("رابط الصورة")
        .setURL(message.guild.iconURL)
        .setImage(message.guild.iconURL)
      .setFooter(`بطلب من ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(doma)
      } else if(message.content.startsWith(prefix + "صورتي")) {
        let args = message.content.split(" ")[1]
    var avt = args || message.author.id;    
        client.fetchUser(avt).then(user => {
         avt = user;
      let embed = new Discord.RichEmbed() 
      .setColor("#080808")
      .setAuthor(`${avt.tag}`, avt.avatarURL)
      .setTitle("رابط صورتك")
      .setURL(avt.avatarURL)
      .setImage(avt.avatarURL)
      .setFooter(`بطلب من ${message.author.tag}`, message.author.avatarURL)
      message.channel.send(embed) 
        })
      }
    })
  ///////////////////////////////////////////////////////////////////////////
 client.on("message", message => {
    if (message.content.startsWith(prefix+"id")) {
      var mentionned = message.mentions.users.first();
      var x5bzm;
      if (mentionned) {
        var x5bzm = mentionned;
      } else {
        var x5bzm = message.author;
      }
      const embed = new Discord.RichEmbed()
  
        .setTitle(`✽ **${message.author.id}**`)
        .setColor("black")
      message.channel.sendEmbed(embed);
    }
  });
  ///////////////////////////////////////////////////////////////////////////
client.on('message', async msg => {//Shady Craft YT#4176
  var user = msg.author;//Shady Craft YT#4176
      if (msg.content === (prefix+'مساعدة')) {
      if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
      
//Shady Craft YT#4176
msg.channel.send({embed: new Discord.RichEmbed()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
         .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`**اذا كنت تريد الاوامر العامة اضغط الرياكشن** 🌏 **اذا كنت تريد الاوامر الادارية اضغط الرياكشن**🔧**اذا كنت تريد بعض الشرح عن البوت اضغط الرياكشن**💠**اذا كنت تريد الالغاء اضغط الرياكشن **❌              **وشكرا لمستخدمين البوت**`)

.setTimestamp()
}).then(zg => {
   zg.react('🌏').then(r=>{
   zg.react('🔧').then(r=>{
   zg.react('💥').then(r=>{
   zg.react('❌').then(r=>{
var aaa = (reaction, user) => reaction.emoji.name === '🌏' && user.id === msg.author.id;
 var mmm = (reaction, user) => reaction.emoji.name === '🔧' && user.id === msg.author.id;
  var vvv = (reaction, user) => reaction.emoji.name === '💠' && user.id === msg.author.id;
  var ccc = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

  var aa = zg.createReactionCollector(aaa, { maxMatches:1 , time: 60000 , });
  var mm = zg.createReactionCollector(mmm, { maxMatches:1 , time: 60000 , });
  var vv = zg.createReactionCollector(vvv, { maxMatches:1 , time: 60000 , });
  var cc = zg.createReactionCollector(ccc, { maxMatches:1 , time: 60000 , });

aa.on("collect", r => {
  zg.edit({embed: new Discord.RichEmbed()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
        .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`** مساعدة = يظهر لك هاذي الأوامر التي تظهر امامك
صورة = ارسال صورتك
صورة + منشن للشخص = اظهار صورة الشخص
نبذة عني = اظهار نبذة صغيرة عنك** `)
.setTimestamp()
  });


  })//b
mm.on("collect", r => {
  zg.edit({embed: new Discord.RichEmbed()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
         .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)//Shady Craft YT#4176
.setURL('')//Shady Craft YT#4176
.setDescription(`**انت لا تمتلك الصلاحية** `)//Shady Craft YT#4176
.setTimestamp()//Shady Craft YT#4176
  });//Shady Craft YT#4176
//Shady Craft YT#4176
  })
vv.on("collect", r => {//Shady Craft YT#4176
  zg.edit({embed: new Discord.RichEmbed ()
.setAuthor(client.user.username , client.user.avatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle(`Welcome To ${msg.guild.name}`)
         .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`**البوت من صنع سكسكة وهو بوت برودكاست بحيث يساعد جميع الاعضاء في اي وقت اذا كان لا يوجد اداريين** `)

.setTimestamp()
  });

})
cc.on("collect", r => {
  zg.delete();
  msg.delete();
})
   }).then(msg => msg.delete(15000));
   })
   })
   })
})
   }
   });
///////////////////////////////////////////////////////////////////////////
client.on("message", message => {
if (message.author.bot) return; ///Pixel Team
if (message.content.startsWith("clear")) {
  if (!message.channel.guild)
    return message.reply(`** This Command For Servers Only**`);
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(`** You don't have Premissions!**`);
  if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
    return message.channel.send(`**I don't have Permission!**`);
  let args = message.content.split(" ").slice(1);
  let messagecount = parseInt(args);
  if (args > 100)
    return message
      .reply(`** The number can't be more than **100** .**`)
      .then(messages => messages.delete(5000));
  if (!messagecount) args = "100";
  message.channel
    .fetchMessages({ limit: messagecount })
    .then(messages => message.channel.bulkDelete(messages))
    .then(msgs => {
      message.channel
        .send(`** Done , Deleted \`${msgs.size}\` messages.** `)
        .then(messages => messages.delete(5000));
    });
}
});
///////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith("باند")) {
    const reason = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.guild.roles.exists("name", "49"))
      return message.channel.send(` لازم تسوي رتبة اسمها \`49\`.`);
    if (
      message.guild.channels.exists(
        "name",
        "Contact Us{message.author.id}" + message.author.id
      )
    )
      return message.channel.send(`شوف اول روم في الديسكورد.`);
    message.guild
      .createChannel(`Contact Us`, "text")
      .then(c => {
        let role = message.guild.roles.find("name", "49");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        message.channel.send(
          `:white_check_mark: شوف اول روم في الديسكورد`
        );
        const embed = new Discord.RichEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `سلام عليكم من فضلك اطرح سؤالك او استفسارك ، و واحد من الدعم الفني او الإدارة العليا سوف يتواصل معك ويحل المشكلة ان شاء الله في اقرب وقت`
          )
          .setTimestamp();
        c.send({
          embed: embed
        });
      })
      .catch(console.error);
  }
});
///////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "خروج")) {
    let args = message.mentions.channels.first();
    if (!args)
    if (
      !message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send("**ليس لديك صلاحيات . ❌**");
    message.channel.send(
      `**${args}.  | :ballot_box_with_check: |لقد تم شغيل المغادرة هنا**`
    ); //By ItzTexo
    client.on("guildMemberAdd", member => {
      if (member.user.bot) return;
      var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`**الله معاك ✋ **`)
        .addField("**__شكرا لوقتك__**  ", `${member}`)
        .addField("👤   تبقي", `**[ ${member.guild.memberCount} ]**`, true)
        .setColor("Black")
        .setFooter(`نتمنى لكم الاستمتاع`);

      var channel = member.guild.channels.find(gg => gg.name === "f"); //// تعديل اساسي
      if (!channel) return;
      channel.send({ embed: embed });
    });
  }
});
///////////////////////////////////////////////////////////////////////////
client.on('message', message =>{
  if(message.content.startsWith(prefix + 'احصائيات')){
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **لا تملك صلاحية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return message.reply('❌ **البوت لا يمتلك صلاحية**');
  message.guild.createChannel(`👑معلومات السيرفر:` , 'category')
  
    message.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
    time.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  

setInterval(() => {
    time.setName(`𝐌𝐞𝐦𝐛𝐞𝐫𝐬𝐂𝐨𝐮𝐧𝐭 👱 : ${message.guild.members.filter(m =>!m.user.bot).size}`);
},1500);
});

message.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
  time.overwritePermissions(message.guild.id, {
    CONNECT: false,
    SPEAK: false
  });
setInterval(() => {
    time.setName(`𝐁𝐨𝐭𝐬𝐂𝐨𝐮𝐧𝐭 🤖  : ${message.guild.members.filter(m=>m.user.bot).size}`);
},2000);
});
}
});
///////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "ping")) {
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    var Bping = `${Math.round(client.ping)}`;

    const E1ping = new Discord.RichEmbed()
      .setTitle("ــــــــــــــــــــــــــــــ")
      .addField(
        `**BOT Ping Is** :__17 📶__`,
        "ــــــــــــــــــــــــــــــ"
      )
      .setFooter(`Requested by | ${message.author.tag}`)
      .setColor("Black");
    message.channel.send(E1ping);
  }
});
///////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix+"Embed")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(`لاتمتلك الصلاحيات لفعل ذلك! :x:`);

      message.channel.send(`**لون الامبد المطلوب** `);
    let filter = m => m.author.id === message.author.id;
    var color = "";
    let sugsa2 = message.channel
      .awaitMessages(filter, { max: 1, time: 60000 })
      .then(co => {
        color = co.first().content;
    
    message.channel.bulkDelete(1);
        
      message.channel.send(`**العنوان للامبد** `);
    let filter = m => m.author.id === message.author.id;
    var title = "";
    let sugsa2 = message.channel
      .awaitMessages(filter, { max: 1, time: 60000 })
      .then(co => {
        title = co.first().content;
    
    message.channel.bulkDelete(1);
        
      message.channel.send(`**اكتب محتوى الامبد الان** `);
    let filter = m => m.author.id === message.author.id;
    var tt = "";
    let sugsa2 = message.channel
      .awaitMessages(filter, { max: 1, time: 60000 })
      .then(co => {
        tt = co.first().content;
    
    message.channel.bulkDelete(1);
        
    message.channel.bulkDelete(3);
    let embed = new Discord.RichEmbed().setColor(color).setTitle(title).setDescription(tt);
    message.channel.send(embed).catch(shady => {
      console.log("`Error`: " + shady);
      message.channel.send("`Error`:" + shady);
    });
  }
            )
    
    });
      }
      );
  
  };
});
///////////////////////////////////////////////////////////////////////////
client.on('message', async message => {//alpha codes & Mrx -Dev
  if (message.content.startsWith(prefix + 'رتبة')) {//alpha codes & Mrx -Dev
    var args = message.content.split(' ').slice(2);
    let member = message.mentions.members.first();
    let role = message.guild.roles.find(r => r.name == args);
    if(!role) return message.channel.send(':no_entry: | ما قدرت اعطيه');
    if(role.name === '@everyone') return message.channel.send(':no_entry: | غير قادر على ايجاد الرتبة');
      if (!args) message.reply(`Type Name Role`)
      if (!member) message.reply(`mention someone !`)
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**You Do not have permission** `MANAGE_ROLES`' );
      await message.channel.sendMessage(`**💠To Give Role
:x: To Cancel the process **`).then(e => {//alpha codes & Mrx -Dev
          e.react("💠")//alpha codes & Mrx -Dev
          .then(()=> e.react("❌"))//alpha codes & Mrx -Dev
          .then(()=> e.react("💠")).then(() => c.delete(12000))//alpha codes & Mrx -Dev
          let reaction1Filter = (reaction, user) => reaction.emoji.name === '🎁' && user.id === message.author.id;//alpha codes & Mrx -Dev
          let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;//alpha codes & Mrx -Dev
          let reaction1 = e.createReactionCollector(reaction1Filter, { time: 12000 });//alpha codes & Mrx -Dev
          let reaction2 =e.createReactionCollector(reaction2Filter, { time: 12000 });//alpha codes & Mrx -Dev
          reaction1.on("collect", c => {//alpha codes & Mrx -Dev
            member.addRole(role);
            e.edit(`:white_check_mark: | <@${member.id}> Successfully give The role **${role.name}** .`).then(c => {
               c.delete(5000).then(()=>{
                 msg.delete()
                       })
               })
              }

                  )//alpha codes & Mrx -Dev
                  reaction2.on("collect", c => {//alpha codes & Mrx -Dev
                    e.edit('**Successfully Canceled :x:**').then(c => {
                      c.delete(5000)
                      message.delete()
                      
      })
    })
  }
      )}
      
});
///////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix+"رابط")) {
    message.channel
      .createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
      })
      .then(invite => message.author.send(invite.url));
    const embed = new Discord.RichEmbed()
      .setColor("Black")
      .setDescription(
        "** تم ارسال الرابط على الخاص ، اذا لم يصلك افتح الخاص**"
      )
      .setAuthor(client.user.username, client.user.avatarURL)
      .setAuthor(client.user.username, client.user.avatarURL)
      .setFooter("طلب بواسطة: " + message.author.tag);

    message.channel.sendEmbed(embed).then(message => {
      message.delete(10000);
    });
    const Embed11 = new Discord.RichEmbed().setColor("Black")
      .setDescription(`** مدة الرابط : غير محدد 
 عدد استخدامات الرابط : 100 **`);

    message.author.sendEmbed(Embed11);
  }
});
///////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix+"كيف دخلت السيرفر")) {
    //// وهون الامر طبعا
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`:incoming_envelope: **[كيف دخل السيرفر]** ${Username}`)
        .addField(
          "**تاريخ انضمامك لسيرفرنا **",
          `**➥** [ منذ  **${daysJoined.toFixed(0)}** يوم ]   `
        )
        .addField(
          "**رابط الدعوة الذي دخلت منه**  ",
          `**➥** [ **https://discord.gg/${inviteCode || "Zm2U6we"}** ]   `
        )
        .setImage("")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});
///////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content ===prefix+"اقفل الروم") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**تم قفل الروم :no_entry: **");
      });
  }
  if (message.content ===prefix+"افتح الروم") {
    if (!message.channel.guild)
      return message.reply(" هذا الامر فقط للسيرفرات !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("ليس لديك صلاحيات");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**تم فتح الروم :white_check_mark:**");
      });
  }
});
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
const rWlc = JSON.parse(fs.readFileSync("./AutoRole.json", "utf8"));
client.on('message', message => {
  if(message.channel.type === "dm") return;
  if(message.author.bot) return;
     if(!rWlc[message.guild.id]) rWlc[message.guild.id] = {
      role: "member"
    }
  const channel = rWlc[message.guild.id].role
    if (message.content.startsWith("autorole")) {
      if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
      let newrole = message.content.split(' ').slice(1).join(" ")
      if(!newrole) return message.reply(`**${prefix}autorole role name**`)
      rWlc[message.guild.id].role = newrole
      message.channel.send(`**${message.guild.name}'s role has been changed to ${newrole}**`);
    }
  fs.writeFile("./AutoRole.json", JSON.stringify(rWlc), function(e){
      if (e) throw e;
  })
  });
  client.on("guildMemberAdd", member => {
        if(!rWlc[member.guild.id]) rWlc[member.guild.id] = {
      role: "member"
    }
      const sRole = rWlc[member.guild.id].role
      let Rrole = member.guild.roles.find('name', sRole);
    member.addRole(Rrole);
   
    
        
        });
///////////////////////////////////////////////////////////////////////////
let anti = JSON.parse(fs.readFileSync("./antigrefff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "settings")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    if (message.content.startsWith(prefix + "settings limitsban")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "settings limitskick")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleD")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleC")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelD")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelC")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitstime")) {
      if (!num) return message.channel.send("**:1234: | أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("**:1234: | أرقام فقط ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**:lock: | تم التغيير اِلي : ${config[message.guild.id].time}**`
      );
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelCreate", async channel => {
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000 || 30000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`
            )
          );
        anti[member.guild.id + entry.id].actions = 0;
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

var antibots = JSON.parse(fs.readFileSync("./KickBots.json", "utf8"));
let saveSteve = () => {
  fs.writeFileSync(
    "./KickBots.json",
    JSON.stringify(antibots, null, 2),
    err => {
      if (err) throw err;
    }
  );
};
client.on("message", message => {
  if (!message.guild) return;
  if (!antibots[message.guild.id])
    config[message.guild.id] = {
      onoff: true
    };
  if (message.content.startsWith(prefix + "antibots on")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    antibots[message.guild.id] = {
      onoff: true
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is On :closed_lock_with_key: **");
  }
  if (message.content.startsWith(prefix + "antibots off")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key: لأسباب تتعلق بالحماية تم حصر أوامر الحماية فقط للأونر**"
      );
    antibots[message.guild.id] = {
      onoff: false
    };
    saveSteve();
    message.channel.send("**AntiBots Join Is Off :unlock: **");
  }
  saveSteve();
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    config[member.guild.id] = {
      onoff: true
    };
  if (antibots[member.guild.id].onoff == false) return;
  if (member.user.bot) return member.ban("Protection from Bots.");
  saveSteve();
});
///////////////////////////////////////////////////////////////////////////
let xp = require('./xp.json');

client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    var prefix = "$";

    let Addxp = Math.floor(Math.random() * 6) + 8;

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level + 1;
    let nextLvL = xp[message.author.id].level * 1000; //كل كم اكس بي لحتا يرتفع لفله انصحكم تخلونه فوق ال الف
    xp[message.author.id].xp = curxp + Addxp;
    if(nextLvL <= xp[message.author.id].xp){
        xp[message.author.id].level = xp[message.author.id].level + 1;
        
        let lvlup = new Discord.RichEmbed()
        .setTitle('Level Up!')
        .setColor('RANDOM')
        .setDescription(`New Level: `+curlvl)
        .setTimestamp()
        .setFooter(message.author.username+'#'+message.author.discriminator);
        message.channel.send(lvlup)
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if (err) console.log(err)
    });


});
client.on('message', message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    var prefix = "";

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nextlvlxp = curlvl * 200;
    let difference = nextlvlxp - curxp

    if(message.content == prefix+"بروفايلي"){

        if(!xp[message.author.id]) {
            xp[message.author.id] = {
                xp: 0,
                level: 1,
            }
        }
        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
            if(err) console.log(err)
        });
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor('BLACK')
        .setTitle('البروفايل حقك')
        .addField('نقاطك: ', curxp, true)
        .addField('مستواك: ', curlvl, true)
        .setFooter(` ${difference} xp till level up `, message.author.displayAvatarURL);
        message.channel.send(embed);

    }
});
///////////////////////////////////////////////////////////////////////////
client.on("message", message =>{
  if(message.content.startsWith(prefix + 'topservers')){ // الامر (topserver)
    let count = message.content.split(" ")[1];
    const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
    if(!count) count = 10;
    if(isNaN(count)) count = 10;
    if(count <= 0) count = 10;
    if(count > top.length) count = top.length;
    let embed = new Discord.RichEmbed();
    for(let i = 0; i < count; i++){
    embed.addField(`**${top[i].name}** : ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
    }
    embed.setTitle(`**Top ${count} Servers**`);
    embed.setThumbnail(message.author.displayAvatarURL);
    embed.setTimestamp();
    embed.setFooter(client.user.username,client.user.displayAvatarURL);
    message.channel.send(embed);
  }});
///////////////////////////////////////////////////////////////////////////
client.on('message',async message => {//Shady Craft YT#4176
  if(message.content.startsWith(prefix + "التوقيت")) {//Shady Craft YT#4176
  if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('? **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('? **ليس معي الصلاحيات الكافية**');
  message.channel.send('?| **تم عمل الروم بنجاح**');
  message.guild.createChannel("التوقيت - Time  00", 'voice').then((c) => {
    console.log(`Time channel setup for guild: n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
        setInterval(function() {
 
      var currentTime = new Date(),
      hours = currentTime.getHours() ,
      minutes = currentTime.getMinutes() ,
      seconds = currentTime.getSeconds(),
      years = currentTime.getFullYear(),//Shady Craft YT#4176
      month = currentTime.getMonth(),//Shady Craft YT#4176
      day = currentTime.getDate(),//Shady Craft YT#4176
      week = currentTime.getDay();
 //Shady Craft YT#4176
      if (minutes < 10) {
          minutes = "5" +  minutes;
      }
      var suffix = "AM";
      if (hours >= 12) {
          suffix = "PM";
          hours = hours - 12;
      }
      if (hours == 0) {
          hours = 12;
      }
 
      c.setName("" + hours + ":" + minutes  +" " + suffix + "  الساعة");
    },10000000000);//Shady Craft YT#4176
  });
  }//Shady Craft YT#4176
});
///////////////////////////////////////////////////////////////////////////
client.on("message", msg => {
  let msgarray = msg.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);  
if(cmd === `${prefix}خاص`){
  let mentions = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!mentions) return msg.reply("**منشن العضو**").then(men => {
      men.delete(2222)
      msg.delete()
  })
  let args2 = args.join(" ").slice(22);
  if(!args2) return msg.reply("**اكتب الرسالة**").then(am => {
      am.delete(2222)
      msg.delete()
  })
let emb = new Discord.RichEmbed()
.setTitle("**DM**")
.addField("**الرسالة**", args2)
.addField("**الرسالة لـ**", mentions)
.addField("**من قبل**", msg.author)
.setDescription(`**هل انت متاْكد برسالتك؟
✔ | نعم

❌ | لا**`)
msg.channel.send(emb).then(od => {
  od.react("✔")
  .then(()=> od.react("✔"))
  .then(()=> od.react("❌"))
  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✔' && user.id === msg.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

let reaction1 = od.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = od.createReactionCollector(reaction2Filter, { time: 12000 });
reaction2.on("collect", r => {
msg.reply("**تم الغاء رسل رسالتك بنجاح**").then(cn => {
cn.delete(2222)
msg.delete()
})
od.delete(2222)
})
reaction1.on("collect", r => {
let embd = new Discord.RichEmbed()
.setTitle("**DM**")
.setDescription(`** الرسالة نوع وش؟ :arrow_down:
🚩 | امبد

✨ | بدون امبد
**`)
msg.delete()
od.delete(2222)
msg.channel.send(embd).then(bo => {
bo.react("🚩")
.then(() => bo.react("🚩"))
.then(() => bo.react("✨"))
let r1 = (reaction, user) => reaction.emoji.name === '🚩' && user.id === msg.author.id;
let r2 = (reaction, user) => reaction.emoji.name === '✨' && user.id === msg.author.id;

let rec1 = bo.createReactionCollector(r1, { time: 12000 });
let rec2 = bo.createReactionCollector(r2, { time: 12000 });
rec1.on("collect", r => {
let embde = new Discord.RichEmbed()
.setTitle("**رسالة**")
.addField("**الرسالة**", args2)
.addField("**من قبل**", msg.author)
bo.delete(2222)
msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(op => {
  op.delete(2222)
  msg.delete()
})
mentions.send(embde)
})
rec2.on("collect", r => {
  mentions.send(args2)
  msg.reply("**تم ارسال الرسالة بنجاح ✔**").then(ede => {
      ede.delete(2222)
      bo.delete(2222)
      msg.delete()
     
  })
  })

})

}) 
})
}
})
///////////////////////////////////////////////////////////////////////////
client.on("message", msg => {
  //Shady Craft YT#4176
    if (msg.author.bot) return;
  //Shady Craft YT#4176
    if (msg.content === prefix+"سيرفرات") {//Shady Craft YT#4176
      client.guilds.forEach(g => {//Shady Craft YT#4176
        
        let l = g.id;
        g.channels
          .get(g.channels.first().id)
          .createInvite({//Shady Craft YT#4176
            maxUses: 10,
            maxAge: 86400
          })//Shady Craft YT#4176
          .then(i =>
            msg.channel.send(`
          **
          اقصى الاستخدام : mem 10
          رابط السيرفر : <https://discord.gg/${i.code}>
          السيرفر : ${g.name} | Id : ${g.id}
          صاحب السيرفر : ${g.owner} 
          **
          `)
          ); //g.owner.id
      });
    }
  });
  ///////////////////////////////////////////////////////////////////////////
  client.on("message", message => {
    if (message.content === prefix + "نبذة عن البوت") {
      const bot = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setColor("#00000")
        .addField("**Servers** :  ", `» 57`, true)
        .addField("**Bot Name** :  ", `» ${client.user.tag} `, true)
        .addField("**Bot Owner** :  ", `» <@460370613274542080>`, true) // تعديل اساسي غير الايدي لايدي حسابك
        .setImage("")
        .setFooter(message.author.username, message.client.avatarURL);
      message.channel.send(bot);
    }
  });
  ///////////////////////////////////////////////////////////////////////////
  client.on("message", message => {
    if (message.author.codes) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == prefix+"احظر") {
      if (message.author.bot) return;
      if (!message.channel.guild)
        return message.reply("** This command only for servers**");
  
      if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
        return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
      if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
        return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
  
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if (
        message.mentions.members.first().highestRole.position >=
        message.member.highestRole.position
      )
        return message.channel.send("ما تقدر تبند شخص رتبته اعلى منك!");
      if (!message.guild.member(user).bannable)
        return message.reply(
          "**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**"
        );
  
      message.guild.member(user).ban(7, user);
  
      message.channel.send(
        `**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `
      );
    }
  });
  ///////////////////////////////////////////////////////////////////////////
  client.on("message", message => {
    if (message.author.x5bz) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == prefix+"اطرد") {
      if (message.author.bot) return;
      if (!message.channel.guild)
        return message.reply("** This command only for servers**");
  
      if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
        return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
      if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
        return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content
        .split(" ")
        .slice(2)
        .join(" ");
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if (!reason) return message.reply("**اكتب سبب الطرد**");
      if (!message.guild.member(user).kickable)
        return message.reply(
          "**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**"
        );
      if (
        message.mentions.members.first().highestRole.position >=
        message.member.highestRole.position
      )
        return message.channel.send("ما تقدر تطرد شخص رتبته اعلى منك!");
  
      message.guild.member(user).kick();
  
      const kickembed = new Discord.RichEmbed()
        .setAuthor(`KICKED!`, user.displayAvatarURL)
        .setColor("RANDOM")
        .setTimestamp()
        .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
        .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
        .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
      message.channel.send({
        embed: kickembed
      });
    }
  });
  ///////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////










  
client.login("NzA3NzkxMjM0MzM2NDI0MDA5.XurZng.GPBM4XKgS9bLW3Tk2WmF29_Mghg");
