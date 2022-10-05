module.exports = {
        audioChoose: {reply_markup: {
            inline_keyboard: [[{
                text: 'Приготовь зубы',
                callback_data: '1'
            },
            {
                text: 'Need more motivation!',
                callback_data: '2'
               
            },{
                text: 'Еще раз!',
                callback_data: '3'
            }]]
        }
    }
}