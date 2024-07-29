import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  // Initialize taskName with an empty string
  const [taskName, setTaskName] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName(''); // Reset taskName to an empty string
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input 
        type="text" 
        value={taskName} 
        onChange={ev => setTaskName(ev.target.value)} 
        placeholder="Your next task"
      />
    </form>
  );
}


