// this is the SlackBot: GraceHopper for the current TAs at GA 2017.
// to run bot as a TA clone this repo and run:
// npm i
// npm start

require('dotenv').config({ silent: true });
var request = require('request');
var slackbot = require('./slackbot-new');
var fs = require('fs');

var botKey = process.env.BOT_KEY;
// this botkey is related to @Taka slack existance in Students Channel.
// reactivate with your own user in case of finding it disabled

// This is where the TA id's go
// open slack in Chrome, inspect a conversation with Dev Tools and
// look for data-member-id and that will give you the ID of that user
const Gainor              = process.env.GAINOR,
      JasonAndrada        = process.env.JASONANDRADA,
      Taka                = process.env.TAKA,
      LukePate            = process.env.LUKEPATE,
      DominicFarquadson   = process.env.DOMINICFARQUADSON,
      Dov                 = process.env.DOV,
      Taj                 = process.env.TAJ,
      Kyle                = process.env.KYLE;
      Mimi                = process.env.MIMI;
      Dain                = process.env.DAIN;
      Ryan                = process.env.RYAN;
      Peter               = process.env.PETER;
      David               = process.env.DAVID;
      Michael             = process.env.MICHAEL;
let taIDs = `${Ryan},${Dain},${Taka},${Gainor},${Dov},${Taj},${Kyle},${Mimi},${Peter},${David},${Michael}`.split(",");

// initializing bot with our botkey
var bot = new slackbot(botKey);

// requiring our bot functions and extras passing as args bot and TA's
var gracehopper = require('./core-bot-functions')(bot, taIDs);
var easterEggs = require('./easter-eggs')(bot, taIDs);

bot.use(gracehopper);

for (var key in easterEggs) {
	bot.use(easterEggs[key]);
}

bot.connect();

