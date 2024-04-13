import { FaBath, FaRulerCombined, FaBed } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EstateCard = ({ estate }) => {
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
  } = estate;
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="card w-full max-w-[420px] mx-auto border h-full hover:shadow-md duration-300"
      >
        <figure className="relative">
          <img className="h-[200px] md:h-[250px] w-full object-cover" src={image} />
          <div
            className={`absolute bottom-0 right-0 z-10 text-white px-4 py-1 ${
              status === "Sale" ? "bg-[#5EA51C]" : "bg-[#F95C64]"
            } font-medium`}
          >
            <span>
              {status}: {price}
            </span>
          </div>
        </figure>
        <div className="card-body p-4">

          <h2 className="card-title font-bold capitalize">{estate_title}</h2>

          <p className="font-medium text-[#585858]">{description}</p>
          <h3 className="font-semibold">Facilities:</h3>
          <ul className="text-sm text-[#585858] list-disc">
            {facilities.map((facility) => (
              <li className="ml-7" key={facility}>
                {facility}
              </li>
            ))}
          </ul>
          <hr className="my-3" />
          <div className="text-sm flex flex-wrap justify-between  items-center text-[#585858]">
            <div className="flex gap-1 items-center">
              <FaBed />
              <p className="font-medium">{bedrooms} Bedrooms</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaBath />
              <p className="font-medium">{bathrooms} Bathrooms</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaRulerCombined />
              <p className="font-medium">{area}</p>
            </div>
          </div>
          <Link to={"/"}>
            <button className="btn w-full mt-4 bg-[#5b56bb] border-[#5b56bb] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              show details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;

EstateCard.propTypes = {
  estate: PropTypes.object,
};
