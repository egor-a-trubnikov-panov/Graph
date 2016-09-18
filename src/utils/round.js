export default (value, multiple) => {
  const fold = Math.pow(10, multiple);
  return Math.ceil(value * fold) / fold;
};
