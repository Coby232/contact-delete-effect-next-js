import React from "react";
import Image from "next/image";
import pinterest from "../../svgs/outlines/pinterest.svg";

const PinterestOutline = ({...props}) => {
  return (
    <Image
      alt=''
      src={pinterest}
      {...props}
      className=''
    />
  );
};

export default PinterestOutline;
