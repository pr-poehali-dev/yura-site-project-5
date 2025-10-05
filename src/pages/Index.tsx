import { useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AnimalCard from '@/components/sections/AnimalCard';
import NewsCard from '@/components/sections/NewsCard';
import Footer from '@/components/sections/Footer';
import VisitForm from '@/components/sections/VisitForm';
import { animals } from '@/data/animalsData';
import { testimonials, newsItems, helpItems, services, galleryImages, faqItems, volunteerRequirements, sponsors } from '@/data/staticData';
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

      {/* Big Breeds Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Большие породы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Крупные и верные питомцы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src="/img/fbefbd63-bd25-47e9-a578-fbc28d9cf853.jpg" alt="Овчарка" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg">Овчарка</h3>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src="/img/f9306b16-530c-4119-9cbf-d0a00743b660.jpg" alt="Лабрадор" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg">Лабрадор</h3>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src="/img/cc5653ef-11bd-4033-b8a9-b692846bf400.jpg" alt="Хаски" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg">Хаски</h3>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src="/img/68f6a870-7027-454a-a7b1-ffefa7e8ca67.jpg" alt="Доберман" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg">Доберман</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Small Breeds Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Маленькие породы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Компактные и милые питомцы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src="/img/832d17d8-d37d-4b7a-8351-0b4936bbcc95.jpg" alt="Чихуахуа" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg">Чихуахуа</h3>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src="/img/408f2ad1-fa63-45e1-9018-957330f680d3.jpg" alt="Померанский шпиц" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg">Померанский шпиц</h3>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src="/img/01775cd3-4c2d-4139-a3fe-2b3ebbdba1f1.jpg" alt="Йоркширский терьер" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg">Йоркширский терьер</h3>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src="/img/ebd875d1-c2b1-4c86-856f-469103e45e49.jpg" alt="Такса" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg">Такса</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Образовательные программы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Лекции и конференции для волонтёров о гуманном обращении с животными
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/e62ea5e3-6e87-4fdc-b10a-332d1bce07fc.jpg" 
                  alt="Лекция для волонтёров"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Теоретические лекции</h3>
                <p className="text-muted-foreground mb-4">
                  Наш лектор проводит образовательные программы для волонтёров, 
                  где рассказывает о психологии животных, правилах безопасного обращения 
                  и основах зоозащитной деятельности.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Психология и поведение бездомных животных</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Основы ветеринарной помощи</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Юридические аспекты защиты животных</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/44c40435-b118-4b95-9b67-c4671d5bb709.jpg" 
                  alt="Практические занятия по отлову"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Практические занятия</h3>
                <p className="text-muted-foreground mb-4">
                  Волонтёры изучают методы гуманного отлова животных, 
                  правила транспортировки в приют и оказания первой помощи 
                  прямо на практике под руководством опытных специалистов.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Техники безопасного отлова бездомных животных</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Правила транспортировки в приют</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">Первая помощь животным в экстренных ситуациях</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8 max-w-4xl mx-auto bg-primary/5">
            <div className="text-center">
              <Icon name="GraduationCap" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Расписание обучения</h3>
              <p className="text-muted-foreground mb-6">
                Лекции и практические занятия проходят каждую субботу с 14:00 до 17:00. 
                Регистрация обязательна. После прохождения курса выдаётся сертификат волонтёра.
              </p>
              <Button size="lg" className="rounded-full gap-2">
                <Icon name="Calendar" size={20} />
                Записаться на обучение
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 px-4 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как стать волонтером</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к нашей команде и помогайте бездомным животным найти дом!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {volunteerRequirements.map((req, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name={req.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{req.title}</h3>
                    <p className="text-sm text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="p-8 max-w-3xl mx-auto bg-primary/5">
              <h3 className="text-2xl font-bold mb-4">Чем занимаются волонтеры?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Прогулки и игры с собаками</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Уход за кошками, игры с котятами</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Помощь в уборке и кормлении</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Фотосъемка животных для пристройства</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Помогать на мероприятиях и выставках</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Социализация и обучение питомцев</p>
                </div>
              </div>
              <Button size="lg" className="rounded-full gap-2">
                <Icon name="UserPlus" size={20} />
                Заполнить анкету волонтера
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о приюте и усыновлении
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-3 flex items-start gap-2">
                  <Icon name="HelpCircle" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground pl-8">{faq.answer}</p>
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

      {/* Sponsors Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши спонсоры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Благодарим компании и частных лиц, которые помогают нашему приюту
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">
                    {sponsor.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{sponsor.name}</h3>
                    <p className="text-sm text-muted-foreground">{sponsor.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="p-8 max-w-3xl mx-auto bg-primary/5">
              <h3 className="text-2xl font-bold mb-4">Станьте спонсором!</h3>
              <p className="text-muted-foreground mb-6">
                Ваша компания или организация может помочь бездомным животным. Мы будем рады любой поддержке: 
                кормам, медикаментам, финансовой помощи или профессиональным услугам.
              </p>
              <Button size="lg" className="rounded-full gap-2">
                <Icon name="Handshake" size={20} />
                Связаться с нами
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Booking Section */}
      <section id="visit" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Запись на посещение</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Приходите познакомиться с нашими питомцами и узнайте больше о приюте
            </p>
          </div>
          <VisitForm />
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
                    <p className="text-muted-foreground">г. Екатеринбург, Чкаловский район, 11</p>
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
                    <p className="text-muted-foreground">Ежедневно с 10:00 до 19:00</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="h-96 lg:h-auto rounded-lg overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Adfb0ad7c8c8f8e8e8f8e8f8e8f8e8f8e&amp;source=constructor&amp;ll=60.597465%2C56.838011&amp;z=12"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта приюта - Екатеринбург, Чкаловский район"
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