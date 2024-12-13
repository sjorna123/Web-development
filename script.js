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
    }
  }
  
  function displayUser(name, email, picture) {
    const container = document.getElementById('user-container');
    
    container.innerHTML = `
      <div style="border: 1px solid #ccc; padding: 20px; max-width: 300px;">
        <img src="${picture}" alt="User Image" style="width: 100%; border-radius: 10px;">
        <h2>${name}</h2>
        <p>Email: ${email}</p>
      </div>
    `;
  }
    fetchRandomUser();
  
