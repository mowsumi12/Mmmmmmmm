const axios = require('axios');

module.exports.config = {
    name: "nipa",
    credit: "AkhiroDEV",
    description: "Talk with ZoroAI",
    usage: "zoro [query]",
    usePrefix: true,
    commandCategory: "fun",
    hasPermssion: 0 // Adjust the permission level as needed
};

module.exports.run = async function({ api, event, args }) {
    const behavior = "you are nyx ai";
    const prompt = args.join(" ");
if (event.body.indexOf("siri") === 0 || event.body.indexOf("Siri") === 0 || event.body.indexOf("misha") === 0 || event.body.indexOf("Misha") === 0)  {
    const { threadID, messageID } = event;
    const input = event.body;
    const message = input.split(" ");
    if (!message) {
        return api.sendMessage("Oy... What's your question?", event.threadID, event.messageID);
    }
    try {
        const response = await axios.get(`https://personal-ai-phi.vercel.app/kshitiz?prompt=${encodeURIComponent(prompt)}&content=${encodeURIComponent(behavior)}`);
        const answer = response.data.answer;
        api.sendMessage(answer, event.threadID, event.messageID);
    } catch (error) {
        console.log(error);
        api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
    }
};
