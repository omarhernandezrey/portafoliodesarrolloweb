// components/DeviceFrame.tsx
import React from "react";

interface DeviceFrameProps {
  src: string;
  title: string;
  containerStyle: React.CSSProperties;
  iframeStyle?: React.CSSProperties;
  className?: string;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({
  src,
  title,
  containerStyle,
  iframeStyle,
  className = "",
}) => {
  return (
    <div style={containerStyle} className={`absolute ${className}`}>
      <div
        style={{
          transform: iframeStyle?.transform,
          transformOrigin: iframeStyle?.transformOrigin,
          width: "100%",
          height: "100%",
        }}
        className="w-full h-full"
      >
        <iframe
          src={src}
          title={title}
          style={{
            width: "100%",
            height: "100%",
            border: "0",
          }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DeviceFrame;
