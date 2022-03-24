export default function Section({ className, children }) {
  return <div className={`p-8 container mx-auto ${className}`}>{children}</div>;
}
