// Initialize the Async function
async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  //   Selecting the data container element
  const dataContainer = document.getElementById("api-data");

  // Fetching data using try-catch block
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // Clear loading user data
    dataContainer.innerHTML = "";

    // Create and Append User List - using <ul> element
    const userList = document.createElement("ul");

    // Looping through users and create <li> items
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the List to the data container
    dataContainer.appendChild(userList);
    // continuation of try-catch / Handling errors
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}
// Invoke fetchUserData on DOMContentLoaded. In other words,
// Run the function 'fetchUserData' when the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", fetchUserData);
