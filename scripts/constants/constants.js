var keyMirror = require('keymirror');

var APIRoot = "http://localhost:3001";

module.exports = {

  APIEndpoints: {
    SEARCH:        APIRoot + "/v1/search"
  },
  //指定可以用的類型 為了比較好了語意
  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),
  //可以使用的方法
  ActionTypes: keyMirror({
    // Routes
    REDIRECT: null,

    //applyte
    POST_SEARCH: null,
    RECEIVE_SEARCH: null
  })

};
