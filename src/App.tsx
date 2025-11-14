import { useState } from 'react';
import { TerminalHeader } from './components/TerminalHeader/TerminalHeader';
import { SlideOutMenu } from './components/SlideOutMenu/SlideOutMenu';
import { LeaderboardCard } from './components/LeaderboardCard/LeaderboardCard';
import { PerformanceChartCard } from './components/PerformanceChartCard/PerformanceChartCard';
import { SkillsRadarCard } from './components/SkillsRadarCard/SkillsRadarCard';
import { ActivityChartCard } from './components/ActivityChartCard/ActivityChartCard';
import { NeuralNetworkTimelineCard } from './components/NeuralNetworkTimelineCard/NeuralNetworkTimelineCard';
import { TerminalFooter } from './components/TerminalFooter/TerminalFooter';
import { useBlink } from './hooks/useBlink';
import { leaderboardData, performanceData, skillsData, activityData, neuralNetworkTimeline } from './data/mockData';

const TerminalDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const blink = useBlink();

  return (
    <div className="min-h-screen bg-black p-4 font-mono relative">
      <SlideOutMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <TerminalHeader onMenuToggle={() => setMenuOpen(!menuOpen)} />

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <LeaderboardCard data={leaderboardData} blink={blink} />
        <PerformanceChartCard data={performanceData} />
        <SkillsRadarCard data={skillsData} />
        <ActivityChartCard data={activityData} />
      </div>

      {/* Neural Network Timeline */}
      <div className="mt-4">
        <NeuralNetworkTimelineCard milestones={neuralNetworkTimeline} />
      </div>

      <TerminalFooter blink={blink} />
    </div>
  );
};

export default TerminalDashboard;
