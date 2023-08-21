// 
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodvilla.png";

const Title = () => {
  return (
    <div className="top-0 left-0 p-4">
      <Link to="/">
        <img className="h-16" src={Logo} alt="FoodVilla Logo" />
      </Link>
    </div>
  );
};

export default Title;
