import { useState } from "react"
import { useDispatch } from "react-redux"//送資料
import { addTodo } from "../features/todos/todoSlice"

export default function TodoInput(){
    const [text,setText] = useState('')
    const dispatch = useDispatch()

    const handleAddTodo = () =>{
        const trimmedText = text.trim()

        if(!trimmedText)return

        dispatch(addTodo(trimmedText))
        setText('')
    }

    const handleKeyDown = (event) => {
        if(event.key === "Enter"){
            handleAddTodo()
        }
    }

    return(
        <div className="todo-input-wrapper">
            <input
            type="text"
            value={text}
            onChange={(event)=>setText(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="請輸入待辦事項"
            />
            <button onClick={handleAddTodo}>新增</button>
        </div>
    )
}