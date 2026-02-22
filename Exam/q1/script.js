fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response) {
            console.log("Not found")
        }
        return response.json();
    })
    .then(users => {
        document.getElementById('table');

        let table = document.getElementById('table');

        users.forEach(user => {
            let row = table.insertRow();

            let cell1 = row.insertCell();
            cell1.innerText = user.name;

            let cell2 = row.insertCell();
            cell2.innerText = user.email;

            let cell3 = row.insertCell();
            cell3.innerText = user.address;
        });
    })
    .catch(error => {
        document.getElementById('error');
    });