import React from "react";
import Image from "next/image";
import instagram from "../svgs/instagram.svg";

const Instagram = ({...props}) => {
  return (
    <Image
      alt=''
      src={instagram}
      {...props}
      className=''
    />
  );
};

export default Instagram;
