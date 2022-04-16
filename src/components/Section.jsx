export default function Section({ title, className, children }) {
  return (
    <section className={className}>
      <div className="container mx-auto p-8">
        {title && <h2 className="mb-4 text-4xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
