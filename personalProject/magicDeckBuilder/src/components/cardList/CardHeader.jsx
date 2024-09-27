import React from "react";

const cardHeader = ({ isNotPublic }) => {
  return isNotPublic ? (
    <>
      <thead className="hidden lg:table-header-group whitespace-nowrap bg-slate-400 w-1">
        <tr>
          <th
            className="p-4 text-left text-xs font-semibold text-gray-800"
          >
            Actions
          </th>
          <th className="p-4 text-left text-xs font-semibold text-gray-800">
            # of cards
          </th>
          <th className="p-4 text-left text-xs font-semibold text-gray-800">
            Name
          </th>
          <th
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

      <thead className="table-header-group lg:hidden whitespace-nowrap bg-slate-400 w-1">
        <tr>
          <th
            className="p-4 text-left text-xs font-semibold text-gray-800"
          >
            Actions
          </th>
          <th className="p-4 text-left text-xs font-semibold text-gray-800">
            # of cards
          </th>
          <th className="p-4 text-left text-xs font-semibold text-gray-800">
            Name
          </th>
          <th className="p-4 text-left text-xs font-semibold text-gray-800">
            Price
          </th>
        </tr>
      </thead>
      
    </>
    
  ) : (
    <>
      <thead className="hidden lg:table-header-group whitespace-nowrap bg-slate-400 w-1">
        <tr>
          <th className="p-4 text-left text-xs font-semibold text-gray-800">
            # of cards
          </th>
          <th className="p-4 text-left text-xs font-semibold text-gray-800">
            large
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

      <thead className="table-header-group lg:hidden whitespace-nowrap bg-slate-400 w-1">
        <tr>
          <th className="p-4 text-left text-xs font-semibold text-gray-800">
            # of cards
          </th>
          <th className="p-4 text-left text-xs font-semibold text-gray-800">
            Small
          </th>
          <th className="p-4 text-left text-xs font-semibold text-gray-800">
            Price
          </th>
        </tr>
      </thead>
    </>
    
  );
};

export default cardHeader;
