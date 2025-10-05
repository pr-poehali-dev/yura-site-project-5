export type AnimalType = 'dog' | 'cat';

export interface Animal {
  name: string;
  gender: string;
  age: string;
  breed: string;
  description: string;
  image: string;
  type: AnimalType;
}

export const animals: Animal[] = [
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
    name: 'Тоша',
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