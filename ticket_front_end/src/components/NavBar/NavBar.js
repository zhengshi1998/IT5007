import React, { Component } from 'react'
import './NavBar.css';
import {Button, bsStyle} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

export default class NavBar extends Component {

    homeClick = () => {
        this.props.changeFatherState({
            showAddTraveller: true, 
            showDeleteTraveller: false, 
            showDisplayFreeSeats: true, 
            showDisplayTraveller: false
        })
    }

    reserveClick = () => {
        this.props.changeFatherState({
            showAddTraveller: true, 
            showDeleteTraveller: false, 
            showDisplayFreeSeats: true, 
            showDisplayTraveller: false
        })
    }

    cancelClick = () => {
        this.props.changeFatherState({
            showAddTraveller: false, 
            showDeleteTraveller: true, 
            showDisplayFreeSeats: true, 
            showDisplayTraveller: false
        })
    }

    showListClick = () => {
        this.props.changeFatherState({
            showAddTraveller: false, 
            showDeleteTraveller: false, 
            showDisplayFreeSeats: true, 
            showDisplayTraveller: true
        })
    }

    showSeatsClick = () => {
        this.props.changeFatherState({showDisplayFreeSeats: !this.props.fatherState.showDisplayFreeSeats})
    }

    render() {
        return (
            <div className='row'>
                <div className="head row col-12">
                    <div className="welcome offset-1 col-2">
                        Tickets booking system
                    </div>
                    <div className="homeBtn offset-1 col-1">
                        <Button className='btn-warning' id="homeBtn" onClick={this.homeClick}>Home page</Button>
                    </div>
                    <div className="showReservation col-1">
                        <Button className='btn-warning' onClick={this.reserveClick}>Reservation</Button>
                    </div>
                    <div className="showCalcel col-1">
                        <Button className='btn-warning' onClick={this.cancelClick}>Cancel orders</Button>
                    </div>
                    <div className="showList col-1">
                        <Button className='btn-warning' onClick={this.showListClick}>Show travelers</Button>
                    </div>
                    <div className="showSeats col-1">
                        <Button className='btn-warning' onClick={this.showSeatsClick}>Show seats</Button>
                    </div>
                </div>
            </div>
        )
    }
}