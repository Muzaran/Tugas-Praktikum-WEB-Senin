// Kode JavaScript Anda
const library = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        status: {
            own: true,
            reading: false,
            read: true
        }
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        status: {
            own: true,
            reading: false,
            read: true
        }
    },
    {
        title: "1984",
        author: "George Orwell",
        status: {
            own: true,
            reading: false,
            read: true
        }
    }
];

const firstBook = library[0].title;

const libraryJSON = JSON.stringify(library);
