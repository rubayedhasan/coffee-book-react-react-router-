import { Link, useLoaderData } from "react-router";

const Category = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div
      role="tablist"
      className="tabs tabs-lift grid grid-cols-3 mt-10 lg:mt-16"
    >
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.category}`}
          role="tab"
          className="tab"
        >
          {category.category}
        </Link>
      ))}
    </div>
  );
};

export default Category;
