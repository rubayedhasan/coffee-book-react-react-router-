// function::get the stored data from local storage
const getTheFavorites = () => {
  const strFavorites = window.localStorage.getItem("favorites");
  if (strFavorites) {
    const favorites = JSON.parse(strFavorites);
    return favorites;
  }
  return [];
};

// function::save the favorites to local storage
const saveTheFavorites = (products) => {
  const stringifiedProducts = JSON.stringify(products);
  window.localStorage.setItem("favorites", stringifiedProducts);
};

// function::add new data in previously stored data from local storage
const addTheFavorites = (product) => {
  // get the previously stored data
  const favorites = getTheFavorites();

  //   validate the data is exists before
  const existsProduct = favorites.find((p) => p.id === product.id);
  if (existsProduct) {
    return alert("This product is exists");
  }

  //   add the product to the favorites
  favorites.push(product);

  //   save the favorites
  saveTheFavorites(favorites);
};

export { addTheFavorites };
