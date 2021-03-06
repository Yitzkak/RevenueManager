import * as React from "react";

function SvgCalendars(props) {
  return (
    <svg viewBox="0 0 60 60" {...props}>
      <path d="M57 4h-7V1a1 1 0 00-1-1h-7a1 1 0 00-1 1v3H19V1a1 1 0 00-1-1h-7a1 1 0 00-1 1v3H3a1 1 0 00-1 1v54a1 1 0 001 1h54a1 1 0 001-1V5a1 1 0 00-1-1zM43 2h5v6h-5V2zM12 2h5v6h-5V2zM4 6h6v3a1 1 0 001 1h7a1 1 0 001-1V6h22v3a1 1 0 001 1h7a1 1 0 001-1V6h6v9H4V6zm0 52V17h52v41H4z" />
      <path d="M38 23H11v29h38V23H38zm-7 2h7v7h-7v-7zm7 16h-7v-7h7v7zm-16-7h7v7h-7v-7zm0-9h7v7h-7v-7zm-9 0h7v7h-7v-7zm0 9h7v7h-7v-7zm7 16h-7v-7h7v7zm9 0h-7v-7h7v7zm9 0h-7v-7h7v7zm9 0h-7v-7h7v7zm0-9h-7v-7h7v7zm0-16v7h-7v-7h7z" />
    </svg>
  );
}

export default SvgCalendars;
