import React, { Component } from 'react';
import styled from 'styled-components';
// import classnames from 'classnames';


const Branding = styled.a`
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const Logo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 0.5em;
`;



export default class NavBar extends Component {
  state = {
    hoverNavBar: false
  };

  hoverNavBar() {
    window.scrollY <= 0
      ? this.setState({ hoverNavBar: false })
      : this.setState({ hoverNavBar: true });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hoverNavBar.bind(this), true);
  }

  render() {
    if(localStorage.getItem('isLogged')){
      return (
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
          style={
            this.state.hoverNavBar
              ? {
                  boxShadow:
                    '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  backgroundColor: '#ef5350 !important' // #ef5350
                }
              : { backgroundColor: 'transparent !important' }
          }
        >
          <Branding
            href="#"
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
          >
            <Logo src="./logo.svg" />
            &copy; ApiDex - Proyecto Grupo #5
            {/* <div style={{display:'inline-block'}}> Usuario Ingresado: {localStorage.getItem('loggedEmail')}</div> */}
          <button type="button" class="btn btn-outline-danger" onClick={() => {
                    localStorage.clear()
                    window.location.reload();
          }}
          style={{top: '10px', right: '40px', position:'fixed'}}
          >Log Out</button>
          </Branding>
        </nav>
      );
    }

    if(!localStorage.getItem('isLogged')){
      return (
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
          style={
            this.state.hoverNavBar
              ? {
                  boxShadow:
                    '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  backgroundColor: '#ef5350 !important' // #ef5350
                }
              : { backgroundColor: 'transparent !important' }
          }
        >
          <Branding
            href="#"
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
          >
            <Logo src="./logo.svg" />
            ApiDex - Proyecto Grupo #5
          </Branding>
        </nav>
      );
    }

    // return (
    //   <nav
    //     className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
    //     style={
    //       this.state.hoverNavBar
    //         ? {
    //             boxShadow:
    //               '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    //             transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    //             backgroundColor: '#ef5350 !important' // #ef5350
    //           }
    //         : { backgroundColor: 'transparent !important' }
    //     }
    //   >
    //     <Branding
    //       href="#"
    //       className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
    //     >
    //       <Logo src="./logo.svg" />
    //       ApiDex - Proyecto Grupo #5
    //     </Branding>
    //   </nav>
    // );
  }
}


/*
        <section><button onClick={() => {
                    localStorage.clear()
                    //this.props.history.push('/'); // <--- Esto es para redireccionar luego de iniciar sesion
                    window.location.reload();
          }}>Logout</button></section>
*/