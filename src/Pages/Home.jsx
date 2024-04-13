import Banner from "../Components/Banner";
import Estates from "../Components/Estates";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const estates = useLoaderData();

  return (
    <div>
      <Banner />
      <Estates estates={estates} />
    </div>
  );
};

export default Home;
