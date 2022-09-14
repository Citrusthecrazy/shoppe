import { Listbox } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import chevronDownIcon from "../../../assets/chevron-down.svg";
const SORT_OPTIONS = [
  {
    label: "Ascending",
    value: "asc",
  },
  {
    label: "Descending",
    value: "desc",
  },
];

const SortByFilterSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<typeof SORT_OPTIONS[0]>(
    () => {
      const sortValue = searchParams.get("sortBy");
      if (sortValue) {
        return (
          SORT_OPTIONS.find((option) => option.value === sortValue) ||
          SORT_OPTIONS[0]
        );
      }
      return SORT_OPTIONS[0];
    }
  );

  const handleOptionClick = (option: string) => {
    searchParams.set("sortBy", option);
    setSearchParams(searchParams);
    navigate(0);
  };
  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <div className="relative">
        <Listbox.Button className="border border-lightGray px-3 py-4 flex flex-row justify-between items-center w-full rounded-[4px]">
          <span className="text-sm">
            {selectedOption ? selectedOption.label : "Sort direction"}
          </span>
          <img
            src={chevronDownIcon}
            alt="chevron down"
            className="ui-open:rotate-180 transition-transform duration-150"
          />
        </Listbox.Button>
        <Listbox.Options className="absolute right-0 left-0 px-3 py-4 bg-white shadow-md cursor-pointer rounded-[4px]">
          {SORT_OPTIONS?.map((option) => (
            <Listbox.Option key={option.value} value={option} as={Fragment}>
              <li
                className="ui-selected:font-bold"
                onClick={() => handleOptionClick(option.value)}>
                {option.label}
              </li>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default SortByFilterSelect;
