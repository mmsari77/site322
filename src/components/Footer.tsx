import { Phone, MessageCircle, Mail, Clock, MapPin, Wrench } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-text-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-lg">РемонтТехники</div>
                <div className="text-sm opacity-80">Самара</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Профессиональный ремонт бытовой техники с выездом на дом. 
              12 лет опыта, честные цены, гарантия качества.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
                >
                  Услуги
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
                >
                  Цены
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
                >
                  О мастере
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
                >
                  Отзывы
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+77771234567"
                className="flex items-center space-x-2 opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>+7 (777) 123-45-67</span>
              </a>
              
              <a 
                href="https://wa.me/77771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              
              <a 
                href="mailto:master@repair-astana.kz"
                className="flex items-center space-x-2 opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>master@repair-samara.ru</span>
              </a>
            </div>
          </div>

          {/* Working Hours & Location */}
          <div>
            <h3 className="font-semibold mb-4">График работы</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 opacity-80">
                <Clock className="h-4 w-4" />
                <div>
                  <div>Пн-Вс: 8:00 - 22:00</div>
                  <div className="text-xs opacity-60">Без выходных</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 opacity-80">
                <MapPin className="h-4 w-4" />
                <div>
                  <div>Самара и пригород</div>
                  <div className="text-xs opacity-60">Выезд по всему городу</div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <div className="text-primary font-semibold text-sm">
                Экстренный выезд 24/7
              </div>
              <div className="text-xs opacity-80">
                Для критичных поломок
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {currentYear} РемонтТехники Самара. Все права защищены.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200">
                Политика конфиденциальности
              </button>
              <button className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200">
                Условия использования
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;