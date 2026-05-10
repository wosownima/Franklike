import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ExternalLink, Box, X } from 'lucide-react';

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<{src: string, title: string} | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto space-y-6 pb-12 w-full"
    >
      <div className="mb-6">
        <h3 className="text-sm font-bold text-slate-400 uppercase flex items-center">
          <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>近期作品 Recent Works
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Project 1: 4月20日作業 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-indigo-500 overflow-hidden flex flex-col group cursor-pointer"
          onClick={() => setSelectedVideo({ src: 'https://www.youtube.com/embed/rp9K6vTPU4w?autoplay=1', title: '4月20日作業' })}
        >
          <div className="p-5 flex flex-col flex-1">
            <p className="text-[10px] text-slate-400 mb-1 font-bold tracking-wider">PROJECT 01</p>
            <h3 className="text-lg font-bold text-slate-800 mb-3">4月20日作業</h3>
            
            <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden mb-4 border border-slate-200 group-hover:shadow-md transition-shadow">
            {/* Thumbnail/Placeholder for the video */}
            <div className="absolute inset-0 bg-indigo-900/10 flex items-center justify-center group-hover:bg-indigo-900/20 transition-colors">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="text-indigo-600 ml-1" size={24} />
              </div>
            </div>
            <div className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm">
              <Play size={12} className="text-white" /> <span className="text-white font-medium">點擊觀看</span>
            </div>
          </div>
          
          <p className="text-slate-500 text-xs flex-1 leading-relaxed">
            課堂作業展示。藉由影片呈現所學之相關技能與成果。點擊此卡片放大觀看影片。
          </p>
        </div>
        </motion.div>

        {/* Project 2: 4月3日AI模擬旅遊 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-sky-500 overflow-hidden flex flex-col group cursor-pointer"
          onClick={() => setSelectedVideo({ src: 'https://www.youtube.com/embed/DFLaaTi7ghU?autoplay=1', title: '4月3日 AI 模擬旅遊' })}
        >
          <div className="p-5 flex flex-col flex-1">
            <p className="text-[10px] text-slate-400 mb-1 font-bold tracking-wider">PROJECT 02</p>
            <h3 className="text-lg font-bold text-slate-800 mb-3">4月3日 AI 模擬旅遊</h3>
            
            <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden mb-4 border border-slate-200 group-hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-sky-900/10 flex items-center justify-center group-hover:bg-sky-900/20 transition-colors">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="text-sky-600 ml-1" size={24} />
              </div>
            </div>
            <div className="absolute top-3 left-3 bg-sky-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm">
              <Play size={12} className="text-white" /> <span className="text-white font-medium">點擊觀看</span>
            </div>
          </div>
          
          <p className="text-slate-500 text-xs flex-1 leading-relaxed">
            使用 AI 技術模擬生成的旅遊紀錄片段，探索人工智慧在視覺創作上的潛力。點擊此卡片放大觀看影片。
          </p>
        </div>
        </motion.div>

        {/* Project 3: 個人公仔 (3D Model) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-emerald-500 overflow-hidden flex flex-col group relative"
        >
          <div className="p-5 flex flex-col flex-1">
            <p className="text-[10px] text-slate-400 mb-1 font-bold tracking-wider">PROJECT 03</p>
            <h3 className="text-lg font-bold text-slate-800 mb-3">個人公仔 3D Model</h3>

            <div className="relative aspect-video bg-emerald-50 rounded-lg border border-emerald-100 overflow-hidden flex items-center justify-center mb-4">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4f46e5 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-emerald-500 drop-shadow-md"
            >
              <Box size={48} strokeWidth={1.5} />
            </motion.div>
            <div className="absolute top-2 right-2 bg-white/80 backdrop-blur text-emerald-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-emerald-200 shadow-sm">
              3D Model
            </div>
          </div>
          
          <p className="text-slate-500 text-xs mb-4 flex-1 leading-relaxed">
            使用 Tripo3D 平台建立的個人 3D 模擬公仔模型。點擊下方按鈕即可在瀏覽器中進行 360 度互動檢視。
          </p>
          <a 
            href="https://studio.tripo3d.ai/3d-model/f708357d-f836-40b8-a9af-d2c7d095e6f3?invite_code=VJPX94" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 border border-emerald-200"
          >
            <ExternalLink size={14} />
            View Tripo3D
          </a>
        </div>
        </motion.div>

      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-center pointer-events-none">
                <h4 className="text-white font-bold tracking-wide drop-shadow-md">{selectedVideo.title}</h4>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors text-white pointer-events-auto"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="aspect-video w-full flex items-center justify-center bg-slate-900">
                <iframe 
                  className="w-full h-full"
                  src={selectedVideo.src}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
