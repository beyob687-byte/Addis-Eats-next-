export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1
        style={{
          fontSize: '2.25rem',
          fontWeight: 800,
          color: '#1f2937',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        Menu
      </h1>
      {children}
    </div>
  );
}