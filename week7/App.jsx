import { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

let nextId = 3;

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 0, text: 'Buy groceries' },
    { id: 1, text: 'Walk the dog' },
    { id: 2, text: 'Write code' },
  ]);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      { id: nextId++, text: text },
    ]);
  }

  function handleChangeTask(taskId, newText) {
    setTasks(
      tasks.map(task =>
        task.id === taskId
          ? { ...task, text: newText }
          : task
      )
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}