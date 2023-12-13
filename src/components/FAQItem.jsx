import Plus from "./../assets/images/icon-plus.svg";
import Minus from "./../assets/images/icon-minus.svg";
import { useState } from "react";

const FAQItem = ({ q, a, border, clicked, onItemClick }) => {
  const [iconClicked, setIconClicked] = useState(false);

  const handleItemClick = () => {
    if (!iconClicked) {
      onItemClick();
    }
    setIconClicked(false);
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    setIconClicked(true);
    onItemClick();
  };

  return (
    <li className={`flex flex-col gap-4 ${border ? "border-b-2 pb-4" : ""}`}>
      <div className="flex flex-row gap-2 justify-between items-center">
        <p
          onClick={handleItemClick}
          className="font-bold text-lg lg:hover:text-[#B12EEC] duration-300 cursor-pointer"
        >
          {q}
        </p>
        <img
          src={clicked ? Minus : Plus}
          alt={clicked ? "Minus icon" : "Plus icon"}
          className="cursor-pointer"
          onClick={handleIconClick}
        ></img>
      </div>
      {clicked && <p className="text-sm text-gray-500">{a}</p>}
    </li>
  );
};

export default FAQItem;
