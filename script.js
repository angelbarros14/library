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
        title.textContent= `"${book.title}"`;
        divBook.appendChild(title);

        const author = document.createElement("span");
        author.textContent= `by ${book.author}`;
        divBook.appendChild(author);

        const pages = document.createElement("span");
        pages.textContent= `${book.pages} pages`;
        divBook.appendChild(pages);

        const statusButton = document.createElement("button");
        statusButton.textContent= `${book.read ? "Read" : "Not Read"}`;
        statusButton.style.backgroundColor = `${book.read ? "#B3E6B5" : "#FF7F7F"}`;
        divBook.appendChild(statusButton);

        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton")
        removeButton.textContent = "Remove";
        divBook.appendChild(removeButton);

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
    const form = document.querySelector("form")
    const close = document.querySelector("#close");

    form.addEventListener("submit", () => {
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("#read").checked;

    title && author && pages ? addBookToLibrary(new Book(title, author, pages, read)) : alert("Please fill out all fields");
    displayBook()
    form.reset();
    })
}

addBook()


console.log(myLibrary)