import "./index.css";
import Menu from "../../components/menu/menu";
import Heroe1 from "../../components/heroes/heroe1";
import Gallery from "../../components/gallery/gallery";
import Footer from "../../components/footer/footer";

export default function Index() {
  return (
    <div>
      <Menu />
      <Heroe1 />
      <Gallery />
      <Footer />
    </div>
  );
}
