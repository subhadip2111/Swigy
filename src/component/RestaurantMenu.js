// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; // import useParams for read `resId`

// import { swiggy_menu_api_URL,
//   IMG_CDN_URL,
//   ITEM_IMG_CDN_URL,
//   MENU_ITEM_TYPE_KEY,
//   RESTAURANT_TYPE_KEY, } from "../../constants";
// import Shimmer, { MenuShimmer } from "./Shimmer";
// import useRestraunt from "../utils/useRestraunt";


// const RestaurantMenu = () => {
//   const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
//   // call useState to store the api data in restraunt

//  const [restaurant, menuItems] = useRestraunt(
//     swiggy_menu_api_URL,
//     resId,
//     RESTAURANT_TYPE_KEY,
//     MENU_ITEM_TYPE_KEY
//   );

// console.log(restaurant)
//   return !restaurant ? (
//     <Shimmer />
//   ) : (
//     <div className="restaurant-menu">
//       <div className="restaurant-summary">
//         <img
//           className="restaurant-img"
//           src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
//           alt={restaurant?.name}
//         />
//         <div className="restaurant-summary-details">
//           <h2 className="restaurant-title">{restaurant?.name}</h2>
//           <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
//           <div className="restaurant-details">
//             <div className="restaurant-rating" style={
//             (restaurant?.avgRating) < 4
//               ? { backgroundColor: "var(--light-red)" }
//               : (restaurant?.avgRating) === "--"
//               ? { backgroundColor: "white", color: "black" }
//               : { color: "white" }
//           }>
//             <i className="fa-solid fa-star"></i>
//               <span>{restaurant?.avgRating}</span>
//             </div>
//             <div className="restaurant-rating-slash">|</div>
//             <div>{restaurant?.sla?.slaString}</div>
//             <div className="restaurant-rating-slash">|</div>
//             <div>{restaurant?.costForTwoMessage}</div>
//           </div>
//         </div>
//       </div>

//       <div className="restaurant-menu-content">
//         <div className="menu-items-container">
//           <div className="menu-title-wrap">
//             <h3 className="menu-title">Recommended</h3>
//             <p className="menu-count">
//               {menuItems.length} ITEMS
//             </p>
//           </div>
//           <div className="menu-items-list">
//             {menuItems.map((item) => (
//               <div className="menu-item" key={item?.id}>
//                 <div className="menu-item-details">
//                   <h3 className="item-title">{item?.name}</h3>
//                   <p className="item-cost">
//                     {item?.price > 0
//                       ? new Intl.NumberFormat("en-IN", {
//                           style: "currency",
//                           currency: "INR",
//                         }).format(item?.price / 100)
//                       : " "}
//                   </p>
//                   <p className="item-desc">{item?.description}</p>
//                 </div>
//                 <div className="menu-img-wrapper">
//                   {item?.imageId && (
//                     <img
//                       className="menu-item-img"
//                       src={ITEM_IMG_CDN_URL + item?.imageId}
//                       alt={item?.name}
//                     />
//                   )}
//                   <button className="add-btn"> ADD +</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// };

// export default RestaurantMenu;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggy_menu_api_URL, IMG_CDN_URL, ITEM_IMG_CDN_URL, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../../constants";
import Shimmer, { CardShimmer } from "./Shimmer";
import useRestraunt from "../utils/useRestraunt";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {

const dispatch=useDispatch()
  
  const { resId } = useParams();
  const [restaurant, menuItems] = useRestraunt(swiggy_menu_api_URL, resId, RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY);
  const handleAddItem = (item) => {
  dispatch(addItem(item))
}
  return !restaurant ? (
    <Shimmer/>
  ) : (
    <div className="bg-white min-h-screen p-4 flex">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <img
              className="w-full h-auto rounded-lg shadow-md"
              src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
              alt={restaurant?.name}
            />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">{restaurant?.name}</h2>
              <p className="text-gray-600">{restaurant?.cuisines?.join(", ")}</p>
              <div className="flex items-center mt-2">
                <span
                  className={`rounded-full px-2 py-1 text-white ${
                    restaurant?.avgRating < 4
                      ? "bg-red-500"
                      : restaurant?.avgRating === "--"
                      ? "bg-white text-black"
                      : "bg-blue-500"
                  }`}
                >
                  <i className="fa-solid fa-star"></i> {restaurant?.avgRating}
                </span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600">{restaurant?.sla?.slaString}</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600">{restaurant?.costForTwoMessage}</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Recommended</h3>
              <p className="text-gray-600">{menuItems.length} ITEMS</p>
            </div>
            <div className="space-y-4">
              { menuItems.map((item) => (
                <div className="flex items-center border rounded-lg p-4" key={item?.id}>
                  {item?.imageId && (
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <div className="flex-grow pl-4">
                    <h3 className="text-lg font-semibold">{item?.name}</h3>
                    <p className="text-gray-600">
                      {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item?.price / 100)
                        : " "}
                    </p>
                    <p className="text-gray-600">{item?.description}</p>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={()=>handleAddItem(item)}>
                    ADD  +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
