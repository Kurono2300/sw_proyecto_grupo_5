import React, { Component } from 'react';
import './war.css'

const LogWarning = ()=>{
    return (
        <div className="card" style={{top:'130px'}}>
            <div className="card-header"><h1 className="warning">¡Bienvenido!</h1></div>
            <div className="card-body">
                <h1 className="warning">¡Debes Iniciar Sesion Para Usar la Aplicacion!</h1>
            </div>
        </div>
        
    );
}

export default LogWarning;