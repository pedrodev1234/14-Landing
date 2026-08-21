import { Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { brands, images } from "@/data/siteData";

const BrandsSection = () => {
  return (
    <section id="brands" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1 space-y-4">
            <Badge variant="secondary">Бренды</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Ремонтируем все известные бренды
            </h2>
            <p className="text-muted-foreground text-lg">
              Наши мастера имеют опыт работы с варочными панелями всех
              крупнейших производителей. У нас есть оригинальные запчасти
              для большинства брендов.
            </p>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={images.kitchenWhiteOven}
                alt="Кухня с варочной панелью"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {brands.map((brand) => (
                <Card
                  key={brand.id}
                  className="group hover:shadow-md transition-all hover:border-primary/40 cursor-default"
                >
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center min-h-[80px]">
                    <Flame className="h-4 w-4 text-primary/40 group-hover:text-primary transition-colors mb-1" />
                    <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {brand.name}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
