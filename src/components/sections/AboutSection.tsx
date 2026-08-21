import { Wrench, Phone, MapPin, CircleCheck as CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { company, images } from "@/data/siteData";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={images.repairScrewdriver}
              alt="Мастер ремонтирует варочную панель"
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -top-4 -right-4 hidden md:block">
              <Badge className="text-sm py-2 px-4 gap-1.5 shadow-lg">
                <CheckCircle2 className="h-4 w-4" />
                С 2014 года
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary">О компании</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
                Профессиональный сервис по ремонту варочных панелей
              </h2>
            </div>

            <p className="text-muted-foreground text-lg">
              {company.name} — это команда сертифицированных мастеров с опытом
              работы более {company.experience}. Мы специализируемся на ремонте
              варочных панелей всех типов и брендов. Наш сервис оснащён
              современным диагностическим оборудованием и оригинальными запчастями.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-primary/20">
                <CardContent className="p-5 flex items-start gap-3">
                  <Wrench className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Ремонт на месте</h3>
                    <p className="text-sm text-muted-foreground">
                      90% поломок устраняем у вас дома
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-5 flex items-start gap-3">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Быстрый выезд</h3>
                    <p className="text-sm text-muted-foreground">
                      Мастер приедет за 45 минут
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-5 flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Вся Москва</h3>
                    <p className="text-sm text-muted-foreground">
                      Выезжаем во все районы города
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-5 flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Оригинальные детали</h3>
                    <p className="text-sm text-muted-foreground">
                      Только запчасти от производителей
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" asChild>
              <a href="#booking">Заказать ремонт</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
