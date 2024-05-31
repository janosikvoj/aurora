/*
#fcfcfc=var(--theme-1)
#f9f9f9=var(--theme-2)
#f0f0f0=var(--theme-3)
#e8e8e8=var(--theme-4)
#e0e0e0=var(--theme-5)
#d9d9d9=var(--theme-6)
#cecece=var(--theme-7)
#bbbbbb=var(--theme-8)
#8d8d8d=var(--theme-9)
#838383=var(--theme-10)
#646464=var(--theme-11)
#202020=var(--theme-12)
*/

import { SVGProps } from 'react';

export const GradientIllustrationTheory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 1080 1080"
    {...props}
  >
    <path
      d="M0 0h1080v1080H0z"
      style={{
        fill: 'none',
      }}
    />
    <clipPath id="a">
      <path d="M0 0h1080v1080H0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path
        d="M90 0c49.672 0 90 40.328 90 90v900c0 49.672-40.328 90-90 90s-90-40.328-90-90V90C0 40.328 40.328 0 90 0ZM630 0c49.672 0 90 40.328 90 90v900c0 49.672-40.328 90-90 90s-90-40.328-90-90V90c0-49.672 40.328-90 90-90Z"
        style={{
          fill: 'var(--theme-6)',
        }}
      />
      <path
        d="M810 540h270v540H810V540Z"
        style={{
          fill: 'url(#b)',
        }}
      />
      <path
        d="m810 90 90-90h90l90 90v360l-90 90h-90l-90-90V90Z"
        style={{
          fill: 'url(#c)',
        }}
      />
      <path
        d="M360 0c49.672 0 90 40.328 90 90v900c0 49.672-40.328 90-90 90s-90-40.328-90-90V90c0-49.672 40.328-90 90-90Z"
        style={{
          fill: 'var(--theme-6)',
        }}
      />
      <path
        d="M360 540c49.672 0 90 40.328 90 90v180c0 49.672-40.328 90-90 90s-90-40.328-90-90V630c0-49.672 40.328-90 90-90Z"
        style={{
          fill: 'url(#d)',
        }}
      />
      <path
        d="M90 180c49.672 0 90 40.328 90 90v180c0 49.672-40.328 90-90 90S0 499.672 0 450V270c0-49.672 40.328-90 90-90Z"
        style={{
          fill: 'url(#e)',
        }}
      />
      <path
        d="M630 0c49.672 0 90 40.328 90 90v180c0 49.672-40.328 90-90 90s-90-40.328-90-90V90c0-49.672 40.328-90 90-90Z"
        style={{
          fill: 'url(#f)',
        }}
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(270 0 0 270 810 1080)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-3)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-6)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="c"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(270 0 0 270 810 540)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-8)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-10)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="d"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(180 -360 289.141 144.571 270 900)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-9)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-11)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="e"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(180 -360 292.564 146.282 0 540)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-8)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-10)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="f"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(180 -360 251.49 125.745 540 360)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-7)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-8)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
);

export const GradientIllustrationHarmony = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 1080 1080"
    {...props}
  >
    <path
      d="M0 0h1080v1080H0z"
      style={{
        fill: 'none',
      }}
    />
    <clipPath id="a">
      <path d="M0 0h1080v1080H0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path
        d="M540 540 1080 0H540v540Z"
        style={{
          fill: 'url(#b)',
        }}
      />
      <path
        d="m540 540 540 540V540H540Z"
        style={{
          fill: 'url(#c)',
        }}
      />
      <path
        d="m540 540 540 540H540V540Z"
        style={{
          fill: 'var(--theme-7)',
        }}
      />
      <path
        d="M540 540 0 1080V540h540Z"
        style={{
          fill: 'url(#d)',
        }}
      />
      <path
        d="M540 0v540L158.237 158.237C255.983 60.491 390.983 0 540 0Z"
        style={{
          fill: 'var(--theme-6)',
        }}
      />
      <path
        d="M540 540 1080 0v540H540Z"
        style={{
          fill: 'url(#f)',
        }}
      />
      <path
        d="M540 540 0 1080h540V540Z"
        style={{
          fill: 'url(#g)',
        }}
      />
      <path
        d="M0 540c0-149.017 60.491-284.017 158.237-381.763L540 540H0Z"
        style={{
          fill: 'url(#h)',
        }}
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(-540 540 -810 -810 1080 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-6)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-2)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="c"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(-540 -540 810 -810 1080 1080)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-2)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-4)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="d"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(540 -540 -810 -810 0 1080)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-8)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-9)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="e"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(540 540 810 -810 0 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-11)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-9)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="f"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(-540 540 810 810 1080 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-6)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-4)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="g"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(540 -540 810 810 0 1080)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-6)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-3)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="h"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(540 540 -810 810 0 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-9)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-8)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
);

