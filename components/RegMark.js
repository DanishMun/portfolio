// A printer's registration mark: the small circle-and-cross that printers
// use to line up colours. A quiet nod to my print and logo background.
export default function RegMark({ className = "" }) {
  return (
    <svg className={`regmark ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="6" />
      <path d="M12 0v24M0 12h24" />
    </svg>
  );
}
