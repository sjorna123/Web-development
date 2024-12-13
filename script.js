async function fetchRandomUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();

    const user = data.results[0];
    const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const email = user.email;
    const picture = user.picture.large;

    displayUser(name, email, picture);
  } catch (error) {
    console.error('Error fetching user data:', error);
    displayError();
  }
}

function displayUser(name, email, picture) {
  const container = document.getElementById('user-container');
  
  container.innerHTML = `
    <img src="${picture}" alt="User Image" style="width: 100%; border-radius: 10px;">
    <h2>${name}</h2>
    <p>Email: ${email}</p>
  `;
}

function displayError() {
  const container = document.getElementById('user-container');
  container.innerHTML = '<p>Failed to fetch user data. Please try again.</p>';
}

document.getElementById('next-user-btn').addEventListener('click', fetchRandomUser);
fetchRandomUser();
