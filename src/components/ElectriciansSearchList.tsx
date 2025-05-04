
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

interface Electrician {
  id: number;
  name: string;
  price: string;
  priceUnit: string;
  reviewsCount: number;
  location: string;
  experience: string;
  specialization: string;
  imageSrc: string;
}

const ElectriciansSearchList = () => {
  const electricians: Electrician[] = [
    {
      id: 1,
      name: "Константин М.",
      price: "от 70 ₽",
      priceUnit: "за метр",
      reviewsCount: 266,
      location: "Колпино",
      experience: "Более 5 лет опыта",
      specialization: "Прокладка кабеля",
      imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      name: "Юрий Д.",
      price: "от 110 ₽",
      priceUnit: "за услугу",
      reviewsCount: 6,
      location: "Колпино",
      experience: "Более 10 лет опыта",
      specialization: "Прокладка кабеля",
      imageSrc: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      name: "Константин Кузнецов",
      price: "50 ₽",
      priceUnit: "за метр",
      reviewsCount: 181,
      location: "Колпино",
      experience: "Более 10 лет опыта",
      specialization: "Прокладка кабеля",
      imageSrc: "https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 4,
      name: "Антон Тимофеев",
      price: "80 ₽",
      priceUnit: "за метр",
      reviewsCount: 7,
      location: "Колпино",
      experience: "Более 10 лет опыта",
      specialization: "Прокладка кабеля",
      imageSrc: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <div className="space-y-px">
      <div className="pt-2 pb-4">
        <h1 className="text-purple-400 text-xl font-normal">
          Электрик в Колпино: 150 электромонтажников с отзывами и ценами на Яндекс Услугах.
        </h1>
        <div className="flex items-center mt-1">
          <span className="bg-yellow-400 h-6 w-6 rounded-full flex items-center justify-center mr-2 text-sm">🔔</span>
          <span className="text-white">uslugi.yandex.ru › 26081-kolpino/c...</span>
        </div>
        <p className="text-gray-300 text-sm mt-2">
          Электрик в Колпино, онлайн запись — выбирайте лучших специалистов и организации по ценам...
        </p>
      </div>
      
      {electricians.map((electrician) => (
        <div key={electrician.id} className="flex py-4 border-t border-gray-800">
          <div className="flex-1">
            <h3 className="text-blue-400 text-lg font-medium">{electrician.name}</h3>
            <div className="font-bold text-white text-lg">{electrician.price} {electrician.priceUnit}</div>
            <div className="text-gray-400 text-sm">
              {electrician.reviewsCount} отзывов • {electrician.location} • {electrician.experience} • {electrician.specialization}
            </div>
          </div>
          
          <Avatar className="h-16 w-16 rounded-full ml-4">
            <img src={electrician.imageSrc} alt={electrician.name} />
          </Avatar>
        </div>
      ))}
    </div>
  );
};

export default ElectriciansSearchList;
