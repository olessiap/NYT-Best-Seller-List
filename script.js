let showBooks = function() {
    let xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function() {

        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300) {
            let data = JSON.parse(xhr.responseText);
            data.results.books.forEach(function(book){
                let bookItem = document.createElement('li');
                bookItem.textContent = book.title;
                let app = document.querySelector("ol");
                app.appendChild(bookItem);
            });
        } else {
            console.log("response failed");
        }
    }
    xhr.open("GET", "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction?api-key=nvVA1COinjfya27rFtr6XudTPJ8Oz9fq");
    xhr.send();
}

showBooks();