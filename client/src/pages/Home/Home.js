import React, { Component } from 'react';
import "./home.css"

import Translate from '../../components/GoogleTranslate/translate'


class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <div className="welcomeText">
            <h1>Striker Soccer Center of Huntersville</h1>
            <p>Check out games taking place or reserve a field for you and your team.</p>
            </div>
          </div>
        </div>
        <div className='row' id="translate">
          <div className='col'>
            <Translate />
          </div>
        </div>
      </div>
      
    );
  }
}

export default HomePage;
