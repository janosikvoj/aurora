import { cn } from '@/lib/utils';

interface ArrowStarVector {
  className?: string;
}

const ArrowStarVector: React.FC<ArrowStarVector> = ({ className }) => {
  return (
    <div className={cn('w-full h-full stroke-theme-6 stroke-1', className)}>
      <svg
        height="100%"
        width="100%"
        strokeWidth="inherit"
        viewBox="0 0 1080 1080"
        fill="none"
        stroke="inherit"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_420_167)">
          {/* <path d="M1080 -0L0 1080" />
          <path d="M-0 -0L1080 1080" />
          <path d="M540 -0V1080" />
          <path d="M-0 540L1080 540" />
          <path d="M-0 360L1080 720" />
          <path d="M360 1080L720 -0" />
          <path d="M1080 360L-0 720" />
          <path d="M360 -0L720 1080" />
          <path d="M-0 180L1080 900" />
          <path d="M180 1080L900 -0" />
          <path d="M1080 180L-0 900" />
          <path d="M180 -0L900 1080" /> */}
          <path
            d="M1143.75 -64L-63.75 1144"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M-63.75 -64L1143.75 1144"
            vectorEffect="non-scaling-stroke"
          />
          <path d="M540 -64V1144" vectorEffect="non-scaling-stroke" />
          <path d="M-63.75 540L1143.75 540" vectorEffect="non-scaling-stroke" />
          <path
            d="M-61.6094 378.795L1141.63 701.202"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M378.588 1140.82L700.994 -62.4224"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M1140.61 378.795L-62.6285 701.202"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M378.588 -61.4028L700.995 1141.84"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M-63.9316 191.315L1142.93 888.097"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M191.107 1143.14L887.889 -63.725"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M1142.93 191.315L-63.932 888.097"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M191.107 -63.7241L887.889 1143.14"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_420_167">
            <rect width="1080" height="1080" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ArrowStarVector;
