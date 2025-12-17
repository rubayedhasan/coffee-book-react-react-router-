import { useEffect, useState } from "react";
import Coffee from "../components/Coffee";
import Heading from "../components/Heading";
import { getTheFavorites, removeTheFavorite } from "../utils/coffeeStorage";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);

  // Effect:: for load the save favorites data from local storage
  useEffect(() => {
    const favorites = getTheFavorites();
    setCoffees(favorites);
  }, []);

  // function: handler for remove the coffee
  const handlerRemoveTheCoffee = (coffeeId) => {
    // remove the coffee from storage
    removeTheFavorite(coffeeId);

    // reset the coffees
    const favorites = getTheFavorites();
    setCoffees(favorites);
  };

  return (
    <>
      {/* heading  */}
      <Heading
        title="Welcome to Dashboard"
        subTitle="Manage coffees that you have previously added as favorite. You can view or remove them from here."
      ></Heading>

      {/* selected coffee card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-16 mt-8 md:mt-10 lg:mt-12">
        {coffees.map((coffee) => (
          <Coffee
            key={coffee.id}
            coffee={coffee}
            handlerRemoveTheCoffee={handlerRemoveTheCoffee}
          ></Coffee>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
