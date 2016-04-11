import React from 'react';
import AsideContainer from 'ui/aside-container';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/widgets">Widgets</Link>
          <Link to="/users">Users</Link>
        </nav>
        <AsideContainer />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
});