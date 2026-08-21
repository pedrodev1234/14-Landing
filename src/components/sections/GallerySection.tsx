import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { images } from "@/data/siteData";
import { ZoomIn } from "lucide-react";

const galleryImages = [
  { src: images.inductionStove, title: "Индукционная панель", category: "Индукция" },
  { src: images.kitchenOven, title: "Встроенная панель", category: "Электрические" },
  { src: images.repairScrewdriver, title: "Ремонт на дому", category: "Ремонт" },
  { src: images.kitchenGranite, title: "Гранитная столешница", category: "Кухни" },
  { src: images.repairCircuit, title: "Ремонт платы", category: "Ремонт" },
  { src: images.kitchenInductionStylish, title: "Стильная панель", category: "Индукция" },
  { src: images.toolsToolbox, title: "Инструменты мастера", category: "Ремонт" },
  { src: images.kitchenWhiteOven, title: "Белая панель", category: "Электрические" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary">Галерея</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Наши работы в фотографиях
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Примеры отремонтированных варочных панелей и процесса работы
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <Card
                  className="group relative overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 aspect-square"
                  onClick={() => setSelected(idx)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                    <ZoomIn className="h-5 w-5 text-white mb-1" />
                    <p className="text-white text-sm font-medium">{img.title}</p>
                    <p className="text-white/70 text-xs">{img.category}</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background border-0">
                <img src={img.src} alt={img.title} className="w-full h-auto" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{img.title}</h3>
                  <p className="text-sm text-muted-foreground">{img.category}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
