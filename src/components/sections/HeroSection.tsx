import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/img/09bef921-704b-40eb-8133-60985bad8e06.jpg',
      title: 'Подари любовь бездомному питомцу',
      description: 'Каждое животное заслуживает дом, заботу и любовь. Помогите нам дать им второй шанс на счастливую жизнь',
      buttons: [
        { text: 'Взять питомца', icon: 'Heart', variant: 'default' },
        { text: 'Стать волонтером', icon: 'HandHeart', variant: 'outline' }
      ]
    },
    {
      image: '/img/26113a1c-3e19-4d68-ad53-0e460c5517e0.jpg',
      title: 'Стань волонтером приюта!',
      description: 'Помогай животным, находи новых друзей и получай огромную благодарность от наших питомцев. Никакого опыта не требуется!',
      buttons: [
        { text: 'Хочу помогать', icon: 'Users', variant: 'default' },
        { text: 'Узнать больше', icon: 'Info', variant: 'outline' }
      ]
    }
  ];

  return (
    <section id="home" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={slides[currentSlide].image}
          alt="Приют для животных" 
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <a 
        href="https://wa.me/+79123456789" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} />
      </a>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            {slides[currentSlide].description}
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap mb-8">
          {slides[currentSlide].buttons.map((btn, idx) => (
            <Button 
              key={idx}
              size="lg" 
              variant={btn.variant as any}
              className={`rounded-full gap-2 text-lg px-8 py-6 ${
                btn.variant === 'default' 
                  ? 'bg-primary hover:bg-primary/90' 
                  : 'bg-white/90 hover:bg-white'
              }`}
              onClick={() => {
                if (btn.text === 'Взять питомца') {
                  window.scrollTo({ top: document.getElementById('animals')?.offsetTop || 0, behavior: 'smooth' });
                } else if (btn.text === 'Стать волонтером') {
                  window.scrollTo({ top: document.getElementById('volunteer')?.offsetTop || 0, behavior: 'smooth' });
                } else if (btn.text === 'Хочу помогать') {
                  window.scrollTo({ top: document.getElementById('volunteer')?.offsetTop || 0, behavior: 'smooth' });
                }
              }}
            >
              <Icon name={btn.icon as any} size={24} />
              {btn.text}
            </Button>
          ))}
          <Button 
            size="lg"
            className="rounded-full gap-2 text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.scrollTo({ top: document.getElementById('animals')?.offsetTop || 0, behavior: 'smooth' })}
          >
            <Icon name="Eye" size={24} />
            Показ животных
          </Button>
        </div>
        
        <div className="flex gap-3 justify-center">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === idx 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Перейти к слайду ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}