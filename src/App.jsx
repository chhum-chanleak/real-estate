//  components
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import Info from "./components/Info/Info";
import Homepage from "./pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Rentals from "./pages/Rentals/Rentals";
import Houses from "./pages/Houses/Houses";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
    </div>
  );
};

export default App;
