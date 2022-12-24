import React from "react";
import "./work.css";
export default function Work() {
  return (
    <>
      <div className="work-inside-new mx-3 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">XYZ</span>
            <span className="year-passed-out">2022-2023</span>
          </div>
        </div>
        <div className="d-flex flex-column ">
          <span className="position">SDE</span>
          <span className="description-position">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
