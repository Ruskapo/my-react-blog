import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/context";

export default function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    navigate("/posts", { replace: true });
  };

  return (
    <div style={{ maxWidth: 360, margin: "40px auto" }}>
      <h1>Вход</h1>
      <form onSubmit={onSubmit}>
        <input style={{ width: "100%", marginBottom: 12 }} placeholder="Логин" />
        <input style={{ width: "100%", marginBottom: 12 }} placeholder="Пароль" type="password" />
        <button className="btn btn--brand" type="submit">Войти</button>
      </form>
    </div>
  );
}
