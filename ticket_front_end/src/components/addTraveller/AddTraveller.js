import React, { Component } from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap'
import './AddTraveller.css'

export default class AddTraveller extends Component {

    addTraveller = () => {
        var curName = this.nameInput.value
        var curPhone = this.phoneInput.value
        var serialNum = this.props.fatherState.length + 1

        if(serialNum >= 26){
            this.textInput.innerHTML = "Sorry, tickets were sold out..."
            return
        }

        var curDate = new Date()
        var mins = curDate.getMinutes() < 10? "0" + curDate.getMinutes() : curDate.getMinutes()
        var curTime = curDate.getFullYear() + '/' + (curDate.getMonth()+1) + "/" + curDate.getDate() + " " + curDate.getHours() + ":" + mins
        var toAdd = {serialId: serialNum, name: curName, phone: curPhone, time: curTime}
        // console.log(curDate.getMonth())
        this.props.changeFatherState({orders: [...this.props.fatherState, toAdd]})
    }

    render() {
        return (
            <div className="row bookingInfoWrapper">
                <Form id="bookingInfo" className='offset-2 col-6 row'>
                    <div className='ticketsInfo row col-12' >
                        <Form.Group className="col-5">
                            <Form.Label htmlFor="disabledSelect">From</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Departure</option>
                                <option>Singapore</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="offset-2 col-5">
                            <Form.Label htmlFor="disabledSelect">To</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Destination</option>  
                                <option>Thailand</option>
                            </Form.Select>
                        </Form.Group>
                        &nbsp;
                    </div>

                    <hr />

                    <div className='travellerInfo'>
                        <Form.Group className="col-12" >
                            <Form.Label>Traveller Name</Form.Label>
                            <Form.Control ref = {(c) => this.nameInput = c} placeholder="Please Enter Your Name" />
                        </Form.Group>
                        &nbsp;
                        <Form.Group className="col-12">
                            <Form.Label>Traveller Phone Number</Form.Label>
                            <Form.Control ref = {(c) => this.phoneInput = c} placeholder="Please Enter Your Phone Number" />
                        </Form.Group>
                        &nbsp;
                    </div>
                    <hr />

                    <div className='submitArea row'>
                        <Form.Group className="col-12">
                            <Form.Text id="privacy" ref = {(c) => this.textInput = c} className="text-muted">
                                We'll never share your infomation with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Button id="bookTicketBtn" className="col-2 offset-5" onClick={this.addTraveller}>Submit</Button>
                    </div>
                </Form>
            </div>
        )
    }
}
