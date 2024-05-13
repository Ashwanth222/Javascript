const books = [
    { title: 'The Catcher in the Rye', genre: 'Fiction' },
    { title: 'Sapiens', genre: 'Non-Fiction' },
    { title: 'Dune', genre: 'Science Fiction' },
    { title: 'To Kill a Mockingbird', genre: 'Fiction' },
  ];

  const group = Object.groupBy(books, (book) => book.genre);

  console.log(group);