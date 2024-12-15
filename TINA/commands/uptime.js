module.exports.config = {
	name: "uptime",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "nazrul", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
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
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/YXFfZfD.jpg",
            "https://i.imgur.com/CwAiFqt.jpg",
            "https://i.imgur.com/zHAmF70.jpg",
            "https://i.imgur.com/Tu0omOL.jpg",
            
"https://i.imgur.com/YXFfZfD.jpg"];var callback = () => api.sendMessage({body:`•┄┅════❁🌺❁════┅┄•\n    𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧\n•┄┅════❁🌺❁════┅┄•\n𝐍𝐀𝐌𝐄➢𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭\n𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 ➢ ｢ ${global.config.PREFIX} ｣\n𝗧𝗢𝗗𝗬 𝗜𝗦 𝗧𝗜𝗠𝗘 ➢ ${juswa}\n𝗕𝗢𝗧 𝗜𝗦 𝗥𝗨𝗡𝗡𝗜𝗡𝗚\n𝗛𝗢𝗨𝗥𝗦━➢ ${hours} \n𝗠𝗜𝗡𝗨𝗧𝗘 ━➢ ${minutes}\n𝗦𝗘𝗖𝗢𝗡𝗗 ━➢ ${seconds}\n𝐎𝐖𝐍𝐄𝐑➢ 𝐍𝐀𝐙𝐑𝐔𝐋 \n⋆✦⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯✦⋆\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐦𝐚𝐢𝐜𝐤 𝐂𝐡𝐚𝐭`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
