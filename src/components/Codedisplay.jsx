import React from "react";
import "./CodeDisplay.scss";

const CodeDisplay = ({ code, language = "javascript", className = "" }) => {
  // console.log(code);
  const lines = code.split("\n");

  const highlightJavaScript = (line) => {
    return (
      line
        // Strings first (to protect content inside strings)
        .replace(/(['"`])([^'"`]*)\1/g, '<span class="string">$1$2$1</span>')
        // Comments
        .replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>')
        // Keywords (avoiding already highlighted content)
        .replace(
          /\b(const|let|var|function|if|else|for|while|return|class|import|export)\b(?![^<]*>)/g,
          '<span class="keyword">$1</span>'
        )
        // Numbers
        .replace(/\b(\d+)\b(?![^<]*>)/g, '<span class="number">$1</span>')
        // Methods and properties (avoiding already highlighted content)
        .replace(/(\w+)(\()(?![^<]*>)/g, '<span class="method">$1</span>$2')
        .replace(/\.(\w+)(?![^<]*>)/g, '.<span class="property">$1</span>')
        // Object keys
        .replace(/(\w+):(?![^<]*>)/g, '<span class="property">$1</span>:')
    );
  };

  return (
    <div className={`code-display ${className}`}>
      <div className="code-display__container">
        <div className="code-display__line-numbers">
          {lines.map((_, index) => (
            <div key={index} className="line-number">
              {index + 1}
            </div>
          ))}
        </div>
        <div className="code-display__content">
          {lines.map((line, index) => (
            <div key={index} className="code-line">
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    language === "javascript"
                      ? highlightJavaScript(line)
                      : line,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeDisplay;
