import { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import TodoDemo from "../components/Todo/TodoDemo.jsx";
import HomeParticles from "../components/HomeParticles.jsx";

export default function HomePage({ setIsLogin }) {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div
      className="position-relative overflow-hidden"
      style={{ background: "#97770e", minHeight: "100vh" }}
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
        <div className="row justify-content-center align-items-start g-2 g-md-4">
          {/* 左側表單 */}
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <div className="p-4 shadow rounded bg-white w-100">
              {isRegister ? (
                <RegisterForm setIsLogin={setIsLogin} />
              ) : (
                <LoginForm setIsLogin={setIsLogin} />
              )}

              <div className="mt-3 text-center">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => setIsRegister((prev) => !prev)}
                >
                  {isRegister ? "已經有帳號？登入" : "還沒有帳號？註冊"}
                </button>
              </div>
            </div>
          </div>

          {/* 右側 Demo */}
          {!isRegister && (
            <div className="col-12 col-md-7 d-flex justify-content-center">
              <div className="p-3 shadow rounded bg-white w-100">
                <TodoDemo />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}