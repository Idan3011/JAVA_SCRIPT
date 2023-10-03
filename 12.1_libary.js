const library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

    function bookToRead(array){
        let statusOk = [];
        let book = array.map(element => {
            if(element.readingStatus === true){
                return element
            }        
        });
        return book
};

console.log(bookToRead(library))
//console.log(typeof library[2].readingStatus)
