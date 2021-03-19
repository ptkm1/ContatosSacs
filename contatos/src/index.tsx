import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModalContext } from './contexts/Modal';

ReactDOM.render(
  <React.StrictMode>
    <ModalContext>
    <App />
    </ModalContext>
  </React.StrictMode>,
  document.getElementById('root')
);