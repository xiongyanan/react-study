import React, { Component } from 'react'
import './index.scss'
import logoUrl from '../../../img/logo.png'
import { NavLink } from 'react-router-dom'

class AppHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.search = this.search.bind(this)
    this.add = this.add.bind(this)
  }

  search (event) {
    console.log(event)
  }

  add(event) {
    console.log(event)
  }

  render() {
    return (
      <div className="app-header">
        <span>{this.props.headerText}</span>
        <div>
          <img src={logoUrl} alt="search" onClick={this.search} />
          <img src={logoUrl} alt="add" onClick={this.add} />
        </div>
        <NavLink to="/home">
          jump
        </NavLink>
      </div>
    )
  }
}

export default AppHeader