module.exports.config = {
  name: "info",
  version: "1.0.1", 
  permssion: 0,
  credits: "Ialamick Cyber Chat",
  prefix:true,
  description: "Admin and Bot info.",
  category: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/ArdDUY1.mp4", 

            "https://i.imgur.com/ArdDUY1.mp4", 

            "https://i.imgur.com/ArdDUY1.mp4",

            "https://i.imgur.com/ArdDUY1.mp4"];

var callback = () => api.sendMessage({body:`•—»✨𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺
 •┄┅════❁🌺❁════┅┄•

𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : 𝗡𝗜𝗦𝗔𝗡 𝗛𝗢𝗦𝗦𝗘𝗜𝗡 𝗘𝗗𝗜𝗧𝗭
𝗦𝗨𝗣𝗣𝗢𝗥𝗧𝗚𝗖ఌ︎:https://m.me/j/Aba5xjgUn-X7eDrA/
•┄┅══❁CONCATET❁══┅┄• 

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐏𝐚𝐠𝐞 : https://www.facebook.com/profile.php?id=100080682514874

𝐖𝐏  : wa.me/+8801775602198
𝗧𝗴  :https://t.me/CyberLisa_Bot
𝗬𝘁  :https://youtube.com/@nisan_max_editz-zone_185?
𝗶𝗻𝘀𝘁𝗮:https://www.instagram.com/im_editz_x2.0?

•┄┅═══❁🌺❁═══┅┄•\n🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n •┄┅═══❁🌺❁═══┅┄•

TYPE %2help

𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.config.BOTNAME}

𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : ${global.config.PREFIX}

•—»✨ 𝐔𝐩𝐭𝐢𝐦𝐞

𝐓𝐨𝐝𝐚𝐲 𝐈𝐬 𝐓𝐢𝐦𝐞 : ${juswa} 

𝐁𝐨𝐭 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 ${hours}:${minutes}:${seconds}.

𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠  ༄🌺\n｢🕋｣${global.config.BOTNAME}｢🕋｣`,attachment: fs.createReadStream(__dirname + "/noprefix/utp.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/upt.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/noprefix/upt.mp4")).on("close",() => callback());
   };
