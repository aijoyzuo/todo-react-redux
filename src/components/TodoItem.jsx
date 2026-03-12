import { useDispatch } from "react-redux";
import { toggleTodo,deleteTodo } from "../features/todos/todoSlice";

export default function TodoItem({ todo }){
    const dispatch = useDispatch()

    return(
        <li className="todo-item my-2">
            <div className="row gap-2 align-items-center">
   <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor:'pointer'
            }}
            className="col-8"
            >
            {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}
                className="col-3 btn btn-danger">
                刪除
            </button>
            </div>         
        </li>
    )
}