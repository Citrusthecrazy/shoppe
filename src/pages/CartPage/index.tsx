import React from "react";
import { useQuery } from "react-query";
import { CartItem } from "../../components";
import commerce from "../../lib/commerce";

const CartPage = () => {
  const {
    data: cart,
    isLoading,
    isFetching,
    isRefetching,
  } = useQuery(
    ["getCartItems"],
    async () => {
      return await commerce.cart.retrieve();
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    }
  );

  if (isLoading || isRefetching || isFetching)
    return (
      <div className="grid place-content-center">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent" />
      </div>
    );
  return (
    <main className="mx-4 lg:mx-auto lg:max-w-[1248px] lg:grid lg:grid-cols-2 lg:gap-20">
      <h1 className="leading-7 col-span-2 lg:text-[33px] lg:text-center">
        Shopping Cart
      </h1>
      <div className="lg:mb-4">
        <div className="mb-4" />
        {cart?.line_items.map((item) => (
          <React.Fragment key={item.id}>
            <CartItem {...item} />
            <div className="mb-4" />
          </React.Fragment>
        ))}
        <div className="mb-4" />
        <button className="lg:hidden w-full text-xl border border-black rounded-[4px] px-[.75em] py-[.25em] disabled:cursor-not-allowed disabled:text-darkGray disabled:border-darkGray">
          Checkout
        </button>
        <div className="mb-9" />
      </div>
      <div className="hidden lg:block text-2xl">
        Total:{" "}
        <span className="font-bold">
          {cart?.subtotal.formatted_with_symbol}
        </span>
        <div className="mb-4" />
        <button className="lg:block w-full text-xl border border-black rounded-[4px] px-[.75em] py-[.25em] disabled:cursor-not-allowed disabled:text-darkGray disabled:border-darkGray">
          Checkout
        </button>
      </div>
    </main>
  );
};

export default CartPage;
