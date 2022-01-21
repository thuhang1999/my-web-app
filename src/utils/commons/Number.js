export const format = (number) => {
  if (typeof number === "number") {
    return number.toLocaleString("vi");
  }

  return number;
};
