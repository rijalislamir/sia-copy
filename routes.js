const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => {
      return 'get homepage'
    },
  },
  {
    method: 'GET',
    path: '/users',
    handler: () => {
      return 'get user'
    },
  },
  {
    method: 'POST',
    path: '/users',
    handler: () => {
      return 'post user'
    },
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: (request, h) => {
      const { id } = request.params

      return `put user ${id}`
    },
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: (request, h) => {
      const { id } = request.params
      return `delete user ${id}`
    },
  },
];

module.exports = routes;