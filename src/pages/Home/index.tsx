import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { Hero, HomeCategories, HomeSearch } from "../../components";
import { LatestProducts } from "../../widgets";

const HomePage = () => {
  const isFetchingProducts = useIsFetching(["getLatestProducts"]);
  const isFetchingCategories = useIsFetching(["getCategories"]);

  return (
    <main className="mx-4 lg:mx-auto lg:max-w-[1248px]">
      <HomeSearch />
      <Hero />
      <div className="mb-4" />
      {isFetchingProducts !== 0 || isFetchingCategories !== 0 ? (
        <div className="grid place-content-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent" />
        </div>
      ) : (
        <>
          <HomeCategories />
          <div className="mb-4" />
          <div className="flex flex-row items-center justify-between">
            <h1 className="leading-7 lg:text-[33px] lg:leading-[43px] lg:font-[500]">
              Shop The Latest
            </h1>
            <Link to="/shop" className="text-accent text-xs lg:text-xl">
              View All
            </Link>
          </div>
          <div className="mb-3" />
          <LatestProducts />
        </>
      )}
    </main>
  );
};

export default HomePage;
