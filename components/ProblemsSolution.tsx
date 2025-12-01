import React from 'react';
import { Clock, UserX, TrendingDown } from 'lucide-react';

export const ProblemsSolution: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Problems */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Почему старые методы <span className="text-brand-red">не работают</span>?</h2>
          <p className="text-xl text-gray-600">3 главные проблемы классического рекрутинга</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Clock, 
              title: 'Низкая эффективность HR', 
              desc: 'Рекрутеры тратят часы на однотипные телефонные интервью, что приводит к выгоранию.' 
            },
            { 
              icon: UserX, 
              title: 'Потеря кандидатов', 
              desc: 'Долгий процесс отклика и ожидания собеседования заставляет таланты уходить к конкурентам.' 
            },
            { 
              icon: TrendingDown, 
              title: 'Снижение качества', 
              desc: 'Усталость рекрутера в конце дня снижает объективность оценки кандидатов.' 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-red-50/50 p-8 rounded-2xl border border-red-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-red mb-6 shadow-sm">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
