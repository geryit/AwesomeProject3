import React from 'react';
import ReactDOM from 'react-dom';

import './web/src/index.css';
import App from './src/App';
import registerServiceWorker from './web/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
