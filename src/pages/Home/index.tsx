import { Transactions } from '../../components/Transactions';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
interface TransactionProps  {
  id: string;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
}

export function Home(){
  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] = useState(0);
  const [ type, setType ] = useState('enter');
  const [ category, setCategory ] = useState('');
  
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data));
  },[]);

  function handleAddTransaction(){
    const data = { 
      title,
      amount,
      type,
      category
     };

    api.post('/transactions', data)
  }

  return (
    <main className={styles.container}>
        <h1>PAGE HOME <span>MIRAGE JS</span></h1>

        <div>
            
            <input      
                placeholder='Titulo'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input 
                placeholder='Valor'
                value={amount}
                type="number"
                onChange={event => setAmount(Number(event.target.value))}
            />

            <select name='Tipo de Transação'
                onChange={(e) => setType(e.target.value)}
            >
                <option value="enter">Entrada</option>
                <option value="exit">Saída</option>          
            </select>

            <input 
                placeholder='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

        </div>
        
        <div>
            <button onClick={handleAddTransaction}>+</button>
        </div>  
        

        {
          transactions.map(transaction => {
            return <Transactions key={transaction.id} data={transaction} />
          })
        }
    </main>
  );
}