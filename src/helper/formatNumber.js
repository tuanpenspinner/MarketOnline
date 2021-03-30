export const formatNumber = (num) => {
  if (Number(num)) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return null;
};
