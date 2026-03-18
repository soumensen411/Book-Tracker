import React from "react";

const Infobar = ({ total, wishlist, completed, reading, filter, onFilter }) => {
  return (
    <div className="mt-5 mb-5 flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onFilter("all")}
        className={`text-sm  btn bg-transparent border border-neutral-500 ${filter === "all" ? "bg-white text-black" : "bg-transparent"}`}
      >
        All <span className="text-sm opacity-50">{total}</span>
      </button>

      <button
        onClick={() => onFilter("wishlist")}
        className={`text-sm  btn bg-transparent border border-neutral-500 ${filter === "wishlist" ? "bg-white text-black" : "bg-transparent"}`}
      >
        Wishlist <span className="text-sm opacity-50">{wishlist}</span>
      </button>
      <button
        onClick={() => onFilter("reading")}
        className={`text-sm  btn bg-transparent border border-neutral-500 ${filter === "reading" ? "bg-white text-black" : "bg-transparent"}`}
      >
        Reading <span className="text-sm opacity-50">{reading}</span>
      </button>
      <button
        onClick={() => onFilter("completed")}
        className={`text-sm  btn bg-transparent border border-neutral-500 ${filter === "completed" ? "bg-white text-black" : "bg-transparent"}`}
      >
        Finished <span className="text-sm opacity-50">{completed}</span>
      </button>
    </div>
  );
};

export default Infobar;
