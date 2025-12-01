import React from 'react';
import { FileText, UserCheck, Mic, Video, FileBarChart } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Подготовка',
      desc: 'HR создает вакансию на hh.ru и отправляет приглашение на AI-собеседование.'
    },
    {
      icon: UserCheck,
      title: 'Согласие',
      desc: 'Соискатель переходит по ссылке, дает согласие на обработку данных.'
    },
    {
      icon: Mic,
      title: 'Проверка',
      desc: 'Автоматическая проверка камеры и микрофона перед стартом.'
    },
    {
      icon: Video,
      title: 'Интервью',
      desc: 'Цифровой аватар задает вопросы, кандидат отвечает голосом.'
    },
    {
      icon: FileBarChart,
      title: 'Результат',
      desc: 'HR получает видеозапись, текстовую расшифровку и AI-анализ.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как работает <span className="text-brand-red">AiSobes</span></h2>
          <p className="text-xl text-gray-600">Простой и прозрачный путь от вакансии до шорт-листа</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10 w-4/5 mx-auto"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-red transition-all duration-300 z-10">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-brand-red">
                    <step.icon size={32} />
                  </div>
                </div>
                <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center -mr-2 -mt-2 lg:hidden">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};