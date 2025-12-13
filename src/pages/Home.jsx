import Banner from "../components/Banner";
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
      {/* dynamic coffee cards  */}
    </div>
  );
};

export default Home;
