import React from "react";
import Image from "next/image";
import gmail from "../svgs/gmail.svg";

const Gmail = ({...props}) => {
  return (
    <Image
      alt=''
      src={gmail}
      {...props}
      className=''
    />
  );
};

export default Gmail;
