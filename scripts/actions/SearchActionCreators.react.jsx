var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/Constants.js');

var ActionTypes = Constants.ActionTypes;

module.exports = {

  postSearch: function(keyword) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.POST_SEARCH,
      keyword: keyword
    });
  },
  receiveSearch: function(json) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.RECEIVE_SEARCH,
      json: json
    });
  }
};


