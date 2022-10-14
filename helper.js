module.exports ={ 
    getChatId(msg){
        return msg.chat.id
    },
    getQuerryId(querry_id){
        return querry_id.from.id
    }
}