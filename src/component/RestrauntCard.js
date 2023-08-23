

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_URL } from "../../constants";

const RestrauntCard = ({
  name,
  cloudinaryImageId,
  
  cuisines,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="">
      <div className="w-72 h-auto  border rounded-5 shadow-2xl p-10 m-2 cursor-pointer  cart-container bg-slate-100 rounded-2xl hover:scale-105 transition duration-300">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{name}</h3>
      
          <p className="text-gray-600 text-sm mt-1 truncate">
            {cuisines.join(", ")}
          </p>
          <div className="flex justify-between items-center mt-3">
            <span
              className={`${
                avgRating < 3.7 || avgRating === "--"
                  ? "bg-orange-500"
                  : "bg-green-800"
              } px-2 py-1 text-white rounded`}
            >
              <FontAwesomeIcon icon={faStar} className="mr-1" /> {avgRating}
            </span>
           
            <span className="text-gray-600 text-sm truncate">
              {lastMileTravelString}
            </span>
            <span className="text-gray-600 text-sm truncate">
              {costForTwoString}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrauntCard;
