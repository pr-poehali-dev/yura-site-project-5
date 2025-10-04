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
    name: 'Шарик',
    gender: 'мальчик',
    age: '3 года',
    breed: 'Немецкая овчарка',
    type: 'dog',
    description: 'Умный и верный пёс, отлично ладит с детьми. Обожает долгие прогулки и игру с мячиком. Знает команды: сидеть, лежать, дай лапу',
    image: '/img/fcc13289-9f62-49f5-9a6e-100fe8834ce3.jpg'
  },
  {
    name: 'Мурка',
    gender: 'девочка',
    age: '1 год',
    breed: 'Мейн-кун',
    type: 'cat',
    description: 'Крупная кошка с добрым нравом и пушистой шерстью. Любит детей и спокойную домашнюю атмосферу',
    image: '/img/6e1e7ee5-0d61-4d83-a69a-82d2912b2b7a.jpg'
  },
  {
    name: 'Тузик',
    gender: 'мальчик',
    age: '5 лет',
    breed: 'Кавалер кинг чарльз спаниель',
    type: 'dog',
    description: 'Элегантная собачка с шелковистой шерстью. Очень ласковый и компанейский, идеален для семьи',
    image: '/img/c046d6c4-feb8-47c0-9967-3a4730f167f1.jpg'
  },
  {
    name: 'Василий',
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
    breed: 'Сфинкс',
    type: 'cat',
    description: 'Необычная кошечка без шерсти. Очень теплая и ласковая, любит обниматься и сидеть на руках',
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
  },
  {
    name: 'Рекс',
    gender: 'мальчик',
    age: '1 год',
    breed: 'Золотистый ретривер',
    type: 'dog',
    description: 'Солнечный и добрейший пес с золотистой шерстью. Обожает всех людей и отлично ладит с детьми',
    image: '/img/2916cc7b-5829-4598-a0a0-46cae2264678.jpg'
  },
  {
    name: 'Снежинка',
    gender: 'девочка',
    age: '1 год',
    breed: 'Турецкая ангора',
    type: 'cat',
    description: 'Белоснежная красавица с длинной шерстью и пушистым хвостом. Очень игривая и общительная',
    image: '/img/395869e9-d5aa-45cf-adac-7141c34be4ec.jpg'
  },
  {
    name: 'Бим',
    gender: 'мальчик',
    age: '9 месяцев',
    breed: 'Джек-рассел-терьер',
    type: 'dog',
    description: 'Маленький энерджайзер! Обожает активные игры, длительные прогулки и копать ямки',
    image: '/img/4071ce97-a54f-452c-9144-dc03b6736664.jpg'
  },
  {
    name: 'Василиса',
    gender: 'девочка',
    age: '2 года',
    breed: 'Шотландская вислоухая',
    type: 'cat',
    description: 'Милая кошечка с забавными ушками. Ласковая, спокойная и очень привязана к хозяевам',
    image: '/img/fafac969-c31e-46dd-a68d-4dba4b6fda5d.jpg'
  },
  {
    name: 'Тайсон',
    gender: 'мальчик',
    age: '4 года',
    breed: 'Ротвейлер',
    type: 'dog',
    description: 'Верный охранник с мягким характером. Отлично дрессирован, идеален для частного дома',
    image: '/img/f073c044-4e66-43df-97ba-fae6f0615616.jpg'
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
  { icon: 'Truck', title: 'Отлов и стерилизация', description: 'Мы ловим беспризорных животных и проводим им стерилизацию, после чего возвращаем в естественную среду обитания' }
];

