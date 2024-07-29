import './App.css';
import Taskt from './Taskt';
import TaskForm from './TaskForm';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  function addTask(name) {
    setTasks(prev => [...prev, { name: name, done: false }]);
  }

  function removeTask(indexToRemove) {
    setTasks(prev => prev.filter((taskObject, index) => index !== indexToRemove));
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  function renameTask(index, newName) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Taskt
          {...task}
          key={index}
          onRename={newName => renameTask(index, newName)}
          onTrash={() => removeTask(index)}
          onToggle={done => updateTaskDone(index, done)}
        />
      ))}
    </main>
  );
}

export default App;





