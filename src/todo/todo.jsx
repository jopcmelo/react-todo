import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: '',
      list: [{ description: 'hello world!', done: false }]
    }

    this.refresh = this.refresh.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  refresh() {
    this.setState({
      ...this.state, description: '', list: [
        { description: 'hello world!', done: false }
      ]
    })
  }

  handleAdd() {
    const description = this.state.description
    this.setState({ ...this.state, description: '', list: [...this.state.list, { description, done: false }] })
  }

  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value })
  }

  handleRemove(todo) {
    this.setState({ ...this.state, description: '', list: this.state.list.filter(todo => todo.description !== todo.description) })
  }

  render() {
    return (
      <div>
        <PageHeader name="Todos" small="Add" />
        <TodoForm
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          description={this.state.description} />
        <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
