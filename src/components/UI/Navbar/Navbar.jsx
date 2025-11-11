import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";
import "./Navbar.css";

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <Link className="navbar__brand" to="/">React Journal</Link>

      <nav className="navbar__links">
        <Link to="/posts">Посты</Link>
        <Link to="/about">О сайте</Link>
      </nav>

      <div className="navbar__actions">
        {isAuth ? (
          <button className="btn btn--danger" onClick={logout}>Выйти</button>
        ) : (
          <Link className="btn btn--brand" to="/login">Войти</Link>
        )}
      </div>
    </div>
  );
}
