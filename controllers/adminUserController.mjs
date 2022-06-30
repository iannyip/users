import moment from "moment";

export default function initAdminUserController(db) {
  // 1. Route: /admin/users
  const index = async (request, response) => {
    try {
      response.render("allUsers");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
  };
}
