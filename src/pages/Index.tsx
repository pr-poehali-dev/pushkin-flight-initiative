import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  specs: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Премиум наушники',
    price: 24990,
    image: 'https://cdn.poehali.dev/projects/8f1e7080-353d-49cc-be0e-306cb79d7319/files/cf329d9b-b83e-463a-99fc-ae8e63a56edb.jpg',
    category: 'Аудио',
    specs: ['Шумоподавление', 'Bluetooth 5.0', 'До 30 часов работы']
  },
  {
    id: 2,
    name: 'Смартфон Pro',
    price: 89990,
    image: 'https://cdn.poehali.dev/projects/8f1e7080-353d-49cc-be0e-306cb79d7319/files/6667affe-ca2c-464a-b34b-8a32b7863bf5.jpg',
    category: 'Смартфоны',
    specs: ['128GB памяти', '6.7" OLED', '5G поддержка']
  },
  {
    id: 3,
    name: 'Умные часы',
    price: 34990,
    image: 'https://cdn.poehali.dev/projects/8f1e7080-353d-49cc-be0e-306cb79d7319/files/4d267519-6ecb-4b1a-8c9c-f3eef66fbbc3.jpg',
    category: 'Носимые устройства',
    specs: ['Мониторинг здоровья', 'Водонепроницаемые', '7 дней автономности']
  },
  {
    id: 4,
    name: 'Беспроводная зарядка',
    price: 4990,
    image: 'https://cdn.poehali.dev/projects/8f1e7080-353d-49cc-be0e-306cb79d7319/files/cf329d9b-b83e-463a-99fc-ae8e63a56edb.jpg',
    category: 'Аксессуары',
    specs: ['15W быстрая зарядка', 'Qi стандарт', 'LED индикатор']
  },
  {
    id: 5,
    name: 'Портативная колонка',
    price: 12990,
    image: 'https://cdn.poehali.dev/projects/8f1e7080-353d-49cc-be0e-306cb79d7319/files/cf329d9b-b83e-463a-99fc-ae8e63a56edb.jpg',
    category: 'Аудио',
    specs: ['360° звук', 'Защита IP67', '20 часов музыки']
  },
  {
    id: 6,
    name: 'Планшет Ultra',
    price: 59990,
    image: 'https://cdn.poehali.dev/projects/8f1e7080-353d-49cc-be0e-306cb79d7319/files/6667affe-ca2c-464a-b34b-8a32b7863bf5.jpg',
    category: 'Планшеты',
    specs: ['11" дисплей', '256GB память', 'Поддержка стилуса']
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'about'>('home');

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold">TechStore</h1>
          </div>
          <nav className="flex gap-6">
            <button
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              О нас
            </button>
          </nav>
          <Button size="sm" className="gap-2">
            <Icon name="ShoppingCart" size={18} />
            Корзина
          </Button>
        </div>
      </header>

      {activeSection === 'home' && (
        <main className="container py-8">
          <section className="mb-16 text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">
              Премиум электроника
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Инновационные гаджеты для вашей жизни. Качество, проверенное временем.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="ShoppingBag" size={20} />
                Каталог
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Info" size={20} />
                Узнать больше
              </Button>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold">Популярные товары</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Все категории</Button>
                <Button variant="outline" size="sm">
                  <Icon name="SlidersHorizontal" size={16} />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="group hover:shadow-lg transition-all duration-300 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden bg-secondary aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Badge className="absolute top-4 right-4">{product.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{product.name}</CardTitle>
                    <CardDescription className="mb-4">
                      <div className="flex flex-col gap-1">
                        {product.specs.map((spec, idx) => (
                          <span key={idx} className="flex items-center gap-2 text-xs">
                            <Icon name="Check" size={14} className="text-primary" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </CardDescription>
                    <p className="text-3xl font-bold">{product.price.toLocaleString('ru-RU')} ₽</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex gap-2">
                    <Button className="flex-1 gap-2">
                      <Icon name="ShoppingCart" size={18} />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" size={18} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-16 py-16 px-8 bg-secondary rounded-2xl text-center">
            <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-3xl font-bold mb-4">Специальное предложение</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Подпишитесь на рассылку и получите скидку 15% на первый заказ
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 rounded-lg border bg-background"
              />
              <Button>Подписаться</Button>
            </div>
          </section>
        </main>
      )}

      {activeSection === 'about' && (
        <main className="container py-16 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">О нас</h2>
            
            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon name="Store" size={32} className="text-primary mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Наш магазин</h3>
                      <p className="text-muted-foreground">
                        TechStore — ведущий магазин электроники и гаджетов. Мы специализируемся на продаже 
                        инновационных устройств, которые делают жизнь проще и интереснее.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Award" size={40} className="mx-auto mb-4 text-primary" />
                    <h4 className="font-bold mb-2">Качество</h4>
                    <p className="text-sm text-muted-foreground">
                      Только оригинальные товары от проверенных производителей
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Truck" size={40} className="mx-auto mb-4 text-primary" />
                    <h4 className="font-bold mb-2">Доставка</h4>
                    <p className="text-sm text-muted-foreground">
                      Быстрая доставка по всей России в течение 1-3 дней
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Shield" size={40} className="mx-auto mb-4 text-primary" />
                    <h4 className="font-bold mb-2">Гарантия</h4>
                    <p className="text-sm text-muted-foreground">
                      Официальная гарантия на все товары до 2 лет
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Наши ценности</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <div>
                        <strong>Инновации:</strong> Мы следим за новинками рынка и предлагаем самые современные решения
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <div>
                        <strong>Клиентоориентированность:</strong> Ваше удовлетворение — наш приоритет
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-1" />
                      <div>
                        <strong>Прозрачность:</strong> Честные цены и полная информация о каждом товаре
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      )}

      <footer className="border-t mt-16">
        <div className="container py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
                <span className="font-bold text-lg">TechStore</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Инновационные гаджеты для современной жизни
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Смартфоны</li>
                <li>Аудио</li>
                <li>Носимые устройства</li>
                <li>Аксессуары</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О компании</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Гарантия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@techstore.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 TechStore. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
