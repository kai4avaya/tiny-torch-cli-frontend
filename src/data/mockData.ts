import type { LeaderboardUser, PerformanceDataPoint, SkillsDataPoint, ActivityDataPoint, NeuralNetworkMilestone } from '../types';

export const performanceData: PerformanceDataPoint[] = [
  { name: 'Jan', score: 65, efficiency: 78 },
  { name: 'Feb', score: 72, efficiency: 82 },
  { name: 'Mar', score: 81, efficiency: 85 },
  { name: 'Apr', score: 85, efficiency: 88 },
  { name: 'May', score: 89, efficiency: 91 },
  { name: 'Jun', score: 94, efficiency: 95 },
];

export const leaderboardData: LeaderboardUser[] = [
  { rank: 1, user: 'tensor_master', points: 9847, streak: 42 },
  { rank: 2, user: 'neural_ninja', points: 9203, streak: 38 },
  { rank: 3, user: 'gradient_guru', points: 8756, streak: 35 },
  { rank: 4, user: 'backprop_boss', points: 8234, streak: 31 },
  { rank: 5, user: 'conv_commander', points: 7891, streak: 28 },
  { rank: 6, user: 'relu_ranger', points: 7456, streak: 25 },
  { rank: 7, user: 'dropout_ace', points: 7012, streak: 22 },
  { rank: 8, user: 'batch_baron', points: 6789, streak: 19 },
];

export const skillsData: SkillsDataPoint[] = [
  { skill: 'Tensors', score: 92 },
  { skill: 'Modules', score: 88 },
  { skill: 'Optimization', score: 85 },
  { skill: 'Architecture', score: 90 },
  { skill: 'Debugging', score: 78 },
];

export const activityData: ActivityDataPoint[] = [
  { day: 'Mon', commits: 12 },
  { day: 'Tue', commits: 19 },
  { day: 'Wed', commits: 15 },
  { day: 'Thu', commits: 22 },
  { day: 'Fri', commits: 18 },
  { day: 'Sat', commits: 8 },
  { day: 'Sun', commits: 5 },
];

export const neuralNetworkTimeline: NeuralNetworkMilestone[] = [
  {
    id: 'perceptron',
    name: 'Perceptron',
    year: 1957,
    description: 'Single-layer binary classifier that learns weights through iterative updates.',
    position: 5,
  },
  {
    id: 'rnn',
    name: 'RNN',
    year: 1980,
    description: 'Recurrent connections allow networks to process sequences by maintaining hidden state.',
    position: 20,
  },
  {
    id: 'backprop',
    name: 'Backpropagation',
    year: 1986,
    description: 'Algorithm for training multi-layer networks by propagating errors backward through layers.',
    position: 30,
  },
  {
    id: 'lstm',
    name: 'LSTM',
    year: 1997,
    description: 'Gated memory cells selectively remember or forget information over long sequences.',
    position: 45,
  },
  {
    id: 'cnn',
    name: 'CNN (AlexNet)',
    year: 2012,
    description: 'Convolutional layers extract spatial features using shared weights and pooling operations.',
    position: 60,
  },
  {
    id: 'transformer',
    name: 'Transformer',
    year: 2017,
    description: 'Self-attention mechanism processes all positions in parallel without recurrence.',
    position: 80,
  },
  {
    id: 'gpt',
    name: 'GPT',
    year: 2018,
    description: 'Generative pre-trained transformer uses decoder-only architecture for language modeling.',
    position: 95,
  },
];
