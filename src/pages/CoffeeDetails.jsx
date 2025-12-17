import { useLoaderData, useParams } from "react-router";
import nutritionImg from "../assets/images/nutrition.png";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getTheFavorites, addTheFavorites } from "../utils/coffeeStorage";

const CoffeeDetails = () => {
  const allCoffees = useLoaderData();
  const { coffeeId } = useParams();
  const [selected, setSelected] = useState(false);

  // useEffect: for initially disable the stored favorite coffee
  useEffect(() => {
    const storedFavorites = getTheFavorites();
    const existFavorite = storedFavorites.find(
      (coffee) => coffee.id === parseInt(coffeeId)
    );

    // validation: disable the stored coffee to add favorite
    if (existFavorite) {
      setSelected(true);
    }
  }, [coffeeId]);

  // find the match coffee object
  const singleCoffee = allCoffees.find(
    (coffee) => coffee.id === parseInt(coffeeId)
  );

  const {
    name,
    image,
    description,
    making_process,
    ingredients,
    nutrition_info,
    origin,
    rating,
    popularity,
  } = singleCoffee || {};

  const { calories, fat, carbohydrates, protein } = nutrition_info;

  // handle favorite button
  const handleFavorite = () => {
    setSelected(true);

    // store the favorite coffee
    addTheFavorites(singleCoffee);
  };

  return (
    <div>
      <p className="text-lg font-light mb-3">{description}</p>
      <figure className="h-52 md:h-60 lg:h-100 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center rounded-md"
        />
      </figure>

      <div className="flex justify-between items-center mt-5">
        <h3 className="text-2xl md:text-3xl  font-semibold ">{name}</h3>

        <div>
          <button
            disabled={selected}
            onClick={handleFavorite}
            className="btn btn-error text-yellow-50 flex justify-center items-center transition duration-500"
            type="button"
          >
            <span className="text-amber-100 text-lg ">
              {selected ? <FaStar /> : <FaRegStar />}
            </span>{" "}
            Add Favorite
          </button>
        </div>
      </div>

      <p className="text-base md:text-lg mt-2.5">Origin: {origin}</p>
      <p className="text-base md:text-lg mt-1">Popularity: {popularity}</p>
      <p className="text-base md:text-lg mt-1">Rating: {rating}</p>

      <h4 className="text-lg md:text-xl text-rose-400 mt-6 md:mt-8 font-medium">
        Making Process:
      </h4>
      <p className="text-base md:text-lg font-light mt-2 text-justify">
        {making_process}
      </p>

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-8 md:gap-0 mt-8 md:mt-10">
        {/* info of Ingredients & Nutrition */}
        <div>
          <h5 className="text-base md:text-lg text-rose-400">Ingredients:</h5>
          <ul className="text-sm md:text-base list-disc list-inside mt-2">
            {ingredients.map((item, idx) => (
              <li key={idx} className="pl-3">
                {item}
              </li>
            ))}
          </ul>

          <h5 className="text-base md:text-lg text-rose-400 mt-4">
            Nutrition:
          </h5>
          <ul className="text-sm md:text-base list-disc list-inside mt-1">
            <li className="pl-3">Calories: {calories}</li>
            <li className="pl-3">Fat: {fat}</li>
            <li className="pl-3">Carbohydrates: {carbohydrates}</li>
            <li className="pl-3">Protein: {protein}</li>
          </ul>
        </div>

        {/* Nutrition image  */}
        <figure className="md:w-64 xl:w-100">
          <img
            src={nutritionImg}
            alt="Nutrition"
            className="w-full object-cover object-left"
          />
        </figure>
      </div>
    </div>
  );
};

export default CoffeeDetails;
