import React from 'react'
import './AppHeader.css'
import PropTypes from 'prop-types'

function AppHeader({ toDo, done }) {
  return (
    <div className="app-header d-flex">
      <h1>To Do List</h1>
      <h2>
        {toDo}
        {' more to do, '}
        {done}
        {' done'}
      </h2>
    </div>
  )
}

AppHeader.defaultProps = {
  toDo: 0,
  done: 0,
}

AppHeader.propTypes = {
  toDo: PropTypes.number,
  done: PropTypes.number,
}

export default AppHeader
