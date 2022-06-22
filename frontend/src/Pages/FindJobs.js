import React from "react";
import JobPreview from "../Components/JobPreview";
import SearchBar from "../Components/SearchBar";
const FindJobs = () => {
  return (
    <div className="find-jobs">
      <SearchBar />
      <JobPreview />
    </div>
  );
};

export default FindJobs;
