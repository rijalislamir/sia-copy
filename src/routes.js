const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/users',
    handler: getUsers,
  },
  {
    method: 'POST',
    path: '/users',
    handler: createUser,
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: updateUser,
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: deleteUser,
  },
  {
    method: 'GET',
    path: '/subjects',
    handler: () => {
      return 'get subjects'
    },
  },
];

module.exports = routes;