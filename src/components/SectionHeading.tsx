export default function SectionHeading({
  id,
  label,
  title,
  subtitle,
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div id={id} className="mb-12">
      <p className="section-heading">// {label}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
