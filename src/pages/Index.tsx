import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

type AnimalType = 'dog' | 'cat';

interface Animal {
  name: string;
  gender: string;
  age: string;
  breed: string;
  description: string;
  image: string;
  type: AnimalType;
}

const animals: Animal[] = [
  {
    name: 'Мухтар',
    gender: 'мальчик',
    age: '5 лет',
    breed: 'Немецкая овчарка',
    type: 'dog',
    description: 'Активный и игривый пес, обожает долгие прогулки и апортировку мячика. Отлично ладит с детьми, знает базовые команды',
    image: '/img/fcc13289-9f62-49f5-9a6e-100fe8834ce3.jpg'
  },
  {
    name: 'Алиса',
    gender: 'девочка',
    age: '3 года',
    breed: 'Метис',
    type: 'dog',
    description: 'Спокойная и ласковая собака, идеальна для квартирного содержания. Любит обниматься и спать рядом с хозяином',
    image: '/img/c046d6c4-feb8-47c0-9967-3a4730f167f1.jpg'
  },
  {
    name: 'Мурка',
    gender: 'девочка',
    age: '4 года',
    breed: 'Дворовая кошка',
    type: 'cat',
    description: 'Независимая кошечка с характером, предпочитает спокойную обстановку. Любит сидеть на подоконнике и наблюдать за птицами',
    image: '/img/6e1e7ee5-0d61-4d83-a69a-82d2912b2b7a.jpg'
  },
  {
    name: 'Тоша',
    gender: 'мальчик',
    age: '3 месяца',
    breed: 'Британская короткошерстная',
    type: 'cat',
    description: 'Игривый котенок, полон энергии! Обожает играть с игрушками-мышками и гоняться за солнечными зайчиками',
    image: '/img/f073c044-4e66-43df-97ba-fae6f0615616.jpg'
  },
  {
    name: 'Бусинка',
    gender: 'девочка',
    age: '6 месяцев',
    breed: 'Мальтийская болонка',
    type: 'dog',
    description: 'Маленькая белоснежная собачка с добрым сердцем. Очень привязывается к людям, любит сидеть на ручках',
    image: '/img/3c640813-1848-48ec-846a-8febfd945d67.jpg'
  },
  {
    name: 'Рыжик',
    gender: 'мальчик',
    age: '4 месяца',
    breed: 'Метис',
    type: 'dog',
    description: 'Крохотный щенок с огромной любовью к жизни! Очень социальный, обожает знакомиться с новыми людьми и животными',
    image: '/img/f175e0fd-9f04-47f1-89f0-163df9b70e70.jpg'
  },
  {
    name: 'Грей',
    gender: 'мальчик',
    age: '7 лет',
    breed: 'Стаффордширский терьер',
    type: 'dog',
    description: 'Мудрый и спокойный пес, прекрасный компаньон для размеренных прогулок. Очень терпелив и послушен',
    image: '/img/0ed6522c-6ff1-41c6-bbf6-cf705b007d88.jpg'
  },
  {
    name: 'Смокинг',
    gender: 'мальчик',
    age: '2 года',
    breed: 'Европейская короткошерстная',
    type: 'cat',
    description: 'Элегантный черно-белый кот с аристократичными манерами. Любит вкусную еду и мягкие подушки',
    image: '/img/da30717b-7e57-4b78-ac3e-2e5456457d18.jpg'
  },
  {
    name: 'Дымка',
    gender: 'девочка',
    age: '2 месяца',
    breed: 'Дворовая кошка',
    type: 'cat',
    description: 'Крошечная полосатая малышка с любопытным характером. Первая исследует все новое и мурлычет как моторчик',
    image: '/img/1c83f061-e6a6-478a-b1c4-e2439fca08ce.jpg'
  },
  {
    name: 'Джек',
    gender: 'мальчик',
    age: '8 месяцев',
    breed: 'Лабрадор',
    type: 'dog',
    description: 'Энергичный щенок лабрадора, обожает плавать и приносить игрушки. Очень умный, быстро учится командам',
    image: '/img/27504323-b56f-44a4-8979-d98558ce49f3.jpg'
  },
  {
    name: 'Пушинка',
    gender: 'девочка',
    age: '3 года',
    breed: 'Персидская',
    type: 'cat',
    description: 'Пушистая красавица-персиянка с королевскими манерами. Любит когда ее расчесывают и гладят',
    image: '/img/748668e6-b50c-48b8-8443-6b46f8f24977.jpg'
  },
  {
    name: 'Барни',
    gender: 'мальчик',
    age: '2 года',
    breed: 'Бигль',
    type: 'dog',
    description: 'Дружелюбный бигль с отличным нюхом. Любит исследовать окрестности и играть с другими собаками',
    image: '/img/7e0e92da-b8ea-4c55-a2a3-c5c0b548975e.jpg'
  },
  {
    name: 'Персик',
    gender: 'мальчик',
    age: '5 лет',
    breed: 'Рыжий дворовой',
    type: 'cat',
    description: 'Солнечный рыжий кот, очень ласковый и мурлыкающий. Отлично подходит для семей с детьми',
    image: '/img/615eef6d-f674-4035-8c0f-a295aad24446.jpg'
  },
  {
    name: 'Луна',
    gender: 'девочка',
    age: '5 месяцев',
    breed: 'Сибирский хаски',
    type: 'dog',
    description: 'Очаровательная хаски с голубыми глазами. Активная, любит бегать и играть в снегу',
    image: '/img/f9a00142-90a5-41a4-a885-6db0b3fa3db6.jpg'
  },
  {
    name: 'Сапфир',
    gender: 'мальчик',
    age: '4 года',
    breed: 'Сиамская',
    type: 'cat',
    description: 'Изящный сиамский кот с пронзительными голубыми глазами. Разговорчивый и преданный компаньон',
    image: '/img/ab8e9544-3729-4576-9477-0c5d49a889cc.jpg'
  }
];

