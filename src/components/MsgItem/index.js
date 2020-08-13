import React, { Component } from 'react'
import { Consumer } from '../../js/context'
import './index.scss'
import logoUrl from '../../img/logo.svg'

class MsgItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <Consumer>
        {
          ({showMsgContent}) => {
            return (
                <div className="msg-item" onClick={(event) => showMsgContent(this.props, event)}>
                <img src={logoUrl} alt="logo" />
                <p>
                  <span>{this.props.msgHeader}</span>
                  <span>{this.props.msgBody}</span>
                </p>
                <span className="msg-time">{this.props.msgTime}</span>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default MsgItem