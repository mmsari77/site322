import { Refrigerator, Waves, Utensils, Zap, Microwave, AirVent, Coffee, Thermometer } from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Стиральные машины",
    problems: ["Не сливает воду", "Не греет воду", "Шумит при отжиме", "Не включается"]
  },
  {
    icon: Refrigerator,
    title: "Холодильники",
    problems: ["Не морозит", "Течет вода", "Шумит компрессор", "Не включается"]
  },
  {
    icon: Utensils,
    title: "Посудомоечные машины",
    problems: ["Не сливает", "Плохо моет", "Не включается", "Протекает"]
  },
  {
    icon: Zap,
    title: "Электроплиты",
    problems: ["Не греет конфорка", "Не работает духовка", "Трещит при включении", "Перегорают предохранители"]
  },
  {
    icon: Microwave,
    title: "Микроволновки",
    problems: ["Не греет", "Искрит внутри", "Не включается", "Не вращается тарелка"]
  },
  {
    icon: AirVent,
    title: "Вытяжки",
    problems: ["Слабая тяга", "Шумит мотор", "Не включается", "Не работает подсветка"]
  },
  {
    icon: Coffee,
    title: "Кофемашины",
    problems: ["Не варит кофе", "Течет вода", "Забились трубки", "Ошибка на дисплее"]
  },
  {
    icon: Thermometer,
    title: "Водонагреватели",
    problems: ["Не греет воду", "Течет бак", "Выбивает автомат", "Слабый напор"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Что я ремонтирую?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Специализируюсь на ремонте всех видов бытовой техники. Работаю с брендами: 
            Bosch, Samsung, LG, Indesit, Ariston, Electrolux и многими другими.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-service-card-bg rounded-xl p-6 shadow-card hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 border border-border/50"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {service.problems.map((problem, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;