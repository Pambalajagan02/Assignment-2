import {Component} from 'react'

import './index.css'

class Passwordlist extends Component {
  onClickDelete = () => {
    const {item, onclickdeltethe} = this.props
    const {id} = item
    onclickdeltethe(id)
  }

  render() {
    const {item, ischecked} = this.props
    const {websiteinput, username, passwordinput} = item
    const firstname = username[0].toUpperCase()

    return (
      <li className="list-container">
        <h1 className="user-heading">{firstname}</h1>
        <div className="items-coulm-flex">
          <p>{websiteinput}</p>
          <p>{username}</p>
          {ischecked ? (
            <p>{passwordinput}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
        <button
          type="button"
          className="deletebutt"
          onClick={this.onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="deleteimg"
          />
        </button>
      </li>
    )
  }
}

export default Passwordlist
