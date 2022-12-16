import React from "react";

const Circle = (props) => {
  return <div className={`circle ${props.className}`} style={{ ...props }} />;
};

export default Circle;
