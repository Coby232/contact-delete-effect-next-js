import React from "react";
import Image from "next/image";
import reddit from "../../svgs/outlines/reddit.svg";

const RedditOutline = ({...props}) => {
  return (
    <Image
      alt=''
      src={reddit}
      {...props}
      className=''
    />
  );
};

export default RedditOutline;
