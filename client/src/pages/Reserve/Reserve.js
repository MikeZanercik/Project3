import React, { Component } from 'react';

import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"


class Reserve extends Component {
    state = {
        date: ""
    }

    render() {
        return (
            <div className='Reserve'>
                <div className="row">
                    <div className="col">
                        <Header />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h1>Confirm Your Reservation</h1>

                        Date: <input 
                        type="date"
                        name="date"
                        />

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Reserve;