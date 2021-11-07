const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");

const form = document.querySelector("form");
form.addEventListener("submit", addBook);

function addBook(event) {

    // Title input value
    const title = titleInput.value;
    // Author input value
    const author = authorInput.value;
    // Isbn input value
    const isbn = isbnInput.value;

    const tbody = document.querySelector("tbody");

    // Create and append tr element
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    // Make first td element (title)
    const td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.innerHTML = title;

    // Make second td element (author)
    const td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.innerHTML = author;

    // Make third td element (isbn)
    const td3 = document.createElement("td");
    tr.appendChild(td3);
    td3.innerHTML = isbn;

    // Create link element
    const alink = document.createElement('a');
    // Create text node
    const linkText = document.createTextNode("x");
    // Add text to link
    alink.appendChild(linkText);
    // Create link reference
    alink.href = "#";

    // Make fourth td element (x link)
    const td4 = document.createElement("td");
    tr.appendChild(td4);
    td4.appendChild(alink);

    // Clear input value
    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";

    // Form submit event control
    event.preventDefault();
}
