import * as React from "react";

export const Loader = () => {
    return(
        <svg id="Layer_1" data-name="Layer 1"  viewBox="0 0 94.1 94.1">
            <defs>
                <style>{".cls-1{fill:url(#linear-gradient);}.cls-2{fill:#21409a;}.cls-3{fill:#39b54a;}"}</style>
                <linearGradient id="linear-gradient" x1="47.05" y1="-260.26" x2="47.05" y2="-166.16"
                                gradientTransform="matrix(1, 0, 0, -1, 0, -166.16)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#39b54a"/>
                    <stop offset="1" stopColor="#21409a"/>
                </linearGradient>
            </defs>
            <path className="cls-1"
                  d="M94.1,47.05a47.05,47.05,0,1,1-47-47A47,47,0,0,1,94.1,47.05ZM47,8.45A38.69,38.69,0,1,0,85.73,47.14,38.69,38.69,0,0,0,47,8.45Z">
                <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 47.05 47.10"
                                  to="360 47.05 47.10" dur="1s" additive="sum" repeatCount="indefinite"/>
            </path>
            <path className="cls-2"
                  d="M66.62,24.83c7.73.84,6.38,8.53,6.38,8.53L66.14,51.3H30l-3.43,9.25C19,59.59,21,52.38,21,52.38L31.38,24.67ZM36.71,33.5l-3.57,9.29H60.65l2.51-6.45a2.52,2.52,0,0,0-1.93-2.84Z"/>
            <path className="cls-3" d="M26.8,61S24.74,68,32.05,69.6H60.68s2.06-7.13-5.25-8.52Z"/>
        </svg>
    )
}
