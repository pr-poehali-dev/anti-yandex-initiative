
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

interface Electrician {
  id: number;
  name: string;
  price: string;
  priceType: string;
  reviewsCount: number;
  location: string;
  experience: string;
  specialization: string;
  image: string;
  verified: boolean;
}

const ElectriciansList = () => {
  const electricians: Electrician[] = [
    {
      id: 1,
      name: "Константин М.",
      price: "от 300 ₽",
      priceType: "за услугу",
      reviewsCount: 266,
      location: "Колпино",
      experience: "Более 5 лет опыта",
      specialization: "Электромонтажные работы",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      verified: true
    },
    {
      id: 2,
      name: "Александр В.",
      price: "от 250 ₽",
      priceType: "за услугу",
      reviewsCount: 189,
      location: "Колпино",
      experience: "Более 7 лет опыта",
      specialization: "Монтаж электропроводки",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      verified: true
    },
    {
      id: 3,
      name: "Дмитрий К.",
      price: "от 350 ₽",
      priceType: "за точку",
      reviewsCount: 127,
      location: "Колпино",
      experience: "Более 10 лет опыта",
      specialization: "Установка электроприборов",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      verified: true
    },
    {
      id: 4,
      name: "Михаил Т.",
      price: "от 400 ₽",
      priceType: "за услугу",
      reviewsCount: 93,
      location: "Колпино",
      experience: "Более 8 лет опыта",
      specialization: "Ремонт электрооборудования",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      verified: true
    }
  ];

  return (
    <div className="space-y-4">
      {electricians.map((electrician) => (
        <Card key={electrician.id} className="overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16 rounded-lg border border-gray-200">
                <img src={electrician.image} alt={electrician.name} />
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h3 className="text-lg font-medium text-blue-400">{electrician.name}</h3>
                  {electrician.verified && (
                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                      <Icon name="CheckCircle" className="h-3 w-3 mr-1" />
                      Проверен
                    </Badge>
                  )}
                </div>
                
                <div className="text-2xl font-bold mb-1">
                  {electrician.price} {electrician.priceType}
                </div>
                
                <div className="flex items-center text-gray-500 text-sm gap-2 mb-2">
                  <span>{electrician.reviewsCount} отзывов</span>
                  <span>•</span>
                  <span>{electrician.location}</span>
                  <span>•</span>
                  <span>{electrician.experience}</span>
                </div>
                
                <div>
                  <Badge variant="outline" className="text-sm bg-gray-100">
                    {electrician.specialization}
                  </Badge>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  Позвонить
                </Button>
                <Button variant="outline">
                  <Icon name="MessageSquare" className="h-4 w-4 mr-2" />
                  Написать
                </Button>
              </div>
            </div>
          </div>
          <Separator />
          <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">Высокий рейтинг качества</span>
            </div>
            <Button variant="link" className="text-blue-500 p-0">
              Смотреть отзывы
            </Button>
          </div>
        </Card>
      ))}
      
      <div className="text-center pt-4">
        <Button className="bg-blue-500 hover:bg-blue-600">
          Показать больше электриков
        </Button>
      </div>
    </div>
  );
};

export default ElectriciansList;
