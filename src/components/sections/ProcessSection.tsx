import { LoaderCircle as NumberCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { processSteps } from "@/data/siteData";

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary">Как мы работаем</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Этапы ремонта варочной панели
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Простой и прозрачный процесс от заявки до гарантии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div key={step.id} className="relative">
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
              )}
              <Card className="relative hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
