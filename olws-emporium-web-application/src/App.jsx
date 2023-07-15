import Navbar from "./components/Navbar";
import GetStarted from "./components/GetStarted";
import Categories from "./components/Categories";
import About from "./components/About";
import DownloadNow from "./components/DonwloadNow";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <GetStarted/>
      <Categories/>
      <About/>
      <DownloadNow/>
      <Footer/>
    </div>
  );
}

export default App;
