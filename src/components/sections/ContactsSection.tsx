import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { company, images } from "@/data/siteData";

const ContactsSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  return (
    <section id="contacts" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary">Контакты</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Свяжитесь с нами
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Оставьте заявку — перезвоним в течение 10 минут
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <img
                src={images.callCenter}
                alt="Служба поддержки"
                className="w-full h-40 object-cover"
              />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <a href={company.phoneLink} className="font-semibold text-lg hover:text-primary transition-colors">
                      {company.phone}
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={company.emailLink} className="font-semibold hover:text-primary transition-colors">
                      {company.email}
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес</p>
                    <p className="font-semibold">{company.address}</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Часы работы</p>
                    <p className="font-semibold">{company.workingHours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 flex items-center gap-4">
                <MessageCircle className="h-10 w-10 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Нужна срочная консультация?</h3>
                  <p className="text-sm text-primary-foreground/80 mb-3">
                    Позвоните прямо сейчас — поможем определить поломку
                  </p>
                  <Button variant="secondary" size="sm" asChild>
                    <a href={company.phoneLink}>
                      <Phone className="h-4 w-4" />
                      Позвонить
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Форма обратной связи</CardTitle>
              <CardDescription>
                Заполните форму, и мы перезвоним вам для уточнения деталей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name" className="mb-2 block">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone" className="mb-2 block">Телефон</Label>
                    <Input id="contact-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-email" className="mb-2 block">Email (необязательно)</Label>
                  <Input id="contact-email" type="email" placeholder="example@mail.ru" />
                </div>
                <div>
                  <Label htmlFor="contact-message" className="mb-2 block">Сообщение</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Опишите проблему с варочной панелью..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
