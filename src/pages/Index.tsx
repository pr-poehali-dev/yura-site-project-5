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
    name: 'Барни',
    gender: 'мальчик',
    age: '2 года',
    breed: 'Бигль',
    type: 'dog',
    description: 'Дружелюбный бигль с отличным нюхом. Любит исследовать окрестности и играть с другими собаками',
    image: '/img/fefd022b-19d2-4fe9-aaaf-cdbee8ba161c.jpg'
  },
  {
    name: 'Рекс',
    gender: 'мальчик',
    age: '3 года',
    breed: 'Доберман',
    type: 'dog',
    description: 'Элегантный и благородный охранник. Умный, верный и преданный своей семье',
    image: '/img/511f159e-162a-42da-9892-75d7083c8edb.jpg'
  },
  {
    name: 'Тиша',
    gender: 'девочка',
    age: '1 год',
    breed: 'Йоркширский терьер',
    type: 'dog',
    description: 'Маленькая модница с шелковистой шерстью. Энергичная и ласковая, идеальна для квартиры',
    image: '/img/d304cdcd-3265-4e00-8b6e-fabb84744335.jpg'
  },
  {
    name: 'Макс',
    gender: 'мальчик',
    age: '4 года',
    breed: 'Такса',
    type: 'dog',
    description: 'Забавный длинный песик с короткими лапками. Любопытный охотник и верный друг',
    image: '/img/6b043f38-99ed-4e16-9f6a-2dc86a8d1822.jpg'
  },
  {
    name: 'Чарли',
    gender: 'мальчик',
    age: '3 года',
    breed: 'Мопс',
    type: 'dog',
    description: 'Очаровательный мопс с забавной мордочкой. Ласковый, спокойный и обожает детей',
    image: '/img/ebc0c6f8-a06b-4baf-97d2-ecb5f59d0607.jpg'
  },
  {
    name: 'Шарик',
    gender: 'мальчик',
    age: '5 лет',
    breed: 'Немецкая овчарка',
    type: 'dog',
    description: 'Умный и верный пёс. Отлично ладит с детьми, знает команды: сидеть, лежать, дай лапу',
    image: '/img/c2742fac-2efc-47e0-abdc-d40a936e04f7.jpg'
  },
  {
    name: 'Бадди',
    gender: 'мальчик',
    age: '2 года',
    breed: 'Лабрадор',
    type: 'dog',
    description: 'Добрейший лабрадор с золотым характером. Обожает плавать и приносить игрушки',
    image: '/img/b637eecb-6b01-49e2-a45d-e92ad28dc4a4.jpg'
  },
  {
    name: 'Люси',
    gender: 'девочка',
    age: '1 год',
    breed: 'Пудель',
    type: 'dog',
    description: 'Элегантный белоснежный пудель. Умная, легко обучаемая и очень общительная',
    image: '/img/ff92b4f4-16f2-4dc1-adba-9ea77dd8e442.jpg'
  },
  {
    name: 'Луна',
    gender: 'девочка',
    age: '8 месяцев',
    breed: 'Хаски',
    type: 'dog',
    description: 'Очаровательная хаски с голубыми глазами. Активная, любит бегать и играть в снегу',
    image: '/img/b545cd6a-44bf-4d8b-905a-87b68ced0b8b.jpg'
  },
  {
    name: 'Голди',
    gender: 'девочка',
    age: '3 года',
    breed: 'Золотистый ретривер',
    type: 'dog',
    description: 'Солнечная красавица с золотистой шерстью. Добрейшая душа, обожает всех людей',
    image: '/img/e5a0620c-c1e8-4e99-88d7-79f19a7da9fd.jpg'
  },
  {
    name: 'Василий',
    gender: 'мальчик',
    age: '2 года',
    breed: 'Британская короткошерстная',
    type: 'cat',
    description: 'Плюшевый британец с круглой мордочкой. Спокойный, независимый и очень милый',
    image: '/img/14c90348-33cf-4d69-bcfc-fc6beae2741b.jpg'
  },
  {
    name: 'Мурка',
    gender: 'девочка',
    age: '1 год',
    breed: 'Мейн-кун',
    type: 'cat',
    description: 'Крупная кошка с добрым нравом и пушистой шерстью. Любит детей и спокойную атмосферу',
    image: '/img/bd755f0a-0e80-4878-b81c-b38464a3d498.jpg'
  },
  {
    name: 'Тигра',
    gender: 'мальчик',
    age: '1 год',
    breed: 'Бенгальская кошка',
    type: 'cat',
    description: 'Маленький леопард с диким окрасом. Активный, игривый и очень красивый',
    image: '/img/99a6cd9c-f443-4f76-b25f-cbfde4ff4d99.jpg'
  },
  {
    name: 'Пушок',
    gender: 'мальчик',
    age: '3 года',
    breed: 'Сибирская кошка',
    type: 'cat',
    description: 'Пушистый сибиряк с богатой шубкой. Ласковый охотник и верный друг',
    image: '/img/4ffe56e7-8984-4c4d-b0d9-3e552deb2b69.jpg'
  },
  {
    name: 'Сапфир',
    gender: 'мальчик',
    age: '2 года',
    breed: 'Сиамская кошка',
    type: 'cat',
    description: 'Изящный сиамец с пронзительными голубыми глазами. Разговорчивый и преданный',
    image: '/img/b3b466a2-3f22-4850-9f4f-b8dbfdf5debc.jpg'
  },
  {
    name: 'Пушинка',
    gender: 'девочка',
    age: '4 года',
    breed: 'Персидская кошка',
    type: 'cat',
    description: 'Пушистая красавица-персиянка с королевскими манерами. Любит расчесывание и ласку',
    image: '/img/26905823-79b6-44ba-b54a-b3530039bd58.jpg'
  },
  {
    name: 'Марсель',
    gender: 'мальчик',
    age: '1 год',
    breed: 'Рэгдолл',
    type: 'cat',
    description: 'Голубоглазый красавец породы рэгдолл. Расслабленный, ласковый и невероятно мягкий',
    image: '/img/048c113c-837d-461a-adae-0f0226398a36.jpg'
  },
  {
    name: 'Снежинка',
    gender: 'девочка',
    age: '2 года',
    breed: 'Турецкая ангора',
    type: 'cat',
    description: 'Белоснежная красавица с длинной шерстью. Изящная, игривая и очень общительная',
    image: '/img/6a5b1d97-b51a-48a2-ab23-76d92983fcfa.jpg'
  },
  {
    name: 'Лесси',
    gender: 'девочка',
    age: '3 года',
    breed: 'Норвежская лесная кошка',
    type: 'cat',
    description: 'Величественная лесная красавица. Независимая, умная и отличная охотница',
    image: '/img/5e3e670c-78b8-4007-9eca-0f1e719359c4.jpg'
  },
  {
    name: 'Грей',
    gender: 'мальчик',
    age: '2 года',
    breed: 'Нибелунг',
    type: 'cat',
    description: 'Редкий серебристый красавец с зелеными глазами. Спокойный, верный и элегантный',
    image: '/img/5b3d40db-9077-4ada-8789-3db20f54caf3.jpg'
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
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-muted-foreground">Волонтёров помогают приюту</p>
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
                <Icon name="Cat" className="text-primary" size={28} />
                Наши кошки
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/14c90348-33cf-4d69-bcfc-fc6beae2741b.jpg" alt="Британская кошка" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Британская кошка</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/bd755f0a-0e80-4878-b81c-b38464a3d498.jpg" alt="Мейн-кун" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Мейн-кун</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/26905823-79b6-44ba-b54a-b3530039bd58.jpg" alt="Персидская кошка" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Персидская кошка</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Dog" className="text-primary" size={28} />
                Наши собаки
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/e5a0620c-c1e8-4e99-88d7-79f19a7da9fd.jpg" alt="Золотистый ретривер" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Золотистый ретривер</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/b545cd6a-44bf-4d8b-905a-87b68ced0b8b.jpg" alt="Хаски" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Сибирский хаски</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/c2742fac-2efc-47e0-abdc-d40a936e04f7.jpg" alt="Немецкая овчарка" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Немецкая овчарка</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Sparkles" className="text-primary" size={28} />
                Маленькие породы
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/d304cdcd-3265-4e00-8b6e-fabb84744335.jpg" alt="Йоркширский терьер" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Йоркширский терьер</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <img src="/img/ebc0c6f8-a06b-4baf-97d2-ecb5f59d0607.jpg" alt="Мопс" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-4">
                    <p className="text-white font-semibold">Мопс</p>
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
                  05 Октября 2025
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
                  12 Октября 2025
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Осенняя выставка-пристройство животных</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  В эти выходные состоится большая осенняя выставка! Приходите познакомиться с нашими питомцами. 
                  Для всех желающих усыновить - консультации ветеринара бесплатно!
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
                  28 Октября 2025
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Приют готовится к зиме</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Мы активно готовимся к зиме: утепляем вольеры, закупаем теплые лежанки и корм. 
                  Если хотите помочь - любые теплые одеяла и подстилки очень нужны!
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

      <section id="volunteer" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Icon name="HandHeart" className="text-primary mx-auto mb-4" size={64} />
            <h2 className="text-4xl font-bold mb-4">Станьте волонтёром приюта</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Помогайте нашим питомцам обрести дом! Волонтёры - сердце нашего приюта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="ListChecks" className="text-primary" size={28} />
                Чем занимаются волонтёры
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Выгул собак и социализация животных</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Кормление и уход за питомцами</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Уборка вольеров и территории</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Помощь на мероприятиях и днях открытых дверей</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Фото и видеосъемка питомцев для соцсетей</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Транспортировка животных к ветеринару</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="UserCheck" className="text-primary" size={28} />
                Требования к волонтёрам
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Возраст от 18 лет (от 16 с согласия родителей)</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Любовь к животным и ответственность</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Готовность приезжать минимум 1 раз в неделю</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Физическая возможность работать с животными</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Позитивный настрой и командный дух</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Прохождение инструктажа по технике безопасности</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-primary/5">
            <h3 className="text-2xl font-bold mb-6 text-center">Заявка на волонтёрство</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время для собеседования.');
            }} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Имя и фамилия *</label>
                  <Input placeholder="Иван Иванов" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Возраст *</label>
                  <Input type="number" min="16" max="99" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон *</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <Input type="email" placeholder="example@mail.ru" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Когда готовы приступить?</label>
                <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option>Сразу после одобрения</option>
                  <option>Через 1-2 недели</option>
                  <option>Через месяц</option>
                  <option>Обсудим индивидуально</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Есть ли опыт работы с животными?</label>
                <Textarea 
                  placeholder="Расскажите о вашем опыте взаимодействия с животными..." 
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Почему вы хотите стать волонтёром?</label>
                <Textarea 
                  placeholder="Поделитесь вашей мотивацией..." 
                  rows={3}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section id="help" className="py-20 px-4 bg-secondary/30">
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
              <p className="text-gray-400">Помогаем бездомным животным обрести дом и любящую семью. Наш проект только начинается!</p>
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