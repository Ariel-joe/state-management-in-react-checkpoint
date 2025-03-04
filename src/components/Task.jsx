import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, removeTask } from "../redux/todoSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, newDescription: newDesc }));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
            {task.description}
          </span>
          <button onClick={() => dispatch(toggleTask(task.id))}>
            {task.isDone ? "Undo" : "Done"}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;
