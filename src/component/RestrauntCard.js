// import { IMG_CDN_URL } from "../../constants";

// const RestrauntCard = ({
//   name,
//   cuisines,
//   cloudinaryImageId,
//   lastMileTravelString,
//   avgRatingString,
//   areaName,
//   sla,
//   costForTwo,
// }) => {
//   return (
//     <div className="      p-4 w-72 shadow-lg bg-white rounded-lg overflow-hidden justify-items-center" >
//       <img
//         src={IMG_CDN_URL + cloudinaryImageId}
//         alt={name}
//         className="w-full h-40 object-cover"
//       />
//       <div className="p-4">
//         <h2 className="font-bold text-xl">{name}</h2>
//         <h5 className="text-gray-600">{cuisines.join(", ")}</h5>
//         <h5 className="text-gray-600">{areaName}</h5>
//         <div className="flex items-center mt-2">
//           <span
//             className={`rounded-full px-2 py-1 text-white ${
//               avgRatingString < 4
//                 ? "bg-red-500"
//                 : avgRatingString === "--"
//                 ? "bg-white text-black"
//                 : "bg-blue-500"
//             }`}
//           >
//             <i className="fa-solid fa-star"></i> {avgRatingString}
//           </span>
//           <span className="mx-2 text-gray-400">•</span>
//           <span className="text-gray-600">
//             {sla?.lastMileTravelString ?? "2.0 km"}
//           </span>
//           <span className="mx-2 text-gray-400">•</span>
//           <span className="text-gray-600">
//             {costForTwo ?? "₹200 for two"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestrauntCard;



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_URL } from "../../constants";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

const RestrauntCard = ({
  name,
  cloudinaryImageId,
  area,
  cuisines,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  // const { user } = useContext(UserContext);
  return (
    <div className=" p-4 w-72 rounded-lg shadow-2xl m-3 cursor-pointer flex" >
      <div className="w-full h-full">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <div className="pt-3 text-lg font-bold">{name}</div>
        <p className="text-lg text-gray-900 py-3">{cuisines.join(", ")}</p>
        <div className="flex justify-between font-bold">
          <span
            className={
              (avgRating < 3.7 || avgRating == "--"
                ? "bg-orange-500"
                : "bg-green-800") +
              " " +
              "px-2 text-white"
            }
          >
            <FontAwesomeIcon icon={faStar} size="sm" /> {avgRating}
          </span>
          <span>{lastMileTravelString}</span>
          <span>{costForTwoString}</span>
        </div>
        {/* <span>{user.name}</span>
        <span>{user.email}</span> */}
      </div>
    </div>
  );
};

export default RestrauntCard;

//  width: 240px;
  // border-radius: 5px;
  // box-shadow: -1px 5px 10px 5px rgba(112, 112, 112, 0.2);
  // padding: 10px;
  // margin: 20px;
  // cursor: pointer;