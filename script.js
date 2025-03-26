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

function displayBook() {
    const books = document.getElementById("books");

    myLibrary.forEach(book => {
        const divBook = document.createElement("div");
        divBook.classList.add("newBook");

        const title = document.createElement("span");
        title.textContent= `${book.title}`;
        divBook.appendChild(title);

        const author = document.createElement("span");
        author.textContent= `${book.author}`;
        divBook.appendChild(author);

        const pages = document.createElement("span");
        pages.textContent= `${book.pages} pages`;
        divBook.appendChild(pages);

        const statusButton = document.createElement("button");
        statusButton.textContent= `${book.read ? "Read" : "Not Read"}`;
        statusButton.style.backgroundColor = `${book.read ? "#B3E6B5" : "#FF7F7F"}`;
        divBook.appendChild(statusButton);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        divBook.appendChild(removeButton);

        books.appendChild(divBook);
    })
}

displayBook()

function inputBook() {
    const dialog = document.querySelector("dialog");
    const addButton = document.querySelector(".addButton");

    addButton.addEventListener("click", () => {
        dialog.showModal();
    })

}

inputBook()

