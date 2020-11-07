import React from "react";
import Heading from "./Heading";
import Collapse from "./Collapse";
import Input from "./input-component";

function FAQsec() {
  const getScreenWidth = window.screen.width;

  return (
    <div className="faqSec">
      <Heading
        className="faq-head"
        text="Frequently Asked Questions"
        align="center"
        color="white"
      />
      <Collapse
        question="What is Netflix?"
        text="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
              You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        dataTarget="que1"
        height="300px"
      />
      <Collapse
        question="How much does Netflix cost?"
        text="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts."
        dataTarget="que2"
        height="200px"
      />
      <Collapse
        question="Where I can watch?"
        text="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>
              You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        dataTarget="que3"
        height={`${getScreenWidth <= 440 ? "430px" : "330px"}`}
      />
      <Collapse
        question="How do I cancel?"
        text="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        dataTarget="que4"
        height="200px"
      />
      <Collapse
        dataTarget="que5"
        height="200px"
        question="What can I watch on Netflix?"
        text="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
      />
      <Collapse
        dataTarget="que6"
        height={`${getScreenWidth <= 440 ? "280px" : "250px"}`}
        question="Is Netflix good for Kids?"
        text="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
              <br/>
        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
      />
      <div className="btmGetStarted">
        <center>
          <Heading
            className="btmHeading"
            text="Ready to watch? Enter your email to create or restart your membership."
            align="center"
            color="white"
          />
          <Input inputName="secondInput" btnName="secondInput" id="second" />
        </center>
      </div>
    </div>
  );
}

export default FAQsec;
