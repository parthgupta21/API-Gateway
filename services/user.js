
async function getUser(id) {
  return {
    id,
    name: "John Doe",
    email: "john@example.com"
  };
}
module.exports = { getUser };