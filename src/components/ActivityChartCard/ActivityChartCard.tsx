import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { ActivityDataPoint } from '../../types';

interface ActivityChartCardProps {
  data: ActivityDataPoint[];
}

export const ActivityChartCard = ({ data }: ActivityChartCardProps) => {
  return (
    <Card className="border-2 border-green-500 text-green-400" style={{ backgroundColor: '#000' }}>
      <CardHeader className="border-b-2 border-green-500" style={{ backgroundColor: '#000' }}>
        <CardTitle className="font-mono flex items-center gap-2">
          <span className="text-green-400">$</span> git log --graph --stat --week
        </CardTitle>
        <CardDescription className="text-green-600">Weekly Contribution Activity</CardDescription>
      </CardHeader>
      <CardContent className="pt-6" style={{ backgroundColor: '#000' }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} style={{ backgroundColor: '#000' }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#166534" />
            <XAxis dataKey="day" stroke="#22c55e" />
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
            <Bar dataKey="commits" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
