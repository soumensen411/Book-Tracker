import React from "react";

const Infobar = ({ total, wishlist, completed, reading }) => {
  return (
    <div className="mt-5 mb-5">
      <button className="mr-2 btn  bg-transparent border border-neutral-500">
        All <span className="text-sm opacity-50">{total}</span>
      </button>
      <button className="mr-2 btn  bg-transparent border border-neutral-500">
        Wishlist <span className="text-sm opacity-50">{wishlist}</span>
      </button>
      <button className="mr-2 btn  bg-transparent border border-neutral-500">
        Reading <span className="text-sm opacity-50">{reading}</span>
      </button>
      <button className="mr-2 btn  bg-transparent border border-neutral-500">
        Finished <span className="text-sm opacity-50">{completed}</span>
      </button>
    </div>
  );
};

export default Infobar;
