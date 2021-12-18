import styles from './logo.module.scss';

export interface LogoProps {
  width: number;
  height: number;
}

export default function Logo(props: LogoProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 56 54"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="22.4"
        y="3.05176e-05"
        width="11.2"
        height="53.5651"
        fill="white"
      />
      <path
        d="M22.4 10.713L22.4 1.71661e-05L55.9999 1.76048e-05L45.7739 10.713L22.4 10.713Z"
        fill="white"
      />
      <path
        className={styles.logo__animation}
        d="M10.2261 10.713L6.81963e-05 -4.58361e-05L20.4522 -4.57764e-05L20.4522 10.713L10.2261 10.713Z"
      />
      <path
        d="M45.7739 42.8521L56 53.5651L35.5479 53.5651L35.5479 42.8521L45.7739 42.8521Z"
        fill="white"
      />
    </svg>
  );
}
