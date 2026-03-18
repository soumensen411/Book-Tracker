import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Booklist from "./components/Booklist";
import Infobar from "./components/Infobar";
import useBooks from "./hooks/useBooks";

const App = () => {
  const { books, handleDelete, onAdd, handleStatus } = useBooks();
  const [filter, setFilter] = useState("all");

  const filterebooks = books.filter((book) => {
    if (filter === "wishlist") return book.status === "want to read";
    if (filter === "reading") return book.status === "reading";
    if (filter === "completed") return book.status === "completed";
    return true;
  });
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <Header
        total={books.length}
        wishlist={books.filter((b) => b.status === "want to read").length}
        reading={books.filter((b) => b.status === "reading").length}
        completed={books.filter((b) => b.status === "completed").length}
      />
      <Input onAdd={onAdd} />
      <Infobar
        total={books.length}
        wishlist={books.filter((b) => b.status === "want to read").length}
        completed={books.filter((b) => b.status === "completed").length}
        reading={books.filter((b) => b.status === "reading").length}
        filter={filter}
        onFilter={setFilter}
      />
      <Booklist
        books={filterebooks}
        onDel={handleDelete}
        onStatus={handleStatus}
      />
    </div>
  );
};

export default App;
