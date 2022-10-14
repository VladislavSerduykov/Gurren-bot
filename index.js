const TelegramApi = require ('node-telegram-bot-api')
const helper = require('./helper')
const kb = require('./keyboard')
require('dotenv').config()

const bot = new TelegramApi (process.env.token, {polling: true})
// Массив с аудио
let audioArray = ['CQACAgIAAxkBAAEY3wpjRHMbRYvEwn0mcmqArKCaq5L6AAOTHgACM_spSgrws3SxbqtmKgQ','CQACAgIAAxkBAAEYuupjPd08GglA00QgozjcwX1Rn-ob3QAC2iAAAsZC8UkXv0XzpsSTbioE'];



    bot.setMyCommands([
        {command: '/start', description: 'Еще раз!'}
    ])
    
    bot.on('message', async (msg) => {
        const msg_text = msg.text

        if (msg_text === '/start') {
                return await bot.sendMessage(helper.getChatId(msg),`Выбери автора ${msg.from.first_name}?`,{
                    reply_markup:{
                        inline_keyboard: kb.chooseAuthor
                    }
                } )
        }else {
            return await bot.sendMessage(helper.getChatId(msg), `Выбирай что предлагают ${msg.from.first_name}!`)
        }
    })
    bot.on('callback_query', async (querry) => {
        const bog = bot.answerCallbackQuery(querry.id)
        const name = querry.from.first_name
        switch (querry.data){
            case '1author':
                bog
                return await bot.sendMessage(helper.getQuerryId(querry), `Что тебя интересует ${name}`, {
                    reply_markup: {
                        inline_keyboard: kb.authorOptions
                    }
                })
            case '2author':
                bog
                return await bot.sendMessage(helper.getQuerryId(querry), `Что тебя интересует ${name}`, {
                    reply_markup: {
                        inline_keyboard: kb.authorOptions
                    }
                })
            case '3author':
                bog
                return await bot.sendMessage(helper.getQuerryId(querry), `Что тебя интересует ${name}`, {
                    reply_markup: {
                        inline_keyboard: kb.authorOptions
                    }
                })
            case '4author': 
            bog
                return await bot.sendMessage(helper.getQuerryId(querry), `Что тебя интересует ${name}`, {
                    reply_markup: {
                        inline_keyboard: kb.authorOptions
                    }
                })
            case 'likely': 
                  bog
                  return await bot.sendAudio(helper.getQuerryId(querry),audioArray[0])  
        }
    })

