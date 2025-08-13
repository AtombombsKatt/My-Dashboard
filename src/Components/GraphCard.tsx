import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface GraphCardProps {
  data: { date: string; weight: number }[];
}

export default function GraphCard({ data }: GraphCardProps) {
  // Ta bara senaste 7 datapunkterna
  const recentData = data.slice(-7);

  return (
    <div className="bg-white p-4 rounded-lg shadow w-64">
      <h3 className="text-lg font-bold mb-2">Senaste vikten</h3>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={recentData}>
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
          <Tooltip />
          <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
