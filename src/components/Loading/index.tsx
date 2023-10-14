import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({ ...props }) => {
  return <Spinner {...props} animation="grow"></Spinner>;
};

export default Loading;
