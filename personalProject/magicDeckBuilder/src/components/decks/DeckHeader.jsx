import React from "react";

const DeckHeader = ({ isNotPublic }) => {
  return isNotPublic ? (
    <>
      <thead class="hidden lg:table-header-group whitespace-nowrap bg-primary text-gray font-bold">
        <tr>
          <th class="p-4 text-left">
            Actions
          </th>
          <th class="p-4 text-left">
            Name
          </th>
          <th class="p-4 text-left">
            Colors
          </th>
          <th class="p-4 text-left">
            Format
          </th>
        </tr>
      </thead>

      <thead class="table-header-group lg:hidden whitespace-nowrap bg-primary text-gray font-bold">
        <tr>
          <th class="p-4 text-left">
            Actions
          </th>
          <th class="p-4 text-left">
            Name
          </th>
          <th class="p-4 text-left">
            Format
          </th>
        </tr>
      </thead>
    </>
  ) : (
    <>
      <thead class="hidden lg:table-header-group whitespace-nowrap bg-primary text-gray font-bold">
        <tr>
          <th class="p-4 text-left">
            Name
          </th>
          <th class="p-4 text-left">
            Colors
          </th>
          <th class="p-4 text-left">
            Format
          </th>
        </tr>
      </thead>
      <thead class="table-header-group lg:hidden whitespace-nowrap bg-primary text-gray font-bold">
        <tr>
          <th class="p-4 text-left">
            Name
          </th>
          <th class="p-4 text-left">
            Format
          </th>
        </tr>
      </thead>
    </>
  );
};

export default DeckHeader;
