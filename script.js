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
        const bookCard = document.createElement("div");
        const bookContent = document.createElement('div');
        const rank = document.createElement("h1");
        const img = document.createElement("img");
        const weeks = document.createElement("p");
        const title = document.createElement("h4");
        const author = document.createElement("p");
        const description = document.createElement("p");
        const buyButton = document.createElement("input");
        

        //append to DOM
        const list = document.querySelector(".list");
        list.append(bookCard);
        bookCard.append(bookContent);
        bookContent.append(rank);
        bookContent.append(img);
        bookContent.append(weeks);
        bookContent.append(title);
        bookContent.append(author);
        bookContent.append(description);
        bookContent.append(buyButton);
        

        //set data and attributes
        bookCard.setAttribute('class', 'bookCard');
        bookContent.setAttribute('class', 'bookContent');
        rank.innerHTML = book.rank;
        rank.setAttribute('class', 'rank');
        img.setAttribute('src', book.book_image);
        img.setAttribute('class', 'book-image');
        weeks.innerHTML = book.weeks_on_list + " WEEKS ON THE LIST";
        weeks.setAttribute('class', 'weeks');
        title.innerHTML = book.title;
        title.setAttribute("class", 'title');
        author.innerHTML = "by " + book.author;
        author.setAttribute("class", "author");
        description.innerHTML = book.description;
        description.setAttribute("class", "description");
        buyButton.setAttribute("type", "button");
        buyButton.value = "BUY";
        buyButton.setAttribute("class", "buyButton");
       // buyButton.setAttribute("onclick", location.href=book.amazon_product_url);

       buyButton.addEventListener("click", function (event) {
           window.open(book.amazon_product_url, '_blank');
       });
    }
}

showBooks();