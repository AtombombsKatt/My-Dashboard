type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function DashboardCard({ title, children }: CardProps) {
  return (
    <div className="bg-white p-4 rounded shadow max-h-72 space-y-4">
      <h2 className="text-lg text-black font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}
