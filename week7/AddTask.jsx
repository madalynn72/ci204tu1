import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}