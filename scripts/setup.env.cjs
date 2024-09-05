const [SETUP_ENV] = process.argv.slice(2);

const [, MODE] = SETUP_ENV.split("=");

require("./env.cjs")(MODE);
