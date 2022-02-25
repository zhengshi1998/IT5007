import React, { Component } from 'react'
import './DisplayFreeSeats.css'
import Slot from './Slot'
export default class DisplayFreeSeats extends Component {
    state = {
        takenColor: "orange",
        avaliableColor: "rgba(68,130,109)"
    }

    render() {
        var elements = []
        var cur = []
        for (var i = 0; i < this.props.totalNum; i++) {
            
            cur.push(i < this.props.orders.length ? this.state.takenColor : this.state.avaliableColor)

            if (i % 5 === 4) {
                elements.push(cur)
                cur = []
            }
        }

        return (
            <div className='row freeSeatsWrapper1'>
                <div className="freeSeatHeader offset-6 col-5 row">
                    <div className='col-12 ticketInfo'>
                        Total seats: <span>{this.props.totalNum}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Avaliable: <span>{this.props.totalNum - this.props.orders.length}</span>
                    </div>
                    <div style={{ height: "10px" }}>

                    </div>
                    <div className='col-6'>
                        <div>
                            <span style={{ backgroundColor: this.state.takenColor }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            &nbsp;seats taken
                        </div>
                    </div>

                    <div className='col-6'>
                        <div>
                            <span style={{ backgroundColor: this.state.avaliableColor }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            &nbsp;seats avaliable
                        </div>
                    </div>
                    <div style={{ height: "10px" }}>
                    </div>
                    <hr />
                </div>

                <div className='offset-6 col-5 row freeSeatsWrapper2'>
                    {elements.map(
                        (cur, idx) => {
                            return (
                                <div key={idx} className='row freeSeatsWrapper3'>
                                    {cur.map(
                                        (cur2, idx2) => {
                                            return idx2 % 5 == 0 ? (<div className='offset-1 col-2' key={idx2}>
                                                <div className='offset-1 col-10 slot row'>
                                                    <Slot fillinColor={cur2}></Slot>
                                                </div>
                                            </div>) : (<div className='col-2' key={idx2}>
                                                <div className='offset-1 col-10 slot row'>
                                                    <Slot fillinColor={cur2}></Slot>
                                                </div>
                                            </div>)
                                        }
                                    )}
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        )
    }
}