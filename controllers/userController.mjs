import moment from "moment";
export default function initUserController(db) {
  // 1. Route: /users
  const index = async (request, response) => {
    const allUsers = await db.User.findAll();
    response.send(allUsers);
  };

  // 2. Route: /users/:id
  const show = async (request, response) => {
    const { id } = request.params;
    const user = await db.User.findOne({
      where: { id },
    });

    if (user == null) {
      console.log(`user ${id} not found`);
      response.status(404);
      response.send("user not found");
    } else {
      response.status(200);
      response.send(user);
    }
  };

  // 3. Route: /users/:id
  const update = async (request, response) => {
    try {
      const data = request.body;
      const { id } = request.params;
      console.log(data);
      for (const val in data) {
        // handle blanks
        if (data[val] == "") {
          delete data[val];
        }
        // handle date fields
        else if (val === "birthday") {
          const date = moment(data[val], "DD/MM/YYYY");
          data[val] = date;
        }
        // handle interger fields
        else if (val === "netWorth") {
          const intVal = parseInt(data[val]);
          data[val] = intVal;
        }
      }
      const updateUser = await db.User.update(data, { where: { id } });
      const updatedUser = await db.User.findOne({
        where: { id },
      });
      response.status(200);
      response.send(updatedUser);
    } catch (error) {
      console.log(error);
      response.status(400);
      response.send("error");
    }
  };

  // return all functions
  return {
    index,
    show,
    update,
  };
}
