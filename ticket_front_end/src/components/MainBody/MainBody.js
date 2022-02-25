import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar';
import DisplayFreeSeats from '../displayFreeSeats/DisplayFreeSeats';
import AddTraveller from '../addTraveller/AddTraveller'
import DeleteTraveller from '../deleteTraveller/DeleteTraveller'
import DisplayTraveller from '../displayTraveller/DisplayTraveller'
import Footer from '../Footer/Footer'

export default class MainBody extends Component {
    state = {
        orders: [
            { serialId: 1, name: "Tom", phone: "82284033", time: "2021/12/31 16:03" },
            { serialId: 2, name: "Jane", phone: "123", time: "2022/1/31 13:03" },
            { serialId: 3, name: "Jack", phone: "432432", time: "2022/2/1 09:21" },
            { serialId: 4, name: "Rose", phone: "123456", time: "2022/2/11 10:47" },
            { serialId: 5, name: "Mango", phone: "789456", time: "2022/2/21 16:03" }
        ], totalSeat: 25, showAddTraveller: true, showDeleteTraveller: false, showDisplayFreeSeats: true, showDisplayTraveller: false, 
    }

    change = (c) => {
        this.setState(c)
    }

    render() {
        return (
            <div className='row'>
                <NavBar changeFatherState={this.change} fatherState={this.state}/>
                <div className="col-5">
                    <div hidden={!this.state.showDisplayFreeSeats}>
                        <DisplayFreeSeats orders={this.state.orders} totalNum={this.state.totalSeat} />
                    </div>
                    
                </div>
                <div className="col-7">
                    <div hidden={!this.state.showAddTraveller}>
                        <AddTraveller className='hide' changeFatherState={this.change} fatherState={this.state.orders} />
                    </div>
                    <div hidden={!this.state.showDeleteTraveller}>
                        <DeleteTraveller changeFatherState={this.change} orders={this.state.orders} />
                    </div>
                    <div hidden={!this.state.showDisplayTraveller}>
                        <DisplayTraveller orders={this.state.orders} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
