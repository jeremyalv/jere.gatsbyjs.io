import { useState, useEffect } from 'react';



const useWindowDimensions = () => {
    const hasWindow = typeof window !== 'undefined';

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
    
        return {
            width,
            height
        };
    };

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            const handleResize = () => {
                setWindowDimensions(getWindowDimensions());
                // console.log(`window height: ${windowDimensions.height}`)
            };

            window.addEventListener('resize', handleResize);

            // Cleanup function exactly before the next component update
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    return windowDimensions;
};

export default useWindowDimensions;