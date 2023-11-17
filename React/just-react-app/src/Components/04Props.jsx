import React from "react";

const CheckProps = (props) => {
  console.log(props);
  return <h1>Hello {props.name} {props.surName}</h1>;
};

export default CheckProps;
