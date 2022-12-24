import React from "react";

import "./programming.css";
export default function Programming() {
  const value = [
    {
      text: "C++",
      url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
      percentage: 80
    },
    {
      text: "JavaScript",
      url : 'https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg',
      percentage: 75
    },
    {
      text: "NodeJs",
      url : 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
      percentage: 75
    },
    {
      text: "ReactJs",
      url : 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png',
      percentage: 70
    },
    {
      text: "HTML",
      url : 'https://seeklogo.com/images/H/html5-with-wordmark-black-white-logo-A6222B77EC-seeklogo.com.png',
      percentage: 80
    },
    {
      text: "CSS",
      url : 'https://w7.pngwing.com/pngs/509/571/png-transparent-cascading-style-sheets-logo-css3-html-web-development-world-wide-web-blue-angle-web-design.png',
      percentage: 80
    }
  ];

  const images = ["c++"];

  return (
    <>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-md-6 col-sm-12 my-4">
                  <span className="language"><img className="language-img" src={value.url}/> {value.text}</span>
                  <div className="total-progress">
                    <div
                      className="my-progress d-flex"
                      style={{ width: `${value.percentage}%` }}
                    >
                      {value.percentage}%
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
