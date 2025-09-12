import React from "react";

const interests = `
Anything Javascript (because why not)

/** As an Engineering graduate
* Python
* Simulation
* Structural analysis`;

const Interests = () => {
  return (
    <div
      style={{
        // color: "#f8fafc",
        paddingBlock: "0.5em",
      }}
    >
      <ul
        style={{
          marginLeft: "0.5em",
          padding: "0.5em",
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <li>
          <p>
            <span className="interest-headers">Automotive & Motorsports:</span>
            Formula One enthusiast with deep interest in racing technology and
            automotive engineering
          </p>
        </li>

        <li>
          <p>
            <span className="interest-headers">
              Web Development & Blockchain:
            </span>
            Exploring frontend technologies, MERN stack, and Web3/cryptocurrency
            ecosystems
          </p>
        </li>

        <li>
          <p>
            <span className="interest-headers">Continuous Learning:</span>
            Avid reader focused on expanding worldview and technical
            understanding
          </p>
        </li>
        <li>
          <p>
            <span className="interest-headers">Sports:</span> Active follower of
            competitive sports with appreciation for strategy and performance
          </p>
        </li>
        <li>
          <p>
            <span className="interest-headers">Technology Evolution:</span>
            Passionate about the transition from Web2 to Web3 and decentralized
            applications
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Interests;
