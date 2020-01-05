import React, { Component } from 'react';
import "./home.css"


class HomePage extends Component {
  render() {
    return (
      <div className='Home' id="home">
        <div className='row'>
          <div className='col'>
            <div className="welcomeText">
            <h1>Striker Soccer Center of Huntersville</h1>
            <p>Check out games taking place or reserve a field for you and your team.</p>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default HomePage;
