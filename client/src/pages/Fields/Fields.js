import React, { Component } from 'react';

import "./fields.css"

import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import FieldImg from "../../components/Fields/fields"


class Fields extends Component {
  render() {
    return (
      <div className='Fields'>
          <div className="row">
              <div className="col">
                  <Header />
              </div>
          </div>
        <div className='row' id="fieldBody">
          <div className='col'>
              <h1>Select a Field</h1>
              <h4>Field 1</h4>
              <FieldImg />
              <h4>Field 2</h4>
              <FieldImg />
              <h4>Field 3</h4>
              <FieldImg />
              <h4>Field 4</h4>
              <FieldImg />
              <h4>Field 5</h4>
              <FieldImg />
              <h4>Field 6</h4>
              <FieldImg />
              <h4>Field 7</h4>
              <FieldImg />
              <h4>Field 8</h4>
              <FieldImg />   
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

export default Fields;