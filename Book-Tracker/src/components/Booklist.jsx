import React from "react";

const Booklist = ({ books, onDel, onStatus }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <ul className="list bg-base-100 rounded-box  shadow-md ">
          {books.map((book, index) => (
            <li
              key={book.id}
              className="list-row flex flex-col sm:flex-row gap-4 p-3 mt-2 border border-neutral-500 items-center"
            >
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                {`${index<9 ? `0${index + 1}` : index+1}`}

              </div>
              <div>
                <img
                  className="size-15 rounded-box"
                  src="https://as2.ftcdn.net/v2/jpg/05/97/47/95/1000_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg"
                />
              </div>
              <div className="list-col-grow flex-1 text-center sm:text-left">
                <div className="text-lg font-bold">{book.name}</div>
                <div className="text-xs uppercase font-semibold opacity-50">
                  {book.author}
                </div>

                <span
                  className={`badge text-xs font-semibold px-2 py-1 rounded-full ${
                    book.status === "want to read"
                      ? "bg-blue-100 text-blue-700"
                      : book.status === "reading"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                  }`}
                >
                  {book.status === "want to read"
                    ? "Wishlist"
                    : book.status === "reading"
                      ? "Reading"
                      : "Completed"}
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => onStatus(book.id)}
                  className="btn bg-transparent border border-neutral-500"
                >
                  {book.status === "want to read" && "Start Reading"}
                  {book.status === "reading" && "Mark Completed"}
                  {book.status === "completed" && "Re-Read"}
                </button>
                <button
                  onClick={() => onDel(book.id)}
                  className="font-thin  btn btn-square btn-ghost items-center border border-neutral-500"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Booklist;
