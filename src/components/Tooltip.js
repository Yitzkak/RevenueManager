import React from "react";

function Tooltip({ tip }) {
  return (
    <div class="tooltip">
      <span class="tooltiptext">{tip}</span>
    </div>
  );
}

export default Tooltip;
