import { useLoaderData, useNavigate, useParams } from "react-router";
import Coffee from "./Coffee";

const CoffeeLists = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { categoryName } = useParams();

  let coffees;

  // filter all data by categories
  if (categoryName) {
    coffees = data.filter((coffee) => coffee.category === categoryName);
  } else {
    coffees = data;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {coffees.map((coffee) => (
          <Coffee key={coffee.id} coffee={coffee}></Coffee>
        ))}
      </div>

      {/* view all button  */}
      <div className="mt-6">
        <button
          className="btn btn-warning text-yellow-50"
          onClick={() => navigate("/coffees")}
          type="button"
        >
          View All
        </button>
      </div>
    </>
  );
};

export default CoffeeLists;
