import styles from './styles.module.scss';
export interface TransactionsProps {
    title: string;
    amount: number;
    category: string;
    createdAt: string;
}

interface Props {
    data: TransactionsProps;
}

export function Transactions({ data } : Props){
  return (
    <main className={styles.container}>
        <table>

            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                   <td>{data.title}</td>
                   <td className={styles.deposit}>{data.amount}</td>
                   <td>{data.category}</td>
                   <td>{data.createdAt}</td>
                </tr>
            </tbody>
        </table>
    </main>
  );
}