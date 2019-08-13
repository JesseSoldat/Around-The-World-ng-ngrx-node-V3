const config = require("./config.json");
const env = process.env.NODE_ENV || "dev";

if (env === "dev") {
  const devConfig = config[env];

  Object.keys(devConfig).forEach(key => {
    process.env[key] = devConfig[key];
  });
}
