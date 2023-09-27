import React from "react";
import Image from "next/image";
import telegram from "../svgs/telegram.svg";

const Telegram = ({...props}) => {
  return (
    <Image
      alt=''
      src={telegram}
      {...props}
      className=''
    />
  );
};

export default Telegram;
