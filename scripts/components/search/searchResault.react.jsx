var React = require('react');
var SearchActionCreators = require('../../actions/SearchActionCreators.react.jsx');
var DepartmentStore = require('../../stores/DepartmentStore.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');

var ReceiveSearchPage = React.createClass({

  getInitialState: function() {
    return {
      department:  DepartmentStore.getDepartment()
    };
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },


  render: function() {
    var department = this.state.department;

    return (
      <div>
        <div className="row">
          this is department information.
          {this.department}
        </div>
      </div>
    );
  }
});

module.exports = ReceiveSearchPage;

