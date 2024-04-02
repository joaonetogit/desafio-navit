import { last12Month } from '@/constants/Results';
import { Bar, BarChart, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';

export default function ChartLastTime() {
  return (
    <BarChart
      width={300}
      height={250}
      data={last12Month}
      margin={{
        left: -15,
      }}
    >
      <XAxis amplitude={30} dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="value"
        fill="#0B62A4"
        activeBar={<Rectangle fill="#0B62A4" stroke="#0B62A4" />}
      />
    </BarChart>
  );
}
