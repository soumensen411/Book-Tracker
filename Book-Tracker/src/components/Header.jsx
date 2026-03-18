import React from "react";

const Header = ({ total, wishlist, completed, reading }) => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold"> My Book Tracker</h1>
      <p className="text-lg mt-2 text-gray-500">
        {" "}
        Track what you read, want to read, and finished
      </p>
      <div className="flex gap-5 mt-10">
        <div>
          <h1 className="font-bold font-xl opacity-50">Total Books</h1>
          <span className="text-2xl font-bold opacity-50">{total}</span>
        </div>
        <div>
          <h1 className="font-bold font-xl opacity-50">Wishlist</h1>
          <span className="text-blue-700 text-2xl font-bold opacity-50">
            {wishlist}
          </span>
        </div>
        <div>
          <h1 className="font-bold font-xl opacity-50">Reading</h1>
          <span className="text-red-700 text-2xl font-bold opacity-50">
            {reading}
          </span>
        </div>
        <div>
          <h1 className="font-bold font-xl opacity-50">Completed</h1>
          <span className="text-green-700 text-2xl font-bold opacity-50">
            {completed}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
