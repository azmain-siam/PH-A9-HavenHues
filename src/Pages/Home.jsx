import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Estates from "../Components/Estates";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const estates = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home | HavenHues</title>
      </Helmet>
      <Banner />
      <Estates estates={estates} />
    </div>
  );
};

export default Home;
