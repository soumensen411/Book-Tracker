import React, { useState } from "react";

const Input = ({ onAdd }) => {
  const [newbook, setNewbook] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit() {
    if (newbook.trim() === "" || author.trim() === "") return;
    onAdd({ newbook, author, status });
    setNewbook("");
    setAuthor("");
    setStatus("");
  }
  return (
    <div className="w-full flex justify-center">
      <div className="bg-neutral-700 p-5 md:p-10 w-full md:w-3/4 lg:w-1/2 rounded border border-neutral-200">
        <p className="text-lg font-bold">Add a new book</p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Title</legend>
            <input
              value={newbook}
              onChange={(e) => setNewbook(e.target.value)}
              type="text"
              className="input  bg-transparent"
              placeholder="Book Tilte.."
            />
          </fieldset>

          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Author</legend>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              className="input bg-transparent"
              placeholder="Author Name.."
            />
          </fieldset>
        </div>
        <label className="text-sm mb-2 mt-5 text-gray-300">Status</label>
        <div className="w-full mt-2 flex flex-col sm:flex-row items-center gap-2">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            name=""
            id=""
            className="select select-bordered  w-full bg-neutral-700 "
          >
            <option value="want to read">Want to read</option>
            <option value="reading">Currently Reading</option>
            <option value="completed">Completed</option>
          </select>
          <button
            onClick={() => handleSubmit()}
            className="btn w-full sm:w-auto bg-transparent border border-neutral-500"
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
