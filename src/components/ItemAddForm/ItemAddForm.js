import { Component } from 'react'
import './ItemAddForm.css'

export default class ItemAddForm extends Component {
  static defaultProps = {
    onAdded: () => {},
  }

  state = {
    label: '',
  }

  onLabelChanged = (event) => {
    // console.log(event.target.value);
    this.setState({
      label: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onAdded(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control item-add-form_input"
          placeholder="What needs to be done"
          onInput={this.onLabelChanged}
          value={this.state.label}
        />
        <button
          className="btn btn-outline-secondary item-add-form_button"
          // onClick={() => this.props.onAdded('Added text')}
        >
          Add Item
        </button>
      </form>
    )
  }
}
