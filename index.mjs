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
app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride());

// 4. Middleware
const mwLine = (request, response, next) => {
  console.log("-----------------------------------");
  console.log(`${request.method}: ${request.path}`);
  next();
};
app.use(mwLine);

// 5. bindRoutes to app
bindRoutes(app);

// 6. Start express server
console.log("Starting server...");
const PORT = process.env.PORT || 3004;
app.listen(PORT);
