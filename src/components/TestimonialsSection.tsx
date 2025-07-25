import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Анна Петрова",
    location: "р-н Есиль",
    service: "Ремонт стиральной машины Samsung",
    rating: 5,
    text: "Александр очень быстро приехал и сразу нашел проблему. Стиральная машина не сливала воду — оказался засор в помпе. Всё починил за час, убрал за собой. Работает уже 3 месяца без проблем. Рекомендую!"
  },
  {
    name: "Марат Толеубаев", 
    location: "р-н Алматы",
    service: "Ремонт холодильника LG",
    rating: 5,
    text: "Холодильник перестал морозить. Мастер приехал в тот же день, поменял терморегулятор. Честно сказал, что это было недорого. Спасибо за честность и качественную работу. Буду обращаться еще."
  },
  {
    name: "Светлана Иванова",
    location: "р-н Сарыарка", 
    service: "Ремонт посудомоечной машины Bosch",
    rating: 5,
    text: "Посудомойка стала плохо мыть посуду. Александр почистил все фильтры, заменил распылители. Объяснил, как правильно ухаживать за машиной. Очень доволна результатом и сервисом!"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Мне доверяют жители Самары. Читайте, что говорят о моей работе довольные клиенты.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-service-card-bg rounded-2xl p-8 shadow-card border border-border/50 relative">
                    <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                    
                    <div className="flex items-center mb-6">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <blockquote className="text-text-secondary text-lg leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-border/50">
                      <div>
                        <div className="font-semibold text-text-primary text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-text-secondary text-sm">
                          {testimonial.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-primary font-medium text-sm">
                          {testimonial.service}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>

          {/* Overall stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-service-card-bg rounded-xl p-6 shadow-card border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-text-secondary">Средняя оценка</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            
            <div className="text-center bg-service-card-bg rounded-xl p-6 shadow-card border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-text-secondary">Довольных клиентов</div>
            </div>
            
            <div className="text-center bg-service-card-bg rounded-xl p-6 shadow-card border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-text-secondary">Рекомендуют друзьям</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;