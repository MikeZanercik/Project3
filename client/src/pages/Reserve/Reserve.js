import React, { Component } from 'react';

import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"


class Reserve extends Component {
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
                        <h1>Reserve a Field</h1>

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