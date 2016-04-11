import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="users-page">
        <h1>App: Users</h1>
        <ul>
          {this.props.users.map(function(user) {
            return (
              <li key={user.id}>{user.name}</li>
            );
          })}
        </ul>
      </div>
    )
  }
});