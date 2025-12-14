import { useLoaderData } from "react-router";
import Coffee from "../components/Coffee";

const Coffees = () => {
  const coffees = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 mt-12">
      {coffees.map((coffee) => (
        <Coffee key={coffee.id} coffee={coffee}></Coffee>
      ))}
    </div>
  );
};

export default Coffees;
