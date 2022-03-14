import { useContext } from 'react';
import MyContext from './context/MyContext';
import Count from './components/Count';
import Counter from './components/Counter';

import './App.css';

const App = () => {
  const { x } = useContext(MyContext);
  return (
    <main>
      <h1>Welcome to React</h1>
      <h2>{x}</h2>
      <Count />
      <Counter />
    </main>
  );
};

export default App;
