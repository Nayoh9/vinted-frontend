import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Route qui attend un params id que l'on rend dynamique
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading page</p>
  ) : (
    <main className="offer">
      <img src={data.product_image.secure_url} />
      <p>{data.product_price} €</p>
      {/* <p>MODE DE PAIEMENT : {data.product_details[5]["MODES DE PAIEMENT"]}</p> */}
      {data.product_details.map((detail) => {
        // console.log(detail);

        const clefs = Object.keys(detail);
        // console.log(clefs);
        const clef = clefs[0];
        // console.log(clef);
        return (
          <p key={clef}>
            {clef} : {detail[clef]}
          </p>
        );
      })}
      <button
        onClick={() => {
          if (Cookies.get("token2")) {
            navigate("/payment", {
              state: {
                title: data.product_details[0],
                price: data.product_price,
              },
            });
          } else {
            navigate("/signup");
          }
        }}
      >
        Acheter
      </button>
    </main>
  );
};

export default Offer;
