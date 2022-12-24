import React from "react";
import college from './images/college.png';
import school from './images/school.png';
import "./education.css";
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-3 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              <img
                className="images"
                src={college}
              ></img>
              Thapar Institute of Technology
            </span>
            <span className="university-degree">BTech in Compter Science </span>
            <span className="university-degree cgpa">CGPA : 9.23 (uptill 4th Semester)</span>
          </div>
          <div>
            <span className="year-passedout">2020-2024</span>
          </div>
        </div>

        <div className="education-one my-3 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              <img
                className="images school-img"
                src={school}
              ></img>
              Bal Bharati Public School
            </span>
            <span className="university-degree">Secondary Education</span>
            <span className="university-degree cgpa">Score: 95.8% (CBSE Board)</span>
          </div>
          <div>
            <span className="year-passedout">2018-2020</span>
          </div>
        </div>

        <div className="education-one my-3 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              <img
                className="images school-img"
                src={school}
              ></img>
              Bal Bharati Public School
            </span>
            <span className="university-degree">Intermediate Education</span>
            <span className="university-degree cgpa">Score: 92.8% (CBSE Board)</span>
          </div>
          <div>
            <span className="year-passedout">2007-2018</span>
          </div>
        </div>
      </div>
    </>
  );
}
