import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export type DataDTO = {
  name: string;
  temp: number;
}[];

export const TemperatureChart = ({ data }: { data: DataDTO }) => {
  return (
    <ResponsiveContainer width="100%" height={157} style={{ fontSize: "11px" }}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7947F7" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#4CDFE8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="1" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7947F7" stopOpacity={1} />
            <stop offset="95%" stopColor="#4CDFE8" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid 
        strokeDasharray="3 3" 
        stroke={'var(--theme-surface-400)'}
        vertical={false} />
        <XAxis
          dataKey="name"
          tickMargin={15}
          tickLine={false}
          axisLine={false}
          stroke={'var(--theme-surface-800)'}
        />
        <YAxis
          domain={["auto", "auto"]}
          axisLine={false}
          tickMargin={15}
          stroke={'var(--theme-surface-800)'}
          tickLine={false}
          unit="°c"
        />

        <Tooltip />
        <Area
          fill="url(#colorUv)"
          type="monotone"
          dataKey="temp"
          stroke="url(#colorPv)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
