import "./App.css";
import HomePage from "./components/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
});

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
