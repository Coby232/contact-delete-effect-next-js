import React from "react";
import Image from "next/image";
import youtube from "../../svgs/outlines/youtube.svg";

const YoutubeOutline = ({...props}) => {
  return (
    <Image
      alt=''
      src={youtube}
      {...props}
      className=''
    />
  );
};

export default YoutubeOutline;
