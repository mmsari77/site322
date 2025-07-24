import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Wrench } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navigationItems = [
    { id: "services", label: "Услуги" },
    { id: "pricing", label: "Цены" },
    { id: "process", label: "Как работаю" },
    { id: "about", label: "О мастере" },
    { id: "testimonials", label: "Отзывы" },
    { id: "contact-form", label: "Контакты" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 group"
          >
            <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
              <Wrench className="h-6 w-6" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-text-primary text-lg">РемонтТехники</div>
              <div className="text-sm text-text-secondary">Астана</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+77771234567"
              className="text-text-primary hover:text-primary transition-colors duration-200 font-medium"
            >
              +7 (777) 123-45-67
            </a>
            <Button 
              onClick={() => scrollToSection('contact-form')}
              className="shadow-button hover:shadow-lg transition-all duration-300"
            >
              <Phone className="mr-2 h-4 w-4" />
              Заказать звонок
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-primary hover:text-primary transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-card">
            <div className="p-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-border/50 space-y-3">
                <a 
                  href="tel:+77771234567"
                  className="flex items-center space-x-2 text-primary font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  <span>+7 (777) 123-45-67</span>
                </a>
                <Button 
                  onClick={() => scrollToSection('contact-form')}
                  className="w-full"
                >
                  Заказать звонок
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;