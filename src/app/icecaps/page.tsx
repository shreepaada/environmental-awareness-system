import { Navbar, Footer } from "@/components";
import IceCaps from "./icecaps";
import SplineModel3 from "./splinemodel3";
import SplineModel4 from "./splinemodel4";
import IceCapQuizPage from "./quiz";
import MeltingIceCapss from "./introo";
import App from "./App";
export default function Campaign() {
  return (
    <>
      <Navbar />
      <MeltingIceCapss />
      <IceCaps />
      <SplineModel3 />
      <SplineModel4 />
      <App />
      <IceCapQuizPage />
      <Footer />
    </>
  );
}
