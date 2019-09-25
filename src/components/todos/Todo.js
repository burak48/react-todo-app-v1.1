import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { item, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <h6
          style={
            item.done ? { textDecoration: "line-through", color: "green" } : { textDecoration: "none", color: "black" }
          }
        >
          {item.title}
        </h6>
        <div className="todo-icon">
          <span className="check">
            <i
              className="fa fa-check fa-lg"
              onClick={this.props.handleDone}
              style={{ marginRight: 87 + "px", padding: 10 + "px" }}
            ></i>
          </span>
          <span className="edit" onClick={handleEdit}>
            <i
              className="fa fa-edit fa-lg"
              style={{ marginRight: 40 + "px", padding: 10 + "px" }}
            ></i>
          </span>
          <span className="deleteList" onClick={handleDelete}>
            <i
              className="fa fa-trash-o fa-lg"
              style={{ marginRight: 2 + "px", padding: 10 + "px" }}
            ></i>
          </span>
        </div>
      </div>
    );
  }
}
