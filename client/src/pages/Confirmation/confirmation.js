import React, { useState, useEffect } from 'react';
import API from '../../lib/API';
// import "./confimation.css"

const ConfirmationPage = (props) => {

    const [reservations, setReservations] = useState([]);

    useEffect(() => {

        if (!props.user) {
            return
        }

        API.Reservation.getMine(props.user.id)
            .then(response => {
                return response.data
            })
            .then(reservations => setReservations(reservations))
            .catch(err => console.log(err));

    }, [props.user]);

    return (
        <div className='ConfirmationPage'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <div>
                        <div className='card' >
                            <div className='card-body'>
                                <h1>Confirm Your Reservations</h1>
                                <ul>
                                    {reservations.length && reservations.map((reservation) => <li> Field {reservation.FieldsId} at {reservation.date}</li>)}
                                </ul>
                                <button>Confirm Reservation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ConfirmationPage;
