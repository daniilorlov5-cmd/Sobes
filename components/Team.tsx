import React from 'react';

export const Team: React.FC = () => {
  const departments = [
    {
      title: 'Продукт и Стратегия',
      desc: 'Эксперты с 10+ летним опытом в HR-Tech и методологии оценки персонала.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=800'
    },
    {
      title: 'AI Лаборатория',
      desc: 'Команда NLP-инженеров и Data Scientists, обучающая нейросети понимать контекст.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=800'
    },
    {
      title: 'Разработка',
      desc: 'Архитекторы высоконагруженных систем, обеспечивающие стабильность видео-интервью.',
      image: 'https://images.unsplash.com/photo-1504384308090-c54be3852f92?auto=format&fit=crop&q=80&w=800&h=800'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Команда AiSobes</h2>
          <p className="text-xl text-gray-600">Синергия HR-экспертизы и передовых технологий</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img 
                  src={dept.image} 
                  alt={dept.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <h3 className="text-2xl font-bold mb-2">{dept.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed opacity-90">{dept.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};