const testimonials = [
  {
    name: 'Анна Петрова',
    pet: 'Взяла Рекса (овчарка)',
    text: 'Спасибо огромное приюту! Рекс стал полноценным членом нашей семьи. Дети его обожают, а он терпеливо с ними играет',
    image: '/img/fafac969-c31e-46dd-a68d-4dba4b6fda5d.jpg'
  },
  {
    name: 'Семья Ивановых',
    pet: 'Забрали котенка Марсика',
    text: 'Марсик принес столько радости в наш дом! Дети учатся заботе и ответственности. Очень благодарны приюту за помощь',
    image: '/img/2916cc7b-5829-4598-a0a0-46cae2264678.jpg'
  },
  {
    name: 'Валентина Сергеевна',
    pet: 'Взяла Тузика',
    text: 'Мне 68 лет, всю жизнь мечтала о собаке. Тузик - моя радость и верный друг. Благодаря ему я больше гуляю и чувствую себя нужной',
    image: '/img/395869e9-d5aa-45cf-adac-7141c34be4ec.jpg'
  },
  {
    name: 'Дмитрий и Ольга',
    pet: 'Забрали кошку Симу',
    text: 'Сима невероятно ласковая! Встречает нас после работы мурлыканьем. Не представляем теперь жизнь без нее',
    image: '/img/4071ce97-a54f-452c-9144-dc03b6736664.jpg'
  }
];

const requirements = [
  {
    icon: 'FileText',
    title: 'Паспорт',
    description: 'Документ, удостоверяющий личность (оригинал и копия)'
  },
  {
    icon: 'Home',
    title: 'Подтверждение жилья',
    description: 'Свидетельство о праве собственности или договор аренды'
  },
  {
    icon: 'Users',
    title: 'Согласие семьи',
    description: 'Все члены семьи должны быть согласны на появление питомца'
  },
  {
    icon: 'Heart',
    title: 'Ответственность',
    description: 'Подписание договора ответственного содержания животного'
  }
];

