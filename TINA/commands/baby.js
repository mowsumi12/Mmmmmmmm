const axios = require('axios');

const baseApiUrl = async () => {
    const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
    console.log(base.data.api);
    return base.data.api;
};

module.exports.config = {
  name: "baby",
  version: "6.9.0",
  credits: "RAHAT KHAN🌹",
  countDown: 0,
  hasPermission: 0,
  description: "better than all sim simi",
  commandCategory: "chat",
  usePrefix: true,
  usages: `fun`,
};

module.exports.run = async function ({ api, event, args, Users }) {
  try {
    const link = `${await baseApiUrl()}/baby`;
    const dipto = args.join(" ").toLowerCase();
    const uid = event.senderID;

if (!args[0]) {
      const ran = ["Bolo baby", "hum", "type help baby", "type !baby hi"];
      const r = ran[Math.floor(Math.random() * ran.length)];

if (!dipto[0]) return api.sendMessage(`${name}\n ${rand}`, event.threadID, event.messageID);
};
