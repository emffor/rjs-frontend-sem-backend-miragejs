import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  //banco de dados interno do miragejs
  models: {
    transaction: Model,
  },


  routes() {
    this.namespace = 'api'; //a a partir do http://localhost:3000/api/...
    
    this.get('/transactions' ,() => {
      return [
        { 
          id: 'a1s1e1s25s1e1s2', 
          title: 'Transaction 1',
          amount: 1000,
          type: 'enter',
          category: 'Food',
          createdAt: new Date().toISOString()
        },
        {
          id: '8ae098eauieaiu', 
          title: 'Transaction 2',
          amount: 2500,
          type: 'exit',
          category: 'Comissão',
          createdAt: new Date().toISOString()
        },
        {
          id: '4556456ggtt5555', 
          title: 'Transaction 3',
          amount: 5000,
          type: 'enter',
          category: 'Carro',
          createdAt: new Date().toISOString()
        },
        
      ]
    });

    //schema é o banco de dados
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody); //trans.. objeto

      // método normal => return data; em baixo é para o miragejs
      return schema.create('transaction', data);
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

