import { useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AnimalCard from '@/components/sections/AnimalCard';
import NewsCard from '@/components/sections/NewsCard';
import Footer from '@/components/sections/Footer';
import { animals } from '@/data/animalsData';
import { testimonials, newsItems, helpItems, services, galleryImages } from '@/data/staticData';
import type { AnimalType } from '@/data/animalsData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [filter, setFilter] = useState<AnimalType | 'all'>('all');

  const filteredAnimals = filter === 'all' 
    ? animals 
    : animals.filter(animal => animal.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* Animals Section */}
      <section id="animals" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши воспитанники</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Познакомьтесь с нашими питомцами, которые ждут своих любящих хозяев
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className="rounded-full px-6"
            >
              Все ({animals.length})
            </Button>
            <Button
              variant={filter === 'dog' ? 'default' : 'outline'}
              onClick={() => setFilter('dog')}
              className="rounded-full px-6"
            >
              Собаки ({animals.filter(a => a.type === 'dog').length})
            </Button>
            <Button
              variant={filter === 'cat' ? 'default' : 'outline'}
              onClick={() => setFilter('cat')}
              className="rounded-full px-6"
            >
              Кошки ({animals.filter(a => a.type === 'cat').length})
            </Button>
          </div>

          {/* Animals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map((animal, index) => (
              <AnimalCard
                key={index}
                name={animal.name}
                gender={animal.gender}
                age={animal.age}
                breed={animal.breed}
                description={animal.description}
                image={animal.image}
                type={animal.type}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Счастливые истории</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Отзывы людей, которые нашли своих верных друзей в нашем приюте
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Heart" size={20} className="text-primary" />
                    <h3 className="font-bold">{testimonial.name}</h3>
                  </div>
                  <p className="text-sm text-primary font-semibold mb-3">{testimonial.pet}</p>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы предоставляем различные услуги для помощи животным
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6 flex justify-center">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <Icon name={service.icon as any} size={48} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как помочь приюту</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая помощь важна для наших питомцев
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpItems.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Жизнь нашего приюта: стрижка, купание и игры с питомцами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Новости приюта</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Следите за последними событиями из жизни нашего приюта
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <NewsCard
                key={index}
                date={news.date}
                title={news.title}
                description={news.description}
                image={news.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section id="contact" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Приезжайте к нам в гости!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Наш адрес</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес:</p>
                    <p className="text-muted-foreground">г. Екатеринбург, Чкаловский район</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон:</p>
                    <p className="text-muted-foreground">+7 (343) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-muted-foreground">info@vtoroydom.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы:</p>
                    <p className="text-muted-foreground">Ежедневно с 10:00 до 18:00</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="h-96 lg:h-auto rounded-lg overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A9c8b6f8e8f8e8f8e8f8e8f8e8f8e8f8e&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта приюта"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}