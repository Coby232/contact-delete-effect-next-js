import React from "react";
import Image from "next/image";
import snapchat from "../svgs/snapchat.svg";

const SnapChat = ({...props}) => {
  return (
    <Image
      alt=''
      src={snapchat}
      {...props}
      className=''
    />
  );
};

export default SnapChat;
