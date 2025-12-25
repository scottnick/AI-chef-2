
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'home' | 'camera' | 'profile';
  setActiveTab: (tab: 'home' | 'camera' | 'profile') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen pb-24 relative max-w-lg mx-auto bg-white shadow-xl min-h-screen">
      <main className="p-4 pt-8">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-white border-t border-gray-100 flex justify-around items-center p-3 z-50">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 transition-all ${
            activeTab === 'home' ? 'text-orange-500 scale-110' : 'text-gray-400'
          }`}
        >
          <i className="fa-solid fa-house text-xl"></i>
          <span className="text-[10px] font-medium">首頁</span>
        </button>

        <button
          onClick={() => setActiveTab('camera')}
          className={`relative -top-6 flex flex-col items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white shadow-xl transition-all active:scale-90 ${
            activeTab === 'camera' ? 'ring-4 ring-orange-100' : ''
          }`}
        >
          <i className="fa-solid fa-camera text-2xl"></i>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center gap-1 transition-all ${
            activeTab === 'profile' ? 'text-orange-500 scale-110' : 'text-gray-400'
          }`}
        >
          <i className="fa-solid fa-user text-xl"></i>
          <span className="text-[10px] font-medium">個人</span>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
