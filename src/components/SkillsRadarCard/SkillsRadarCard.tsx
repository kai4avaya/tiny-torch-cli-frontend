import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import type { SkillsDataPoint } from '../../types';

interface SkillsRadarCardProps {
  data: SkillsDataPoint[];
}

export const SkillsRadarCard = ({ data }: SkillsRadarCardProps) => {
  return (
    <Card className="border-2 border-green-500 text-green-400" style={{ backgroundColor: '#000' }}>
      <CardHeader className="border-b-2 border-green-500" style={{ backgroundColor: '#000' }}>
        <CardTitle className="font-mono flex items-center gap-2">
          <span className="text-green-400">$</span> ./analyze_skills --radar-mode
        </CardTitle>
        <CardDescription className="text-green-600">Skills Assessment Matrix</CardDescription>
      </CardHeader>
      <CardContent className="pt-6" style={{ backgroundColor: '#000' }}>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data} style={{ backgroundColor: '#000' }}>
            <PolarGrid stroke="#166534" />
            <PolarAngleAxis dataKey="skill" stroke="#22c55e" tick={{ fill: '#22c55e' }} />
            <PolarRadiusAxis stroke="#22c55e" angle={90} domain={[0, 100]} tick={{ fill: '#22c55e' }} />
            <Radar name="Skills" dataKey="score" stroke="#22c55e" fill="#22c55e" fillOpacity={0.3} />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
