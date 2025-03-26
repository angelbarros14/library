const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("All the Bright Places", "Jennifer Niven", 388, true);
addBookToLibrary(book1);
displayBook(book1);


function displayBook() {
    const books = document.getElementById("books");

    while(books.firstChild) {
        books.removeChild(books.firstChild);
    }

    myLibrary.forEach(book => {
        const divBook = document.createElement("div");
        divBook.classList.add("newBook");

        const title = document.createElement("span");
        title.textContent= book.title;
        divBook.appendChild(title);

        const author = document.createElement("span");
        author.textContent= `by ${book.author}`;
        divBook.appendChild(author);

        const pages = document.createElement("span");
        pages.textContent= `${book.pages} pages`;
        divBook.appendChild(pages);

        const statusButton = document.createElement("button");
        statusButton.classList.add("statusButton")
        statusButton.textContent= book.read ? "Read" : "Not Read";
        statusButton.style.backgroundColor = book.read ? "#B3E6B5" : "#FF7F7F";
        divBook.appendChild(statusButton);

        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton")
        removeButton.textContent = "Remove";
        divBook.appendChild(removeButton);

        removeButton.addEventListener("click", () => {
            const bookIndex = myLibrary.findIndex(item => item.id === book.id);
            if (bookIndex !== -1) {
                myLibrary.splice(bookIndex, 1);

                divBook.remove();
            }
        })

        statusButton.addEventListener("click", () => {
            const bookIndex = myLibrary.findIndex(item => item.id === book.id);
            if (bookIndex !== -1) {
                myLibrary[bookIndex].read = !myLibrary[bookIndex].read;

                statusButton.textContent = myLibrary[bookIndex].read ? "Read" : "Not read";
                statusButton.style.backgroundColor = myLibrary[bookIndex].read ? "#B3E6B5" : "#FF7F7F";
            }
        })

        books.appendChild(divBook);
    })
}

const dialog = document.querySelector("dialog");

function showDialog() {
    const addButton = document.querySelector(".addButton");
    
    addButton.addEventListener("click", () => {
        dialog.showModal();
    })

}

showDialog()

function closeDialog(event) {
    if (!event.target.contains(dialog)) return;
    dialog.close();
}

document.addEventListener("click", closeDialog)

function addBook() {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    if (title && author && pages) {
        const newBook = new Book(title, author, pages, read);
        addBookToLibrary(newBook);
        displayBook();
        dialog.close();
        form.reset();
    } else {
        alert("Please fill out all fields")
    }

    })
}

addBook()

console.log(myLibrary)