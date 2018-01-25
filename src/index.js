import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './containers/Calculator/Calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
