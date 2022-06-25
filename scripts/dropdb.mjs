// Have not managed to get this to work with
// node scripts/dropdb.mjs
// will KIV

import pgtools from "pgtools";
import allConfig from "../config/config.js";

const devConfig = allConfig.development;
devConfig.port = 5432;
devConfig.user = devConfig.username;

pgtools.dropdb(devConfig, devConfig.database, (error, response) => {
  if (error) {
    console.log(error);
    process.exit(-1);
  }
  console.log(response);
});
