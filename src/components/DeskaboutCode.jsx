import React, { useState } from "react";
import {
  Calendar,
  // Github,
  ExternalLink,
  Code,
  GitCommit,
  Star,
  Clock,
  GitCommitIcon,
} from "lucide-react";

const DeskaboutCode = () => {
  function calculateAge(createdDate) {
    const now = new Date();
    const diffTime = Math.abs(now - createdDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) {
      return `${diffDays} days ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} year${years > 1 ? "s" : ""} ago`;
    }
  }

  const codeSamples = [
    {
      code: `fetchWorks: async () => {
  const res = await fetch("/api/works");
  const { success, message, data } = await res.json();
  if (!success) {
    return { success: success, message: message };
  } else {
    set({ works: data });
    return { sucess: success };
  }
},`,
      age: new Date("2025-07-31"),
      stars: 3,
      writeup:
        "This is part of my code from the first backend api I worked on.",
    },
    {
      code: `const getAddon = (addOnLabel) => {
  return phase === "bymonth"
    ? monthlyItems.monthlyAddons[addOnLabel]
    : yearlyItems.yearlyAddons[addOnLabel];
};`,
      age: new Date("2025-06-11"),
      stars: 4,
      writeup:
        "This is one of my most functional part of my code of developing a shopping cart.",
    },
  ];

  return (
    <>
      {codeSamples.map((sample) => {
        const [details, setDetails] = useState(false);
        return (
          <div className="about-code">
            <div className="about-code-top">
              <div className="about-code-tops">
                <a
                  href="https://github.com/Jamieeee1"
                  style={{ color: "#615fff" }}
                >
                  @Jamieeee
                </a>
                <span className="code-icons-span">
                  <GitCommit className="code-icons" size={14} /> Created{" "}
                  {calculateAge(sample.age)}{" "}
                </span>
              </div>
              <div className="about-code-tops">
                <span
                  onClick={() => setDetails(!details)}
                  style={{ color: details && "#ffffff" }}
                >
                  {" "}
                  details{" "}
                </span>
                <span style={{ marginLeft: "1em" }}>
                  <Star className="code-icons" fill="#90a1b9" size={13} />{" "}
                  {sample.stars}
                </span>
              </div>
            </div>
            <div className="snippet-code">
              <pre>
                <code>{sample.code}</code>
              </pre>
            </div>
            {details && <p className="code-writeup">//{sample.writeup}</p>}
          </div>
        );
      })}
    </>
  );
};

export default DeskaboutCode;
