import React from 'react'

import TodoSearch from './TodoSearch'
import TodoList from './TodoList'
import TodoItem from './TodoItem'

const TodoApp = () => {
  return (
    <section>
      <h1 className="text-center">Todo App</h1>
      <section className="row align-spaced">
        <div className="columns medium-6 small-12">
          <div className="container">
            <TodoSearch />
            <TodoList />
            <TodoItem />
          </div>
        </div>
      </section>
    </section>
  )
}

export default TodoApp
