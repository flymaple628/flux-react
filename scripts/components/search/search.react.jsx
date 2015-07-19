var React = require('react');
var SearchActionCreators = require('../../actions/SearchActionCreators.react.jsx');
var DepartmentStore = require('../../stores/DepartmentStore.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');

var PostSearchPage = React.createClass({

  getInitialState: function() {
    return {
      department:  DepartmentStore.getDepartment(),
    };
  },

  componentDidMount: function() {
    DepartmentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DepartmentStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ errors: '',department: DepartmentStore.getDepartment() });
  },
  _onSubmit: function(e) {
    e.preventDefault();
    this.setState({ errors: [] });
    var keyword = this.refs.keyword.getDOMNode().value;
    SearchActionCreators.postSearch(keyword);
  },


  render: function() {
    var department = this.state.department;
    console.log(department);

    return (
      <div>
        <div className="row">
          <div className="card card--login small-10 medium-6 large-4 columns small-centered">
            <form onSubmit={this._onSubmit}>
              <div className="keyword--login__field">
                <label name="keyword">keyword</label>
                <input type="text" name="keyword" ref="keyword" />
              </div>
              <button type="submit" className="card--login__submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PostSearchPage;

