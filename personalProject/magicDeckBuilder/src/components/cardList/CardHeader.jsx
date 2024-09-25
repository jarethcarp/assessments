import React from "react";
import { useState } from "react";

const cardHeader = ({ isNotPublic, filter }) => {
  const [testVar, setTest] = useState("Not working")
  return isNotPublic ? (
    <thead className="whitespace-nowrap bg-slate-400 w-1">
      <tr>
        <th
          // onClick={filter(0)}
          className="p-4 text-left text-xs font-semibold text-gray-800"
        >
          Actions
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          # of cards
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          {/* <div onClick={console.log("Test")}> */}
            <button onClick={console.log("Test")}>{testVar}</button>
          {/* </div> */}

        </th>
        <th
          // onClick={filter(2)}
          className="p-4 text-left text-xs font-semibold text-gray-800"
        >
          Card Type
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Mana Cost
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Price
        </th>
      </tr>
    </thead>
  ) : (
    <thead className="whitespace-nowrap bg-slate-400 w-1">
      <tr>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          # of cards
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Name
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Card Type
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Mana Cost
        </th>
        <th className="p-4 text-left text-xs font-semibold text-gray-800">
          Price
        </th>
      </tr>
    </thead>
  );
};

export default cardHeader;
