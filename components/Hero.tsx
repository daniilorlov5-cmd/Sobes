import React from 'react';
import { Button } from './Button';
import { Play } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-red-50 text-brand-red text-sm font-semibold tracking-wide uppercase">
              Инновации в HR
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AiSobes – Ваш новый <span className="text-brand-red">HR-инструмент</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Автоматизируйте первичный скрининг кандидатов с помощью цифрового аватара. 
              Экономьте до <span className="font-bold text-gray-900">70% времени</span> рекрутера и не упускайте таланты!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button onClick={onCtaClick} className="w-full sm:w-auto text-lg px-8 py-4">
                Попробовать бесплатно
              </Button>
              <a href="#how-it-works" className="text-gray-500 hover:text-gray-900 font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-all">
                Как это работает?
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-[600px] relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-[1.01] transition-transform duration-300">
               <video 
                 autoPlay 
                 muted 
                 loop 
                 playsInline
                 poster="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800&h=450"
                 className="absolute inset-0 w-full h-full object-cover"
               >
                 <source src="https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-5429/1080p.mp4" type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
               
               {/* Overlay for legibility if needed */}
               <div className="absolute inset-0 bg-black/20"></div>

               {/* Play Button Overlay (Decorative since it autoplays) */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full relative"></div>
                 </div>
               </div>
               
               <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium bg-black/60 p-3 rounded-lg backdrop-blur-sm flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  Демонстрация работы аватара
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};