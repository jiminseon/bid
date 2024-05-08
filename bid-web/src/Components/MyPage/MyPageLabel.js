import React from "react";
import "./MyPage.css";

const MyPageLabel = ({
  LabelsLabel,
  FirstContent,
  SecondContent,
  ThirdContent,
  LastContent,
}) => {
  return (
    <div className="ProductLabel">
      <div className="LabelsLabel">{LabelsLabel}</div>
      <div className="LabelBox">
          <span className="FirstContent">{FirstContent}</span>
          <span className="SecondContent">{SecondContent}</span>
          <span className="ThirdContent">{ThirdContent}</span>
          <span className="LastContent">{LastContent}</span>
      </div>
    </div>
  );
};

export default MyPageLabel;
