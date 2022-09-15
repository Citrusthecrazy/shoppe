import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Product } from "@chec/commerce.js/types/product";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden group">
        <Link to={`/shop/${product.id}`}>
          <img
            src={product.image?.url || "https://via.placeholder.com/136x136"}
            alt={product.name}
            className="w-full h-[136px] lg:h-[380px] object-cover rounded-[4px]"
          />
        </Link>
        <button className="hidden lg:block absolute bottom-0 right-0 left-0 translate-y-16 bg-white bg-opacity-50 font-bold h-16 group-hover:translate-y-0 transition-transform duration-150">
          ADD TO CART
        </button>
      </div>
      <Link to={`/shop/${product.name}`}>
        <div className="mb-[6px]" />
        <h1 className="text-sm leading-[22px] lg:text-xl">{product.name}</h1>
        <div className="mb-[6px]" />
        <h1 className="text-xs text-accent leading-5 lg:text-xl lg:font-[500] ">
          {product.price.formatted_with_code}
        </h1>
      </Link>
    </div>
  );
};

export default ProductCard;
