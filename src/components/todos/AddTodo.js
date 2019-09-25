import React, { Component } from "react";

class AddTodo extends Component {

  render() {
    const { item, handleChange } = this.props;
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={item}
            style={{ width: 100 + "%" }}
          />
        </form>
      </div>
    );
  }
}
export default AddTodo;
