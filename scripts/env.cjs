let context = {};

context.development = () => {
  console.log("Setting up development environment");
};

context.production = () => {
  console.log("Setting up production environment");
};

module.exports = (MODE) => {
  return context[MODE]();
};
