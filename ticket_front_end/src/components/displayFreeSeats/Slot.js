import React, { Component } from 'react'
import './Slot.css'
export default class Slot extends Component {
  render() {
    return (
        <div className='col-12' style={{backgroundColor: this.props.fillinColor}} >
            &nbsp;
        </div>
    )
  }
}