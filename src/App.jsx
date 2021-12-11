//  components
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import Houses from "./components/Houses/Houses";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Houses />
    </div>
  );
};

export default App;
