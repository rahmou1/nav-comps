import { useState } from "react";
import DropDown from "../components/DropDown";

const DropDownPage = () => {
  const [selection, setSelection] = useState(null);

  const selectHandler = (option) => {
    setSelection(option);
  };

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  return (
    <div className="flex">
      <DropDown options={options} value={selection} onChange={selectHandler} />
    </div>
  );
};

export default DropDownPage;
