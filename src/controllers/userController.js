const users = [
  {
    id: 1,
    name: "Euclides Bernardo",
    email: "euclides.bernardo@nzooji.com",
    age: 20,
  },
  {
    id: 2,
    name: "Raúl Inácio",
    email: "raul.inacio@nzooji.com",
    age: 21,
  },
];

const index = (_, res) => {
  res.status(200).send({ success: true, data: users });
};

const show = (req, res) => {
  const { id } = req.params;

  if (id > users.length) {
    res.status(200).send({ success: true });
    return;
  } else if (id <= 0) {
    res.status(200).send({
      success: false,
      message: "O id do usuário não pode ser nulo ou negativo",
    });
    return;
  }

  const user = users[id - 1];

  res.status(200).send({ success: true, data: user });
};

const store = (req, res) => {
  const { name, email, age } = req.body;

  const id = users.length + 1;

  const user = { id, name, email, age };

  users.push(user);

  res.status(201).send({ success: true, data: user });
};

const update = (req, res) => {
  const { id } = req.params;

  const userId = parseInt(id, 9) - 1;

  if (userId > users.length || userId < 0) {
    res.status(200).send({
      success: false,
      message: "Usuário com o id informado não encontrado",
    });
    return;
  }

  const user = users[userId];

  user.name = req.body.name ?? user.name;
  user.email = req.body.email ?? user.email;
  user.age = req.body.age ?? user.age;

  users[userId] = user;

  res.status(200).send({ success: true, data: user });
};

module.exports = { index, show, store, update };
