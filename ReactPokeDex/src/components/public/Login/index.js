import React, { Component } from "react";
import axios from "axios";

import { withRouter } from 'react-router-dom';
import {useState} from 'react';
import Menu from '../Menu';
import './login.css'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
    axios.post("http://localhost:3000/api/security/login",
        {
            email: email,
            pswd: password 
        }).then(response => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
        alert("Bienvenido "+ email+".")
        localStorage.setItem('loggedEmail',email);
        localStorage.setItem('isLogged',true);
        this.props.history.push('/'); // <--- Esto es para redireccionar luego de iniciar sesion
        window.location.reload();
      }).catch(error => {
        alert("Error al Iniciar Sesion, usuario o contraseña incorrectos")
        console.log("login error", error);
        window.location.reload();
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="">
        <section><Menu></Menu></section>
        <div className="card" style={{bottom:'-140px'}}>
          <div className="card-header" style={{fontSize:'24pt', textAlign:'center'}}>Login</div>
          <div className="card-body" style={{}}>
            <div className="row align-items-center" style={{paddingLeft:'65px'}}>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="email" className="labelslog">Email: </label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                  className="textboxLog"
                />
                <br />
                <label htmlFor="email" className="labelslog">Contraseña: </label>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                  className="textboxLog"
                />

                <button type="submit" class="btn btn-success" style={{position:'relative', left:'30px'}}>Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}