import React, { Component } from 'react';

// import AuthContext from '../../contexts/AuthContext';

import axios from 'axios';




class ConfirmationPage extends Component {
    state = {
        user: "",
        field: "",
        date: ""
    }

    componentDidMount() {

       
    }

    render() {
        return (
            <div className='ConfirmationPage'>
                <div className='row'>
                    <div className='col'>
                        <div>
                            <h1>Confirm Your Reservation</h1>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ConfirmationPage;
