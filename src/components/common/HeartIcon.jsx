const HeartIcon = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    aria-hidden="true"
    focusable="false"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      d="M20.8 4.6c-1.7-1.7-4.4-1.7-6.1 0L12 7.3 9.3 4.6C7.6 2.9 4.9 2.9 3.2 4.6c-1.7 1.7-1.7 4.4 0 6.1L12 19.5l8.8-8.8c1.7-1.7 1.7-4.4 0-6.1Z"
      fill={filled ? 'currentColor' : 'none'}
    />
  </svg>
)

export default HeartIcon
