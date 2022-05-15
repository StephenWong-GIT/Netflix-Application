import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
    {/* ctrl + spacebar will bring up dialogue, will always prompt you */}

    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
