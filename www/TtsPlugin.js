var exec = require('cordova/exec');
/**
 * Constructor
 */
function TtsPlugin() {}

TtsPlugin.prototype.initTTS = function(successCallBack, failCallBack) {
    exec(function(result){
            successCallBack();
        },
        function(error){
            failCallBack();
        },
        "TtsPlugin",
        "initTTS",
        []
    );
}

TtsPlugin.prototype.setLanguage = function(lang) {
    exec(function(result){
        },
        function(error){
        },
        "TtsPlugin",
        "setLanguage",
        [lang]
    );
}

TtsPlugin.prototype.setRate = function(rate) {
    exec(function(result){
        },
        function(error){
        },
        "TtsPlugin",
        "setRate",
        [rate]
    );
}


TtsPlugin.prototype.speak = function(text) {
    exec(function(result){
        },
        function(error){
        },
        "TtsPlugin",
        "speak",
        [text]
    );
}

TtsPlugin.prototype.stop = function() {
    exec(function(result){
        },
        function(error){
        },
        "TtsPlugin",
        "stop",
        []
    );
}

TtsPlugin.prototype.isSpeaking = function(callback) {
    exec(callback, function() { callback(false); }, "TtsPlugin","isSpeaking",[]);
};

var ttsPlugin = new TtsPlugin();
module.exports = ttsPlugin