import buyHome from "../assets/BuyAHome.svg";
import rentHome from "../assets/RentAHome.svg";
import neighborhood from "../assets/Neighborhoods.svg";

const Feature = () => {
  return (
    <div className="max-w-7xl w-[93%] md:w-[93%] mx-auto mb-10 md:mb-14">
      <h3 className="text-2xl text-center md:text-4xl font-bold mb-3">
        See how HavenHues can help
      </h3>
      <div className="grid grid-cols-3">
        <div className="text-center">
          <img className="w-40 mx-auto" src={buyHome} />
          <h3 className="text-2xl font-semibold mb-2">Buy a home</h3>
          <p className="w-[80%] mx-auto">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
