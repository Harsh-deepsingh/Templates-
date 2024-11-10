"use client";
import GitHubCalendar, { Activity } from "react-github-calendar";

const GithubGraph = () => {
  const transformData = (contributions: Activity[]) => {
    const weeksToShow = 99;
    return contributions.slice(-weeksToShow);
  };
  return (
    <>
      <div className="flex w-min flex-col  items-center justify-center">
        <div className="custom__scrollbar h-32 max-h-32   overflow-hidden">
          <GitHubCalendar
            username={"Harsh-deepsingh"}
            transformData={transformData}
          />
        </div>
      </div>
    </>
  );
};

export default GithubGraph;
