document.addEventListener('DOMContentLoaded', async function () {
    // Define the async function to fetch user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch the data from the API
            const response = await fetch(apiUrl);

            // Check if the response is OK
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse the response as JSON
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to hold the user names
            const userList = document.createElement('ul');

            // Loop through the users and create an <li> element for each
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // If there's an error, display a failure message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching data:', error);
        }
    }

    // Call the function to fetch and display user data
    fetchUserData();
});
