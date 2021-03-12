import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import Task from './components/Task';
import { Container } from 'react-bootstrap';

function App() {
  const [tasks, setTasks] = useState([]);
  const deleteTask = id => {
    setTasks(tasks.filter(tasks => tasks.id !== id));
  };
  const handleSubmit = (text, day, id) => {
    const data = {
      id: id,
      text: text,
      day: day,
    };
    setTasks(tasks => [...tasks, data]);
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <AddTask onHandle={handleSubmit} />
        <Task tasks={tasks} onDelete={deleteTask} />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
