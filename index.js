const Telegraf = require("telegraf");

const bot = new Telegraf("5474904586:AAEm2GqJ1cQ5RtAIDWToJZx64sEKQ5Z3ofU");

// Methods

// bot.start((ctx) => {
//   // start bosilganda
//   ctx.reply(ctx.from.first_name + " Welcome to my first telegram bot");
// });

// bot.help((ctx) => {
//   // help bosilganda
//   ctx.reply("you clicked help btn");
// });

// bot.settings((ctx) => {
//   //settings bosilganda
//   ctx.reply("you clicked settings btn");
// });

// bot.command("hi", (ctx) => {
//   // command metodini ishlasak birinchi argumentga nima yozsak oshani reply qiladi
//   ctx.reply("you clicked hi btn");
// });

// bot.hears("tiger", (ctx) => {
//   // hears metodni command metodidan farqi bunda slash(/) qoyilmidi atak bir hil
//   ctx.reply("ozini bos");
// });

// bot.on("sticker", (ctx) => {
//   // on metodi nima kiritganimizni turini etib beradi birinchi argumentiga qarab text kiritsak message dib etadi masalan
//   ctx.reply("you submitted text");
// });

// bot.mention("botStart", (ctx) => {
//   // mention method oldiga @ qoyilganda ishlaydi faqat birinchi argumentni boshiga @shuni qoyganda
//   ctx.reply("mention method");
// });
// bot.phone("(93)574-71-91", (ctx) => {
//   // phone method oldiga @ qoyilganda ishlaydi faqat birinchi argumentni boshiga @shuni qoyganda
//   ctx.reply("phone method");
// });
// bot.hashtag("botStart", (ctx) => {
//   // hashtag method oldiga # qoyilganda ishlaydi faqat birinchi argumentni boshiga #shuni qoyganda
//   ctx.reply("hashtag method");
// });

////////////////////////////////////////////////////////////////

// Ussing next in midlware functions

// bot.use((ctx, next) => {
//   // use methodi ozimiz bilgandek nima yozsegam chiquradi keyingi midlwaregayam kirishi uchun nextdan foydalandik
//   ctx.state.apple = 3;
//   ctx.reply("You used bot");
//   next(ctx);
// });

// bot.start((ctx) => {
//   ctx.reply("You clicked start" + ctx.state.apple);
// });

////////////////////////////////////////////////////////////////

// ctx shortcuts and standart telegram methods

// bot.command("hi", (ctx) => {
//   ctx.reply("voalekum bolam"); // ctx ni metodidan foydalansak chat id shartmas
//   bot.telegram.sendMessage(ctx.chat.id, "hello"); // telegramni metodidan foydalansak chat id bolishi keraks
// });
////////////////////////////////////////////////////////////////

// echo bot starting

const helpMessage = `
Say something to me
/help to get a help
/start to start the bot
`;

bot.start((ctx) => {
  ctx.reply("Welcome to my first telegram bot " + ctx.from.first_name);
  ctx.reply(helpMessage);
});

bot.command("echo", (ctx) => {
  const text = ctx.message.text;
  const inputText = text.split(" ");

  let message = "";

  if (inputText.length == 1) {
    message = "You have writed echo";
  } else {
    inputText.shift();
    message = inputText.join(" ");
  }
  // console.log(inputText);

  ctx.reply(message);
});

bot.launch();
