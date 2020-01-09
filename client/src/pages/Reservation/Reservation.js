import React, { Component } from 'react';
import "./reservation.css"

import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';


class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            field: 1
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => this.setState({ field: parseInt(event.target.value) });

    onDateChange = date => this.setState({ date })

    submitReservation = () => {
        const fieldReservation = {
            date: this.state.date.toISOString(),
            UserId: this.props.user.id,
            FieldsId: parseInt(this.state.field)
        }

        axios.post("/api/reservation", fieldReservation)
            .then(dbData => console.log(dbData))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className='Reservation'>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className="card">
                            <div className="card-body">
                                <h3>Select a Field</h3>
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="1">Field 1</option>
                                    <option value="2">Field 2</option>
                                    <option value="3">Field 3</option>
                                    <option value="4">Field 4</option>
                                    <option value="5">Field 5</option>
                                    <option value="6">Field 6</option>
                                    <option value="7">Field 7</option>
                                    <option value="8">Field 8</option>
                                </select>
                                <br />
                                <h3>Select a Date and Time</h3>
                                <DateTimePicker
                                    onChange={this.onDateChange}
                                    value={this.state.date}
                                    disableClock={true}
                                />
                                <br />
                                <button onClick={this.submitReservation}>Confirm Reservation</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="https://i.imgur.com/M933d1p.png" className="fieldImage"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reservation;