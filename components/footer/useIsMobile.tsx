import { useState, useEffect } from "react";

export function useIsMobile(maxWidth = 1200) {
    const [isMobile, setIsMobile] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < maxWidth);
        };

        checkScreen();
        setHasMounted(true);

        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, [maxWidth]);

    return { isMobile, hasMounted };
}