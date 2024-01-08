const library = [
  {
    title: "Jago PHP",
    author: "M. Zaky Nugraha A. R.",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Belajar JavaScript",
    author: "Yoga Pratama",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Jago Ngoding HTML",
    author: "Riza Pathur",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

function markAsRead(index) {
  library[index].status.read = !library[index].status.read;
}

function downloadLibraryJSON() {
  const libraryJSON = JSON.stringify(library, null, 2);
  const blob = new Blob([libraryJSON], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "library.json";
  link.click();
}

document.addEventListener("DOMContentLoaded", function () {
  const bookList = document.querySelectorAll("ul li");

  bookList.forEach((book, index) => {
    book.addEventListener("click", function () {
      markAsRead(index);
      updateHTML();
    });
  });
});

function updateHTML() {
  const bookList = document.querySelectorAll("ul li");

  bookList.forEach((book, index) => {
    const authorParagraph = book.querySelector("p:nth-child(2)");
    const statusParagraph = book.querySelector("p:nth-child(3)");
    authorParagraph.textContent = `Author: ${library[index].author}`;
    statusParagraph.textContent = `Status: ${
      library[index].status.read ? "Read" : "Unread"
    }`;
  });

  console.log(JSON.stringify(library, null, 2));
}
