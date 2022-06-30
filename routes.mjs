// 1. Import db model from models directory
import db from "./models/index.mjs";

// 2. Import controllers from controllers directory
import initUserController from "./controllers/userController.mjs";
import initAdminUserController from "./controllers/adminUserController.mjs";

// 3. Create bindRoutes function
const bindRoutes = (app) => {
  const userController = initUserController(db);
  const adminUserController = initAdminUserController(db);

  // Routes
  app.get("/", (request, response) => {
    response.send("you are in root");
  });

  app.get("/users", userController.index);
  app.get("/users/:id", userController.show);
  app.put("/users/:id", userController.update);
  app.post("/users/new", userController.create);

  app.get("/admin/users", adminUserController.index);
};

// 4. Export bindRoutes function
export default bindRoutes;
