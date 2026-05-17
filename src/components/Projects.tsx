import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ExternalLink, Box, X, FileText } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

// Initialize pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function Projects() {
  const [selectedItem, setSelectedItem] = useState<{src: string, title: string, type: 'video' | 'pdf'} | null>(null);
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Project 1: 4月20日作業 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-indigo-500 overflow-hidden flex flex-col group cursor-pointer"
          onClick={() => setSelectedItem({ src: 'https://www.youtube.com/embed/rp9K6vTPU4w?autoplay=1', title: '4月20日作業', type: 'video' })}
        >
          <div className="p-5 flex flex-col flex-1">
            <p className="text-[10px] text-slate-400 mb-1 font-bold tracking-wider">PROJECT 01</p>
            <h3 className="text-lg font-bold text-slate-800 mb-3">4月20日作業</h3>
            
            <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden mb-4 border border-slate-200 group-hover:shadow-md transition-shadow">
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
          onClick={() => setSelectedItem({ src: 'https://www.youtube.com/embed/DFLaaTi7ghU?autoplay=1', title: '4月3日 AI 模擬旅遊', type: 'video' })}
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

        {/* Project 4: 旅遊企劃 (1) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-rose-500 overflow-hidden flex flex-col group cursor-pointer"
          onClick={() => setSelectedItem({ src: './六天清明連假行程規劃.pdf', title: '六天清明連假行程規劃', type: 'pdf' })}
        >
          <div className="p-5 flex flex-col flex-1">
            <p className="text-[10px] text-slate-400 mb-1 font-bold tracking-wider">PROJECT 04</p>
            <h3 className="text-lg font-bold text-slate-800 mb-3">六天清明連假行程規劃</h3>
            
            <div className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden mb-4 border border-slate-200 group-hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-rose-900/5 flex items-center justify-center group-hover:bg-rose-900/10 transition-colors">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="text-rose-600" size={24} />
              </div>
            </div>
            <div className="absolute top-3 left-3 bg-rose-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm">
              <FileText size={12} className="text-white" /> <span className="text-white font-medium">觀看簡報</span>
            </div>
            <div className="absolute bottom-3 right-3 text-xs font-bold text-slate-400 bg-white/80 px-2 py-1 rounded">PDF</div>
          </div>
          
          <p className="text-slate-500 text-xs flex-1 leading-relaxed">
            藍色主題版：全家四人・南投 ✕ 彰雲 ✕ 台中 ✕ 嘉義 ✕ 台南的深度旅遊規劃簡報。
          </p>
        </div>
        </motion.div>

        {/* Project 5: 旅遊企劃 (2) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-orange-500 overflow-hidden flex flex-col group cursor-pointer"
          onClick={() => setSelectedItem({ src: './2026年六天連假行程規劃.pdf', title: '2026年六天連假行程規劃', type: 'pdf' })}
        >
          <div className="p-5 flex flex-col flex-1">
            <p className="text-[10px] text-slate-400 mb-1 font-bold tracking-wider">PROJECT 05</p>
            <h3 className="text-lg font-bold text-slate-800 mb-3">2026年六天連假行程規劃</h3>
            
            <div className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden mb-4 border border-slate-200 group-hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-orange-900/5 flex items-center justify-center group-hover:bg-orange-900/10 transition-colors">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="text-orange-600" size={24} />
              </div>
            </div>
            <div className="absolute top-3 left-3 bg-orange-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm">
              <FileText size={12} className="text-white" /> <span className="text-white font-medium">觀看簡報</span>
            </div>
            <div className="absolute bottom-3 right-3 text-xs font-bold text-slate-400 bg-white/80 px-2 py-1 rounded">PDF</div>
          </div>
          
          <p className="text-slate-500 text-xs flex-1 leading-relaxed">
            綠色大地主題版：視覺化能量節奏地圖與預算投資解析。尋找高山、慢活與家庭責任的完美平衡。
          </p>
        </div>
        </motion.div>

        {/* Project 6: 旅遊企劃 (3) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-violet-500 overflow-hidden flex flex-col group cursor-pointer"
          onClick={() => setSelectedItem({ src: './清明連假家庭旅遊計畫.pdf', title: '清明連假家庭旅遊計畫', type: 'pdf' })}
        >
          <div className="p-5 flex flex-col flex-1">
            <p className="text-[10px] text-slate-400 mb-1 font-bold tracking-wider">PROJECT 06</p>
            <h3 className="text-lg font-bold text-slate-800 mb-3">清明連假家庭旅遊計畫</h3>
            
            <div className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden mb-4 border border-slate-200 group-hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-violet-900/5 flex items-center justify-center group-hover:bg-violet-900/10 transition-colors">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="text-violet-600" size={24} />
              </div>
            </div>
            <div className="absolute top-3 left-3 bg-violet-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm">
              <FileText size={12} className="text-white" /> <span className="text-white font-medium">觀看簡報</span>
            </div>
            <div className="absolute bottom-3 right-3 text-xs font-bold text-slate-400 bg-white/80 px-2 py-1 rounded">PDF</div>
          </div>
          
          <p className="text-slate-500 text-xs flex-1 leading-relaxed">
            紫色簡約主題版：包含行程總覽與詳細時間軸設計，四天三夜南台灣深度遊。
          </p>
        </div>
        </motion.div>

        {/* Project 7: 旅遊企劃 (4) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 border-t-emerald-500 overflow-hidden flex flex-col group cursor-pointer"
          onClick={() => setSelectedItem({ src: './六天連假行程規劃書.pdf', title: '六天連假行程規劃書', type: 'pdf' })}
        >
          <div className="p-5 flex flex-col flex-1">
            <p className="text-[10px] text-slate-400 mb-1 font-bold tracking-wider">PROJECT 07</p>
            <h3 className="text-lg font-bold text-slate-800 mb-3">六天連假行程規劃書</h3>
            
            <div className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden mb-4 border border-slate-200 group-hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-emerald-900/5 flex items-center justify-center group-hover:bg-emerald-900/10 transition-colors">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="text-emerald-600" size={24} />
              </div>
            </div>
            <div className="absolute top-3 left-3 bg-emerald-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm">
              <FileText size={12} className="text-white" /> <span className="text-white font-medium">觀看簡報</span>
            </div>
            <div className="absolute bottom-3 right-3 text-xs font-bold text-slate-400 bg-white/80 px-2 py-1 rounded">PDF</div>
          </div>
          
          <p className="text-slate-500 text-xs flex-1 leading-relaxed">
            現代簡約主題版：從清境高山到南台灣慢活的家庭之旅，包含詳細的階段劃分。
          </p>
        </div>
        </motion.div>

      </div>

      {/* Item Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative w-full ${selectedItem.type === 'pdf' ? 'max-w-5xl h-[85vh]' : 'max-w-4xl'} bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col`}
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-center pointer-events-none">
                <h4 className="text-white font-bold tracking-wide drop-shadow-md">{selectedItem.title}</h4>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors text-white pointer-events-auto"
                >
                  <X size={20} />
                </button>
              </div>
              
              {selectedItem.type === 'video' ? (
                <div className="aspect-video w-full flex items-center justify-center bg-slate-900">
                  <iframe 
                    className="w-full h-full"
                    src={selectedItem.src}
                    title={selectedItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="flex-1 w-full flex flex-col bg-slate-800 relative overflow-y-auto overflow-x-hidden p-6 custom-scrollbar">
                  <Document
                    file={selectedItem.src}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="flex flex-col items-center gap-6 w-full"
                    loading={
                      <div className="flex flex-col items-center justify-center p-12 text-slate-300 gap-4 mt-12 w-full">
                        <div className="w-12 h-12 border-4 border-slate-600 border-t-emerald-500 rounded-full animate-spin"></div>
                        <p className="font-bold tracking-widest text-sm">載入 PDF 檔案中...</p>
                      </div>
                    }
                    error={
                      <div className="flex flex-col items-center justify-center p-12 text-center text-slate-300 max-w-lg mx-auto bg-slate-900 rounded-xl mt-12 w-full">
                        <FileText size={64} className="text-rose-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2">無法載入 PDF 檔案</h3>
                        <p className="text-slate-400">目前無法顯示此文件，請檢查檔案是否存在或是否損毀。</p>
                      </div>
                    }
                  >
                    {Array.from({ length: numPages || 0 }, (_, index) => (
                      <div className="w-full max-w-full overflow-hidden flex justify-center bg-white rounded-lg p-0">
                        <Page
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                          className="shadow-2xl max-w-full"
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                          width={850}
                        />
                      </div>
                    ))}
                  </Document>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
