import { shimmer_card_unit } from "../../constants";


const Shimmer = () => {
  return (
    <div className="mt-5 m-auto w-4/5">
      <div className="flex flex-wrap gap-8 justify-evenly ">
        {Array(10)
          .fill("")
          .map((item, index) => {
            return (
              <div className=" animate-pulse w-72 h-96" key={index}>
                <div className="w-72 h-44 bg-gray-400 mb-3"></div>
                <div className="w-72 h-8 bg-gray-400 mb-3"></div>
                <div className="w-3/4 h-8 bg-gray-400 mb-3"></div>
                <div className="flex w-72 h-5 gap-2 justify-between">
                  <div className="w-1/3 bg-gray-400"></div>
                  <div className="w-1/3 bg-gray-400"></div>
                  <div className="w-1/3 bg-gray-400"></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shimmer

   export const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

  export const MenuShimmer = () => {
  return (
    <>
      <div className=" animate-pulse h-72 py-8 mb-5">
        <div className="m-auto w-4/5 flex justify-evenly items-center gap-5">
          <div className="w-96 h-52 bg-gray-400"></div>

          <div className="w-1/3">
            <div className=" mb-2 w-full h-10 bg-gray-400"></div>
            <div className=" mb-2 w-2/3 h-10 bg-gray-400"></div>
            <div className="flex w-full h-5 gap-2 justify-between">
              <div className="w-1/3 bg-gray-400"></div>
              <div className="w-1/3 bg-gray-400"></div>
              <div className="w-1/3 bg-gray-400"></div>
            </div>
          </div>

          <div className="h-32 w-1/3 bg-gray-400"></div>
        </div>
      </div>
      <div className="m-auto w-3/5">
        {Array(5)
          .fill("")
          .map((item, index) => {
            return (
              <div
                className=" flex animate-pulse items-center gap-5 h-44"
                key={index}
              >
                <div className="h-4/5 w-3/4">
                  <p className="h-5 w-3/4 bg-gray-400 mb-2"></p>
                  <p className="h-12 w-3/4 bg-gray-400 mb-2"></p>
                  <p className="h-5 w-1/6 bg-gray-400 mb-2"></p>
                </div>

                <div className="h-4/5 w-1/4 bg-gray-400"></div>
              </div>
            );
          })}
      </div>
    </>
  );
};

