const getUsers = () => {
  return 'get users';
}

const createUser = () => {
  return 'post user';
}

const updateUser = (request, h) => {
  const { id } = request.params;

  return `put user ${id}`;
}

const deleteUser = (request, h) => {
  const { id } = request.params;

  return `delete user ${id}`;
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};