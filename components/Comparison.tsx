import React from 'react';
import { Check, X } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* USP Banner */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 text-center mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-orange-500"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-4xl mx-auto leading-relaxed">
            «Мы не просто анализируем резюме — мы <span className="text-brand-red">генерируем новые данные</span> из живого диалога»
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[768px] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-50 p-6 border-b border-gray-200">
              <div className="col-span-1 font-bold text-gray-500 uppercase text-xs tracking-wider flex items-end pb-2">Функционал</div>
              <div className="col-span-1 text-center pb-2">
                <div className="text-xl font-bold text-brand-red">AiSobes</div>
              </div>
              <div className="col-span-1 text-center font-bold text-gray-700 flex items-end justify-center pb-2">Хантфлоу</div>
              <div className="col-span-1 text-center font-bold text-gray-700 flex items-end justify-center pb-2">Experium</div>
            </div>

            {[
              { name: "Цифровой аватар-интервьюер", aisobes: true, huntflow: false, experium: false },
              { name: "Анализ видео и эмоций", aisobes: true, huntflow: false, experium: false },
              { name: "Генерация новых данных", aisobes: true, huntflow: false, experium: false },
              { name: "Автоматический скрининг", aisobes: true, huntflow: true, experium: true },
              { name: "Интеграция с hh.ru", aisobes: true, huntflow: true, experium: true },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-4 p-6 items-center ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                <div className="col-span-1 font-medium text-gray-900">{row.name}</div>
                <div className="col-span-1 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-brand-red">
                    <Check size={20} strokeWidth={3} />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center">
                  {row.huntflow ? (
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                      <Check size={20} />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                      <X size={20} />
                    </div>
                  )}
                </div>
                <div className="col-span-1 flex justify-center">
                  {row.experium ? (
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                      <Check size={20} />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                      <X size={20} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
