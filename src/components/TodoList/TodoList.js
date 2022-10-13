import PropTypes from 'prop-types'

import TodoListItem from '../TodoListItem'

import './TodoList.css'

const TodoList = ({ todo, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todo.map((item) => {
    const { id, ...itemProps } = item

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          // onDeleted = {() => console.log('Deleted')}
          // label = { item.label }
          // important={item.important}
        />
      </li>
    )
  })

  return <ul className="list-group todo-list">{elements}</ul>
}

TodoList.defaultProps = {
  todo: [],
  onDeleted: () => {},
  onToggleImportant: () => {},
  onToggleDone: () => {},
}

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func,
}

export default TodoList
