import { useEffect } from 'react';

import { Home } from './pages/Home';
import './styles/global.scss';

export function App () {

  useEffect(() => {
    fetch('hhttp://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data));
    
  },[]);

  return (
    <>
      <Home />
    </>
  );
}


