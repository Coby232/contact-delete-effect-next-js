import React from "react";
import Image from "next/image";
import snapChatOutline from "../../svgs/outlines/snapchat.svg";

const SnapChatOutline = ({...props}) => {
  return (
    <Image
      alt=''
      src={snapChatOutline}
      {...props}
      className=''
    />
  );
};

export default SnapChatOutline;
