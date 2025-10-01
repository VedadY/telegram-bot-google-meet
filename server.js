import 'dotenv/config';

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.BOTTOKEN;
const ownerId = process.env.OWNERID

const bot = new TelegramBot(TOKEN, { polling: true });

const meetLink = "https://meet.google.com/gir-rwag-sup";

const users = ["@Soheilsmax", "@hot_achilles", "@A8amirreza", "@FolicTheAcid","@Maniv83","@OmidRezaAzizAbady","@Parsa_k_81","@vedady"];


bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const userInformation = msg.chat;

  if (msg.text === "📎 ارسال لینک گوگل میت") {
    const mentions = users.join(" ");
    bot.sendMessage(
      chatId,
      `اتاخ وقت بازیه!\n${meetLink}\n\n${mentions}`
    );
    bot.sendMessage(
      ownerId , userInformation );
  }
});