const helpItems = [
  { icon: 'Package', title: 'Корм для животных', description: 'Наш приют для животных нуждается в специальном корме, поэтому вы можете принести его нам' },
  { icon: 'Pill', title: 'Медикаменты', description: 'Воспитанники нашего приюта для животных нуждаются в специальных медицинских препаратах' },
  { icon: 'Wallet', title: 'Денежные пожертвования', description: 'У нашего приюта не хватает средств для проведения многочисленных обследований и операций' },
  { icon: 'Bug', title: 'Средства от эктопаразитов', description: 'Наш приют для животных нуждается в специальных средствах для обработки животных от блох и клещей' },
  { icon: 'Wheat', title: 'Различные крупы', description: 'Любой желающий может привезти в наш приют для животных различные крупы (гречку, овсянку и т.д.)' },
  { icon: 'Syringe', title: 'Средства для гельментизации', description: 'Наш приют для животных нуждается в специальных средствах для обработки животных от глистов' }
];

const services = [
  { icon: 'Home', title: 'Передержка животных', description: 'Мы занимаемся тем, что предоставляем владельцам оставить у себя на передержку питомца во время отсутствия хозяина' },
  { icon: 'Users', title: 'Социализация животных', description: 'Если у владельца домашнего животного возникли проблемы с социализацией питомца, то мы помогает ему адаптироваться' },
  { icon: 'Stethoscope', title: 'Медицинская помощь', description: 'Наша компания занимается тем, что помогает владельцам животных с низким уровнем дохода получить скидку в ветеринарных клиниках' }
];

