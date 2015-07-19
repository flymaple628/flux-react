var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/Constants.js');

var ActionTypes = Constants.ActionTypes;

module.exports = {

  redirect: function(route) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.REDIRECT,
      route: route
    });
  }

};


