import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Menu, X } from 'lucide-react';

const TerminalDashboard = () => {
  const [time, setTime] = useState(new Date());
  const [blink, setBlink] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const blinkTimer = setInterval(() => setBlink(prev => !prev), 530);
    return () => {
      clearInterval(timer);
      clearInterval(blinkTimer);
    };
  }, []);

  // Sample data for charts
  const performanceData = [
    { name: 'Jan', score: 65, efficiency: 78 },
    { name: 'Feb', score: 72, efficiency: 82 },
    { name: 'Mar', score: 81, efficiency: 85 },
    { name: 'Apr', score: 85, efficiency: 88 },
    { name: 'May', score: 89, efficiency: 91 },
    { name: 'Jun', score: 94, efficiency: 95 },
  ];

  const leaderboardData = [
    { rank: 1, user: 'tensor_master', points: 9847, streak: 42 },
    { rank: 2, user: 'neural_ninja', points: 9203, streak: 38 },
    { rank: 3, user: 'gradient_guru', points: 8756, streak: 35 },
    { rank: 4, user: 'backprop_boss', points: 8234, streak: 31 },
    { rank: 5, user: 'conv_commander', points: 7891, streak: 28 },
    { rank: 6, user: 'relu_ranger', points: 7456, streak: 25 },
    { rank: 7, user: 'dropout_ace', points: 7012, streak: 22 },
    { rank: 8, user: 'batch_baron', points: 6789, streak: 19 },
  ];

  const skillsData = [
    { skill: 'Tensors', score: 92 },
    { skill: 'Modules', score: 88 },
    { skill: 'Optimization', score: 85 },
    { skill: 'Architecture', score: 90 },
    { skill: 'Debugging', score: 78 },
  ];

  const activityData = [
    { day: 'Mon', commits: 12 },
    { day: 'Tue', commits: 19 },
    { day: 'Wed', commits: 15 },
    { day: 'Thu', commits: 22 },
    { day: 'Fri', commits: 18 },
    { day: 'Sat', commits: 8 },
    { day: 'Sun', commits: 5 },
  ];

  return (
    <div className="min-h-screen bg-black p-4 font-mono relative">
      {/* Hamburger Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
      
      {/* Slide-out Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-yellow-900 via-orange-950 to-red-950 border-r-2 border-yellow-600 transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8 border-b-2 border-yellow-600 pb-4">
            <h2 className="text-yellow-400 text-xl font-bold">Sitemap</h2>
            <button 
              onClick={() => setMenuOpen(false)}
              className="text-yellow-400 hover:text-yellow-300"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="text-yellow-300 text-sm">
            <p className="mb-4">Everything on our website in one place.</p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">├─</span>
                <a href="/" className="hover:text-yellow-100 transition-colors bg-yellow-900 px-2 py-1 rounded border border-yellow-600">
                  Home
                </a>
              </li>
              
              <li className="flex items-start">
                <span className="mr-2">├─</span>
                <div className="flex-1">
                  <a href="/products" className="hover:text-yellow-100 transition-colors bg-yellow-900 px-2 py-1 rounded border border-yellow-600 inline-block mb-2">
                    Typefaces
                  </a>
                  <ul className="ml-6 mt-2">
                    <li className="flex items-start">
                      <span className="mr-2">└─</span>
                      <a href="/products/berkeley-mono" className="hover:text-yellow-100 transition-colors bg-yellow-900 px-2 py-1 rounded border border-yellow-600">
                        Berkeley Mono
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="mr-2">├─</span>
                <a href="/catalog" className="hover:text-yellow-100 transition-colors bg-yellow-900 px-2 py-1 rounded border border-yellow-600">
                  Catalog
                </a>
              </li>
              
              <li className="flex items-start">
                <span className="mr-2">└─</span>
                <a href="/extras" className="hover:text-yellow-100 transition-colors bg-yellow-900 px-2 py-1 rounded border border-yellow-600">
                  Extras!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Terminal Header */}
      <div className="border-2 border-green-500 rounded-lg mb-4 overflow-hidden">
        <div className="bg-green-950 border-b-2 border-green-500 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8 h-8 flex items-center justify-center hover:bg-green-900 rounded transition-colors"
            >
              <Menu size={20} className="text-green-400" />
            </button>
            <span className="text-green-400 ml-2">TinyTorch Dashboard v3.13</span>
          </div>
          <div className="text-green-400 text-sm">
            {time.toLocaleTimeString()} | {time.toLocaleDateString()}
          </div>
        </div>
        
        {/* ASCII Art Banner */}
        <div className="bg-black px-4 py-6 text-center">
          <pre className="text-green-400 text-xs sm:text-sm leading-tight">
{`    ████████╗██╗███╗   ██╗██╗   ██╗████████╗ ██████╗ ██████╗  ██████╗██╗  ██╗
    ╚══██╔══╝██║████╗  ██║╚██╗ ██╔╝╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝██║  ██║
       ██║   ██║██╔██╗ ██║ ╚████╔╝    ██║   ██║   ██║██████╔╝██║     ███████║
       ██║   ██║██║╚██╗██║  ╚██╔╝     ██║   ██║   ██║██╔══██╗██║     ██╔══██║
       ██║   ██║██║ ╚████║   ██║      ██║   ╚██████╔╝██║  ██║╚██████╗██║  ██║
       ╚═╝   ╚═╝╚═╝  ╚═══╝   ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝`}
          </pre>
          <p className="text-green-400 text-sm mt-2">
            🔥 Don't import the future. Build it from tensors up.
          </p>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Leaderboard */}
        <Card className="border-2 border-green-500 text-green-400" style={{ backgroundColor: '#000' }}>
          <CardHeader className="border-b-2 border-green-500" style={{ backgroundColor: '#000' }}>
            <CardTitle className="font-mono flex items-center gap-2">
              <span className="text-green-400">$</span> cat /var/leaderboard/rankings.txt
            </CardTitle>
            <CardDescription className="text-green-600">Top Contributors - Global Rankings</CardDescription>
          </CardHeader>
          <CardContent className="pt-6" style={{ backgroundColor: '#000' }}>
            <div className="space-y-3">
              {leaderboardData.map((user) => (
                <div key={user.rank} className="flex items-center justify-between border border-green-700 p-3 rounded hover:bg-green-950 transition-colors" style={{ backgroundColor: '#000' }}>
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

        {/* Performance Chart */}
        <Card className="border-2 border-green-500 text-green-400" style={{ backgroundColor: '#000' }}>
          <CardHeader className="border-b-2 border-green-500" style={{ backgroundColor: '#000' }}>
            <CardTitle className="font-mono flex items-center gap-2">
              <span className="text-green-400">$</span> python plot_performance.py --output chart
            </CardTitle>
            <CardDescription className="text-green-600">Monthly Performance Metrics</CardDescription>
          </CardHeader>
          <CardContent className="pt-6" style={{ backgroundColor: '#000' }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData} style={{ backgroundColor: '#000' }}>
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

        {/* Skills Radar */}
        <Card className="border-2 border-green-500 text-green-400" style={{ backgroundColor: '#000' }}>
          <CardHeader className="border-b-2 border-green-500" style={{ backgroundColor: '#000' }}>
            <CardTitle className="font-mono flex items-center gap-2">
              <span className="text-green-400">$</span> ./analyze_skills --radar-mode
            </CardTitle>
            <CardDescription className="text-green-600">Skills Assessment Matrix</CardDescription>
          </CardHeader>
          <CardContent className="pt-6" style={{ backgroundColor: '#000' }}>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsData} style={{ backgroundColor: '#000' }}>
                <PolarGrid stroke="#166534" />
                <PolarAngleAxis dataKey="skill" stroke="#22c55e" tick={{ fill: '#22c55e' }} />
                <PolarRadiusAxis stroke="#22c55e" angle={90} domain={[0, 100]} tick={{ fill: '#22c55e' }} />
                <Radar name="Skills" dataKey="score" stroke="#22c55e" fill="#22c55e" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activity Chart */}
        <Card className="border-2 border-green-500 text-green-400" style={{ backgroundColor: '#000' }}>
          <CardHeader className="border-b-2 border-green-500" style={{ backgroundColor: '#000' }}>
            <CardTitle className="font-mono flex items-center gap-2">
              <span className="text-green-400">$</span> git log --graph --stat --week
            </CardTitle>
            <CardDescription className="text-green-600">Weekly Contribution Activity</CardDescription>
          </CardHeader>
          <CardContent className="pt-6" style={{ backgroundColor: '#000' }}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={activityData} style={{ backgroundColor: '#000' }}>
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
      </div>

      {/* Terminal Footer */}
      <div className="mt-4 border-2 border-green-500 rounded-lg p-4 bg-black">
        <div className="flex items-center gap-2 text-green-400">
          <span className="text-green-500">user@tinytorch</span>
          <span className="text-green-600">~</span>
          <span className="text-green-400">$</span>
          <span className={blink ? 'opacity-100' : 'opacity-0'}>▊</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalDashboard;
