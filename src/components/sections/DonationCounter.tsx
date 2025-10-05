import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function DonationCounter() {
  const currentAmount = 487500;
  const goalAmount = 650000;
  const percentage = Math.round((currentAmount / goalAmount) * 100);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Icon name="Target" size={32} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Текущий сбор средств</h2>
            <p className="text-lg text-muted-foreground">
              Помогите нам собрать средства на зимние нужды приюта
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-2xl font-bold text-primary">
                  {currentAmount.toLocaleString('ru-RU')} ₽
                </span>
                <span className="text-lg text-muted-foreground">
                  из {goalAmount.toLocaleString('ru-RU')} ₽
                </span>
              </div>
              <Progress value={percentage} className="h-4" />
              <p className="text-center mt-2 text-sm text-muted-foreground">
                Собрано {percentage}% от цели
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <Icon name="Thermometer" size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold mb-1">Утепление вольеров</p>
                <p className="text-xs text-muted-foreground">150 000 ₽</p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <Icon name="ShoppingCart" size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold mb-1">Корм на зиму</p>
                <p className="text-xs text-muted-foreground">300 000 ₽</p>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <Icon name="Stethoscope" size={24} className="text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold mb-1">Медикаменты</p>
                <p className="text-xs text-muted-foreground">200 000 ₽</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="flex-1 rounded-full gap-2 text-lg">
                <Icon name="Heart" size={20} />
                Помочь сейчас
              </Button>
              <Button size="lg" variant="outline" className="flex-1 rounded-full gap-2 text-lg">
                <Icon name="Share2" size={20} />
                Поделиться
              </Button>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg mt-4">
              <Icon name="Info" size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-900">
                Все собранные средства идут напрямую на нужды приюта. Мы публикуем отчёты о расходах ежемесячно.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
