function getUser(id, callback) {
    console.log("Fetching user...");
    setTimeout(() => {
        const user = { id: id, name: "Ram" };
        callback(user);
    }, 2000);
}

getUser(1, (user) => {
    console.log("User name:", user.name);
});