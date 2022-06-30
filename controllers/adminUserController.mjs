import moment from "moment";

export default function initAdminUserController(db) {
  // 1. Route: /admin/users
  const index = async (request, response) => {
    try {
      const allUserData = await db.User.findAll();
      response.render("allUsers", { allUserData, moment });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
  };
}
