import { ProductCard } from "../../";
import commerce from "../../../lib/commerce";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

const ProductsList = () => {
  const [searchParams] = useSearchParams();
  const { data: products } = useQuery(
    ["getLatestProducts"],
    async () => {
      const { data: productList } = await commerce.products.list({
        limit: 6,
      });
      return productList;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const filteredProducts = () => {
    if (searchParams.get("category")) {
      return (
        products &&
        products
          .filter((item) =>
            item.categories
              .map((category) => category.name)
              .includes(searchParams.get("category") || "")
          )
          .map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))
      );
    } else {
      return (
        products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      );
    }
  };
  return (
    <div className="grid place-content-center grid-cols-2 lg:grid-cols-3 gap-x-4">
      {filteredProducts()}
    </div>
  );
};

export default ProductsList;
