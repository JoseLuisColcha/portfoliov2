export const SVG = (props) => (
  <svg
    width={1457}
    height={858}
    viewBox="0 0 1457 858"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <foreignObject x={-64} y={-72} width={1585} height={1316}>
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backdropFilter: 'blur(40px)',
        //   clipPath: 'url(#bgblur_0_25_5_clip_path)',
          height: '100%',
          width: '100%',
        }}
      />
    </foreignObject>
    <g filter="url(#filter0_d_25_5)" data-figma-bg-blur-radius={80}>
      <rect
        x={16}
        y={8}
        width={1425}
        height={1156}
        rx={80}
        fill="white"
        fillOpacity={0.08}
      />
      <rect
        x={17}
        y={9}
        width={1423}
        height={1154}
        rx={79}
        stroke="url(#paint0_linear_25_5)"
        strokeOpacity={0.24}
        strokeWidth={2}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_25_5"
        x={-64}
        y={-72}
        width={1585}
        height={1316}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={8} />
        <feGaussianBlur stdDeviation={8} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0.16 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_25_5"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_25_5"
          result="shape"
        />
      </filter>
      {/* <clipPath id="bgblur_0_25_5_clip_path" transform="translate(64 72)">
        <rect x={16} y={8} width={1425} height={1156} rx={80} />
      </clipPath> */}
      <linearGradient
        id="paint0_linear_25_5"
        x1={16}
        y1={8}
        x2={1217.72}
        y2={1362.15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={0.618716} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
