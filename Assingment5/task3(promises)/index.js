function getData(userId, callback) {
    console.log(`Fetching data for ${userId}...`);
    
    setTimeout(() => {
        const response = {
            id: userId,
            name: `User-${userId}`,
        };
        
        console.log(`Data for user ${userId} fetched`);
        callback(null, response);   
    }, 1400);           
}

getData(1, (err, data1) => {
    if (err) return console.error("Failed user 1", err);
    
    console.log("Id 1 data fetched successfully ", data1.name);
    
    getData(2, (err, data2) => {
        if (err) return console.error("Failed user 2", err);
        
        console.log("Id 2 data fetched successfully", data2.name);
        
        getData(3, (err, data3) => {
            if (err) return console.error("Failed user 3", err);
            
            console.log("Id 3 data fetched successfully", data3.name);
            
            getData(4, (err, data4) => {
                if (err) return console.error("Failed user 4", err);
                
                console.log("Id 4 data fetched successfully", data4.name);
                console.log("\nAll done")
            });
        });
    });
});