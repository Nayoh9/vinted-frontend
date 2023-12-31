// Import de loadStripe qui sert à se connecter
import { loadStripe } from "@stripe/stripe-js";
// Import de Elements
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

// Je me connecte à mon compte stripe avec ma clef publique
const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
  );

  // Permet de d'embarquer des valeurs dans un navigate
  const location = useLocation();

  // Destructuration de l'objet que j'ai amené depuis mon navigate
  const { title, price } = location.state;
  console.log(title, price);

  return (
    <section className="payment">
      <article>
        <p>Résumé de la commande</p>
        <div>
          <div>
            <span>Commande</span>
            <span></span>
          </div>
          <div>
            <span>Frais protection acheteurs</span>
            <span>0,40</span>
          </div>
          <div>
            <span>Frais de port</span>
            <span>0,80</span>
          </div>
        </div>
        <div></div>
      </article>
      <article>
        <div>
          <span>Total {price} €</span>
          <span></span>
        </div>

        <p>Il ne vous reste plus qu'un étape pour acheter {title.MARQUE} </p>
      </article>
      {/* Elements doit englober toute ma logique de paiement, je lui donne
      stripePromise en props pour lui montrer que je suis connecté à mon compte
      Stripe */}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </section>
  );
};

export default Payment;
