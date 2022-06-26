// 1. Import db model from models directory
import db from "./models/index.mjs";

// 2. Import controllers from controllers directory
import initUserController from "./controllers/userController.mjs";

// 3. Create bindRoutes function
const bindRoutes = (app) => {
  const userController = initUserController(db);

  // Routes
  app.get("/", (request, response) => {
    response.send("you are in root");
  });

  app.get("/users", userController.index);
  app.get("/users/:id", userController.show);
  app.put("/users/:id", userController.update);
  app.post("/users/new", userController.create);
};

// 4. Export bindRoutes function
export default bindRoutes;
