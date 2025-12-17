import PropTypes from "prop-types";
import { Link, useLocation } from "react-router";
import { IoMdTrash } from "react-icons/io";

const Coffee = ({ coffee, handlerRemoveTheCoffee }) => {
  const { id, name, image, category, type, origin, rating, popularity } =
    coffee || {};

  const { pathname } = useLocation();

  return (
    <div className="relative">
      <Link to={`/coffee/${id}`}>
        <div className="shadow-sm p-5 rounded-md flex flex-col transition duration-500 hover:scale-105 overflow-hidden">
          <figure className="h-52 md:h-57.5 justify-center items-center">
            <img
              src={image}
              alt={name}
              className="w-full h-full rounded-md object-cover"
            />
          </figure>
          <div className="pl-3.5 mt-4 flex-1">
            <h3 className="text-lg md:text-xl font-semibold">Name: {name}</h3>
            <p className="text-base md:text-lg font-light mt-1.5">
              Category: {category}
            </p>
            <p className="text-base md:text-lg font-light mt-1.5">
              Type: {type}
            </p>
            <p className="text-base md:text-lg font-light mt-1.5">
              Origin: {origin}
            </p>
            <p className="text-base md:text-lg font-light mt-1.5">
              Rating: {rating}
            </p>
            <p className="text-base md:text-lg font-light mt-1.5">
              Popularity: {popularity}%
            </p>
          </div>
        </div>
      </Link>

      {pathname === "/dashboard" && (
        <div
          onClick={() => {
            handlerRemoveTheCoffee(id);
          }}
          className="absolute -top-6 -right-6 p-3 rounded-full bg-rose-500 cursor-pointer"
        >
          <IoMdTrash size={22} color={"oklch(98.7% 0.026 102.212)"} />
        </div>
      )}
    </div>
  );
};

// define the propTypes
Coffee.propTypes = {
  coffee: PropTypes.object.isRequired,
  handlerRemoveTheCoffee: PropTypes.func,
};

export default Coffee;
