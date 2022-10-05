const TelegramApi = require ('node-telegram-bot-api')
const {audioChoose} = require('./audio')
const token = '5310221010:AAGp9Npf9M_P_jF7qSOrpsB-uX9dZTWwnPs'

const bot = new TelegramApi (token, {polling: true})
// Массив с аудио
let audioArray = ['CQACAgIAAxkBAAEYusNjPdZ5X7iZS-DBTi-LXT-XAy1_XgACpSAAAsZC8UlqKTsuCz76GCoE','CQACAgIAAxkBAAEYuupjPd08GglA00QgozjcwX1Rn-ob3QAC2iAAAsZC8UkXv0XzpsSTbioE'];

const start = () => {
    bot.setMyCommands([
        {command: '/teeth', description: `Приготовь зубы`},
        {command: '/start', description: 'Еще раз!'}
    ])
    
    bot.on('message', async (msg) => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/teeth'){
            return await bot.sendAudio(chatId,audioArray[0])
        } else if (text === '/start') {
                return await bot.sendMessage(chatId,`Что тебя беспокоит ${msg.from.first_name}?`,audioChoose )
        }else {
            return await bot.sendMessage(chatId, `Выбирай что предлагают ${msg.from.first_name}!`, audioChoose)
        }
    })
    bot.on('callback_query', async (querry) => {
        const chatId = querry.from.id
        if (querry.data === '1'){
            return await bot.sendAudio(chatId,audioArray[0])
        } else if (querry.data === '2'){
            return await bot.sendAudio(chatId,audioArray[1])
        } else if( querry.data === '3'){
            return await bot.sendMessage(chatId, `Пока не придумал`)
        }
    })
}
start()