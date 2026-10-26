// Service layer: business rules and data handling live here
const users = [
  { id: 1, name: "Oliver", email: "oliver@example.com" },
  { id: 2, name: "Mia", email: "mia@example.com" }
];

exports.findAll = () => {
  return users;
};

exports.findById = (id) => {
  return users.find((u) => u.id === id);
};

exports.create = ({ name, email }) => {
  const duplicate = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (duplicate) {
    const err = new Error("Email already exists");
    err.status = 409;
    throw err;
  }

  const nextId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const newUser = { id: nextId, name, email };
  users.push(newUser);
  return newUser;
};
