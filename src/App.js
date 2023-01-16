import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';

export default function App() {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
}
