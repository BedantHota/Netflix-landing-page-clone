import React from "react";
import Main from "./main-page";
import HR from "./hr-tag";
import SecondMain from "./section2";
import FourthMain from "./section4";
import ThirdMain from "./section3";
import FifthMain from "./section5";
import FAQsec from "./FAQsec";

function App() {
  return (
    <div className="main">
      <Main />
      <HR class="hr1" height="1rem" color="gray" bg="grey" />
      <SecondMain />
      <HR class="hr1" height="1rem" color="gray" bg="grey" />
      <ThirdMain />
      <HR class="hr1" height="1rem" color="gray" bg="grey" />
      <FourthMain />
      <HR class="hr1" height="1rem" color="gray" bg="grey" />
      <FifthMain />
      <HR class="hr1" height="1rem" color="gray" bg="grey" />
      <FAQsec />
      <HR class="hr1" height="1rem" color="gray" bg="grey" />
    </div>
  );
}

export default App;
