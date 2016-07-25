var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: ''
    }
  },

  handleUpdateUser: function(evt) {
    this.setState({
      username: evt.target.value
    })
  },

  handleSubmitUser: function(evt) {
    evt.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    // Если у объекта уже записано имя игрока 1
    if (this.props.routeParams.playerOne) {
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function() {
    return (
      <Prompt
        onSubmitUser = {this.handleSubmitUser}
        onUpdateUser = {this.handleUpdateUser}
        header = {this.props.route.header}
        username = {this.state.username} />
    );
  }
})

module.exports = PromptContainer;
