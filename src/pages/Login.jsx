import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = ({ isConnected, setIsConnected }) => {
  // console.log(isConnected);
  const navigate = useNavigate();

  const [emailLogin, setEmailLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();

  const handleChangeEmailLogin = (e) => {
    const value = e.target.value;
    setEmailLogin(value);
  };

  const handleChangePasswordLogin = (e) => {
    const value = e.target.value;
    setPasswordLogin(value);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const requete = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: emailLogin,
          password: passwordLogin,
        }
      );

      console.log(requete.data);
      const token = requete.data.token;
      Cookies.set("token2", token, { expires: 15 });
      setIsConnected(true);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <div className="signup">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmitLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChangeEmailLogin}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={handleChangePasswordLogin}
          />

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </main>
  );
};
export default Login;
