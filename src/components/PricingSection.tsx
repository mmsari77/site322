import { CheckCircle, AlertCircle } from "lucide-react";

const pricingItems = [
  {
    service: "Выезд мастера",
    price: "0 ₸",
    description: "Бесплатный приезд в любую точку Астаны"
  },
  {
    service: "Диагностика",
    price: "3 000 ₸",
    description: "Только в случае отказа от ремонта"
  },
  {
    service: "Ремонт стиральной машины",
    price: "от 6 000 ₸",
    description: "Стоимость работы, запчасти оплачиваются отдельно"
  },
  {
    service: "Ремонт холодильника", 
    price: "от 8 000 ₸",
    description: "Стоимость работы, запчасти оплачиваются отдельно"
  },
  {
    service: "Ремонт посудомоечной машины",
    price: "от 7 000 ₸", 
    description: "Стоимость работы, запчасти оплачиваются отдельно"
  },
  {
    service: "Ремонт электроплиты",
    price: "от 5 000 ₸",
    description: "Стоимость работы, запчасти оплачиваются отдельно"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Стоимость услуг
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Честные и прозрачные цены. Никаких скрытых доплат. 
            Точная стоимость озвучивается после диагностики.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-service-card-bg rounded-2xl shadow-card border border-border/50 overflow-hidden">
            <div className="divide-y divide-border/50">
              {pricingItems.map((item, index) => (
                <div key={index} className="p-6 hover:bg-hero-bg/50 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {item.service}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-2xl font-bold text-primary">
                        {item.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-text-primary mb-2">Важная информация:</h4>
                <ul className="text-text-secondary space-y-1 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                    Точная стоимость определяется на месте после диагностики
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                    Стоимость запчастей зависит от производителя и модели
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                    Диагностика бесплатна при согласии на ремонт
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                    Гарантия на выполненные работы - до 2 лет
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;