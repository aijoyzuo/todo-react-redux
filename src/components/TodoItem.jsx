import { useDispatch } from "react-redux";
import { toggleTodo,deleteTodo } from "../features/todos/todoSlice";

export default function TodoItem({ todo }){
    const dispatch = useDispatch()

    return(
        <li className="todo-item">
            <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor:'pointer'
            }}
            >
            {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
                刪除
            </button>
        </li>
    )
}