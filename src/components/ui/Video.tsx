"use client";

import { useState, useRef } from "react";
import { Loader2 } from "lucide-react";

export default function Video({ videoSrc = "" }) {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoaded = () => {
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative">
      <div className="container">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-gray-500 animate-spin" />
          </div>
        )}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover ${
            isLoading ? "invisible" : "visible"
          }`}
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoaded}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
