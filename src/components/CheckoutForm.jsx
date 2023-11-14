import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

// Ici nous avons accès au formulaire de paiement checkoutForm dans lequel nous utilisons les différentes fonctions du package stripe (voir doc)

const CheckoutForm = () => {
  const [isSucced, setIsSucced] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  // Va permettre de faire une requete à Stripe pour lui envoyer les codes
  const stripe = useStripe();

  // Pour récuperer le contenu de CardElement
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSucced(true);
      // Pour récuperer le contenu de l'input
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "l'id de l'user", // j'envoie l'identifiant de la personne qui paie pour que le back trouve qui est à l'origine de la transaction
      });

      //   console.log(stripeResponse.token.id);
      // Je récupère mon token
      const stripeToken = stripeResponse.token.id;

      const request = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",

        {
          // J'envoie mon token au back
          token: stripeToken,
          title: "le Titre de l'annonce",
          amount: 10,
          // le prix indiquée dans l'annonce
        }
      );

      console.log(request.data);

      if (request.data.status === "succeeded") {
        setIsloading(true);
      } else {
        setIsloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulaire de paiment</h1>
      <CardElement />
      {isLoading ? (
        <p>Article acheté !</p>
      ) : (
        // Je desactive mon bouton en fonction de mon state pour eviter le spam achat
        <button type="submit" disabled={isSucced ? true : false}>
          Acheter
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
