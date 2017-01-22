import React, { Component } from 'react'

export default class TodoSearch extends Component {
  render() {
    return (
        <section className="container__header">
          <section>
            <input
              type="text"
              placeholder="Search Todos"
            />
          </section>
          <section>
            <input type="checkbox" />
            Show completed todo
          </section>
        </section>
    )
  }
}
