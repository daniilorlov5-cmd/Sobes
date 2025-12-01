import React from 'react';
import { Button } from './Button';
import { Mail, Briefcase, Users } from 'lucide-react';

interface ContactSectionProps {
  onDemoClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onDemoClick }) => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-xl text-gray-600">Выберите удобный способ связи</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Candidates */}
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-red shadow-sm mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Для кандидатов</h3>
            <p className="text-gray-600 mb-6 flex-1">
              Возникли вопросы при прохождении интервью? Наша служба заботы поможет.
            </p>
            <a href="mailto:help@aisobes.ru" className="text-brand-red font-semibold hover:underline">
              help@aisobes.ru
            </a>
          </div>

          {/* Companies */}
          <div className="p-8 rounded-2xl bg-white border-2 border-brand-red shadow-xl relative transform md:-translate-y-4 flex flex-col items-center text-center">
            <div className="absolute top-0 bg-brand-red text-white text-xs font-bold px-4 py-1 rounded-b-lg">БИЗНЕСУ</div>
            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white shadow-lg mb-6 mt-4">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Для компаний</h3>
            <p className="text-gray-600 mb-6 flex-1">
              Хотите внедрить AiSobes? Оставьте заявку на демонстрацию и пилотный проект.
            </p>
            <Button onClick={onDemoClick} fullWidth>Запросить демо</Button>
          </div>

          {/* Partners */}
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-dark shadow-sm mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Для партнеров</h3>
            <p className="text-gray-600 mb-6 flex-1">
              Предложения по инвестициям, интеграциям и сотрудничеству.
            </p>
            <a href="mailto:invest@aisobes.ru" className="text-brand-dark font-semibold hover:underline">
              invest@aisobes.ru
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
