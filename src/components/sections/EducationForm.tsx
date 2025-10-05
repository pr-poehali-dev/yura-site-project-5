import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function EducationForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи на обучение.",
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      experience: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Ваше имя *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              placeholder="Введите ваше имя"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                placeholder="example@mail.ru"
              />
            </div>
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-semibold mb-2">
              Опыт работы с животными
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            >
              <option value="">Выберите вариант</option>
              <option value="none">Нет опыта</option>
              <option value="pet-owner">Есть домашние питомцы</option>
              <option value="volunteer">Работал(а) волонтёром</option>
              <option value="professional">Профессиональный опыт</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Дополнительная информация
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
              placeholder="Расскажите о себе, почему хотите участвовать в программе..."
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full rounded-full gap-2 text-lg py-6"
          >
            <Icon name="Send" size={20} />
            Записаться на обучение
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
