import React, { useState } from "react";

export default function CodeSandBoxPreview({ url, ...props }) {
  return (
    <iframe
      src={url}
      style={{
        width: "100%",
        border: 0,
        borderRadius: 4,
        overflow: "hidden",
      }}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      {...props}
    ></iframe>
  );
}
