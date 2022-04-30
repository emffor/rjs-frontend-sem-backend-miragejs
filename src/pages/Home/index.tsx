import { Transactions } from '../../components/Transactions';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

interface Transactions  {
  id: string;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
}

export function Home(){
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => setTransactions(data));
  },[]);


  return (
    <main className={styles.container}>
        <h1>PAGE HOME <span>MIRAGE JS</span></h1>

        {
          transactions.map(transaction => {
            return <Transactions key={transaction.id} data={transaction} />
          })
        }
    </main>
  );
}