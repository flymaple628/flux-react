var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ReactPropTypes = React.PropTypes;

var Header = React.createClass({

  render: function() {
    var rightNav = (
      <ul className="right">
        <li><Link to="search">search</Link></li>
      </ul>
    );


    return (
      <nav className="top-bar" data-topbar role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1><a href="#"><strong>S</strong></a></h1>
          </li>
          <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>

        <section className="top-bar-section">
          {rightNav}
        </section>
      </nav>
    );
  }
});

module.exports = Header;

