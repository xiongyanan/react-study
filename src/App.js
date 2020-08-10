import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home, Contact, Task, Application} from './pages';
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
    return (
      <div className="app-footer">
        <AppFooter />
      </div>
    )
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
    { id: 1, path: '/home', component: Home, exact: false },
    { id: 2, path: '/contact', component: Contact, exact: false },
    { id: 3, path: '/task', component: Task, exact: false },
    { id: 4, path: '/application', component: Application, exact: false }

  ]
}

export default withRouter(App);
