import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";
import Loader from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="room_container">
          <h1 className="room__name">
            Jose Andres is still working in something GREAT... take a look!
          </h1>
          <Spline scene="https://prod.spline.design/lMKHypwV-wPscJiQ/scene.splinecode" />
        </div>
      )}
    </>
  );
}

export default App;
