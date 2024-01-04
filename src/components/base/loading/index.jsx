import React from "react";
import style from "./style.module.scss";

function Loading({ top = "40vh" }) {
  return (
    <>
      <div className={style.ldsEllipsis} style={{ top: top }}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Loading;
