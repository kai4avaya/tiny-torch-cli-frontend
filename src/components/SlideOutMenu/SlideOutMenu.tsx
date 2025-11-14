import { X } from 'lucide-react';

interface SlideOutMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SlideOutMenu = ({ isOpen, onClose }: SlideOutMenuProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Slide-out Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-green-950 border-r-2 border-green-500 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8 border-b-2 border-green-500 pb-4">
            <h2 className="text-green-400 text-xl font-bold font-mono">Sitemap</h2>
            <button 
              onClick={onClose}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="text-green-100 text-sm font-mono">
            <p className="mb-4 text-green-300">Navigate the TinyTorch learning platform.</p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-green-500">├─</span>
                <a 
                  href="/" 
                  className="hover:bg-green-800 hover:text-white hover:border-green-400 transition-all duration-200 bg-green-900/50 px-2 py-1 rounded border border-green-600 text-green-100"
                >
                  Home
                </a>
              </li>
              
              <li className="flex items-start">
                <span className="mr-2 text-green-500">├─</span>
                <div className="flex-1">
                  <a 
                    href="/learn" 
                    className="hover:bg-green-800 hover:text-white hover:border-green-400 transition-all duration-200 bg-green-900/50 px-2 py-1 rounded border border-green-600 text-green-100 inline-block mb-2"
                  >
                    Learn AI
                  </a>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">├─</span>
                      <a 
                        href="/learn/tensors" 
                        className="hover:bg-green-800 hover:text-white hover:border-green-400 transition-all duration-200 bg-green-900/50 px-2 py-1 rounded border border-green-600 text-green-100"
                      >
                        Building Tensors
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">├─</span>
                      <a 
                        href="/learn/modules" 
                        className="hover:bg-green-800 hover:text-white hover:border-green-400 transition-all duration-200 bg-green-900/50 px-2 py-1 rounded border border-green-600 text-green-100"
                      >
                        Neural Modules
                      </a>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">└─</span>
                      <a 
                        href="/learn/optimization" 
                        className="hover:bg-green-800 hover:text-white hover:border-green-400 transition-all duration-200 bg-green-900/50 px-2 py-1 rounded border border-green-600 text-green-100"
                      >
                        Optimization
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="mr-2 text-green-500">├─</span>
                <a 
                  href="/projects" 
                  className="hover:bg-green-800 hover:text-white hover:border-green-400 transition-all duration-200 bg-green-900/50 px-2 py-1 rounded border border-green-600 text-green-100"
                >
                  Projects
                </a>
              </li>
              
              <li className="flex items-start">
                <span className="mr-2 text-green-500">├─</span>
                <a 
                  href="https://neural-net-pacman.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-green-800 hover:text-white hover:border-green-400 transition-all duration-200 bg-green-900/50 px-2 py-1 rounded border border-green-600 text-green-100"
                >
                  Neural Pacman
                </a>
              </li>
              
              <li className="flex items-start">
                <span className="mr-2 text-green-500">└─</span>
                <a 
                  href="/community" 
                  className="hover:bg-green-800 hover:text-white hover:border-green-400 transition-all duration-200 bg-green-900/50 px-2 py-1 rounded border border-green-600 text-green-100"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
