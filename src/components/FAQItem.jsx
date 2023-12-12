import Plus from "./../assets/images/icon-plus.svg";
import Minus from "./../assets/images/icon-minus.svg";
import { useState } from "react";

const FAQItem = ({ q, a, border }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <li className={`flex flex-col gap-4 ${border ? "border-b-2 pb-4" : ""}`}>
      <div className="flex flex-row gap-2 justify-between items-center">
        <p
          onClick={() => setClicked(!clicked)}
          className="font-bold text-lg lg:hover:text-[#B12EEC] duration-300 cursor-pointer"
        >
          {q}
        </p>
        <img
          src={clicked ? Minus : Plus}
          alt="Plus icon"
          className="cursor-pointer"
          onClick={() => setClicked(!clicked)}
        ></img>
      </div>
      {clicked && <p className="text-sm text-gray-500">{a}</p>}
    </li>
  );
};

export default FAQItem;
