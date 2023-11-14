import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [condition, setCondition] = useState();
  const [city, setCity] = useState();
  const [price, setPrice] = useState();

  const [pictureFromcloudinary, setPictureFromCloudinary] = useState();

  // Récupèration du token
  const token = Cookies.get("token");

  const handleChangeImage = (e) => {
    // Récupèration de l'image
    const value = e.target.files[0];
    // console.log(value);
    setImage(value);
  };

  const handleChangeTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleChangeDescription = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  const handleChangeBrand = (e) => {
    const value = e.target.value;
    setBrand(value);
  };

  const handleChangeSize = (e) => {
    const value = e.target.value;
    setSize(value);
  };

  const handleChangeColor = (e) => {
    const value = e.target.value;
    setColor(value);
  };

  const handleChangeCondition = (e) => {
    const value = e.target.value;
    setCondition(value);
  };

  const handleChangeCity = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  const handleChangePrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Creation d'un form data pour envoyer le formulaire au back
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", image);

      const request = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(request.data);
      setPictureFromCloudinary(request.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };

  // Faire une fonction qui envoie les différents inputs avec .post et la mettre dans le onsubmit

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" name="image" onChange={handleChangeImage} />
        </div>

        <div>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            name="title"
            placeholder="ex: Chemise Sézane verte"
            onChange={handleChangeTitle}
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="ex: Porté quelques fois, taille correctement"
            onChange={handleChangeDescription}
          />
        </div>

        <div>
          <label htmlFor="brand">Marque</label>
          <input
            type="text"
            name="brand"
            placeholder="ex: Zara"
            onChange={handleChangeBrand}
          />
          <label htmlFor="size">Taille</label>
          <input
            type="text"
            name="size"
            placeholder="ex: L/40/12"
            onChange={handleChangeSize}
          />
          <label htmlFor="color">Couleur</label>
          <input
            type="text"
            name="color"
            placeholder="ex: Fushia"
            onChange={handleChangeColor}
          />
          <label htmlFor="condition">Etat</label>
          <input
            type="text"
            name="condition"
            placeholder="Neuf avec étiquette"
            onChange={handleChangeCondition}
          />
          <label htmlFor="city"> Ville</label>
          <input
            type="text"
            name="city"
            placeholder="ex: Paris"
            onChange={handleChangeCity}
          />
        </div>

        <div>
          <label htmlFor="price"> Prix</label>
          <input
            type="text"
            name="price"
            placeholder="0,00 €"
            onChange={handleChangePrice}
          />
        </div>

        <div>
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </section>
  );
};

export default Publish;
