export default function SectionTitle({ title, description, action }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
      <div>
        <h2 style={{ margin: '0 0 6px' }}>{title}</h2>
        {description ? <div className="muted">{description}</div> : null}
      </div>
      {action}
    </div>
  );
}
