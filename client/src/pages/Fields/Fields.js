import React, { Component } from 'react';

import "./fields.css"

import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import axios from 'axios';

import AuthContext from '../../contexts/AuthContext'

class Fields extends Component {
  static contextType = AuthContext;

  state = {
    name: ""
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  submitField = () => {
    axios.post("/api/fields", this.state)
      .then(dbData => console.log(dbData))
      .catch(err => console.log(err))
  }
  render() {
    console.log(this.context.user);
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

          </div>
        </div>
        <div className="row">
          <div className="col">
            Name: <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
            <button onClick={this.submitField}>Add</button>
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