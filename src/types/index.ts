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

export interface NeuralNetworkMilestone {
  id: string;
  name: string;
  year: number;
  description: string;
  position: number; // 0-100 for timeline position
}
