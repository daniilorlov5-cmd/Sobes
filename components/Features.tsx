import React from 'react';
import { Bot, FileText, Settings, Briefcase, Building2 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="product" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Features Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Функционал платформы</h2>
          <p className="text-xl text-gray-400">Комплексное решение для автоматизации найма</p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Bot,
              title: "Голосовой аватар",
              desc: "Дружелюбный цифровой интервьюер проводит собеседования 24/7, создавая комфортную атмосферу для кандидата."
            },
            {
              icon: FileText,
              title: "AI Анализ и Отчеты",
              desc: "Мгновенная расшифровка диалога, анализ эмоций и оценка компетенций с формированием итогового саммари."
            },
            {
              icon: Settings,
              title: "Кастомизация",
              desc: "Гибкая настройка сценариев интервью под любую вакансию. Вы сами определяете критерии отбора."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Target Audience */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Для кого мы создали <span className="text-brand-red">AiSobes</span>?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-gray-700/80 backdrop-blur-sm p-3 rounded-lg h-fit">
                    <Building2 className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Крупные компании</h4>
                    <p className="text-gray-400 text-sm">С массовым наймом сотрудников, где важно быстро обрабатывать сотни откликов.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-gray-700/80 backdrop-blur-sm p-3 rounded-lg h-fit">
                    <Briefcase className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">HR-агентства</h4>
                    <p className="text-gray-400 text-sm">Которым необходимо оптимизировать ресурсы рекрутеров и повысить пропускную способность.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 100+ Interviews Card with Background */}
            <div className="relative h-64 md:h-full rounded-xl overflow-hidden flex items-center justify-center border border-gray-600 shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600")',
                }}
              ></div>
              <div className="absolute inset-0 bg-brand-dark/70"></div>
              
              <div className="relative text-center p-6 z-10">
                <p className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">100+</p>
                <p className="text-gray-200 font-medium text-lg uppercase tracking-wide">Интервью одновременно</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};