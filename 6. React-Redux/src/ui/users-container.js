import React from 'react';
import Users from './users';
import { connect } from 'react-redux';
import { getUsers } from 'api/user';

const UserContainer = React.createClass({
  componentWillMount: function() {
    getUsers()
  },
  render: function() {
    return (
      <Users {...this.props} />
    )
  }
});

const stateToProps = function(state) {
  return {
    users: state.userReducer.users
  }
}

const dispatchToProps = function(dispatch) {
  // In a real app, you would 'dispatch' an action here based
  // on the user being clicked
  return {
    onClick: function() {
      console.log('user was clicked')
    }
  }
}

export default connect(stateToProps, dispatchToProps)(UserContainer)