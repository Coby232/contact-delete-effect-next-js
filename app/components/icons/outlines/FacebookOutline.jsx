import React from "react";
import Image from "next/image";
import facebook from "../../svgs/outlines/facebook.svg";

const FacebookOutline = ({...props}) => {
  return (
    <Image
      alt=''
      src={facebook}
      {...props}
      className=''
    />
  );
};

export default FacebookOutline;
