import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { teamMembers } from "@/data/siteData";
import { Award } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary">Наша команда</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Опытные мастера по ремонту
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Сертифицированные специалисты с многолетним опытом работы
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-white/90 text-foreground hover:bg-white gap-1">
                    <Award className="h-3 w-3" />
                    Сертификат
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5 text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
