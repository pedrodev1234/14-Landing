import { Award, ShieldCheck, Clock, PackageCheck, TrendingUp, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { advantages } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Award,
  ShieldCheck,
  Clock,
  PackageCheck,
  TrendingUp,
  BadgeCheck,
};

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary">Почему мы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Преимущества нашего сервиса
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Мы делаем ремонт быстро, качественно и с гарантией
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv) => {
            const Icon = iconMap[adv.icon] || Award;
            return (
              <Card
                key={adv.id}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{adv.title}</h3>
                      <p className="text-sm text-muted-foreground">{adv.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
