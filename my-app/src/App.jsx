import React, { useState } from 'react';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar prog",
      completed: false,
    },
    {
      id: '2',
      title: 'ler',
      completed: true,
    }
  ]);

  return (
    <>
      <div className="container"></div>
 
 

    </>
  )
}

export default App;