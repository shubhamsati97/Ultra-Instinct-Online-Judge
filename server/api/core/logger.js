function log(message){
    console.log(message)
}
module.exports = {
    //usse winston or something here, this is dummy impl.
    info: function(message){
        log('[INFO] '+message);
    },
    log: function(message){
        log(message);
    }
}