import React from "react";
import Image from "next/image";
import instagram from "../../svgs/outlines/instagram.svg";

const InstagramOutline = ({...props}) => {
  return (
    <Image
      alt=''
      src={instagram}
      {...props}
      className=''
    />
  );
};

export default InstagramOutline;