export const GradientIllustrationPerception = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 1080 1080"
    {...props}
  >
    <path
      d="M0 0h1080v1080H0z"
      style={{
        fill: 'none',
      }}
    />
    <clipPath id="a">
      <path d="M0 0h1080v1080H0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path
        d="M270 0c149.017 0 270 120.983 270 270S419.017 540 270 540 0 419.017 0 270 120.983 0 270 0Zm0 91.275c-98.641 0-178.725 80.084-178.725 178.725 0 98.641 80.084 178.725 178.725 178.725 98.641 0 178.725-80.084 178.725-178.725 0-98.641-80.084-178.725-178.725-178.725Z"
        style={{
          fill: 'var(--theme-4)',
        }}
      />
      <path
        d="m540 90 450 450 90-90L630 0l-90 90Z"
        style={{
          fill: 'url(#c)',
        }}
      />
      <path
        d="M1080 90 630 540l-90-90L990 0l90 90Z"
        style={{
          fill: 'var(--theme-9)',
        }}
      />
      <path
        d="M0 810c0-149.017 60.491-270 135-270s135 120.983 135 270c0-149.017 60.491-270 135-270s135 120.983 135 270l-270 270L0 810Z"
        style={{
          fill: 'url(#e)',
        }}
      />
      <path
        d="M1080 540v540H540V540h540Zm-90 90H630v360h360V630Z"
        style={{
          fill: 'url(#f)',
        }}
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(-540 540 -810 -810 540 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-2)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-7)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="c"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(540 540 -540 540 540 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-8)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-11)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="d"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(540 540 -540 540 540 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-8)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-11)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="e"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(540 540 -540 540 0 540)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-6)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-9)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="f"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="scale(763.75) rotate(45 -.5 1.207)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-8)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-3)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
);

export const GradientIllustrationDesign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 1080 1080"
    {...props}
  >
    <path
      d="M0 0h1080v1080H0z"
      style={{
        fill: 'none',
      }}
    />
    <clipPath id="a">
      <path d="M0 0h1080v1080H0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path
        d="M1080 0 540 1080h540V0Z"
        style={{
          fill: 'url(#b)',
        }}
      />
      <path
        d="M540 270 0 1080h540V270Z"
        style={{
          fill: 'url(#c)',
        }}
      />
      <path
        d="M0 540h1080v540H0z"
        style={{
          fill: 'var(--theme-11)',
        }}
      />
      <path
        d="M0 1080V540h360L0 1080Z"
        style={{
          fill: 'url(#d)',
        }}
      />
      <path
        d="M540 1080V540h270l-270 540Z"
        style={{
          fill: 'url(#e)',
        }}
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="rotate(-90 1080 0) scale(1080)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-3)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-9)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="c"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="rotate(-90 810 270) scale(1080)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-3)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-9)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="d"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(0 -540 540 0 270 1080)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-3)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-6)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="e"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(0 -540 540 0 1350 1080)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-3)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-6)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
);

export const GradientIllustrationAccessibility = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 1080 1080"
    {...props}
  >
    <path
      d="M0 0h1080v1080H0z"
      style={{
        fill: 'none',
      }}
    />
    <clipPath id="a">
      <path d="M0 0h1080v1080H0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path
        d="M1080 360v720H0V0h720l360 360Z"
        style={{
          fill: 'url(#b)',
        }}
      />
      <path
        d="m360 900 630-630 90 90v180l-540 540H180L0 900V540l360 360Z"
        style={{
          fill: 'var(--theme-2)',
        }}
      />
      <path
        d="M900 270c0 49.672-40.328 90-90 90H180c-49.672 0-90-40.328-90-90s40.328-90 90-90h630c49.672 0 90 40.328 90 90Z"
        style={{
          fill: 'var(--theme-8)',
        }}
      />
      <path
        d="M360 540c0 49.672-40.328 90-90 90h-90c-49.672 0-90-40.328-90-90s40.328-90 90-90h90c49.672 0 90 40.328 90 90Z"
        style={{
          fill: 'var(--theme-11)',
        }}
      />
      <path
        d="M990 540c0 49.672-40.328 90-90 90H540c-49.672 0-90-40.328-90-90s40.328-90 90-90h360c49.672 0 90 40.328 90 90Z"
        style={{
          fill: 'var(--theme-6)',
        }}
      />
      <path
        d="M720 0v360h360L720 0Z"
        style={{
          fill: 'url(#c)',
        }}
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(1080 1080 -1080 1080 0 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-5)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-3)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        id="c"
        x1={0}
        x2={1}
        y1={0}
        y2={0}
        gradientTransform="matrix(360 360 -360 360 720 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: 'var(--theme-5)',
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: 'var(--theme-8)',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
);
