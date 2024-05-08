import React from "react";
import "./MainPage.css";
import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";
import TodaysBid from "./TodaysBid";
import DeadlineItem from "./DeadlineItem";
import BestItem from "./BestItem";

const MainPages = () => {
  return (
    <div className="MainPages">
      <FirstBox />
      <TodaysBid />
      <DeadlineItem />
      <SecondBox />
      <BestItem />
    </div>
  );
};

export default MainPages;
