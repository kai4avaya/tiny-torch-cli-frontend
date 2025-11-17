import { useState, MouseEvent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { NeuralNetworkMilestone } from '../../types';

interface NeuralNetworkTimelineCardProps {
  milestones: NeuralNetworkMilestone[];
}

interface TooltipState {
  visible: boolean;
  text: string;
  x: number;
  y: number;
}

export const NeuralNetworkTimelineCard = ({ milestones }: NeuralNetworkTimelineCardProps) => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    text: '',
    x: 0,
    y: 0,
  });

  const handleMouseEnter = (milestone: NeuralNetworkMilestone, e: MouseEvent<HTMLDivElement>) => {
    setTooltip({
      visible: true,
      text: milestone.description,
      x: e.clientX + 15,
      y: e.clientY - 15,
    });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (tooltip.visible) {
      // Keep tooltip near cursor but prevent it from going off-screen
      const tooltipWidth = 250;
      const tooltipHeight = 60;
      const padding = 10;
      
      let x = e.clientX + 15;
      let y = e.clientY - 15;
      
      // Adjust if tooltip would go off right edge
      if (x + tooltipWidth > window.innerWidth - padding) {
        x = e.clientX - tooltipWidth - 15;
      }
      
      // Adjust if tooltip would go off bottom edge
      if (y + tooltipHeight > window.innerHeight - padding) {
        y = e.clientY - tooltipHeight - 15;
      }
      
      // Adjust if tooltip would go off top edge
      if (y < padding) {
        y = padding;
      }
      
      // Adjust if tooltip would go off left edge
      if (x < padding) {
        x = padding;
      }
      
      setTooltip(prev => ({
        ...prev,
        x,
        y,
      }));
    }
  };

  const handleMouseLeave = () => {
    setTooltip({
      visible: false,
      text: '',
      x: 0,
      y: 0,
    });
  };

  const sortedMilestones = [...milestones].sort((a, b) => a.year - b.year);
  // User has completed up to GPT (the last milestone)
  const completedPosition = sortedMilestones[sortedMilestones.length - 1]?.position || 95;
  const firstPosition = sortedMilestones[0]?.position || 5;
  const lastPosition = sortedMilestones[sortedMilestones.length - 1]?.position || 95;
  const timelineStart = firstPosition;
  const timelineEnd = lastPosition;
  const timelineWidth = timelineEnd - timelineStart;

  // Calculate normalized positions (0-100) within the timeline range
  const getNormalizedPosition = (position: number) => {
    return ((position - timelineStart) / timelineWidth) * 100;
  };

  return (
    <>
      <Card className="border-2 border-green-500 text-green-400" style={{ backgroundColor: '#000' }}>
        <CardHeader className="border-b-2 border-green-500" style={{ backgroundColor: '#000' }}>
          <CardTitle className="font-mono flex items-center gap-2">
            <span className="text-green-400">$</span> cat /var/history/neural_nets.txt
          </CardTitle>
          <CardDescription className="text-green-600">Evolution of Neural Networks</CardDescription>
        </CardHeader>
        <CardContent className="pt-6" style={{ backgroundColor: '#000' }}>
          <div className="relative px-12" onMouseMove={handleMouseMove}>
            {/* Timeline line container - centered with padding */}
            <div className="relative h-32 mb-8">
              {/* Completed path (brighter) */}
              <div 
                className="absolute top-1/2 h-1 bg-green-400 transform -translate-y-1/2"
                style={{
                  left: `${getNormalizedPosition(timelineStart)}%`,
                  width: `${getNormalizedPosition(completedPosition) - getNormalizedPosition(timelineStart)}%`,
                }}
              />
              
              {/* Remaining path (darker) */}
              <div 
                className="absolute top-1/2 h-1 bg-green-700 transform -translate-y-1/2"
                style={{
                  left: `${getNormalizedPosition(completedPosition)}%`,
                  width: `${getNormalizedPosition(timelineEnd) - getNormalizedPosition(completedPosition)}%`,
                }}
              />
              
              {/* Connection lines between nodes */}
              {sortedMilestones.map((milestone, index) => {
                if (index === sortedMilestones.length - 1) return null;
                const currentCompleted = milestone.position <= completedPosition;
                const nextCompleted = sortedMilestones[index + 1].position <= completedPosition;
                const lineCompleted = currentCompleted && nextCompleted;
                const normalizedPosition = getNormalizedPosition(milestone.position);
                const nextPosition = getNormalizedPosition(sortedMilestones[index + 1].position);
                const lineWidth = nextPosition - normalizedPosition;
                
                return (
                  <div
                    key={`line-${milestone.id}`}
                    className={`absolute top-1/2 h-0.5 transform -translate-y-1/2 ${
                      lineCompleted ? 'bg-green-400' : 'bg-green-700'
                    }`}
                    style={{
                      left: `${normalizedPosition}%`,
                      width: `${lineWidth}%`,
                    }}
                  />
                );
              })}
              
              {/* Milestones */}
              {sortedMilestones.map((milestone) => {
                const isCompleted = milestone.position <= completedPosition;
                const normalizedPosition = getNormalizedPosition(milestone.position);
                
                return (
                  <div
                    key={milestone.id}
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer group z-10"
                    style={{ left: `${normalizedPosition}%` }}
                    onMouseEnter={(e) => handleMouseEnter(milestone, e)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Neural Network Node - circular */}
                    <div
                      className={`w-8 h-8 rounded-full border-2 transition-all duration-200 relative ${
                        isCompleted
                          ? 'bg-green-500 border-green-400 shadow-lg shadow-green-500/50'
                          : 'bg-green-700 border-green-600 group-hover:bg-green-600 group-hover:border-green-500'
                      } group-hover:scale-125`}
                    >
                      {/* Inner circle for neural net look */}
                      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${
                        isCompleted ? 'bg-green-300' : 'bg-green-600'
                      }`} />
                    </div>
                    
                    {/* Label */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-center">
                      <div className={`text-xs font-mono ${isCompleted ? 'text-green-300 font-bold' : 'text-green-500'} group-hover:text-green-200`}>
                        {milestone.name}
                      </div>
                      <div className={`text-xs font-mono ${isCompleted ? 'text-green-400' : 'text-green-600'} group-hover:text-green-500`}>
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* "You are here" indicator */}
            <div className="mt-4 pt-4 border-t border-green-700 text-sm text-green-400 font-mono text-center">
              <span className="text-yellow-400">You are here:</span> Building TinyTorch to understand deep learning frameworks from the ground up.
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="fixed z-50 px-3 py-2 bg-green-900 border-2 border-green-500 rounded text-green-100 text-xs font-mono pointer-events-none shadow-lg"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            maxWidth: '250px',
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
};
