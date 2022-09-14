import { Category } from "@chec/commerce.js/types/category";
import { Listbox } from "@headlessui/react";
import React, { FC, Fragment, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import chevronDownIcon from "../../../assets/chevron-down.svg";
import commerce from "../../../lib/commerce";

const CategoryFilterSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
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
  >(() => {
    const categoryName = searchParams.get("category");
    if (categoryName) {
      return categories?.find((category) => category.name === categoryName);
    }
    return undefined;
  });

  const handleCategoryClick = (category: Category) => {
    if (category.id === selectedCategory?.id) {
      searchParams.delete("category");
      setSearchParams(searchParams);

      return;
    }

    searchParams.set("category", category.name);
    setSearchParams(searchParams);

    navigate(0);
  };

  return (
    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
      <div className="relative">
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
        <Listbox.Options className="absolute right-0 left-0 z-10 px-3 py-4 bg-white shadow-md cursor-pointer rounded-[4px]">
          {categories?.map((category) => (
            <Listbox.Option key={category.id} value={category} as={Fragment}>
              <li
                className="ui-selected:font-bold"
                onClick={() => handleCategoryClick(category)}>
                {category.name}
              </li>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default CategoryFilterSelect;
