
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import ElectriciansList from "@/components/ElectriciansList";
import Header from "@/components/Header";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("Электрик колпино");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <section className="mb-8">
            <div className="relative mb-4">
              <div className="bg-white border-2 border-yellow-400 rounded-full flex items-center p-1 pl-4">
                <Input 
                  type="text"
                  placeholder="Найти электрика..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 focus-visible:ring-0 flex-1"
                />
                <Button className="rounded-full bg-yellow-400 hover:bg-yellow-500 h-10 w-10 p-0">
                  <Icon name="Search" className="h-5 w-5 text-gray-800" />
                </Button>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Найдены реальные электрики в Колпино</h1>
              <p className="text-gray-600">
                Мы показываем только проверенных специалистов с честными ценами
              </p>
            </div>
            
            <ElectriciansList />
          </section>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Честный поиск мастеров</p>
          <p className="text-sm text-gray-400">Реальные мастера. Честные отзывы. Прозрачные цены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
