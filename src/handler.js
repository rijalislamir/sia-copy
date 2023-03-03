const { users } = require('./database');
const { nanoid } = require('nanoid');

const getUsers = () => {
  return users;
}

const createUser = (request, h) => {
  const { name, email } = request.payload;

  if (!name) {
    const res = h.response({
      status: 'fail',
      message: 'Name field is required!'
    });
    res.code(400);

    return res;
  }


  if (!email) {
    const res = h.response({
      status: 'fail',
      message: 'Email field is required!'
    });
    res.code(400);

    return res;
  }

  const id = nanoid(16)

  users.push({
    id,
    name,
    email
  })

  const res = h.response({
    status: 'success',
    id,
    message: 'User has been created!'
  })
  res.code(201)

  return res;
}

const updateUser = (request, h) => {
  const { id } = request.params;

  const index = users.findIndex((user) => user.id === id)

  if (index === -1) {
    const res = h.response({
      status: 'fail',
      message: 'User not found!'
    })
    res.code(404);

    return res;
  }

  const { name, email } = request.payload || {}

  if (!name && !email) {
    const res = h.response({
      status: 'fail',
      message: 'Need one of data (name / email) to update a user!'
    })
    res.code(400);

    return res;
  }

  if (name) users[index].name = name;
  if (email) users[index].email = email;

  const user = users[index]

  const res = h.response({
    status: 'success',
    id: user.id,
    name: user.name,
    email: user.email
  })
  res.code(200)

  return res;
}

const deleteUser = (request, h) => {
  const { id } = request.params;

  const index = users.findIndex((user) => user.id === id)

  if (index === -1) {
    const res = h.response({
      status: 'fail',
      message: 'User not found!'
    })
    res.code(404);

    return res;
  }

  users.splice(index, 1);

  const res = h.response({
    status: 'success',
    id,
    message: 'User has been deleted!'
  })
  res.code(200);

  return res;
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};