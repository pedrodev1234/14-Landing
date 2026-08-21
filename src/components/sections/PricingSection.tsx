import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricing } from "@/data/siteData";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary">Прайс-лист</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Стоимость ремонта варочных панелей
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Прозрачные цены без скрытых платежей. Оплата только после ремонта.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/5 hover:bg-primary/5">
                <TableHead className="text-base font-semibold">Услуга</TableHead>
                <TableHead className="text-base font-semibold text-right">Стоимость</TableHead>
                <TableHead className="text-base font-semibold text-right hidden sm:table-cell">Время</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricing.map((item, idx) => (
                <TableRow key={idx} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{item.service}</TableCell>
                  <TableCell className="text-right font-semibold text-primary">{item.price}</TableCell>
                  <TableCell className="text-right text-muted-foreground hidden sm:table-cell">{item.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <div className="text-center mt-8">
          <Button size="lg" asChild>
            <a href="#booking">Записаться на ремонт</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
