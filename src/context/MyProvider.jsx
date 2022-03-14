import { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log(MyContext);

  const handleSubmit = (e) => {
    console.log('dfdfdgdg');
  };

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleMinus = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const x = 'dfsdfsdfd';

  return (
    <MyContext.Provider
      value={{ count, handleAdd, handleMinus, handleSubmit, x }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
