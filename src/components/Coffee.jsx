import PropTypes from "prop-types";

const Coffee = ({ coffee }) => {
  return (
    <div>
      <p>Coffee: {coffee.name}</p>
    </div>
  );
};

// define the propTypes
Coffee.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default Coffee;
