import Stream from "./Stream"
import { useEffect, useState, useRef } from 'react';

function Matrix() {

    const containerRef = useRef(null);
    const streamCount = Math.floor(window.innerWidth / 26)
    const [containerSize, setContainerSize] = useState(null); // ?{width, height}

    useEffect(() => {
        const boundingClientRect = containerRef.current.getBoundingClientRect();
        setContainerSize({
            width: boundingClientRect.width,
            height: boundingClientRect.height,
        });
    }, []);

    return (
        <div
            style={{
                zIndex: -1,
                background: 'white',
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: 'ignore',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}
            ref={containerRef}>
            {new Array(streamCount).fill().map((_, index) => (
                <Stream key={index} height={containerSize?.height} />
            ))}
        </div>)

}

export { Matrix as default }