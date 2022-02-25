import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import './DisplayTraveller.css'
export default class DisplayTraveller extends Component {

    

    render() {
        return (
            <div className="bookList row">
                <div className="content offset-1 col-8">
                    <div className="listInfo">
                        Info for orders from SG to Thailand
                    </div>
                    <Table variant='success' hover className="reservationList">
                        <thead>
                            <tr>
                                <td>Serial No.</td>
                                <td>Name</td>
                                <td>Phone number</td>
                                <td>Timestamp</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.orders.map((c) => {
                                return (
                                    <tr className="tableBody" key={c.id}>
                                        <td className="serianNumTd">{c.serialId}</td>
                                        <td className="nameTd">{c.name}</td>
                                        <td className="phoneTd">{c.phone}</td>
                                        <td className="dataTd">{c.time}</td>
                                    </tr>)
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
