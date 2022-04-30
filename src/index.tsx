import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api'; //a a partir do http://localhost:3000/api/...
    this.get('/transactions' ,() => {
      return [
        { 
          id: 'a1s1e1s25s1e1s2', 
          title: 'Transaction 1',
          amount: 1000,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date().toISOString()
        },
        {
          id: '8ae098eauieaiu', 
          title: 'Transaction 2',
          amount: 2500,
          type: 'exit',
          category: 'Food',
          createdAt: new Date().toISOString()
        },
        {
          id: '4556456ggtt5555', 
          title: 'Transaction 3',
          amount: 5000,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date().toISOString()
        },
      ]
    });
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

