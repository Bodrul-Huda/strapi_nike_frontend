import Layout from "../../components/layout";
import Hero from "../../components/hero";
import Wrapper from "../../components/wrapper";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../ulti/api";
import ProductCard from "../../components/product";

export default function Home({ products }) {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const { data } = await fetchDataFromApi("/api/products");
  //   setData(data);
  //   console.log(data);
  // };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Layout title="Home">
        <Hero />
        <Wrapper>
          {/* heading and paragaph start */}
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Cushioning for Your Miles
            </div>
            <div className="text-md md:text-xl">
              A lightweight Nike ZoomX midsole is combined with increased stack
              heights to help provide cushioning during extended stretches of
              running.
            </div>
          </div>
          {/* heading and paragaph end */}

          {/* products grid start */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            {products?.data?.map((product) => (
              <ProductCard key={product?.id} data={product} />
            ))}
          </div>
          {/* products grid end */}
        </Wrapper>
      </Layout>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: {
      products,
    },
  };
};
