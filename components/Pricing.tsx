import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface PricingProps {
    onCtaClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onCtaClick }) => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Тарифные планы</h2>
          <p className="text-xl text-gray-600">Выберите подходящее решение для вашего бизнеса</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Базовый</h3>
            <p className="text-gray-500 text-sm mb-6">Для небольших компаний</p>
            <div className="mb-6">
               <span className="text-4xl font-bold text-gray-900">₽ 15k</span>
               <span className="text-gray-500"> / мес</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Доступ к шаблонам",
                "Базовая аналитика",
                "До 50 интервью в месяц",
                "Email поддержка"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <Check size={18} className="text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feat}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" fullWidth onClick={onCtaClick}>Выбрать тариф</Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-brand-dark p-8 rounded-2xl shadow-2xl transform md:-translate-y-4 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
            <h3 className="text-xl font-semibold text-white mb-2">Профессиональный</h3>
            <p className="text-gray-400 text-sm mb-6">Для активного найма</p>
            <div className="mb-6">
               <span className="text-4xl font-bold text-white">₽ 45k</span>
               <span className="text-gray-400"> / мес</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Кастомизация сценариев",
                "Расширенная аналитика",
                "До 200 интервью в месяц",
                "Приоритетная поддержка",
                "Интеграция с ATS"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <Check size={18} className="text-brand-red flex-shrink-0" />
                  <span className="text-sm">{feat}</span>
                </li>
              ))}
            </ul>
            <Button variant="primary" fullWidth onClick={onCtaClick}>Выбрать тариф</Button>
          </div>

          {/* Custom Plan */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pay-as-you-go</h3>
            <p className="text-gray-500 text-sm mb-6">Оплата за результат</p>
            <div className="mb-6">
               <span className="text-4xl font-bold text-gray-900">₽ 300</span>
               <span className="text-gray-500"> / интервью</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Оплата только за проведенные интервью",
                "Полный функционал",
                "Без ежемесячной подписки",
                "Подходит для сезонного найма"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <Check size={18} className="text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feat}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" fullWidth onClick={onCtaClick}>Начать сейчас</Button>
          </div>
        </div>
      </div>
    </section>
  );
};