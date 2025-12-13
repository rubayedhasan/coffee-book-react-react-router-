import PropTypes from "prop-types";

const Heading = ({ title, subTitle }) => {
  return (
    <div className="mt-8 text-center space-y-4">
      <h2 className="font-semibold text-3xl lg:text-4xl">{title}</h2>
      <p className="text-xl font-thin">{subTitle}</p>
    </div>
  );
};

// define propTypes
Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Heading;
