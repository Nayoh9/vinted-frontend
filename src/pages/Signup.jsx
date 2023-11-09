import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requete = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: name,
          password: password,
          newsletter: newsletter,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleChangeNewsletter = (e) => {
    const value = e.target.checked;
    setNewsletter(value);
  };

  return (
    <main>
      <div className="signup">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            onChange={handleChangeName}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChangeEmail}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={handleChangePassword}
          />
          <div>
            <input
              type="checkbox"
              name="newsletter"
              onChange={handleChangeNewsletter}
            />
            <span>S'inscrire à la newsletter</span>
            <p>En m'inscrivant je comprends blabla</p>
          </div>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
