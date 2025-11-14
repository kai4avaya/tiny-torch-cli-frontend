import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { PerformanceDataPoint } from '../../types';

interface PerformanceChartCardProps {
  data: PerformanceDataPoint[];
}

export const PerformanceChartCard = ({ data }: PerformanceChartCardProps) => {
  return (
    <Card className="border-2 border-green-500 text-green-400" style={{ backgroundColor: '#000' }}>
      <CardHeader className="border-b-2 border-green-500" style={{ backgroundColor: '#000' }}>
        <CardTitle className="font-mono flex items-center gap-2">
          <span className="text-green-400">$</span> python plot_performance.py --output chart
        </CardTitle>
        <CardDescription className="text-green-600">Monthly Performance Metrics</CardDescription>
      </CardHeader>
      <CardContent className="pt-6" style={{ backgroundColor: '#000' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} style={{ backgroundColor: '#000' }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#166534" />
            <XAxis dataKey="name" stroke="#22c55e" />
            <YAxis stroke="#22c55e" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#000', 
                border: '2px solid #22c55e',
                borderRadius: '4px',
                color: '#22c55e'
              }}
              labelStyle={{ color: '#22c55e' }}
              itemStyle={{ color: '#22c55e' }}
            />
            <Line type="monotone" dataKey="score" stroke="#22c55e" strokeWidth={2} dot={{ fill: '#22c55e', r: 4 }} />
            <Line type="monotone" dataKey="efficiency" stroke="#eab308" strokeWidth={2} dot={{ fill: '#eab308', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
