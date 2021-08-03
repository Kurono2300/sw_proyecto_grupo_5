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
        const { email, password, password_confirmation  } = this.state;

        if(password === password_confirmation){
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
        else{
          alert("¡Las contraseñas no coinciden!");
        }
    }

  render() {
    return (
      <div>
        <section><Menu></Menu></section>
        <div className="card" style={{bottom:'-140px'}}>
          <div className="card-header" style={{fontSize:'24pt', textAlign:'center'}}>Sign In</div>
          <div className="card-body" style={{}}>
            <div className="row align-items-center" style={{paddingLeft:'65px'}}>
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
                <br />
                <label htmlFor="email" className="labelsSign">Verificar Contraseña: </label>
                <br />
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Verificar Contraseña"
                  value={this.state.password_confirmation}
                  onChange={this.handleChange}
                  required
                  className="textboxSign"
                />


                <button type="submit" class="btn btn-warning" style={{position:'relative', left:'30px'}}>Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}