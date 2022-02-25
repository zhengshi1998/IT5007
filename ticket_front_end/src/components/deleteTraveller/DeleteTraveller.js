import React, { Component } from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap'
import './DeleteTraveller.css'

export default class DeleteTraveller extends Component {

    deleteTraveller = () => {
        var curName = this.nameInput.value
        var curPhone = this.phoneInput.value
        var serialNum = this.serialInput.value
        var orderList = this.props.orders
        if(serialNum <= 0 || serialNum > orderList.length){
            // console.log(this.textInput.innerHTML)
            this.textInput.innerHTML = "No match orders! Please check your input!"
            return
        }
        var curObj = this.props.orders[serialNum-1]
        if(curObj.name != curName || curObj.phone != curPhone){
            this.textInput.innerHTML = "No match orders! Please check your input!"
            return
        }
        var newOrders = []
        for(var i=0;i<orderList.length;i++){
            if(i < serialNum-1){
                newOrders.push(orderList[i])
            }else if(i > serialNum-1){
                curObj = orderList[i]
                curObj.serialId -= 1
                newOrders.push(curObj)
            }
        }
        this.props.changeFatherState({orders: newOrders})
        this.textInput.innerHTML = "Operation Successful!"
    }

    render() {
        return (
            <div className="row deleteInfoWrapper">
                <Form id="deleteInfo" className='offset-1 col-7 row'>
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
                        <Form.Group className="col-12">
                            <Form.Label>Serial Number</Form.Label>
                            <Form.Control ref={(c) => this.serialInput = c} placeholder="Please Enter Your Serial Number" />
                            <Form.Text id="serialNumInfo" className="text-muted">
                                Serial number can be found by searching your order details
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="col-12">
                            <Form.Label>Traveller Name</Form.Label>
                            <Form.Control ref={(c) => this.nameInput = c} placeholder="Please Enter Your Name" />
                        </Form.Group>
                        &nbsp;
                        <Form.Group className="col-12">
                            <Form.Label>Traveller Phone Number</Form.Label>
                            <Form.Control ref={(c) => this.phoneInput = c} placeholder="Please Enter Your Phone Number" />
                        </Form.Group>
                        &nbsp;
                    </div>
                    <hr />

                    <div className='submitArea row'>
                        <Form.Group className="col-12">
                            <Form.Text id="privacy" ref={(c) => this.textInput = c} className="text-muted">
                                Once a ticket has been calceled, we are not able to recover it.
                            </Form.Text>
                        </Form.Group>

                        <Button id="bookTicketBtn" className="col-2 offset-5 btn-danger" onClick={this.deleteTraveller}>Submit</Button>
                    </div>

                </Form>
            </div>
        )
    }
}