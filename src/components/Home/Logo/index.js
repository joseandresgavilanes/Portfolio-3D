/* eslint-disable no-unused-vars */
import { useRef } from "react";
import "./index.scss";
import Spline from "@splinetool/react-spline";

const Logo = () => {
  const bgRef = useRef();

  return (
    <div className="logo-container" ref={bgRef}>
      <Spline scene="https://prod.spline.design/lMKHypwV-wPscJiQ/scene.splinecode" />
    </div>
  );
};

export default Logo;
