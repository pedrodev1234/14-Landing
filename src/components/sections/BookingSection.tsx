import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Clock, CircleCheck as CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { timeSlots, repairTypes, company } from "@/data/siteData";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const BookingSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [repairType, setRepairType] = useState<string>("");
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33);
  const { toast } = useToast();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      setProgress((step + 1) * 33);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
      setProgress((step - 1) * 33);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Заявка забронирована!",
      description: `Мастер приедет ${date ? format(date, "d MMMM", { locale: ru }) : ""} в слот ${selectedSlot}. Мы перезвоним для подтверждения.`,
    });
    setStep(1);
    setProgress(33);
    setDate(undefined);
    setSelectedSlot("");
    setRepairType("");
  };

  const canProceedStep1 = date && selectedSlot;
  const canProceedStep2 = repairType;

  return (
    <section id="booking" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary">Бронирование</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Запишитесь на ремонт онлайн
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Выберите удобную дату и время — мастер приедет с инструментами и запчастями
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Бронирование ремонта
                </CardTitle>
                <CardDescription className="mt-1">
                  Шаг {step} из 3 — заполните данные для записи
                </CardDescription>
              </div>
              <div className="flex gap-2 text-sm">
                <span className={step >= 1 ? "text-primary font-medium" : "text-muted-foreground"}>Дата</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className={step >= 2 ? "text-primary font-medium" : "text-muted-foreground"}>Тип</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className={step >= 3 ? "text-primary font-medium" : "text-muted-foreground"}>Контакты</span>
              </div>
            </div>
            <Progress value={progress} className="mt-4" />
          </CardHeader>

          <CardContent>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold mb-3 block">Выберите дату</Label>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      locale={ru}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      className="rounded-md border"
                    />
                  </div>
                </div>

                {date && (
                  <div>
                    <Label className="text-base font-semibold mb-3 block flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Выберите время — {format(date, "d MMMM yyyy", { locale: ru })}
                    </Label>
                    <RadioGroup value={selectedSlot} onValueChange={setSelectedSlot}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {timeSlots.map((slot) => (
                          <div key={slot}>
                            <RadioGroupItem value={slot} id={slot} className="peer sr-only" />
                            <Label
                              htmlFor={slot}
                              className="flex items-center justify-center px-4 py-3 rounded-lg border-2 cursor-pointer text-sm font-medium transition-all hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                            >
                              {slot}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold mb-3 block">Тип варочной панели</Label>
                  <RadioGroup value={repairType} onValueChange={setRepairType}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {repairTypes.map((type) => (
                        <div key={type.id}>
                          <RadioGroupItem value={type.id} id={type.id} className="peer sr-only" />
                          <Label
                            htmlFor={type.id}
                            className="flex items-center justify-center px-4 py-4 rounded-lg border-2 cursor-pointer text-sm font-medium transition-all hover:border-primary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                          >
                            {type.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="brand" className="text-base font-semibold mb-2 block">Бренд панели</Label>
                  <Select>
                    <SelectTrigger id="brand">
                      <SelectValue placeholder="Выберите бренд" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bosch">Bosch</SelectItem>
                      <SelectItem value="samsung">Samsung</SelectItem>
                      <SelectItem value="lg">LG</SelectItem>
                      <SelectItem value="electrolux">Electrolux</SelectItem>
                      <SelectItem value="gorenje">Gorenje</SelectItem>
                      <SelectItem value="hansa">Hansa</SelectItem>
                      <SelectItem value="other">Другой</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address" className="mb-2 block">Адрес</Label>
                  <Input id="address" placeholder="Москва, ул. Примерная, д. 1, кв. 1" />
                </div>
                <div>
                  <Label htmlFor="problem" className="mb-2 block">Опишите проблему</Label>
                  <Textarea id="problem" placeholder="Например: не включается одна конфорка, панель индукционная..." />
                </div>

                <div className="bg-primary/5 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">
                      Дата: {date ? format(date, "d MMMM", { locale: ru }) : "не выбрана"}
                    </p>
                    <p className="text-muted-foreground">Время: {selectedSlot || "не выбрано"}</p>
                    <p className="text-muted-foreground">
                      Тип: {repairTypes.find((t) => t.id === repairType)?.label || "не выбран"}
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Диагностика бесплатно. Стоимость ремонта согласуется с мастером.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-4 border-t">
              <Button variant="outline" onClick={handlePrev} disabled={step === 1}>
                <ChevronLeft className="h-4 w-4" />
                Назад
              </Button>
              {step < 3 ? (
                <Button onClick={handleNext} disabled={(step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2)}>
                  Далее
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit}>
                  <CheckCircle2 className="h-4 w-4" />
                  Забронировать
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Или позвоните нам:{" "}
          <a href={company.phoneLink} className="text-primary font-semibold hover:underline">
            {company.phone}
          </a>
        </p>
      </div>
    </section>
  );
};

export default BookingSection;
