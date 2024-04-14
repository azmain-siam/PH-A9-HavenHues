import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const estate = estates.find((e) => e.id == id);
  console.log(estate);

  const {
    estate_title,
    description,
    price,
    status,
    area,
    bedrooms,
    bathrooms,
    facilities,
    image,
    description_2,
    location,
    highlight_features,
  } = estate;

  return <div>Estate Details Page.</div>;
};

export default EstateDetails;
