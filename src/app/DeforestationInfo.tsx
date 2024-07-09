"use client";
import React, { useState } from 'react';

const BackgroundVideoPath = "/video/11211248-hd_1920_1080_30fps.mp4";
const ExplanationVideoPath1 = "/video/Climate 101_ Deforestation _ National Geographic.mp4";
const ExplanationVideoPath2 = "/video/Climate Change - A Short Film [4K].mp4";

const DeforestationComponent: React.FC = () => {
    const [videoState, setVideoState] = useState({
        showVideo1: false,
        enlargeVideo1: false,
        showVideo2: false,
        enlargeVideo2: false,
    });

    const handleVideoPlay = (videoNumber: 'video1' | 'video2') => {
        setTimeout(() => {
            setVideoState((prevState) => ({
                ...prevState,
                [videoNumber === 'video1' ? 'enlargeVideo1' : 'enlargeVideo2']: true,
            }));
        }, 15000); // 15 seconds
    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: -1 }}>
                <source src={BackgroundVideoPath} type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', top: '30%', left: '5%', zIndex: 10, color: 'black' }}>
                {/* Text Sections */}
                <div
                    onMouseEnter={() => setVideoState((prevState) => ({ ...prevState, showVideo1: true }))}
                    onMouseLeave={() => setVideoState((prevState) => ({ ...prevState, showVideo1: false, enlargeVideo1: false }))}
                    style={{ marginBottom: '20px', cursor: 'pointer', fontSize: '18px', maxWidth: '400px' }}
                >
                    Hover over to learn about the impact of deforestation on global climate change.
                </div>
                <div
                    onMouseEnter={() => setVideoState((prevState) => ({ ...prevState, showVideo2: true }))}
                    onMouseLeave={() => setVideoState((prevState) => ({ ...prevState, showVideo2: false, enlargeVideo2: false }))}
                    style={{ cursor: 'pointer', fontSize: '18px', maxWidth: '400px' }}
                >
                    Discover how reforestation efforts can counteract deforestation effects.
                </div>
            </div>
            {/* Video Popups */}
            <div style={{ position: 'absolute', top: '30%', right: '5%', zIndex: 11 }}>
                {videoState.showVideo1 && (
                    <video
                        width={videoState.enlargeVideo1 ? "800" : "400"}
                        height={videoState.enlargeVideo1 ? "450" : "225"}
                        controls
                        autoPlay
                        onPlay={() => handleVideoPlay('video1')}
                    >
                        <source src={ExplanationVideoPath1} type="video/mp4" />
                    </video>
                )}
                {videoState.showVideo2 && (
                    <video
                        width={videoState.enlargeVideo2 ? "800" : "400"}
                        height={videoState.enlargeVideo2 ? "450" : "225"}
                        controls
                        autoPlay
                        onPlay={() => handleVideoPlay('video2')}
                        style={{ marginTop: videoState.showVideo1 ? '20px' : '0' }} // Adjust spacing if both videos are shown
                    >
                        <source src={ExplanationVideoPath2} type="video/mp4" />
                    </video>
                )}
            </div>
        </div>
    );
};

export default DeforestationComponent;
