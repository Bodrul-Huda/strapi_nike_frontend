import { useEffect, useState } from "react";
import Layout from "../../components/layout";

const Checkout = ({ cart }) => {
  console.log(cart);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let myTotal = 0;
    console.log(cart);
    for (let index = 0; index < cart.length; index++) {
      const clement = cart[index];
      myTotal = myTotal + cart[index][1];
    }
    setSubtotal(myTotal);
  }, []);
  return (
    <Layout title="Checkout">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Checkout
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="text-center font-semibold text-xl">Your cart details</p>
      {cart.map((item, i) => (
        <form key={i}>
          <div className="container bg-gray-100 mx-auto w-2/4 rounded-md shadow-md">
            <div className="flex flex-wrap items-center justify-center md:justify-between w-full px-5">
              <div className="flex flex-wrap justify-center items-center md:flex-row gap-5">
                <div
                  className={`bg-gradient-to-b  relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
                >
                  <div>
                    {" "}
                    {/* <img
                      src={`http://127.0.0.1:1337${item.attributes.image.data.attributes.url}`}
                      alt="Product"
                      className="w-36 h-auto object-fill lg:w-28"
                    /> */}
                  </div>
                </div>
                <div className="grid items-center gap-4">
                  <div className="grid items-center leading-none">
                    <h1 className="font-medium text-base md:text-lg capitalize text-slate-900 ">
                      {item.name}
                    </h1>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm">Price: {item.price}</p>
                      </div>
                      <div>
                        <p className="text-sm">Qty: </p>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-lg my-2 lg:text-base text-slate-900 font-medium">
                        Total:
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid items-center gap-5">
                <div className="grid items-center justify-center"></div>
              </div>
            </div>
          </div>
          <div className="p-2 my-4 w-full">
            <button className=" disabled:bg-indigo-300 flex mx-auto text-white shadow-md shadow-indigo-300 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Place Order
            </button>
          </div>
        </form>
      ))}
    </Layout>
  );
};

export default Checkout;
