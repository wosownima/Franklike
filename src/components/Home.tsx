import { motion } from 'motion/react';
import { 
  User, 
  MapPin, 
  Droplet, 
  Languages, 
  Monitor, 
  Award, 
  Anchor,
  Star
} from 'lucide-react';

export default function Home() {
  const certifications = [
    "基本安全", "保全職責", "保全意識", "救生艇操縱", 
    "進階滅火", "醫療急救", "管理級雷達ARPA", 
    "操作級雷達ARPA", "通用級GMDSS訓練", "助理級航行當值"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto space-y-8 pb-12"
    >
      {/* Hero Section */}
      <div className="bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800 overflow-hidden flex flex-col p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-slate-700 flex items-center justify-center border-2 border-sky-500/50 shadow-lg shadow-sky-500/20 overflow-hidden shrink-0">
              <img 
                src="./DSC_0788.jpg" 
                alt="Frank Hsueh" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display = 'block';
                  }
                }}
              />
              <span className="hidden text-5xl font-bold text-sky-400">F</span>
            </div>
            <div className="space-y-3 text-center sm:text-left sm:mt-2">
              <h1 className="text-3xl font-bold flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-3">
                薛富淋
                <span className="text-xl text-sky-400 font-medium">Frank Hsueh</span>
              </h1>
              <p className="text-slate-400 flex flex-col sm:flex-row items-center gap-2">
                <MapPin size={16} className="text-sky-500 hidden sm:block" /> 
                <span>國立高雄科技大學 航海相關科系</span>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <div className="flex justify-between md:justify-end gap-8 border-b border-slate-800 pb-2">
              <span className="uppercase tracking-widest text-[10px]">星座 Zodiac</span>
              <span className="text-white font-medium flex items-center gap-1">雙子座 Gemini</span>
            </div>
            <div className="flex justify-between md:justify-end gap-8 border-b border-slate-800 pb-2">
              <span className="uppercase tracking-widest text-[10px]">血型 Blood Type</span>
              <span className="text-white font-medium flex items-center gap-1">A 型</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: About & Skills */}
        <div className="md:col-span-2 space-y-8">
          
          {/* Autobiography */}
          <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center">
              <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>About Me / 自傳
            </h3>
            <div className="prose prose-sm max-w-none text-slate-600 leading-relaxed space-y-4">
              <p>
                我是薛富淋，就讀於國立高雄科技大學。家庭教育培養我獨立負責與謹慎的態度。在校期間，我參與系學會擔任文書股長，從中讓我學到如何有效的完成文書作業，並對 Excel、Word、PowerPoint 等相關軟體熟悉。
              </p>
              <p>
                我也擔任班級的學務股長、副班代等，負責班上的訂書及班費管理等作業，從中訓練我做事謹慎、條理分明、重視細節的習慣。
              </p>
              <p>
                我認為自己是個樂觀進取、抗壓性強的人。航海這份職業吸引我的是薪資待遇和增加國際觀，我希望能將在校所學的專業知識與英文能力應用於此，並為公司帶來貢獻。
              </p>
            </div>
          </section>

          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>語言能力 Language
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-slate-700 font-semibold text-sm">English (TOEIC)</span>
                  <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-bold">430 pts</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-700 font-semibold text-sm">台語 Taiwanese</span>
                  <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-medium">尚可</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>電腦技能 Software
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Microsoft Office', 'Word', 'Excel', 'PowerPoint'].map(skill => (
                  <span key={skill} className="bg-slate-100 text-slate-700 border border-transparent px-3 py-1.5 rounded text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

        </div>

        {/* Right Column: Certifications */}
        <div className="space-y-6">
          <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-full">
            <h3 className="text-sm font-bold text-slate-400 uppercase mb-4 flex items-center">
              <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>取得證照 Certificates
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex flex-col p-3 bg-slate-50 border border-slate-100 rounded-lg text-xs hover:border-slate-200 transition-colors">
                  <span className="font-bold text-slate-700">{cert}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">Maritime Certification</span>
                </div>
              ))}
              <div className="p-3 bg-sky-50 border border-sky-100 rounded-lg text-xs flex items-center justify-center mt-2">
                <p className="text-sky-600 font-bold italic">Certified Professional</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
