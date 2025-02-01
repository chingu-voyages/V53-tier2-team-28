export const determineNext7Days = (index, shortFormat = false) => {
  const date = new Date();
  date.setDate(date.getDate() + index);
  return shortFormat
    ? date.toLocaleDateString("en-US", { weekday: "short" })
    : date.toLocaleDateString("en-US", { weekday: "long" });
};

// ! adjust for needs of this app
export function sortFood(foodArray, sortBy = "soldOut") {
  let sortedFood;

  if (sortBy === "soldOut")
    sortedFood = foodArray?.slice().sort((a, b) => a.soldOut - b.soldOut);

  if (sortBy === "name")
    sortedFood = foodArray
      ?.slice()
      .sort((a, b) => a.name.localeCompare(b.name));

  if (sortBy === "unitPrice")
    sortedFood = foodArray?.slice().sort((a, b) => a.unitPrice - b.unitPrice);

  return sortedFood;
}

export const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "short",
  }).format(new Date(date));

export function capitalize(word) {
  if (typeof word !== "string") return "";
  return word.split("")[0].toUpperCase() + word.slice(1);
}
