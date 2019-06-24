let showBooks = function() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState !== 4) return;

        if(xhr.status >= 200 && xhr.status < 300) {
            let data = JSON.parse(xhr.responseText).results.books;
            console.log(data);
            data.forEach(book => renderBookCard(book));
        } else {
            console.log("response failed");
        }
    }

    xhr.open("GET", "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction?api-key=nvVA1COinjfya27rFtr6XudTPJ8Oz9fq");
    xhr.send();

    const renderBookCard = book => {
        //create DOM elements
        const div = document.createElement("div");
        const rank = document.createElement("h1");
        const img = document.createElement("img");
        const weeks = document.createElement("p");
        const title = document.createElement("h4");
        const author = document.createElement("p");
        const buyButton = document.createElement("button");


        //append to DOM
        const list = document.querySelector(".list");
        list.append(div);
        div.append(rank);
        div.append(img);
        div.append(weeks);
        div.append(title);
        div.append(author);
        div.append(buyButton);


        //set data and attributes
        div.setAttribute('class', 'bookCard');
        rank.innerHTML = book.rank;
        img.setAttribute('src', book.book_image);
        img.setAttribute('class', 'book-image');
        weeks.innerHTML = book.weeks_on_list + " WEEKS ON THE LIST";
        title.innerHTML = book.title;
        author.innerHTML = "by " + book.author;
        buyButton.innerHTML = "BUY"
    }
}

showBooks();