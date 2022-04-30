import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  //banco de dados interno do miragejs
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: '4654652sdf332',
          title: 'Vanda de Carro',	
          type: 'deposit',
          category: 'Vendas',
          amount: 102000,
          createdAt: new Date('2022-01-14 09:20:43'),
        },
        {
          id: '564sa654as58e',
          title: 'Aluguel da loja',	
          type: 'withdraw',
          category: 'Casa',
          amount: 2200,
          createdAt: new Date('2022-01-16 10:10:13'),
        },
      ]
    })
  },


  routes() {
    this.namespace = 'api'; //a a partir do http://localhost:3000/api/...
    
    this.get('/transactions', () => {
      return this.schema.all('transaction');
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

