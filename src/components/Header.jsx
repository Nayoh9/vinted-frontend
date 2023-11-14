import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Header = ({ isConnected, setIsConnected }) => {
  // console.log(isConnected);
  const navigate = useNavigate();
  return (
    <header>
      <Link to="/">
        <img
          src="https://static.vinted.com/assets/web-logo/default/logo.svg"
          alt=""
        />
      </Link>
      <input></input>

      {isConnected ? (
        <div className="buttons">
          <button
            className="isLogged"
            onClick={() => {
              Cookies.remove("token2");
              setIsConnected(false);
              navigate("/");
            }}
          >
            Se déconnecter
          </button>
        </div>
      ) : (
        <div className="buttons">
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        </div>
      )}

      <button
        className="sell"
        onClick={() => {
          if (Cookies.get("token2")) {
            navigate("/publish");
          } else {
            navigate("/signup");
          }
        }}
      >
        Vends tes articles
      </button>
    </header>
  );
};

export default Header;
