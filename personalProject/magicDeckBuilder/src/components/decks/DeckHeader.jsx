import React from "react";

const DeckHeader = ({ isNotPublic }) => {
  return isNotPublic ? (
    <>
      <thead class="hidden lg:table-header-group bg-gray-100 whitespace-nowrap bg-slate-400">
        <tr>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Actions
          </th>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Name
          </th>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Colors
          </th>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Format
          </th>
        </tr>
      </thead>

      <thead class="table-header-group lg:hidden bg-gray-100 whitespace-nowrap bg-slate-400">
        <tr>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Actions
          </th>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Name
          </th>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Format
          </th>
        </tr>
      </thead>
    </>
  ) : (
    <>
      <thead class="hidden lg:table-header-group bg-gray-100 whitespace-nowrap bg-slate-400">
        <tr>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Name
          </th>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Colors
          </th>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Format
          </th>
        </tr>
      </thead>
      <thead class="table-header-group lg:hidden bg-gray-100 whitespace-nowrap bg-slate-400">
        <tr>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Name
          </th>
          <th class="p-4 text-left text-xs font-semibold text-gray-800">
            Format
          </th>
        </tr>
      </thead>
    </>
  );
};

export default DeckHeader;
