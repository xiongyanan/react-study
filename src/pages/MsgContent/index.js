import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import AppHeader from '../../components/commons/AppHeader'


class MsgContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerText: '微信',
      msgItem: {}
    }
  }

  componentDidMount() {
    console.log(this.props)
    console.log(this.props.history.location.state)
  }


  render() {
    return (
      <div>
        <AppHeader headerText={this.state.headerText}></AppHeader>
        <p>aoaoao</p>
        <p>aoaoao</p>
        <p>aoaoao</p>
        <p>aoaoao</p>
        <p>aoaoao</p>
        {/* <NavLink to="/home">
          jump
        </NavLink> */}
        <Route path="/home"></Route>
      </div>
    )
  }
}

export default MsgContent