const getDate = (date) => {
  const created = new Date(date);
  const options = { month: "short", day: "numeric" };
  return created.toLocaleDateString("en-us", options);
};

export default getDate;