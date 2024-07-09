// components

import { Navbar, Footer } from "@/components";
import DeforestationComponents from "./deforestatioon";
import ReforestationComponent from "./ReforestationComponent";
import SplineModel1 from "./splinemodel1";
import SplineModel2 from "./splinemodel2";
import QuizPage from "./quiz";
import IntroductionPage from "./intro";
import App from "./App";
export default function Campaign() {
  return (
    <>
      <Navbar />
      <IntroductionPage />
      <DeforestationComponents />
      <ReforestationComponent />
      <SplineModel1 />
      <SplineModel2 />
      <App />
      <QuizPage />
      <Footer />
    </>
  );
}
