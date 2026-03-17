import { useState } from "react";
import TodoInput from "../components/Todo/TodoInput";
import TodoList from "../components/Todo/TodoList";
import HomeParticles from "../components/HomeParticles.jsx";

export default function TodoPage({ setIsLogin }) {
    const [nickname, setNickname] = useState(localStorage.getItem("nickname") || "使用者");

    const handleLogout = () => {
        // 這裡可以加同步儲存資料的函式
        // 例如：dispatch(saveTodosToAPI()) 或 axios POST
        console.log("同步儲存資料到 API (此處可自行實作)");

        localStorage.removeItem("token");
        localStorage.removeItem("nickname");
        setIsLogin(false);
    };

    return (
        <>
            {/* 粒子背景 */}
            <div className="position-absolute top-0 start-0 w-100 h-100">
                <HomeParticles />
            </div>

            <div
                className="container h-100 position-relative d-flex align-items-center"
                style={{ zIndex: 1 }}
            >
                <div className="container vh-100 d-flex align-items-md-center">
                    <div className="row ">
                        {/* 左側圖片 + 登出按鈕 */}
                        <div className="col-md-4 d-flex flex-column align-items-center justify-content-between">
                            <div className="text-start w-100">
                                <p className="fw-bold">歡迎, {nickname}！</p>
                            </div>
                            <img
                                src="https://images.plurk.com/5PtnOW3zEDCBXmbUuR6PoP.jpg"
                                alt="Todo 裝飾圖片"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                }}
                                className="d-none d-md-flex"
                            />
                            <div className="my-3 w-100 text-center d-none d-md-flex">
                                <button className="btn btn-danger w-100 " onClick={handleLogout}>
                                    儲存並登出
                                </button>
                            </div>
                        </div>

                        {/* 右側 TodoList */}
                        <div className="col-md-8 d-flex flex-column">
                            <h2 className="mb-3 text-center text-md-start">{nickname}'s TodoList</h2>
                            <TodoInput />
                            <TodoList />
                            <div className="my-3 w-100 text-center d-md-none">
                                <button className="btn btn-danger w-100" onClick={handleLogout}>
                                    儲存並登出
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>


    );
}