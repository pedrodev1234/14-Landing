import { Zap, Flame, Square, CircuitBoard, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Flame,
  Square,
  CircuitBoard,
  Wrench,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary">Наши услуги</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Ремонтируем все типы варочных панелей
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Полный спектр услуг по ремонту и обслуживанию варочных панелей
            любых производителей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <Badge className="bg-white/90 text-foreground hover:bg-white">
                      {service.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                    <a href="#booking">Заказать ремонт</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
