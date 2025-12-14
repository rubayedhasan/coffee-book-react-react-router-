import { useLoaderData, useParams } from "react-router";
import Coffee from "./Coffee";

const CoffeeLists = () => {
  const data = useLoaderData();
  const { categoryName } = useParams();

  // filter all data by categories
  const coffees = data.filter((coffee) => coffee.category === categoryName);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {coffees.map((coffee) => (
        <Coffee key={coffee.id} coffee={coffee}></Coffee>
      ))}
    </div>
  );
};

export default CoffeeLists;
