import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NewsCardProps {
  date: string;
  title: string;
  description: string;
  image: string;
}

export default function NewsCard({ date, title, description, image }: NewsCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt="Новость" className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
          {date}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <Button variant="outline" className="rounded-full w-full">
          <Icon name="ArrowRight" size={16} className="mr-2" />
          Читать далее
        </Button>
      </CardContent>
    </Card>
  );
}
