import Star from "./../assets/images/icon-star.svg";
import FAQItem from "./FAQItem";
import { data } from "./faqData";
import { useState } from "react";

const FAQContainer = () => {
  const [clickedItems, setClickedItems] = useState(
    new Array(data.length).fill(false)
  );

  const handleItemClick = (index) => {
    const newClickedItems = [...clickedItems];
    newClickedItems.fill(false); // Reset all clicked states
    newClickedItems[index] = true; // Set the clicked state for the selected item
    setClickedItems(newClickedItems);
  };

  return (
    <main className="bg-white w-[90%] z-10 sm:max-w-[60%] shadow-lg lg:max-w-[40%] m-auto rounded-lg p-4 md:p-8">
      <div className="flex flex-row gap-4">
        <img src={Star} alt="star icon"></img>
        <h1 className="font-bold text-3xl">FAQs</h1>
      </div>
      {/* FAQs Items */}
      <ul className="flex flex-col gap-2 py-4">
        {data.map((data, index) => {
          if (index === 3) {
            return (
              <FAQItem
                q={data.q}
                a={data.a}
                key={index}
                clicked={clickedItems[index]}
                onItemClick={() => handleItemClick(index)}
              />
            );
          } else {
            return (
              <FAQItem
                q={data.q}
                a={data.a}
                key={index}
                border={true}
                clicked={clickedItems[index]}
                onItemClick={() => handleItemClick(index)}
              />
            );
          }
        })}
      </ul>
    </main>
  );
};

export default FAQContainer;
