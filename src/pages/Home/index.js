import React, { Component } from 'react'
import AppHeader from '../../components/commons/AppHeader'
import MsgItemGroup from '../../components/MsgItemGroup'
import { Provider } from '../../js/context'

class Home extends Component {
  constructor(props) {
    super(props)
    this.showMsgContent = this.showMsgContent.bind(this)
    this.state = {
      buttonText: '跳转',
      messages: [
        { id: 1, msgHeader: 'hahaha', msgBody: 'haode', msgTime: '08:02' },
        { id: 2, msgHeader: 'hahaha', msgBody: 'haode', msgTime: '08:03' },
        { id: 3, msgHeader: 'hahaha', msgBody: 'haode', msgTime: '08:04' },
        { id: 4, msgHeader: 'hahaha', msgBody: 'haode', msgTime: '08:05' },
        { id: 5, msgHeader: 'hahaha', msgBody: 'haode', msgTime: '08:06' }
      ]
    }
  }

  showMsgContent(item, event) {
    this.props.history.push({pathname: '/home/msgContent', state: {...item}})
  }


  render() {
    return (
      <div>
        <AppHeader headerText="微信"></AppHeader>
        <Provider value={{showMsgContent: this.showMsgContent}}>
          <MsgItemGroup messages={this.state.messages}></MsgItemGroup>
        </Provider>
      </div>
    )
  }
}

export default Home