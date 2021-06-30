// Import Materialize
import "materialize-css/dist/css/materialize.min.css";

// Import custom css
import "./css/custom.scss";

// Define UI variables
const form = document.getElementById("book-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const titleInput = document.getElementById("title");
const ratingInput = document.getElementById("rating");
const bookTable = document.getElementById("book-table");

// Book constructor
function Book(firstName, lastName, title, rating) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.rating = rating;
}

// Event listeners
form.addEventListener("submit", e => {
    // Get form values
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const title = titleInput.value;
    const rating = ratingInput.value;

    // For each book, create new object instance and pass the form values
    const book = new Book(firstName, lastName, title, rating);

    // Add book to list, pass in book object
    addBookToList(book);

    // Disable page reloading
    e.preventDefault();
})

// Add book
function addBookToList(book) {
    // Create table row and append to table
    const row = document.createElement("tr");
    bookTable.appendChild(row);

    // Create table data and append to table row
        // Get book object values
        const bookValues = Object.values(book)
        console.log(bookValues)

    // Loop over array with values and create table data for each of them
        bookValues.forEach(value => {
            // Create table data
            const td = document.createElement("td");
            // Add values
            td.innerText = value;
            // Append
            row.appendChild(td);
        })

    // Erase input fields
    eraseInputFields();
}

// Erase input fields
function eraseInputFields() {
    // Replace values
    firstNameInput.value = "";
    lastNameInput.value = "";
    titleInput.value = "";
    ratingInput.value = "";
}