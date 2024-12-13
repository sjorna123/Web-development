// Fetch random user data using Fetch API
async function fetchRandomUser() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
  
      // Extract user data
      const user = data.results[0];
      const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
      const email = user.email;
      const picture = user.picture.large;
  
      // Display user data
      displayUser(name, email, picture);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  // Function to display user data in the DOM
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
  
  // Call the function to fetch and display a random user
  fetchRandomUser();
  