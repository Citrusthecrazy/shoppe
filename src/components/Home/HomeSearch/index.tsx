import magnifier from "../../../assets/magnifier.svg";
const HomeSearch = () => {
  return (
    <div className="w-full lg:hidden flex flex-row items-baseline gap-2 bg-lightGray rounded-[4px] overflow-hidden pl-[10px] py-[10px]">
      <img src={magnifier} />
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default HomeSearch;
