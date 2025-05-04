
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ElectricShop {
  id: number;
  name: string;
  rating: string | null;
  reviewsCount: string | null;
  status: string;
  workingHours: string;
  address: string;
  additionalInfo?: string;
  imageSrc: string;
}

const ElectricShopsList = () => {
  const shops: ElectricShop[] = [
    {
      id: 1,
      name: "Электрик",
      rating: "4.5",
      reviewsCount: "134",
      status: "закрыто до завтра",
      workingHours: "",
      address: "просп. Ленина, 29",
      imageSrc: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Кьюэс",
      rating: null,
      reviewsCount: null,
      status: "",
      workingHours: "до 19:00",
      address: "бул. Трудящихся, 18, корп. 5 (офис 69)",
      additionalInfo: "Электрика в загородных домах: 32500 ₽",
      imageSrc: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "ЭТМ",
      rating: "4.9",
      reviewsCount: "113",
      status: "закрыто до завтра",
      workingHours: "",
      address: "г. Тельмана, посёлок Тельмана, 25",
      imageSrc: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Площадь",
      rating: "4.9",
      reviewsCount: "64",
      status: "",
      workingHours: "до 19:00",
      address: "Тверская ул., 36/9 (этаж цокольный)",
      additionalInfo: "Бесплатная доставка",
      imageSrc: "https://images.unsplash.com/photo-1558002038-10058d1700e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Магазин № 45",
      rating: "4.9",
      reviewsCount: "484",
      status: "",
      workingHours: "до 18:00",
      address: "ул. Веры Слуцкой, 34",
      imageSrc: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      name: "Электростандарт",
      rating: null,
      reviewsCount: null,
      status: "закрыто до завтра",
      workingHours: "",
      address: "Финляндская ул., 16, корп. 1",
      imageSrc: "https://images.unsplash.com/photo-1558002038-ed9995ba6615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 7,
      name: "ЭлектроСтройАвтоматика",
      rating: null,
      reviewsCount: null,
      status: "закрыто до завтра",
      workingHours: "",
      address: "",
      imageSrc: "https://images.unsplash.com/photo-1621905252481-1c49e8abd1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="space-y-1">
      {shops.map((shop) => (
        <div key={shop.id} className="flex items-center p-3 border-b border-gray-800">
          <div className="h-20 w-20 bg-gray-800 rounded-lg overflow-hidden mr-4 flex-shrink-0">
            <img src={shop.imageSrc} alt={shop.name} className="h-full w-full object-cover" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-medium">{shop.name}</h3>
            {shop.rating && (
              <div className="flex items-center space-x-2 mb-1">
                <span className="bg-green-500 text-white px-2 py-0.5 rounded text-sm">{shop.rating}</span>
                <span className="text-gray-400 text-sm">{shop.reviewsCount} отзыва</span>
                <span className="text-red-500 text-sm">{shop.status}</span>
              </div>
            )}
            {!shop.rating && shop.status && (
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-gray-400 text-sm">нет отзывов</span>
                <span className="text-red-500 text-sm">{shop.status}</span>
              </div>
            )}
            {!shop.rating && !shop.status && (
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-gray-400 text-sm">нет отзывов</span>
                <span className="text-gray-400 text-sm">{shop.workingHours}</span>
              </div>
            )}
            <p className="text-gray-300 text-sm">{shop.address}</p>
            {shop.additionalInfo && (
              <p className="text-gray-400 text-sm">{shop.additionalInfo}</p>
            )}
          </div>
          
          <Button variant="ghost" className="h-12 w-12 rounded-full">
            <Icon name="Phone" className="h-6 w-6 text-gray-400" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ElectricShopsList;
