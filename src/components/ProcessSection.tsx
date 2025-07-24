import { Phone, Search, Wrench, Shield } from "lucide-react";

const processSteps = [
  {
    icon: Phone,
    number: "01",
    title: "Звонок или заявка",
    description: "Вы связываетесь со мной по телефону или оставляете заявку на сайте. Обсуждаем проблему и договариваемся о времени визита."
  },
  {
    icon: Search,
    number: "02", 
    title: "Диагностика",
    description: "Приезжаю в удобное для вас время, провожу тщательную диагностику и определяю причину поломки. Озвучиваю точную стоимость ремонта."
  },
  {
    icon: Wrench,
    number: "03",
    title: "Ремонт",
    description: "После вашего согласия выполняю ремонт качественными запчастями. Все работы провожу аккуратно, убираю за собой."
  },
  {
    icon: Shield,
    number: "04",
    title: "Гарантия",
    description: "Вы принимаете работу, проверяете исправность техники. Выдаю гарантийный талон на выполненные работы."
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Как я работаю?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Простой и понятный процесс ремонта. От заявки до гарантии — всё прозрачно и честно.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary/20 z-0">
                    <div className="absolute top-0 left-0 h-full bg-primary w-full animate-pulse"></div>
                  </div>
                )}
                
                <div className="relative z-10 bg-service-card-bg rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-border/50 text-center">
                  <div className="relative mb-6">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-button">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary/10 text-primary text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Среднее время ремонта
            </h3>
            <p className="text-text-secondary mb-4">
              Большинство поломок устраняю за одно посещение. Сложные случаи — максимум 2-3 дня с учетом заказа запчастей.
            </p>
            <div className="flex justify-center items-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">85%</div>
                <div className="text-sm text-text-secondary">ремонтов за 1 визит</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">60 мин</div>
                <div className="text-sm text-text-secondary">среднее время приезда</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;