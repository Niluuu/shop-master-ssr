import Header from "../src/components/header/header";
import ProductSection from "../src/components/mainProducts.js/productSection";

export default function IndexPage({ posts }) {
  console.log(posts);
  return (
    <div>
      <Header />
      <ProductSection />
    </div>
  );
}
