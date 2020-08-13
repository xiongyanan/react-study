import React, { Component } from 'react'
import MsgItem from '../MsgItem'
import './index.scss'

class MsgItemGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {
          this.props.messages.map(item => {
            return (
              <MsgItem key={item.id} {...item} ></MsgItem>
            )
          })
        }
      </div>
    )
  }
}

export default MsgItemGroup