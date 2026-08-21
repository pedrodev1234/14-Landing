import { Power, Thermometer, TriangleAlert as AlertTriangle, TouchpadOff, ToggleLeft, CircleAlert as AlertCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { problemTypes } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Power,
  Thermometer,
  AlertTriangle,
  TouchpadOff,
  ToggleLeft,
  AlertCircle,
};

const ProblemsSection = () => {
  return (
    <section id="problems" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary">Поломки</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Частые неисправности варочных панелей
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Узнайте свою поломку — наведите на карточку для подробностей
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemTypes.map((problem) => {
            const Icon = iconMap[problem.icon] || AlertCircle;
            return (
              <HoverCard key={problem.id}>
                <HoverCardTrigger asChild>
                  <Card className="group cursor-help hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 group-hover:bg-destructive group-hover:text-destructive-foreground transition-all duration-300 shrink-0">
                        <Icon className="h-6 w-6 text-destructive group-hover:text-destructive-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{problem.title}</h3>
                        <p className="text-sm text-muted-foreground">{problem.description}</p>
                        <div className="flex items-center gap-1 text-xs text-primary mt-2 font-medium">
                          Подробнее <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Icon className="h-4 w-4 text-destructive" />
                      {problem.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Эта поломка часто возникает из-за износа компонентов или
                      перепадов напряжения. Наш мастер проведёт бесплатную
                      диагностику и определит точную причину.
                    </p>
                    <Button size="sm" className="w-full mt-2" asChild>
                      <a href="#booking">Записаться на ремонт</a>
                    </Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
