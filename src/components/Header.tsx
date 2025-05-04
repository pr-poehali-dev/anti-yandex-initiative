
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon name="Zap" className="h-6 w-6 text-yellow-400 mr-2" />
            <span className="text-xl font-bold">ЧестныйЭлектрик</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-yellow-400 transition">Главная</a>
            <a href="#" className="hover:text-yellow-400 transition">Услуги</a>
            <a href="#" className="hover:text-yellow-400 transition">Как это работает</a>
            <a href="#" className="hover:text-yellow-400 transition">Отзывы</a>
          </nav>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
            <Icon name="Phone" className="h-4 w-4 mr-2" />
            Стать мастером
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
