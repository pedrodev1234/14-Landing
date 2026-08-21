import { useState } from "react";
import { Flame, Phone, Star, ArrowRight, CircleCheck as CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { company, images } from "@/data/siteData";

const CtaSection = () => {
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      toast({
        title: "Заявка принята!",
        description: "Мы перезвоним вам в течение 10 минут.",
      });
      setPhone("");
    }
  };

  return (
    <section id="cta" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden border-0 shadow-2xl">
          <div className="absolute inset-0">
            <img
              src={images.kitchenBlackAccents}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          </div>

          <CardContent className="relative p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-0 gap-1.5">
                  <Flame className="h-4 w-4" />
                  Не откладывайте ремонт
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Вызовите мастера прямо сейчас
                </h2>
                <p className="text-white/90 text-lg">
                  Бесплатная диагностика при заказе ремонта. Выезд по Москве
                  в течение 45 минут. Гарантия 24 месяца на все работы.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm">Без скрытых платежей</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-white" />
                    <span className="text-sm">8500+ отзывов</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="h-6 w-6" />
                  <a
                    href={company.phoneLink}
                    className="text-2xl font-bold hover:underline"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div>
                <Alert className="bg-white text-foreground border-0 shadow-lg">
                  <Flame className="h-4 w-4 text-primary" />
                  <AlertTitle className="font-bold text-lg">
                    Оставьте телефон — перезвоним за 10 минут
                  </AlertTitle>
                  <AlertDescription>
                    <form onSubmit={handleSubmit} className="space-y-3 mt-3">
                      <Input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="text-base"
                      />
                      <Button type="submit" size="lg" className="w-full">
                        Вызвать мастера
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь на обработку данных
                      </p>
                    </form>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CtaSection;
