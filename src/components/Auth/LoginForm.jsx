import { useState } from "react"
import axios from "axios"

export default function LoginForm({ setIsLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setError(null)

    // 基本欄位驗證
    if (!email.trim() || !password.trim()) {
      setError("請填寫所有欄位！")
      return
    }

    setLoading(true)

    try {
      const res = await axios.post("https://todoo.5xcamp.us/users/sign_in", {
        user: { email, password }
      })

      // 登入成功
      let token = res.headers.authorization
      if (token && token.startsWith("bearer ")) {
        token = token.split(" ")[1]
      }
      localStorage.setItem("token", token)

      // 你可以把 nickname 存起來（如果 API 回傳了）
      const nickname = res.data.nickname || "使用者"
      localStorage.setItem("nickname", nickname)

      setIsLogin(true)
      alert("登入成功！")

    } catch (err) {
      console.error("登入失敗", err)
      setError("登入失敗，請確認 Email 或密碼是否正確")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>會員登入</h2>

      <input
        type="email"
        placeholder="Email"
        className="form-control mb-2"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={loading}
      />

      <input
        type="password"
        placeholder="密碼"
        className="form-control mb-3"
        value={password}
        onChange={e => setPassword(e.target.value)}
        disabled={loading}
      />

      {error && <div className="alert alert-danger">{error}</div>}

      <button
        className="btn btn-warning w-100"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "登入中..." : "登入"}
      </button>
    </div>
  )
}