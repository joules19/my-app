import React from "react";
import Product from "../components/Product";

const products = () => {
  return (
    <section class="relative py-10 bg-blueGray-50 overflow-hidden">
      <div class="relative z-10 container px-4 mx-auto">
        <div class="flex flex-wrap lg:items-center -m-8 align-middle justify-center">
          <Product />
        </div>
      </div>
    </section>
  );
};

export default products;
