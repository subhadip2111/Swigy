// 
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodvilla.png";
import dummyLogo from "../mocks/dummyLogo";

const Title = () => {
  return (
  <a href="/">
    <img
          data-testid="logo"    className="w-20 min-w-[5rem] rounded-full"
      src={Logo}
      alt="Food Fire"
      title="Food Love"
    />
  </a>
  );
};

export default Title;
//  padding: 10px 0 10px 15px;
//   width: 100px;