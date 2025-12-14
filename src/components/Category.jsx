import { NavLink, useLoaderData } from "react-router";

const Category = () => {
  const categories = useLoaderData();
  return (
    <div
      role="tablist"
      className="tabs tabs-lift grid grid-cols-3 mt-10 lg:mt-16"
    >
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab font-medium text-sm md:text-lg ${
              isActive && "tab-active font-semibold text-red-500"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;
