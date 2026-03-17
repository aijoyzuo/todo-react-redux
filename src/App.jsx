import { useState } from "react";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage"

export default function App() {

const [isLogin, setIsLogin] = useState(false)

  return (
    <>
      {isLogin
        ? <TodoPage TodoPage setIsLogin={setIsLogin}/>
        : <HomePage setIsLogin={setIsLogin} />
      }
    </>
  )
}
