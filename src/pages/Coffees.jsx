import { useLoaderData } from "react-router";
import Coffee from "../components/Coffee";
import { useState } from "react";

const Coffees = () => {
  const allCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(allCoffees);

  const handleSort = (sortBy) => {
    if (sortBy === "popularity") {
      // sort by popularity
      const popularCoffees = [...allCoffees].sort(
        (a, b) => b?.popularity - a?.popularity
      );
      // store
      setCoffees(popularCoffees);
    } else if (sortBy === "rating") {
      // sort by rating
      const goodRatedCoffees = [...allCoffees].sort(
        (a, b) => b.rating - a.rating
      );

      // store
      setCoffees(goodRatedCoffees);
    } else {
      setCoffees(allCoffees);
    }
  };

  return (
    <>
      {/* section's heading  */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
        <h3 className="capitalize text-base sm:text-lg md:text-xl xl:text-2xl font-semibold sm:font-medium text-center lg:text-left">
          sort coffee's by popularity & rating-&gt;
        </h3>

        <div className="flex gap-1.5 md:gap-4">
          <button
            onClick={() => handleSort("popularity")}
            className="capitalize text-sm md:text-base xl:text-lg btn btn-error text-yellow-50"
            type="button"
          >
            sort by popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="capitalize text-sm md:text-base xl:text-lg btn btn-error text-yellow-50"
            type="button"
          >
            sort by rating
          </button>
        </div>
      </div>

      {/* dynamic card section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 mt-8 md:mt-10 lg:mt-12">
        {coffees.map((coffee) => (
          <Coffee key={coffee.id} coffee={coffee}></Coffee>
        ))}
      </div>
    </>
  );
};

export default Coffees;
