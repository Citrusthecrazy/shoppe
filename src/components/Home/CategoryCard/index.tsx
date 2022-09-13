import React, { FC } from "react";
import { Category } from "@chec/commerce.js/types/category";
import { useNavigate, useSearchParams } from "react-router-dom";
type CategoryCardProps = {
  category: Category;
};

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleCategoryClick = (category: string) => {
    if (searchParams.get("category") === category) {
      searchParams.delete("category");
      navigate({ search: searchParams.toString() });
    } else {
      setSearchParams({ category });
    }
  };
  return (
    <div
      key={category.id}
      className={`grid place-content-center min-h-max text-xs leading-5 py-[10px] px-[50px] border ${
        searchParams.get("category") === category.name
          ? "border-gray-500"
          : "border-lightGray"
      } rounded-[4px] cursor-pointer select-none truncate`}
      onClick={() => handleCategoryClick(category.name)}>
      {category.name}
    </div>
  );
};

export default CategoryCard;
