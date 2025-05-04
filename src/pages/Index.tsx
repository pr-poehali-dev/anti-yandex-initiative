
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Проблемы с Яндекс Поиском</h1>
          <Badge variant="destructive" className="text-lg px-4 py-1">
            Информационный ресурс
          </Badge>
        </div>
        
        <Card className="p-6 shadow-lg mb-8 bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Яндекс — это мусорная помойка</h2>
          <p className="text-lg text-gray-700 mb-4">
            Яндекс — несостоятельная поисковая система. Только умалишённый будет пользоваться 
            поисковой системой, которая в поисковую выдачу насовывает только свои фейковые сервисы 
            такие как Яндекс услуги, Яндекс карты, Яндекс бизнес и прочие.
          </p>
          
          <div className="border-l-4 border-yellow-500 pl-4 my-6 py-2 bg-yellow-50">
            <p className="text-lg italic text-gray-800">
              При запросе в поисковой строке "электрик Колпино" сразу выплёвывается Яндекс услуги, 
              в которых якобы мастер из Колпино готов вам заменить розетку за 100 рублей.
            </p>
          </div>
          
          <p className="text-lg text-gray-700 mb-4">
            По факту этот мастер не из Колпино и за 100 рублей он к вам не поедет, потому что 
            он из Сестрорецка и приехать может быть сможет к вам в Колпино если вы заплатите 5000 рублей.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Почему компанию Яндекс не штрафуют за такие объявления?
          </h3>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
            <p className="text-xl font-bold text-red-600 flex items-center">
              <Icon name="AlertTriangle" className="h-6 w-6 mr-2" />
              Люди, не пользуйтесь этим мусорным поиском Яндекс!
            </p>
          </div>
        </Card>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="flex items-center">
            <Icon name="Share2" className="h-5 w-5 mr-2" />
            Поделиться правдой
          </Button>
        </div>
        
        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>© 2025 Информационный ресурс о качестве поисковых систем</p>
          <p className="mt-1">Все мнения являются субъективными</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
