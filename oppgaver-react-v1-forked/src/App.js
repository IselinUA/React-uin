import MyComponent from './components/MyComponent';
import Food from './components/Food';
import Alert from './components/Alert';
import React, { useState } from 'react';
import './styles.scss';

export default function App() {
  const [inputFromChild, setInputFromChild] = useState('');
  const MyFunction = (state) => {
    setInputFromChild(state);
    console.log(state);
  };

  const food = ['Pizza', 'Hamburger', 'Coke'];

  return (
    <div className="App">
      <MyComponent />
      <Food food={food} />
      <Alert callback={MyFunction} />,<h2>{inputFromChild}</h2>
    </div>
  );
}
