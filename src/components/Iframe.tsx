import React from "react";

const Iframe = () => {
  return (
    <div
      className="overflow-hidden "
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <iframe
        src="https://projects.100xdevs.com"
        title="Blindly Social"
        className="rounded-3xl transition-all duration-1000"
        style={{
          width: "200%",
          height: "200%",
          transform: "scale(0.5)",
          transformOrigin: "0 0",
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default Iframe;
