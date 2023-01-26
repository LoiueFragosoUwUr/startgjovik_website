import React from "react";

export const Hero: React.FC = () => {
    return (
        <div className="h-full w-full">
            <video className="z-1 inset-0" autoPlay muted loop>
                <source src="./bg2.mp4" />
                <p>Your browser does not support the video tag.</p>
            </video>
        </div>
    );
};
