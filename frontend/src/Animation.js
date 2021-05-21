import { config, useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useState } from "react";

function Animation(props) {
    const [flip, set] = useState(false);
    const { number } = useSpring({
        reset: false,
        // reverse: flip,
        from: { number: 10 },
        number: props.numbering,
        delay: 100,
        config: config.molasses,
        onRest: () => set(!flip),
    });

    return (
        <>
            <animated.div>{number.to((n) => n.toFixed())}</animated.div>
        </>
    );
}
export default Animation;
