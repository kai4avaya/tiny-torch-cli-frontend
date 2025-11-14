import { Menu } from 'lucide-react';
import { useClock } from '../../hooks/useClock';

interface TerminalHeaderProps {
  onMenuToggle: () => void;
}

const ASCII_ART = `    ████████╗██╗███╗   ██╗██╗   ██╗████████╗ ██████╗ ██████╗  ██████╗██╗  ██╗
    ╚══██╔══╝██║████╗  ██║╚██╗ ██╔╝╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝██║  ██║
       ██║   ██║██╔██╗ ██║ ╚████╔╝    ██║   ██║   ██║██████╔╝██║     ███████║
       ██║   ██║██║╚██╗██║  ╚██╔╝     ██║   ██║   ██║██╔══██╗██║     ██╔══██║
       ██║   ██║██║ ╚████║   ██║      ██║   ╚██████╔╝██║  ██║╚██████╗██║  ██║
       ╚═╝   ╚═╝╚═╝  ╚═══╝   ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝`;

export const TerminalHeader = ({ onMenuToggle }: TerminalHeaderProps) => {
  const time = useClock();

  return (
    <div className="border-2 border-green-500 rounded-lg mb-4 overflow-hidden">
      <div className="bg-green-950 border-b-2 border-green-500 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button 
            onClick={onMenuToggle}
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
          {ASCII_ART}
        </pre>
        <p className="text-green-400 text-sm mt-2">
          🔥 Don't import the future. Build it from tensors up.
        </p>
      </div>
    </div>
  );
};
