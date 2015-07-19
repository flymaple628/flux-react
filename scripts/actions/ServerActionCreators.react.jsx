var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/Constants.js');

var ActionTypes = Constants.ActionTypes;

module.exports = {
  //將事件打包並帶入ＴＹＰＥ下傳到ＤＩＳＰＡＴＣＨ

  receiveSearch: function(json, erroes){
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_SEARCH,
      json: json
    });
  }

};

