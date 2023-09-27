import React from "react";
import Image from "next/image";
import telegram from "../../svgs/outlines/telegram.svg";

const TelegramOutline = ({...props}) => {
  return (
    <Image
      alt=''
      src={telegram}
      {...props}
      className=''
    />
  );
};

export default TelegramOutline;
