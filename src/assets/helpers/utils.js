export const truncate = (str, maxLength = 50) => {
  return str.length > maxLength ? `${str.substring(0, maxLength)}…` : str;
};
