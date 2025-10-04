import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="PawPrint" size={32} />
              <span className="text-xl font-bold">Второй дом</span>
            </div>
            <p className="text-gray-400">Помогаем бездомным животным обрести второй дом и любящую семью. Каждое животное заслуживает любви!</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <div className="space-y-2">
              <a href="#animals" className="block text-gray-400 hover:text-white transition-colors">Воспитанники</a>
              <a href="#help" className="block text-gray-400 hover:text-white transition-colors">Как помочь</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Контакты</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 Приют для животных. Все права защищены.</p>
          <p className="mt-2 text-sm">г. Екатеринбург, Чкаловский район</p>
        </div>
      </div>
    </footer>
  );
}
