import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

class AppFooter extends Component {

  renderFooter() {
    const { navs } = this.props
    return (
      navs.map(item => {
        return (
          <NavLink key={item.id} to={item.path} exact={item.exact}>
            <i className={ 'fa fa-' + item.icon }></i>
            <span>{ item.title }</span>
          </NavLink>
        )
      })
    )
  }

  render() {
    return (
      <div>
        { this.renderFooter() }
      </div>
    )
  }
}

AppFooter.defaultProps = {
  navs: [
    { id: 1, path: '/home', icon: 'home', title: '首页' },
    { id: 2, path: '/contact', icon: 'contact', exact: false, title: '通讯录' },
    { id: 3, path: '/task', icon: 'task', exact: false, title: '任务' },
    { id: 4, path: '/application', icon: 'application', exact: false, title: '应用' }
  ]
}

export default AppFooter
