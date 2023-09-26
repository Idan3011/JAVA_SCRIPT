const book = {
    bookTitle: '`Thinking Fast & Slow`',
    theAuthor: 'Daniel Kahneman',
    dateOfPublish: 2013,
}

function theBook(book) {
    console.log(`The book ${book['bookTitle']} was written by ${book['theAuthor']} in the year ${book['dateOfPublish']}`)
    return theBook;
}

theBook(book)