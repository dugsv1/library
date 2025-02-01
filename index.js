
const myLibrary = [];
function Book(name){
    this.name = name;
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

function updateList(book){
    let li = document.createElement("li");
    li.classList.add('list');

    let bookNameSpan = document.createElement('span');
    bookNameSpan.innerText = book.name;
    li.appendChild(bookNameSpan)
    let readToggleButton = createReadButton();
    let delButton = createaDelButton();
    li.appendChild(readToggleButton)
    li.appendChild(delButton)
    ul.appendChild(li)
}

function createReadButton(){
    let readToggleButton = document.createElement("button");
    readToggleButton.innerText = "";
    readToggleButton.classList.add("read", "history");
    return readToggleButton
}
function createaDelButton(){
    let delButton = document.createElement("button");
    delButton.innerText = 'Delete';
    delButton.classList.add("delete-button");
    return delButton
}

const ul = document.querySelector('ul')
const submit = document.querySelector('.submit-book')
const input = document.querySelector('#name')

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let bookName = input.value;
    newBook = new Book(bookName);
    addBookToLibrary(newBook);
    updateList(newBook);
    input.value = "";
    input.focus();
})

ul.addEventListener('click', function (e) {
    console.log(e.target)
    if (e.target.classList.contains('delete-button')) {
        let closest_li = e.target.closest('li');
        if (closest_li){ closest_li.remove();}
    } else if (e.target.classList.contains('history')) {
        e.target.classList.toggle('not-read')
    }

})

console.dir(myLibrary)