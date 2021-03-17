/* eslint-disable eqeqeq */
import React from 'react'
import './App.css';

function App() {
  const name = '리액트';
  return <>{name == '리액트' ? (<h1>아니요 뚱인데요?</h1>) : null}</>;
}

export default App;
