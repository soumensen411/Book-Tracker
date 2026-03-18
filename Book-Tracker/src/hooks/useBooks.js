import { useState, useEffect } from "react";
const useBooks = () => {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [];
  });
  //   { id: 1, name: "Atomic Habit", author: "James Clear", status: "completed" },
  //   { id: 2, name: "The Millionaire Fastlane", author: "Mj Demarco", status: "pending" },
  //   { id: 3, name: "How to win friends and influence people", author: "Don't know", status: "want to read" },

  function onAdd({ newbook, author, status }) {
    const newBook = {
      id: Date.now(),
      name: newbook,
      author: author,
      status: status || "want to read",
    };
    setBooks((prev) => [...prev, newBook]);
  }

  function handleDelete(id) {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return { books, handleDelete, onAdd };
};

export default useBooks;
