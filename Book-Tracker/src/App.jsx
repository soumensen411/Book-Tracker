import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Booklist from "./components/Booklist";
import Infobar from "./components/Infobar";
import useBooks from "./hooks/useBooks";

const App = () => {
  const { books, handleDelete, onAdd } = useBooks();

  return (
    <div className="flex flex-col justify-center">
      <Header
        total={books.length}
        wishlist={books.filter((b) => b.status === "want to read").length}
        reading={books.filter((b) => b.status === "pending").length}
        completed={books.filter((b) => b.status === "completed").length}
      />
      <Input onAdd={onAdd} />
      <Infobar
        total={books.length}
        wishlist={books.filter((b) => b.status === "want to read").length}
        completed={books.filter((b) => b.status === "completed").length}
        reading={books.filter((b) => b.status === "pending").length}
      />
      <Booklist books={books} onDel={handleDelete} />
    </div>
  );
};

export default App;
