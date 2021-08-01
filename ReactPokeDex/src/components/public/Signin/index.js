import React, { Component } from "react";
import axios from "axios";

import { withRouter } from 'react-router-dom';
import {useState} from 'react';
import Menu from '../Menu';
import './signin.css'

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
        email: "",
        password: "",
        registrationErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        const { email, password } = this.state;

    axios.post("http://localhost:3000/api/security/signin",
        {
            email: email,
            pswd: password
        }).then(response => {
            if (response.data.status === "created") {
                this.props.handleSuccessfulAuth(response.data);
            }
        alert("Usuario Registrado Exitosamente, puede proceder a iniciar sesion.")
        this.props.history.push('/login');
        }).catch(error => {
            console.log("registration error", error);
        });
        event.preventDefault();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email" className="labelsSign">Email: </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            className="textboxSign"
          />
          <br />
          <label htmlFor="email" className="labelsSign">Contraseña: </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={this.state.password}
            onChange={this.handleChange}
            required
            className="textboxSign"
          />
          <button type="submit" class="btn btn-warning">Sign In</button>
        </form>
        <section><Menu></Menu></section>
        <div className="card">
        <div className="card-header">Titulo</div>
        <div className="card-body">Texto de prueba</div>
        </div>
      </div>
    );
  }
}