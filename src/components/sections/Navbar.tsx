import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon name="PawPrint" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Второй дом</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#animals" className="hover:text-primary transition-colors">Воспитанники</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#tour" className="hover:text-primary transition-colors">Экскурсия</a>
            <a href="#volunteer" className="hover:text-primary transition-colors">Волонтёрство</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            <Button 
              className="rounded-full bg-primary text-white hover:bg-primary/90 flex items-center gap-2"
              onClick={() => window.scrollTo({ top: document.getElementById('donate')?.offsetTop || 0, behavior: 'smooth' })}
            >
              <Icon name="Heart" size={18} />
              Помочь сейчас
            </Button>
          </div>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Главная</a>
            <a href="#animals" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Воспитанники</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Галерея</a>
            <a href="#tour" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Экскурсия</a>
            <a href="#volunteer" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Волонтёрство</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Контакты</a>
          </div>
        </div>
      )}
    </nav>
  );
}
