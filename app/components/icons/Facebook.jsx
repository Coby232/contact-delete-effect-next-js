import React from "react";
import Image from "next/image";
import facebook from "../svgs/facebook.svg";

const Facebook = ({...props}) => {
  return (
    <Image
      alt=''
      src={facebook}
      {...props}
      className=''
    />
  );
};

export default Facebook;
