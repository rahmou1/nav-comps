import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState();

  const expandClickHandler = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex();
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex font-extrabold justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => {
            expandClickHandler(index);
          }}
        >
          {item.label}
          {icon}
        </div>
        <div className="font-semibold">
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="border-x border-t rounded">{renderedItems}</div>
    </div>
  );
};
export default Accordion;
