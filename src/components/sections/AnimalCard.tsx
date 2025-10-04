import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AnimalCardProps {
  name: string;
  gender: string;
  age: string;
  breed: string;
  description: string;
  image: string;
  type: 'dog' | 'cat';
}

export default function AnimalCard({ name, gender, age, breed, description, image, type }: AnimalCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
          <Icon name={type === 'dog' ? 'Dog' : 'Cat'} size={16} />
          {type === 'dog' ? 'Собака' : 'Кошка'}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="space-y-2 mb-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Icon name="Info" size={16} />
            <span className="font-semibold">Порода:</span> {breed}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Icon name="User" size={16} />
            <span className="font-semibold">Пол:</span> {gender}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Icon name="Calendar" size={16} />
            <span className="font-semibold">Возраст:</span> {age}
          </p>
        </div>
        <p className="text-sm mb-4 text-muted-foreground">{description}</p>
        <Button className="w-full rounded-full bg-primary hover:bg-primary/90">
          <Icon name="Heart" size={18} className="mr-2" />
          Забрать домой
        </Button>
      </CardContent>
    </Card>
  );
}
