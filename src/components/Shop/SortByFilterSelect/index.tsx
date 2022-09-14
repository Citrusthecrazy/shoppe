import { Listbox } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import chevronDownIcon from "../../../assets/chevron-down.svg";
const SORT_OPTIONS = [
  {
    label: "Featured",
    value: "featured",
  },
  {
    label: "Price: Low to High",
    value: "price-asc",
  },
  {
    label: "Price: High to Low",
    value: "price-desc",
  },
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Oldest",
    value: "oldest",
  },
];

const SortByFilterSelect = () => {
  const [selectedOption, setSelectedOption] =
    useState<typeof SORT_OPTIONS[0]>();
  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <Listbox.Button className="border border-lightGray px-3 py-4 flex flex-row justify-between items-center w-full rounded-[4px]">
        <span className="text-sm">
          {selectedOption ? selectedOption.label : "Sort by"}
        </span>
        <img
          src={chevronDownIcon}
          alt="chevron down"
          className="ui-open:rotate-180 transition-transform duration-150"
        />
      </Listbox.Button>
      <Listbox.Options className="px-3 py-4 bg-white shadow-md cursor-pointer">
        {SORT_OPTIONS?.map((option) => (
          <Listbox.Option key={option.value} value={option} as={Fragment}>
            <li className="ui-selected:font-bold">{option.label}</li>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default SortByFilterSelect;
