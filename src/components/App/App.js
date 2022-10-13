import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'

import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import TodoList from '../TodoList'
import ItemAddForm from '../ItemAddForm'
import './App.css'

export default class App extends Component {
  startID = 100

  addDate = new Date(2022, 8, 30, 19, 31, 30, 5)

  constructor(props) {
    super(props)
    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Learn React'),
        this.createTodoItem('Build Awesome App'),
        // {label: 'Drink Coffee', important: false, id: 1},
        // {label: 'Learn React', important: true, id: 2},
        // {label: 'Build Awesome App', important: false, id: 3},
      ],
    }
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.startID + 1,
    }
  }

  deleteItem = (id) => {
    // console.log(id);
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((item) => item.id !== id)
      // console.log(newTodoData);
      return {
        todoData: newTodoData,
      }
    })
  }

  addItem = (text) => {
    // console.log(text);
    const newItem = this.createTodoItem(text)
    this.addDate = new Date()

    this.setState(({ todoData }) => {
      const newTodoData = [].concat(todoData)
      newTodoData.push(newItem)
      // console.log(newTodoData)
      return {
        todoData: newTodoData,
      }
    })

    // console.log(this.addDate);
  }

  toggleProperty(arr, id, property) {
    const index = arr.findIndex((element) => element.id === id)
    const oldItem = arr[index]
    const newItem = { ...oldItem, [property]: !oldItem[property] }
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)]
  }

  onToggleImportant = (id) => {
    // console.log('Toggle important', id)
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'important'),
    }))
  }

  onToggleDone = (id) => {
    // console.log('Toggle done', id)
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'done'),
    }))
    // const index = todoData.findIndex((element) => element.id === id)
    // const oldItem = todoData[index]
    // const newItem = {...oldItem, done: !oldItem.done}
    // const newArray = [
    //     ...todoData.slice(0, index),
    //     newItem,
    //     ...todoData.slice(index+1)
    // ]
    // return {
    //     todoData: newArray
    // }
  }

  render() {
    const isLoggedIn = false
    const loginBox = <span>Login please</span>
    const doneCount = this.state.todoData.filter((element) => element.done).length
    const todoCount = this.state.todoData.filter((element) => !element.done).length

    return (
      <div className="todo-app">
        {isLoggedIn ? null : loginBox}
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todo={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAdded={this.addItem} />
        {/* <span>{ (new Date()).toDateString() }</span> */}
        <span>last created {formatDistanceToNow(this.addDate, { includeSeconds: true, addSuffix: true })}</span>
      </div>
    )
  }
}
