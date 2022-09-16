import { LineItem } from "@chec/commerce.js/types/line-item";
import { FC } from "react";
import { useMutation, useQueryClient } from "react-query";
import commerce from "../../../lib/commerce";

const CartItem: FC<LineItem> = (props) => {
  const queryClient = useQueryClient();
  const { mutateAsync: removeItemFromCart, isLoading: isMutating } =
    useMutation(["removeFromCart"], async () => {
      await commerce.cart.remove(props.id);
      await queryClient.invalidateQueries("getCartItems");
    });
  const handleRemoveCartItem = async () => {
    await removeItemFromCart();
  };
  return (
    <div className="flex flex-row gap-2">
      <img
        src={props.image?.url}
        alt={props.name}
        className="w-[136px] h-[136px] object-cover"
      />
      <div className="flex flex-col">
        <h1 className="text-sm leading-5">
          {props.name} x {props.quantity}
        </h1>
        <div className="mb-2" />
        <span className="text-darkGray text-sm leading-5">
          Price per item: {props.price.formatted_with_symbol}
        </span>
        <div className="mb-2" />
        <span className="text-darkGray text-sm leading-5">
          Total: {props.line_total.formatted_with_symbol}
        </span>
        <div className="flex-grow" />
        <button
          disabled={isMutating}
          className="w-fit text-sm border border-black rounded-[4px] px-[.75em] py-[.25em] disabled:cursor-not-allowed disabled:text-darkGray disabled:border-darkGray"
          onClick={handleRemoveCartItem}>
          {isMutating ? "Removing..." : "Remove"}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
