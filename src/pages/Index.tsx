import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToRules = () => {
    document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' });
  };

  const gameRules = [
    {
      icon: "Map",
      title: "Выбери локацию",
      description: "Исследуй разнообразные водоёмы: от тихих озёр до бурных рек. Каждая локация населена уникальными видами рыб.",
      badge: "Шаг 1"
    },
    {
      icon: "Wand2",
      title: "Подбери снасти",
      description: "Используй правильное снаряжение для каждого вида рыбы. Спиннинг для хищников, поплавочная удочка для мирной рыбы.",
      badge: "Шаг 2"
    },
    {
      icon: "Target",
      title: "Заброс удочки",
      description: "Прицелься и выбери силу заброса. Учитывай глубину водоёма и повадки рыбы в это время суток.",
      badge: "Шаг 3"
    },
    {
      icon: "Timer",
      title: "Жди поклёвку",
      description: "Следи за поплавком или кончиком удилища. Будь терпелив — рыбалка требует выдержки и концентрации.",
      badge: "Шаг 4"
    },
    {
      icon: "Zap",
      title: "Подсекай вовремя",
      description: "Как только увидишь поклёвку — действуй быстро! Правильная подсечка — залог успешного вываживания.",
      badge: "Шаг 5"
    },
    {
      icon: "Award",
      title: "Вываживай трофей",
      description: "Утоми рыбу, не дай леске порваться. Крупные экземпляры требуют мастерства и терпения.",
      badge: "Шаг 6"
    }
  ];

  const fishTypes = [
    { name: "Окунь", weight: "до 2 кг", difficulty: "Легко", color: "bg-green-100 text-green-800" },
    { name: "Щука", weight: "до 15 кг", difficulty: "Средне", color: "bg-yellow-100 text-yellow-800" },
    { name: "Сом", weight: "до 50 кг", difficulty: "Сложно", color: "bg-red-100 text-red-800" },
    { name: "Карп", weight: "до 20 кг", difficulty: "Средне", color: "bg-blue-100 text-blue-800" },
  ];

  return (
    <div className="min-h-screen">
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/projects/7217d33f-0778-402f-85f0-fb05142563aa/files/2413b1dc-86fb-449f-b0cf-fd74633f14a2.jpg')`
        }}
      >
        <div className="text-center z-10 px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Реалистичная Рыбалка
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Погрузись в атмосферу настоящей рыбалки. Выбирай снасти, исследуй водоёмы, лови трофейную рыбу.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Начать игру
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/90 hover:bg-white text-primary border-2 border-white text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform"
              onClick={scrollToRules}
            >
              <Icon name="BookOpen" className="mr-2" size={24} />
              Правила игры
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={40} />
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg py-2 px-4" variant="secondary">
              Особенности игры
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что тебя ждёт</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реалистичная физика, разнообразные локации и множество видов рыб
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 animate-float">
                  <Icon name="Fish" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">50+ видов рыб</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  От мелкого окуня до огромного сома. Каждая рыба имеет уникальное поведение и требует особого подхода.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-secondary">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Icon name="MapPin" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-2xl">20 локаций</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Горные реки, лесные озёра, морские заливы. Каждая локация с реалистичной графикой и звуками природы.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-accent">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '1s' }}>
                  <Icon name="Package" className="text-accent" size={32} />
                </div>
                <CardTitle className="text-2xl">100+ снастей</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Спиннинги, поплавочные удочки, фидеры. Апгрейдь снаряжение и стань настоящим мастером рыбалки.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg py-2 px-4">
              Как играть
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Правила игры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простые шаги к твоему первому трофею
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {gameRules.map((rule, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={rule.icon} className="text-primary" size={28} />
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {rule.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{rule.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {rule.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Trophy" className="text-secondary" size={28} />
                  </div>
                  <CardTitle className="text-3xl">Виды рыб</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Разные виды требуют разных навыков и снастей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {fishTypes.map((fish, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
                    >
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{fish.name}</h4>
                        <p className="text-sm text-muted-foreground">Вес: {fish.weight}</p>
                      </div>
                      <Badge className={fish.color}>{fish.difficulty}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section 
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://cdn.poehali.dev/projects/7217d33f-0778-402f-85f0-fb05142563aa/files/82d5ec8c-2095-4664-bd9a-eb424e11a337.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готов к большому улову?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Начни своё приключение прямо сейчас. Стань легендой рыболовного мира!
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white text-xl px-10 py-7 shadow-2xl hover:scale-110 transition-transform"
          >
            <Icon name="Gamepad2" className="mr-2" size={28} />
            Начать рыбалку
          </Button>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Реалистичная Рыбалка. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
