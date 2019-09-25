import React, { Component } from "react";
import AddTodo from "./components/todos/AddTodo";
import Todo from "./components/todos/Todo";
import uuid from "uuid";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoSubmitted: false,
      items: [],
      id: uuid(),
      item: "",
      editItem: false
    };
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    // e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      done: false
    };
    // console.log(newItem);
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      todoSubmitted: true,
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    // console.log(id);
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);
    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };

  handleDone = id => {
    const updatedItems = this.state.items.map(item => {
      if (item.id === id) return { ...item, done: !item.done };
      return item;
    });
    this.setState({ items: updatedItems });
  };

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <div className="container">
          <div className="row">
            <div className="input-buttons col-xs-11 col-sm-11">
              <AddTodo
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
            </div>
            <div className="input-buttons col-xs-1 col-sm-1">
              <p onClick={this.handleSubmit} className="add-todo">
                <i
                  className={
                    this.state.editItem
                      ? "fa fa-save fa-2x"
                      : "fa fa-plus fa-2x"
                  }
                ></i>
              </p>
            </div>
          </div>

          <div className="row">
            <ul className="todo-list">
              {this.state.items.length > 0 ? (
                this.state.items.map(item => {
                  return (
                    <li
                      key={item.id}
                      className="todo"
                      style={{ width: 100 + "%" }}
                    >
                      <Todo
                        handleDone={() => this.handleDone(item.id)}
                        item={item}
                        handleDelete={() => this.handleDelete(item.id)}
                        handleEdit={() => this.handleEdit(item.id)}
                      />
                    </li>
                  );
                })
              ) : (
                <p key="message" className="center">
                  You have no todo's left{" "}
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
