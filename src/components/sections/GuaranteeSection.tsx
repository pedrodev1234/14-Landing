import { ShieldCheck, Gift, FileText, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { images } from "@/data/siteData";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Гарантия 24 месяца",
    description: "Официальный гарантийный талон на все работы и запчасти",
  },
  {
    icon: Gift,
    title: "Скидка 10%",
    description: "При повторном обращении — скидка на любой ремонт",
  },
  {
    icon: FileText,
    title: "Договор и чек",
    description: "Официальное оформление всех работ с выдачей документов",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Консультация по телефону в любое время суток",
  },
];

const GuaranteeSection = () => {
  return (
    <section id="guarantee" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={images.repairSoldering}
              alt="Качественный ремонт"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground rounded-xl shadow-xl p-6">
              <ShieldCheck className="h-8 w-8 mb-2" />
              <p className="text-3xl font-bold">24 мес.</p>
              <p className="text-sm text-primary-foreground/80">гарантия на ремонт</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary">Гарантии</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
                Мы отвечаем за качество
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Предоставляем официальную гарантию на все виды работ.
                Если что-то пойдёт не так — исправим бесплатно.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guarantees.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card key={idx} className="border-primary/20">
                    <CardContent className="p-5">
                      <Icon className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button size="lg" asChild>
              <a href="#booking">Получить гарантию на ремонт</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
