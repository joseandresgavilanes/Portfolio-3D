import React from "react";
import "../Styles/Loader.scss";

const Loader = () => {
  return (
    <>
      <div class="lego red">
        <div class="left"></div>
        <div class="right"></div>
        <div class="container-top">
          <div class="top">
            <div class="dot d-n1"></div>
            <div class="dot d-n2"></div>
            <div class="dot d-n3"></div>
            <div class="dot d-n4"></div>
          </div>
        </div>
      </div>

      <div class="lego blue">
        <div class="left"></div>
        <div class="right"></div>
        <div class="container-top">
          <div class="top">
            <div class="dot d-n1"></div>
            <div class="dot d-n2"></div>
            <div class="dot d-n3"></div>
            <div class="dot d-n4"></div>
          </div>
        </div>
      </div>

      <div class="lego yellow">
        <div class="left"></div>
        <div class="right"></div>
        <div class="container-top">
          <div class="top">
            <div class="dot d-n1"></div>
            <div class="dot d-n2"></div>
            <div class="dot d-n3"></div>
            <div class="dot d-n4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
