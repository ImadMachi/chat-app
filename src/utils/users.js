const users = [];

export const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return {
      error: 'Username and Room are required!',
    };
  }

  // Chaeck for existing user
  const existingUser = users.find((user) => user.room === room && user.username === username);

  // VAlidate username
  if (existingUser) {
    return {
      error: 'Username is in use!',
    };
  }

  // Store use
  const user = { id, username, room };
  users.push(user);
  return { user };
};

export const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

export const getUser = (id) => users.find((user) => user.id === id);

export const getUsersInRoom = (room) => users.filter((user) => user.room === room);
