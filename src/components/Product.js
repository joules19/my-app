import { React, useNavigate } from "react";

const Product = () => {
  // const gotoCheckout = () => {
  //   const navigate = useNavigate();
  //   navigate();
  // };
  return (
    <div class="w-full md:w-1/2 p-8  ">
      <div class="md:max-w-md mx-auto overflow-hidden rounded-3xl shadow-8xl shadow-md">
        <div class="p-9">
          <span class="mb-7 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px">
            <small>Music </small>
            <strong>X</strong> &nbsp; Pro
          </span>
          <ul>
            <li class="mb-4 flex items-center">
              <svg
                class="mr-2"
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                  stroke="#4F46E5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p class="font-semibold leading-normal">3 Devices</p>
            </li>
            <li class="mb-4 flex items-center">
              <svg
                class="mr-2"
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                  stroke="#4F46E5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p class="font-semibold leading-normal">
                Unlimited Video Streaming
              </p>
            </li>
            <li class="mb-4 flex items-center">
              <svg
                class="mr-2"
                width="20"
                height="20"
                viewbox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                  stroke="#4F46E5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p class="font-semibold leading-normal">Smart Playlists</p>
            </li>
          </ul>
        </div>
        <div class="p-7 bg-white">
          <div class="flex flex-wrap -m-8">
            <div class="w-full sm:w-1/2 p-8">
              <span class="mb-2 inline-block text-sm text-gray-500 font-semibold uppercase tracking-px">
                Basic Package
              </span>
              <p class="text-gray-900 font-semibold leading-normal">
                Best for couples &amp; Small Family
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-8">
              <div class="sm:max-w-max ml-auto">
                <p class="font-bold">
                  <span class="text-5xl leading-tight tracking-px-n">
                    ₦4900
                  </span>
                  <span class="text-lg text-gray-500 leading-snug tracking-px-n">
                    /mo
                  </span>
                </p>
                <p class="font-medium text-gray-500 leading-relaxed">
                  Billed monthly
                </p>
              </div>
            </div>
          </div>
          <div class="mt-9">
            <button
              class="py-4 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
              type="button"
            >
              Make Paymnent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
