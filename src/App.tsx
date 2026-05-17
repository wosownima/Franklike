/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Home from './components/Home';
import Projects from './components/Projects';
import { UserCircle, Briefcase } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'projects'>('home');

  return (
    <div className="min-h-screen bg-slate-100 font-sans selection:bg-sky-100 selection:text-sky-900 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo/Name */}
            <div 
              className="flex items-center gap-4 cursor-pointer group" 
              onClick={() => setCurrentView('home')}
            >
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-sky-500/50 shadow-lg shadow-sky-500/20 transition-transform group-hover:scale-105 bg-slate-700 flex items-center justify-center">
                <img 
                  src="./DSC_0788.jpg" 
                  alt="Frank Hsueh" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <span className="hidden text-sky-400 font-bold text-2xl">F</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-white text-xl tracking-tight">
                  薛富淋 <span className="text-sky-400 text-sm ml-1 font-medium italic">Frank</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400">Professional Portfolio</span>
              </div>
            </div>

            {/* Desktop Nav Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentView('home')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentView === 'home' 
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent'
                }`}
              >
                <UserCircle size={18} />
                <span className="hidden sm:inline">主頁 (Profile)</span>
              </button>
              <button
                onClick={() => setCurrentView('projects')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentView === 'projects' 
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent'
                }`}
              >
                <Briefcase size={18} />
                <span className="hidden sm:inline">近期作品 (Works)</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto flex-1 w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <Home key="home" />
          ) : (
            <Projects key="projects" />
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} 薛富淋 (Frank Hsueh). All rights reserved.
          </p>
          <div className="text-[10px] uppercase tracking-widest text-sky-500">
            國立高雄科技大學
          </div>
        </div>
      </footer>
    </div>
  );
}
