import React from 'react';
import './Homepage.css'

const Homepage = () => {
    const code1 = `else if (type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === "") {
            alert("Email must be filled out");
            isValid = false;
        } else if (!emailRegex.test(value)) {
            alert("Invalid email format");
            isValid = false;
        }`;



  return (
    <div className='nameContainer'>
      <div>
        <p>Hello Reader, I am</p>
        <h1>BARNABAS JAMES O</h1>
        <h3></h3>
      </div>

      <div>
        <div>
            <pre>
                <code>
                    {code1}
                </code>
            </pre>
        </div>
      </div>
    </div>
  )
}

export default Homepage
