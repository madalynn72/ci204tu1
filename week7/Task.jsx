export default function Task({ task, onChange, onDelete }) {
    return (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange(task.id, e.target.value);
          }}
        />
        <button onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </>
    );
  }