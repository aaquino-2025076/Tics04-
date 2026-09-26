const userList = document.getElementById('userList');
const searchInput = document.getElementById('searchInput');
let users = [];

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
  }
}

function renderUsers(usersToRender) {
  userList.innerHTML = '';
  usersToRender.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = user.name;
    userList.appendChild(li);
  });
}

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );
  renderUsers(filteredUsers);
});

fetchUsers();