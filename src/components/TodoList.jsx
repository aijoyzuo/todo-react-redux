import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList(){
    const todos = useSelector((state) => state.todos.items)

    if(todos.length === 0){
        return<p>目前沒有待辦事項</p>
    }

    return(
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ) )}
        </ul>
    )
}

//利用 useSelector 從 Redux 讀取 state,
//再用 map 把每個 todo 轉換成 TodoItem component 顯示在 UI 上。