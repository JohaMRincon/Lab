const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test("add user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test("verificar que user no este en lista y", () => {
  const userController = new UserController();
  const user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.add(user);
  expect(userController.getUsers().length).toBe(1);
  expect(userController.getUsers()).toContain(user);
});

test("remove user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test("intentar eliminar un usuario que no está en la lista de usuarios", () => {
  const userController = new UserController();
  const user1 = new User(1234, "Santiago", "santiago@generation.org");
  const user2 = new User(5678, "Maria", "maria@generation.org");
  userController.add(user1);
  userController.remove(user2);
  expect(userController.getUsers()).toContain(user1);
  expect(userController.getUsers().length).toBe(1);
});

test("encontrar un usuario por correo electrónico existente", () => {
  const userController = new UserController();
  const user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  const foundUser = userController.findByEmail("santiago@generation.org");
  expect(foundUser).toBe(user);
});

test("no encontrar un usuario por correo electrónico inexistente", () => {
  const userController = new UserController();
  const foundUser = userController.findByEmail("noexiste@generation.org");
  expect(foundUser).toBeUndefined();
});

test("encontrar un usuario por ID existente", () => {
  const userController = new UserController();
  const user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  const foundUser = userController.findById(1234);
  expect(foundUser).toBe(user);
});

test("no encontrar un usuario por ID inexistente", () => {
  const userController = new UserController();
  const foundUser = userController.findById(9999);
  expect(foundUser).toBeUndefined();
});
