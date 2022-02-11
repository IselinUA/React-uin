import React, { useState } from 'react';

const Alert = ({ callback }) => {
  const [state, setState] = useState('');

  const button = () => {
    callback(state);
    console.log(state);
    console.log('Clicked');
  };

  const input = (e) => {
    setState(e.target.value);
    console.log('Changed');
  };

  return [
    <button onClick={button}>Go on, Click me!</button>,
    <input onChange={input} value={state}></input>
  ];
};

export default Alert;
