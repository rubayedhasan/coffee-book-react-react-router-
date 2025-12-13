import { Outlet } from "react-router";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div>
      {/* Banner  */}
      <Banner></Banner>

      {/* heading  */}
      <Heading
        title="Browse Coffee By Categories"
        subTitle="Choose your desired coffee category to browse through specific coffees that fit in your taste"
      ></Heading>

      {/* dynamic selection tab   */}
      <Category></Category>

      {/* dynamic coffee cards  */}
      <Outlet />
    </div>
  );
};

export default Home;
