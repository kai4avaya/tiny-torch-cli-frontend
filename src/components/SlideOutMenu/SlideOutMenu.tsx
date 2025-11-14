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
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-yellow-900 via-orange-950 to-red-950 border-r-2 border-yellow-600 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8 border-b-2 border-yellow-600 pb-4">
            <h2 className="text-yellow-400 text-xl font-bold">Sitemap</h2>
            <button 
              onClick={onClose}
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
    </>
  );
};
