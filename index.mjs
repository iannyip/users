// ROOT FILE -- ENTRY POINT
// || yarn start

// 1a. Import libraries
import express from "express";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";

// 1b. Import bindRoutes from ./routes.mjs
import bindRoutes from "./routes.mjs";

// 2. Variables

// 3. Initialize express
const app = express();

// 4. Configure settings
app.set("views", "./views");
app.set("view engine", "ejs");

// 5. Middleware
// 5.1. To parse request body
app.use(express.urlencoded({ extended: false }));
// 5.2. To handle DEL and PUT req from HTML forms
app.use(methodOverride("_method"));
// 5.3. To set default view engine to ejs
const mwLine = (request, response, next) => {
  console.log("-----------------------------------");
  console.log(`${request.method}: ${request.path}`);
  next();
};
app.use(mwLine);

// 6. bindRoutes to app
bindRoutes(app);

// 7. Start express server
console.log("Starting server...");
const PORT = process.env.PORT || 3004;
app.listen(PORT);
