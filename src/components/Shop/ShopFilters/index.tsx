import { Category } from "@chec/commerce.js/types/category";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import { SortByFilterSelect } from "../..";
import commerce from "../../../lib/commerce";
import CategoryFilterSelect from "../CategoryFilterSelect";
type ShopFiltersProps = {
  isOpen: boolean;
  close: () => void;
};

const ShopFilters: FC<ShopFiltersProps> = ({ isOpen, close }) => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 bg-white w-56 p-4 transition-transform duration-500 ${
        isOpen ? "translate-x-0 shadow-xl" : "-translate-x-56"
      }`}>
      <div className="flex flex-row justify-end">
        <button
          className="w-8 h-8 flex flex-row justify-center items-center rounded-full text-accent"
          onClick={close}>
          Close
        </button>
      </div>

      <div className="mb-4" />

      <CategoryFilterSelect />

      <div className="mb-4" />

      <SortByFilterSelect />
    </div>
  );
};

export default ShopFilters;
