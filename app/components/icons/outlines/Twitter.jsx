import React from "react";
import Image from "next/image";
import twitter from "../svgs/twitter.svg";

const Twitter = ({...props}) => {
  return (
    <Image
      alt=''
      src={twitter}
      {...props}
      className=''
    />
  );
};

export default Twitter;
