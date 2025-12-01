import React from 'react';
import { ArrowUpRight, MessageCircle, Share2 } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Блог и сообщество</h2>
            <p className="text-xl text-gray-600">Следите за нами в соцсетях</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { 
              title: "ВКонтакте", 
              desc: "Новости проекта, обновления платформы и статьи", 
              bg: "bg-blue-600",
              icon: Share2,
              href: "https://vk.com/club234331306"
            },
            { 
              title: "Telegram канал", 
              desc: "Оперативные новости и прямая связь с командой", 
              bg: "bg-sky-500",
              icon: MessageCircle,
              href: "https://t.me/aisoobes"
            },
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center text-white shadow-lg`}>
                   <item.icon size={28} />
                </div>
                <ArrowUpRight className="text-gray-400 group-hover:text-brand-red transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-red transition-colors">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};