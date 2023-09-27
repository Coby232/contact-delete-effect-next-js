import React from "react";
import SnapChat from "./icons/SnapChat";
import Facebook from "./icons/Facebook";
import Telegram from "./icons/Telegram";
import Twitter from "./icons/twitter";
import Instagram from "./icons/Instagram";
import Pinterest from "./icons/Pinterest";
import Reddit from "./icons/Reddit";
import Youtube from "./icons/Youtube";
import SnapChatOutline from "./icons/outlines/SnapChatOutline";
import FacebookOutline from "./icons/outlines/FacebookOutline";
import TelegramOutline from "./icons/outlines/TelegramOutline";
import InstagramOutline from "./icons/outlines/InstagramOutline";
import PinterestOutline from "./icons/outlines/PinterestOutline";
import RedditOutline from "./icons/outlines/RedditOutline";
import YoutubeOutline from "./icons/outlines/YoutubeOutline";

const SocialMediaFix = () => {
  return (
    <div className=' h-32 flex flex-col items-center '>
      <div className="bg-white flex flex-row h-16 justify-center items-center gap-4 w-full">
        <SnapChat width={40} height={40} />
        <Facebook width={40} height={40} />
        <Telegram width={40} height={40} />
        <Twitter width={40} height={40} />
        <Instagram width={40} height={40} />
        <Pinterest width={40} height={40} />
        <Reddit width={40} height={40} />
        <Youtube width={40} height={40} />
      </div>
      <div className="bg-white h-12 w-full flex flex-row justify-center gap-4">
        <SnapChatOutline width={40} height={40} />
        <FacebookOutline width={40} height={40} />
        <TelegramOutline width={40} height={40}/>
        <Twitter width={40} height={40} />
        <InstagramOutline width={40} height={40} />
        <PinterestOutline width={40} height={40} />
        <RedditOutline width={40} height={40} />
        <YoutubeOutline width={40} height={40} />
      </div>
    </div>
  );
};

export default SocialMediaFix;
