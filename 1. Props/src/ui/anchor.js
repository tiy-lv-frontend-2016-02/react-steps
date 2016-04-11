import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <a href={this.props.goto}>{this.props.text}</a>
    )
  }
});