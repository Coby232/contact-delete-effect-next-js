'use client';
import React, { useState } from "react";
import Effect from "./effect";
import SocialMediaFix from "./socialMediaFix";
import DarkMode from "./DarkMode";

const HomePage = () => {
  return (
    <div className='w-screen' >
      {/* <Effect />
      <SocialMediaFix/> */}
      <DarkMode/>
    </div>
  );
};

export default HomePage;
