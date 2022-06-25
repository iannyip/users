export default function initUserController(db) {
  // 1. Route: /users
  const index = async (request, response) => {
    const allUsers = await db.User.findAll();
    response.send(allUsers);
  };

  // return all functions
  return {
    index,
  };
}
