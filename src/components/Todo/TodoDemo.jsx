import DemoNotice from "../DemoNotice"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

export default function TodoDemo() {

  return (

    <div>

      <h2>Try Demo</h2>

      <DemoNotice />

      <TodoInput />
      <TodoList        
        maxHeightMobile="290px"
        maxHeightDesktop="380px"
      />

    </div>

  )

}