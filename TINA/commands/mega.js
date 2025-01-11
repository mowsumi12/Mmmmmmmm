module.exports.config = {

name: "mega",

version: "1.0.2",

hasPermssion: 0,

credits: "Emon",

description: "ai",

commandCategory: "botAi",

usages: "bot+bot Help", 

cooldowns: 5,

};

module.exports.run = async function({ api, event, args, Users }) {

const axios = require("axios");

const query = args.join(" ");

var name = await Users.getNameUser(event.senderID);

var tl = ["🍒)⎯⃝লিৃ�পৃ� কিৃ�সৃ� কৃ�রুৃ�মৃুৃঁ আৃঁয়ৃুুু🥺", "⎯͢⎯⃝🩵 খাৃঁলিৃঁ ডাৃঁকেুকেৃঁ দেৃঁখৃ🔪⎯͢⎯⃝💚", "≛⃝🌺উৃঁফৃঁসৃঁ জাৃঁনসৃ✿၁'নডৃ‍ কিডৃনঃুদৃॢঁু 🌺🥺", "🌸💚"];

var rand = tl[Math.floor(Math.random() * tl.length)];

try {

if (!query) {

return api.sendMessage(`${name},\n\n${rand}\n\n`, event.threadID, event.messageID);

}

const encodedQuery = encodeURIComponent(query);

const apiUrl = `https://personal-ai-phi.vercel.app/kshitiz?q=${encodedQuery}`;

const res = await axios.get(apiUrl);

if (res.data && res.data.generated_text) {

return api.sendMessage(`${name},\n\n${res.data.generated_text}`, event.threadID, event.messageID);

} else {

return api.sendMessage('Failed to get a valid response', event.threadID, event.messageID);

}

} catch (error) {

console.error('Error fetching data:', error.message);

return api.sendMessage('An error occurred while fetching the response', event.threadID, event.messageID);

}

};

