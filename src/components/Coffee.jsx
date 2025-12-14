import PropTypes from "prop-types";

const Coffee = ({ coffee }) => {
  const { name, image, category, type, origin, rating, popularity } =
    coffee || {};
  return (
    <div className="shadow-sm p-5 rounded-md flex flex-col">
      <figure className="flex-1 justify-center items-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-md object-cover"
        />
      </figure>
      <div className="pl-3.5 mt-4">
        <h3 className="text-lg md:text-xl font-semibold">Name: {name}</h3>
        <p className="text-base md:text-lg font-light mt-1.5">
          Category: {category}
        </p>
        <p className="text-base md:text-lg font-light mt-1.5">Type: {type}</p>
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
  );
};

// define the propTypes
Coffee.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default Coffee;
