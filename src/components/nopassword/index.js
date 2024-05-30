import {Component} from 'react'

import './index.css'

class NopassWordView extends Component {
  render() {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="nopassimg"
        />
        <p>No Passwords</p>
      </div>
    )
  }
}
export default NopassWordView
