"use client";
import React, { useState, useEffect } from "react";
import MinusIcon from "./icons/minusIcon";

const Effect = ({}) => {
  const [slideLeft, setSlideLeft] = useState(false);
  const [onCancel, setOnCancel] = useState(false);
  const [deleteEffect, setDeleteEffect] = useState(
    "reverseDeleteEffect"
  );

  const [deleteButtonClick, setDeleteButtonClick] = useState("");

  useEffect(() => {
    if (slideLeft) {
      setDeleteEffect("DeleteEffect");
    }
  }, [deleteEffect, slideLeft]);

  const _handleDelete = (childData) => {
    setSlideLeft(childData);
  };

  const _handleCancel = (childData) => {
    setOnCancel(childData);
  };

  const _handleDeleteButtonClick = () => {
    setDeleteButtonClick("DeleteButtonClickedEffect");
  };

  return (
    <>
      {!slideLeft && (
        <div
          className={`flex h-10 w-screen bg-white overflow-hidden  ${deleteButtonClick}  `}
          onClick={() => {
            // setOnCancel(true);
            // setSlideLeft(false)
          }}>
          <div
            className={`flex h-full min-w-full gap-x-3 justify-center items-center border p-5  ${
              slideLeft ? deleteEffect : "reverseDeleteEffect"
            } ${onCancel ? "reverseDeleteEffect" : ""} `}>
            <MinusIcon
              iconWidth={20}
              iconHeight={20}
              handleDelete={_handleDelete}
              handleCancel={_handleCancel}
              hasBeenClicked={slideLeft}
            />{" "}
            homepage {">"}{" "}
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
            className={`h-full bg-red-600 text-white p-2  ${
              slideLeft ? deleteEffect : "reverseDeleteEffect"
            } ${onCancel ? "reverseDeleteEffect" : ""}`}
            onClick={() => {
              _handleDeleteButtonClick();
            }}>
            Delete
          </button>
        </div>
      )}
      {slideLeft && (
        <div
          className={`flex h-10 w-screen bg-white overflow-hidden  ${deleteButtonClick} `}
          onClick={() => {
            setOnCancel(true);
            setSlideLeft(false);
          }}>
          <div
            className={`flex h-full min-w-full gap-x-3 justify-center items-center border p-5  ${
              slideLeft ? deleteEffect : "reverseDeleteEffect"
            } ${onCancel ? "reverseDeleteEffect" : ""} `}>
            <MinusIcon
              iconWidth={20}
              iconHeight={20}
              handleDelete={_handleDelete}
              handleCancel={_handleCancel}
              hasBeenClicked={slideLeft}
            />{" "}
            homepage {">"}{" "}
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
            className={`h-full bg-red-600 text-white p-2  ${
              slideLeft ? deleteEffect : "reverseDeleteEffect"
            } ${onCancel ? "reverseDeleteEffect" : ""}`}
            onClick={() => {
              _handleDeleteButtonClick();
            }}>
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Effect;
