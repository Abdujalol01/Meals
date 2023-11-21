import { API_URL } from "./api";

const allCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  return response.json();
};

const categoriesById = async (id) => {
  const response = await fetch(API_URL + `lookup.php?i=${id}`);
  return response.json();
};
const searchByName = async (name) => {
  const response = await fetch(API_URL + `search.php?s=${name}`);
  return response.json();
};

const filterByCategory = async (category) => {
  const response = await fetch(API_URL + `filter.php?c=${category}`);
  return response.json();
};

export { allCategories, categoriesById, searchByName, filterByCategory };
