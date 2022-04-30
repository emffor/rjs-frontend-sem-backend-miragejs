# CONSUMINDO API FICTÍCIA COM MIRAGE JS - COMO SE TIVESSE EM UM PROJETO SEM BACKEND E UTILIZASSE O MIRAGE JS PARA SIMULAR UMA API FICTÍCIA.

- **yarn add miragejs**
- **yarn add axios**
- **yarn add react-uuid**

 - import uuid from 'react-uuid'
 - export const LineItem = item => <li key={uuid()}>{item}</li>
 - export const List = () => array.map(item => <LineItem item={item} />)

 import { v4 as uuidv4 } from 'uuid';
 uuidv4();

 const { v4: uuidv4 } = require('uuid');
 uuidv4();