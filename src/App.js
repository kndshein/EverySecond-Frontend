import React from "react";
import "./styles/App.css";

import Nav from "./components/Nav";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import SlideThree from "./components/SlideThree";
import SlideFour from "./components/SlideFour";
import Scrollbar from "./components/ScrollBar";

function App() {
  const [content, setContent] = React.useState(null);

  React.useEffect(() => {
    const seedData = {
      title: "Suicide Prevention",
      SlideOne: {
        second: 2.6,
        tagline: "somebody in the US is having thoughts of suicide3",
        icon: {
          img:
            "https://cdn.iconscout.com/icon/free/png-256/exclamation-mark-2653677-2202673.png",
          alt: "person",
        },
        background: {
          img:
            "https://images.unsplash.com/photo-1615027138404-06f31c35ae1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          alt: "dim room",
        },
      },
      SlideTwo: {
        taglineOne:
          "1.4 million adults in the United States attempted suicide in 2019",
        taglineTwo: "that's 4 attempts every 1000 adults",
        graphic: {
          icon: {
            img:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/225px-Person_icon_BLACK-01.svg.png",
            alt: "human symbol",
          },
          num1: 4,
          num2: 1000,
        },
        background: {
          img:
            "https://images.unsplash.com/photo-1483653085484-eb63c9f02547?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          alt: "city aerial",
        },
      },
      SlideThree: {
        taglineOne: "there are about 130 fatal suicides per day",
        taglineTwo: {
          tagline: "which is almost",
          taglineFocus: "6 suicidal deaths every hour",
        },
      },
      SlideFour: {
        educate: [
          {
            name: "Suicide Awareness Voices of Education",
            link:
              "https://save.org/about-suicide/warning-signs-risk-factors-protective-factors/",
          },
        ],
        awareness: [
          {
            name: "Federal bills that need your support",
            link: "https://afsp.org/public-policy-action-center#",
          },
        ],
        volunteer: [
          {
            name: "Become a Crisis Counselor",
            link: "https://www.crisistextline.org/become-a-volunteer/",
          },
        ],
        financial: [
          {
            name: "American Foundation for Suicide Prevention",
            link: "https://afsp.org/give-a-gift",
          },
          {
            name: "Suicide Prevention Lifeline",
            link: "https://suicidepreventionlifeline.org/donate/",
          },
        ],
      },
    };

    setContent(seedData);
  }, []);

  return (
    <div className="App">
      <Nav content={content} />
      <div className="slides-container">
        <SlideOne content={content} />
        <SlideTwo content={content} />
        <SlideThree content={content} />
        <SlideFour content={content} />
      </div>
      <Scrollbar />
    </div>
  );
}

export default App;
