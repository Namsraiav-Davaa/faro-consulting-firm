import { Typography, TypographyProps } from "@mui/material";
import "./animated.css";
import { useEffect, useState } from "react";

export function AnimatedText(props: TypographyProps & { isActive?: boolean }) {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const { isActive } = props;
    useEffect(() => {
        setTimeout(() => {
            setShouldAnimate(isActive === undefined ? true : isActive); // Trigger animation after the component is mounted
        }, 500);
    }, [isActive]);

    console.log("shouldAnimate :>> ", shouldAnimate);

    return (
        <Typography
            {...props}
            className={`${"text-animation"} ${
                shouldAnimate ? "animate" : "back"
            } ${props.className}`}
        >
            {props.children}
        </Typography>
    );
}
