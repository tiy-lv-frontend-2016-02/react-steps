import React from 'react';
import Aside from './aside';
import store from 'store';

require('assets/styles/aside.scss');

export default React.createClass({

  getInitialState: function() {
    return {
      hasUsers: false
    }
  },

  componentWillMount: function() {
    store.subscribe(function() {
      var currentStore = store.getState()
      this.setState({
        hasUsers: currentStore.userReducer.users.length ? true : false
      })
    }.bind(this))
  },

  render: function() {
    return (
      <Aside hasUsers={this.state.hasUsers} />
    )
  }
});