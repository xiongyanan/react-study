import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home, Contact, Task, Application, MsgContent} from './pages';
import AppFooter from './components/commons/AppFooter'
import './styles/reset.scss'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { pathname } = this.props.location
    const { replace } = this.props.history

    if ('/' === pathname) {
      replace('/home')
    }
  }

  renderNavs() {
    const { navs } = this.props
    return (
      <Switch>
        {
          navs.map(item => {
            return (
              <Route key={item.id} path={item.path} component={item.component} exact={item.exact} />
            )
          })
        }
      </Switch>
    )
  }

  renderFooter() {
    const { pathname } = this.props.location
    if (pathname === '/home' || pathname === '/contact' || pathname === '/task' || pathname === '/application') {
      return (
        <div className="app-footer">
          <AppFooter />
        </div>
      )
    }
    return ''
  }

  render() {
    return (
      <div>
        { this.renderNavs() }
        { this.renderFooter() }
      </div>
    )
  }
}

App.defaultProps = {
  navs: [
    { id: 1, path: '/home', component: Home, exact: true },
    { id: 2, path: '/contact', component: Contact, exact: true },
    { id: 3, path: '/task', component: Task, exact: true },
    { id: 4, path: '/application', component: Application, exact: true },
    { id: 5, path: '/home/msgContent', component: MsgContent, exact: true }

  ]
}

export default withRouter(App)
