import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ isConnected, setIsConnected }) => {
  // console.log(isConnected);
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

      <button className="sell">Vends tes articles</button>
    </header>
  );
};

export default Header;
