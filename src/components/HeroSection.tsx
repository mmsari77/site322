import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-repair-service.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Ремонт бытовой техники в{" "}
              <span className="text-primary">Самаре</span>
              <br />
              с выездом за 60 минут
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
              Профессионально ремонтирую холодильники, стиральные и посудомоечные машины. 
              <span className="text-primary font-semibold"> Гарантия на все работы до 2-х лет</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-button hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => scrollToSection('contact-form')}
              >
                <Wrench className="mr-2 h-5 w-5" />
                Вызвать мастера
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="tel:+77771234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Позвонить: +7 (777) 123-45-67
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Бесплатная диагностика</div>
                  <div className="text-sm text-text-secondary">при ремонте</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Гарантия</div>
                  <div className="text-sm text-text-secondary">на запчасти</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Работаю</div>
                  <div className="text-sm text-text-secondary">без выходных</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;