import React from "react";
import Image from "next/image";
import pinterest from "../svgs/pinterest.svg";

const Pinterest = ({...props}) => {
  return (
    <Image
      alt=''
      src={pinterest}
      {...props}
      className=''
    />
  );
};

export default Pinterest;
