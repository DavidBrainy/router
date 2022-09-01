const getUsers = (request, response) => {
    response.status(200).send("Welcome to my server");
 };

const createUser = (request, response) => {
    response.status(201).send("Your data has been saved.");
  };

  const updateUser =(request, response) => {
    response.status(200).send("Your Information is updated.");
   };

const deleteUser = (request, response) => {
    response.status(200).send("Your Information is deleted.");
   };

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};
