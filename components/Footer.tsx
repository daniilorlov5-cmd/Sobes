import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Автоматизированная платформа для первичного отбора кандидатов с использованием искусственного интеллекта.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-red">Возможности</a></li>
              <li><a href="#" className="hover:text-brand-red">Безопасность</a></li>
              <li><a href="#" className="hover:text-brand-red">Интеграции</a></li>
              <li><a href="#" className="hover:text-brand-red">Цены</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-red">О нас</a></li>
              <li><a href="#" className="hover:text-brand-red">Карьера</a></li>
              <li><a href="#" className="hover:text-brand-red">Блог</a></li>
              <li><a href="#" className="hover:text-brand-red">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Правовая информация</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-brand-red">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-brand-red">Условия использования</a></li>
              <li><a href="#" className="hover:text-brand-red">Обработка перс. данных</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2024 AiSobes. Все права защищены.</p>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-gray-200 rounded-full hover:bg-brand-red transition-colors cursor-pointer"></div>
             <div className="w-8 h-8 bg-gray-200 rounded-full hover:bg-brand-red transition-colors cursor-pointer"></div>
             <div className="w-8 h-8 bg-gray-200 rounded-full hover:bg-brand-red transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};