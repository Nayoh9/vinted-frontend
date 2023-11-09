import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img
          src="https://static.vinted.com/assets/web-logo/default/logo.svg"
          alt=""
        />
      </Link>
      <input></input>
      <div>
        <Link to="/signup">
          <button>S'inscrire</button>
        </Link>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
