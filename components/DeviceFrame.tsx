// components/DeviceFrame.tsx

import React from "react";
import styles from "./DeviceFrame.module.css";

interface DeviceFrameProps {
  demo: string;
  demoTablet: string;
  demoMobile: string;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({ demo, demoTablet, demoMobile }) => {
  return (
    <div className={styles.deviceFrameContainer}>
      
      {/* Desktop */}
      <div className={styles.device}>
        <img src="/images/laptop.png" alt="Laptop Mockup" className={styles.deviceImage} />
        <iframe src={demo} title="desktop-demo" className={`${styles.deviceIframe} ${styles.desktopIframe}`} loading="lazy"></iframe>
      </div>

      {/* Tablet */}
      <div className={styles.device}>
        <img src="/images/tablet.png" alt="Tablet Mockup" className={styles.deviceImage} />
        <iframe src={demoTablet} title="tablet-demo" className={`${styles.deviceIframe} ${styles.tabletIframe}`} loading="lazy"></iframe>
      </div>

      {/* Mobile */}
      <div className={styles.device}>
        <img src="/images/mobile.png" alt="Mobile Mockup" className={styles.deviceImage} />
        <iframe src={demoMobile} title="mobile-demo" className={`${styles.deviceIframe} ${styles.mobileIframe}`} loading="lazy"></iframe>
      </div>

    </div>
  );
};

export default DeviceFrame;
