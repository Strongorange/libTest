import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import RoadTrip from "../public/road-trip.json";

const AnimationPage = () => {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainerRef.current) {
      Lottie.loadAnimation({
        container: animationContainerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: RoadTrip,
      });
    }
  }, []);

  return (
    <div ref={animationContainerRef} className="w-full bg-amber-500">
      AnimationPage
    </div>
  );
};

export default AnimationPage;
