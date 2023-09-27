'use client';
import React, { useState } from "react";
import Effect from "./effect";
import SocialMediaFix from "./socialMediaFix";

const HomePage = () => {
  return (
    <div className='w-screen' >
      <Effect />
      <SocialMediaFix/>
    </div>
  );
};

export default HomePage;
