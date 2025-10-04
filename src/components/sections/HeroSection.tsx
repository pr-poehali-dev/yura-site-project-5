import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section id="home" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/a65d577a-b389-4386-97b9-e49fed5e0006.jpg" 
          alt="Приют для животных" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            Подари любовь бездомному питомцу
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Каждое животное заслуживает дом, заботу и любовь. Помогите нам дать им второй шанс на счастливую жизнь
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="rounded-full gap-2 bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            <Icon name="Heart" size={24} />
            Взять питомца
          </Button>
          <Button size="lg" variant="outline" className="rounded-full gap-2 bg-white/90 hover:bg-white text-lg px-8 py-6">
            <Icon name="HandHeart" size={24} />
            Стать волонтером
          </Button>
        </div>
      </div>
    </section>
  );
}
