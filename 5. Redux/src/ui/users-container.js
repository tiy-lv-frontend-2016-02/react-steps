import React from 'react';
import Users from './users';
import { getUsers } from 'api/user';
import store from 'store';

export default React.createClass({
	getInitialState: function() {
		return {
			users: []
		}
	},
	componentWillMount: function() {
		getUsers();
		store.subscribe(function() {
      var currentStore = store.getState()
      this.setState({
      	users: currentStore.userReducer.users
      })
    }.bind(this))
	},
	render: function() {
		return (
			<Users users={this.state.users} />
		)
	}
});