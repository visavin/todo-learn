import { Component } from 'react'
import PropTypes from 'prop-types'

import './TodoListItem.css'

export default class TodoListItem extends Component {
  // state = {
  //     done: false,
  //     important: false,
  // }

  // onLabelClick = () => {
  //     // console.log(`Done ${this.props.label}`);
  //     this.setState(({done}) => {
  //         return {
  //             done: !done
  //         };
  //     });
  //     // this.setState({
  //     //     done: true,
  //     // })
  // }

  // onMarkImportant = () => {
  //     // console.log(`Done ${this.props.label}`);
  //     this.setState((state) => {
  //         return {
  //             important: !state.important,
  //         };
  //     });
  //     // this.setState({
  //     //     important: true,
  //     // })
  // }

  static propTypes = {
    label: PropTypes.string.isRequired,
  }

  render() {
    // const {label, important=false} = this.props;
    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props
    // const {done, important} = this.state;
    let classNames = 'todo-list-item'
    if (done) {
      classNames += ' done'
    }
    if (important) {
      classNames += ' important'
    }

    // const style = {
    //     color: important ? 'steelblue' : 'black',
    //     fontWeight: important ? 'bold' : 'normal',
    // }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          // style={style}
          onClick={onToggleDone}
        >
          {label}
        </span>
        <span>
          <button type="button" onClick={onToggleImportant} className="btn btn-outline-success btn-sm">
            <i className="bi bi-exclamation-lg"></i>
          </button>
          <button type="button" onClick={onDeleted} className="btn btn-outline-danger btn-sm">
            <i className="bi bi-x-lg"></i>
          </button>
        </span>
      </span>
    )
  }
}
