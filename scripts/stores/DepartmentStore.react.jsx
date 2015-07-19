var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/Constants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _department=[]
var _errors=[]

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var DepartmentStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  //取得所有學系資料
  getDepartment: function() {
    return _department;
  },
  //取得單一系所資料
  getDepartmentId: function(id) {
    return _department[id];
  }
});

DepartmentStore.dispatchToken = AppDispatcher.register(function(payload) {

  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_SEARCH:
      if (action.json ) {
        _department = action.json;
        console.log("RECEIVE_SEARCH:"+action.json);
      }
      if (action.errors) {
        _errors = action.errors;
      }
      DepartmentStore.emitChange();
    break;

    default:
  }

  return true;
});

module.exports = DepartmentStore;

