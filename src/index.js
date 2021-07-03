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
const bookList = document.getElementById("book-list");

// Book class
class Book {
    constructor(firstName, lastName, title, rating) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.rating = rating;
    }
}

// Event listener form
form.addEventListener("submit", e => {
    // Get form values
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const title = titleInput.value;
    const rating = ratingInput.value;

    // For each book, create new object instance and pass the form values
    const book = new Book(firstName, lastName, title, rating);

    // Form validation
    if (firstName === "" || lastName === "" || title === "" || rating === "") {
        // Disable page reloading
        e.preventDefault();
        // Show alert
        showMessage("Please fill in all fields!", "warning");
    } else {
        // Disable page reloading
        e.preventDefault();
        // Add book to list, pass in book object
        addBookToList(book);
        // Show succes message
        showMessage("Book successfully added!", "succes");
    }
})

// Event listener delete
    // Because the icon is created dynamically we have to use event delegation
bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("material-icons") && confirm("Are you sure?")) {
        // Get the closest table row and remove from DOM
        e.target.closest("tr").remove();
        // Show success message
        showMessage("Book removed!", "succes");
    }
})


// Add book
function addBookToList(book) {
    // Create table row and append to table
    const row = document.createElement("tr");
    bookList.appendChild(row);

    // Create table data and append to table row
        // Get book object values
        const bookValues = Object.values(book)

    // Loop over array with values and create table data for each of them
        bookValues.forEach(value => {
            // Create table data
            const td = document.createElement("td");
            // Add values
            td.innerText = value;
            // Append
            row.appendChild(td);
        })

    // Create icon
    const icon = document.createElement("i");
        // Add class
        icon.className = "small material-icons";
        // Add HTML
        icon.innerHTML = "delete_forever"
        // Append
        row.appendChild(icon);

    // Erase input fields
    cleanUpInputFields();
}

// Clean up input fields
function cleanUpInputFields() {
    // Replace values
    firstNameInput.value = "";
    lastNameInput.value = "";
    titleInput.value = "";
    ratingInput.value = "";
}

// Form validation
function showMessage(msg, className) {
    // Create element
    const div = document.createElement("div");
    // Add class
    div.className = `${className}`;
    // Create and append text node
    div.appendChild(document.createTextNode(msg));
    // Insert into DOM
    form.appendChild(div)
    // Hide message after 3 seconds
    setTimeout( () => {
        div.classList.add("hidden")
    }, 2000)
}