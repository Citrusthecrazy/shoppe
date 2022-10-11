import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { CartItem } from "../../components";
import commerce from "../../lib/commerce";
import { Dialog, Transition } from "@headlessui/react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <button
          onClick={() => setIsModalOpen(true)}
          className="lg:block w-full text-xl border border-black rounded-[4px] px-[.75em] py-[.25em] disabled:cursor-not-allowed disabled:text-darkGray disabled:border-darkGray hover:bg-black hover:text-white transition-colors duration-150">
          Checkout
        </button>
      </div>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900">
                    Thank you for using my website!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This website is a mock e-commerce website. It is not
                      connected to any payment gateway. If you wish to check out
                      some of my other projects, please visit my{" "}
                      <a
                        href="https://github.com/Citrusthecrazy?tab=repositories"
                        className="text-accent text-bold">
                        GitHub
                      </a>
                      !
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      onClick={() => setIsModalOpen(false)}>
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
};

export default CartPage;
