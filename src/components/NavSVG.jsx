export const NavSVG = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 2121 207"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x="-50" y="-50" width="2221" height="307">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: 'blur(25px)',
            clipPath: 'url(#a)',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </foreignObject>

      <g filter="url(#b)">
        <path d="M2029.5 2H2V137L90.5 205H2119V74L2029.5 2Z" fill="url(#c)" />
        <path
          d="M2120 206H90.1602L89.8906 205.793L1.39062 137.793L1 137.493V1H2029.85L2030.13 1.2207L2119.63 73.2207L2120 73.5215V206Z"
          stroke="url(#d)"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="b"
          x="-50"
          y="-50"
          width="2221"
          height="307"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" />
          <feBlend in="SourceGraphic" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="50" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.258333 0 0 0 0 0.258333 0 0 0 0 0.258333 0 0 0 0.1 0" />
          <feBlend in2="shape" result="e" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="50" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend in2="e" />
        </filter>

        <clipPath id="a" transform="translate(50 50)">
          <path d="M2029.5 2H2V137L90.5 205H2119V74L2029.5 2Z" />
        </clipPath>

        <linearGradient
          id="c"
          x1="2073.47"
          y1="2.00001"
          x2="1934.38"
          y2="639.728"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0000" stopOpacity="0.17" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="d"
          x1="2067.78"
          y1="2.00001"
          x2="1921.03"
          y2="656.333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FF5656" />
        </linearGradient>
      </defs>
    </svg>
  )
}
