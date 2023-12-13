import Plus from "./../assets/images/icon-plus.svg";
import Minus from "./../assets/images/icon-minus.svg";

const FAQItem = ({ q, a, border, clicked, onItemClick }) => {
  return (
    <li className={`flex flex-col gap-4 ${border ? "border-b-2 pb-4" : ""}`}>
      <div className="flex flex-row gap-2 justify-between items-center">
        <p
          onClick={onItemClick}
          className="font-bold text-lg lg:hover:text-[#B12EEC] duration-300 cursor-pointer"
        >
          {q}
        </p>
        <img
          src={clicked ? Minus : Plus}
          alt="Plus icon"
          className="cursor-pointer"
          onClick={onItemClick}
        ></img>
      </div>
      {clicked && <p className="text-sm text-gray-500">{a}</p>}
    </li>
  );
};

export default FAQItem;
