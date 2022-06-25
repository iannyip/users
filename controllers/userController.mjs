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

  // return all functions
  return {
    index,
    show,
  };
}
