const axios = require('axios');

module.exports.config = {
  name: 'imgtext',
  version: '1.0.1',
  permssion: 0,
  credits: 'RAHAT',
  prefix: 'awto',
  description: 'An Image to Text Converter',
  category: 'entertainment',
  usages: 'img2text [reply to an image]',
  cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
  const { messageReply, threadID } = event;

  if (!messageReply || !messageReply.attachments || messageReply.attachments.length === 0 || messageReply.attachments[0].type !== 'photo') {
    return api.sendMessage('Please reply to certain image.', threadID, event.messageID);
  }

  const imageUrl = messageReply.attachments[0].url;
  axios.get('https://image.pollinations.ai/prompt/Future+of+the+Philippines', { params: { imageUrl } })
    .then(async (response) => {
      try {
        const { text } = response.data;
        await api.sendMessage(text, threadID);
      } catch (error) {
        console.log("Something went wrong!");
        api.sendMessage(`It appears that the text in the picture is either blank or unrecognizable.`, threadID);
      }
    })
};
