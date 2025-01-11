const axios = require('axios');
const { createReadStream, unlinkSync, createWriteStream } = require('fs-extra');

module.exports.config = {
  name: "genix", 
  version: "1.0.0", 
  hasPermission: 2,
  credits: "Dipto",
  description: "prompt to photo, photo to photo",
  usePrefix: false, 
  commandCategory: "image generator", 
  usage: "prompt | reply a photo",
  cooldowns: 10
};

module.exports.handleReply = async function ({ api, event , args}) {
  if (event.type == "message_reply") {
    let mod = args[0] || "1";
    let prompt = args.slice(1).join(" ").toLowerCase() || "anime type";
    const url = event.messageReply.attachments[0].url;
    if (isNaN(url)) {
      try {
        api.setMessageReaction("🐤", event.messageID, (err) => {}, true);
        const response = await axios.get(`${global.config.API}/dipto/genix?url=${encodeURIComponent(url)}&prompt=${encodeURIComponent(prompt)}&model=${mod}`);
      const link = response.data.data;
      const filePath = __dirname + `/tmp/jini.png`;
      const respo = await axios.get(link, { responseType: 'stream' });
      const writer = createWriteStream(filePath);
      respo.data.pipe(writer);
      writer.on('finish', async () => {

        await api.sendMessage({ 
          body: "Here's your photo", 
          attachment: createReadStream(filePath)
        }, event.threadID, (error, info) => {
global.client.handleReply.push(info.messageID, {
            commandName: this.config.name,
            type: 'reply',
            messageID: info.messageID,
            author: event.senderID,
            link: link
          });
        }, event.messageID);
         unlinkSync(filePath);
      });
      } catch (error) {
        console.log(error);
      }
    }
  }
};

module.exports.run = async function ({ api, args, event }) {
  try {
    let mod = args[0] || "1";
    let prompt = args.slice(1).join(" ").toLowerCase() || "anime type";
    if (event.type === "message_reply") {
      const url = event.messageReply.attachments[0].url;
const wait = api.sendMessage("wait baby <💋", event.threadID);
      try {
        const response = await axios.get(`${global.config.API}/dipto/genix?url=${encodeURIComponent(url)}&prompt=${prompt}&model=${mod}`);
      const link = response.data.data;
      const filePath = __dirname + `/tmp/jini.png`;
      const respo = await axios.get(link, { responseType: 'stream' });
      const writer = createWriteStream(filePath);
      respo.data.pipe(writer);
      writer.on('finish', async () => {
        await api.sendMessage({ 
          body: "Here's your photo", 
          attachment:  createReadStream(filePath)
        }, event.threadID, (error, info) => {
global.client.handleReply.push(info.messageID, {
            commandName: this.config.name,
            type: 'reply',
            messageID: info.messageID,
            author: event.senderID,
            link: link
          });
        }, event.messageID);
        api.unsendMessage(wait.messageID);
                unlinkSync(filePath);

              });
      } catch (e) {
        console.log(e);
      }
    } else if (prompt) {
      const wait = api.sendMessage("wait baby <💋", event.threadID);
      const response = await axios.get(`${global.config.API}/dipto/genix?prompt=${encodeURIComponent(prompt)}`);
      const link = response.data.data;
      const filePath = __dirname + `/tmp/jini.png`;
      const respo = await axios.get(link, { responseType: 'stream' });
      const writer = createWriteStream(filePath);
      respo.data.pipe(writer);
      writer.on('finish', async () => {
        await api.sendMessage({ 
          body: "Here's your photo", 
          attachment: createReadStream(filePath)
        }, event.threadID, (error, info) => {
global.client.handleReply.push(info.messageID, {
            commandName: this.config.name,
            type: 'reply',
            messageID: info.messageID,
            author: event.senderID,
            link: link
          });
        }, event.messageID);
        api.unsendMessage(wait.messageID);
        unlinkSync(filePath);
      });
    }
  } catch (error) {
    console.error(`Failed to generate: ${error.message}`);
    api.sendMessage(`${error.message}.\nAn error`, event.threadID, event.messageID);
  }
};