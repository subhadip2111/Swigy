import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-gray-300 p-4 my-4 rounded-lg">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="flex items-center justify-between w-full text-lg font-semibold focus:outline-none"
      >
        {title}{" "}
        <span className="text-base">
          <FontAwesomeIcon icon={isVisible ? faArrowUp : faArrowDown} />
        </span>
      </button>

      {isVisible && <p className="p-4 mt-2 bg-gray-100 rounded-lg">{description}</p>}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div className="m-auto w-4/5 my-5 py-2">
      <h1 className="text-4xl font-bold mb-4">Instamart</h1>
      <hr className="my-2 border-gray-500" />

      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />

      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />

      <Section
        title={"Careers at Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "career" ? "" : "career")
        }
      />
    </div>
  );
};

export default InstaMart;
