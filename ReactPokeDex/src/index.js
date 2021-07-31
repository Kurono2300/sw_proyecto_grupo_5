import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Para que la APP funcione mas rapido offline podemos cambiar el unregister() a register(), pero al parecer tiene sus problemas
serviceWorker.unregister();
//serviceWorker.register();