export default function Index() {
  const [typeFilter, setTypeFilter] = useState<'all' | AnimalType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const filteredAnimals = animals.filter(animal => {
    const matchesType = typeFilter === 'all' || animal.type === typeFilter;
    const matchesSearch = searchQuery === '' || 
      animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.breed.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="PawPrint" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Приют для животных</span>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#animals" className="hover:text-primary transition-colors">Воспитанники</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#tour" className="hover:text-primary transition-colors">Экскурсия</a>
              <a href="#news" className="hover:text-primary transition-colors">Новости</a>
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
              <a href="#news" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Новости</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2">Контакты</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Подари любовь бездомному питомцу
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждое животное заслуживает дом, заботу и любовь. Помогите нам дать им второй шанс на счастливую жизнь
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="rounded-full gap-2 bg-primary hover:bg-primary/90">
              <Icon name="Heart" size={20} />
              Взять питомца
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2">
              <Icon name="HandHeart" size={20} />
              Стать волонтером
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <Icon name="Users" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">Счастливых историй усыновления</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <Icon name="PawPrint" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold mb-2">150+</h3>
              <p className="text-muted-foreground">Животных ждут своих хозяев</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <Icon name="Heart" className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-muted-foreground">Круглосуточная забота и внимание</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="animals" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши воспитанники</h2>
          <p className="text-center text-muted-foreground mb-12">Познакомьтесь с животными, которые ищут свой дом</p>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex gap-2">
              <Button
                onClick={() => setTypeFilter('all')}
                variant={typeFilter === 'all' ? 'default' : 'outline'}
                className="rounded-full"
              >
                Все животные
              </Button>
              <Button
                onClick={() => setTypeFilter('dog')}
                variant={typeFilter === 'dog' ? 'default' : 'outline'}
                className="rounded-full gap-2"
              >
                <Icon name="Dog" size={18} />
                Собаки
              </Button>
              <Button
                onClick={() => setTypeFilter('cat')}
                variant={typeFilter === 'cat' ? 'default' : 'outline'}
                className="rounded-full gap-2"
              >
                <Icon name="Cat" size={18} />
                Кошки
              </Button>
            </div>
            
            <div className="w-full md:w-auto md:min-w-[300px]">
              <Input
                placeholder="Поиск по имени или породе..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map((animal, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Icon name={animal.type === 'dog' ? 'Dog' : 'Cat'} size={16} />
                    {animal.type === 'dog' ? 'Собака' : 'Кошка'}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{animal.name}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Info" size={16} />
                      <span className="font-semibold">Порода:</span> {animal.breed}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="User" size={16} />
                      <span className="font-semibold">Пол:</span> {animal.gender}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      <span className="font-semibold">Возраст:</span> {animal.age}
                    </p>
                  </div>
                  <p className="text-sm mb-4 text-muted-foreground">{animal.description}</p>
                  <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
                    <Icon name="Heart" size={18} className="mr-2" />
                    Забрать домой
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredAnimals.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">По вашему запросу ничего не найдено</p>
              <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Галерея приюта</h2>
          <p className="text-center text-muted-foreground mb-12">Загляните в нашу жизнь - посмотрите, как мы заботимся о наших питомцах</p>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Home" className="text-primary" size={28} />
                Вольеры для собак
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/fcc13289-9f62-49f5-9a6e-100fe8834ce3.jpg" alt="Вольеры" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/e2dfee7a-5b51-47bf-b2dc-98933c6341e1.jpg" alt="Кормление собак" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Кормление питомцев</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Cat" className="text-primary" size={28} />
                Комната для кошек
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/6e1e7ee5-0d61-4d83-a69a-82d2912b2b7a.jpg" alt="Комната для кошек" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/6712d14d-797d-4287-813c-6fd126fab68a.jpg" alt="Расчесывание кошки" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Расчесывание и уход за шерстью</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Trees" className="text-primary" size={28} />
                Площадка для выгула
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/27504323-b56f-44a4-8979-d98558ce49f3.jpg" alt="Площадка для выгула" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/4e0859ed-daf2-4d6f-a358-f32d0508a81b.jpg" alt="Прогулка с собаками" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Прогулки на свежем воздухе</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Stethoscope" className="text-primary" size={28} />
                Ветеринарный кабинет
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/c046d6c4-feb8-47c0-9967-3a4730f167f1.jpg" alt="Ветеринарный кабинет" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/aae188a3-b1ec-46dd-84d9-6951afa5c2fe.jpg" alt="Вакцинация" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Вакцинация животных</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/9ff0f5b1-f4d0-4abb-8aa0-000bf99314d7.jpg" alt="Купание собаки" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Купание и гигиена</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Scissors" className="text-primary" size={28} />
                Груминг и уход
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/df26d611-d53a-4dc5-abdd-4caf525946c4.jpg" alt="Стрижка шерсти" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Стрижка шерсти</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/d2b51569-4f92-409f-9270-5f6a5fef05bd.jpg" alt="Подстригание когтей" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Подстригание когтей</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/6712d14d-797d-4287-813c-6fd126fab68a.jpg" alt="Расчесывание" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Расчесывание длинношерстных</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Sparkles" className="text-primary" size={28} />
                Игровая зона
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/748668e6-b50c-48b8-8443-6b46f8f24977.jpg" alt="Игровая зона" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/bac52cab-c9c2-4451-a8a3-98970c0e58f5.jpg" alt="Игры с животными" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Игры и социализация</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Новости приюта</h2>
          <p className="text-center text-muted-foreground mb-12">Последние события и истории спасения наших питомцев</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img src="/img/f9a00142-90a5-41a4-a885-6db0b3fa3db6.jpg" alt="Новость" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  01 Января 2025
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Спасли 5 щенков из подвала</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Волонтеры приюта спасли пятерых щенков, которые были найдены в заброшенном подвале. 
                  Все малыши здоровы и скоро будут готовы к усыновлению!
                </p>
                <Button variant="outline" className="rounded-full w-full">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Читать далее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img src="/img/2916cc7b-5829-4598-a0a0-46cae2264678.jpg" alt="Новость" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  15 Января 2025
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">День открытых дверей - успех!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  В минувшие выходные мы провели день открытых дверей. Приют посетило более 100 человек, 
                  и 12 питомцев обрели новый дом!
                </p>
                <Button variant="outline" className="rounded-full w-full">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Читать далее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img src="/img/395869e9-d5aa-45cf-adac-7141c34be4ec.jpg" alt="Новость" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  20 Января 2025
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Новое оборудование для клиники</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Благодаря вашей помощи мы закупили современное ветеринарное оборудование. 
                  Теперь мы сможем проводить больше операций прямо в приюте!
                </p>
                <Button variant="outline" className="rounded-full w-full">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Читать далее
                </Button>
              </CardContent>
            </Card>
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

      <section id="tour" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Icon name="Calendar" className="text-primary mx-auto mb-4" size={64} />
            <h2 className="text-4xl font-bold mb-4">Запишитесь на экскурсию</h2>
            <p className="text-lg text-muted-foreground">
              Приходите познакомиться с нашими питомцами лично! Мы проводим бесплатные экскурсии по приюту каждую субботу и воскресенье
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Спасибо за запись! Мы свяжемся с вами для подтверждения времени экскурсии.');
            }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя *</label>
                  <Input placeholder="Иван Иванов" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон *</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input type="email" placeholder="example@mail.ru" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Количество человек *</label>
                  <Input type="number" min="1" max="10" defaultValue="1" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Предпочитаемая дата *</label>
                <Input type="date" required />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Предпочитаемое время</label>
                <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option>10:00 - 12:00</option>
                  <option>12:00 - 14:00</option>
                  <option>14:00 - 16:00</option>
                  <option>16:00 - 18:00</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Комментарий</label>
                <Textarea 
                  placeholder="Расскажите, что вас интересует больше всего..." 
                  rows={3}
                />
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Info" size={20} className="text-primary" />
                  Что вас ждет на экскурсии:
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Знакомство с историей приюта</li>
                  <li>• Посещение всех зон: вольеры, игровая комната, ветклиника</li>
                  <li>• Общение с питомцами под присмотром специалистов</li>
                  <li>• Консультация по усыновлению животных</li>
                  <li>• Продолжительность: 1-1.5 часа</li>
                </ul>
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на экскурсию
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Истории наших друзей</h2>
          <p className="text-center text-muted-foreground mb-12">Счастливые истории усыновления питомцев</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Требования для усыновления</h2>
          <p className="text-center text-muted-foreground mb-8">Что нужно для того, чтобы взять питомца домой</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <Card key={index} className="p-6 flex gap-4">
                <Icon name={req.icon as any} className="text-primary flex-shrink-0" size={32} />
                <div>
                  <h3 className="font-bold mb-2">{req.title}</h3>
                  <p className="text-sm text-muted-foreground">{req.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Как помочь приюту</h2>
          <p className="text-center text-muted-foreground mb-12">Любая помощь важна для наших питомцев</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpItems.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <Icon name={item.icon as any} className="text-primary mb-4" size={40} />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4 bg-gradient-to-r from-primary/20 to-primary/10">
        <div className="container mx-auto max-w-2xl text-center">
          <Icon name="Heart" className="text-primary mx-auto mb-6" size={64} />
          <h2 className="text-4xl font-bold mb-4">Поддержите наш приют</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ваше пожертвование помогает нам спасать жизни, обеспечивать питанием, лечением и заботой наших подопечных
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col gap-4">
              <Input placeholder="Сумма пожертвования" type="number" className="text-center text-lg" />
              <Button size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Помочь сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">График работы приюта</h2>
          <p className="text-center text-muted-foreground mb-8">Вы можете посетить нас в любое удобное время</p>
          
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <Icon name="Calendar" className="text-primary" size={32} />
                <div>
                  <h3 className="font-bold">Будние дни</h3>
                  <p className="text-muted-foreground">Пн-Пт: 10:00 - 19:00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Sun" className="text-primary" size={32} />
                <div>
                  <h3 className="font-bold">Выходные</h3>
                  <p className="text-muted-foreground">Сб-Вс: 11:00 - 17:00</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-8">Дополнительные услуги нашего приюта</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <Icon name={service.icon as any} className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12">Есть вопросы? Мы всегда рады помочь!</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Добрых Дел, 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@shelter.ru</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <Input 
                  type="tel" 
                  placeholder="Телефон" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <Textarea 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
                <Button type="submit" className="w-full rounded-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="PawPrint" size={32} />
                <span className="text-xl font-bold">Приют для животных</span>
              </div>
              <p className="text-gray-400">Помогаем бездомным животным обрести дом и любящую семью с 2010 года</p>
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
            <p>© 2024 Приют для животных. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}