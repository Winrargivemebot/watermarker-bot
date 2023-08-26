const WATERMARK_SVG = `
    <svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
        <text font-family="Arial, Helvetica, sans-serif" y="50%" font-size="60" fill="white" stroke="black" stroke-width="3" font-weight="bold">
            <tspan dy="0" text-anchor="end" x="50%">$LAIN</tspan>
        </text>
        <circle cx="425" cy="125" r="40" fill="none" stroke="blue" stroke-width="4">
            <animate attributeName="r" from="40" to="45" dur="0.5s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="0s" repeatCount="indefinite" />
        </circle>
        <image x="300" y="0" width="150" height="150" href="https://i.ibb.co/y4XRkbg/photo-2023-08-26-08-11-07.jpg">
            <animate attributeName="opacity" from="1" to="0.5" dur="0.5s" begin="0s" repeatCount="indefinite" />
        </image>
    </svg>
`;

export default { WATERMARK_SVG };
