export interface LeaderboardUser {
  rank: number;
  user: string;
  points: number;
  streak: number;
}

export interface PerformanceDataPoint {
  name: string;
  score: number;
  efficiency: number;
}

export interface SkillsDataPoint {
  skill: string;
  score: number;
}

export interface ActivityDataPoint {
  day: string;
  commits: number;
}
