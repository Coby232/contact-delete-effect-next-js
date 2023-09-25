"use client";
import React, { useState } from "react";
import MinusIcon from "./icons/minusIcon";

const Effect = () => {
  const [slideLeft, setSlideLeft] = useState(false);
  const [onCancel, setOnCancel] = useState(false);
  const [deleteEffect, setDeleteEffect] = useState("reverseDeleteEffect");
  const [deleteButtonClick, setDeleteButtonClick] = useState("");

  const handleDelete = (childData, deleteStyle) => {
    setSlideLeft(childData);
    setDeleteEffect(deleteStyle);
  };

  const handleCancel = (childData) => {
    setOnCancel(childData);
  };

  const handleDeleteButtonClick = () => {
    setDeleteButtonClick("DeleteButtonClickedEffect");
  };

  const containerClasses = `flex h-10 w-screen bg-white overflow-hidden ${deleteButtonClick}`;

  const innerClasses = `flex h-full min-w-full gap-x-3 justify-center items-center border p-5 ${
    slideLeft ? deleteEffect : "reverseDeleteEffect"
  } ${onCancel ? "reverseDeleteEffect" : ""}`;

  const innerClassForDeleteButton = `h-full bg-red-600 text-white p-2 ${
              slideLeft ? deleteEffect : "reverseDeleteEffect"
            } ${onCancel ? "reverseDeleteEffect" : ""}`

  return (
    <>
      {!slideLeft && (
        <div className={containerClasses}>
          <div className={innerClasses}>
            <MinusIcon
              iconWidth={20}
              iconHeight={20}
              handleDelete={handleDelete}
              handleCancel={handleCancel}
              hasBeenClicked={slideLeft}
            />
            homepage {" > "}
            <form>
              <label>
                <input
                  className='bg-slate-200 p-0.5'
                  type='number'
                  placeholder='+233 567 890 195'
                  disabled={slideLeft}
                  minLength={20}
                />
              </label>
            </form>
          </div>
          <button
            className={innerClassForDeleteButton}
            onClick={handleDeleteButtonClick}>
            Delete
          </button>
        </div>
      )}
      {slideLeft && (
        <div
          className={containerClasses}
          onClick={() => {
            setOnCancel(true);
            setSlideLeft(false);
          }}>
          <div className={innerClasses}>
            <MinusIcon
              iconWidth={20}
              iconHeight={20}
              handleDelete={handleDelete}
              handleCancel={handleCancel}
              hasBeenClicked={slideLeft}
            />
            homepage {" > "}
            <form>
              <label>
                <input
                  className='bg-slate-200 p-0.5'
                  type='number'
                  placeholder='+233 567 890 195'
                  disabled={slideLeft}
                  minLength={20}
                />
              </label>
            </form>
          </div>
          <button
            className={innerClassForDeleteButton}
            onClick={handleDeleteButtonClick}>
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Effect;
