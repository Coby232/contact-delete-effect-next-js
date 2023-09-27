import React from "react";
import Image from "next/image";
import reddit from "../svgs/reddit.svg";

const Reddit = ({...props}) => {
  return (
    <Image
      alt=''
      src={reddit}
      {...props}
      className=''
    />
  );
};

export default Reddit;
