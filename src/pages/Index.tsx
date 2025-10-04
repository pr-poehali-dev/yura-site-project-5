import { useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AnimalCard from '@/components/sections/AnimalCard';
import Footer from '@/components/sections/Footer';
import { animals } from '@/data/animalsData';
import type { AnimalType } from '@/data/animalsData';
import { Button } from '@/components/ui/button';

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

      <Footer />
    </div>
  );
}
