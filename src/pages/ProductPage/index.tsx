import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import commerce from "../../lib/commerce";
const ProductPage = () => {
  const { id: productId } = useParams();
  if (!productId) {
    return (
      <main className="mx-4 lg:mx-auto lg:max-w-[1248px]">
        <div className="mb-9" />
        <h1>There was an error fetching your request</h1>
        <div className="mb-4" />
        <span>
          Click{" "}
          <Link to="/" className="font-semibold text-accent">
            here{" "}
          </Link>
          to go back to home page
        </span>
      </main>
    );
  }
  const {
    data: product,
    isLoading,
    isRefetching,
    isError,
  } = useQuery(
    ["getProduct"],
    async () => {
      return await commerce.products.retrieve(productId);
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  if (isLoading || isRefetching)
    return (
      <div className="grid place-content-center">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent" />
      </div>
    );

  if (isError)
    return (
      <main className="mx-4 lg:mx-auto lg:max-w-[1248px]">
        <div className="mb-9" />
        <h1>There was an error fetching your request</h1>
        <div className="mb-4" />
        <span>
          Click{" "}
          <Link to="/" className="font-semibold text-accent">
            here{" "}
          </Link>
          to go back to home page
        </span>
      </main>
    );

  return (
    <main className="mx-4 lg:mx-auto lg:max-w-[1248px] lg:grid lg:grid-cols-2">
      <div className="mb-4 lg:hidden" />
      <img
        src={product?.image?.url}
        alt={product?.name}
        className="h-[374px] lg:h-[600px] object-cover"
      />
      <div className="">
        <div className="mb-6 lg:hidden" />
        <h1 className="text-xl leading-[26px] lg:text-[26px] lg:leading-[35px]">
          {product?.name}
        </h1>
        <div className="mb-[5px] lg:mb-6" />
        <span className="text-accent lg:text-xl lg:leading-5">
          {product?.price.formatted_with_code}
        </span>
        <div className="mb-6" />
        <p className="text-sm text-darkGray leading-5 lg:text-base lg:min-h-[200px]">
          {product?.description.replace(/<(.|\n)*?>/g, "")}
        </p>
        <div className="mb-6" />
        <button className="bg-white text-black py-[6px] w-full rounded-md border border-black uppercase hover:bg-black hover:text-white transition-colors duration-150">
          Add to cart
        </button>

        <div className="mb-6 lg:flex-grow" />
        <div className="hidden lg:flex flex-col">
          <span>
            SKU: <span className="text-darkGray">{product?.sku}</span>
          </span>
          <span>
            Categories:{" "}
            <span className="text-darkGray">
              {product?.categories.map((category) => category.name + " ")}
            </span>
          </span>
        </div>

        <div className="mb-24" />
      </div>
    </main>
  );
};

export default ProductPage;
