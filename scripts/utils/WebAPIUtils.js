var ServerActionCreators = require('../actions/ServerActionCreators.react.jsx');
var Constants = require('../constants/Constants.js');
var request = require('superagent');

function _getErrors(res) {
  var errorMsgs = ["Something went wrong, please try again"];
  if ((json = JSON.parse(res.text))) {
    if (json['errors']) {
      errorMsgs = json['errors'];
    } else if (json['error']) {
      errorMsgs = [json['error']];
    }
  }
  return errorMsgs;
}

var APIEndpoints = Constants.APIEndpoints;
console.log(APIEndpoints);
module.exports = {

  search: function(keyword) {
    request.post(APIEndpoints.SEARCH)
      .send({ keyword: keyword })
      .set('Accept', 'application/json')
      .end(function(error, res) {
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            ServerActionCreators.receiveLogin(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            console.log(json);
            ServerActionCreators.receiveSearch(json);
          }
        }
    });
  }
}


