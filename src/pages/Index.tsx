import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const animals = [
  {
    name: 'Мухтар',
    gender: 'мальчик',
    age: 'около 5 лет',
    description: 'Активный и игривый пес, обожает долгие прогулки и апортировку мячика. Отлично ладит с детьми, знает базовые команды',
    image: '/img/fcc13289-9f62-49f5-9a6e-100fe8834ce3.jpg'
  },
  {
    name: 'Алиса',
    gender: 'девочка',
    age: 'около 3 лет',
    description: 'Спокойная и ласковая собака, идеальна для квартирного содержания. Любит обниматься и спать рядом с хозяином',
    image: '/img/c046d6c4-feb8-47c0-9967-3a4730f167f1.jpg'
  },
  {
    name: 'Мурка',
    gender: 'девочка',
    age: 'около 4 лет',
    description: 'Независимая кошечка с характером, предпочитает спокойную обстановку. Любит сидеть на подоконнике и наблюдать за птицами',
    image: '/img/6e1e7ee5-0d61-4d83-a69a-82d2912b2b7a.jpg'
  },
  {
    name: 'Тоша',
    gender: 'мальчик',
    age: '3 месяца',
    description: 'Игривый котенок, полон энергии! Обожает играть с игрушками-мышками и гоняться за солнечными зайчиками',
    image: '/img/f073c044-4e66-43df-97ba-fae6f0615616.jpg'
  },
  {
    name: 'Бусинка',
    gender: 'девочка',
    age: '6 месяцев',
    description: 'Маленькая белоснежная собачка с добрым сердцем. Очень привязывается к людям, любит сидеть на ручках',
    image: '/img/3c640813-1848-48ec-846a-8febfd945d67.jpg'
  },
  {
    name: 'Рыжик',
    gender: 'мальчик',
    age: '4 месяца',
    description: 'Крохотный щенок с огромной любовью к жизни! Очень социальный, обожает знакомиться с новыми людьми и животными',
    image: '/img/f175e0fd-9f04-47f1-89f0-163df9b70e70.jpg'
  },
  {
    name: 'Грей',
    gender: 'мальчик',
    age: 'около 7 лет',
    description: 'Мудрый и спокойный пес, прекрасный компаньон для размеренных прогулок. Очень терпелив и послушен',
    image: '/img/0ed6522c-6ff1-41c6-bbf6-cf705b007d88.jpg'
  },
  {
    name: 'Смокинг',
    gender: 'мальчик',
    age: 'около 2 лет',
    description: 'Элегантный черно-белый кот с аристократичными манерами. Любит вкусную еду и мягкие подушки',
    image: '/img/da30717b-7e57-4b78-ac3e-2e5456457d18.jpg'
  },
  {
    name: 'Дымка',
    gender: 'девочка',
    age: '2 месяца',
    description: 'Крошечная полосатая малышка с любопытным характером. Первая исследует все новое и мурлычет как моторчик',
    image: '/img/1c83f061-e6a6-478a-b1c4-e2439fca08ce.jpg'
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

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="PawPrint" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Приют для животных</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#animals" className="hover:text-primary transition-colors">Воспитанники</a>
              <a href="#help" className="hover:text-primary transition-colors">Как помочь</a>
              <a href="#about" className="hover:text-primary transition-colors">О приюте</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </nav>
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
          <p className="text-center text-muted-foreground mb-12">Любой желающий может забрать к себе животное из приюта</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.map((animal, index) => (
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
                  <p className="text-sm text-muted-foreground mb-3">{animal.age}</p>
                  <p className="text-sm mb-4">{animal.description}</p>
                  <Button className="w-full rounded-full">Забрать домой</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="py-20 px-4 bg-secondary/30">
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
    </div>
  );
}