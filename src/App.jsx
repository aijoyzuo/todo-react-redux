import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className=" row justify-content-center ">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="app m-4 p-4">
          <h1>TODOLIST</h1>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  )
}
