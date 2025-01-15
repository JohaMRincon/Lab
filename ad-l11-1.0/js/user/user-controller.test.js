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
});

test("remove user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});