export default function Index() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animalFilter, setAnimalFilter] = useState<'all' | 'dog' | 'cat'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [adoptionForm, setAdoptionForm] = useState({ name: '', phone: '', email: '', address: '', reason: '' });

  const filteredAnimals = animals.filter(animal => {
    const matchesFilter = animalFilter === 'all' || animal.type === animalFilter;
    const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         animal.breed.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="PawPrint" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Приют для животных</span>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#animals" className="hover:text-primary transition-colors">Воспитанники</a>
              <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#help" className="hover:text-primary transition-colors">Как помочь</a>
              <a href="#requirements" className="hover:text-primary transition-colors">Требования</a>
              <a href="#schedule" className="hover:text-primary transition-colors">График</a>
              <a href="#about" className="hover:text-primary transition-colors">О приюте</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
              <Button 
                className="rounded-full bg-primary text-white hover:bg-primary/90 flex items-center gap-2"
                onClick={() => window.scrollTo({ top: document.getElementById('donate')?.offsetTop || 0, behavior: 'smooth' })}
              >
                <Icon name="Heart" size={18} />
                Помочь сейчас
              </Button>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={28} className="text-primary" />
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Главная</a>
              <a href="#animals" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Воспитанники</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Отзывы</a>
              <a href="#help" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Как помочь</a>
              <a href="#requirements" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Требования</a>
              <a href="#schedule" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">График</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">О приюте</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Услуги</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Контакты</a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Добро пожаловать в<br />
                <span className="text-primary">ПРИЮТ ДЛЯ ЖИВОТНЫХ</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Добро пожаловать на официальный сайт нашего приюта для животных, который помогает заботиться о кошках и собаках
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="rounded-full">
                  Взять питомца
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Помочь приюту
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/fcc13289-9f62-49f5-9a6e-100fe8834ce3.jpg" 
                  alt="Животные приюта" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">❤️</div>
                  <div className="text-sm text-muted-foreground">С любовью</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Заберите к себе животное из приюта</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Если у вас появилось желание забрать к себе домой животное из нашего приюта, 
            оставьте заявку на сайте или позвоните по номеру <a href="tel:88003332233" className="text-primary font-semibold">8 800 333 22 33</a>
          </p>
        </div>
      </section>

      <section id="animals" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Воспитанники приюта</h2>
          <p className="text-center text-muted-foreground mb-8">Любой желающий может забрать к себе животное из приюта</p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
            <div className="flex gap-2">
              <Button 
                variant={animalFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setAnimalFilter('all')}
                className="rounded-full"
              >
                <Icon name="PawPrint" size={18} className="mr-2" />
                Все ({animals.length})
              </Button>
              <Button 
                variant={animalFilter === 'dog' ? 'default' : 'outline'}
                onClick={() => setAnimalFilter('dog')}
                className="rounded-full"
              >
                🐕 Собаки ({animals.filter(a => a.type === 'dog').length})
              </Button>
              <Button 
                variant={animalFilter === 'cat' ? 'default' : 'outline'}
                onClick={() => setAnimalFilter('cat')}
                className="rounded-full"
              >
                🐈 Кошки ({animals.filter(a => a.type === 'cat').length})
              </Button>
            </div>
            <div className="relative w-full md:w-64">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Поиск по имени или породе..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
          </div>

          {filteredAnimals.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">Животные не найдены</p>
              <Button 
                variant="outline" 
                className="mt-4 rounded-full"
                onClick={() => { setSearchQuery(''); setAnimalFilter('all'); }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map((animal, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{animal.name} ({animal.gender})</h3>
                  <p className="text-sm text-muted-foreground mb-1">{animal.age}</p>
                  <p className="text-sm font-semibold text-primary mb-3">{animal.breed}</p>
                  <p className="text-sm mb-4">{animal.description}</p>
                  <Button 
                    className="w-full rounded-full"
                    onClick={() => setSelectedAnimal(animal)}
                  >
                    Забрать домой
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Нас забрали к себе домой</h2>
          <p className="text-center text-muted-foreground mb-12">Истории счастливых питомцев и их новых семей</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Quote" className="text-primary" size={24} />
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  </div>
                  <p className="text-sm text-primary font-semibold mb-3">{testimonial.pet}</p>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Если вы хотите помочь приюту</h2>
          <p className="text-center text-muted-foreground mb-12">Что вы можете сделать, чтобы помочь нашему приюту для животных</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpItems.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name={item.icon} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Документы для усыновления</h2>
          <p className="text-center text-muted-foreground mb-12">Что нужно для того, чтобы забрать питомца домой</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {requirements.map((req, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={req.icon} className="text-primary" size={32} />
                </div>
                <h3 className="font-bold mb-2">{req.title}</h3>
                <p className="text-sm text-muted-foreground">{req.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">График работы приюта</h2>
          <p className="text-center text-muted-foreground mb-12">Когда вы можете приехать к нам</p>
          
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Clock" className="text-primary" size={32} />
                  <h3 className="text-2xl font-bold">Часы работы</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-semibold">Понедельник - Пятница:</span>
                    <span className="text-muted-foreground">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-semibold">Суббота:</span>
                    <span className="text-muted-foreground">11:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-semibold">Воскресенье:</span>
                    <span className="text-muted-foreground">12:00 - 16:00</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Calendar" className="text-primary" size={32} />
                  <h3 className="text-2xl font-bold">Как посетить</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">Позвоните заранее</p>
                      <p className="text-sm text-muted-foreground">8 800 333 22 33</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">Наш адрес</p>
                      <p className="text-sm text-muted-foreground">г. Екатеринбург, Чкаловский район</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold mb-1">Важно знать</p>
                      <p className="text-sm text-muted-foreground">Запись на визит обязательна</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="donate" className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Реквизиты для помощи</h2>
          <p className="text-lg text-center mb-8 opacity-90">
            Вы можете помочь приюту денежным переводом
          </p>
          <div className="max-w-2xl mx-auto bg-white/10 rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <Icon name="CreditCard" className="mx-auto mb-3" size={40} />
                <p className="font-semibold mb-2">Номер карты Сбербанк</p>
                <p className="text-2xl font-bold mb-1">2202 2000 1234 5678</p>
                <p className="text-sm opacity-80">На любую сумму</p>
              </div>
              <div className="text-center">
                <Icon name="QrCode" className="mx-auto mb-3" size={40} />
                <p className="font-semibold mb-2">QR-код для перевода</p>
                <div className="bg-white w-32 h-32 mx-auto rounded-lg flex items-center justify-center">
                  <Icon name="QrCode" className="text-primary" size={80} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Ветеринарная информация</h2>
          <p className="text-center text-muted-foreground mb-8">Все наши питомцы получают полный ветеринарный уход</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Icon name="Syringe" className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Вакцинация</h3>
              <p className="text-sm text-muted-foreground">Все животные привиты по возрасту</p>
            </Card>
            <Card className="p-6 text-center">
              <Icon name="Scissors" className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Стерилизация</h3>
              <p className="text-sm text-muted-foreground">Проводится в партнёрских клиниках</p>
            </Card>
            <Card className="p-6 text-center">
              <Icon name="ClipboardList" className="text-primary mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Медкарты</h3>
              <p className="text-sm text-muted-foreground">Каждому питомцу выдаётся паспорт</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Оставьте заявку на сайте</h2>
          <p className="text-center text-muted-foreground mb-8">Если хотите нам помочь или забрать питомца</p>
          
          <Card className="p-8">
            <div className="space-y-4">
              <Input 
                placeholder="Введите имя" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <Input 
                type="email" 
                placeholder="mail@mail.ru" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <Input 
                type="tel" 
                placeholder="xxx-xxx-xxx" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <Textarea 
                placeholder="Ваше сообщение" 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              <Button className="w-full rounded-full" size="lg">
                Отправить заявку
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Нажимая на кнопку, Вы принимаете Положение и Согласие на обработку персональных данных.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">НАША МИССИЯ</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Наш приют для животных занимается тем, что заботиться о животных, которые родились на улице 
              или которые были выставлены из дома безответственными владельцами
            </p>
          </div>

          <h3 className="text-3xl font-bold text-center mb-4">Немного о приюте для животных</h3>
          <p className="text-center text-muted-foreground mb-12">Мы начинаем свою деятельность по заботе о бездомных животных</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="Heart" className="text-primary" size={32} />
                <h4 className="text-2xl font-bold">Стерилизуем животных</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Наши работники занимаются отловом безнадзорных животных, дальнейшей их вакцинацией, лечением и стерилизацией.
              </p>
              <p className="text-muted-foreground">
                Мы сотрудничаем с ветеринарными клиниками, поэтому стерилизация и кастрация обходятся чуть дешевле, чем обычно.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="Home" className="text-primary" size={32} />
                <h4 className="text-2xl font-bold">Содержим животных</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Наша компания старается привлекать жителей города к оказанию материальной, ветеринарной и иной помощи бездомным животным.
              </p>
              <p className="text-muted-foreground">
                Наши работники стараются доносить до владельцев домашних животных необходимую информацию об их правильном содержании.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="Cross" className="text-primary" size={32} />
                <h4 className="text-2xl font-bold">Лечим животных</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Наш приют старается оказывать медицинскую помощь бездомным животным в зависимости от финансового положения.
              </p>
              <p className="text-muted-foreground">
                Мы своевременно проводим вакцинацию всех животных и лечим тех, кто болеет.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="Users" className="text-primary" size={32} />
                <h4 className="text-2xl font-bold">Пристраиваем животных</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                В нашем приюте любой желающий может забрать к себе домой понравившееся животное.
              </p>
              <p className="text-muted-foreground">
                Наша компания предоставляет услуги передержки и социализации бездомных животных за умеренную плату или пожертвование.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Помогите нашему приюту для животных</h2>
          <p className="text-lg mb-8 opacity-90">
            Если у вас есть возможность перевести деньги на счет нашего приюта для покупки всего необходимого, 
            оставьте заявку на сайте или позвоните по номеру <span className="font-semibold">8 800 333 22 33</span>
          </p>
          <Button size="lg" variant="secondary" className="rounded-full">
            Оставить заявку
          </Button>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Услуги, которые мы предлагаем</h2>
          <p className="text-center text-muted-foreground mb-12">Наш приют занимается тем, что оказывает услуги по передержке, социализации и адаптации</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="PawPrint" size={28} />
                <span className="text-xl font-bold">Приют для животных</span>
              </div>
              <p className="text-sm opacity-80">
                Заботимся о бездомных животных с любовью и ответственностью
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <p className="text-sm opacity-80 mb-2">Телефон: 8 800 333 22 33</p>
              <p className="text-sm opacity-80 mb-2">Email: info@shelter.ru</p>
              <p className="text-sm opacity-80">г. Екатеринбург, Чкаловский район</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm opacity-80">
                <a href="#home" className="block hover:opacity-100 transition-opacity">Главная</a>
                <a href="#animals" className="block hover:opacity-100 transition-opacity">Воспитанники</a>
                <a href="#help" className="block hover:opacity-100 transition-opacity">Как помочь</a>
                <a href="#services" className="block hover:opacity-100 transition-opacity">Услуги</a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm opacity-60 border-t border-white/20 pt-8">
            © 2024 Приют для животных. Все права защищены.
          </div>
        </div>
      </footer>

      {selectedAnimal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedAnimal(null)}>
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Заявка на усыновление</h2>
                  <p className="text-muted-foreground">Питомец: <span className="text-primary font-semibold">{selectedAnimal.name}</span> ({selectedAnimal.breed})</p>
                </div>
                <button onClick={() => setSelectedAnimal(null)} className="text-muted-foreground hover:text-foreground">
                  <Icon name="X" size={24} />
                </button>
              </div>
              
              <div className="mb-6 rounded-xl overflow-hidden">
                <img 
                  src={selectedAnimal.image} 
                  alt={selectedAnimal.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold mb-1 block">Ваше имя *</label>
                  <Input 
                    placeholder="Введите ФИО" 
                    value={adoptionForm.name}
                    onChange={(e) => setAdoptionForm({...adoptionForm, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">Телефон *</label>
                  <Input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    value={adoptionForm.phone}
                    onChange={(e) => setAdoptionForm({...adoptionForm, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">Email *</label>
                  <Input 
                    type="email" 
                    placeholder="example@mail.ru" 
                    value={adoptionForm.email}
                    onChange={(e) => setAdoptionForm({...adoptionForm, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">Адрес проживания *</label>
                  <Input 
                    placeholder="Город, улица, дом, квартира" 
                    value={adoptionForm.address}
                    onChange={(e) => setAdoptionForm({...adoptionForm, address: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">Почему вы хотите взять именно этого питомца?</label>
                  <Textarea 
                    placeholder="Расскажите о себе и своих условиях для содержания животного" 
                    rows={4}
                    value={adoptionForm.reason}
                    onChange={(e) => setAdoptionForm({...adoptionForm, reason: e.target.value})}
                  />
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Info" size={18} className="text-primary" />
                    Важная информация
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• После отправки заявки с вами свяжется наш специалист</li>
                    <li>• Необходимо будет предоставить документы для усыновления</li>
                    <li>• Возможен визит к вам домой для проверки условий</li>
                    <li>• Подписание договора ответственного содержания</li>
                  </ul>
                </div>

                <Button 
                  className="w-full rounded-full" 
                  size="lg"
                  onClick={() => {
                    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
                    setSelectedAnimal(null);
                    setAdoptionForm({ name: '', phone: '', email: '', address: '', reason: '' });
                  }}
                >
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая на кнопку, Вы принимаете Положение и Согласие на обработку персональных данных.
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}