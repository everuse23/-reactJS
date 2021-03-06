import React from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Loading = () => {
  return (
    <div className="spinner">
      <Spinner />
    </div>
  );
};

export default Loading;
