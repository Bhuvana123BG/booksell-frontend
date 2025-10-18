import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Home />
      {/* <Login/> */}
    </div>
  );
}

export default App;
