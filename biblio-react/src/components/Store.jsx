import React, { useState, useEffect } from "react";
import booksData from "../data/books";

function Store() {
  const [books, setBooks] = useState(booksData);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let sortedBooks = [...books];
    if (filter === "atoz") {
      sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === "price") {
      sortedBooks.sort((a, b) => a.price - b.price);
    } else if (filter === "ratings") {
      sortedBooks.sort((a, b) => b.ratings - a.ratings);
    }
    setBooks(sortedBooks);
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleHeartIconMouseEnter = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].isHeartHovered = true;
    setBooks(updatedBooks);
  };

  const handleHeartIconMouseLeave = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].isHeartHovered = false;
    setBooks(updatedBooks);
  };

  const handleBagIconMouseEnter = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].isBagHovered = true;
    setBooks(updatedBooks);
  };

  const handleBagIconMouseLeave = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].isBagHovered = false;
    setBooks(updatedBooks);
  };

  return (
    <>
      <section id="shop">
        <h2 className="text-2xl text-gray-400 ml-20 mt-24 mb-10 book-heading">
          Books
        </h2>
        <div className="flex justify-end">
          <select
            className="filter w-40 py-2 px-3 mr-5 text-base rounded-xl bg-gray-900 text-gray-400 mx-20"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="">Select</option>
            <option value="atoz">A-Z</option>
            <option value="price">Price</option>
            <option value="ratings">Ratings</option>
          </select>
        </div>
        <div
          id="books"
          className="mx-20 p-12 rounded-3xl bg-gray-950 grid grid-cols-3 gap-12"
        >
          {books.map((book, index) => (
            <div className="card-main" key={book.name}>
              <div className="card p-6 rounded-2xl bg-mate-black flex flex-col justify-center items-center">
                <div className="card-img mb-5">
                  <img src={book.imgUrl} alt={book.name} />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4 className="text-lg mb-2 text-center">{book.name}</h4>
                  <h5 className="text-base text-gray-600">
                    &#8377; {book.price}
                  </h5>
                  <p className="text-sm text-gray-400 mt-2">
                    Ratings: {book.ratings}
                  </p>
                </div>
              </div>
              <div className="card-option flex justify-between">
                <span
                  className="heart-icon"
                  onMouseEnter={() => handleHeartIconMouseEnter(index)}
                  onMouseLeave={() => handleHeartIconMouseLeave(index)}
                >
                  <ion-icon
                    name={book.isHeartHovered ? "heart" : "heart-outline"}
                    style={{
                      color: book.isHeartHovered ? "#DE3163" : "",
                      fontSize: book.isHeartHovered ? "20px" : "",
                      cursor: "pointer",
                    }}
                  ></ion-icon>
                </span>
                <span
                  className="bag-icon"
                  onMouseEnter={() => handleBagIconMouseEnter(index)}
                  onMouseLeave={() => handleBagIconMouseLeave(index)}
                >
                  <ion-icon
                    name={book.isBagHovered ? "bag" : "bag-outline"}
                    style={{
                      color: book.isBagHovered ? "#fff" : "",
                      fontSize: book.isBagHovered ? "20px" : "",
                      cursor: "pointer",
                    }}
                  ></ion-icon>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Store;
