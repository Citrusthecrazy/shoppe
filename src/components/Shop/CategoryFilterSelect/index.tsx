import { Category } from "@chec/commerce.js/types/category";
import { Listbox } from "@headlessui/react";
import React, { FC, Fragment, useState } from "react";
import { useQuery } from "react-query";
import chevronDownIcon from "../../../assets/chevron-down.svg";
import commerce from "../../../lib/commerce";

const CategoryFilterSelect = () => {
  const { data: categories } = useQuery(
    ["getCategories"],
    async () => {
      const { data: categoryList } = await commerce.categories.list();
      return categoryList;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(categories?.[0]);
  return (
    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
      <Listbox.Button className="border border-lightGray px-3 py-4 flex flex-row justify-between items-center w-full rounded-[4px]">
        <span className="text-sm">
          {selectedCategory ? selectedCategory.name : "Category"}
        </span>
        <img
          src={chevronDownIcon}
          alt="chevron down"
          className="ui-open:rotate-180 transition-transform duration-150"
        />
      </Listbox.Button>
      <Listbox.Options className="px-3 py-4 bg-white shadow-md cursor-pointer">
        {categories?.map((category) => (
          <Listbox.Option key={category.id} value={category} as={Fragment}>
            <li className="ui-selected:font-bold">{category.name}</li>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default CategoryFilterSelect;
