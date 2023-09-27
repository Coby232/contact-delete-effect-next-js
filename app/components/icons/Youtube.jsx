import React from "react";
import Image from "next/image";
import youtube from "../svgs/youtube.svg";

const Youtube = ({...props}) => {
  return (
    <Image
      alt=''
      src={youtube}
      {...props}
      className=''
    />
  );
};

export default Youtube;
