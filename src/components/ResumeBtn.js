import React from "react";
import "./ResumeBtn.scss";

function ResumeBtn({ changeCursorActive }) {
  return (
    <div
      className="resume-btn"
      onMouseEnter={changeCursorActive}
      onMouseLeave={changeCursorActive}
    >
      <a href="/assets/VictoriaHoResume.pdf" target="_blank">
        <h6>Resume</h6>
      </a>
    </div>
  );
}

export default ResumeBtn;
