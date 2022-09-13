import { useState } from "react";
import filtersIcon from "../../assets/filters-icon.svg";
import { ProductsList, ShopFilters } from "../../components";
const Shop = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const closeFiltersModal = () => {
    setIsFiltersOpen(false);
  };
  const openFiltersModal = () => {
    setIsFiltersOpen(true);
  };

  return (
    <main className="mx-4 lg:mx-auto lg:max-w-[1248px]">
      <h1 className="text-xl leading-7">Shop</h1>
      <div className="mb-4" />
      <div
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={openFiltersModal}>
        <img src={filtersIcon} alt="filters" />
        <span>Filters</span>
      </div>
      <div className="mb-4" />
      <ProductsList />
      <div className="mb-14" />
      <ShopFilters isOpen={isFiltersOpen} close={closeFiltersModal} />
    </main>
  );
};

export default Shop;
