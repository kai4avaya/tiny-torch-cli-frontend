import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { LeaderboardUser } from '../../types';

interface LeaderboardCardProps {
  data: LeaderboardUser[];
  blink: boolean;
}

export const LeaderboardCard = ({ data, blink }: LeaderboardCardProps) => {
  return (
    <Card className="border-2 border-green-500 text-green-400" style={{ backgroundColor: '#000' }}>
      <CardHeader className="border-b-2 border-green-500" style={{ backgroundColor: '#000' }}>
        <CardTitle className="font-mono flex items-center gap-2">
          <span className="text-green-400">$</span> cat /var/leaderboard/rankings.txt
        </CardTitle>
        <CardDescription className="text-green-600">Top Contributors - Global Rankings</CardDescription>
      </CardHeader>
      <CardContent className="pt-6" style={{ backgroundColor: '#000' }}>
        <div className="space-y-3">
          {data.map((user) => (
            <div 
              key={user.rank} 
              className="flex items-center justify-between border border-green-700 p-3 rounded hover:bg-green-950 transition-colors" 
              style={{ backgroundColor: '#000' }}
            >
              <div className="flex items-center gap-4">
                <span className={`font-bold ${user.rank <= 3 ? 'text-yellow-400' : 'text-green-400'}`}>
                  #{user.rank}
                </span>
                <span className="text-green-300">{user.user}</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <span className="text-green-500">{user.points} pts</span>
                <span className="text-yellow-500">🔥 {user.streak}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-green-700 text-sm text-green-600">
          <span className={blink ? 'opacity-100' : 'opacity-0'}>▊</span> Live updating...
        </div>
      </CardContent>
    </Card>
  );
};
