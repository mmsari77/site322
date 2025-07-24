import { Award, Clock, Users, Wrench } from "lucide-react";
import masterImage from "@/assets/master-portrait.jpg";

const achievements = [
  {
    icon: Clock,
    number: "12+",
    label: "лет опыта"
  },
  {
    icon: Users,
    number: "2000+",
    label: "довольных клиентов"
  },
  {
    icon: Wrench,
    number: "5000+",
    label: "успешных ремонтов"
  },
  {
    icon: Award,
    number: "98%",
    label: "положительных отзывов"
  }
];

const brands = [
  "Bosch", "Samsung", "LG", "Indesit", "Ariston", "Electrolux", "Whirlpool", "Beko"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Почему мне доверяют?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Честность, качество и профессионализм — основа моей работы уже более 12 лет.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-service-card-bg rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Меня зовут Александр
              </h3>
              
              <div className="space-y-4 text-text-secondary">
                <p className="leading-relaxed">
                  <strong className="text-text-primary">Опыт работы — 12 лет.</strong> Начинал в сервисном центре, 
                  последние 8 лет работаю самостоятельно. Специализируюсь на всех видах бытовой техники.
                </p>
                
                <p className="leading-relaxed">
                  <strong className="text-text-primary">Для меня главное — честность и качество.</strong> 
                  Я не навязываю лишних услуг, всегда объясняю, что именно сломалось, 
                  и предлагаю оптимальное решение проблемы.
                </p>
                
                <p className="leading-relaxed">
                  <strong className="text-text-primary">Всегда убираю за собой</strong> и оставляю рабочее место 
                  в чистоте. Уважаю ваш дом и ваше время.
                </p>
              </div>

              <div className="mt-8 p-6 bg-hero-bg rounded-xl">
                <h4 className="font-semibold text-text-primary mb-3">Работаю с брендами:</h4>
                <div className="flex flex-wrap gap-3">
                  {brands.map((brand, index) => (
                    <span 
                      key={index}
                      className="bg-background px-3 py-1 rounded-full text-sm text-text-secondary border border-border/50"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3"></div>
              <div className="relative bg-service-card-bg rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={masterImage}
                  alt="Мастер по ремонту техники"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            {achievement.number}
                          </div>
                          <div className="text-sm text-text-secondary">
                            {achievement.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;