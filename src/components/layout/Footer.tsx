import { Phone, Mail, MapPin, Clock, Flame, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { company, navLinks } from "@/data/siteData";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Flame className="h-5 w-5" />
              </span>
              {company.name}
            </div>
            <p className="text-sm text-background/70 mb-4">
              {company.tagline}. Профессиональный ремонт с гарантией 24 месяца.
              Выезд по Москве в день обращения.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={company.phoneLink}
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailLink}
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 text-primary" />
                {company.address}
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Clock className="h-4 w-4 text-primary" />
                {company.workingHours}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Рассылка</h4>
            <p className="text-sm text-background/70 mb-3">
              Полезные советы по уходу за варочной панелью
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © 2026 {company.name}. Все права защищены.
          </p>
          <p className="text-sm text-background/60">
            Сервис не является официальным сервисным центром производителей.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
