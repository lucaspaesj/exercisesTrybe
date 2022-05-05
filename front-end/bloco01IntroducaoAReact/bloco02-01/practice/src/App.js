import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

function App() {
  return (
    <ul>Minha lista de tarefas:{tasks.map((task) => Task(task))}</ul>
  );
}

export default App;
