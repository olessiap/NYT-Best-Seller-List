let showBooks = function() {
    let xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function() {

        if(xhr.readyState !== 4) return;
        
        if(xhr.status >= 200 && xhr.status < 300) {
            let data = JSON.parse(xhr.responseText);
            let obj = data.results.books;
            obj.forEach(book => showBooks(book));
        } else {
            console.log("response failed");
        }
    }
    xhr.open("GET", "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction?api-key=nvVA1COinjfya27rFtr6XudTPJ8Oz9fq");
    xhr.send();
    const showBooks = book => {
        //create DOM elments
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const a = document.createElement('a');
        const img = document.createElement('img');

        //append elements into the DOM
        const body = document.querySelector('body');
        body.append(div);
        h4.append(a);
        div.append(h4);
        div.append(img);

        //set content and attributes
        a.innerHTML = book.title;
        a.setAttribute('href', book.amazon_product_url);
        img.setAttribute('src', book.book_image);
        div.setAttribute('class', "card");

    }
}

showBooks();