import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackgroundVideoPath =
  "/video/reforestration/4046228-hd_1920_1080_25fps.mp4"; // Update with your actual path
const ReforestationVideoPath =
  "/video/reforestration/What is Reforestation_ _ Eco Facts _ One Tree Planted.mp4"; // Update with your actual path

const ReforestationComponents: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Animation for the popup to make it larger and more noticeable
  const popupVideoAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: 1,
        }}
      >
        <source src={BackgroundVideoPath} type="video/mp4" />
      </video>
      <div
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          zIndex: 2,
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        Hover over me to learn about reforestation.
      </div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={popupVideoAnimation}
            style={{ position: "absolute", top: "20%", left: "20%", zIndex: 3 }}
          >
            <video
              width="640" // Increased size
              height="360" // Adjusted for aspect ratio
              controls
              autoPlay
              style={{
                borderRadius: "10px",
                maxWidth: "80vw",
                maxHeight: "80vh",
              }} // Ensures responsiveness
            >
              <source src={ReforestationVideoPath} type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReforestationComponents;
