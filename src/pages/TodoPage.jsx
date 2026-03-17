import { useState } from "react";
import TodoInput from "../components/Todo/TodoInput";
import TodoList from "../components/Todo/TodoList";
import HomeParticles from "../components/HomeParticles.jsx";

export default function TodoPage({ setIsLogin }) {
  const [nickname] = useState(localStorage.getItem("nickname") || "使用者");

  const handleLogout = () => {
    console.log("同步儲存資料到 API (此處可自行實作)");

    localStorage.removeItem("token");
    localStorage.removeItem("nickname");
    setIsLogin(false);
  };

  return (
    <div
      className="position-relative overflow-hidden"
      style={{ minHeight: "100vh", background: "#fff9e6" }}
    >
      {/* 粒子背景 */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0 }}
      >
        <HomeParticles />
      </div>

      {/* 主要內容 */}
      <div
        className="container position-relative py-4 py-md-5"
        style={{ zIndex: 1 }}
      >
        <div className="row justify-content-center align-items-start g-4 pb-5 pb-md-0">
          {/* 左側圖片 + 登出按鈕 */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <div className="text-start w-100 mb-3">
              <p className="fw-bold mb-0" style={{ color: "#68592e" }}>
                歡迎, {nickname}！
              </p>
            </div>

            <img
              src="https://images.plurk.com/5PtnOW3zEDCBXmbUuR6PoP.jpg"
              alt="Todo 裝飾圖片"
              className="d-none d-md-block w-100 rounded"
              style={{
                maxHeight: "420px",
                objectFit: "cover",
              }}
            />

            <div className="mt-3 w-100 text-center d-none d-md-block">
              <button className="btn btn-danger w-100" onClick={handleLogout}>
                儲存並登出
              </button>
            </div>
          </div>

          {/* 右側 TodoList */}
          <div className="col-12 col-md-8 d-flex flex-column">
            <h2 className="mb-3 text-center text-md-start">
              {nickname}'s TodoList
            </h2>

            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>

      {/* 手機版固定底部按鈕 */}
      <div className="d-md-none position-fixed bottom-0 start-0 w-100 p-3">
        <button className="btn btn-danger w-100" onClick={handleLogout}>
          儲存並登出
        </button>
      </div>
    </div>
  );
}