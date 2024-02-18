import React from "react";

const Icon = (props) => {
  const { icon } = props;
  return <span className="pointer-events-none relative">{icon}</span>;
};

export default Icon;
