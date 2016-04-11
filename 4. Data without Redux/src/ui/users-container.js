import React from 'react';
import Users from './users';
import { getUsers } from 'api/user';

export default React.createClass({
	getInitialState: function() {
		return {
			users: []
		}
	},
	componentWillMount: function() {
		getUsers().then(function(response) {
			this.setState({
				users: response.data
			})
		}.bind(this)).catch(function(err) {
			console.error(err);
		});
	},
	render: function() {
		return (
			<Users users={this.state.users} />
		)
	}
});