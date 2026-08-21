import { useState, useEffect } from "react";
import { Flame, Phone, ShieldCheck, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { company, images, stats } from "@/data/siteData";

const HeroSection = () => {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const { toast } = useToast();

  const handleQuickCall = () => {
    toast({
      title: "Заявка принята!",
      description: "Мы перезвоним вам в течение 10 минут.",
    });
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-background to-orange-50/50 pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-orange-400 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-float-up">
            <Badge variant="default" className="text-sm py-1.5 px-4 gap-2">
              <Flame className="h-4 w-4" />
              Ремонт варочных панелей в Москве
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Ремонт варочных панелей
              <span className="block text-primary mt-2">с выездом за 45 минут</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Профессиональный ремонт индукционных, электрических и газовых
              варочных панелей всех брендов. Гарантия 24 месяца. Бесплатная
              диагностика при заказе ремонта.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#booking">
                  Вызвать мастера
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={handleQuickCall}>
                <Phone className="h-4 w-4" />
                Быстрая заявка
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Гарантия 24 мес.</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Выезд за 45 мин.</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.inductionCooking}
                alt="Индукционная варочная панель"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-4 border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Flame className="h-6 w-6 text-primary animate-flame" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{company.repairsDone}</p>
                  <p className="text-sm text-muted-foreground">ремонтов выполнено</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center p-4 rounded-xl bg-card border border-border transition-all duration-500 ${
                animateStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
