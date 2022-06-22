import React from "react";
import { Badge } from "react-bootstrap";

const PopularSearches = () => {
  return (
    <div>
      <h2 className="text-center">Popular Searches</h2>
      <div className="popular-searches">
        <Badge id="popular-searches-pill" pill bg="secondary">
          Technical Writer
        </Badge>{" "}
        <Badge id="popular-searches-pill" pill bg="secondary">
          Scrum Master
        </Badge>{" "}
        <Badge id="popular-searches-pill" pill bg="secondary">
          Mechanical Engineer
        </Badge>{" "}
        <Badge id="popular-searches-pill" pill bg="secondary">
          Part-time Driver
        </Badge>{" "}
        <Badge id="popular-searches-pill" pill bg="secondary">
          Weekend Dishwasher
        </Badge>{" "}
        <Badge id="popular-searches-pill" pill bg="secondary">
          Janitorial Worker
        </Badge>{" "}
        <Badge id="popular-searches-pill" pill bg="secondary">
          Guard Officer
        </Badge>{" "}
        <Badge id="popular-searches-pill" pill bg="secondary">
          Warehouse Worker
        </Badge>{" "}
      </div>
    </div>
  );
};

export default PopularSearches;
