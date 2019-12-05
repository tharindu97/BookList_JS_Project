// Book Constructor
function Book(title, author, isbn){
    this.title=title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor

function UI(){}

UI.prototype.addBookList = function(book){
    const list = document.getElementById('book-list');

    //Create tr Element
    const row = document.createElement('tr');

    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" clas="delete">X</a></td>
    `;
    list.appendChild(row);
}

//Show Alert
UI.prototype.showAlert = function(message, className){
    // Create div
    const div = document.createElement('div');

    // Add classes 
    div.className = `alert ${className}`;

    // Add text
    div.appendChild(document.createTextNode(message));

    // Get parent
    const container = document.querySelector('.container');
    
    //Get form
    const form = document.querySelector('#book-form');

    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove;
    },3000);
}

// Clear Fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listenerss

document.getElementById('book-form').addEventListener('submit', 
    function(e){

        //Get form Value
        const title = document.getElementById('title').value,
              author = document.getElementById('author').value,
              isbn = document.getElementById('isbn').value
        // Instantiate book
        const book = new Book(title, author, isbn);

        // Instantiate UI
        const ui = new UI();

        //Validate
        if(title === '' || author === '' || isbn === ''){
            // Error to list
            ui.showAlert('Please fill in all fields', 'error');
        }else{
            // Add book to list
            ui.addBookList(book);

            // Show success
            ui.showAlert('Book Added!', 'success'); 

            // Clear fields
            ui.clearFields(); 
        }
        e.preventDefault();
    }
);
