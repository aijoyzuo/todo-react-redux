import { useState } from "react";
import axios from "axios";

export default function RegisterForm({ setIsLogin }) {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError(null);

    // 基本欄位驗證
    if (!email || !nickname || !password || !passwordCheck) {
      setError("請填寫所有欄位");
      return;
    }
    if (password !== passwordCheck) {
      setError("密碼與確認密碼不一致");
      return;
    }
    if (password.length < 6) {
      setError("密碼長度至少 6 碼");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://todoo.5xcamp.us/users",
        {
          user: { email, nickname, password },
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // 註冊成功 → 直接登入
      let token = res.headers.authorization;
      if (token?.startsWith("bearer ")) token = token.split(" ")[1];
      localStorage.setItem("token", token);
      localStorage.setItem("nickname", nickname);

      setIsLogin(true); // 切換到 TodoPage
    } catch (err) {
      setError(
        err.response?.data?.error?.join(", ") || "註冊失敗，請稍後再試"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>隨手記：註冊帳號</h2>

      <input
        type="email"
        placeholder="Email"
        className="form-control mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />

      <input
        type="text"
        placeholder="暱稱"
        className="form-control mb-2"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        disabled={loading}
      />

      <input
        type="password"
        placeholder="密碼（至少6碼）"
        className="form-control mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
      />

      <input
        type="password"
        placeholder="再次輸入密碼"
        className="form-control mb-3"
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
        disabled={loading}
      />

      {error && <div className="alert alert-danger">{error}</div>}

      <button
        className="btn btn-warning w-100"
        onClick={handleRegister}
        disabled={loading}
      >
        {loading ? "註冊中..." : "註冊帳號"}
      </button>
    </div>
  );
}