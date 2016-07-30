var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var todo = this.refs.todoText.value;

    if (todo) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todo);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="Go for the milk"/>
          <button className="button">Add todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;