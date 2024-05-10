import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedVisibilityProps {
    children: React.ReactNode;
    animation?: string;
}

const AnimatedVisibility: React.FC<AnimatedVisibilityProps> = ({ children, animation }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView();
    const animationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <div ref={ref}>
            <div
                ref={animationRef}
                className={`
                    ${isVisible ? (animation ? animation : "animate-fadeIn") : "opacity-0"} 
                    transition-all duration-1000
                `}
            >
                {children}
            </div>
        </div>
    );
};

export default AnimatedVisibility;
