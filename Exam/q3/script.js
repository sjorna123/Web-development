const logout = document.getElementById('logoutBtn');

if (logout) {
    logout.addEventListener('click', () => {
        console.log('Logging out...');
        
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        }).then(() => {
            console.log("You have been logged out.");
            alert("success")
        });
    });
} else {
    console.error("Unable to logout.");
}