import {useState} from 'react';

const Counter = () => {
  const [num, setNumber] = useState(0);

  const increase = () => {
    setNumber(num + 1);
  }

  const decrease = () => {
    setNumber(num - 1);
  }

  const reset = () => {
    setNumber(0)
  }

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={reset}>Reset</button>
      <h1>{num}</h1>
    </div>
  )
}
export default Counter;