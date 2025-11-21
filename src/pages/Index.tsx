import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
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

  const topPlayers = [
    { rank: 1, name: "Рыболов-Мастер", trophy: "Сом 48.5 кг", location: "Волга", date: "15 ноя 2024", medal: "🥇" },
    { rank: 2, name: "Профи Удочки", trophy: "Щука 14.2 кг", location: "Ладожское озеро", date: "12 ноя 2024", medal: "🥈" },
    { rank: 3, name: "Король Заброса", trophy: "Карп 19.8 кг", location: "Дон", date: "10 ноя 2024", medal: "🥉" },
    { rank: 4, name: "Тихий Охотник", trophy: "Щука 13.5 кг", location: "Селигер", date: "08 ноя 2024", medal: "" },
    { rank: 5, name: "Речной Волк", trophy: "Судак 8.9 кг", location: "Волга", date: "06 ноя 2024", medal: "" },
    { rank: 6, name: "Мастер Спиннинга", trophy: "Окунь 1.9 кг", location: "Байкал", date: "05 ноя 2024", medal: "" },
  ];

  const achievements = [
    { 
      icon: "Fish", 
      title: "Первый улов", 
      description: "Поймай свою первую рыбу", 
      progress: 100,
      unlocked: true,
      color: "bg-green-500"
    },
    { 
      icon: "Target", 
      title: "Меткий стрелок", 
      description: "10 точных забросов подряд", 
      progress: 70,
      unlocked: false,
      color: "bg-blue-500"
    },
    { 
      icon: "Trophy", 
      title: "Трофейный охотник", 
      description: "Поймай рыбу весом более 20 кг", 
      progress: 45,
      unlocked: false,
      color: "bg-yellow-500"
    },
    { 
      icon: "Crown", 
      title: "Король водоёма", 
      description: "Стань первым в рейтинге", 
      progress: 0,
      unlocked: false,
      color: "bg-purple-500"
    },
    { 
      icon: "Zap", 
      title: "Молниеносная реакция", 
      description: "Сделай подсечку менее чем за 0.5 сек", 
      progress: 100,
      unlocked: true,
      color: "bg-orange-500"
    },
    { 
      icon: "MapPin", 
      title: "Исследователь", 
      description: "Посети все 20 локаций", 
      progress: 30,
      unlocked: false,
      color: "bg-teal-500"
    },
    { 
      icon: "Star", 
      title: "Коллекционер", 
      description: "Поймай все виды рыб", 
      progress: 58,
      unlocked: false,
      color: "bg-pink-500"
    },
    { 
      icon: "Users", 
      title: "Социальный рыболов", 
      description: "Участвуй в 5 турнирах", 
      progress: 100,
      unlocked: true,
      color: "bg-indigo-500"
    },
  ];

  const playerProfile = {
    name: "Рыболов-Профи",
    level: 24,
    experience: 7250,
    nextLevel: 10000,
    rank: "#47",
    totalCatches: 342,
    biggestCatch: { name: "Щука", weight: "12.5 кг" },
    favoriteLocation: "Озеро Селигер",
    equipment: [
      { icon: "Wand2", name: "Спиннинг Pro-X", level: 5, rarity: "epic" },
      { icon: "CircleDot", name: "Катушка Ultra 3000", level: 4, rarity: "rare" },
      { icon: "Sparkles", name: "Приманка Killer Pike", level: 3, rarity: "rare" },
    ],
    stats: [
      { label: "Успешность", value: "78%", icon: "TrendingUp" },
      { label: "Среднее время", value: "12 мин", icon: "Clock" },
      { label: "Точность заброса", value: "85%", icon: "Target" },
      { label: "Часов в игре", value: "156 ч", icon: "Timer" },
    ]
  };

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
              <Icon name="User" className="mr-2" size={18} />
              Твой профиль
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Профиль игрока</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Твоя статистика, снаряжение и достижения
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            <Card className="border-2 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24" />
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
                      <Icon name="User" size={48} className="text-white" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-3xl font-bold mb-2">{playerProfile.name}</h3>
                      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                          Уровень {playerProfile.level}
                        </Badge>
                        <Badge className="bg-accent/80 text-white hover:bg-accent">
                          Рейтинг {playerProfile.rank}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">{playerProfile.totalCatches}</div>
                      <div className="text-sm opacity-90">Всего поймано</div>
                    </div>
                  </div>
                  <div className="mt-6 relative z-10">
                    <div className="flex justify-between text-sm mb-2 opacity-90">
                      <span>Опыт до следующего уровня</span>
                      <span className="font-semibold">{playerProfile.experience} / {playerProfile.nextLevel} XP</span>
                    </div>
                    <Progress value={(playerProfile.experience / playerProfile.nextLevel) * 100} className="h-3 bg-white/20" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold flex items-center gap-2">
                        <Icon name="Fish" className="text-primary" size={20} />
                        Лучший улов
                      </h4>
                      <div className="p-4 bg-muted rounded-lg border-2 border-primary/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold text-primary">{playerProfile.biggestCatch.name}</div>
                            <div className="text-2xl font-bold">{playerProfile.biggestCatch.weight}</div>
                          </div>
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon name="Award" className="text-primary" size={32} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-bold flex items-center gap-2">
                        <Icon name="MapPin" className="text-secondary" size={20} />
                        Любимая локация
                      </h4>
                      <div className="p-4 bg-muted rounded-lg border-2 border-secondary/20">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold text-secondary">{playerProfile.favoriteLocation}</div>
                            <div className="text-sm text-muted-foreground">Чаще всего посещаешь</div>
                          </div>
                          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                            <Icon name="Heart" className="text-secondary" size={32} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold flex items-center gap-2">
                      <Icon name="BarChart3" className="text-accent" size={20} />
                      Статистика
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {playerProfile.stats.map((stat, index) => (
                        <div key={index} className="p-4 bg-muted rounded-lg text-center hover:shadow-md transition-shadow">
                          <Icon name={stat.icon} className="text-primary mx-auto mb-2" size={24} />
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Package" className="text-accent" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Снаряжение</CardTitle>
                    <CardDescription>Твоё текущее оборудование</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {playerProfile.equipment.map((item, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border-2 transition-all hover:shadow-lg hover:-translate-y-1 ${
                        item.rarity === 'epic' ? 'bg-purple-50 border-purple-300' : 'bg-blue-50 border-blue-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-12 h-12 ${item.rarity === 'epic' ? 'bg-purple-200' : 'bg-blue-200'} rounded-lg flex items-center justify-center`}>
                          <Icon name={item.icon} className={item.rarity === 'epic' ? 'text-purple-600' : 'text-blue-600'} size={24} />
                        </div>
                        <Badge className={item.rarity === 'epic' ? 'bg-purple-500' : 'bg-blue-500'}>
                          Ур. {item.level}
                        </Badge>
                      </div>
                      <div className="font-semibold mb-1">{item.name}</div>
                      <Badge variant="outline" className={item.rarity === 'epic' ? 'border-purple-400 text-purple-700' : 'border-blue-400 text-blue-700'}>
                        {item.rarity === 'epic' ? '⭐ Эпическое' : '💎 Редкое'}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="hover:scale-105 transition-transform">
                    <Icon name="ShoppingBag" className="mr-2" size={18} />
                    Улучшить снаряжение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
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

      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg py-2 px-4" variant="secondary">
              <Icon name="TrendingUp" className="mr-2" size={18} />
              Лидеры
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Рейтинг игроков</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Лучшие рыболовы и их трофейные уловы
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-2 shadow-xl overflow-hidden">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Trophy" className="text-primary" size={28} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Топ рыболовов недели</CardTitle>
                    <CardDescription className="text-base">
                      Самые впечатляющие трофеи последних дней
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-b-2">
                      <TableHead className="w-16 text-center font-bold">Место</TableHead>
                      <TableHead className="font-bold">Игрок</TableHead>
                      <TableHead className="font-bold">Трофей</TableHead>
                      <TableHead className="font-bold hidden md:table-cell">Локация</TableHead>
                      <TableHead className="font-bold hidden sm:table-cell">Дата</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topPlayers.map((player) => (
                      <TableRow 
                        key={player.rank} 
                        className={`hover:bg-muted/50 transition-colors ${player.rank <= 3 ? 'bg-accent/5' : ''}`}
                      >
                        <TableCell className="text-center font-bold">
                          <div className="flex items-center justify-center gap-2">
                            {player.medal ? (
                              <span className="text-2xl">{player.medal}</span>
                            ) : (
                              <span className="text-muted-foreground">{player.rank}</span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon name="User" className="text-primary" size={16} />
                            </div>
                            <span className="font-semibold">{player.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Icon name="Fish" className="text-secondary" size={18} />
                            <span className="font-medium text-secondary">{player.trophy}</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="MapPin" size={14} />
                            {player.location}
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell text-muted-foreground text-sm">
                          {player.date}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                <Icon name="List" className="mr-2" size={20} />
                Посмотреть полный рейтинг
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg py-2 px-4" variant="secondary">
              <Icon name="Award" className="mr-2" size={18} />
              Награды
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Достижения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Собирай награды, выполняй испытания и становись легендой
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    achievement.unlocked ? 'border-2 border-primary/30' : 'opacity-70'
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div 
                        className={`w-14 h-14 ${achievement.unlocked ? achievement.color : 'bg-muted'} rounded-full flex items-center justify-center transition-transform hover:scale-110`}
                      >
                        <Icon 
                          name={achievement.icon} 
                          className={achievement.unlocked ? 'text-white' : 'text-muted-foreground'} 
                          size={24} 
                        />
                      </div>
                      {achievement.unlocked && (
                        <Badge className="bg-primary text-white">
                          <Icon name="Check" size={14} />
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-sm min-h-[40px]">
                      {achievement.description}
                    </CardDescription>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">Прогресс</span>
                        <span className={`font-semibold ${achievement.unlocked ? 'text-primary' : 'text-muted-foreground'}`}>
                          {achievement.progress}%
                        </span>
                      </div>
                      <Progress 
                        value={achievement.progress} 
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                  {achievement.unlocked && (
                    <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-primary/10 rounded-full" />
                  )}
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name="TrendingUp" className="text-white" size={28} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold">Твой прогресс</h3>
                        <p className="text-muted-foreground">3 из 8 достижений разблокировано</p>
                      </div>
                    </div>
                    <div className="text-center sm:text-right">
                      <div className="text-3xl font-bold text-primary">37%</div>
                      <p className="text-sm text-muted-foreground">общий прогресс</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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