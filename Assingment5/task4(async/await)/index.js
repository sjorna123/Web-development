function getData(userId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching data for ${userId}...`);
        
        setTimeout(() => {
            const response = {
                id: userId,
                name: `User-${userId}`,
            };
            
            console.log(`Data for user ${userId} fetched`);
            resolve(response);
        }, 1400);
    });
}

async function fetchAllUsers() {
    try {
        console.log("Starting async/await version...\n");

        const data1 = await getData(1);
        console.log("Id 1 data fetched successfully", data1.name);

        const data2 = await getData(2);
        console.log("Id 2 data fetched successfully", data2.name);

        const data3 = await getData(3);
        console.log("Id 3 data fetched successfully", data3.name);

        const data4 = await getData(4);
        console.log("Id 4 data fetched successfully", data4.name);

        console.log("\nAll done");
    } catch (err) {
        console.error("Some fetch failed:", err.message);
    }
}
fetchAllUsers();