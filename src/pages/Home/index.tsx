import { Transactions } from '../../components/Transactions';
import styles from './styles.module.scss';

interface Transactions  {
  title: string;
  amount: number;
  category: string;
  createdAt: string;
}

const transactions = {
  title: 'Transaction 1',
  amount: 1000,
  category: 'Food',
  createdAt: new Date().toISOString()
}

export function Home(){
 
  return (
    <main className={styles.container}>
        <h1>PAGE HOME <span>MIRAGE JS</span></h1>

        <Transactions 
          data={transactions}
        />
    </main>
  );
}