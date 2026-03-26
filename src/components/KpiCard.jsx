export default function KpiCard({ label, value }) {
  return (
    <div className="kpi">
      <div className="muted">{label}</div>
      <strong>{value}</strong>
    </div>
  );
}
