import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './passwordform.css'

import NopassWordView from '../nopassword'

import Passwordlist from '../passlist'

class Passwordform extends Component {
  state = {
    count: 0,
    websiteinput: '',
    passwordinput: '',
    username: '',
    ischecked: false,
    listofpass: [],
    serchinput: '',
  }

  onChangeWesiteName = event => {
    this.setState({websiteinput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordinput: event.target.value})
  }

  onChangeCheckedOrNot = event => {
    this.setState({ischecked: event.target.checked})
  }

  onChnageSearch = event => {
    this.setState({serchinput: event.target.value})
  }

  onSbumitForm = event => {
    event.preventDefault()
    const {websiteinput, username, passwordinput} = this.state
    const newlist = {
      id: uuidv4(),
      websiteinput,
      username,
      passwordinput,
    }
    this.setState(prev => ({
      listofpass: [...prev.listofpass, newlist],
      websiteinput: '',
      username: '',
      passwordinput: '',
    }))
  }

  onclickdeltethe = id => {
    const {listofpass, count} = this.state
    this.setState({
      listofpass: listofpass.filter(each => each.id !== id),
      count: count - 1,
    })
  }

  count = () => {
    const {listofpass, serchinput} = this.state
    const filteredList = listofpass.filter(each =>
      each.websiteinput.toLowerCase().includes(serchinput.toLowerCase()),
    )
    return filteredList.length
  }

  renderlistofelemnts = () => {
    const {listofpass, ischecked, serchinput} = this.state
    const filteredList = listofpass.filter(each =>
      each.websiteinput.toLowerCase().includes(serchinput.toLowerCase()),
    )

    return (
      <>
        {filteredList.map(eachitem => (
          <Passwordlist
            item={eachitem}
            key={eachitem.id}
            ischecked={ischecked}
            onclickdeltethe={this.onclickdeltethe}
          />
        ))}
      </>
    )
  }

  render() {
    const {
      websiteinput,
      passwordinput,
      username,
      ischecked,
      listofpass,
      serchinput,
    } = this.state

    return (
      <div className="App-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo-img"
        />
        <div className="pass-manager-conatiner">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-img"
          />
          <div className="from-paina-container">
            <h1 className="add-heading">Add New Password</h1>
            <form className="form-container" onSubmit={this.onSbumitForm}>
              <div className="form-image-input-con">
                <div className="img-conttainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website-img"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-elmnt"
                  value={websiteinput}
                  onChange={this.onChangeWesiteName}
                />
              </div>
              <div className="form-image-input-con">
                <div className="img-conttainer">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="website-img"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="input-elmnt"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="form-image-input-con">
                <div className="img-conttainer ">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="website-img"
                  />
                </div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-elmnt"
                  value={passwordinput}
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="button-style">
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="pass-manager-conatiner">
          <div className="your-view-containner">
            <div className="pasword-view-con1">
              <h1 className="add-heading add-2">Your Passwords</h1>
              <p>{this.count()}</p>
              <div className="form-image-input-con">
                <div className="img-conttainer web2">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="website-img"
                  />
                </div>
                <input
                  type="search"
                  placeholder="Enter Password"
                  className="input-elmnt input2"
                  value={serchinput}
                  onChange={this.onChnageSearch}
                />
              </div>
            </div>
            <hr className="separate" />
            <label className="label">
              <input
                type="checkbox"
                className="input"
                checked={ischecked}
                onChange={this.onChangeCheckedOrNot}
              />
              <p className="label-text">Show passwords</p>
            </label>
            <ul>
              {listofpass.length > 0 ? (
                this.renderlistofelemnts()
              ) : (
                <NopassWordView />
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Passwordform
