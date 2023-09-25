"use client";
import React from "react";
import Image from "next/image";
import minus from "../../../public/minus.svg";

const MinusIcon = ({
  iconWidth,
  iconHeight,
  handleDelete,
  handleCancel,
  hasBeenClicked,
}) => {
  return (
    <>
      {!hasBeenClicked && (
        <button
          onClick={() => {
            handleDelete(true,"DeleteEffect");
            handleCancel(false);
          }}>
          <Image
            alt=''
            src={minus}
            width={iconWidth}
            height={iconHeight}
            className=''
          />
        </button>
      )}
      {hasBeenClicked && (
        <button>
          <Image
            alt=''
            src={minus}
            width={iconWidth}
            height={iconHeight}
            className=''
          />
        </button>
      )}
    </>
  );
};

export default MinusIcon;
