import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setIsLoading(false);

        setData(response.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(data);
  return isLoading ? (
    <p> Loading page </p>
  ) : (
    <section>
      <div className="home">
        <div>
          <div className="slogan">
            <h1>Prêts à faire du tri dans vos placards ? </h1>
            <button>Commencer à vendre</button>
          </div>
        </div>
      </div>
      <div className="wrapper">
        {data.offers.map((elem) => {
          // console.log(elem);
          // console.log(elem.owner.account.avatar);
          return (
            // Lien pour la route dynamique offers
            <Link to={`/offers/${elem._id}`} key={elem._id}>
              <div key={elem._id} className="children">
                <p>
                  {elem.owner.account.avatar ? (
                    <img
                      src={elem.owner.account.avatar.secure_url}
                      alt="Avatar"
                    />
                  ) : (
                    ""
                  )}
                  {elem.owner.account.username}
                </p>

                <img
                  className="product-image"
                  src={elem.product_image.secure_url}
                />
                <p>{elem.product_price} €</p>
                <p>{elem.product_details[1].TAILLE}</p>
                <p>{elem.product_details[0].MARQUE}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
