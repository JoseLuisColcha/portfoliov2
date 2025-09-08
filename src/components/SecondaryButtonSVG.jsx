export const SecondaryButtonSVG = () => {
  return (
    <a
      href="/docs/José_Luis_Colcha_CV.pdf"
      download="José_Luis_Colcha_CV.pdf"
      className="flex justify-center sm:justify-start"
    >
      <div className="relative h-12 w-32 sm:h-14 sm:w-36">
        <span className="font-inter text-xs sm:text-sm text-white absolute inset-0 flex items-center justify-center">
          DESCARGAR CV
        </span>

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 554 207"
          fill="none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <foreignObject x="-50" y="-50" width="654" height="307">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                backdropFilter: 'blur(25px)',
                clipPath: 'url(#a1)',
                height: '100%',
                width: '100%',
              }}
            ></div>
          </foreignObject>
          <g filter="url(#b1)">
            <path
              d="M462.915 2H2V137L95.5111 205H552V74L462.915 2Z"
              fill="url(#c1)"
            />
            <path
              d="M553 206H95.1855L94.9229 205.809L1.41211 137.809L1 137.509V1H463.27L463.544 1.22266L552.629 73.2227L553 73.5225V206Z"
              stroke="url(#d1)"
              strokeWidth="2"
            />
          </g>
          <defs>
            <filter
              id="b1"
              x="-50"
              y="-50"
              width="654"
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
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix values="0 0 0 0 0.258333 0 0 0 0 0.258333 0 0 0 0 0.258333 0 0 0 0.1 0" />
              <feBlend in2="shape" result="e1" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-2" dy="-2" />
              <feGaussianBlur stdDeviation="50" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
              <feBlend in2="e1" />
            </filter>
            <clipPath id="a1" transform="translate(50 50)">
              <path d="M462.915 2H2V137L95.5111 205H552V74L462.915 2Z" />
            </clipPath>
            <linearGradient
              id="c1"
              x1="540.172"
              y1="2.00001"
              x2="211.185"
              y2="393.873"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF0000" stopOpacity="0.17" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="d1"
              x1="538.694"
              y1="2.00001"
              x2="198.749"
              y2="395.777"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#FF5656" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </a>
  )
}
