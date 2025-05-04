
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ElectricShopsList from "@/components/ElectricShopsList";
import ElectriciansSearchList from "@/components/ElectriciansSearchList";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("Электрик колпино");

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1">
        <div className="pt-6 px-4">
          <div className="relative mb-6">
            <div className="bg-gray-800 border-2 border-yellow-400 rounded-full flex items-center p-1 pl-4">
              <Input 
                type="text"
                placeholder="Найти электрика..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 focus-visible:ring-0 flex-1 bg-transparent text-white"
              />
              <Button variant="ghost" className="rounded-full text-gray-400">
                ✕
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="shops" className="w-full">
            <TabsList className="hidden">
              <TabsTrigger value="shops">Магазины</TabsTrigger>
              <TabsTrigger value="electricians">Электрики</TabsTrigger>
            </TabsList>
            
            <TabsContent value="shops" className="mt-0">
              <ElectricShopsList />
            </TabsContent>
            
            <TabsContent value="electricians" className="mt-0">
              <ElectriciansSearchList />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <div className="fixed bottom-0 w-full bg-black border-t border-gray-800 p-2 flex justify-center space-x-12">
        <button className="flex flex-col items-center text-gray-400">
          <div className="w-6 h-6 mb-1 flex items-center justify-center">
            ↻
          </div>
          <span className="text-xs">Обновить</span>
        </button>
        
        <button className="flex flex-col items-center text-gray-400">
          <div className="w-6 h-6 mb-1 flex items-center justify-center">
            ○
          </div>
          <span className="text-xs">Главная</span>
        </button>
        
        <button className="flex flex-col items-center text-gray-400">
          <div className="w-6 h-6 mb-1 flex items-center justify-center">
            ↩
          </div>
          <span className="text-xs">Назад</span>
        </button>
      </div>
    </div>
  );
};

export default Index;
