import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { faqItems, images } from "@/data/siteData";
import { Circle as HelpCircle, MessageCircleQuestionMark as MessageCircleQuestion } from "lucide-react";

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <Badge variant="secondary">Вопросы и ответы</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
                Часто задаваемые вопросы
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Собрали ответы на самые популярные вопросы о ремонте варочных панелей
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={images.repairCircuit}
                alt="Ремонт электроники"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <div className="text-white">
                  <HelpCircle className="h-8 w-8 mb-2" />
                  <p className="font-semibold text-lg">Не нашли ответ?</p>
                  <p className="text-sm text-white/80">Позвоните нам — бесплатно проконсультируем</p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="outline" asChild>
              <a href="#contacts">
                <MessageCircleQuestion className="h-4 w-4" />
                Задать вопрос
              </a>
            </Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item) => (
                  <AccordionItem key={item.id} value={`item-${item.id}`}>
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
