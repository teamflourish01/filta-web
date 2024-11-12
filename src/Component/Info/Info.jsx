import React, { useState } from "react";
import { CgInfo } from "react-icons/cg";

function Info({info}) {
    const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <span className="relative-info"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <CgInfo />
      </span>
      {showTooltip && (
        <div className="tooltip">{info}</div>
      )}
    </>
  );
}

export default Info;
