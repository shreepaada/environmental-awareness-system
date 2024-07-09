// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Heero from "./heero";
import Quiz from "./Quiz";
import SplinModel from "./SplinModel";
import DeforestationInfo from "./DeforestationInfo";
import ReforestationComponent from "./ReforestationComponent";
import ModelViewer from "./ModelViewer";
import SEModelViewer from "./SEModelViewer";
export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Heero />
      <Footer />
    </>
  );
}
