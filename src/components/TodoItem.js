// const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
//     return (
//       <li>
//         <input
//           type="checkbox"
//           checked={todo.completed}
//           onChange={() => toggleComplete(todo.id)}
//         />
//         <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
//           {todo.task}
//         </span>
//         <button onClick={() => deleteTodo(todo.id)}>❌</button>
//       </li>
//     );
//   };
  
//   export default TodoItem;
  

import { FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span className={todo.completed ? "completed" : ""}>{todo.task}</span>
      <div className="todo-actions">
        <button className="edit-btn" onClick={() => editTodo(todo.id)}>
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
