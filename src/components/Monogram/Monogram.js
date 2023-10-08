import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      ref={ref}
      {...props}
    >
      <defs>
      <clipPath id={clipId}>
  <path d="M45 5.4C37 3 27 2 17 6 6.5 9.5 5 17 9 27c1 3 2 4 3 4 1 0 2-1 3-4 4-10 5-18 16-20 6-1 12 0 17 2v10c0 6-5 10-10 13-2 1-5 2-7 3H20C9 58 2 50 2 40c1-10 8-18 18-20h6c3-1 7-2 9-3 5-3 10-7 10-13V5.4z" />
</clipPath>


      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
