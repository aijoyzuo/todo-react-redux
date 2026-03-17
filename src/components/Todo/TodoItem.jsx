import { useDispatch } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../../features/todos/todoSlice";
import { useState } from "react";

export default function TodoItem({ todo }) {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        const trimmedText = editText.trim();

        if (!trimmedText) return;

        dispatch(
            editTodo({
                id: todo.id,
                text: trimmedText,
            })
        );
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditText(todo.text);
        setIsEditing(false);
    };
    return (
        <li className="todo-item my-2 me-1">
            <div className="d-flex gap-1 align-items-center">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            className="col form-control"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                        />

                        <button onClick={handleSave} className="col-auto btn btn-success" style={{  color: "white", backgroundColor: "#4CAF50"   }}>
                            儲存
                        </button>

                        <button onClick={handleCancel} className="col-auto btn btn-warning" style={{ color: "#333", backgroundColor: "#FFC107"  }}>
                            取消
                        </button>
                    </>
                ) : (
                    <>
                        <span
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                cursor: "pointer",
                            }}
                            className="col"
                        >
                            {todo.text}
                        </span>

                        <button
                            onClick={() => setIsEditing(true)}
                            className="col-auto btn " style={{ color: "white", backgroundColor: "#FF8FAB"  }}
                        >
                            編輯
                        </button>

                        <button
                            onClick={() => dispatch(deleteTodo(todo.id))}
                            className="col-auto btn" style={{ color: "white", backgroundColor: "#FF5252" }}
                        >
                            刪除
                        </button>
                    </>
                )}
            </div>
        </li>
    )
}