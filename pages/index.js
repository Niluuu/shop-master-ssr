import Header from "../src/components/header/header";
import ProductSection from "../src/components/indexPage/mainProducts/index.js";
import History from "../src/components/indexPage/history";
import MainSection from "../src/components/indexPage/mainSection/index.js";
import CategorySection from "../src/components/indexPage/category/categorySection";
import Footer from "../src/components/footer";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <ProductSection />
      <History />
      <MainSection />
      <CategorySection />
      <Footer />
    </div>
  );
}
