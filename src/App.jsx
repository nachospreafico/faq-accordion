import BgMobile from "./assets/images/background-pattern-mobile.svg";
import BgDesktop from "./assets/images/background-pattern-desktop.svg";
import "./App.css";
import FAQContainer from "./components/FAQContainer";

function App() {
  return (
    <div className="flex justify-center h-screen py-8 items-center relative  bg-[#F9EEFF]">
      {/* Background */}
      <div className="h-screen w-screen absolute top-0 z-10">
        <img
          src={BgMobile}
          className="w-full sm:hidden max-h-[33vh] object-cover"
          alt="background pattern"
        ></img>
        <img
          src={BgDesktop}
          className="w-full hidden sm:block max-h-[33vh] object-cover"
          alt="background pattern"
        ></img>
      </div>

      <FAQContainer />
    </div>
  );
}

export default App;
